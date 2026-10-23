// Sidebar.jsx

import React from 'react';
import logo from "./logo.svg";
import "./styles.css";

const navItems = ["home", /* Agrega aquí tus otros elementos de navegación */];

export const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <header>
          {/* Contenido del encabezado */}
        </header>
        <nav>
          {/* Contenido de la navegación */}
        </nav>
      </div>
    </aside>
  );
};
