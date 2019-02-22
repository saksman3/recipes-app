import { FetchFailed, StartedFetch, SuccessFetched } from "./status";

export const FetchRecipeDetails = recipe => {
  return {
    type: "FETCH_RECIPE_DETAILS",
    recipe
  };
};
export const fetchRecipe = id => {
  console.log("inside fetch recipe");
  return dispatch => {
    dispatch(StartedFetch());
    //the fetch api accepts the url and in these case the endpoint must be sent with the api key and id as below
    //if successful then((response)=>{
    /*       create a call back function inside the then and pass in the response we doing these because we want to convert the response into a json structure, we do that by returning the response.json()
        }).then((json)=>{
            the next then will recieve the converted response whch is now in json structure at these point you can now populate your fileds or list using the json
        }).catch((error)=>{
            if someting didnt go right we want to prevent the app from crushing by catching the error if you have an error tag or div, or variable then you can assign its value to the error recieved here
        })

        so the above code will result in something like
        fetch(urlparams).then(
          (response)=>{
              return response.json()
          }
        ).then(
            (convertedResponse)=>{
                myArrayOfWords = convertedResponse;
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        );
        
        */
    fetch(
      `https://www.food2fork.com/api/get?key=f6e01c47faef6e41b5a8fc766721b4d0&rId=${id}`
    )
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(json => {
        console.log("json data", json);
        dispatch(SuccessFetched());
        dispatch(FetchRecipeDetails(json.recipe));
      })
      .catch(error => {
        dispatch(FetchFailed(error));
      });
  };
};
