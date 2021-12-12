import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import HomeScreen from "./pages/HomeScreen.js";
import Success from "./pages/Success";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="success" element={<Success />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector(".root")
);
