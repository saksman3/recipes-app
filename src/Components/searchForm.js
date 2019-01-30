import React, { Component } from 'react'

export default class SearchForm extends Component {
    state={
         recipeText:undefined,
    }
    onSubmit = (e)=>{
      e.preventDefault();
     
    }
    handleChange = (e)=>{
        const text = e.target.value;
        console.log(text);
        this.setState(()=>({recipeText:text}));
    }
  render() {
    return (
        <div className="form-container">
            <form className="search-form" onSubmit={this.onSubmit}>
            <input type="text"  name="recipe" onChange={this.handleChange} placeholder="search"/>
            
            <button>Search</button>
            </form>
        </div>
      
    )
  }
}
