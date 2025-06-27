import BestSeller from "@/components/BestSeller";
import EditorsPick from "@/components/EditorsPick";
import Gemini from "@/components/gemini";
import Slider from "@/components/Slider";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="bg-slider-bg">
        <div className="mx-auto max-w-[1440px]">
          <Slider />
        </div>
      </div>
      <EditorsPick />
      <BestSeller />
    </div>
  );
};

export default HomePage;
