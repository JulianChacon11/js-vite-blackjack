/**
 * Esta función es para pedir una carta 
 * @param {Array<String>} deck es un arreglo de string, Ejemplo: ['KC','5H', '2S', '3D','2C', 'AS']
 * @returns {String} retorna la carta que se pide
 */
export const requestCard = ( deck ) => {

    if( !deck ) throw new Error('deck es obligatorio');

    if( deck.length === 0 ) {
        throw 'No hay mas cartas en el deck';
    }
   
    return deck.pop();
}