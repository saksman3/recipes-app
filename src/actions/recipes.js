import {FetchFailed,StartedFetch,SuccessFetched} from './status';

const url = 'https://www.food2fork.com/api/search?key=f6e01c47faef6e41b5a8fc766721b4d0';
//const api_key = "key=f6e01c47faef6e41b5a8fc766721b4d0";

export const RecipesList = (recipes)=>{
    return {
        type:'GET_LIST',
        recipes
    }
}


export const FetchSearchedRecipes = (search_query)=>{
    return (dispatch)=>{
        dispatch(StartedFetch())
        fetch(url+`&q=${search_query}`)
        .then((response)=>{
              return response.json();
        }).then((json)=>{
            dispatch(RecipesList(json.recipes))
            dispatch(SuccessFetched())
        }).catch((error)=>{
            dispatch(FetchFailed(error))
        });
    }

}
export const fetchRecipes = ()=>{
    return (dispatch)=>{
        dispatch(StartedFetch());
       fetch(url).then((response)=>{
           return response.json();
       }).then((json)=>{
          dispatch(SuccessFetched())
          dispatch(RecipesList(json.recipes));
       }).catch((error)=>{
          dispatch(FetchFailed(error));
       });
    }
}