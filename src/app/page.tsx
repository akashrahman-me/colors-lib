"use client";
import ColorUnit from "@/components/globals/ColorUnit";
import Quotes from "@/components/globals/Quotes";
import ContrastResult from "@/components/globals/ContrastResult";
import { useState } from "react";
import { contrastRatio } from "@/utilities/colorize";

function Home() {
   // console.log("Home");

   const [foreground, setForeground] = useState("#f5f0f7");
   const [background, setBackground] = useState("#8817C0");

   return (
      <div>
         <section className="mt-24 mb-20">
            <div className="container">
               <div className="flex gap-1.5 text-center flex-col max-w-[491px] mx-auto">
                  <h1 className="font-semibold font-lexend-exa text-4xl leading-normal">
                     Contrast Ratio
                  </h1>
                  <p className="font-medium text-lg leading-normal">
                     Measure the ratio between text and background colors for clear
                     readability.
                  </p>
               </div>
            </div>
         </section>
         <section className="mb-20">
            <div className="container">
               <div className="flex gap-9 max-w-7xl mx-auto">
                  <ColorUnit
                     color={foreground}
                     setColor={setForeground}
                     label="Foreground"
                  />
                  <ColorUnit
                     color={background}
                     setColor={setBackground}
                     label="Background"
                  />
                  <div className="flex gap-3 flex-col w-[474px]">
                     <div>
                        <Quotes background={background} foreground={foreground} />
                     </div>
                     <div className="">
                        <ContrastResult value={contrastRatio(foreground, background)} />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Home;
