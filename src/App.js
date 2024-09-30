import React from "react";
import Home from "./pages/home/Home";
import HomeForm from "./pages/home/HomeForm";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import Homeicon from "./pages/home/Homeicon";
import PowButton from "./pages/home/PowButton";
import CharContainer from "./docs/day04/context/basic/CharContainer";
import ParentContainer from "./docs/day04/context/basic/normal/ParentContainer";
import AnimalsContainer from "./docs/day04/context/basic/expert/AnimalsContainer";
import CountContainer from "./docs/day05/redux/count/CountContainer";
import FontContainer from "./docs/day05/redux/font/FontContainer";
import { Form } from "./docs/day05/form/Form";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Job from "./pages/intro/Job";
// import Counter from "./docs/day05/redux/count/Counter";



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  );
}

export default App;
