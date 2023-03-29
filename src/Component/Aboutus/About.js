import React from "react";
import Greentrans from "../Buttons/Greentrans";

export default function About() {
  return (
    <>
      <section>
        <div className="container">
            <div className="aboutus">
            <div className="right">
            <img src={require("../Asset/aboutus/about-img.jpg.webp")} alt="" />
          </div>
          <div className="left">
            <h2>
              We are nonprofit team and work worldwide{" "}
            </h2>
            <p>Their multiply doesn't behold shall appear living heaven second roo lights. Itself hath thing for won't herb forth gathered good bear fowl kind give fly form winged for reason </p>

            <p>Land their given the seasons herb lights fowl beast whales it after multiply fifth under to it waters waters created heaven very fill agenc to. Dry creepeth subdue them kind night behold rule stars him grass waters our without </p>
            
            <div className="link">
            <Greentrans text="LEARN MORE" />
           </div>
           </div>
          
            </div>
           
           

        </div>
      </section>
    </>
  );
}
