import React, { useEffect, useState } from 'react';
import './home.css';
import ProductCard from '../../components/productcard/ProductCard';

const Home = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setRecipes(data);
      })
      .catch((err) => console.error('Fetch Error:', err));
  }, []);
  

  return ( <div className='row mt-3' >

{
  recipes && recipes.map(recipe=>(   

    <ProductCard key={recipe.id} recipe={recipe} />

  ))
}

  </div>
  )
}

export default Home;
