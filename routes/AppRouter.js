import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoutes } from './PrivateRoutes';

// import { PublicRoutes } from './PublicRoutes';
  

export const AppRouter = () => {


    return (
      <Router>
        <div>
          <Switch>

            {/* <PublicRoutes isAutenticated={ logged } path="/login" component={ LoginScreen }/> */}
            <PrivateRoutes isAutenticated={ true } path="/" component={ DashBoardRoutes }/>

          </Switch>
        </div>
      </Router>
    )
}
