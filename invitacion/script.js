// Fecha de la graduación
const fechaGraduacion = new Date('2024-12-16T20:30:00').getTime();
const countdownEl = document.getElementById('countdown');

// Actualización de la cuenta regresiva cada segundo
function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaGraduacion - ahora;

    if (tiempoRestante > 0) {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `
            <span>${dias} días</span> 
            <span>${horas} horas</span> 
            <span>${minutos} minutos</span> 
            <span>${segundos} segundos</span>
        `;
    } else {
        countdownEl.innerHTML = '<span>¡El día ha llegado! 🎉</span>';
    }
}

// Inicia la cuenta regresiva
setInterval(actualizarCuentaRegresiva, 1000);
