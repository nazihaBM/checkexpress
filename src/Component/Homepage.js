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

      router.get('/Homepage',function(req,res) {
        res.send('my Homepage');
      })
      router.post('/Homepage',function(req,res){
        res.send('my Homepage');
      })
      router.put('/Homepage',function(req,res) {
        res.send('my Homepage');
      })
    
      router.delete('/Homepage',function(req,res) {
        res.send('my Homepage');
      });
      module.exports=router
   
  );
}

export default ColorSchemesExample;
