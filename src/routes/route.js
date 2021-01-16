import React from "react";
import {Switch, Route} from 'react-router-dom';
import ListRegion from '../container/ListRegion';
import Information from "../container/Information";

const PublicRoute = ()=>{
  return (
    <div>
      <div style={{height: '100%'}}>
        <div>
          <Switch>
            <Route exact path='/' component={ListRegion} />
            <Route exact path='/:projectOrder/information/'  component={Information} />
          </Switch>
        </div>
      </div>
    </div>
  );
}



export default PublicRoute;
