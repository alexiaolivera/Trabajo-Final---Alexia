var btnsuma = document.getElementById("btnsuma")

    btnsuma.addEventListener("click", function(e){
        e.preventDefault(); 
        resolver("suma");

    });

var btnresta = document.getElementById("btnresta")

    btnresta.addEventListener("click", function(e){
        e.preventDefault(); 
        resolver("resta");

    });

var btndivision = document.getElementById("btndivision")

    btndivision.addEventListener("click", function(e){
        e.preventDefault(); 
        resolver("division");

    });

var btnmultiplicacion = document.getElementById("btnmultiplicacion")

    btnmultiplicacion.addEventListener("click", function(e){
        e.preventDefault(); 
        resolver("multiplicacion");

    });

var btnpotencia = document.getElementById("btnpotencia")

    btnpotencia.addEventListener("click", function(e){
        e.preventDefault(); 
        resolver("potencia");

    });

var btnraiz = document.getElementById("btnraiz")

    btnraiz.addEventListener("click", function(e){
        e.preventDefault(); 
        resolver("raiz");

    });

var historial = "";
var contador = 0;
var btnBorrarHistorial = document.getElementById("btnBorrarHistorial");
btnBorrarHistorial.addEventListener("click", function(e){
    e.preventDefault();
    contador = 0;
    historial = "";
    document.getElementById("historial").innerHTML = historial = "";
    document.getElementById("resultado").textContent = "";
});

function resolver(operacion){
    var uno = parseFloat(document.getElementById("uno").value);
    var dos = parseFloat(document.getElementById("dos").value);
    var resultado = 0;

    switch(operacion){
        case "suma":
            resultado = uno + dos;
            contador++;
            historial = historial+ contador+") " + uno + " + " + dos + " = " + resultado + "<br>";
            break;

        case "resta":
            resultado = uno - dos;
            contador++;
            historial = historial+ contador+ ")" + uno + "-" + dos + "=" + resultado + "<br>";
            break;

        case "division":
            resultado = uno / dos;
            contador++;
            historial = historial+ contador+ ")" + uno + "/" + dos + "=" + resultado + "<br>";
            break;

        case "multiplicacion":
            resultado = uno * dos;
            contador++;
            historial = historial+ contador+ ")" + uno + "*" + dos + "=" + resultado + "<br>";
            break;

        case "potencia":
            resultado = Math.pow(uno,dos);
            contador++;
            historial = historial+ contador+ ")" + uno + "^" + dos + "=" + resultado + "<br>";
            break;

        case "raiz":
            resultado = Math.pow(uno, 1/dos);
            contador++;
            historial = historial+ contador+ ")" + uno + "√" + dos + "=" + resultado + "<br>";
            break;
    }

    console.log(historial);
    document.getElementById("historial").innerHTML = historial;
    document.getElementById("resultado").textContent = resultado;
}
