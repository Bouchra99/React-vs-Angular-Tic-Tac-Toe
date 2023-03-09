import Box from "./Box";
import "../styles/Board.css";
import { useState, useEffect } from "react";

export default function Board() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [tour, setTour] = useState(true);
  const [message, setMessage] = useState("");
  const [winner, setWinner] = useState("");

  const winGame = (boxes) => {
    const winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winComb.length; i++) {
      const [a, b, c] = winComb[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[b] === boxes[c]) {
        return boxes[a];
      }
    }

    return null;
  };

  useEffect(() => {
    setWinner(winGame(boxes));
    let remainingBoxes = boxes.filter((x) => x == null).length;

    if (winner) {
      setMessage(winner + " wins");
    } else if (remainingBoxes === 0) {
      setMessage("Tie");
    }
  }, [boxes, winner]);

  const handleClick = (i) => {
    if (winner) {
      return null;
    }

    const values = boxes.slice();

    tour ? (values[i] = "X") : (values[i] = "O");
    setBoxes(values);
    setTour(!tour);
  };

  const renderBox = (i) => {
    return <Box value={boxes[i]} onClick={() => handleClick(i)} />;
  };

  const replay = () => {
    setBoxes(Array(9).fill(null));
    setWinner("");
    setMessage("");
  };
  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </div>
        <div className="board-row">
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </div>
        <div className="board-row">
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </div>
      </div>
      {message ? (
        <div className="win-tag">
          <h3 className="winner">{message}</h3>
          <button onClick={replay} className="replay-btn">
            Replay
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
