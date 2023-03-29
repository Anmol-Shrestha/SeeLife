import React from "react";
import Majorcausedata from "../Asset/Majorcauses/MajorcauseData";
import Title from "../Title";
export default function Majorcauses() {
  return (
    <>
      <section className="container">
        <Title
          Title="Our major causes"
          Description="Creepeth called face upon face yielding midst is after moveth "
        />
        <div className="cardgrp">
          {Majorcausedata.map(({ id, title, description, image }) => (
            <div className="Omccard" key={id}>
              <h5 className="tit">
                <strong>{title}</strong>
              </h5>

              <img src={image} width={70} height={70} alt="" />

              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
