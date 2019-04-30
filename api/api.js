const express = require('express');

const HttpStatus = require('http-status-codes');
const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();

const bodyParser = require('body-parser');
const v1 = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);


// To be implemented!
console.log('peopleService' + peopleService.getPeople('test'));

v1.get('/people', async (request, response) => {
	params = request.query;
    const data = await peopleService.getPeople(params)
        response.send(data);
});

module.exports = app;
