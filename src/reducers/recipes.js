import {} from '../actions/recipes';
const defaultState = [
    {
      title:'Jalapeno poper grilled cheese',
      f2f_url:'http://food2fork.com/view/35382',
      image_url:'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg',
      ingredients:['2 jalapeno peppers, cut in half lengthwise and seeded','2 slices sour dough bread','1 tablespoon butter, room temperature','2 tablespoons cream cheese, room temperature','1/2 cup jack and cheddar cheese, shredded','1 tablespoon tortilla chips, crumbled '],
      publisher:'Closet Cooking',
      recipe_id:'35382',
      publisher_url:'https://www.closetcooking.com',
      source_url:'https://www.closetcooking.com/jalapeno-popper-grilled-cheese-sandwich/',
    },
     {
      title:'Jalapeno poper grilled cheese',
      f2f_url:'http://food2fork.com/view/35383',
      image_url:'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg',
      ingredients:['2 jalapeno peppers, cut in half lengthwise and seeded','2 slices sour dough bread','1 tablespoon butter, room temperature','2 tablespoons cream cheese, room temperature','1/2 cup jack and cheddar cheese, shredded','1 tablespoon tortilla chips, crumbled '],
      publisher:'Closet Cooking',
      recipe_id:'35383',
      publisher_url:'https://www.closetcooking.com',
      source_url:'https://www.closetcooking.com/jalapeno-popper-grilled-cheese-sandwich/',
    },
    {
      title:'Jalapeno poper grilled cheese',
      f2f_url:'http://food2fork.com/view/35384',
      image_url:'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg',
      ingredients:['2 jalapeno peppers, cut in half lengthwise and seeded','2 slices sour dough bread','1 tablespoon butter, room temperature','2 tablespoons cream cheese, room temperature','1/2 cup jack and cheddar cheese, shredded','1 tablespoon tortilla chips, crumbled '],
      publisher:'Closet Cooking',
      recipe_id:'35384',
      publisher_url:'https://www.closetcooking.com',
      source_url:'https://www.closetcooking.com/jalapeno-popper-grilled-cheese-sandwich/',
    },
    {
      title:'Jalapeno poper grilled cheese',
      f2f_url:'http://food2fork.com/view/35385',
      image_url:'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg',
      ingredients:['2 jalapeno peppers, cut in half lengthwise and seeded','2 slices sour dough bread','1 tablespoon butter, room temperature','2 tablespoons cream cheese, room temperature','1/2 cup jack and cheddar cheese, shredded','1 tablespoon tortilla chips, crumbled '],
      publisher:'Closet Cooking',
      recipe_id:'35385',
      publisher_url:'https://www.closetcooking.com',
      source_url:'https://www.closetcooking.com/jalapeno-popper-grilled-cheese-sandwich/',
    },
    {
      title:'Jalapeno poper grilled cheese',
      f2f_url:'http://food2fork.com/view/35386',
      image_url:'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg',
      ingredients:['2 jalapeno peppers, cut in half lengthwise and seeded','2 slices sour dough bread','1 tablespoon butter, room temperature','2 tablespoons cream cheese, room temperature','1/2 cup jack and cheddar cheese, shredded','1 tablespoon tortilla chips, crumbled '],
      publisher:'Closet Cooking',
      recipe_id:'35386',
      publisher_url:'https://www.closetcooking.com',
      source_url:'https://www.closetcooking.com/jalapeno-popper-grilled-cheese-sandwich/',
    }
       
  ];
export default (state=defaultState,action)=>{
    switch (action.type) {
        case 'GET_LIST':
           return action.recipes
        default:
           return state;
    }
}