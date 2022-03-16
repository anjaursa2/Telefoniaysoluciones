   
   onclick= accion
   function accion(){
    console.log("esta funcionando");
    var ancla = document.getElementsByClassName('nav-enlase');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }

}
onclick= accion3
function accion3(){
    console.log("esta funcionando");
    var ancla = document.getElementsByid('marca');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}