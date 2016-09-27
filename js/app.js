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
		form.classList.add("form");
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
		link.innerText = "Anadir otra tarjeta...";
		link.setAttribute("class", "link");
		padre.insertBefore(link, padre.childNodes[1]);
	}

	function nuevaCaja() {
		var cajaDos = document.createElement("div");
		cajaDos.className = "caja";
		//cajaDos.setAttribute("id", "cajaDos");
		cajaGrande.appendChild(cajaDos);
		span.className = "dInlineBlock";
		span.className = "btn";
		cajaDos.insertBefore(span, cajaDos.childNodes[0]);
	}
});