window.addEventListener("load", function (){
	var contenedor = document.getElementById("caja");
	var boton = document.getElementById("btn");

	boton.addEventListener("click", function(){
		newForm();
	});
	function newForm (){
		btn.className = "dNone";
		var form = document.createElement("form");
		var input = document.createElement("input");
		var btnGreen = document.createElement("button")
		var text = document.createTextNode("Guardar");
		form.className = "form";
		input.className = "input";
		btnGreen.className = "btnGreen";
		btnGreen.setAttribute("type", "submit");
		btnGreen.setAttribute("id", "btnDos")
		contenedor.insertBefore(form, contenedor.childNodes[0]);
		form.appendChild(btnGreen);
		form.insertBefore(input, btnGreen);
		btnGreen.appendChild(text);
	}
});