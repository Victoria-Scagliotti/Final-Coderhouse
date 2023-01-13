//constructor de usuarios "REGISTRARSE", invocar cada vez que hacen click en registrarse
/*class user {
    constructor (name, pass) {
        this.name = name.string();
        this.pass = pass.string();
    }
};*/

const user = {
    name: 'Admin',
    pass: '1234'
};

//Hacer array de usuarios (base de datos)
const users = [];


// Bienvenida
let welcome = confirm('Hola fanáticos! Están listos para romper el chanchito y llevarse artículos de su shooter favorito?');

if (welcome) {

    let enteredUser = prompt("Ingrese su nombre de usuario RIOT");
    console.log(enteredUser);
    
    let enteredPass = prompt("Ingrese su contraseña: ");
    console.log(enteredPass);

    if (users.find (user => user.name.includes(enteredUser) && user.pass.includes(enteredPass))) {
        alert("Bienvenido:" + '\n' + enteredUser);
    } else {
        do{
            alert('Upss... los datos ingresados no son correctos' + '\n\n' + enteredUser + '\n' + enteredPass);
        
            enteredUser = prompt("Ingrese de nuevo su nombre de usuario RIOT");
            console.log(enteredUser);
            
            enteredPass = prompt("Ingrese su contraseña: ");
            console.log(enteredPass);
            
        } while (user.name != enteredUser && user.pass != enteredPass);
    }

    //reemplazar por eventos en botones   
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


// Array para el carrito de compras
const carrito = [];


// Ordenar productos de menor a mayor
const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

// Ordenar productos de mayor a menor
const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
};


// Agregar productos (push)
let shop = prompt('Ingresar el código del item que querés comprar:');
while (shop != "") {
    const addItems = code => carrito.push(shop);
    console.log(carrito);
};

//dar total por item
const totalItem = (price, quantity) => price * quantity;

//dar total compra


//analizar descuento
const totalWithDiscount = (totalShop, discount) => {
    if (totalShop > 4000) {
        totalWithDiscount = totalShop - discount;
        console.log(totalWithDiscount);
    } else{
        console.log(totalShop);
    };
}

//calcular envio
switch (key) {
    case value:
        
        break;

    default:
        break;
}

//dar precio final




/*Eventos:

//CARTAS KEYBORD
comprar (crea el objeto en el carro)
ordenar por orden alfabetico el mercado

//CARRITO
muestre lo seleccionado
agregar
quitar
contador
eliminar linea
boton vaciar carro
mostrar total por item
total sin envio ni descuento
total con descuento
total con envio
total final
boton comprar*/