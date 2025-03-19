# Métodos de JavaScript para reproducir video

En JavaScript, puedes reproducir videos utilizando el elemento `<video>` de HTML5 y sus métodos. A continuación se describen algunos métodos útiles para controlar la reproducción de un video:

## Métodos principales

- **`play()`**: Inicia la reproducción del video.
- **`pause()`**: Pausa el video.
- **`load()`**: Recarga el video.
- **`currentTime`**: Permite obtener o establecer el tiempo de reproducción actual.
- **`volume`**: Controla el volumen del video (rango de 0.0 a 1.0).
- **`muted`**: Activa o desactiva el silencio.
- **`playbackRate`**: Controla la velocidad de reproducción (1.0 es la velocidad normal).

### Ejemplo de uso

```javascript
<video id="miVideo" width="400" controls>
    <source src="video.mp4" type="video/mp4">
    Tu navegador no soporta videos HTML5.
</video>
<br>
<button onclick="reproducir()">▶ Reproducir</button>
<button onclick="pausar()">⏸ Pausar</button>
<button onclick="silenciar()">🔇 Silenciar</button>
<button onclick="adelantar()">⏩ Adelantar 5s</button>

<script>
    let video = document.getElementById("miVideo");

    function reproducir() {
        video.play();
    }

    function pausar() {
        video.pause();
    }

    function silenciar() {
        video.muted = !video.muted;
    }

    function adelantar() {
        video.currentTime += 5;
    }
</script>

```

## Eventos relacionados con video

Puedes ejecutar acciones cuando el video cambia de estado:

- **`onplay`**: Se activa cuando el video comienza a reproducirse.
- **`onpause`**: Se activa cuando el video se pausa.
- **`onended`**: Se ejecuta cuando el video termina.
- **`ontimeupdate`**: Se ejecuta cada vez que cambia el tiempo de reproducción.

### Ejemplo

```javascript

video.onended = function() {
    alert("El video ha terminado.");
};

```
