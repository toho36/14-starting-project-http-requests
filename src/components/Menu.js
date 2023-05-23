import { useEffect } from 'react';
import { DUMMY_MEALS } from '../recipes/recipes';

function Menu() {
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
  };

  return <div>Menu</div>;
}

export default Menu;
