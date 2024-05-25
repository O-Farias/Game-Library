import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <button className="toggle-theme" onClick={toggleTheme}>
        Alternar para tema {theme === "light" ? "escuro" : "claro"}
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            id="cover"
            value={cover}
            onChange={(ev) => setCover(ev.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt={`Capa do jogo ${game.title}`} />
            <h2>{game.title}</h2>
            <button onClick={() => removeGame(game.id)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
