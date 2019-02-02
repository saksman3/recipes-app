import {FetchFailed,StartedFetch,SuccessFetched} from './status';

export const FetchRecipeDetails = (recipe)=>{

    return {
        type:'FETCH_RECIPE_DETAILS',
        recipe
    }
}
export const fetchRecipe = (id)=>{
    console.log("inside fetch recipe");
    return (dispatch)=>{
        dispatch(StartedFetch());
        fetch(`https://www.food2fork.com/api/get?key=f6e01c47faef6e41b5a8fc766721b4d0&rId=${id}`)
        .then((response)=>{
            console.log("response",response);
            return response.json();
        }).then((json)=>{
            console.log("json data",json)
            dispatch(SuccessFetched());
            dispatch(FetchRecipeDetails(json.recipe));
        }).catch((error)=>{
            dispatch(FetchFailed(error));
        });
    }
}