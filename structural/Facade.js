// Facade pattern is when you "hide" some logic and manipulations
// and wrap it in new function or class,
// providing easier to use API

// Lets import MobFactory class so we can create mobs:
import MobFactory from "../creational/Factory.js";

// Now lets write a class which creates a room with mobs:
class Room {
    constructor(_width, _length, _lightLevel){
        // Some random props:
        this.width = _width
        this.length = _length
        this.lightLevel = _lightLevel
        this.mobs = []
    }

    // And some methods to add mobs to the room:
    addMob(type, name, healthPoints, damage, difficulty) {
        this.mobs.push(MobFactory.spawn(type, name, healthPoints, damage, difficulty))
        return this
    }

    // And for adding multiple mobs:
    addMobs(mobs) {
        for (const mob of mobs) {
            this.mobs.push(MobFactory.spawn(mob.type, mob.name, mob.healthPoints, mob.damage, mob.difficulty))
        }
        return this
    }
}

// Now we can create a room like so:
const room = new Room(10, 10, 7)
console.table(room)

// And then add some mob to it:
room.addMob('zombie', 'Jeff', 12, 9, 6)

// And some more with addMobs:
room.addMobs([
    {
        type: 'skeleton',
        name: 'Kyle',
        healthPoints: 12,
        damage: 8,
        difficulty: 6
    },
    {
        type: 'zombie',
        name: 'Josh',
        healthPoints: 16,
        damage: 4,
        difficulty: 5
    },
    {
        type: 'spider',
        name: 'Kyle',
        healthPoints: 13,
        damage: 18,
        difficulty: 7
    },
    {
        type: 'skeleton',
        name: 'Fred',
        healthPoints: 10,
        damage: 9,
        difficulty: 8
    },
])

console.table(room.mobs)