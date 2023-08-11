/**
 * Esta función es para obtener el valor númerico de una carta
 * @param {String} card Ejemplo: ['3D']
 * @returns {Number} retorna el valor de la carta como valor númerico
 */
export const cardValue = ( card ) => {

    if( !card ) throw new Error('card es obligatorio');

    const value = card.substring(0, card.length-1);

    return ( value === 'A' ) ? 11 :
            ( isNaN( value )) ? 10 : parseInt( value );
}