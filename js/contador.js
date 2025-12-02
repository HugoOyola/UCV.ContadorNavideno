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

  // Mostrar botón PNG
  function mostrarBoton() {
    contadorDiv.innerHTML = `
      <div class="boton-wrapper">
        <img src="./assets/img/pulsador.png" id="btnArbol" class="btn-imagen" alt="Botón para encender árbol">
      </div>
    `;

    // Redirigir
    document.getElementById("btnArbol").addEventListener("click", () => {
      window.location.href = "arbol.html";
    });
  }
});
