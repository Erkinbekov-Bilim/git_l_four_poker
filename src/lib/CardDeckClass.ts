import { ranks, suits } from "../constants/constants";
import type { ISuits } from "../types";
import Card from "./CardClass";

class CardDeck {
  private cardDeck: Card[] = [];
  constructor() {
    this.cardDeck = this.generateCards();
  }

  public get cardDeckLength(): number {
    return this.cardDeck.length;
  }

  private generateCards(): Card[] {
    const suitsObject: ISuits = suits;
    const ranksArray: (string | number)[] = ranks;
    const cards: Card[] = [];
    for (const key in suitsObject) {
      for (const rank of ranksArray) {
        cards.push(new Card(rank, suitsObject[key]));
      }
    }

    return cards;
  }

  private getCard(): Card {
    const randomIndex: number = Math.floor(
      Math.random() * this.cardDeck.length
    );

    const randomCard: Card = this.cardDeck[randomIndex];
    this.cardDeck.splice(randomIndex, 1);

    return randomCard;
  }

  public getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    if (howMany > this.cardDeck.length) {
      console.log("В колоде недостаточно карт");
      howMany = this.cardDeck.length;
    }

    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }

    console.log(`Осталось карт в колоде: ${this.cardDeck.length}`);

    return cards;
  }
}

export default CardDeck;
