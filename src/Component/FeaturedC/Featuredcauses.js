import React from "react";
import Title from "../Title";
import FeaturedData from "../Asset/FeaturedCauses/FeaturedData";
import Greeyellow from "../Buttons/Greeyellow";
export default function Featuredcauses() {
  return (
    <>
      <section className="container" style={{ marginTop: "100px" }}>
        <Title
          Title="Featured causes"
          Description="Creepeth called face upon face yielding midst is after moveth "
        />

        <div className="featuredgrp">
          {FeaturedData.map(
            ({ name, description, raised, Goal, donors, image, id }) => (
              <div className="featcard" key={id}>
                <div className="image">
                  <img src={image} alt="" />
                </div>

                <div className="mid">
                  <h5>
                    <strong>{name}</strong>
                  </h5>
                  <p>{description}</p>
                  <div className="row">
                    <p className="col">Raised : {raised}</p>
                    <p className="col g">Goal : {Goal}</p>
                  </div>
                  <div className="row">
                    <div className="col"><Greeyellow text="Donate"/></div>
                    <p className="col">{donors} Donors</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
