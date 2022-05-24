import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/app";
//import HomePage from "./pages/HomePage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes></Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
