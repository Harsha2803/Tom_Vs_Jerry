import React, { useEffect, useState } from "react";
import {Link, NavLink, useNavigate} from 'react-router-dom'
import "./styles/stage5.css";

const cardimages = [
  { src: "/components/char1.png" },
  { src: "/components/char2.png" },
  { src: "/components/char3.png" },
  { src: "/components/char4.png" },
  { src: "/components/char5.png" },
  { src: "/components/char6.png" },
  { src: "/components/char7.png" },
  { src: "/components/char8.png" },
];

const Stage5 = () => {
  const navigate = useNavigate()
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [total, setTotal] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardimages, ...cardimages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setFirst(null);
    setSecond(null);
    setCards(shuffledCards);
    setTurns(0);
    setTotal(0);
  };

  const handleChoice = (card) => {
    if (first && second) {
      return; // Ignore clicks when two cards are already selected
    }

    if (!first) {
      setFirst(card);
    } else if (first && !second) {
      setSecond(card);
    }
  };
  const buttonhumm = () =>{
    navigate('/');
  }
  useEffect(() => {
    if (first && second) {
      if (first.src === second.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === first.src || card.src === second.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        reset();
      } else {
        setTotal((prev) => prev - 2);
        setTimeout(reset, 1000); // Delay resetting the cards to show the second card
      }
    }
  }, [first, second]);

  const reset = () => {
    setFirst(null);
    setSecond(null);
    setTurns((prev) => prev + 1);
    setTotal((prev) => prev + 2);
  };

  useEffect(() => {
    if (total > 0 && total === cardimages.length*2) {
      alert(`All cards are matched! number of turns ${turns}`);
      navigate('/completion');
    }
  }, [total]);

  useEffect(() => {
    shuffleCards();
  }, []);
  return (
      <div className="stage5page">
        <div className="header5">Stage 5 : The Memory Game</div>
        <button className="newgame" onClick={shuffleCards}>
          New game
        </button>
        <br />
        <div className="card-grid">
          {cards.map((card) => (
            <div
              className="card"
              key={card.id}
              onClick={card.matched || card === first || card === second
                ? null:() => handleChoice(card)}
            >
              <div
                className={
                  card === first || card === second || card.matched ? "flipped" : ""
                }
              >
                <img className="front" src={card.src} alt="card front" />
                <div className="back img"></div>
                {/* <img className="back" src="/components/cover.png" alt="card back" /> */}
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-3">Turns: {turns}</h3>
        <div className='logout'>
              <button className='loggo' onClick={buttonhumm}>Log Out</button>
            </div>
      </div>
    
  );
};

export default Stage5;
