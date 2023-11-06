function mostrarProducto(nom){
    var product =""
    var desc=""
    var sust=""
    var ima=""
    var icono=""
    var texto =""
    productos.forEach(producto => {
        const coincideConBusqueda = producto.nombre.trim().includes(nom.trim());
        if (coincideConBusqueda) {
            product = producto.nombre;
            desc = producto.descripcion;
            sust = producto.sustentable;
            ima = producto.img;
        }
        console.log("Hola soy "+producto.nombre+" "+coincideConBusqueda+ " "+ nom)
    });
    if (sust.toLowerCase() === "si") {
        icono = "success";
    } else {
        icono = "error";
    }
    texto = desc+'\nSustentable: "'+sust+'".'
    Swal.fire({
        icon:icono,
        title:product,
        imageUrl:ima,
        imageWidth:"160px",
        imageHeight:"160px",
        text:texto,
        scrollbarPadding:true,
        confirmButtonText:'Cerrar',
        confirmButtonColor: "#216b5d",
        customClass:{
            popup:'popup-class',
            confirmButton:'bo',
        }   
    });   
}

const botones = document.querySelectorAll('.product-b');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
    const nombre = boton.textContent;
    mostrarProducto(nombre)
    });
});



