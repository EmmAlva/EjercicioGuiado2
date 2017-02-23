
function convertirCelsius(){
	var element = document.getElementById("farenheit").value;
	var celsius = ((element-32)*(5/9));
	 if(element !== ""){
	
	document.getElementById("celsius").value = celsius.toFixed(2);
	}
		}

function convertirFarenheit(){
	var element = document.getElementById("celsius").value;
	var farenheit = ((9*element)/5)+32;

	if(element!== ""){

	document.getElementById("farenheit").value = farenheit.toFixed(2);
	}
		}