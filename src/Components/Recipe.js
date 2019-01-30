import React from 'react';

const Recipe = (props) => {
    return (
        <div className="recipeBox" style={{background:`url(${props.recipe.url}) no-repeat center center`,backgroundSize:'cover'}}>
          <div className="hoverBox">
             <h4>{props.recipe.name}</h4>
             <p>some description</p>
          </div>
       </div>
    );
};

export default Recipe;