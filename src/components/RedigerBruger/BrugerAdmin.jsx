import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Axios from 'axios';

const BrugerAdmin = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adresse, setAdresse] = useState("");
    const [nationalitet, setNationalitet] = useState("");
    const [belob, setBelob] = useState("");
    const [kode, setKode] = useState("");

    useEffect(() => {
        Axios.get(`https://worldcruiseapi.azurewebsites.net/bruger/hent/${id}`).then(response => {
            setName(response.data.Navn);
            setEmail(response.data.Email);
            setPassword(response.data.Kodeord);
            setAdresse(response.data.Adresse);
            setNationalitet(response.data.Nationalitet);
            setBelob(response.data.Penge);
            setKode(response.data.Kode);
        });
    }, []);

    function handleSubmit(e){
        e.preventDefault();
        Axios.post(`https://worldcruiseapi.azurewebsites.net/bruger/edit/${id}`, {
            Navn:name,
            Email:email,
            Kodeord: password,
            Adresse: adresse,
            Nationalitet: nationalitet,
            Kode: kode,
        }).then(response => {
            alert("Gemt!");
        });
    }

    function OverfoerPenge(e){
        e.preventDefault();
        let input = document.querySelector("#inputOverfør");
        let newAmount = parseInt(input.value) + parseInt(belob); 
        Axios.post(`https://worldcruiseapi.azurewebsites.net/bruger/edit/${id}`, {
            Penge: newAmount
        }).then(response => {
            setBelob(newAmount);
            input.value = "";
            alert("overført!");
        });
    }

    function slet(){
        if(window.confirm("Er du sikker på at du ville slette denne bruger?")){
            Axios.post(`https://worldcruiseapi.azurewebsites.net/bruger/slet/${id}`).then(response => {              
                window.location.href = "/"; //Forside?  
            });
        }
    }

    return (
        <>
        <h1 className="text-center">Bruger Admin Side</h1>
            <form onSubmit={handleSubmit} className="mb-5">
                <div className="form-group col-md-12">
                    <label htmlFor="inputName4">Navn</label>
                    <input type="text" className="form-control" id="inputName4" placeholder="Navn" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div class="form-group col-md-12">
                    <label for="inputAddress">Addresse</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => setAdresse(e.target.value)} value={adresse} />
                </div>
                <div class="form-group col-md-12">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputText">Kodeord</label>
                    <input type="number" className="form-control" id="inputText" placeholder="Kodeord" onChange={(e) => setKode(e.target.value)} value={kode} />
                </div>
                <div class="form-group col-md-12">
                    <label for="inputState">Nationalitet</label>
                    <input type="text" className="form-control" id="inputText" placeholder="nationalitet" onChange={(e) => setNationalitet(e.target.value)} value={nationalitet} />
                </div>
                <button type="button" onClick={slet} className="btn btn-danger">Slet Profil</button>
                <button type="submit" className="btn btn-primary">Gem</button>
            </form>
            <form onSubmit={OverfoerPenge} className="mb-5">
                <div className="form-group col-md-12">
                    <label htmlFor="inputOverfør">Overfør til World Cruise konto:</label>
                    <input type="number" className="form-control" id="inputOverfør" placeholder="Overførelses beløb" />
                </div>
                <button type="submit" className="btn btn-primary">Overfør</button>

            </form>
            <div className="mb-5">
                <h4>Konto balance: <span class="kontoBalance">{belob} kr.</span></h4>
            </div>
            <h5>Butikker du har handlet i:</h5>
            <table className="mb-5">
                <thead>
                    <tr>
                        <th>Butik</th>
                        <th>Pris</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jysk</td>
                        <td>300 kr.</td>
                    </tr>
                    <tr>
                        <td>THansen</td>
                        <td>540 kr.</td>
                    </tr>
                    <tr>
                        <td>Bilka</td>
                        <td>250 kr.</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default BrugerAdmin

