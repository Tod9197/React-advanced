import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinus = () => {
    setCount((prev) => (prev > -10 ? prev - 1 : -10));
  };

  return (
    <>
      <button type="button" onClick={handlePlus}>
        プラスする
      </button>
      <button type="button" onClick={handleMinus}>
        マイナスする
      </button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}
