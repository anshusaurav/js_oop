class Rectangle{
    constructor(w, h, c) {
        this.width = w;
        this.height = h;
        this.color = c;
    }
    calcArea(){
        return this.width*this.height;
    }
    printRect(){
        console.log(`Rectange has dimension ${this.width}X${this.height} and color ${this.color}`);
    }
}

let rect1 = new Rectangle(10, 20, 'red');
let rect2 = new Rectangle(5, 10, 'green');
console.log(rect1.calcArea());
console.log(rect2.calcArea());
rect1.printRect();
rect2.printRect();





class Square{
    constructor(w){
        this.width = w;
        this.height = w;
        this.numCallsToArea = 0;
    }
    get area (){
        this.numCallsToArea++;
        return this.width*this.height;
    }
    set area(a){
        this.width = Math.sqrt(a);
        this.height = Math.sqrt(a);
    }
    static isValidDimension(w,h){
        return w === h;
    }
    static isEqual(a, b){
        return a.width*a.height === b.width*b.height;
    }
}

let sq = new Square(10);
console.log(sq.area);
sq.area = 25;
console.log(sq.height);
console.log(sq.area);
console.log(sq.area);
console.log(sq.area);
console.log(sq.area);
console.log(sq.numCallsToArea);
console.log(Square.isValidDimension(5,6));
console.log(Square.isValidDimension(5,5));
let sq1 = new Square(15);
let sq2 = new Square(5);
console.log(Square.isEqual(sq1,sq2));
console.log(Square.isEqual(sq,sq2));




class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

}
class Programmer extends Person{
    constructor(_name, _age, _exp){
        super(_name, _age);
        this.yearsOfExp = _exp;
    }
    code (){
        console.log(`${this.name} codes`);
    }
}

let programmers = [new Programmer('Mark',34, 10), new Programmer('Will', 31, 5)];
for(let programmer of programmers){
    programmer.code();
}


class Animal{
    constructor(_nm){
        this.name = _nm;
    }
    makeSound() {
        console.log('Generic Animal Sound');
    }
}

class Dog extends Animal{
    constructor(_nm){
        super(_nm);
    }
    makeSound(){
        console.log('Woof!');
    }
}

let ani1 = new Animal('OLP');
let ani2 = new Dog('Pochi');
ani1.makeSound();
ani2.makeSound();

class UlBinding{
    constructor(_ulElem){
        this.ulElem = _ulElem;
        this.sst = [];
    }

    static createLi(str){
        let elem = document.createElement('li');
        elem.textContent = str;
        return elem;
    }
    update(){
        while(this.ulElem.firstChild){
            this.ulElem.removeChild(this.ulElem.firstChild);
        }
        for(let li of this.sst) {
            this.ulElem.append(UlBinding.createLi(li));
        }
    }
    add(str){
        this.sst.push(str);
        this.update();
    }
    remove(ind){
        this.sst.splice(ind,1);
        this.update();
    }
}