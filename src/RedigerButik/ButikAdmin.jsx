import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from 'axios';

const ButikAdmin = () => {
  const { id } = useParams();
  const [navn, setNavn] = useState("");
  const [detail, setDetail] = useState("");
  const [email, setEmail] = useState("");
  const [kode, setKode] = useState("");
  const [belob, setBelob] = useState("");
  const [tlf, setTlf] = useState("");

  useEffect(() => {
    Axios.get(`http://worldcruiseapi.azurewebsites.net/butik/${id}`).then(response => {
      console.log(response.data);
      setNavn(response.data.Navn);
      setDetail(response.data.Details);
      setEmail(response.data.Email);
      setKode(response.data.Kode);
      setBelob(response.data.Belob);
      setTlf(response.data.Telefon)
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post(`http://worldcruiseapi.azurewebsites.net/butik/edit/${id}`, {
      Navn: navn,
      Details: detail,
      Email: email,
      Kode: kode,
      Belob: belob,
      Telefon: tlf
    }).then(response => {
      alert("Gemt!");
    });
  }
  
  function slet(){
    if(window.confirm("Er du sikker på at du ville slette butikken?")){
      Axios.post(`http://worldcruiseapi.azurewebsites.net/butik/slet/${id}`).then(response => {
        window.location.href = "/"
      });
    }
  }

  return (
    <>
      <h1 className="text-center">Butik Admin Side</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="form-group col-md-12">
          <label htmlFor="inputEmail4">Logo</label>
          <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputName4">Navn</label>
          <input type="text" className="form-control" id="inputName4" placeholder="Navn" onChange={(e) => setNavn(e.target.value)} value={navn} />
        </div>
        <div class="form-group col-md-12">
          <label for="exampleFormControlTextarea1">Detail Oplyninger</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDetail(e.target.value)} value={detail}></textarea>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputEmail4">Tlf.</label>
          <input type="number" className="form-control" id="inputEmail4" placeholder="tlf" onChange={(e) => setTlf(e.target.value)} value={tlf} />
        </div>
        <div class="form-group col-md-12">
          <label for="inputkodeord">Kodeord:</label>
          <input type="text" className="form-control" id="inputkodeord" placeholder="Kodeord" onChange={(e) => setKode(e.target.value)} value={kode} />
        </div>
        <div class="form-group col-md-12">
          <label for="inputbeløb">Beløb der skal trækkes: </label>
          <input type="text" className="form-control" id="inputbeløb" placeholder="Beløb i kr." onChange={(e) => setBelob(e.target.value)} value={belob} />
        </div>
        <button type="button" onClick={slet} className="btn btn-danger">Slet Profil</button>
        <button type="submit" className="btn btn-primary">Gem</button>
      </form>
      <div className="mb-5">
        <h4>Samlede indtægt: 12.400.545 kr.</h4>
      </div>
    </>
  )
}

export default ButikAdmin
