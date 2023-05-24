import { useEffect, useState } from 'react';
import { DUMMY_MEALS } from '../recipes/recipes';
import styled from 'styled-components';

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

      <Wrapper>
        {dishes.map((dish) => {
          return (
            <Card>
              <div key={dish.id}>
                <p>{dish.name}</p>
                <img src={dish.imgUrl} alt={dish.name} />
              </div>
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Card = styled.div`
  min-height: 25rem;

  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    min-height: 10rem;

    max-height: 15rem;
  }
`;
export default Menu;
