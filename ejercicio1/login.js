

function guardar(){

var usuario = "";

usuario = document.getElementById("login").value;
sessionStorage.setItem('usuario', usuario);
}