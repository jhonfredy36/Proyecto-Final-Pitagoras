function hallarArea(CatetoA, CatetoO){
    
        let hipotenusa = (CatetoO*CatetoO)+(CatetoA*CatetoA)
        let hipotenusatotal=Math.sqrt(hipotenusa)
        alert("la medida de la hipotenusa es: "+hipotenusatotal)
        document.getElementById("catetoady").value='';
        document.getElementById("catetoopu").value='';
}


let buttonhipo = document.getElementById("botonhipo")

buttonhipo.addEventListener("click", (event) => {
    event.preventDefault()
    let CatetoA = document.getElementById("catetoady").value
    let CatetoO = document.getElementById("catetoopu").value
    hallarArea(CatetoA, CatetoO)

});


function hallarcateto(hipotenusa, CatetoAa){
    
    let catetohallar = (hipotenusa*hipotenusa)-(CatetoAa*CatetoAa)
    let catetototal=Math.sqrt(catetohallar)
    alert("la medida del cateto es: "+catetototal)
    document.getElementById("hipo").value='';
    document.getElementById("adya").value='';
}


let buttoncat = document.getElementById("botoncat")

buttoncat.addEventListener("click", (event) => {
event.preventDefault()
let hipotenusa = document.getElementById("hipo").value
let CatetoAa = document.getElementById("adya").value
hallarcateto(hipotenusa, CatetoAa)

});