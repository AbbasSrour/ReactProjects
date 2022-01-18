import React from "react";
import "../CSS/Boxes.css";

function Boxes() {
  return (
    <div className="Boxes">
      {/* Box One */}
      <div className="Boxlayout">
        <div className="BoxText">
          <h1 className="BoxHeader"> Transform your brand </h1>
          <p className="BoxParagraph">
            {" "}
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.{" "}
          </p>
          <div className="BoxLinkWrapper">
            <a href="x" className="BoxLink">
              Learn More
            </a>
            <div className="BoxLinkDecoration"> </div>
          </div>
        </div>
        <div className="egg"></div>
      </div>

      {/* Box Two */}
      <div className="Boxlayout">
        <div className="cup"></div>
        <div className="BoxText">
          <h1 className="BoxHeader"> Stand out to the right audience </h1>
          <p className="BoxParagraph">
            {" "}
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{" "}
          </p>
          <div className="BoxLinkWrapper">
            <a href="x" className="BoxLinkPink">
              Learn More
            </a>
            <div className="BoxLinkDecorationPink"> </div>
          </div>
        </div>
      </div>

      {/* Box Three */}
      <div className="Boxlayout">
        <div className="smallOrange">
          <div className="SecondBoxText">
            <h1 className="SecondBoxHeader">Graphic Design</h1>
            <p className="SecondBoxParagraph">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        <div className="cherry">
          <div className="SecondBoxText">
            <h1 className="SecondBoxHeaderOrange"> Photography </h1>
            <p className="SecondBoxParagraphOrange">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Boxes;
