import React from "react";
import "./section.css";
import "animate.css/animate.css";
import Fade from "react-reveal/Fade";
function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <>
      <div
        className="container-section"
        style={{ backgroundImage: `url(../images/${backgroundImg})` }}
      >
        <div>
          <h1 className="title-models">{title}</h1>
          <p className="order">{description}</p>
        </div>
        <div className="under-sect">
          <Fade bottom>
            <div className="btn-section">
              <div className="btn-left">
                <p>{leftBtnText}</p>
              </div>
              {rightBtnText && (
                <div className="btn-right">
                  <p>{rightBtnText}</p>
                </div>
              )}
            </div>
          </Fade>
          <div className="dis-arrow">
            <img
              src="https://img.icons8.com/ios-glyphs/46/000000/chevron-down.png"
              className="animate__fadeInDown animate-infinite downArrow"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
