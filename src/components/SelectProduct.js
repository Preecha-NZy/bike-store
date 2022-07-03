import { Link } from "react-router-dom";

import BicycleSize from "./BicycleSize";
import Product from "./Product";

import bicycleSizes from "../data/bicycleSizes";
import bicycles from "../data/bicycles";

export default function SelectProduc(props) {
  const {
    selectBicycle,
    setSelectBicycle,
    bicycleSize,
    setBicycleSize,
    quantity,
    setQuantity,
  } = props;
  
  const totalPrice = isNaN(selectBicycle.price)? 0 : selectBicycle.price * quantity

  function handleBicycleChoose(bicycle) {
    previousChoosed = document.getElementsByClassName("choosed");
    if (previousChoosed.length === 1) {
      previousChoosed[0].classList.remove("choosed");
    }
    setSelectBicycle(bicycle);
  }

  function handleBicycleSize(size) {
    clickedButton = document.getElementsByClassName("clicked");
    if (clickedButton.length === 1) {
      clickedButton[0].setAttribute("class", "notClicked");
    }
    setBicycleSize(size);
  }

  function changeQuantity(quantity) {
    setQuantity(parseInt(quantity))
  }

  const bicyclesItem = bicycles.map((bicycle, index) => {
    return (
      <Product
        key={index}
        bicycle={bicycle}
        handleBicycleChoose={handleBicycleChoose}
        selectBicycle={selectBicycle}
      />
    );
  });

  const bicycleSizeList = bicycleSizes.map((size, index) => {
    return (
      <BicycleSize
        key={index}
        size={size}
        handleSize={handleBicycleSize}
        bicycleSize={bicycleSize}
      />
    );
  });

  return (
    <div className="app mx-auto">
      <div className="app-head mb-8">
        <img src={require("../../asserts/bicycle1.png")} className="mx-auto" />
      </div>
      <div className="app-section mx-auto p-10">
        <div className="app-container">
          <div className="text-4xl mb-8">Select Your Bike Model</div>
          {bicyclesItem}
        </div>
        <div className="app-container">
          <div className="text-4xl mb-8">Select Your Bike Sizel</div>
          <div className="bicycle-info text-sm mb-4">
            Road bite sizing is argaubly more important than any other type of
            bicycle. The sizing will be also vary between different
            manufacturer. Compare Raptor to other brand.
          </div>
          <div className="size-list mb-8">
            <ul className="list-none">{bicycleSizeList}</ul>
          </div>
        </div>
        <div className="app-container">
          <div className="text-4xl mb-8">Quantity</div>
          <div className="text-xl mb-4">Quantity</div>
          <input
            type="number"
            name=""
            id=""
            value={quantity}
            min="1"
            className="w-[260px] h-[36px] rounded-[5px] border-[1px] border-solid border-[#e2e1e5] px-2 mb-8"
            onChange={(e) => changeQuantity(e.target.value)}
          />
        </div>
        <div className="app-container flex">
          <div className="basis-1/2 text-center text-xl">{`${totalPrice.toLocaleString()} Bath`}</div>
          <button className="basis-1/2">
            <Link to="/order-summary">NEXT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
