function validarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre.trim() === '') {
    alert('Por favor, ingresa tu nombre.');
    return false;
  }

  if (email.trim() === '') {
    alert('Por favor, ingresa tu correo electrónico.');
    return false;
  }

  if (mensaje.trim() === '') {
    alert('Por favor, ingresa un mensaje.');
    return false;
  }
  return true;
}
