import {applyMiddleware, createStore,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RecipesReducer from "../reducers/recipes";
import RecipeReducer from "../reducers/recipe";
import StatusReducer from "../reducers/status";
const rootReducer = combineReducers({
    recipes:RecipesReducer,
    recipe:RecipeReducer,
    status:StatusReducer,
});
const persistConfig = {
    storage,
    key:'recipes'
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
export default ()=>{
    const store = createStore(persistedReducer,applyMiddleware(thunk));
    const persistor = persistStore(store);
    store.subscribe(()=>{
        console.log(store.getState());
        
    });
    return {store,persistor};
}