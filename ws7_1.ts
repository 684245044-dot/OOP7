export
class Staff {
    constructor(public name: string, public salary: number) {}

    getDetails(): void {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}

class Manager extends Staff {
    constructor(name: string, salary: number, public department: string) {
        super(name, salary);
    }

    getDetails(): void {
        console.log(`Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`);
    }
}

const staff1 = new Staff("Somchai", 25000);
staff1.getDetails();

const manager1 = new Manager("Suda", 50000, "IT");
manager1.getDetails();