/**
 * 
 * @param {Array<Number>} playersPoints arreglo de los puntajes de los jugadores
 */
export const getWinner = ( playersPoints ) => {

    const [ minPoints, computerPoints ] = playersPoints;
    setTimeout( () => {
        if( computerPoints == minPoints ) {
            alert('Es un empate!');
        }else if( minPoints > 21 ) {
            alert('Lo siento, la computadora gana...');
        }else if( computerPoints > 21 ) {
            alert('Felicidades, ganaste!');
        }
    }, 1000);
}
