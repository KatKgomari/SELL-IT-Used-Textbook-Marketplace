
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SellForm from "./pages/Sell/SellForm";
import Header from "./components/Header/Header";


const App: React.FC = () =>{
  return (
  <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sell" element={<SellForm/>}/>
    </Routes>
  </div>)
}

export default App;
