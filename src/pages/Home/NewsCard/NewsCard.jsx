import React from "react";
import "./NewsCard.css";
import { FaRegBookmark, FaShareNodes } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, author, image_url, rating } = news;
  return (
    <div className="news-card">
      <header>
        <div className="author-container">
          <div>
            <img src={author.img} alt="" />
          </div>
          <div>
            <h4>{author.name}</h4>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="icons-container">
          <span>
            <FaRegBookmark className="bookmark-icon" />
          </span>
          <span>
            <FaShareNodes />
          </span>
        </div>
      </header>
      <main>
        <h2>{title}</h2>

        <div className="news-main-banner">
          <img src={image_url} alt="" />
        </div>

        <div className="news-main-details">
          <p>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link className="read-more" to={`/news/${_id}`}>
                  Read More
                </Link>
              </>
            )}
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default NewsCard;
