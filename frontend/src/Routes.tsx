import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Records from "./assets/pages/Records/Index";
import Header from "./components/Header";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Route path="/" exact>
      <Home />
    </Route>

    <Route path="/Records" exact>
      <Records />
    </Route>
  </BrowserRouter>
);

export default Routes;
