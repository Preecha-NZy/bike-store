import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SelectProduc from "./components/SelectProduct";

export default function App() {
  const [selectBicycle, setselectBicycle] = useState("");

  console.log(selectBicycle.price);
  
  return (
    <SelectProduc setselectBicycle={setselectBicycle}/>
  );
}
