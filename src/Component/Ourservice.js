import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/Navbar">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/Homepage">Homepage</Nav.Link>
            <Nav.Link to="/Our Service">Our Service</Nav.Link>
            <Nav.Link to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </>
      const express = require('express');
      const router = express.Router();

     router.get('/Ourservice',function(req,res) {
        res.send('my contacts');
      })
      router.post('/Ourservice',function(req,res){
        res.send('my contacts');
      })
      router.put('/Ourservice',function(req,res) {
        res.send('my Ourservice');
      })
    
      router.delete('/Ourservice',function(req,res) {
        res.send('my Ourservice');
      })
   
  );
}

export default ColorSchemesExample;
