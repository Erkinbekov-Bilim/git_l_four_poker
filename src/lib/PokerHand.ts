import type Card from "./CardClass";

class PokerHand {
  private myHand: Card[];
  constructor(myHand: Card[]) {
    this.myHand = myHand;
  }

  public getOutcome(): string {
    const rankCount: { [key: string]: number } = {};
    const suitCount: { [key: string]: number } = {};
    let rankCountArray: number[] = [];
    let suitCountArray: number[] = [];

    for (const card of this.myHand) {
      const rank: string | number = card.rank;
      const suit: string = card.suit;

      if (!rankCount[rank] && !suitCount[suit]) {
        rankCount[rank] = 0;
        suitCount[suit] = 0;
      }

      if (Object.hasOwn(rankCount, rank)) {
        rankCount[rank]++;
      }

      if (Object.hasOwn(suitCount, suit)) {
        suitCount[suit]++;
      }
    }

    rankCountArray = Object.values(rankCount);
    suitCountArray = Object.values(suitCount);

    if (suitCountArray.includes(4)) return "Флэш";
    if (rankCountArray.includes(3)) return "Тройка";
    if (rankCountArray.filter((count) => count === 2).length === 2) return "Две пары";
    if (rankCountArray.includes(2)) return "Одна пара";

    return "Старшая карта";
  }
}

export default PokerHand;
