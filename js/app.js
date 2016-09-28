window.addEventListener("load", function (){
	var cajaGrande = document.getElementById("cajaGrande");
	var caja = document.getElementById("caja");
	var span = document.getElementById("span");
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btnGreen = document.getElementById("btnGreen");

	span.addEventListener("click", function(e){
		e.preventDefault();
		newForm();
	});

	function newForm(){
		span.className = "dNone";
		form.className = "form";
		input.focus();
		input.value = "";
	}

	btnGreen.addEventListener("click", function(e){
		e.preventDefault();
		form.className = "dNone";
		newTarjeta();
		nuevaCaja();
	});

	function newTarjeta(){
		var padre = btnGreen.parentElement.parentElement;
		var title = document.createElement("div");
		title.innerText = input.value;
		title.setAttribute("class", "list-header")
		padre.insertBefore(title, padre.childNodes[0]);

		var link = document.createElement("a");
		link.innerText = "Anadir una tarjeta...";
		padre.appendChild(link);
		link.classList.add("link");

		link.addEventListener("click", function(){
			link.className = "dNone";
			newText(padre);
		});
	}

	function nuevaCaja() {
		var cajaDos = document.createElement("div");
		cajaDos.className = "caja";
		cajaGrande.appendChild(cajaDos);
		span.className = "btn";
		cajaDos.insertBefore(span, cajaDos.childNodes[0]);
		cajaDos.insertBefore(form, cajaDos.childNodes[1]);
	}

	function newText(padre){
		var newForm = document.createElement("form");
		var textArea = document.createElement("textarea");
		var btnSmall = document.createElement("button");
		
		newForm.insertBefore(textArea, newForm.childNodes[0]);
		newForm.insertBefore(btnSmall, newForm.childNodes[1]);
		padre.appendChild(newForm);

		btnSmall.innerText = "Añadir";
		btnSmall.type = "button";
		btnSmall.classList.add("btnGreen");
		newForm.className = "link";
		textArea.className = "input";
		textArea.focus();
		
		btnSmall.addEventListener("click", function(){
			newForm.className = "dNone";
			nuevaEntrada(padre, textArea);
		});
	}
	function nuevaEntrada(padre, textArea){
		var entrada = document.createElement("div");
		entrada.innerText = textArea.value;
		padre.insertBefore(entrada, padre.lastChild);
		entrada.className = "entrada";
		padre.appendChild(entrada.previousSibling);
		padre.lastChild.className = "link";
	}
});