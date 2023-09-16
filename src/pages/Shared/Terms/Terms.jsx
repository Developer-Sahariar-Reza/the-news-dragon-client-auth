import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h1>Terms & Conditions</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugit
        maiores sapiente cumque, velit, tempore quaerat voluptatibus cum porro
        repudiandae accusamus. Iste accusamus eveniet velit debitis ducimus,
        consequatur vero, soluta cupiditate maxime pariatur eos officia quis
        laboriosam quas assumenda veniam! Tempora nulla non natus illo eligendi
        quos iure nesciunt vero.
      </p>
      <p>
        <Link to="/register">Go Back To Register</Link>
      </p>
    </div>
  );
};

export default Terms;
