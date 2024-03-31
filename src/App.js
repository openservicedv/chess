// import './App.css';
import Game from "./pages/game";
import {GameProvider} from "./context/GameContext";

export default function App() {
    return (
        <GameProvider>
            <Game/>
        </GameProvider>
    );
}

