import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import HomeScreen from "./pages/HomeScreen.js";
import Success from "./pages/Success";
import Fail from "./pages/Fail";
import FlashcardScreen from "./pages/FlashcardScreen";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="flashcard" element={<FlashcardScreen />} />
      <Route path="success" element={<Success />} />
      <Route path="fail" element={<Fail />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector(".root")
);
