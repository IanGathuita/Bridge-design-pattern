/*Avoid extending a class in 2 or more dimensions. Avoids no. of subclasses growing exponentially e.g redOval class, blueOvalClass, redCircle
class, blueCircle class, redTriangle class, blueTriangle class */
// Create multiple inheritance hierachies, bridge them with composition e.g color hierachy ( with blue & red classes only once)

interface Shape{
    shapeName:string;
    shapeColor:Color;
}
interface Color{
    color:string;
}

class Triangle implements Shape{
    shapeName = 'triangle'
    shapeColor:Color;
    setSides(sides: number) {
        
    }
    constructor(color:Color){
        this.shapeColor = color;
    }
}

class Circle implements Shape{
    shapeName: string = 'circle';
    shapeColor:Color;

    constructor(color:Color){
        this.shapeColor = color;
    }
}

class Oval implements Shape{
    shapeName: string = 'oval';
    shapeColor:Color;

    constructor(color:Color){
        this.shapeColor = color;
    }
}

class Red implements Color{
    color: string = 'red'; 
}

class Blue implements Color{
    color =  'blue';    
}

const blueTriangle = new Triangle(new Blue());
console.log('blueTriangle: ', blueTriangle.shapeColor.color, blueTriangle.shapeName);

const redCircle = new Circle(new Red());
console.log('redCircle: ', redCircle.shapeColor.color, redCircle.shapeName);

const redOval = new Oval(new Red());
console.log('redOval: ', redOval.shapeColor.color, redOval.shapeName);