import React, {useState} from "react";
import Axios from "axios";

function BrugerLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        Axios.post("http://worldcruiseapi.azurewebsites.net/bruger/login", {
            Email: email,
            Kodeord: password
        }).then(response => {
            window.location.href = `/redigerbruger/${response.data}`
        }).catch(error => {
            if(error.response.status === 400){
                alert("Forkert email eller password!");
            }
        });
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>
            <button type="submit">Login</button>
        </form>
    );
}

export default BrugerLogin;