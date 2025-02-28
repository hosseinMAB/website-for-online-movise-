import { useState } from "react";

const Categuures_type = () => {
  const list_CateGures_1 = ["G", "PG", "PG-13", "R", "NR"];
  const list_CateGures_2 = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Crime",
    "War",
    "Family",
    "Historical",
    "Documentary",
  ];
  const [active_down, setactive_down] = useState("");
  const show_list = (type) => {
    switch (type) {
      case "type":
        setactive_down("type");
        break;
      case "age":
        setactive_down("age");
        break;

      default:
        setactive_down("");
        break;
    }
  };
  return {
    list_CateGures_1,
    list_CateGures_2,
    active_down,
    setactive_down,
    show_list,
  };
};

export default Categuures_type;
