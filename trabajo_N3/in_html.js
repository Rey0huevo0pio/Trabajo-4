function calcularAreaTriangulo() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultadoAreaTriangulo = document.getElementById('resultadoAreaTriangulo');
    
    if (!isNaN(base) && !isNaN(altura)) {
        var areaTriangulo = (base * altura) / 2;
        resultadoAreaTriangulo.textContent = 'El área del triángulo es: ' + areaTriangulo;
    } else {
        resultadoAreaTriangulo.textContent = 'Por favor, ingresa números válidos.';
    }
}
