import React from 'react';
import {Link} from 'react-router-dom';

class Recipe extends React.Component {
    
    render(){
        const {image_url,recipe_id,title} = this.props.recipe;
        return (
            <div className="recipeBox" style={{background:`url(${image_url}) no-repeat center center`,backgroundSize:'cover'}}>
              <div className="hoverBox">
                <Link to={`/recipe_details/${recipe_id}`}>
                    <h4>{title}</h4>
                    <p >View <i className="fa fa-book-edit"/></p>
                </Link>
              </div>
           </div>
        );
    }
};

export default Recipe;