import { accumPoints } from "./accum-points";
import { requestCard } from "./request-card";
import { createCard } from "./create-card";
import { getWinner } from "./get-winner";

/**
 * Turno de la computadora, como es el ultimo turno cuando finaliza muestra el resultado
 * @param {Number} minPoints 
 * @param {Array<String>} deck el mazo de cartas
 * @param {Array<Number>} playersPoints arreglo con los puntos de los jugadores
 * @param {Iterable<HTMLElement>} divPlayersCards  iterable con los elementos html para poner las cartas de los jugadores
 * @param {Iterable<HTMLElement>} smalls iterable de los elementos small html para los puntajes de los jugadores
 */
export const computerTurn = async ( minPoints, deck, playersPoints, divPlayersCards, smalls ) => {

    let computerPoints = 0;
    do {
        await sleep(1500);//El delay entre carta y carta
        const card = requestCard( deck );
        computerPoints = accumPoints(card, playersPoints.length - 1, smalls, playersPoints);
        createCard(card, playersPoints.length - 1, divPlayersCards);

    } while ( ( computerPoints < minPoints ) && ( minPoints <= 21 ))

  getWinner( playersPoints );

}

/**
 * Función para que las cartas se repartan de a una
 * @param {Number} ms cantidad en milisegundos en mostrar la carta
 * @returns {Promise}
 */
const  sleep = ( ms ) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}