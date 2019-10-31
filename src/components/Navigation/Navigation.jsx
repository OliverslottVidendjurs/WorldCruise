import React from 'react';
import {Link} from "react-router-dom"
import { ReactComponent as Logo } from "./CruiseWorldInc_blaafarver.svg"

// scss
import "./Navigation.scss";
import BrugerLogin from '../Login/BrugerLogin';

const Navigation = () => {
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
                        <a href="#"><li>Nyheder</li></a>
                        <a href="#"><li>Kundeservice</li></a>
                        <a href="#"><li>Firmaprofil</li></a>
                        <a href="#"><li>Opret konto</li></a>
                        <a href="#"><li>Tilmeld butik</li></a>
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
                <div className="modal-dialog" role="document">
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
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ButikModal">
                                Butik Login
                            </button>                            <button type="button" className="btn btn-primary">Login Admin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
