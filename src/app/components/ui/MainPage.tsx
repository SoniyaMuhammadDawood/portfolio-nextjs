'use client'

import { useEffect } from "react";

// for animate on scroll library
import AOS from "aos"
import 'aos/dist/aos.css';

// MY COMPONENTS

import {Detail} from "./Detail";
import { Sidebar } from "./SlidBar";
import MobileCard from "../mobileComponent/card";
import MobileEducation from "../mobileComponent/education";
import MobileExperiance from "../mobileComponent/experiance";
import MobileSkills from "../mobileComponent/skills";
import MobileProjects from "../mobileComponent/project";
import MobileContact from "../mobileComponent/contact";


const MainPage = () => {

  //useEffect for animate on scroll
  useEffect(()=>{
    AOS.init({
      once:false
    });
    },[]);

  return (
    <div>
      {/* Mobile view */}
      <div className="overflow-x-hidden bg-white h-screen md:hidden ">
          {/* card */}
          <div data-aos="zoom-in">
          <MobileCard />
          </div>

          {/* education */}
          <MobileEducation/>

          {/* experiance */}
          <MobileExperiance />

          {/* skills */}
          <MobileSkills />

          {/* projects */}
          <MobileProjects />

          {/* contact */}
          <MobileContact />
      </div>

      {/* Desktop view */}
       <div className="hidden md:flex md:overflow-hidden md:h-screen">
      {/* Side bar */}
      <div className="w-1/5">
        <Sidebar/>
      </div>

      {/* Main */}
      <div className="w-full">
        <Detail/>
      </div>
      </div>
    </div>
  )
}

export default MainPage
