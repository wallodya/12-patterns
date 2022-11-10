// Creating classes for diffirent type of mobs
class Zombie {
    constructor(_name, _healthPoints, _damage, _difficulty) {
        this.name = _name
        this.health = _healthPoints * (1 + Math.round(_difficulty / 10))
        this.damage = _damage * (1 + Math.round(_difficulty / 10))
    }
}
class Skeleton {
    constructor(_name, _healthPoints, _damage, _difficulty) {
        this.name = _name
        this.health = _healthPoints * (1 + Math.round(_difficulty / 10))
        this.damage = _damage
        this.range = 10 * _difficulty
    }
}
class Spider {
    constructor(_name, _healthPoints, _damage, _difficulty) {
        this.name = _name
        this.health = _healthPoints * (1 +Math.round(_difficulty / 10))
        this.damage = _damage * (1 + Math.round(_difficulty / 10))
        this.canClimbWalls = !!(_difficulty >= 5)
    }
}

// Creating class (factory) for spawning single mob
class MobFactory {
    static spawn(type, name, healthPoints, damage, difficulty) {
        switch (type) {
            case 'zombie' : {
                return new Zombie(name, healthPoints, damage, difficulty)
            }
            case 'skeleton' : {
                return new Skeleton(name, healthPoints, damage, difficulty)
            }
            case 'spider' : {
                return new Spider(name, healthPoints, damage, difficulty)
            }
        }
    }
}
// Now we don`t need to memorize and call mob classes individually
// We can just spawn them using static spawn method from MobFactory class like so:
const zombieJorge = MobFactory.spawn('zombie', 'Jorge', 10, 4, 1)
const skeletonMichel = MobFactory.spawn('skeleton', 'Michel', 8, 5, 2)
let spiders = []
for (let i = 1; i < 5; i++) {
    const spider = MobFactory.spawn('spider', 'Spider' + i, 7, 8, Math.round(Math.random() * 10))
    spiders.push(spider)
}

// const mobs = [zombieJorge, skeletonMichel, ...spiders]
// console.table(mobs)

// Basically we have a class (a method, actually) specifically for creating objects(instances) of other class(es)
export default MobFactory