import React from 'react'
import { ReactComponent as Logo } from "./logo.svg"

import "./Footer.scss"
const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <Logo className="logo2" />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique ad deleniti corporis tempore odio numquam labore minima eligendi. Minima!</p>

                        </div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-12">
                    <h3>Kontakt</h3>
                    <ul>
                   <li> <i class="fas fa-map-marker-alt"></i>email@email.com</li>
                   <li> <i class="fas fa-envelope"></i>email@email.com</li>
                    <li><i class="fas fa-phone-alt"></i>email@email.com</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-12" id="icons">
                    <h3>Følg os</h3>
                    <div className="col-12">
                    <a href="facebook.com"><img src="" alt=""/><i class="fab fa-facebook"></i></a>
                    <a href="facebook.com"><img src="" alt=""/><i class="fab fa-instagram"></i></a>
                    </div>
                    <div className="col-12">
                    <a href="facebook.com"><img src="" alt=""/><i class="fab fa-twitter"></i></a>
                    <a href="facebook.com"><img src="" alt=""/><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">World Cruise Inc</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
