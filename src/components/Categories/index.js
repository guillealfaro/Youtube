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
    // "Podcasts",
    // "Sitcoms",
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
      {categories.map((category, index) => (
        <a
          href={`/${category}`}
          key={index}
          className={index === 0 ? "first-category" : ""}
        >
          {category}
        </a>
      ))}
      <a href={`/new`} className="gradient">
        New to you
      </a>
    </div>
  );
};

export default Categories;
