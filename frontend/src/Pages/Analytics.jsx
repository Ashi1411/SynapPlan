import React from "react";
import AfterLoginNavbar from "../Common/AfterLoginNavbar";
import Sidebar from "../Common/Sidebar";
import HeroSection from "../Components/Analytics Page/HeroSection";
import ProductivityTrend from "../Components/Analytics Page/ProductivityTrend";
import InsightPanel from "../Components/Analytics Page/InsightPanel";

export default function Analytics() {
  return (
    <div>
      <AfterLoginNavbar></AfterLoginNavbar>
      <div className="flex">
        <Sidebar></Sidebar>

        <div className="flex-1">
            <HeroSection></HeroSection>
            <ProductivityTrend></ProductivityTrend>
            <InsightPanel></InsightPanel>
        </div>
      </div>
    </div>
  );
}
