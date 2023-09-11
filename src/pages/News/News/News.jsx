import React from "react";
import "./News.css";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong, FaCalendar } from "react-icons/fa6";
import editor1 from "../../../assets/images/editorsInsight1.png";
import editor2 from "../../../assets/images/editorsInsight2.png";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, category_id } = news;
  return (
    <div>
      <div className="news-details-container">
        <div className="news-details-image">
          <img src={image_url} alt="" />
        </div>
        <div className="news-details-info">
          <h1>{title}</h1>
          <p>{details}</p>
        </div>
        <div className="news-details-button">
          <Link to={`/category/${category_id}`}>
            <span>
              <FaArrowLeftLong />
            </span>
            <span>All News in this Category</span>
          </Link>
        </div>
      </div>

      <div className="editor-insight-container">
        <h1>Editor's Insight</h1>

        <div className="editor-card-contianer">
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

export default News;
