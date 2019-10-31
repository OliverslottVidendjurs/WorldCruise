import React from 'react'
import './Firma.css'


const Firma = (props) => {
    return (


        <div className="justify-content-center Butik-container"  key={props.b.id}>
            <a href={props.b.butikWeblink} target="blank"><img src={"/img/" + props.b.butiklogo} className="Butikker-Logo" alt="Firma" /></a>
            <section className="ButikInfo-Container">
                <header className="text-center ButikInfo-Container-header"><h4>{props.b.butik}</h4></header>
                <article className="ButikInfo-Container-article mt-1">
                    <p className="font-text">Adresse: {props.b.butikadresse}</p>
                    <p>Tlf: {props.b.butiktlf}</p>
                    <a href={props.b.butikWeblink} target="blank">{props.b.butikWeblinkName}</a>
                    
                </article>           
                
            </section>
        </div>
    );
}

export default Firma;