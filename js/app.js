var images = document.getElementsByClassName("workImage");
var btnCerrar = document.getElementsByClassName("close");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", modal);
}

for (var i = 0; i < btnCerrar.length; i++) {
  btnCerrar[i].addEventListener("click", cerrarModal);
}

function modal() {
  this.style.display = "block";
  console.log("holi");
}

function cerrarModal() {
  console.log("adio");
}
