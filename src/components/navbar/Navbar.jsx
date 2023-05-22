import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.home}>
        <NavLink to="/">Home</NavLink>
      </div>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/task">Task</NavLink>
    </div>
  );
}
