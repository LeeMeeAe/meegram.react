import React from "react";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ExplorePage from "../pages/ExplorePage";
import EditProfilePage from "../pages/EditProfilePage";
import ProfilePage from "../pages/ProfilePage";

import { Route } from "react-router-dom";

function Routes() {
  return (
    <div>
      <Route path="/" component={MainPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/explore" component={ExplorePage} exact />
      <Route path="/editprofile" component={EditProfilePage} exact />
      <Route path="/profile" component={ProfilePage} exact />
    </div>
  );
}

export default Routes;
