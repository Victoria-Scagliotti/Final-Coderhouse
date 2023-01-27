const pintarProductos = (productos) => {
    const contenedor = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image" style="width: 18rem">
                          <img src=${producto.img}>
                          <div class="card-content">
                            <span class="card-title">${producto.nombre}</span>
                            <p>${producto.qty}</p>
                            <p>${producto.precio}</p>
                          </div>
                          <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${producto.id} class="material-icons agregar">COMPRAR</i></a>
                        </div>
                       `
      contenedor.appendChild(div);
    });
  };