// Singleto pattern is used when you need exaclty one instance of an object globally
// in other words it restricts the instanciation of a class to one instance

// Lets create a class with static getInstance method:
class Dragon {
    constructor(_difficulty){
        this.name = 'Dragon' + _difficulty
        this.health = 100 * (1 + Math.round(_difficulty / 10))
        this.damage = 25 * (1 + Math.round(_difficulty / 10))
        this.range = 8 * _difficulty
    }

    static getInstance(difficulty){
        if (!this.instance) {
            this.instance = new Dragon(difficulty)
        }
        return this.instance
    }
}

// Now lets try to create two instances of Dragon class:

// const boss3 = Dragon.getInstance(8)
// const boss4 = Dragon.getInstance(9)
// const boss1 = Dragon.getInstance(4)
// const boss2 = Dragon.getInstance(2)

// When you log them you notice that the second call returned the same object
// No matter how much you call this method it always gonna return the first created object

// console.table([boss1, boss2, boss3, boss4])

// The best way to implement Singleton pattern in JS ES6 is to use technique above
// In combination with ES6 modules like so:

const finalBoss = Dragon.getInstance(10)

// Freeze the object so it wont`t be channged accidently;
Object.freeze(finalBoss)

export default finalBoss