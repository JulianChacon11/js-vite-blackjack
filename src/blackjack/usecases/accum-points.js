import { cardValue } from "./card-value";
/**
 * Función que aculuma los puntos hechos por un jugador en su turno
 * @param {String} card carta, Ejemplo: '3H' 
 * @param {Number} turn turno del jugador, Turn 0 = primer jugador y el último será la computadora
 * @param {HTMLElement} smalls elementos small html para los puntajes de los jugadores
 * @param {Array<Number>} playerPoints el arreglo con los puntos de los jugadores 
 * @returns {Number} retorna la cantidad de puntos hechos por el jugador en su turno
 */
export const accumPoints = ( card, turn, smalls, playersPoints ) => {

    playersPoints[turn] = playersPoints[turn] + cardValue( card );
    smalls[turn].textContent = playersPoints[turn];
    return playersPoints[turn];
}
