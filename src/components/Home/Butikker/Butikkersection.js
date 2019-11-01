import React, {useState} from 'react'
import './Butikkersection.css'
import Butik from './Butik/Butik'

function Butikkersection () {
    const [Butikker, setButikker] = useState([
        {
            butiklogo: "Done-jack-and-jones.png",
            butik: "Jack & Jones",
            butikadresse: "Kongensgade 71, 6700 Esbjerg",
            butiktlf: "+45 76 56 40 77",
            butikWeblink: "https://www.jackjones.com/dk/da/home",
            butikWeblinkName: "Se hjemmeside",
            id: 1
        },
        {
            butiklogo: "Done-Netto-logo.png",
            butik: "Netto",
            butikadresse: "Skovvejen 17, 8000 Aarhus",
            butiktlf: "+45 87 78 78 11",
            butikWeblink: "https://netto.dk/",
            butikWeblinkName: "Se hjemmeside",
            id: 2
        },
        {
            butiklogo: "Done-Rema_1000_logo.png",
            butik: "Rema 1000",
            butikadresse: "Havnevej 128, 8500 Grenå",
            butiktlf: "+45 86 30 12 22",
            butikWeblink: "https://rema1000.dk",
            butikWeblinkName: "Se hjemmeside",
            id: 3
        },
        {
            butiklogo: "Done-Foetex.png",
            butik: "Føtex",
            butikadresse: "Rådhus Alle 83, 9900 Frederikshavn",
            butiktlf: "+45 96 22 30 00",
            butikWeblink: "https://www.foetex.dk/kundeservice/find-din-foetex/s/ce2626bd-4c7b-4108-8deb-a37e3156e063/frederikshavn/f%C3%B8tex-frederikshavn",
            butikWeblinkName: "Se hjemmeside",
            id: 4
        },
        {
            butiklogo: "Done-Esbjerg-havn.png",
            butik: "Esbjerg havn",
            butikadresse: "Hulvejen 1 DK-6700 Esbjerg, Denmark",
            butiktlf: "+45 76 12 40 00",
            butikWeblink: "https://portesbjerg.dk/da",
            butikWeblinkName: "Se hjemmeside",
            id: 5
        },
        
    ])


    return (
        <section className="Butikker-container">
            <section className="d-flex justify-content-center flex-wrap alleButikkerSection">
                <Butik alleButikkerProps={Butikker} />
            </section>

        </section>
    )
}

export default Butikkersection