import React from 'react';
import "./Butik.css";
import profile from "../../Img/profile.png"
import ButikAdmin from './ButikAdmin';

const Butik = () => {
    return (
        <wrapper className="ButikContainer float-left m-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pt-5">
                        <h3 className="text-center">Butik</h3>
                    </div>
                </div>
                <div className="row content mt-5">
                    <div id="first" className="col-lg-6 text-center pl-5 mt-5">
                        <ButikAdmin />
                    </div>
                    <div id="second" className="col-lg-4 mt-5">
                        <img className="img-fluid" src={profile}></img>
                    </div>
                </div>


            </div>

        </wrapper>
    )
}

export default Butik;