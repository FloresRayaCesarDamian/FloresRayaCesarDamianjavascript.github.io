document.getElementById('validateBtn').addEventListener('click', function() {
    const dniNumber = parseInt(document.getElementById('dniNumber').value);
    const dniLetter = document.getElementById('dniLetter').value.toUpperCase();
    const resultMessage = document.getElementById('resultMessage');

    // Validar número de DNI
    if (dniNumber < 0 || dniNumber > 99999999) {
        resultMessage.textContent = 'El número proporcionado no es válido.';
        return;
    }

    // Array de letras
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
    // Calcular letra correspondiente
    const letraCorrecta = letras[dniNumber % 23];

    // Comparar letras
    if (dniLetter !== letraCorrecta) {
        resultMessage.textContent = 'La letra indicada no es correcta.';
    } else {
        resultMessage.textContent = 'El número y la letra de DNI son correctos.';
    }
});
