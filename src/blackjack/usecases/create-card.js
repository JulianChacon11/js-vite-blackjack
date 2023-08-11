/**
 * Para mostrar la imagen de la carta en el html
 * @param {String} card string de la carta 
 * @param {Number} turn turno del jugador
 * @param {HTMLElement} divPlayersCards elementos html donde se muestran las cartas de los jugadores
 */
export const createCard = ( card, turn, divPlayersCards ) => {

    const cardImg = document.createElement('img');
    cardImg.src = `./assets/cartas/${ card }.png`;
    cardImg.classList.add('ml-[-75px]', 'w-[150px]');
    divPlayersCards[turn].appendChild( cardImg );
}