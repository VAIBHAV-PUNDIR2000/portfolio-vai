import React, { useState } from "react";
import { NavigationDots, SocialMedia } from "../Components/index";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`${classNames}`}>
        <div className="app__wrap">
          <NavigationDots active={idName} />
        </div>
        <div>
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
