import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Body } from "./components/body";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>
);
