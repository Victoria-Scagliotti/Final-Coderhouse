// Bienvenida

let usuarioAutorizado = "Admin"
let contraseniaAutorizada = "1234"

let welcome = confirm('Hola fanáticos! Están listos para romper el chanchito y llevarse artículos de su shooter favorito?');

if (welcome) {

    let usuario = prompt("Ingrese su nombre de usuario RIOT");
    console.log(usuario);
    
    let contrasenia = prompt("Ingrese su contraseña: ");
    console.log(contrasenia);
    
    do{
        alert('Upss... los datos ingresados no son correctos' + '\n\n' + usuario + '\n' + contrasenia);
    
        usuario = prompt("Ingrese de nuevo su nombre de usuario RIOT");
        console.log(usuario);
        
        contrasenia = prompt("Ingrese su contraseña: ");
        console.log(contrasenia);
        
    } while (usuario != usuarioAutorizado && contrasenia != contraseniaAutorizada);
    
    alert("Bienvenido:" + '\n' + usuario);
    
    let code = prompt('Ingresá el código de tus keycaps');
    console.log(code);
    
    let quantity = parseInt(prompt('Ingresá la cantidad que querés comprar'));
    console.log(quantity);

    //invocar clase constructora para sumar al carrito
    
    let moreItems = confirm('Querés comprar más?');
    
    if (moreItems) {
        
        let code = prompt('Ingresá el nuevo código de tus keycaps');
        
        let quantity = parseInt(prompt('Ingresá la cantidad que querés comprar'));
        
        //invocar misma funcion constructora
        
        let moreItems = confirm('Querés comprar más?');
        
    }else{
        //invocar funcion para calcular el total
    };

} else {
    alert('Que lástima, no lo pienses mucho que vuelan... no te quedes sin las tuyas!!!');
};

/////

let quantity = 0;
let price = 0;
let discount = 250;
let shippingCost = 0;

// construir productos
class product {
    constructor(code, name, price, quantity) {
        this.code = code.string();
        this.name = name.toLowerCase();
        this.price = parseFloat(price);
        this.quantity = quantity.number();
    };
};

const keyBreach = new product ('Br', 'Breach', 1000, 5);
const keySage = new product ('Sg', 'Sage', 1000, 5);
const keyBrimstone = new product ('Bm', 'Brimstone', 1000, 5);
const keyPhoenix = new product ('Ph', 'Phoenix', 1000, 5);
const keyViper = new product ('Vp', 'Viper', 1000, 5);

//array para el carrito, puedo quitar (splice) y agregar productos (push)
const carrito = [];
let shop = prompt('Ingresar el código del item que querés comprar:');
while (shop != "") {
    const addItems = code => carrito.push(shop);
    console.log(carrito);
};

//dar total bruto
const total = (price, quantity) => price * quantity;

//analizar descuento
const totalWithDiscount = (total, discount) => total - discount;

//calcular envio

//dar precio final
