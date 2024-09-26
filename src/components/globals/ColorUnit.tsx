"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import HSBColorPicker from "@/components/common/HSBColorPicker";

const colorOptions = ["Picker", "RGB", "HSL", "HSB"];

interface ColorUnitProps {
   label: string;
   color: string;
   setColor: (color: string) => void;
}

function ColorUnit({ label, setColor, color }: ColorUnitProps) {
   const [value, setValue] = useState(color);
   const [colorValue, setColorValue] = useState(color);

   const submitColor = (color: string) => {
      setColor(color);
      setColorValue(color);
   };

   return (
      <div className="bg-white pt-6 px-6 pb-12 flex gap-6 flex-col">
         <h4 className="text-xl leading-normal">{label}</h4>
         <div className="flex gap-6">
            <input
               value={value}
               onChange={(e) => setValue(e.currentTarget.value)}
               onBlur={(e) => submitColor(e.currentTarget.value)}
               className="bg-primary-700/10 py-2.5 px-4 border-b border-primary-700 text-base leading-normal text-uppercase min-w-0 w-full max-w-[150px] text-center"
            />
            <div className="py-2.5 px-5 flex-1" style={{ backgroundColor: color }} />
         </div>
         <Tabs className="color-adjust-tab flex flex-col gap-6">
            <TabList className="flex gap-2.5 border-b border-primary-700">
               {colorOptions.map((color, index) => (
                  <Tab
                     className="cursor-pointer py-1.5 px-5 flex items-center justify-center text-sm leading-normal"
                     key={index}
                  >
                     {color}
                  </Tab>
               ))}
            </TabList>
            <div className="p-5 shadow-[1px_1px_2px_0px_rgba(0,_0,_0,_0.10)]">
               <TabPanel className="">
                  <div className=" flex gap-2.5 flex-col">
                     <HSBColorPicker
                        colorValue={colorValue}
                        color={color}
                        setColor={setColor}
                     />
                  </div>
               </TabPanel>
               <TabPanel className="">
                  <div className="flex gap-2.5 flex-col">
                     <h2>Any content 2</h2>
                  </div>
               </TabPanel>
            </div>
         </Tabs>
      </div>
   );
}

export default ColorUnit;
