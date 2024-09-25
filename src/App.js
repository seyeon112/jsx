import React from "react";
import Home from "./pages/home/Home";
import HomeForm from "./pages/home/HomeForm";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import Homeicon from "./pages/home/Homeicon";


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    {/* <Home/> */}
    <Homeicon />
    </ThemeProvider>
    </>
  );
}

export default App;
