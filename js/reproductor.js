// Obtiene el elemento de video del DOM
const video = document.getElementById("video");

/**
 * Función para reproducir o pausar el video.
 * Si el video está pausado, lo reproduce.
 * Si el video está en reproducción, lo pausa.
 */
function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

/**
 * Función para detener el video.
 * Pausa el video y reinicia el tiempo de reproducción a 0.
 */
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

/**
 * Función para ajustar el volumen del video.
 * Obtiene el valor del control deslizante de volumen y lo aplica al video.
 */
function setVolume() {
    video.volume = document.getElementById("volume").value;
}
