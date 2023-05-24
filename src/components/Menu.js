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
            <Card key={dish.id}>
              <div>
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
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  transition: all 0.3s ease;

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
    // position: absolute;
    left: 0;
    width: 15rem;
    height: 15rem;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }
  p {
    // position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(10%, 0%);
    color: white;
    width: 100%;
    // text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    // justify-content: center;
    align-items: center;
  }
`;

export default Menu;
