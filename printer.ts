class Printer {
    print() {
        console.log("I am a printer");
    }
}
class colorPrinter extends Printer {
    print() {
        console.log("I am a color printer");
    }
}
const printer1 = new Printer();
printer1.print();

const colorPrinter1 = new colorPrinter();
colorPrinter1.print();