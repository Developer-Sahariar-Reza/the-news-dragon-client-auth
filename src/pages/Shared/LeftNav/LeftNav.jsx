import React, { useEffect, useState } from "react";
import "./LeftNav.css";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="left-nav">
      <div className="category-section">
        <h1 className="category-title">All Categories</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
