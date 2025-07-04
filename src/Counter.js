import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
      <button onClick={handlePlus}>カウントアップ</button>
      <button onClick={handleMinus}>カウントダウン</button>
      <p>{count}回、クリックされました。</p>
    </div>
  );
}
