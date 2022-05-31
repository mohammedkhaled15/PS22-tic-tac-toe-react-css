import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import BoardCard from "./BoardCard";

function Board() {
  const { squares, xnext, score, winner, winnerLines, handleReset, activeUser, playMode } = useContext(GameContext)
  return (
    <div className="board">
      <div className="board__header">
        <div>
          <Xicon />
          <Oicon />
        </div>
        <div className="board__turn">
          {xnext ? <Oicon color="light" size="sm" /> : <Xicon color="light" size="sm" />}turn
        </div>
        <div>
          <button className="btn btn-sm board__restart" onClick={handleReset}>
            <svg
              fill="none"
            >
              <path
                d="M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="board__body">
        {squares.map((square, index) =>
          <BoardCard
            key={index}
            index={index}
            user={square}
            active={winner && winnerLines && winnerLines.includes(index)} />)}
      </div>
      <div className="board__footer">
        <div className="card bg-green text-dark" >
          <p>x {playMode !== "cpu" ? "" : activeUser !== "x" ? "(Cpu)" : "(You)"}</p>
          <strong className="text-2xl">{score.x}</strong>
        </div>
        <div className="card bg-gray text-dark">
          <p>ties</p>
          <strong className="text-2xl">{score.ties}</strong>
        </div>
        <div className="card bg-yellow text-dark">
          <p>o {playMode !== "cpu" ? "" : activeUser !== "o" ? "(Cpu)" : "(You)"}</p>
          <strong className="text-2xl">{score.o}</strong>
        </div>
      </div>
    </div>
  )
}

export default Board;
