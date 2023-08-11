import _ from 'underscore';
import { createDeck, requestCard, createCard, computerTurn, accumPoints } from './usecases';
/**
 * 2C = Two of Club (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 * 
 */


let deck = [];
const types = ['C', 'D', 'H', 'S'],
      specials = ['A', 'J', 'Q' ,'K'];

let playersPoints = [];

// Referencias del DOM
const btnNuevo = document.querySelector('#btn-nuevo'),
      btnPedir = document.querySelector('#btn-pedir'),
      btnDetener = document.querySelector('#btn-detener'),
      smalls = document.querySelectorAll('small'),
      divPlayersCards = document.querySelectorAll('.cards-div');

// Esta función inicializa el juego

const gameInit = ( players = 2 ) => {
    deck = createDeck( types, specials );
    playersPoints = [];

    for( let i = 0; i < players; i++) {
        playersPoints.push(0);
    }

    smalls.forEach( element => element.innerText = 0 );
    divPlayersCards.forEach( element => element.innerHTML = '' );
    btnDetener.disabled = false;
    btnPedir.disabled = false;
}


// Eventos
btnPedir.addEventListener( 'click' , () => {

    const card = requestCard( deck );
    const playerPoints = accumPoints( card, 0, smalls, playersPoints);

    createCard( card, 0, divPlayersCards );

    if( playerPoints > 21 ) {

        console.log('Perdiste');
        btnPedir.disabled = true;   
        btnDetener.disabled = true;
        computerTurn( playerPoints, deck, playersPoints, divPlayersCards, smalls );

    }else if( playerPoints == 21 ){

        console.log('21, genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        computerTurn( playersPoints[0], deck, playerPoints, divPlayersCards, smalls );
    }
});

btnDetener.addEventListener( 'click' , () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    computerTurn( playersPoints[0], deck, playersPoints, divPlayersCards, smalls );
});

btnNuevo.addEventListener( 'click', () => {
    gameInit();
}); 



