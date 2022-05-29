import React from "react";
import Xicon from "../icons/Xicon";
import Oicon from "./../icons/Oicon"

function Start() {
  return <div className="start">
    <div className="start__header">
      <Xicon color="green" />
      <Oicon color="yellow" />
    </div>
    <div className="card">
      <h1 className="text-lg">pick player 1's mark</h1>
      <div className="start__players">
        <span className="start__players--active">
          <Xicon />
        </span>
        <span >
          <Oicon />
        </span>
      </div>
      <p className="text-light">remember: x goes first</p>
    </div>
    <div className="start__btns">
      <button className="btn btn-yellow">new game (vs cpu)</button>
      <button className="btn btn-green">new game (vs player)</button>
    </div>
  </div>;
}

export default Start;
