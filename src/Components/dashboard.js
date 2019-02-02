import React, { Component } from 'react'
import SearchForm from './searchForm';
import RecipeList from './RecipeList';

export default class Dashboard extends Component {
    state={showModal:false}

  
  render() {
    return (
      <div className="container">
         <div className="row justify-content-center">
            <div className="col col-md-8 my-5 ">
                <SearchForm/>
            </div>
            
         </div>
         <div className="row">
               <div className="col col-sm-12 my-3">
                   <RecipeList/>
               </div>
            </div>

      </div>
    )
  }
}
