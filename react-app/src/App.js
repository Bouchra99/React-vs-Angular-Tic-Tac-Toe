import "./App.css";
import Game from "./components/Game";
import { useTheme } from "./context/theme.context";
function App() {
  const { theme, toggleTheme } = useTheme();

  const handleChange = (e) => {
    toggleTheme();
  };
  return (
    <div>
      <div className="switch">
        <input
          onChange={(e) => handleChange(e)}
          type="checkbox"
          id="toggle"
          checked={theme === "light" ? false : true}
        />
        <label htmlFor="toggle" />
      </div>
      <Game />
    </div>
  );
}

export default App;
