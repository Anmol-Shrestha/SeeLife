import React from "react";
import Title from "../Title";
import VolunteersData from "../Asset/MeetVolunteers/VolunteersData";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

export default function Meetvolunteers() {
  return (
    <>
      <section className="meetvolunteer">
        <div className="container">
          <Title
            Title="Meet Our Volunteer"
            Description="Creepeth called face upon face yielding midst is after moveth"
          />

          <div className="volunteergrp">
            {VolunteersData.map(({ vid, image, description, name, role }) => (
              <div className="vcard" key={vid}>
                <div className="image">
                  <img src={image} alt="" />
                </div>
                <div className="mid">
                  <h5>
                    <strong>{name}</strong>{" "}
                  </h5>
                  <p>{role}</p>
                  <p>{description}</p>
                </div>

                <div className="socials">
                  <AiFillFacebook className="icon" />{" "}
                  <AiOutlineInstagram className="icon" />{" "}
                  <AiOutlineTwitter className="icon" />{" "}
                  <AiOutlineMail className="icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
