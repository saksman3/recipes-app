import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeList extends Component {
  state = {
    recipes:[
         { id:'1',name:'pizza',url:"https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg"},
         { id:'2',name:'mixed fruit juice',url:"https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Lemon-Shrimp_EXPS_SDON16_45286__D06_09_5b-696x696.jpg"},
         { id:'3',name:'prawns',url:"https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg"},
         { id:'4',name:'cake',url:"https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/w47-r6-family-0db724d1.jpg"},
         { id:'5',name:'stew',url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzweV926DhsYX2zGDC8XIF5DpjGDZjG2_4oCNCk2F2jBtLMM1yQ"},
         { id:'6',name:'fries',url:"https://www.cbc.ca/food/content/images/recipes/Philly_Cheesesteak.jpg"}
    ]
  }
  render() {
    return (
      <div className="recipes">
         {
           this.state.recipes.map((recipe)=>{
             return <Recipe recipe={recipe} key={recipe.id}/>
           })
         }
          
      </div>
    )
  }
}
