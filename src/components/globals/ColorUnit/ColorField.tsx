import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Color from "color";
import ColorPreview from "@/components/globals/ColorUnit/ColorPreview";

interface ColorFieldProps {
   color: string;
   setColor: (color: string) => void;
}

const ColorField = ({ setColor, color }: ColorFieldProps) => {
   const [value, setValue] = useState(color);
   const [copied, setCopied] = useState(false);

   useEffect(() => {
      if (value !== color) {
         setValue(color);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [color]);

   const submitColor = (newColor: string) => {
      try {
         const validColor = Color(newColor);
         setColor(validColor.hex().toUpperCase());
         setValue(validColor.hex().toUpperCase());
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
         setValue(color);
      }
   };

   return (
      <div className="flex gap-6">
         <div className="relative z-0">
            <div className="text-base leading-normal uppercase absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 -z-10">
               <motion.span
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={
                     copied
                        ? {
                             opacity: [1, 0],
                             y: [0, -56],
                          }
                        : {}
                  }
                  transition={{ duration: 0.5 }}
               >
                  {value}
               </motion.span>
            </div>
            <input
               tabIndex={348}
               value={value}
               onChange={(e) => setValue(e.currentTarget.value)}
               onBlur={(e) => submitColor(e.currentTarget.value)}
               className="bg-primary-700/10 uppercase py-2.5 px-4 border-b border-primary-700 text-base leading-normal min-w-0 w-full max-w-[150px] text-center relative z-10"
            />
         </div>
         <ColorPreview value={color} onCopy={setCopied} />
      </div>
   );
};

export default ColorField;
