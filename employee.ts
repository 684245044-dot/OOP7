class Employee {
    constructor(public name: string) {}
}

class Programmer extends Employee {
    constructor(name: string, public lang: string) {
        super(name);
    }
}

class Manager extends Employee {
    constructor(name: string, public dept: string) {
        super(name);
    }
}

const emp1 = new Employee("ภาณุวัฒน์");
console.log(emp1.name);

const programmer1 = new Programmer("ชิตาภา", "TypeScript");
console.log(programmer1.name);
console.log(programmer1.lang);

const manager1 = new Manager("สมชาย", "IT");
console.log(manager1.name);
console.log(manager1.dept);