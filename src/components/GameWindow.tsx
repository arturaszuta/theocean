import React from "react";

import ActionPanel from "./ActionPanel";
import Logger from "./Logger";
import Inventory from "./Inventory";

import "../styles/_gameWindow.scss"

const GameWindow = (props: any) => {
    return (
        <div className="main_window">
            <div className="left_panel">
                <ActionPanel />
            </div>
            <div className="center_panel">
                <Logger />
            </div>
            <div className="right_panel">
                <Inventory />
            </div>
        </div>
    );
}

export default GameWindow;