import React from "react";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ExplorePage from "../pages/ExplorePage";
import EditProfilePage from "../pages/EditProfilePage";
import ProfilePage from "../pages/ProfilePage";
import { Router, Route } from "react-router-dom";
import history from "./History";

function Routes() {
  return (
    <div>
      <Router history={history}>
        <Route path="/" component={MainPage} exact />
        <Route path="/main" component={MainPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/explore" component={ExplorePage} exact />
        <Route path="/editprofile" component={EditProfilePage} exact />
        <Route path="/profile" component={ProfilePage} exact />
      </Router>
    </div>
  );
}

export default Routes;
