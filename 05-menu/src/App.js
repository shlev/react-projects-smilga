import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategries] = useState(allCategories);

  function filterItems(category) {
    console.log(category);
    let updated;
    if (category === "all") {
      updated = items;
      console.log("Updating all");
    } else {
      updated = items.filter((item) => item.category === category);
    }

    setMenuItems(updated);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
        ></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
