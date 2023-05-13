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
      //Use Express to create the server and handle routes.
      const express = require('express');
      const router = express.Router();

      router.get('/contactus',function(req,res) {
        res.send('my contacts');
      })
      router.post('/contactus',function(req,res){
        res.send('my contacts');
      })
      router.put('/contactus',function(req,res) {
        res.send('my contacts');
      })
    
      router.delete('/contactus',function(req,res) {
        res.send('my contacts');
      })
      //Create a custom middleware to verify the time of the request.
      const express = require('express')
      const app = express()
      
      const requestTime = function (req, res, next) {
        req.requestTime = Date.now()
        next()
      }
      
      app.use(requestTime)
      
      app.get('/', (req, res) => {
        let responseText = 'Hello World!<br>'
        responseText += `<small>Requested at: ${req.requestTime}</small>`
        res.send(responseText)
      })
      
      app.listen(3000)
       );
}

export default ColorSchemesExample;
