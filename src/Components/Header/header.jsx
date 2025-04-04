import React from "react";
import "../Header/header.css";

function Header() {
  // const [name, setName] = useState("Raza");
  // let nameUpdater = () => {
  //   prompt("Checking");
  // };
  return (
    <div className="landing">
      <div className="headings">
        <p className="hi">
          I am
          <span className="muzammil"> Muzammil Usman</span>
        </p>
        <p>Full Stack Web Developer</p>
      </div>
      <div className="dp"></div>
    </div>
  );
}

export default Header;
