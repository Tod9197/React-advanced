import { useRecoilState, useResetRecoilState } from "recoil";
import { counterAtom } from "./store/atom";

export default function RecoilCounter() {
  const [counter, setCounter] = useRecoilState(counterAtom);
  const resetCounter = useResetRecoilState(counterAtom);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウントプラス</button>
      <button onClick={() => resetCounter()}>リセット</button>
      <p>{counter}回、クリックされました。</p>
    </>
  );
}
