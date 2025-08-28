import desserts from '../Database/desserts';

function LowCalDesserts() {
  return (
    <div className='low-cal-desserts'>
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default LowCalDesserts;

function DessertsList(props) {
  const ListItems = props.data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => {
      const itemsName = `${dessert.name} - ${dessert.calories}`;
      return <li>{itemsName} Calories</li>;
    });

  return (
    <div>
      <ul>{ListItems}</ul>
      <button className='btn' onSubmit={ListItems}>
        Submit
      </button>
    </div>
  );
}
