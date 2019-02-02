import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Header from '../Components/Header';
import Dashboard from '../Components/dashboard';
import RecipeDetails from '../Components/RecipeDetails';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                   <Route path="/" component={Dashboard} exact={true}/>
                  <Route path="/recipe_details/:id" component={RecipeDetails}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;