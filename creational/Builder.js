// Useful when you need to create objects with lots of optional fields and overall complex structure

// There are multiple ways to implement it in JS:

// With set methods:
// Lets asume name is the only required parameter
class Player1 {
    constructor(name) {
        // Settinng default values:
        this.name = name
        this.health = 8
        this.maxHealth = 8
        this.maxStamina = 10
        this.maxMana = 10
        this.weapon = null
        this.armor = {
            head: 'helmet',
            chest: 'chestplate',
            legs: 'leggins',
            feet: 'boots'
        }
    }

    setHealth(healthPoints) {
        this.health = healthPoints
        // returning "this" so we can chain set methods 
        return this
    }

    setMaxHealth(maxHealth) {
        this.maxHealth = maxHealth
        return this
    }

    setWeapon(weapon) {
        this.weapon = weapon
        return this
    }

    setArmor(armor) {
        this.armor = armor
        return this
    }

    setMaxStamina(maxStamina) {
        this.maxStamina = maxStamina
        return this
    }

    setMaxMana(maxMana) {
        this.maxMana = maxMana
        return this
    }
}

// Creating innstances like so:
const player1 = new Player1('Ivan')
    .setHealth(10)
    .setMaxHealth(12)
    .setMaxMana(20)
    .setMaxStamina(18)
    .setArmor({
        head: null,
        chest: 'chestplate',
        legs: 'iron leggins',
        feet: 'leather boots'
    })
    .setWeapon('sword')

const player2 = new Player1('Boris')

// console.table([player1, player2])



// With JS object destructuring and default props:
class Player2 {
    constructor(
        _name, 
        // Passing all optional props as an object:
        {
            _health=8,
            _maxHealth=8,
            _maxStamina=10,
            _maxMana=10,
            _armor={
                head: 'helmet',
                chest: 'chestplate',
                legs: 'leggins',
                feet: 'boots'
            },
            _weapon='sword'
        } = {} //Also need to default it to empty object so it`ll always be defined
    ){
        this.name = _name
        this.health = _health
        this.maxHealth = _maxHealth
        this.maxStamina = _maxStamina
        this.maxMana = _maxMana
        this.weapon = _weapon
        this.armor = _armor
    }
    // No need for additional methods
}

const player3 = new Player2('Steve')
const player4 = new Player2('George', {
    _health: 43,
    _maxHealth: 81,
    _maxMana: 36,
    _maxStamina: 24,
    _armor: {
        head: 'some helmet',
        chest: 'leather jacket',
        legs: 'leggins'
    }
})

player3.weapon = 'bow'
console.table([player3, player4])
console.table(player4.armor)

// With child Builder class (kinda wierd one):
class Player3 {
    constructor(name) {

    }

    static get Builder() {
        class Builder {
            constructor(name) {
                this.name = name
                // Settinng default values the same way:
                this.name = name
                this.health = 8
                this.maxHealth = 8
                this.maxStamina = 10
                this.maxMana = 10
                this.weapon = null
                this.armor = {
                    head: 'helmet',
                    chest: 'chestplate',
                    legs: 'leggins',
                    feet: 'boots'
                }
            }

            withHealth(healthPoints) {
                this.health = healthPoints
                return this
            }

            withMaxHealth(maxHealth) {
                this.maxHealth = maxHealth
                return this
            }

            withWeapon(weapon) {
                this.weapon = weapon
                return this
            }

            withArmor(armor) {
                this.armor = armor
                return this
            }

            withMaxStamina(maxStamina) {
                this.maxStamina = maxStamina
                return this
            }

            withMaxMana(maxMana) {
                this.maxMana = maxMana
                return this
            }
            build() {
                return new Player3(this)
            }
        }
        return Builder
    }
}

// Lets create players with this class:
const player5 = new Player3.Builder('Alex')

const player6 = new Player3.Builder('Max')
    .withHealth(10)
    .withMaxHealth(12)
    .withMaxMana(20)
    .withMaxStamina(18)
    .withArmor({
        head: null,
        chest: 'chestplate',
        legs: 'iron leggins',
        feet: 'leather boots'
    })
    .withWeapon('sword')

// console.table([player3, player4])