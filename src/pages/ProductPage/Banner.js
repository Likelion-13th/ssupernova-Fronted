import React from "react";
import "../../styles/ProductPage.css";

// 배너 컴포넌트: title과 imagePath를 props로 받아 표시
const Banner = ({ title, imagePath }) => {
  return (
    <div className="banner">
      <img
        src={`${process.env.PUBLIC_URL}/img/${imagePath}`}
        alt={title}
        className="banner-image"
      />
      <div className="banner-title">{title}</div>
    </div>
  );
};

export default Banner;