
/*Cuando click  .button, .nav Toggle 'activo' */
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')
const divLogo = document.querySelector('.div-logo')
const divProd = document.querySelector('.div-products')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
    
})


document.addEventListener('keyup',e=>{
    if(e.target.matches("#input-buscar")){
        if(e.key === "Escape"){
            e.target.value="";
            
        }
        const inputTexto = document.getElementById("input-buscar").value;
        
        document.querySelectorAll('.div-products .ul .product .product-b').forEach(producto =>{
            if(inputTexto!=""){
            divLogo.classList.add('desc')
            divProd.classList.add('act')
                }else{
            divLogo.classList.remove('desc')
            divProd.classList.remove('act')

        }
            const textoProducto = producto.textContent.toLowerCase();
            const coincideConBusqueda = textoProducto.includes(inputTexto.toLowerCase());

            if (coincideConBusqueda) {
                producto.classList.remove('filtro');
                producto.parentElement.classList.remove('filtro');
            } else {
                producto.classList.add('filtro');
                producto.parentElement.classList.add('filtro');
            }
        })
    }
})



