const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      // Obtenemos los campos
      const nombre = document.getElementById('nombre');
      const correo = document.getElementById('correo');
      const mensaje = document.getElementById('mensaje');

      let esValido = true;

      // Validar nombre
      if (nombre.value.trim() === "") {
        nombre.classList.add('is-invalid');
        esValido = false;
      } else {
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
      }

      // Validar correo
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoValido.test(correo.value)) {
        correo.classList.add('is-invalid');
        esValido = false;
      } else {
        correo.classList.remove('is-invalid');
        correo.classList.add('is-valid');
      }

      // Validar mensaje
      if (mensaje.value.trim() === "") {
        mensaje.classList.add('is-invalid');
        esValido = false;
      } else {
        mensaje.classList.remove('is-invalid');
        mensaje.classList.add('is-valid');
      }

      // Si todo es válido, puedes enviar el formulario o mostrar mensaje de éxito
      if (esValido) {
        alert('Formulario enviado correctamente.');
      }
    });