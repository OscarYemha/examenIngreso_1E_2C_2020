function mostrar(){

	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let flagMayorTemperatura = 0;
	let mayorTemperatura;
	let nacionalidadMayorTemperatura;
	let mayoresSolteros = 0;
	let mujeresViudas = 0;
	let mujeresSolteras = 0;
	let terceraEdad = 0;
	let mujeresCasadas = 0;
	let sumaEdadCasadas = 0;
	let promedio;
	let pregunta;


	do{
		nombre = prompt("Ingrese el nombre del pasajero:");

		do{
			edad = parseInt(prompt("Ingrese la edad:"));
		}while(edad<1);

		do{
			sexo = prompt("Ingrese el sexo(f o m):");
			sexo = sexo.toLowerCase();
		}while(sexo!=="f" && sexo!=="m");

		do{
			estadoCivil = prompt("Ingrese estado civil(soltero, casado, viudo):")
			estadoCivil = estadoCivil.toLowerCase();
		}while(estadoCivil!=="soltero" && estadoCivil!=="casado" && estadoCivil!=="viudo");

			temperatura = parseInt(prompt("Ingrese la temperatura:"));


		if(flagMayorTemperatura===0 || mayorTemperatura<temperatura){
			mayorTemperatura = temperatura;
			nacionalidadMayorTemperatura = nacionalidad;
			flagMayorTemperatura = 1;
		}

		if(edad>17 && estadoCivil==="soltero"){
			mayoresSolteros ++;
		}

		if(sexo==="m" && estadoCivil==="soltero"){
			mujeresSolteras ++;
		}

		if(sexo==="m" && estadoCivil==="viudo"){
			mujeresViudas ++;
		}

		if(edad>60 && temperatura>38){
			terceraEdad ++;
		}

		if(sexo==="m" && estadoCivil==="casado"){
			sumaEdadCasadas += edad;
			mujeresCasadas ++
		}




		pregunta = prompt("¿Desea seguir ingresando pasajeros? Responda Si o No:");
		pregunta = pregunta.toLowerCase();
	}while(pregunta==="si");


	promedio = sumaEdadCasadas/mujeresCasadas;

	alert("")


}
