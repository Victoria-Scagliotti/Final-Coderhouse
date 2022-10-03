let bienvenida = confirm("Hola fanáticos! Están listos para romper el chanchito y llevarse artículos de su shooter favorito?");

if (bienvenida) {

    let usuario = prompt("Ingrese su nombre de usuario RIOT");

    while (usuario == "") {
        alert("Ups! no ingresaste tu usuario, intentemos de nuevo");
        usuario = prompt("Ingrese nuevamente su nombre de usuario RIOT");
    }

    let contraseña = prompt("Ingrese su contraseña");

    while (contraseña == "") {
        alert("Ups! no ingresaste tu contraseña, intentemos de nuevo");
        contraseña = prompt("Ingrese nuevamente su contraseña");
    }

    alert("Bienvenid@" + " " + usuario + "!!!");

    function calcularPrecio(precioPrenda, cantidadPrenda, porcentajeDescuento, costoEnvio) {
        //calculo los descuentos
        let descuento = (precioPrenda * porcentajeDescuento) / 100;
        //se lo aplico al precio
        let precioConDescuento = precioPrenda - descuento;
        //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de prendas
        return (precioConDescuento * cantidadPrenda) + costoEnvio;
    }

    const envio = 800; //valor aproximado del costo de envio promedio dentro de CABA

    //le pedimos al usuario el precio de la prenda, la cantidad y el porcentaje del descuento
    let prenda = parseFloat(prompt("Ingrese el precio de la prenda que desea comprar:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de esta prenda:"));
    let descuento = parseInt(prompt("Ingresa tu cupón de descuento:")) //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual

    //llamamos a la funcion y luego mostramos el precio final por alert
    let precioFinal = calcularPrecio(prenda, cantidad, descuento, envio);
    alert("El precio total de tu compra es $" + precioFinal);
    alert("¡Que lo disfrutes!");
}

else {
    alert("Que lástima! Esperamos que vuelvas pronto...")
}

//crear un código para tomar el nombre y la contraseña de una base de datos e ingrese a tu cuenta.
