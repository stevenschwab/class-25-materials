//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class MakeEspressoMachine{
    constructor(color, size, weight, price){
        this.color = color
        this.size = size
        this.weight = weight
        this.price = price
    }
    turnOn(){
        alert('Espresso machine turned on');
    }
    grindCoffeeBeans(){
        alert('Beans being ground');
    }
    brewEspresso(){
        alert('Brewing espresso...');
    }
}

let espressoMachine = new MakeEspressoMachine('grey', 'medium', 30, 500);
console.log(espressoMachine);