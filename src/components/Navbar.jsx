'use client'

import React, { useState, useEffect } from "react";
import HTML from "../../public/html.png";
import CSS from "../../public/css.png";
import JS from "../../public/js.png";
import SCSS from "../../public/scss.png";
import REACT from "../../public/react.png";
import NODE from "../../public/node.png";
import Image from "next/image";
import Popup from './popup';

const Navbar = () => {
  const [openedCards, setOpenedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [pop, setPop] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledCards = [
      { id: 1, img: HTML },
      { id: 2, img: CSS },
      { id: 3, img: JS },
      { id: 4, img: SCSS },
      { id: 5, img: REACT },
      { id: 6, img: NODE },
      { id: 7, img: HTML },
      { id: 8, img: CSS },
      { id: 9, img: JS },
      { id: 10, img: SCSS },
      { id: 11, img: REACT },
      { id: 12, img: NODE },
    ].sort(() => Math.random() - 0.5);
    
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (matchedCards.length === 12) {
      // All cards have been matched
      setPop(true);
      console.log("All cards matched! Game completed!");
      // You can perform any other action here, such as showing a modal or displaying a message.
    }
  }, [matchedCards]);




  const handleClick = (card) => {
    if (openedCards.length === 1 && openedCards[0].id === card.id) {
      return; // Prevent clicking the same card twice
    }

    if (openedCards.length === 0) {
      setOpenedCards([card]);
    } else if (openedCards.length === 1) {
      setOpenedCards([...openedCards, card]);
      setTimeout(() => {
        if (openedCards[0].img === card.img) {
          setMatchedCards([...matchedCards, openedCards[0], card]);
        }
        setOpenedCards([]);
      }, 1000);
    }
  };

  const isCardOpened = (card) => {
    return openedCards.some((c) => c.id === card.id);
  };

  const isCardMatched = (card) => {
    return matchedCards.some((c) => c.id === card.id);
  };

  return (
    <div className="w-screen h-screen p-3 bg-green-300 flex flex-col items-center justify-center gap-5 overflow-auto">
      <p className="text-2xl font-semibold">Memory Game</p>
      <div className="w-[700px] h-[700px] grid grid-cols-4 gap-4 p-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-lg cursor-pointer flex items-center justify-center w-full h-[80%] ${
              isCardOpened(card) ? "card_active" : isCardMatched(card) ? "card_correct" : "card"
            }`}
            onClick={() => handleClick(card)}
          >
            <Image src={card.img} width={100} height={100} alt="" className="img" />
          </div>
        ))}
      </div>
      {pop && <Popup />}
    </div>
  );
};

export default Navbar;
