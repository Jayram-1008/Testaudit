import React, { useState } from "react";
import "./style.css"; // Include your CSS here
import img1 from "../assets/asd.jpg";
import img2 from "../assets/audit_2_2.jpg";
import img3 from "../assets/bgt.jpg";
import img4 from "../assets/audit.png";
import img5 from "../assets/9604605.jpg";
import img6 from "../assets/counterBg.jpg";
import img7 from "../assets/qwe.jpg";
import img8 from "../assets/work3.png";
const images = [
  { id: "content1", img: img1 },
  { id: "content2", img: img2 },
  { id: "content3", img: img3 },
  { id: "content4", img: img4 },
  { id: "content5", img: img5 },
  { id: "content6", img: img6 },
  { id: "content7", img: img7 },
  { id: "content8", img: img8 },
];

const ContentBox = ({ isActive, id, imgSrc }) => {
  return (
    <div className={`contentBox ${isActive ? "active" : ""}`} id={id}>
      <div className="card">
        <div className="imgBox">
          <img src={imgSrc} alt="" />
        </div>
        <div className="textBox">
          <h2>
            Someone Famous
            <br />
            <span>Product Designer</span>
          </h2>
          <ul className="social-media">
            <li>
              <a href="">&#174;</a>
            </li>
            <li>
              <a href="">&#9824;</a>
            </li>
            <li>
              <a href="">&#9827;</a>
            </li>
            <li>
              <a href="">&#8719;</a>
            </li>
            <li>
              <a href="">&#8704;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TeamMember = () => {
  const [activeId, setActiveId] = useState("content1");

  const handleImgClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="container px-2">
      <div className="icon">
        {images.map((image, index) => (
          <div
            key={index}
            className={`imgBox ${activeId === image.id ? "active" : ""}`}
            style={{ "--i": index + 1 }}
            onClick={() => handleImgClick(image.id)}
          >
            <img src={image.img} alt="" />
          </div>
        ))}
      </div>

      <div className="content">
        {images.map((image, index) => (
          <ContentBox
            key={index}
            isActive={activeId === image.id}
            id={image.id}
            imgSrc={image.img}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
