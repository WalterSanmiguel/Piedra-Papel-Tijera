var p1 = 0
var cpu = 0
const list = ["Piedra", "Papel", "Tijera"];

function piedra() {
    const resultado = document.getElementById("resultText");
    const cpuScore = document.getElementById("CPU-Score");
    const p1Score = document.getElementById("P1-Score");
    const random = list[Math.floor(Math.random()*list.length)];
    document.getElementById("parruf").innerText = random
    if (random == "Piedra") {
        resultado.innerText = "Empate"}
          else if (random == "Papel") {
            resultado.innerText = "perdiste" 
            cpu ++;
          cpuScore.innerText = "CPU score: " + cpu}
          else {resultado.innerText = "ganaste"
        p1 ++;
      p1Score.innerText = "P1 score: " + p1}
}

function papel() {
    const resultado = document.getElementById("resultText");
    const random = list[Math.floor(Math.random()*list.length)];
    const cpuScore = document.getElementById("CPU-Score");
    const p1Score = document.getElementById("P1-Score");
    document.getElementById("parruf").innerText = random
    if (random == "Papel") {
        resultado.innerText = "Empate"}
          else if (random == "Tijera") {
            resultado.innerText = "perdiste"
            cpu ++;
          cpuScore.innerText = "CPU score: " + cpu} 
          else {resultado.innerText = "ganaste"
        p1 ++;
        p1Score.innerText = "P1 score: " + p1}
}

function tijera() {
    const resultado = document.getElementById("resultText");
    const random = list[Math.floor(Math.random()*list.length)];
    const cpuScore = document.getElementById("CPU-Score");
    const p1Score = document.getElementById("P1-Score");
    document.getElementById("parruf").innerText = random
    if (random == "Tijera") {
        resultado.innerText = "Empate"}
          else if (random == "Piedra") {
            resultado.innerText = "perdiste"
          cpu ++;
          cpuScore.innerText = "CPU score: " + cpu}
          else {resultado.innerText = "ganaste"
        p1 ++;
        p1Score.innerText = "P1 score: " + p1}
}