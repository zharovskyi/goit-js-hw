// Write class Circle and implement following functionality:
// 1. Properties: center coordinates and radius;

// 2. Define constructor with parameters for initialize object;

// 3. Define method, which returns length of circumference (L = 2 * π * R);

// 4. Define method, which returns copy of current object;

// 5. Define method, which converts current state of object to string and return result;

// 6. Define static method, which takes radius and returns length of circumference for given
// radius.
 class Circle {
     constructor(center, radius){
         this.center = center;
         this.radius = radius;
         this.p = 3.14;
         this.length = 0;

     }
     getLength(){
        return this.length = 2* this.p * this.radius;
     }
     getCopyObject(obj){
         return Object.assign(obj);
     }
     getString(obj) {
         let str;
         str = JSON.stringify(obj);
         return str;
     }
 }
 const newCircle = new Circle(10,10);
 const a = {length: 12};
 console.log(newCircle.getString(Circle));