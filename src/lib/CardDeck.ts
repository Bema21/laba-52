import Card from "./Card";

export default class CardDeck {
    public cards: Card [];

    constructor() {
        this.cards= [];
        const ranks  = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];

        for (const rank of ranks) {
            for (const suit of suits) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card {
        return this.cards.splice(Math.floor(Math.random()*this.cards.length), 1 )[0];
    }

    getCards(howMany:number): Card[]{
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}