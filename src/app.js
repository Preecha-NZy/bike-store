import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SelectProduc from "./components/SelectProduct";
import OrderSummary from "./components/OrderSummay";

export default function App() {
  const [selectBicycle, setSelectBicycle] = useState("");
  const [bicycleSize, setBicycleSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SelectProduc
              selectBicycle={selectBicycle}
              setSelectBicycle={setSelectBicycle}
              bicycleSize={bicycleSize}
              setBicycleSize={setBicycleSize}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />

        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </BrowserRouter>
  );
}
