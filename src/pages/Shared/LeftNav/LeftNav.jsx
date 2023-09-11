import React, { useEffect, useState } from "react";
import "./LeftNav.css";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa6";
import editor1 from "../../../assets/images/editorsInsight1.png";
import editor2 from "../../../assets/images/editorsInsight2.png";

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
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="editor-insight-container">
        <h1>Editor's Insight</h1>

        <div className="left-nav-editor-card-contianer">
          <div>
            <div>
              <img src={editor1} alt="" />
            </div>
            <div>
              <h4>21 The Most Stylish Wedding Guest Dresses For Spring</h4>
              <div>
                <span>
                  <FaCalendar />
                </span>
                <span>Jan 4, 2022</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={editor2} alt="" />
            </div>
            <div>
              <h4>21 The Most Stylish Wedding Guest Dresses For Spring</h4>
              <div>
                <span>
                  <FaCalendar />
                </span>
                <span>Jan 4, 2022</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={editor1} alt="" />
            </div>
            <div>
              <h4>21 The Most Stylish Wedding Guest Dresses For Spring</h4>
              <div>
                <span>
                  <FaCalendar />
                </span>
                <span>Jan 4, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
