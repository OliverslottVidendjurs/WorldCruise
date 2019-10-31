import React from 'react';
import './App.css';
import TilmeldButik from "./components/TilmeldButik/TilmeldButik";
import RedigerButik from "./components/RedigerButik/ButikAdmin";
import OpretBruger from "./components/OpretBruger/OpretKonto";
import RedigerBruger from "./components/RedigerBruger/BrugerAdmin";
import BrugerLogin from "./components/Login/BrugerLogin";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {BrowserRouter, Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>  
      <Route path="/tilmeldbutik" component={TilmeldButik}/>  
      <Route path="/redigerbutik/:id" component={RedigerButik}/>  
      <Route path="/opretbruger" component={OpretBruger}/>   
      <Route path="/redigerbruger/:id" component={RedigerBruger}/>
      <Route path="/login" component={BrugerLogin}/>  
    </BrowserRouter>
  );
}

export default App;
