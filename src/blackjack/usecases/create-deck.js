import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} types Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specials Ejemplo: ['A', 'J', 'Q' ,'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const createDeck = ( types, specials ) => {

    if ( !types || types.length === 0) 
    throw new Error('types es obligatorio como un arreglo de strings');

    if ( !specials || specials.length === 0) 
    throw new Error('specials es obligatorio como un arreglo de strings');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let type of types ) {
            deck.push( i + type );
        }
    }

    for( let type of types ) {
        for( let special of specials ) {
        deck.push( special + type); 
        }
    }
    // Se usa la libreria underscore js para mezclar las cartas
    return deck = _.shuffle( deck );
}

//export default createDeck;