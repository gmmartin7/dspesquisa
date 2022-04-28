import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Header from "./components/Header";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Route path="/">
      <Home />
    </Route>
  </BrowserRouter>
);

export default Routes;
