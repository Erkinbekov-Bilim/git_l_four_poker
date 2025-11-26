import { useState } from "react";
import "./App.css";
import CardClass from "./lib/CardClass";
import Card from "./components/Card/Card";
import CardDeck from "./lib/CardDeckClass";
import PokerHand from "./lib/PokerHand";

const cardDeck = new CardDeck();

function App() {
  const [cards, setCards] = useState<CardClass[]>([]);
  const pokerHand = new PokerHand(cards);

  const createCardDeck = (): void => {
    setCards(cardDeck.getCards(5));
    console.log(pokerHand.getOutcome());
  };

  return (
    <>
      <div>
        {cards.length === 0 ? (
          <button type="button" onClick={createCardDeck}>
            Раздать карты
          </button>
        ) : (
          <>
            <button type="button" onClick={createCardDeck}>
              Раздать карты
            </button>
            <div>Poker Hand: {pokerHand.getOutcome()}</div>
            <div>Кол-во карт: {cardDeck.cardDeckLength}</div>
            <div className="playingCards faceImages">
              {cards.map((card, index) => (
                <Card key={index} rank={card.rank} suit={card.suit} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
