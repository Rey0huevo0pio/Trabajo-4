function iniciarConteo() {
    var conteoElemento = document.getElementById('conteo');
    var contador = 0;

    setInterval(function () {
        contador++;
        conteoElemento.textContent = 'Conteo: ' + contador;
    }, 1000);
}
function generarTabla() {
    var numero = parseInt(document.getElementById('numero').value);
    var tablaMultiplicar = document.getElementById('tablaMultiplicar');

    if (!isNaN(numero)) {
        var tablaHTML = '<h2>Tabla de Multiplicar del ' + numero + '</h2><ul>';
        for (var i = 1; i <= 10; i++) {
            tablaHTML += '<li>' + numero + ' x ' + i + ' = ' + (numero * i) + '</li>';
        }
        tablaHTML += '</ul>';
        tablaMultiplicar.innerHTML = tablaHTML;
    } else {
        tablaMultiplicar.innerHTML = 'Por favor, ingresa un número válido.';
    }
}
function verificarNumeroPar() {
    var numeroPar = parseInt(document.getElementById('numeroPar').value);
    var resultadoNumeroPar = document.getElementById('resultadoNumeroPar');

    if (!isNaN(numeroPar)) {
        resultadoNumeroPar.textContent = (numeroPar % 2 === 0) ? 'El número es par.' : 'El número no es par.';
    } else {
        resultadoNumeroPar.textContent = 'Por favor, ingresa un número válido.';
    }
}
function convertirCelsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var resultadoFahrenheit = document.getElementById('resultadoFahrenheit');

    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        resultadoFahrenheit.textContent = 'La temperatura en Fahrenheit es: ' + fahrenheit.toFixed(2);
    } else {
        resultadoFahrenheit.textContent = 'Por favor, ingresa una temperatura válida en Celsius.';
    }
}
function verificarAnioBisiesto() {
    var anio = parseInt(document.getElementById('anio').value);
    var resultadoBisiesto = document.getElementById('resultadoBisiesto');

    if (!isNaN(anio)) {
        resultadoBisiesto.textContent = (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) ?
            'El año es bisiesto.' : 'El año no es bisiesto.';
    } else {
        resultadoBisiesto.textContent = 'Por favor, ingresa un año válido.';
    }
}
function buscarNumerosPrimos() {
    var rangoInicio = parseInt(document.getElementById('rangoInicio').value);
    var rangoFin = parseInt(document.getElementById('rangoFin').value);
    var resultadoPrimos = document.getElementById('resultadoPrimos');

    if (!isNaN(rangoInicio) && !isNaN(rangoFin) && rangoInicio <= rangoFin) {
        var primos = [];
        for (var i = rangoInicio; i <= rangoFin; i++) {
            if (esPrimo(i)) {
                primos.push(i);
            }
        }
        resultadoPrimos.textContent = 'Números primos en el rango: ' + primos.join(', ');
    } else {
        resultadoPrimos.textContent = 'Por favor, ingresa un rango válido.';
    }
}

function esPrimo(numero) {
    if (numero < 2) return false;
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
function calcularPromedio() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var resultadoPromedio = document.getElementById('resultadoPromedio');

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
        var promedio = (nota1 + nota2 + nota3) / 3;
        resultadoPromedio.textContent = 'El promedio es: ' + promedio.toFixed(2);
    } else {
        resultadoPromedio.textContent = 'Por favor, ingresa notas válidas entre 0 y 10.';
    }
}
function realizarOperacion(operacion) {
    var operando1 = parseFloat(document.getElementById('operando1').value);
    var operando2 = parseFloat(document.getElementById('operando2').value);
    var resultadoCalculadora = document.getElementById('resultadoCalculadora');

    if (!isNaN(operando1) && !isNaN(operando2)) {
        switch (operacion) {
            case 'suma':
                resultadoCalculadora.textContent = 'El resultado es: ' + (operando1 + operando2);
                break;
            case 'resta':
                resultadoCalculadora.textContent = 'El resultado es: ' + (operando1 - operando2);
                break;
            case 'multiplicacion':
                resultadoCalculadora.textContent = 'El resultado es: ' + (operando1 * operando2);
                break;
            case 'division':
                if (operando2 !== 0) {
                    resultadoCalculadora.textContent = 'El resultado es: ' + (operando1 / operando2);
                } else {
                    resultadoCalculadora.textContent = 'No se puede dividir por cero.';
                }
                break;
            default:
                resultadoCalculadora.textContent = 'Operación no válida.';
        }
    } else {
        resultadoCalculadora.textContent = 'Por favor, ingresa operandos válidos.';
    }
}
function calcularMasaCorporal() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultadoMasaCorporal = document.getElementById('resultadoMasaCorporal');

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        var masaCorporal = peso / (altura * altura);
        resultadoMasaCorporal.textContent = 'Tu índice de masa corporal es: ' + masaCorporal.toFixed(2);
    } else {
        resultadoMasaCorporal.textContent = 'Por favor, ingresa valores válidos.';
    }
}

