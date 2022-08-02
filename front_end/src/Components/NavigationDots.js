import React from "react";

const NavigationDots = ({ active, setActiveLink }) => (
  <div className="app__navigation">
    {["header", "info", "projects", "skills", "footer"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        onClick={() => setActiveLink(item)}
        style={
          active === item
            ? { backgroundColor: "var(--brown-color)", transform: "scale(2)" }
            : {}
        }
      />
    ))}
  </div>
);

export default NavigationDots;
