import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/App.scss";
import Theme from "./style/theme/Theme";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import UserProfile from "./pages/UserProfile";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import CreateAd from "./pages/CreateAd";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyContext from "./context/MyContext";
import PetDetails from "./pages/PetDetails";

const App = () => {
  //need this to get search input
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  console.log(search);

  const { user } = useContext(MyContext);
  console.log(user);

  return (
    // <ThemeProvider theme={theme}>
    <Theme>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* tried this out to see if we can search input */}
          <Route path="/gallery">
            <Gallery search={search} />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/createad">
            <CreateAd />
          </Route>
          <Route path="/user/profile">
            <UserProfile />
          </Route>

          <Route path="/pet">
            <PetDetails />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
