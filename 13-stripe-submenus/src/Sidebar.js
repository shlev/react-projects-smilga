import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";
import Link from "./Submenu";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink, idx) => {
            const { page, links } = sublink;
            return (
              <article key={idx}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, idx) => (
                    <Link key={idx} {...link}></Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
