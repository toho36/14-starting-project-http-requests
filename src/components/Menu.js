import { useEffect, useState } from 'react';
import { DUMMY_MEALS } from '../recipes/recipes';
import styled from 'styled-components';
import './Menu.css';

function Menu() {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    getMenu();
  }, []);
  const getMenu = () => {
    const check = localStorage.getItem('recipe');
    // const api = await fetch(
    //   `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_KEY}&number=9`
    // );
    // const data = await api.json();
    if (check) {
      setDishes(JSON.parse(check));
      console.log('got from storage');
    } else {
      const data = DUMMY_MEALS;
      localStorage.setItem('recipe', JSON.stringify(data));
      console.log(data);
      console.log('sent to storage');
      setDishes(data);
    }
  };

  return (
    <div>
      <Wrapper>
        {dishes.map((dish) => {
          return (
            <Card key={dish.id}>
              <div>
                <p>{dish.name}</p>
                <img src={dish.imgUrl} alt={dish.name} />
                <p>{dish.author}</p>
                {/* <p>{dish.tags}</p> */}
              </div>
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 2rem 0rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 1rem;
  overflow: hidden;

  img {
    border-radius: 1rem;
    // position: absolute;
    // left: 0;
    width: 15rem;
    height: 15rem;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }
  p {
    display: flex;
    transform: translate(10%, 0%);
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    position: relative;
    // z-index: 10;
    // left: 50%;
    //   bottom: 0%;
    //   color: white;
    // width: 100%;
    //   height: 40%;
    //   // justify-content: center;
    // align-items: center;
  }
`;

export default Menu;
