import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["header", "info", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={
            active === item ? { backgroundColor: "var(--brown-color)" } : {}
          }
        />
      )
    )}
  </div>
);

export default NavigationDots;