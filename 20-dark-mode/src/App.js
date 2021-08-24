import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
const LIGHT = "light-theme";
const DARK = "dark-theme";

const getStorageTheme = () => {
  let theme = LIGHT;
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};
function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT);
    }
  };

  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  );
}

export default App;
