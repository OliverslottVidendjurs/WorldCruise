import React from 'react';
import logo from './logo.svg';
import './App.css';
import TilmeldButik from "./TilmeldButik/TilmeldButik";
import RedigerButik from "./RedigerButik/ButikAdmin";
import OpretBruger from "./OpretBruger/OpretKonto";
import RedigerBruger from "./RedigerBruger/BrugerAdmin";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/tilmeldbutik" component={TilmeldButik}/>  
      <Route path="/redigerbutik/:id" component={RedigerButik}/>  
      <Route path="/opretbruger" component={OpretBruger}/>   
      <Route path="/redigerbruger/:id" component={RedigerBruger}/>  
    </BrowserRouter>
  );
}

export default App;
