const Nutrients = ({ nut }) => {
  //pie chart

  return (
    <ul className="list-group">
      {nut.map((nutrient) => {
        const { name, amount, unit } = nutrient;
        return (
          <li className="list-group-item" id={name}>
            {name + " " + Math.round(amount) + unit}
          </li>
        );
      })}
    </ul>
  );
};

export default Nutrients;
