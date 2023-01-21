let score1 = document.getElementById('score1')
let score2 = document.getElementById('score2')
let result = 0
let result2 = 0
let box1 = document.getElementById('score11')
let box2 = document.getElementById('score22')

function one() {
    console.log('+1 points to HOME')
    result += 1
    score1.innerText = result
    leader()
}

function two() {
    console.log('+2 points to HOME')
    result += 2
    score1.innerText = result
    leader()
}

function three() {
    console.log('+3 points to HOME')
    result += 3
    score1.innerText = result
    leader()
}

function one2() {
    console.log('+1 points to GUEST')
    result2 += 1
    score2.innerText = result2
    leader()
}

function two2() {
    console.log('+2 points to GUEST')
    result2 += 2
    score2.innerText = result2
    leader()
}

function three2() {
    console.log('+3 points to GUEST')
    result2 += 3
    score2.innerText = result2
    leader()
}

let end

function leader() {
    if (result > result2) {
        box1.style.borderColor = '#90EE90'
        box2.style.borderColor = '#F94F6D'
        console.log('HOME IS WINING', result, result2)
        end = 'HOME WON'
    } else if (result < result2) {
        box2.style.borderColor = '#90EE90'
        box1.style.borderColor = '#F94F6D'
        console.log('GUESS IS WINING', result2, result)
        end = 'GUESS WON'
    } else {
        box1.style.borderColor = 'SkyBlue'
        box2.style.borderColor = 'SkyBlue'
        console.log('FAIR GAME', result, result2)
        end = 'FAIR GAME'
    }
}

let faul1box = document.getElementById('faul1')
let faul2box = document.getElementById('faul2')
let faul11 = 0
let faul22 = 0

function faul1() {
    faul11 += 1
    console.log('+1 FAULT TO HOME', faul11, faul22)
    faul1box.innerText = faul11
}

function faul2() {
    faul22 += 1
    console.log('+1 FAULT TO GUESS', faul22, faul11)
    faul2box.innerText = faul22
}
// CODIGO IMPORTADO
/*
 *
 *Los nombres de los id y los nombres de las variables y constantes
 *así como también los nombres de las funciones se escogen
 *arbirtrariamente. Da lo mismo un nombre u otro,
 *es meramente con el fin de no perderse, e identificar mas rápido
 *donde se encuentra cada cosa
 *
 *Feliz día, tarde o noche!!!
 */
const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);

const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");
/*
 *
 *Los tipos de selectores que usen podrán ser diferentes,
 *si les gusta mas así (o si lo necesitan por algo puntual).
 *En lugar de getElementById("boton1") también hubiera sido válido
 *usar querySelector("#boton1")
 *
 */

let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;

function dibujarTiempo() {

    spanMinutos.innerHTML = minutos;
    spanSegundos.innerHTML = segundos;
    spanCentesimas.innerHTML = centesimas;

    /*
     *
     *Ojo con que es la propiedad innerHTML lo que debe cambiar
     *y no las referencias a los elementos seleccionados.
     *
     */
}

function reiniciar() {

    minutos = 0;
    segundos = 0;
    centesimas = 0;
    dibujarTiempo();
    // MY CODE
    result = 0
    result2 = 0
    score1.innerText = result
    score2.innerText = result2
    console.log('Your reset the game', result, result2)
    faul11 = 0
    faul22 = 0
    faul1box.innerText = faul11
    faul2box.innerText = faul22
    console.log('Fouls restarted', faul11, faul22)
        // MY CODE
}

function accion1() {

    if (corriendo) {
        detener();
        boton0.disabled = false; //No deshabilitado.
    } else {
        boton0.disabled = true; //Si, deshabilitado!
        iniciar();
    }
}

function iniciar() {

    const sumarMinuto = () => {

        if (minutos < 99) minutos++;
    }

    const sumarSegundo = () => {

        if (segundos === 59) {
            segundos = 0;
            sumarMinuto();
        } else {
            segundos++;
        }
    }

    const incrementar = () => {

        if (centesimas === 99) {
            centesimas = 0;
            sumarSegundo();
        } else {
            centesimas++;
        }

        dibujarTiempo();
    }
    corriendo = setInterval(incrementar, 10);
    boton1.innerHTML = "STOP GAME";
    /*
     *
     *setInterval arroja un valor que es un número
     *con el que luego se puede referenciar a ese intervalo
     *(si lo guardo en alguna variable, claro!)
     *
     */
    // MY CODE
    console.log('You started the game', result, result2)
        // MY CODE
}

function detener() {

    clearInterval(corriendo);
    corriendo = null;
    // MY CODE
    boton1.innerHTML = "START GAME";
    console.log('You stopped the game', result, result2)
        // MY CODE
}

dibujarTiempo();

let results = document.getElementById('result')

function save() {
    leader()
    let period = document.getElementById('period').value

    console.log('PERIOD ' + period + ' FULLY SAVED CORRECTLY\n' +
        `HOME SCORE:   ${result} \nGUEST SCORE:  ${result2}\nHOME FOULS:   ${faul11} \nGUEST FOULS:  ${faul22}\nTIME:         ${minutos}:${segundos}:${centesimas}\nEnding:       ${end}
        `
    )

    results.innerText += `\nPERIOD: ${period}\nHOME SCORE:   ${result} \nGUEST SCORE:  ${result2}\nHOME FOULS:   ${faul11} \nGUEST FOULS:  ${faul22}\nTIME:         ${minutos}:${segundos}:${centesimas}\nEnding:       ${end} 
    `

}