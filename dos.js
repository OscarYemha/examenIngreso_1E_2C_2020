function mostrar(){
  
  let tipoProducto;
  let cantidadBolsas;
  let precioPorBolsa;
  let pregunta;
  let importeBruto;
  let importeTotalBruto = 0;
  let importeDescuento;
  let importeTotalDescuento = 0;
  let tipoMasBolsas;
  let mayorBolsas;
  let flagMasBolsas = 0;
  let flagMasCaro = 0;
  let masCaro;
  let tipoMasCaro;


  do{
    do{
      tipoProducto = prompt("Ingrese el tipo de producto(arena, cal, cemento):")
      tipoProducto = tipoProducto.toLowerCase();
    }while(tipoProducto!=="arena" && tipoProducto!=="cal" && tipoProducto!=="cemento");

    do{
      cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
    }while(isNaN(cantidadBolsas));

    do{
      precioPorBolsa = parseFloat(prompt("Ingrese el precio por bolsa(mayor a cero):"));
    }while(precioPorBolsa<=0);


    importeBruto = cantidadBolsas * precioPorBolsa;
    importeTotalBruto += importeBruto;


    if(cantidadBolsas>30){
      importeDescuento = importeBruto * 0.75;
    }else if(cantidadBolsas>10){
      importeDescuento = importeBruto * 0.85;
    }else{
      importeDescuento = importeBruto;
    }


    if(flagMasBolsas === 0 || mayorBolsas<cantidadBolsas){
      mayorBolsas = cantidadBolsas;
      tipoMasBolsas = tipoProducto;
      flagMasBolsas = 1;
    }


    if(flagMasCaro === 0 || masCaro<precioPorBolsa){
      masCaro = precioPorBolsa;
      tipoMasCaro = tipoProducto;
      flagMasCaro = 1;
    }

    importeTotalDescuento += importeDescuento;

    pregunta = prompt("¿Desea seguir ingresando productos? Responda Si o No:")
    pregunta = pregunta.toLowerCase();
  }while(pregunta === "si");


document.write("El importe bruto total a pagar es: " + importeTotalBruto + "<br>");
document.write("El importe total a pagar con descuento es: " + importeTotalDescuento + "<br>");
document.write("El tipo con más cantidad de bolsas es: " + tipoMasBolsas + "<br>");
document.write("El tipo más caro es: " + tipoMasCaro);
}
