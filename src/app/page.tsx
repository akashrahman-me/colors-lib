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
         <section className="mt-16 sm:mt-24 mb-14 sm:mb-20">
            <div className="container">
               <div className="flex gap-1.5 text-center flex-col max-w-[491px] mx-auto">
                  <h1 className="font-semibold font-lexend-exa text-4xl leading-normal">
                     Contrast Ratio
                  </h1>
                  <p className="font-medium text-lg text-gray-700/75 leading-normal">
                     Measure the ratio between text and background colors for clear
                     readability.
                  </p>
               </div>
            </div>
         </section>
         <section className="mb-6 sm:mb-12 lg:mb-20 overflow-hidden">
            <div className="container">
               <div className="flex flex-col xl:flex-row gap-9 max-w-7xl mx-auto">
                  <div className="flex md:flex-row flex-col gap-9">
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
                  </div>
                  <div className="xl:w-[474px] flex flex-col-reverse lg:flex-row xl:flex-col">
                     <div className="mb-0 xl:mb-3 lg:w-1/2 xl:w-auto">
                        <Quotes background={background} foreground={foreground} />
                     </div>
                     <div className="lg:w-1/2 xl:w-auto mb-9 lg:mb-0">
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
