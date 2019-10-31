import React from 'react'
import Navigation from '../Navigation/Navigation'

// scss 
import "./Header.scss";
const Header = () => {
    return (
        <div id="header">
            {/* <Navigation /> */}
            <div className="row">
              <div className="offset-3 col-6 bg-gray text-center text-light p-5">
                <h1>World Cruise Inc.</h1>
                <p>Let’s go on an adventure</p>
            </div>  
            </div>
            
        </div>
    )
}

export default Header;
