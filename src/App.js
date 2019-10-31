// css
import "./components/common/main.scss"
import React from 'react';
import './App.css';
import TilmeldButik from "./components/TilmeldButik/TilmeldButik";
import RedigerButik from "./components/RedigerButik/Butik";
import OpretBruger from "./components/OpretBruger/OpretKonto";
import RedigerBruger from "./components/RedigerBruger/Bruger";
import BrugerLogin from "./components/Login/BrugerLogin";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Kundeservice from './components/Kundeservice';

function App() {
  return (
    <BrowserRouter>
    <div className="hid">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/kundeservice" component={Kundeservice} />
      <Route path="/tilmeldbutik" component={TilmeldButik} />
      <Route path="/redigerbutik/:id" component={RedigerButik} />
      <Route path="/opretbruger" component={OpretBruger} />
      <Route path="/redigerbruger/:id" component={RedigerBruger} />
      {/* <Route path="/login" component={BrugerLogin} /> */}
      <Footer />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
