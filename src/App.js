import React from "react";
import Home from "./pages/home/Home";
import HomeForm from "./pages/home/HomeForm";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import Homeicon from "./pages/home/Homeicon";
import PowButton from "./pages/home/PowButton";
import CharContainer from "./docs/day04/context/basic/CharContainer";
import ParentContainer from "./docs/day04/context/basic/ParentContainer";


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParentContainer/>
    </ThemeProvider>
    </>
  );
}

export default App;
