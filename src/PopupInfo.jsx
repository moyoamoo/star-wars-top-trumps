import React from "react";

const PopupInfo = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner"> </div>
      <button className="close-btn">Close</button>
      {props.children}
    </div>
  ) : (
    ""
  );
};

export default PopupInfo;
