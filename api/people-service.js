const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
        return id+people;
    }
    
    getPeople(filters) {
        console.log(filters)
        if (filters) {
            return filters
        }else{
            return this.peoples;
        }
    }
}
