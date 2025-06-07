import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import RecoilCounter from "./RecoilCounter";
import RecoilTodo from "./RecoilTodo";
import Counter from "./Counter";
import RecoilTodoUp from "./RecoliTodoUp";
import HookMemo from "./HookMemo";
import HookTransition from "./HookTransition";
import HookDeferred from "./HookDeffered";
import HookCustom from "./HookCustom";
import { RouterProvider } from "react-router-dom";
import routerBasic from "./routerBasic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerBasic} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
