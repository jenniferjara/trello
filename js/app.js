window.addEventListener("load", function (){
	var contenedor = document.getElementById("caja");
	var boton = document.getElementById("btn");

	boton.addEventListener("click", function(){
		newElement();
	});
	function newElement (){
		var form = document.createElement("form");
		var input = document.createElement("input");
		var btnGreen = document.createElement("button");

		function newForm(){
			btn.className = "dNone";
			form.className = "form";
			input.className = "input";
			input.setAttribute("placeholder", "Añadir una lista...");
			btnGreen.className = "btnGreen";
			btnGreen.setAttribute("id", "btnDos")
			contenedor.insertBefore(form, contenedor.childNodes[0]);
			form.insertBefore(input, form.childNodes[0]);
			form.insertBefore(btnGreen,form.childNodes[1]);
			btnGreen.innerText = "Guardar"
		}
		newForm();

		function newTarjeta(){
			btnGreen.addEventListener("click", function(e){
				e.preventDefault();
				form.className = "dNone";
				var title = document.createElement("div");
				var link = document.createElement("a");

				title.innerText = input.value;
				title.setAttribute("class", "list-header")
				contenedor.insertBefore(title, contenedor.childNodes[0]);
				link.innerText = "Anadir otra tarjeta...";
				link.setAttribute("class", "link");
				link.setAttribute("href", "#");
				contenedor.insertBefore(link, contenedor.childNodes[1]);
			});
		}
		newTarjeta();
	}

});