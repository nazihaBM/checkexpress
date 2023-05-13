import React from 'react';
import './App.css';
import homepage from './Component/Homepage';
import Contactus from './Component/Contactus';
import Ourservice from './Component/Ourservice';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Contactus/>
      <Ourservice/>
     

    </div>
    const express = require("express");
    const app = express();
    const PORT = 8081;
    const Contactusroute =require('./Component/Contactus');
    const Homepageroute = require('./Component/Homepage');
    const Ourserviceroute =require('./Component/Ourservice');

//app.use("/Contactus",Contactusroute);
//pp.use("/Homepage",Homepageroute);
//app.use("/Ourservice",Ourserviceroute);



    app.listen(PORT, () => {
        console.log(`Server running`);
    });
    ***********************************************************
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
    ****************************************************************
  );
}

export default App;
