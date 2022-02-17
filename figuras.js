// Cuadrados


// const LadoCuadrado = 5;

// console.log("los lados del cuadrado miden:" + LadoCuadrado + "cm");

console.group(cuadrado)

function PerimetroCuadrado(lado){
    return lado * 4;
}

// console.log("El perimetro del cuadro mide:" + PerimetroCuadrado + "cm");

function AreaCuadrado(lado){
    return lado * lado;
}

console.groupEnd()

// console.log("El area del cuadrado mide:" + AreaCuadrado + "cm^2");


// Triangulos 

// const LadoTriangulo1 = 6;
// const LadoTriangulo2 = 6;  
// const BaseTriangulo = 4;
// const AlturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden:" 
//     + LadoTriangulo1 
//     + "cm," 
//     + LadoTriangulo2 
//     + "cm," 
//     + BaseTriangulo 
//     + "cm"
// );


console.group(Triangulos)

function PerimetroTriangulo(lado1, lado2,base){
    return lado1+lado2+base;
}

// console.log("El Perimetro del triangulo mide:" + PerimetroTriangulo);

function AreaTriangulo(base,altura){
    return base * altura / 2;
}


console.groupEnd()

// console.log("El area del triangulo mide:" + AreaTriangulo +"cm^2");
 


//  Circulos 


console.group(Circulos)

// const RadioCirculo = 4;

// console.log("El Radio Del Circulo mide:" + RadioCirculo)

function DiametroCirculo(radio){
    return radio *2;
}



// console.log("PI es :" + PI);

function PerimetroCirculo(radio){
    const diametro = DiametroCirculo(radio);
    return diametro * Math.PI;
}

// console.log("El Diametro del circulo mide:" + DiametroCirculo + "cm");



// console.log("El perimetrocirculo mide:" + PerimetroCirculo + "cm");

function AreaCirculo(radio){
    return (radio * radio) * Math.PI;
}

// } = (RadioCirculo * RadioCirculo) * PI;

// console.log("El Area del circulo mide:" + AreaCirculo + "cm^2")

console.groupEnd()

//  Aqui interactuamos con el html

//Cuadrado

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 
 const value = input.value;

 const perimetro = PerimetroCuadrado(value);
 
 alert(perimetro);
}

function calcularAreaCuadrado(){
 const input = document.getElementById("InputCuadrado");
 
 const value = input.value;

 const Area = AreaCuadrado(value);

 alert(Area);
}


// Triangulo

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTriangulo1");
    const inputLado2 = document.getElementById("InputTriangulo2");
    const inputLado3 = document.getElementById("InputTriangulo3");
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueLado3 = Number(inputLado3.value);
    
    const perimetro = PerimetroTriangulo(valueLado1,valueLado2,valueLado3);

    alert('El perimetro es:' + perimetro + 'cm');
}

function calcularAreaTriangulo() {
    const inputLado3 = document.getElementById("InputTriangulo3");
    const inputLado4 = document.getElementById("InputTriangulo4");
    const valueLado3 = Number(inputLado3.value);
    const valueLado4 = Number(inputLado4.value);

    const Area = AreaTriangulo(valueLado3,valueLado4);

    alert('El Area es:' + Area + 'cm');    
}



// Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = PerimetroCirculo(value);

    alert('el perimetro es;' + perimetro + 'cm');
}



function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const Area = AreaCirculo(value);

    alert("El area es;" + Area + "cm")
}


// function calcularAreaCirculo({
//     const input = document.getElementById("InputCirculo");
//     const value = input.value;

    
// })


// formula de triangulo insoceles


// function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
//     if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
//         console.error("Los lados a y b no son iguales");
//     } else {
//         const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
//         const trianguloPequenoLadoBase = trianguloGrandeLadoA;

//         const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
//         const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

//         const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

//         const trianguloGrandeAltura = trianguloPequenoLadoA;
//         return trianguloGrandeAltura;
//     }
// }