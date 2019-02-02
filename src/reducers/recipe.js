export default(state={},action)=>{
   switch (action.type) {
       case 'FETCH_RECIPE_DETAILS':
       return action.recipe
       default:
           return state
   }
}