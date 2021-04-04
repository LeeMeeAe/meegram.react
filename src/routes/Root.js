import React from 'react';
import DefaultPage from '../pages/DefaultPage';
import TestPage from '../pages/TestPage';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';

import { Route } from 'react-router-dom';

function Routes() {
  return (
    <div>
      <Route path="/" component={MainPage} exact />
      <Route path="/default" component={DefaultPage} exact/>
      <Route path="/test" component={TestPage} exact/>
      <Route path="/login" componet={LoginPage} exact/>
    </div>
  );
}

export default Routes;