"use client";
import React, { useEffect, useState } from "react";
import { hexToRgb, hsbToRgb, rgbToHex, rgbToHsb } from "@/utilities/colorize";

interface HSBColorPickerProps {
   color: string;
   colorValue: string;
   setColor?: (color: string) => void;
}

function HSBColorPicker({ color, colorValue, setColor }: HSBColorPickerProps) {
   const [hue, setHue] = useState<number>(0); // Range 0-360
   const [saturation, setSaturation] = useState<number>(0); // Range 0-100
   const [brightness, setBrightness] = useState<number>(0); // Range 0-100

   useEffect(() => {
      const [h, s, b] = rgbToHsb(...hexToRgb(color));
      setHue(h);
      setSaturation(s);
      setBrightness(b);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [colorValue]);

   useEffect(() => {
      const hexColor = rgbToHex(hsbToRgb(hue, saturation, brightness));
      setColor?.(hexColor);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [hue, saturation, brightness]);

   const hexColor = rgbToHex(hsbToRgb(hue, saturation, brightness));

   function handleHueChange(e: React.ChangeEvent<HTMLInputElement>) {
      setHue(Number(e.target.value));
   }

   function handleSaturatisetColor(e: React.ChangeEvent<HTMLInputElement>) {
      setSaturation(Number(e.target.value));
   }

   function handleBrightnessChange(e: React.ChangeEvent<HTMLInputElement>) {
      setBrightness(Number(e.target.value));
   }

   // Dynamic slider backgrounds
   const hueGradient = {
      background: `linear-gradient(to right, 
      rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), 
      rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0))`,
   };

   const saturationGradient = {
      background: `linear-gradient(to right, 
      rgb(255, 255, 255), ${rgbToHex(hsbToRgb(hue, 100, brightness))})`,
   };

   const brightnessGradient = {
      background: `linear-gradient(to right, 
      rgb(0, 0, 0), ${rgbToHex(hsbToRgb(hue, saturation, 100))})`,
   };

   return (
      <div className="p-4 space-y-4">
         <div
            style={{
               backgroundColor: hexColor,
               width: "100%",
               height: "150px",
            }}
            className="rounded-md shadow-md"
         ></div>

         <div className="space-y-2">
            <label className="block">Hue: {hue}°</label>
            <input
               type="range"
               min="0"
               max="360"
               value={hue}
               onChange={handleHueChange}
               style={hueGradient}
               className="w-full h-[9px] rounded-lg appearance-none cursor-pointer slider-thumb"
            />
         </div>

         <div className="space-y-2">
            <label className="block">Saturation: {saturation}%</label>
            <input
               type="range"
               min="0"
               max="100"
               value={saturation}
               onChange={handleSaturatisetColor}
               style={saturationGradient}
               className="w-full h-[9px] rounded-lg appearance-none cursor-pointer slider-thumb"
            />
         </div>

         <div className="space-y-2">
            <label className="block">Brightness: {brightness}%</label>
            <input
               type="range"
               min="0"
               max="100"
               value={brightness}
               onChange={handleBrightnessChange}
               style={brightnessGradient}
               className="w-full h-[9px] rounded-lg appearance-none cursor-pointer slider-thumb"
            />
         </div>
      </div>
   );
}

export default HSBColorPicker;
