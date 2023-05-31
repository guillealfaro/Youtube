import React from "react";
import "./Categories.scss";

const Categories = () => {
  const categories = [
    "All",
    "NBA",
    "Skateboarding",
    "Music",
    "Gaming",
    "CSS",
    "Computer Programming",
    "Podcasts",
    "Sitcoms",
    "Trailers",
    "Formula 1",
    "Architecture",
    "Indoor games and sports",
    "Graphic design",
    "Bodybuilding",
    "React hooks",
  ];
  return (
    <div className="space-container">
      {categories.map((categorie, index) => (
        <a href={`/${categorie}`} key={index}>
          {categorie}
        </a>
      ))}
    </div>
  );
};

export default Categories;
