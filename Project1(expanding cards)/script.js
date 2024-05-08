panel = document.querySelectorAll(".pic")

panel.forEach(element => {
    element.addEventListener("click", ()=> {
        eliminarActivo()
        element.classList.toggle("activo")
    }) 
});

function eliminarActivo(){
    panel.forEach(element => {
        element.classList.remove("activo")
    })
}
