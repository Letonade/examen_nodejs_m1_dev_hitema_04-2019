const express = require('express');
const HttpStatus = require('http-status-codes');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();

app.use('/api/v1', v1);

v1.get('/people',  (request, response) => {
    const filter = request.query;
    console.log(filter);
    try {
        const people = peopleService.getPeople(filter);
         response.send(people);
    } catch (error) {
        response.sendStatus(HttpStatus.NOT_FOUND).end(error);
    }
});

v1.put('/people/:id',   (request, response) => {
    const id = parseInt(request.params.id);
    const people = request.body;
    try {
        const result =  peopleService.updatePeople( id, people);
        if (!result.isModified) return response.sendStatus(HttpStatus.NOT_FOUND);
        response.sendStatus(HttpStatus.OK);
    } catch (error) {
        response.sendStatus(HttpStatus.NOT_FOUND).end(error);
    }
});


module.exports = app;
