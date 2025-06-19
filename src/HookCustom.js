import useCounter from "./useCounter";

export default function HookCustom() {
  const [state, handleUp, handleDown, handleReset] = useCounter(0, 1);
  return (
    <>
      <button onClick={handleUp}>プラス</button>
      <button onClick={handleDown}>マイナス</button>
      <button onClick={handleReset}>リセットする</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}
