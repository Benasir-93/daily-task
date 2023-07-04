class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getArea(){
        return 3.14* this.radius* this.radius;
    }
    getCircumference(){
        return 2 * 3.14 * this.radius;
    }
    getColor(){
        return "the color of the circle is"+ " "+this.color;
    }
}
const value=new circle(5,"red");
console.log(value.getArea());
console.log(value.getCircumference());
console.log(value.getColor());