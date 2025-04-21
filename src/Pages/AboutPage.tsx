"use client";
import React from "react";
import AboutHero from "../components/About/AboutHero.";
import AboutUs from "../components/About/AboutUs";
import MissionandVision from "../components/About/MissionandVision";
import WhatIsXproguard from "../components/About/WhatIsXproguard";
// import HearFromCustomers from '../components/About/HearFromCostomers'

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <WhatIsXproguard />
      <AboutUs />
      <MissionandVision />

      {/* <HearFromCustomers /> */}
    </div>
  );
};

export default AboutPage;
