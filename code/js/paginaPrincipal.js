
/*Cuando click  .button, .nav Toggle 'activ0' */
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')
const divLogo = document.querySelector('.div-logo')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
    
})

document.addEventListener('keyup',e=>{
    if(e.target.matches("#input-buscar")){
        if(e.key === "Escape"){
            e.target.value="";
            
        }
        const inputTexto = document.getElementById("input-buscar").value;
        if(inputTexto!=""){
            divLogo.classList.add('desc')
        }else{
            divLogo.classList.remove('desc')
        }

        document.querySelectorAll('.product').forEach(producto =>{
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?producto.classList.remove('filtro')
            :producto.classList.add('filtro')
        })
        
    }
})