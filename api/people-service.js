const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        const nop = -1;
        const peopleIndex = this.peoples.findIndex(
            people => people.id === id
        );
        if(peopleIndex === nop)return Promise.reject('invalide id');

        this.peoples[peopleIndex] = people;
        return {isModified: true};
    }
    
    getPeople(filters) {
        // To be implemented!
        const nol = 0;
        console.log(Object.keys(filters).length);
        if(Object.keys(filters).length === nol)
        {
            return this.peoples;
        }
        else
        {
            console.log('TEST1');
            const peopleIndex = this.peoples.filter(
                people => people[Object.keys(filters)[0]]===filters[Object.keys(filters)[0]]
            );
            console.log('TEST2');
            return peopleIndex;
        }
    }
}
