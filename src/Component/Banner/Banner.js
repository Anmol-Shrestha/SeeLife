import React from "react";
import { motion } from "framer-motion";
import Greentrans from "../Buttons/Greentrans";
import Yellotrans from "../Buttons/Yellotrans";

export default function Banner() {




  return (
    <>
  
    
      <div className="Banner" >

        <div className="display-4 txt-reveal">GIVE A HAND</div>

        <div className="display-3 txt-reveal">TO MAKE THE BETTER WORLD</div>

        <p className="txt-reveal">
          That don't lights. Blessed land spirit creature divide our made two
          itself upon you'll dominion waters man second good you they're divided
          upon winged were replenish night
        </p>

        <div className="links">
           <Greentrans text="See Causes" Link="/Causes"/>
          <Yellotrans text="See Causes" Link="/Causes"/>
          
        </div>
      </div>
    </>
  );
}
