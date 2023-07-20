// implement your API here
const express = require('express');//import express from 'express';
const database = require('./data/db');


const server = express();// creates and Express app we use to configure server 

// "/" -> this is the URL that will trigger the get request , req and res argument are and object with methods and properties

server.get('/', (req, res) => { 
//this function is the request handler function 
    res.send('Hello World!')
}); // this is a configure of and endpoint 

server.get('/hobbits', (req, res) => {
    // create a list of hobbits 
    const hobbits = [
        { id:1, name: 'Samwise Gamgee' },
        { id:2, name: 'Frodo Baggins' },
    ];

    // http response status code 

    res.status(200).json(hobbits);
    
})

server.get('/users', (req, res) => {

    database.find()
    .then( resp => res.status(200).json(resp))
    .catch( error => res.status(500).json(error))
})

server.listen(8000, () => console.log('API running on port 8000'))
