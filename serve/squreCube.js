// Write class Square, define protected property (are not visible from outside
//     the class) to store side values. To access this property, define necessary
//     methods. Also define public method, which returns perimeter.

//     Based on class Square create class Cube and override method, which
//     returns perimeter.
//     Implement 2 versions of override method:
//     1.Without extension (completely override);

//     2. With extension (use parent method result for calculations).
// Пишемо клас Square, визначаємо захищене властивість (не видно зовні
// клас) для зберігання бічних значень. Щоб отримати доступ до цього властивості, визначте необхідне
// методи. Також визначається відкритий метод, який повертає периметр.

// На основі класу Square створюємо клас Cube і метод override, який
// повертає периметр.
// Запровадити 2 варіанти методу перевизначення:
// 1.Без розширення (повністю перекрити);

// 2. З розширенням (використовуйте результат обчислення).

class Square {
    static aside(a) {
        this.a = a;
        this.p = 0;
    }
    constructor(a) {
        this.a = a;
    }
    getPerimeter() {
        return this.p = 4 * this.a;
    }

}

// const cube = new Cube(2);
class Cube extends Square {
    constructor(){
        super(a,p);
        this.a = a;
        this.p = p;
    }
    override(a) {
        return this.p = 12 * this._a;
    }
}
const cube = new Cube(2);
console.log(cube.override(2));