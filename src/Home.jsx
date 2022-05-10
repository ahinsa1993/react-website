import React from 'react';
import web from "./images/jain logo.jpg";
import { NavLink } from "react-router-dom";
import Common from './Common';

const Home = () => {
  return(
    <>
       <Common 
           name = 'Get pure Jain Food from' 
           vlog = 'We are Provide to you pure Jain Food...'
           imgsrc = {web}
           visit = "/Service" 
           btname = "Get Recipe"
       />
    </>
  )
};

export default Home;
