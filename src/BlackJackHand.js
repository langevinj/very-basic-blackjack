import React from 'react'
import { dealRandomCard } from './helpers.js'
import './BlackJackHand.css'

const BASE_IMG_URL = "https://deckofcardsapi.com/static/img"

function DealHand(){
    let hand = []
    while(hand.length < 2){
        let newCard = dealRandomCard();
        if(!hand.includes(newCard)){ hand.push(newCard) }
    }
    return(
        <div className="BlackJackHand">
            <div className="BlackJackHand-card1">
                <img src={`${BASE_IMG_URL}/${hand[0].code}.png`}></img>
            </div>
            <div className="BlackJackHand-card2">
                <img src={`${BASE_IMG_URL}/${hand[1].code}.png`}></img>
            </div>
            <h1 className="BlackJackHand-score">Score: {getScore(hand)}</h1>
            <h2 className="BlackJackHand-blackjack">{getScore(hand) === 21 ? "BLACKJACK!" : ""}</h2>
        </div>
    )
}

function getScore(hand){
    return hand[0].value + hand[1].value;
}

export {DealHand};