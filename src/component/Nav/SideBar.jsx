import "./SideBar.css";
import React from "react";
import titlebutton from "../../assets/titlebutton.png";

export const SideBar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <React.Fragment>
      <div>
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          // style={{
          //   transform: `translate(${width}px)`,
          // }}
        >
          <img src={titlebutton} className="side" />
        </button>

        <div
          className="sidebar"
          style={{
            transform: `translatex(${xPosition - 3}em)`,

            // minHeight: height,
          }}
        >
          <div className="content">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
