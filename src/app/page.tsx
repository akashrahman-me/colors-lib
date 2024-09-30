"use client";
import ColorUnit from "@/components/globals/ColorUnit";
import Quotes from "@/components/globals/Quotes";
import React, { useState } from "react";
import { contrastRatio } from "@/utilities/colorize";
import Intro from "@/app/Home/Intro";
import ContrastResult from "@/components/globals/ContrastResult";

function Home() {
   // console.log("Home");

   const [foreground, setForeground] = useState("#f5f0f7");
   const [background, setBackground] = useState("#8817C0");

   return (
      <div>
         <Intro />
         <section className="mb-6 sm:mb-12 lg:mb-20 overflow-hidden">
            <div className="container overflow-hidden">
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
