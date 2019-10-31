import React, {useState} from 'react';
import "./Opretkonto.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';

const OpretKonto = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adresse, setAdresse] = useState("");
    const [kode, setKode] = useState("");
    const [nationalitet, setNationalitet] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        Axios.post("http://worldcruiseapi.azurewebsites.net/bruger/opret", {
            Navn: name,
            Adresse: adresse,
            Email: email,
            Kodeord: password,
            Nationalitet: nationalitet,
            Penge: 0,
            Aktiv: true,
            Kode: kode
        }).then(response => {
            alert("Oprettet bruger!");
        });
    }

    return (
        <div className="OpretKonto">
            <Form onSubmit={handleSubmit} className="OpretKontoForm">
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>Navn*</Form.Label>
                            <Form.Control placeholder="Navn" required onChange={(e) => setName(e.target.value) }/>
                        </Col>
                    </Row>
                </Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password*</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridNation">
                    <Form.Label>Nationalitet</Form.Label>
                    <Form.Control onChange={(e) => setNationalitet(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address*</Form.Label>
                    <Form.Control placeholder="1234 Main St" required onChange={(e) => setAdresse(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Kode</Form.Label>
                    <Form.Control onChange={(e) => setKode(e.target.value)}/>
                </Form.Group>

                <Form.Group className="d-flex justify-content-md-center" id="formGridCheckbox">
                    
                    <Form.Check className="pl-5" type="checkbox" required/>
                    <p>Accept our</p> <a className="pl-1" href="#">conditions</a>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>

        </div>
    )
}

export default OpretKonto;