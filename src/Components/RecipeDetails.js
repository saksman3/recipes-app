import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipe} from '../actions/recipe';
import Loading from './loading';
class RecipeDetails extends React.Component {
    
    componentDidMount() {
       const id = this.props.match.params.id;
      // this.props.fetchRecipe(id)
     }
    checkState = ()=>{
      if(this.props.fetching)
      {
         return <Loading/>
      }
      else if(this.props.fetch_success){
          
          if(this.props.recipe.ingredients)
        return(
            <div className="container">
                  <div className="row">
                      <div className="col-10 mx-auto col-md-6 my-3">
                         <button onClick={this.onClick} type="button" className="btn btn-warning mb-3 text-capitalize">back to list</button>
                         <img src={`${this.props.recipe.image_url}`} alt="url" className="d-block w-100"/>
                      </div>
                        {
                                <div className="col-10 mx-auto col-md-6 my-3">
                                <h3 className="text-uppercase">{this.props.recipe.title}</h3>
                                <h6>Published by :{this.props.recipe.publisher}</h6>
                                <a href={`${this.props.recipe.publisher_url}`} rel="noopener noreferrer" className="btn btn-success mx-3" target="_blank">Publisher Url</a>
                                <a href={`${this.props.recipe.source_url}`} rel="noopener noreferrer" className="btn btn-primary" target="_blank">Source Url</a>
                                <ul className="list-group mt-2">
                                 <h4 className="mt-3 mb-2">Ingredients</h4>
                                 {
                                    this.props.recipe.ingredients.map((ingredient,index)=>{
                                        return (
                                            <li className="list-group-item" key={index}>{ingredient}</li>
                                        );
                                    })
                                }
                                   
                                </ul>
       
                             </div>
                          
                        }
                  </div>
               </div>
        )
      }
    }    
      
      onClick = ()=>{
          this.props.history.push('/');
      }
      render(){
        return (
            <React.Fragment>
               {
                   this.checkState()
               }
            </React.Fragment>
        );
      }
};
const mapDispatchToProps = (dispatch)=>{
    console.log("disp");
    return {
        fetchRecipe:(id)=>dispatch(fetchRecipe(id))
    }
}
const mapStateToProps = (state)=>{
     
    return {
        recipe:state.recipe,
        fetching:state.status.fetching,
        fetch_success:state.status.fetch_success,
        fetch_error:state.status.fetch_error,
        error:state.status.error
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeDetails);