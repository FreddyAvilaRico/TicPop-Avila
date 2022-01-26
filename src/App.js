import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Category from "./Components/Category/Category";

function App() {
  return (
    <>
      <Router>
      <Navbar />
          <Switch>

            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route path="/categoria/:categoriaId">
              <Category />
            </Route>

            <Route path="/details/:itemId">
              <ItemDetailContainer />
            </Route>


          </Switch>
      </Router>
      
    </>
  );
}

export default App;
