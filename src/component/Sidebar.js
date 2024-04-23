import React from "react";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <div class="p-3">
      <aside class="menu">
        <p class="menu-label">Administration</p>
        <ul class="menu-list">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/table-course"}>Course</NavLink>
          </li>
          <li>
            <NavLink to={"/table-trainer"}>Trainer</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
