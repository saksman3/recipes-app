const defaultState = {
    
    fetching:false,
    fetch_success:false,
    fetch_error:false,
    error:undefined
}
export default (state=defaultState,action)=>{
    switch (action.type) {
        case'FETCHING_DATA':
        return {
            fetching:true
        }
        case'FETCH_ERROR':
        return{
            fetch_error:true,
            error:action.error
        } 
        case 'SUCCESS_FETCH':
           return{
               fetch_success:true,
           }
        default:
            return state
    }
}