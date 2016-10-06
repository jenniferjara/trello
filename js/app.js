window.addEventListener("load", cargaPagina);
var cajaGrande = document.getElementById("cajaGrande");
var caja = document.getElementById("caja");
var span = document.getElementById("span");
var form = document.getElementById("form");
var input = document.getElementById("input");
var btnGreen = document.getElementById("btnGreen");
var contador = 1;

function cargaPagina(){
	span.addEventListener("click", newForm);
}
function newForm(e){
	e.preventDefault();
	span.className = "dNone";
	form.className = "form";
	input.focus();
	input.value = "";
}

btnGreen.addEventListener("click", newTarjeta);
btnGreen.addEventListener("click", nuevaCaja);
caja.addEventListener("dragover", arrastrarSobre);
caja.addEventListener("drop", soltar);

function newTarjeta(e){
	e.preventDefault();
	form.className = "dNone";
	var padre = btnGreen.parentElement.parentElement;
	var title = document.createElement("div");
	var link = document.createElement("a");

	title.innerText = input.value;
	title.classList.add("list-header");
	padre.insertBefore(title, padre.childNodes[0]);
	
	link.innerText = "Anadir una tarjeta...";
	padre.appendChild(link);
	link.classList.add("link");

	link.addEventListener("click", newText);
}
function nuevaCaja() {
	var cajaDos = document.createElement("div");
	cajaDos.className = "caja";
	cajaGrande.appendChild(cajaDos);
	span.className = "btn";
	cajaDos.insertBefore(span, cajaDos.childNodes[0]);
	cajaDos.insertBefore(form, cajaDos.childNodes[1]);

	cajaDos.addEventListener("dragover", arrastrarSobre);
	cajaDos.addEventListener("drop", soltar);
}
function newText(){
	this.className = "dNone";
	var newForm = document.createElement("form");
	var textArea = document.createElement("textarea");
	var btnSmall = document.createElement("button");
	
	newForm.insertBefore(textArea, newForm.childNodes[0]);
	newForm.insertBefore(btnSmall, newForm.childNodes[1]);
	this.parentElement.appendChild(newForm);
	btnSmall.innerText = "Añadir";
	btnSmall.type = "button";
	btnSmall.classList.add("btnGreen");
	newForm.className = "link";
	textArea.className = "input";
	textArea.focus();
	
	btnSmall.addEventListener("click", nuevaEntrada);
}
function nuevaEntrada(){
	this.parentElement.className = "dNone";
	var entrada = document.createElement("div");
	entrada.setAttribute("draggable", "true");
	entrada.setAttribute("id", "move"+contador);
	contador++;
	entrada.innerText = this.previousElementSibling.value;
	var padre = this.parentElement.parentElement;
	padre.insertBefore(entrada, padre.lastChild);
	entrada.className = "entrada";
	padre.appendChild(entrada.previousSibling);
	padre.lastChild.className = "link";

	var cards = document.getElementsByClassName("entrada");
		for (var i = 0, l = cards.length; i < l; i++) {
			cards[i].addEventListener("dragstart", empiezaArrastrar);
			cards[i].addEventListener("dragenter", entraArrastrar);
			cards[i].addEventListener("dragleave", dejaArrastrar);
			cards[i].addEventListener("dragend", terminaArrastrar);
		}
}
function empiezaArrastrar(e) {
	e.dataTransfer.setData("text", this.id);
	this.classList.add("borde");
}
function terminaArrastrar(e) {
	this.classList.remove("borde");
}
function entraArrastrar(e) {
	this.classList.add("animated", "tada");
}
function dejaArrastrar(e) {
	this.classList.remove("animated", "tada");
}

function arrastrarSobre(e) {
	e.preventDefault();
	this.classList.add("animated", "pulse");
}
function soltar(e) {
	e.preventDefault();
	var idArrastrado = e.dataTransfer.getData("text");
	var elementoArrastrado = document.getElementById(idArrastrado);
	this.insertBefore(elementoArrastrado, this.lastElementChild);
}