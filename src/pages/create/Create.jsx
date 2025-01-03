import React, { useRef, useState } from 'react';
import './create.css';

const Create = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [preparation, setPreparation] = useState('')
  const [image, setImage] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [url, setUrl] = useState('')
  const ingredientInput = useRef(null);

const handleingredients = (e) => {
const item= ingredient.trim();


if(item && !ingredients.includes(item)) {
  setIngredients(prevItems =>[...prevItems, item])
}
setIngredient('');
ingredientInput.current.focus();
ingredientInput.current.value='';

}


  const handleSubmit= (e) =>{
    e.preventDefault();
    console.log(title, description,preparation,image,url);
    
  }

  return (
    <div className='card mt-3'>
      <div className='card-body'>
        <h2>Add New Recipe</h2>
        <form onSubmit={handleSubmit}  >
          <div className='mb-3'>
            <label htmlFor='title' className='from-label'>Title</label>
            <input type="text" name="title" id="title" className='form-control' onChange={(e)=>setTitle(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='from-label'>Description</label>
            <input type="text" name="description" id="description" className='form-control' onChange={(e)=>setDescription(e.target.value)} />
          </div>
          <div className="mb-3"></div>
          <label htmlFor="ingredients">Ingredients <ul>  {ingredients.map(item=> <li key={item} > {item} </li> )} </ul>  </label>
          <div className="input-group d-flex justify-content-between align-items-center">
            
  <input
    type="text"
    ref={ingredientInput}
    name="ingredients"
    className="form-control"
    placeholder="Add ingredient"
    onChange={(e) => setIngredient(e.target.value)}
  />
  <button
    className="btn btn-secondary"
    type="button"
    onClick={handleingredients}
  >
    +
  </button>
</div>
          <div className='mb-3'>
            <label htmlFor='preparation' className='from-label'>Preparation</label>
          <textarea name="preparation" id="preparation" className='form-control' onChange={(e)=>setPreparation(e.target.value)}  ></textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor='image' className='from-label'>Image</label>
            <input type="text" name="image" id="image" className='form-control'onChange={(e)=>setImage(e.target.value)}  />
          </div>
          <div className='mb-3'>
            <label htmlFor='url' className='from-label'>Url</label>
            <input type="text" name="url" id="url" className='form-control' onChange={(e)=>setUrl(e.target.value)} />
          </div>
          <button type="submit" className='btn btn-primary'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
