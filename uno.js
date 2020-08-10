
function mostrar(){
	
	let tipoProducto;
	let precioProducto;
	let unidadesProducto;
	let marcaProducto;
	let fabricanteProducto;
	let precioJabonCaro;
	let cantidadJabonCaro;
	let fabricanteJabonCaro;
	let flagJabonCaro = 0;
	let productoMasUnidades;
	let tipoProductoMasUnidades;
	let flagProductosMasUnidades = 0;
	let unidadesBarbijo = 0;
	let comprasBarbijo = 0;
	let comprasAlcohol = 0;
	let comprasJabon = 0;
	let comprasMayor;
	let totalUnidadesAlcohol = 0;
	let totalUnidadesBarbijo = 0;
	let totalUnidadesJabon = 0;
	let promedio;


	for(let i=0;i<5;i++){

		do{
			tipoProducto = prompt("Ingrese el tipo de producto(barbijo, jabon, alcohol):");
			tipoProducto = tipoProducto.toLowerCase();
		}while(tipoProducto!=="barbijo" && tipoProducto!=="jabon" && tipoProducto!=="alcohol");

		do{
			precioProducto = parseFloat(prompt("Ingrese el precio del producto(debe estar entre 100 y 300):"))
		}while(precioProducto<100 || precioProducto>300);

		do{
			unidadesProducto = parseInt(prompt("Ingrese la cnatidad de unidades(mayor a 0 y menor o igual a 1000):"));
		}while(unidadesProducto<=0 || unidadesProducto>1000);

		marcaProducto = prompt("Ingrese la marca del producto:");
		
		fabricanteProducto = prompt("Ingrese el fabricante del producto:")



		if(tipoProducto === "jabon"){

			if(flagJabonCaro === 0 || precioJabonCaro<precioProducto){
				precioJabonCaro = precioProducto;
				fabricanteJabonCaro = fabricanteProducto;
				cantidadJabonCaro = unidadesProducto;
				flagJabonCaro = 1;
			}
			totalUnidadesJabon += unidadesProducto;
			comprasJabon ++;
		}

		if(flagProductosMasUnidades === 0 || productoMasUnidades<unidadesProducto){
			productoMasUnidades = unidadesProducto;
			tipoProductoMasUnidades = tipoProducto;
			flagProductosMasUnidades = 1;
		}

		if(tipoProducto === "barbijo"){
			unidadesBarbijo += unidadesProducto;
			totalUnidadesBarbijo += unidadesProducto;
			comprasBarbijo ++;
		}

		if(tipoProducto === "alcohol"){
			totalUnidadesAlcohol += unidadesProducto;
			comprasAlcohol ++;
		}

	}



	if(tipoProductoMasUnidades === "alcohol"){

		promedio = totalUnidadesAlcohol/comprasAlcohol;

	}else if(tipoProductoMasUnidades === "jabon"){

		promedio = totalUnidadesJabon/comprasJabon;

	}else if(tipoProductoMasUnidades === "barbijo"){

		promedio = totalUnidadesBarbijo/comprasBarbijo;

	}

	document.write("La cantidad de unidades del jabon más caro es: " + cantidadJabonCaro + "<br>");
	document.write("El fabricante del jabón más caro es: " + fabricanteJabonCaro + "<br>");
	document.write("El promedio del producto más comprado es: " + promedio + "<br>");
	document.write("El total de barbijos comprados es: " + unidadesBarbijo);

}
