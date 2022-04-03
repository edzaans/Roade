import React from "react";
// Import stylesheet
import "./Panel.css";
// Import icons
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

function Panel() {
  return (
    <div>
      <ul class="nav justify-content-around single_panel">
        <li class="nav-item text-center">
          <GrTechnology className="icon_span" />
          <div className="text-center">Modern technologies</div>
        </li>
        <li class="nav-item text-center">
          <MdOutlineDesignServices className="icon_span" />
          <div className="text-center">Redesigned</div>
        </li>
        <li class="nav-item text-center">
          <MdFavoriteBorder className="icon_span" />
          <div className="text-center">Favourited by companies and drivers</div>
        </li>
      </ul>
    </div>
  );
}

export default Panel;
