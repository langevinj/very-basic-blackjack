

function spitDeck(){

    deckOfCards = []
    cardType = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    suits = ['C', 'D', 'H', 'S']

    for (let i = 0; i < 13; i++) {
        for (let x = 0; x < 4; x++) {
            let tempCard = {}
            tempCard['code'] = cardType[i] + suits[x]
            if (i === 0) {
                tempCard['value'] = 11;
            } else if (i === 10 || i === 11 || i === 12) {
                tempCard['value'] = 10;
            } else {
                tempCard['value'] = 1 + 1
            }
            deckOfCards.push(tempCard)
        }
    }

    console.log(deckOfCards)
}


spitDeck()