import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import { GameState } from "./context/GameContext";
import { ModalState } from "./context/Modalcontext";
import "./index.css";

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <ModalState>
        <GameState>
            <App/>
        </GameState>
    </ModalState>
);
