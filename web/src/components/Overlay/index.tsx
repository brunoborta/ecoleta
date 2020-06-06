import React from "react";

import "./styles.css";

const Overlay: React.FC = ({ children }) => {
  return <div id="overlay">{children}</div>;
};

export default Overlay;
