import React from 'react'
import './Butik.css'
import Firma from './Firma/Firma'



const Butik = (props) => {

    const alleButikker = props.alleButikkerProps.map(b => {
        return (
            
       
            <Firma b={b}/>
            
            
        )
    })


    return (  
        <>
        {alleButikker}
        </>
    );
}
 
export default Butik;