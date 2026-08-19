class Character {
    constructor(public name: string, public health: number, public level: number) {}

    takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`${this.name} โดนดาบ/เวทโจมตีเสียหาย ${amount} เหลือเลือด ${this.health}`);
    }

    attack(): void {
        console.log(`${this.name} ทำการโจมตี!`);
    }
}

class Mage extends Character {
    constructor(name: string, health: number, level: number, public mana: number) {
        super(name, health, level);
    }

    attack(): void {
        console.log(`${this.name} ร่ายเวทใส่ศัตรู! (มานา: ${this.mana})`);
    }
}

class Warrior extends Character {
    constructor(name: string, health: number, level: number, public stamina: number) {
        super(name, health, level);
    }

    attack(): void {
        console.log(`${this.name} ฟันดาบใส่ศัตรู! (สเตมิน่า: ${this.stamina})`);
    }
}

const mage1 = new Mage("Benn Beckman", 100, 10, 50);
console.log(`จอมเวท: ${mage1.name} | เลเวล: ${mage1.level} | เลือด: ${mage1.health} | มานา: ${mage1.mana}`);
mage1.attack();
mage1.takeDamage(20);

const warrior1 = new Warrior("Shanks", 150, 12, 80);
console.log(`นักรบ: ${warrior1.name} | เลเวล: ${warrior1.level} | เลือด: ${warrior1.health} | สเตมิน่า: ${warrior1.stamina}`);
warrior1.attack();
warrior1.takeDamage(30);