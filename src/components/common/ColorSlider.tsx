import React, { useEffect, useState } from "react";

interface ColorSliderProps {
   value: number;
   onChange?: (value: number) => void;
   background?: string;
   min: number;
   max: number;
   label: string;
}

function ColorSlider({ value, onChange, background, max, min, label }: ColorSliderProps) {
   const [inputValue, setInputValue] = useState(0);

   useEffect(() => {
      setInputValue(value);
   }, [value]);

   const handleSubmit = (value: number) => {
      onChange?.(Math.min(max, Math.max(min, value)));
   };

   const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
         handleSubmit(Number(event.currentTarget.value));
      }
   };

   return (
      <div className="flex gap-2.5 flex-col">
         <label className="flex items-center justify-between gap-4">
            <b className="text-sm leading-normal font-normal">{label}</b>
            <input
               type="number"
               className="py-0.5 w-9 text-xs leading-normal text-primary-700 bg-primary-700/10 border-b border-primary-700 text-center appearance-none"
               value={inputValue}
               onChange={(e) => setInputValue(Number(e.currentTarget.value))}
               onBlur={(e) => handleSubmit(Number(e.currentTarget.value))}
               onKeyDown={keyDown}
            />
         </label>
         <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange?.(Number(e.currentTarget.value))}
            style={{ background: background }}
            className="w-full h-[9px] rounded-lg appearance-none cursor-pointer slider-thumb"
         />
      </div>
   );
}

export default ColorSlider;
