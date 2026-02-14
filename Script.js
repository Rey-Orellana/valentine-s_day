// Script.js
onload = () => {
  // NO iniciar automáticamente
};

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const buttonContainer = document.querySelector(".heart-button-container");
  const mainContent = document.querySelector(".main-content");
  const audio = document.getElementById("valentineMusic");

  // Variable para controlar que el audio solo se reproduzca una vez
  let audioPlayed = false;

  startButton.addEventListener("click", function () {
    // Reproducir audio solo una vez
    if (!audioPlayed) {
      audio
        .play()
        .then(() => {
          console.log("Audio reproduciéndose correctamente");
          audioPlayed = true;
        })
        .catch((error) => {
          console.log("Error al reproducir audio:", error);
          // Algunos navegadores requieren interacción del usuario
          // El click ya es interacción, así que debería funcionar
        });
    }

    // Animación de desaparición del botón
    buttonContainer.classList.add("fade-out");

    // Mostrar el contenido principal después de la animación
    setTimeout(() => {
      buttonContainer.style.display = "none";
      mainContent.classList.remove("hidden");

      // Iniciar las animaciones de las flores
      document.body.classList.remove("not-loaded");
    }, 1000); // Espera a que termine la animación de fade-out
  });

  // Opcional: Si el audio no se reproduce automáticamente debido a políticas del navegador,
  // podemos intentar reproducirlo con el click también
  startButton.addEventListener("touchstart", function () {
    // Para dispositivos móviles
    if (!audioPlayed) {
      audio
        .play()
        .then(() => {
          audioPlayed = true;
        })
        .catch(() => {});
    }
  });
});
