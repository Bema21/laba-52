import React, {useState} from "react";
import CardComponent from "./components/Card/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import Card from "./lib/Card.ts";
import './App.css';

const deck = new CardDeck(); // Создаем один экземпляр колоды

const App = () => {
    const [dealtCards, setDealtCards] = useState<Card[]>([]);

    const dealCards = () => {

        const dealt = deck.getCards(5);
        setDealtCards(dealt);
    };

    return (
        <div className="playingCards faceImages">
            {dealtCards.map((card, index) => (
                <CardComponent key={index} rank={card.rank} suit={card.suit}/>
            ))}
            <button onClick={dealCards}>Раздать карты</button>
        </div>
    );
};
export default App;

