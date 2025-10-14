import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Page1 from "./Components/Layout/Page1";
import Page2 from "./Components/Layout/Page2";
import Page3 from "./Components/Layout/Page3";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
  `

function App() {
  return (
    <BrowserRouter basename="/Portifolio">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Page1 />} />
          <Route path="/home" element={<Page1 />} />
          <Route path="/portifolio" element={<Page2 />} />
          <Route path="/about" element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
