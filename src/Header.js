import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

// IF NETWORK OR API error , value is not come , it will automatically tahing
Header.defaultProps = {
  title: "Hiba APP",
};
export default Header;
