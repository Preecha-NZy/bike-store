export default function Product(props) {
  const { bicycle, handleChoose, setselectBicycle } = props;
  return (
    <div
      className="mb-10 p-5 border-4"
      id={`bicycle-${bicycle.id}`}
      onClick={() => handleChoose(bicycle)}
    >
      <div className="img-container">
        <img src={require("../../asserts/bicycle2.png")} alt={bicycle.title} />
      </div>
      <div className="text-3xl">{bicycle.title}</div>
      <div className="text-xl">From {bicycle.price} Baht</div>
      <div className="text-base">{bicycle.info}</div>
    </div>
  );
}
