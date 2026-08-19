class Character {
    constructor(public name: string, public health: number, public level: number) {}

    takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage, remaining health: ${this.health}`);
    }

    attack(): void {
        console.log(`${this.name} attacks!`);
    }
}

class Mage extends Character {
    constructor(name: string, health: number, level: number, public mana: number) {
        super(name, health, level);
    }

    attack(): void {
        console.log(`${this.name} attacks using Spell! Mana: ${this.mana}`);
    }
}

class Warrior extends Character {
    constructor(name: string, health: number, level: number, public stamina: number) {
        super(name, health, level);
    }

    attack(): void {
        console.log(`${this.name} attacks using Sword! Stamina: ${this.stamina}`);
    }
}

const mage1 = new Mage("Benn Beckman", 100, 10, 50);
console.log(`Mage Name: ${mage1.name}, Health: ${mage1.health}, Level: ${mage1.level}, Mana: ${mage1.mana}`);
mage1.attack();
mage1.takeDamage(20);

const warrior1 = new Warrior("Shanks", 150, 12, 80);
console.log(`Warrior Name: ${warrior1.name}, Health: ${warrior1.health}, Level: ${warrior1.level}, Stamina: ${warrior1.stamina}`);
warrior1.attack();
warrior1.takeDamage(30);