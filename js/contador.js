document.addEventListener('DOMContentLoaded', () => {
  const contadorDiv = document.getElementById('contador');
  let numero = 10;

  // Primer número
  contadorDiv.innerHTML = `<span class="contador-numero">${numero}</span>`;

  const intervalo = setInterval(() => {
    numero--;

    if (numero > 0) {
      contadorDiv.innerHTML = `<span class="contador-numero">${numero}</span>`;
    } else {
      clearInterval(intervalo);
      mostrarBoton();
    }
  }, 1000);

  // Mostrar botón PNG con efectos
  function mostrarBoton() {
    contadorDiv.innerHTML = `
      <div class="boton-wrapper">
        <img src="./assets/img/pulsador.png" id="btnArbol" class="btn-imagen" alt="Botón para encender árbol">
      </div>
    `;

    // Agregar efecto de clic y transición
    const btnArbol = document.getElementById("btnArbol");

    btnArbol.addEventListener("click", () => {
      // Agregar clase de presionado
      btnArbol.classList.add('pressed');

      // Crear transición después de un breve delay
      setTimeout(() => {
        crearTransicion();

        setTimeout(() => {
          window.location.href = "arbol.html";
        }, 600);
      }, 300);
    });
  }

  // Crear elemento de transición suave
  function crearTransicion() {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition active';
    overlay.innerHTML = '<div class="transition-loader"></div>';
    document.body.appendChild(overlay);
  }
});