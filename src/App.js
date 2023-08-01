import "./styles/App.scss";
import CounterWidget from "./components/CounterWidget";
import ToggleGreeting from "./components/ToggleGreeting";
import ToggleShowHide from "./components/ToggleShowHide";
import FontSizer from "./components/FontSizer";
import TextAligner from "./components/TextAligner";
import ClockWidget from "./components/ClockWidget";

export default function App() {
  return (
    <div className="App">
      <CounterWidget />
      <ToggleGreeting />
      <ToggleShowHide />
      <FontSizer />
      <TextAligner />
      <ClockWidget />
    </div>
  );
}
