import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Xicon from "../icons/Xicon";
import Oicon from "./../icons/Oicon"

function Start() {

  const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext)

  return <div className="start">
    <div className="start__header">
      <Xicon color="green" />
      <Oicon color="yellow" />
    </div>
    <div className="card">
      <h1 className="text-lg">pick player 1's mark</h1>
      <div className="start__players">
        <span className={activeUser === "x" ? "start__players--active" : ""} onClick={() => setActiveUser("x")}>
          <Xicon color={activeUser === "x" ? "dark" : "light"} />
        </span>
        <span className={activeUser === "o" ? "start__players--active" : ""} onClick={() => setActiveUser("o")}>
          <Oicon color={activeUser === "o" ? "dark" : "light"} />
        </span>
      </div>
      <p className="text-light">remember: x goes first</p>
    </div>
    <div className="start__btns">
      <button className="btn btn-yellow" onClick={() => changePlayMode("cpu")}>new game (vs cpu)</button>
      <button className="btn btn-green" onClick={() => changePlayMode("user")}>new game (vs player)</button>
    </div>
  </div >;
}

export default Start;
