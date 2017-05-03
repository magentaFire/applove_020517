var images = document.getElementsByClassName("workImage");
var btnCerrar = document.getElementsByClassName("close");
var modalCont = document.getElementById("modalCont");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", modal);
}

function modal() {
  modalCont.style.display = "block";
  images.src = this.src;
  console.log("holi1");
}

function cerrarModal() {
  console.log("adio");
}
