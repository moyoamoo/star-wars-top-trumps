import React from "react";
import PopupInfo from "./PopupInfo";
import Info from "./Info";

const Header = () => {
  return (
    <div className="header">
      <h1> Starwars Top Trump</h1>
      <button>Info</button>
      <PopupInfo trigger={true}>
        {" "}
        <Info />{" "}
      </PopupInfo>
    </div>
  );
};

export default Header;
