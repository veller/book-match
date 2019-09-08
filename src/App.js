import React from "react";
import { GlobalStyle, AppStyle, Rankings } from "./components/Global.styles";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import TopUsers from "./components/TopUsers";
import TopBooks from "./components/TopBooks";
import Statistics from "./components/Statistics";
import TopEvents from "./components/TopEvents";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <AppStyle>
        <Header></Header>
        <Highlights></Highlights>
        <Rankings>
          <TopUsers></TopUsers>
          <TopBooks></TopBooks>
        </Rankings>
        <Statistics></Statistics>
        <TopEvents></TopEvents>
        <Footer></Footer>
      </AppStyle>
    </>
  );
}

export default App;

//to do

//Geral: organização dos arquivos na pasta components
//Geral: não é mobile-friendly
//Arquitetura: componente genérico para exibição de rankings que recebe dados via props e decide o que renderizar
