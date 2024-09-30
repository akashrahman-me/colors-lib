"use client";
import React from "react";
import { hexToRgb, rgbToHex } from "@/utilities/colorize";
import ColorSlider from "../../common/ColorSlider";

interface RGBColorPickerProps {
   color: string;
   setColor: (color: string) => void;
}

function RGBColorPicker({ color, setColor }: RGBColorPickerProps) {
   // Convert hex color to RGB
   const [r, g, b] = hexToRgb(color);
   let [red, green, blue] = [r, g, b];

   const handleValues = (type: "red" | "green" | "blue", value: number) => {
      const values = { red, green, blue };
      values[type] = value;
      ({ red, green, blue } = values);

      // Update the color based on the new values
      setColor(rgbToHex([red, green, blue]));
   };

   return (
      <div className="flex gap-4 pb-1 flex-col">
         <ColorSlider
            label="Red"
            min={0}
            max={255}
            value={red}
            onChange={(value) => handleValues("red", value)}
            background={`linear-gradient(to right, rgb(0, ${green}, ${blue}), rgb(255, ${green}, ${blue}))`}
         />
         <ColorSlider
            label="Green"
            min={0}
            max={255}
            value={green}
            onChange={(value) => handleValues("green", value)}
            background={`linear-gradient(to right, rgb(${red}, 0, ${blue}), rgb(${red}, 255, ${blue}))`}
         />
         <ColorSlider
            label="Blue"
            min={0}
            max={255}
            value={blue}
            onChange={(value) => handleValues("blue", value)}
            background={`linear-gradient(to right, rgb(${red}, ${green}, 0), rgb(${red}, ${green}, 255))`}
         />
      </div>
   );
}

export default RGBColorPicker;
