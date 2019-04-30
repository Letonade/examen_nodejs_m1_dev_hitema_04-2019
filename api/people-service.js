const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {

        const peopleIndex = this.peoples.findIndex(
            people => people.id === id
        );
        if(peopleIndex === -1)return Promise.reject('invalide id');

        this.peoples[peopleIndex] = people;
        return {isModified: true};
    }
    
    getPeople(filters) {
        // To be implemented!
        console.log(Object.keys(filters).length);
        if(Object.keys(filters).length === 0)
        {
            return this.peoples;
        }
        else
        {
            console.log('TEST');
            const peopleIndex = this.peoples.filter(
                people => people[Object.keys(filters)[0]]===filter[Object.keys(filters)[0]]
            );
            return peopleIndex;
        }
    }
}
