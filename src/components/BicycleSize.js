export default function BicycleSize(props) {
  const { size, handleSize, bicycleSize } = props;
  return (
    <li
      className={`${size.id == bicycleSize ? "clicked" : "notClicked"}`}
      id={`bikeSiteItem${size.id}`}
      onClick={() => handleSize(`${size.id}`)}
    >
      {size.id}
    </li>
  );
}
