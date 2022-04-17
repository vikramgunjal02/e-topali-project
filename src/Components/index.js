import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Registration from './Registration/registration';
import Login from './Login/login';
import Admin from './Admin/admin';

 const index = () => {
  return (
   <>
  <BrowserRouter>
            <div>
              <Switch>
                <Route path="/registration" exact>
                  <Registration />
                </Route>
                <Route path="/" exact>
                    <Login/>
                </Route>
                <Route path="/admin" exact>
                    <Admin/>
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
   </>
  )
}

export default index;
