


function realizarOperacion() {
    // Obtén los valores de los campos de entrada o realiza la operación que necesites
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;

    // Convierte los valores a números (puedes validar si son números antes de hacer esto)
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Realiza la operación que necesites
    var resultado = numero1 + numero2;

    // Muestra el resultado en un elemento HTML
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}
function saludarUsuario() {
    // Obtener el nombre ingresado por el usuario
    var nombreUsuario = document.getElementById('nombre').value;

    // Verificar si se ingresó un nombre
    if (nombreUsuario.trim() !== '') {
        // Construir el mensaje de bienvenida
        var mensajeBienvenida = '¡Bienvenido, ' + nombreUsuario + '!';
        
        // Mostrar el mensaje en un elemento HTML
        document.getElementById('mensajeBienvenida').textContent = mensajeBienvenida;
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
}