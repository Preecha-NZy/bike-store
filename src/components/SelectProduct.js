import Product from "./Product";
import bicycles from "../data/bycycles";

export default function SelectProduc(props) {
  const { setselectBicycle } = props;
  function handleChoose(bicycle) {
    previousChoosed = document.getElementsByClassName("choosed");
    if (previousChoosed.length === 1) {
      previousChoosed[0].classList.remove("choosed");
    }
    document.getElementById(`bicycle-${bicycle.id}`).classList.add("choosed");
    setselectBicycle(bicycle);
  }

  const bicyclesItem = bicycles.map((bicycle, index) => {
    return (
      <Product key={index} bicycle={bicycle} handleChoose={handleChoose} />
    );
  });

  return (
    <div className="app mx-auto">
      <div className="app-head mb-8">
        <img src={require("../../asserts/bicycle1.png")} className="mx-auto" />
      </div>
      <div className="app-section mx-auto p-10">
        <div className="mb-4">
          <div className="text-4xl mb-8 w-full">Select Your Bike Model</div>
          {bicyclesItem}
          <div className="text-4xl mb-8 w-full">Select Your Bike Sizel</div>
          <div className="text-sm">
            Road bite sizing is argaubly more important than any other type of
            bicycle. The sizing will be also vary between different
            manufacturer. Compare Raptor to other brand.
          </div>
        </div>
        <div className="mb-4 w-full">
          <ul className="list-none">
            <li
              className="notClicked"
              id="bikeSiteItemXS"
              // onClick={() => changeSiteClass("bikeSiteItemXS")}
            >
              XS
            </li>
            <li
              className="notClicked"
              id="bikeSiteItemS"
              // onClick={() => changeSiteClass("bikeSiteItemS")}
            >
              S
            </li>
            <li
              className="notClicked"
              id="bikeSiteItemM"
              // onClick={() => changeSiteClass("bikeSiteItemM")}
            >
              M
            </li>
            <li
              className="notClicked"
              id="bikeSiteItemL"
              // onClick={() => changeSiteClass("bikeSiteItemL")}
            >
              L
            </li>
            <li
              className="notClicked"
              id="bikeSiteItemXL"
              // onClick={() => changeSiteClass("bikeSiteItemXL")}
            >
              XL
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
