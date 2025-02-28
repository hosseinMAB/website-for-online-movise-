import { useState } from "react";

const Content_div = () => {
  const [active, setActive] = useState("home");

  const ChingStateWedgite = (type) => {
    switch (type) {
      case "home":
        setActive("home");

        break;
      case "moves":
        setActive("moves");

        break;
      case "search":
        setActive("search");

        break;
      default:
        setActive("home");
        break;
    }
  };

  return { active, setActive, ChingStateWedgite };
};

export default Content_div;
