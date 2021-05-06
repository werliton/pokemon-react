import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import App from "../App";
import Error from "../components/error/Error";
import PokemonDetail from "../components/pokemon-list/pokemon-detail/PokemonDetail";

export default function routes() {
  return (
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="/detail/:id" component={PokemonDetail} />
        <Route path="*" component={Error} />
    </Switch>
  );
}