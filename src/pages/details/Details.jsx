import './details.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Details = () => {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id;

  const {data:recipe, isLoading, error } = useFetch(url)


  return (
    <div className='row mt-3'>
      {
  isLoading && <div className="alert alert-warning">Loading...</div>
}
{error && <div className='alert alert-danger'>{error}</div>}
      {recipe && (
        <>
          <div className='col-4'>
            <img
              src={`/img/${recipe.image}`}
              alt={recipe.title}
              className='img-fluid rounded'
            />
          </div>
          <div className='col-8'>
            <h5>{recipe.title}</h5>
            <p>{recipe.desciption}</p>
            <ul>
              {recipe.ingredients.map((item, index) => (
                <li key={index}  >{item}</li>
              ))}
            </ul>
          </div>
          <div className='col-12 mt-3'>
            <p>{recipe.preparation}</p>
            <a href={recipe.url} className='btn btn-outline-primary '>
              Deep Dive Recipe{' '}
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
