import React from 'react';
import DefaultPage from '../pages/DefaultPage';
import TestPage from '../pages/TestPage';
import MainPage from '../pages/MainPage';

import { Route } from 'react-router-dom';

function Root() {
  return (
    <div>
      <Route path="/" component={MainPage} />
      <Route path="/default" component={DefaultPage} />
      <Route path="/test" component={TestPage} />
    </div>
  );
}

export default Root;