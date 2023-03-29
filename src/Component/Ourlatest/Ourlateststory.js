import React from "react";
import Title from "../Title";
import OurlateststoryData from "../Asset/Ourlateststorydata/OurlateststoryData";

export default function Ourlateststory() {
  return (
    <>
      <section className="ourlatest">
        <div className="container">
          <Title
            Title="Our latest Story"
            Description="Open lesser winged midst wherein may morning "
          />
          <div className="latestgrp">
            {OurlateststoryData.map(({id, image, date, from, title }) => (
              <div className="latestcard" key={id}>
                <div className="image">
                  <img src={image} alt="" />
                </div>

                <div className="mid">
                  <div className="row">
                    <p className="col">{date}</p>
                    <p className="col">{from}</p>
                  </div>

                  <h5>
                    <strong>{title}</strong>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
