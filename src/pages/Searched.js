import React, { useEffect, useState } from 'react';
import { DUMMY_MEALS } from '../recipes/recipes';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = (name) => {
    const meal = DUMMY_MEALS.filter((meal) =>
      meal.name.toLowerCase().includes(name.toLowerCase())
    );
    // const meal = DUMMY_MEALS.find((meal) => meal.name === name);
    console.log(meal);
    console.log('sent to storage');
    setSearchedRecipes(meal);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <p>{item.name}</p>
            <img src={item.imgUrl} alt={item.name} />
            <p>{item.author}</p>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
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
export default Searched;
