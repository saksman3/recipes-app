export const StartedFetch=()=>{
    return {
        type:'FETCHING_DATA',

    }
}
export const FetchFailed=(error)=>{
    return {
        type:'FETCH_ERROR',
        error
    }
}
export const SuccessFetched=()=>{
    return {
        type:'SUCCESS_FETCH',
    }
}