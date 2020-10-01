import React from "react";

const Menu = () => {
  return (
    <div style={hiddenMenu}>
      <ul style={showMenu}></ul>
    </div>
  );
};

const hiddenMenu = {
  background: "#232b4e",
};

const showMenu = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",
  height: "5vh",
  fontSize: "1.5rem",
};

export default Menu;
