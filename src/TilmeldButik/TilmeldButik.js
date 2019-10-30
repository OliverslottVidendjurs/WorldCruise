import React, {useState} from 'react'
import axios from "axios";

const TilmeldButik = () => {
    const [navn, setNavn] = useState("");
    const [adresse, setAdresse] = useState("");
    const [tlf, setTlf] = useState("");
    const [email, setEmail] = useState("");
    const [detail, setDetail] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://worldcruiseapi.azurewebsites.net//butik/opret", {
            Navn: navn,
            Adresse: adresse,
            Telefon: tlf,
            Email: email,
            Details: detail
        }).then(function(){
            alert("Oprettet!");
        });
    }

    return (
        <form onSubmit={handleSubmit} className="needs-validation" novalidate>
            <div className="form-row">
                <div className="col-md-12 mb-3">
                    <label for="validationTooltip01">Butiksnavn</label>
                    <input onChange={(e) => setNavn(e.target.value)} type="text" className="form-control" id="validationTooltip01" placeholder="Butiksnavn" required />
                </div>
                <div className="col-md-12 mb-3">
                    <label for="validationTooltip02">Adresse</label>
                    <input onChange={(e) => setAdresse(e.target.value)} type="text" className="form-control" id="validationTooltip02" placeholder="adresse" required />
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-12 mb-3">
                    <label for="validationTooltip03">Telefon Nurmmer</label>
                    <input onChange={(e) => setTlf(e.target.value)} type="number" className="form-control" id="validationTooltip03" placeholder="Telefon Nurmmer" required />
                </div>
                <div className="col-md-12 mb-3">
                    <label for="validationTooltip04">E-mail</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="validationTooltip04" placeholder="E-mail" required />
                </div>
                <div className="col-md-12 mb-3">
                    <label for="validationTooltip05">Detailopysinger</label>
                    <textarea onChange={(e) => setDetail(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Læs Betingelser <a href="">her.</a></label>
            </div>
            <button className="btn btn-primary" type="submit">Tilmeld Butilken</button>
        </form>



























        /* <form>
        <div className="form-group row">
            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
            </div>
        </div>

        <div className="form-group row">
            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
            </div>
        </div>

        <div className="form-group row">
            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
            </div>
        </div>

        <div className="form-group row">
            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
            </div>
        </div> */








        /* </form > */

    )
}

export default TilmeldButik
