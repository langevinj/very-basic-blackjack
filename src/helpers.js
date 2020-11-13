import deckOfCards from './deckOfCards'


function dealRandomCard(){
    let randIdx = Math.floor(Math.random() * 52)
    return deckOfCards[randIdx]
}

export { dealRandomCard }