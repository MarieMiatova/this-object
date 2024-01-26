import readlineSync from 'readline-sync';


const calculator = {
    a: 0,
    b: 0,
    read: function() {
        this.a = readlineSync.question('значение a: ');
        this.b = readlineSync.question('значение b: ');
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
};



export default calculator;