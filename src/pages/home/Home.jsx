import './home.css';
import ProductCard from '../../components/productcard/ProductCard';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const {
    data: recipes,
    isLoading,
    error,
  } = useFetch('http://localhost:3000/recipes');

  return (
    <div className='row mt-3'>
      {isLoading && <div className='alert alert-warning'>Loading...</div>}
      {error && <div className='alert alert-danger'>{error}</div>}

      {recipes &&
        recipes.map((recipe) => (
          <ProductCard key={recipe.id} recipe={recipe} />
        ))}
    </div>
  );
};

export default Home;
