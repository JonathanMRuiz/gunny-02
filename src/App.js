import "./App.css";
import Factions from "./pages/Factions";
import GameModes from "./pages/GameModes";
import Home from "./pages/Home";
import Inugis from "./pages/Inugis";
import Skins from "./pages/Skins";
import Tokens from "./pages/Tokens";
import { Whatis } from "./pages/Whatis";

function App() {
  return (
    <div className="relative">
      <Home />
      <Whatis />
      <Factions />
      <Inugis />
      <Skins />
      <GameModes />
      <Tokens />
    </div>
  );
}

export default App;
