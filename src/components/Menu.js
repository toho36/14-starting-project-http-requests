import { useEffect, useState } from 'react';
import { DUMMY_MEALS } from '../recipes/recipes';

function Menu() {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    getMenu();
  }, []);
  const getMenu = () => {
    // const api = await fetch(
    //   `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_KEY}&number=9`
    // );
    // const data = await api.json();
    const data = DUMMY_MEALS;
    console.log(data);
    setDishes(data);
  };

  return (
    <div>
      <div>Menu</div>
      {dishes.map((dish) => {
        return (
          <div key={dish.id}>
            <p>{dish.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
