// class Figura {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
// }
// class Circulo extends Figura {
//   constructor(radio) {
//     super("circulo");
//     this.radio = radio;
//   }
//   area() {
//     return Math.PI * this.radio * this.radio;
//   }
// }
// const miCirculo = new Circulo(5);
// console.log(miCirculo.area(5));

function foo(a, b = 2) {
    console.log(a - b);

}
foo(5)