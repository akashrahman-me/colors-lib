/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { TabPanel, Tabs } from "react-tabs";
import { useEffect, useRef, useState } from "react";
import HSBColorPicker from "@/components/globals/HSBColorPicker";
import RGBColorPicker from "./RGBColorPicker";
import HSLColorPicker from "./HSLColorPicker";
import ColorPicker from "./ColorPicker";
import { motion } from "framer-motion";

const colorOptions = ["Picker", "RGB", "HSL", "HSB"];

interface ColorUnitProps {
   label: string;
   color: string;
   setColor: (color: string) => void;
}

function ColorUnit({ label, setColor, color }: ColorUnitProps) {
   const [value, setValue] = useState(color);
   const [tabIndex, setTabIndex] = useState(2); // Default tab index to 0

   useEffect(() => {
      // Load saved tab index from localStorage, if it exists
      const savedTabIndex = localStorage.getItem(`${label}-selected-tab`);

      if (savedTabIndex && Number(savedTabIndex) !== tabIndex) {
         setTabIndex(Number(savedTabIndex));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (value !== color) {
         setValue(color);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [color]);

   const submitColor = (color: string) => {
      setColor(color);
   };

   const tabsButtonRef = useRef<Array<HTMLElement | null>>([]);
   const tabsButtonWidth = useRef<Array<number>>([]);
   const [paper, setPaper] = useState({
      x: 0,
      width: 0,
   });

   useEffect(() => {
      tabsButtonRef.current.forEach((button, tabIndex) => {
         const width = button?.clientWidth || 0;
         tabsButtonWidth.current[tabIndex] = width;
      });
   }, [tabsButtonRef]);

   useEffect(() => {
      localStorage.setItem(`${label}-selected-tab`, String(tabIndex));

      let x: number = 0;
      if (
         tabsButtonWidth.current.length !== 0 &&
         tabsButtonWidth.current.slice(0, tabIndex).length !== 0
      ) {
         x = tabsButtonWidth.current.slice(0, tabIndex).reduce((a, b) => a + b);
      }
      const width = tabsButtonWidth.current[tabIndex] || 0;
      setPaper({ x, width });

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [tabIndex]);

   const [copied, setCopied] = useState(false);

   const copyToClipboard = () => {
      const colorValue = value;
      navigator.clipboard.writeText(colorValue).then(() => {
         setCopied(true);
         setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
      });
   };

   return (
      <div className="bg-white pt-6 px-6 pb-12 flex gap-6 flex-col">
         <h4 className="text-xl leading-normal">{label}</h4>
         <div className="flex gap-6">
            <div className="relative">
               <div className="text-base leading-normal uppercase absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
                  <motion.span
                     className="block"
                     initial={{ opacity: 0 }}
                     animate={copied ? { opacity: [1, 0], y: [0, -56] } : {}}
                     transition={{ duration: 0.5 }}
                  >
                     {value}
                  </motion.span>
               </div>
               <motion.input
                  transition={{ duration: 0.5 }}
                  animate={
                     copied
                        ? {
                             x: [
                                10, 0, -10, 8, 0, -8, 6, 0, -6, 4, 0, -4, 2, 0, -2, 1, 0,
                                -1,
                             ],
                          }
                        : {}
                  }
                  value={value}
                  onChange={(e) => setValue(e.currentTarget.value)}
                  onBlur={(e) => submitColor(e.currentTarget.value)}
                  className="bg-primary-700/10 uppercase py-2.5 px-4 border-b border-primary-700 text-base leading-normal min-w-0 w-full max-w-[150px] text-center"
               />
            </div>
            <div
               onClick={copyToClipboard}
               className="py-2.5 px-5 flex-1"
               role="button"
               style={{ backgroundColor: color }}
            />
         </div>
         <Tabs
            className="color-adjust-tab flex flex-col gap-6"
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
         >
            <div className="flex border-b border-primary-700 relative z-0">
               <motion.span
                  animate={{
                     x: paper.x,
                     width: paper.width,
                  }}
                  transition={{ duration: 0.2 }}
                  className=" bg-primary-700/10 min-w-20 absolute top-0 left-0 bottom-0 -z-10"
               />
               {colorOptions.map((color, index) => (
                  <div
                     ref={(e) => {
                        tabsButtonRef.current[index] = e;
                     }}
                     onClick={() => setTabIndex(index)}
                     className="cursor-pointer py-1.5 px-6 flex items-center justify-center text-sm leading-normal focus:outline-0"
                     key={index}
                  >
                     {color}
                  </div>
               ))}
            </div>
            <div className="p-5 shadow-[1px_1px_2px_0px_rgba(0,_0,_0,_0.10)]">
               <TabPanel>
                  <ColorPicker color={color} setColor={setColor} />
               </TabPanel>
               <TabPanel>
                  <RGBColorPicker color={color} setColor={setColor} />
               </TabPanel>
               <TabPanel>
                  <HSLColorPicker color={color} setColor={setColor} />
               </TabPanel>
               <TabPanel>
                  <HSBColorPicker
                     color={color}
                     setColor={(value) => (setValue(value), setColor(value))}
                  />
               </TabPanel>
            </div>
         </Tabs>
      </div>
   );
}

export default ColorUnit;
