import React from 'react'
import { ReactComponent as Logo } from "../Navigation/CruiseWorldInc_blaafarver.svg"

import "./Footer.scss"
const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <Logo className="logo2" />
                        </div>
                        <div className="col-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique ad deleniti corporis tempore odio numquam labore minima eligendi. Minima!</p>

                        </div>
                    </div>

                </div>
                <div className="col-3">
                    <h3>Kontakt</h3>
                    <ul className="list-style-none">
                        <li>email@email.com</li>
                        <li>email@email.com</li>
                        <li>email@email.com</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h3>Følg os</h3>
                    <a href="facebook.com"><img src="" alt=""/></a>
                    <a href="facebook.com"><img src="" alt=""/></a>
                    <a href="facebook.com"><img src="" alt=""/></a>
                    <a href="facebook.com"><img src="" alt=""/></a>
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
