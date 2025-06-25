import { useReducer } from "react";
import { useDebugValue } from "react";

export default function useCounter(init, step) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "update":
          return { count: state.count + action.step };
        case "reset":
          return { count: action.init };
        default:
          return state;
      }
    },
    {
      count: init,
    }
  );
  useDebugValue(state.count >= 20 ? "20 over" : "20 less");

  const handleUp = () => dispatch({ type: "update", step });
  const handleDown = () => dispatch({ type: "update", step: -step });
  const handleReset = () => dispatch({ type: "reset", init });
  return [state, handleUp, handleDown, handleReset];
}
