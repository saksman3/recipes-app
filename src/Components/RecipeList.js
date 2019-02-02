import React, { Component } from 'react';
import Recipe from './Recipe';
import Loading from './loading';
import {connect} from 'react-redux'
import {fetchRecipes} from '../actions/recipes';
 class RecipeList extends Component {
  componentDidMount() {
  this.props.fetchRecipes();
  }

  checkState=()=>{
    if(this.props.fetching){
      return (
        <div className="recipes">
              <Loading/>
        </div>
      )
    }
    else if(this.props.error){
       return <p>{this.props.error.message}</p>
    }
    else return(
      <div className="recipes">
      {
        this.props.recipes.map((recipe,index)=>{
          return <Recipe recipe={recipe} key={index}/>
        })
      }
     </div>
    )
  }
  render() {
    return (
      <div>      
           {
              this.checkState()
           }
           
           
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  console.log("recipes list",state);
  return {
    recipes:state.recipes,
    fetching:state.status.fetching,
    fetch_success:state.status.fetch_success,
    error:state.status.error
  }
}
const mapDispatchToProps =  (dispatch)=>{
  return {
    fetchRecipes:()=>dispatch(fetchRecipes()),
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);