// Variables
let turnoActual: number = 1;

// Elementos del DOM
const numeroTurno = document.getElementById("numero-turno") as HTMLElement;
const btnAnterior = document.getElementById("anterior") as HTMLButtonElement;
const btnReset = document.getElementById("reset") as HTMLButtonElement;
const btnSiguiente = document.getElementById("siguiente") as HTMLButtonElement;
const inputNuevoTurno = document.getElementById("nuevo-turno") as HTMLInputElement;
const btnCambiarTurno = document.getElementById("cambiar-turno") as HTMLButtonElement;

// Función padStart
const formatearTurno = (turno: number): string => turno.toString().padStart(2, "0");

// Función para actualizar el display del turno
const actualizarTurno = (): void => {
  numeroTurno.textContent = formatearTurno(turnoActual);
};

// Anterior
btnAnterior.addEventListener("click", () => {
  if (turnoActual > 1) turnoActual--;
  actualizarTurno();
});

// Siguiente
btnSiguiente.addEventListener("click", () => {
  turnoActual++;
  actualizarTurno();
});

// Resetear
btnReset.addEventListener("click", () => {
  turnoActual = 1;
  actualizarTurno();
});

// Cambiar el turno a un valor específico
btnCambiarTurno.addEventListener("click", () => {
  const nuevoTurno = parseInt(inputNuevoTurno.value, 10);
  if (!isNaN(nuevoTurno) && nuevoTurno > 0) {
    turnoActual = nuevoTurno;
    actualizarTurno();
  } else {
    alert("Por favor, ingrese un número válido.");
  }
});

actualizarTurno();
