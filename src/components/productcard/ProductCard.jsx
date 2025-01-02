import React from 'react'

const ProductCard = ({recipe}) => {
    return (
        <div className="col-3 mb-3">
          <div className="card">
            <img src={`img/${recipe.image}`} alt={recipe.title} />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="description">{recipe.description}</p>
              <a href={recipe.url} className="btn btn-outline-primary">
                Explore the recipes
              </a>
            </div>
          </div>
        </div>
      );
}

export default ProductCard
