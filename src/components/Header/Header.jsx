import React from 'react'
import Navigation from '../Navigation/Navigation'

// scss
import "./Header.scss";
const Header = () => {
    return (
        <div id="header">
            <Navigation />
            <div className="row">
              <div className="offset-3 col-6 bg-gray text-center text-light p-5">
                <h1>Overskrift</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati.</p>
            </div>  
            </div>
            
        </div>
    )
}

export default Header
