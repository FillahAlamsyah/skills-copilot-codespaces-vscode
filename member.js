function skillsMember() {
    return {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        greeting: function() {
            return `Hello, I'm ${this.name}. I'm ${this.age} years old.`
        }
    }
}