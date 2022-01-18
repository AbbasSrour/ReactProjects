import React from "react";
import Emily from "../media/image-emily.jpg";
import Thomas from "../media/image-thomas.jpg";
import Jennie from "../media/image-jennie.jpg";
import "../CSS/Testimonials.css";

function TestimonialElements(props) {
  return (
    <div className="Testimonial">
      <div className="clientImageSection">
        <img className="clientImage" src={props.Image} alt=" " />
      </div>

      <div className="clientTestSection">
        <p className="clientTest">{props.Test}</p>
      </div>

      <div className="clientNameSection">
        <h2 className="clientName">{props.Name}</h2>
      </div>

      <div className="clientProSection">
        <h3 className="clientPro">{props.Pro}</h3>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="MainSection">
      <div className="TestimonialsGrid">
        <div className="TestimonialsGridRow1">
          <h1 className="TestimonialHeader"> Client Testimonials </h1>
        </div>

        <div className="TestimonialsGridRow2">
          <TestimonialElements
            Image={Emily}
            Test="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            Name="Emily R."
            Pro="Marketing Director"
          />

          <TestimonialElements
            Image={Thomas}
            Test="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            Name="Thomas S."
            Pro="Chief Operating Officer"
          />

          <TestimonialElements
            Image={Jennie}
            Test="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            Name="Jennie F."
            Pro="Business Owner"
          />
        </div>

        <div className="TestimonialsGridRow3"> </div>
      </div>
    </div>
  );
}

export default Testimonials;
