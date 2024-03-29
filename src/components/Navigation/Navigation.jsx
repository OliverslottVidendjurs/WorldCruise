import React from 'react';
import {Link} from "react-router-dom"
import { ReactComponent as Logo } from "./CruiseWorldInc_blaafarver.svg"

// scss
import "./Navigation.scss";
import BrugerLogin from '../Login/BrugerLogin';

const Navigation = () => {
    const handleDisplay = () => {
        let bruger = document.querySelector(".modalBruger");
        let butik = document.querySelector(".modalButik");
        bruger.style.display = "none"
        butik.style.display = "block"
    }
    // let li = document.querySelector("li");
    // li.addEventListener("click", function(){
    //     document.querySelector("#menuToggle ul").style.transform = "translate(50%, 0)";

    // });
    return (
        <div className="position-fixed w-100 zindex">
            <nav role="navigation" id="navigation" className="row position-relative">
                <a href="/" className="col-11">
                    <Logo className="logo" />
                </a>
                <div id="menuToggle" className="col-1">

                    <input type="checkbox" className="burger" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <Link to="/"><li>Forside</li></Link>
                        <Link to="/nyheder"><li>Nyheder</li></Link>
                        <Link to="/kundeservice"><li>Kundeservice</li></Link>
                        <Link to="/firmaprofil"><li>Firmaprofil</li></Link>
                        <Link to="/opretbruger"><li>Opret konto</li></Link>
                        <Link to="/tilmeldbutik"><li>Tilmeld butik</li></Link>
                        <form action="">
                            <input type="text" />
                            <button type="submit">Search</button>
                        </form>
                        <div className="login">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#BrugerModal">
                                Login
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
            <div className="modal fade" id="BrugerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modalBruger" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Bruger Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <BrugerLogin />
                                        </div>
                        <div className="modal-footer">
                            <button onClick={handleDisplay} type="button" className="btn btn-primary" data-toggle="modal" data-target="#ButikModal">
                                Butik Login
                            </button>                            <button type="button" className="btn btn-primary">Login Admin</button>
                        </div>
                    </div>
                </div>
                <div className="modal-dialog modalButik" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Butik Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <BrugerLogin />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ButikModal">
                                Bruger Login
                            </button>    
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ButikModal">
                                Admin Login
                            </button>                         
                        </div>
                    </div>
                </div>
                <div className="modal-dialog modalButik" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Admin Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <BrugerLogin />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ButikModal">
                                
                            </button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
