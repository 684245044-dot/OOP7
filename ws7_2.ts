class Shape {
    constructor(public color: string) {}
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(color: string, public side: number) {
        super(color);
    }

    calculateArea(): number {
        return this.side * this.side;
    }
}

const circle1 = new Circle("rainbow", 5);
console.log(`Color: ${circle1.color}, Area: ${circle1.calculateArea()}`);

const square1 = new Square("Blue", 4);
console.log(`Color: ${square1.color}, Area: ${square1.calculateArea()}`);