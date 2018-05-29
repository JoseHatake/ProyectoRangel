function loadContentById(selector,direccion) {
	var request = new XMLHttpRequest();
	request.open('GET', direccion, true);
	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    var resp = request.responseText;

	    document.querySelector(selector).innerHTML = resp;
	  }
	};
	request.send();
}
function id(tag) {
	return document.getElementById(tag);
}
function elementsName(name) {
	return document.getElementsByName(name);
}
function className(name) {
	return document.getElementsByClassName(name);
}
function selecciona(nameItem) {
	var item = id(nameItem);
	if (item.checked)
		item.checked = false;
	else
		item.checked = true;
}
function enableItem(item) {
	var elem = id(item);
	elem.disabled = false;
}
function desableItem(item) {
	var elem = id(item);
	elem.disabled = true;
}
function activeItem(item,estado) {
	if (estado)
		enableItem(item);
	else
		desableItem(item);
}
function styleDisplayItem(item,estado) {
	var elem = id(item);
	if (estado)
		elem.style.display = 'block';
	else
		elem.style.display = 'none';
}
function switchEstado(item) {
	var elem = id(item);
	var estado = elem.style.display;
	if (estado == 'block')
		styleDisplayItem(item,false);
	else
		styleDisplayItem(item,true);
}
function asignaImg(idImg,imagen){
    var img = id(idImg);
    img.src = "data:image/jpeg;base64," + imagen;
}
function crearOption(select,value,text) {
	var x = id(select);
	var option = document.createElement("option");
	option.value = value;
	option.text = text;
	x.add(option);
}
function borrarCombo(combo,numItems) {
	var x = id(combo);
	for (n = 0; n <= numItems; n++) {
		x.remove(x[n]);
	}
}
function hash(itemGet) {
	var clave = id(itemGet).value;
	var hash = 0;
	
    for (i = 0; i < clave.length; i++) {
        chr = clave.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash = hash & hash; // Convierte a un entero de 32bit 
    }
    return hash;
}
function codificarClave(clavePlano,claveLog) {
	id(claveLog).value = hash(clavePlano);
}
function cambiaFoto(inputFile,img) {
	var files = id(inputFile).files;
	var f = files[0];
	var leerArchivo = new FileReader();
	leerArchivo.onload = (function(elArchivo) {
		return function(e) {
			id(img).src = e.target.result;
		};
	})(f);
	leerArchivo.readAsDataURL(f);
}
function checarCheckbox(nameClass) {
	var checkbox = className(nameClass);
	var flag = true;
	for (var i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			flag = false;
			break;
		}
	}
	for (var i = 0; i < checkbox.length; i++) {
		checkbox[i].required = flag;
	}
}
function agregarFile(contenedorName) {
	var rowInput = document.createElement('tr');
	var fileExtra = document.createElement('input');
	var agregar = document.createElement('img');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');
	var contenedor = id(contenedorName);
	fileExtra.type = 'file';
	fileExtra.name = 'archivo';
	fileExtra.accept = 'file_extension|audio/*|video/*|image/*|media_type';
	agregar.src = 'img/agregar.png';
	agregar.setAttribute("onclick","agregarFile('"+ contenedorName +"')");
	agregar.classList.add('botonImg');
	td1.appendChild(fileExtra);
	td2.appendChild(document.createElement('p'));
	td3.appendChild(document.createElement('p'));
	td4.appendChild(agregar);
	rowInput.appendChild(td1);
	rowInput.appendChild(td2);
	rowInput.appendChild(td3);
	rowInput.appendChild(td4);
	contenedor.appendChild(rowInput);
}
function prueba(name) {
	var elementos = elementsName(name);
	for (var i = elementos.length - 1; i >= 0; i--) {
		console.log(elementos[i].name);
		console.log(elementos[i].value);
		console.log(elementos[i].mozFullPath);
	}
}