import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CategorieList from "./pages/CategorieList";
import Quizz from "./pages/Quizz";

// Components
import Navbar from "./components/Navbar";

// Remplacer mes services par une galerie
// Page /galeries -> afficher tous les albums
// Page /galeries/{id} -> affiche les images
// d'un album en particulier

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categorie" component={CategorieList} />
          <Route path="/categories/:id" component={CategorieList} />
          <Route path="/quizz" component={Quizz} />
        </Switch>
      </Router>
    );
  }
}

export default App;
