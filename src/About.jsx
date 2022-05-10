import React from 'react';

import web from "./images/restaurant-mockup1.png";

import { NavLink } from "react-router-dom";
import Common from './Common';

const About = () => {
  return(
    <>
       <Common 
           name = 'Welcome to About Page'
           vlog = 'We are provide to pure jain food Recipe video from Youtube chennal Pragya s kitchen.This chennal is provide the much more recipes in jain style, so anyone can see these recipes and make food in jain style. Also it is usefull for who are belongs to Jainism.' 
           imgsrc = {web}
           visit = "/Contact" 
           btname = "Contact Now"
       />
    </>
  )
};

export default About;
