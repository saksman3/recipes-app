import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/Header.css';
/* import './styles/SearchForm.css';
import './styles/Recipes.css';
import './styles/dashboard.css';
import './styles/modal.css';
import './styles/recipeDetails.css'
import './styles/Reset.css'; */
import './styles/Recipes.css';
import {PersistGate} from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import ConfigureStore from "./store/configureStore";
const {store,persistor } = ConfigureStore();
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
    
    , document.getElementById('root'));

serviceWorker.unregister();
