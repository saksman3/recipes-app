import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import SearchForm from './Components/searchForm';
import RecipesList from './Components/RecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/> 
        
          
        
        <SearchForm/>
        <RecipesList/>
      
      </div>
    );
  }
}

export default App;
