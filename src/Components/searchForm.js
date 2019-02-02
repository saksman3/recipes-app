import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  FetchSearchedRecipes } from "../actions/recipes";
 class SearchForm extends Component {
    state={
         recipeText:undefined,
         submit_error:undefined
    }
    onSubmit = (e)=>{
      e.preventDefault();
     
     
    }
    handleChange = (e)=>{
        const text = e.target.value;
        console.log(text);
        this.setState(()=>({recipeText:text}));
    }
    OnSearchHandler = ()=>{
      if(this.state.recipeText !==' '){
        this.props.FetchSearchedRecipes(this.state.recipeText)
      }else{
        this.setState(()=>{
          return {
            submit_error:'Please enter some Recipe values.'
          }
        })
      }
    }
  render() {
    return (
           
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                <input className="form-control" type="text"  name="recipe" onChange={this.handleChange} placeholder="Start searching"/>
                <button onClick={this.OnSearchHandler}><i className="fa fa-search"></i></button>
                </div>
            </form>    
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    FetchSearchedRecipes:(searchText)=>dispatch(FetchSearchedRecipes(searchText)),
  }
}
export default connect(undefined,mapDispatchToProps)(SearchForm);