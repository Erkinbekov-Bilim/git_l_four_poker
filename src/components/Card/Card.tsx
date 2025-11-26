import React from "react";

interface ICardProps {
  rank: string | number;
  suit: string;
}

const Card: React.FC<ICardProps> = ({ rank, suit }) => {
  const getSuitName = (suit: string): string | null => {
    switch (suit) {
      case "♦️":
        return "diams";
      case "♥️":
        return "hearts";
      case "♣️":
        return "clubs";
      case "♠️":
        return "spades";
      default:
        return null;
    }
  };

  const isRankString = (rank: string | number): string | number => {
    if (typeof rank === "string") {
      return rank.toLowerCase();
    } else {
      return rank;
    }
  };

  return (
    <>
      <span className={`card rank-${isRankString(rank)} ${getSuitName(suit)}`}>
        <span className="rank">{rank}</span>

        <span className="suit">{suit}</span>
      </span>
    </>
  );
};

export default Card;
