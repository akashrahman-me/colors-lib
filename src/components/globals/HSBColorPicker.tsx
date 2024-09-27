import React from "react";
import { hexToRgb, hsbToRgb, rgbToHex, rgbToHsb } from "@/utilities/colorize";
import ColorSlider from "../common/ColorSlider";

interface HSBColorPickerProps {
   color: string;
   setColor: (color: string) => void;
}

function HSBColorPicker({ color, setColor }: HSBColorPickerProps) {
   // console.log("HSB Color Picker");

   const [h, s, b] = rgbToHsb(...hexToRgb(color));
   let [hue, saturation, brightness] = [h, s, b];

   const handleValues = (type: "hue" | "saturation" | "brightness", value: number) => {
      const values = { hue, saturation, brightness };
      values[type] = value;
      ({ hue, saturation, brightness } = values);

      // Update the color based on the new values
      setColor(rgbToHex(hsbToRgb(hue, saturation, brightness)));
   };

   return (
      <div className="flex gap-4 pb-1 flex-col">
         <ColorSlider
            label="Hue"
            min={0}
            max={360}
            value={hue}
            onChange={(value) => handleValues("hue", value)}
            background="linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0))"
         />
         <ColorSlider
            label="Saturation"
            min={0}
            max={100}
            value={saturation}
            onChange={(value) => handleValues("saturation", value)}
            background={`linear-gradient(to right, rgb(255, 255, 255), ${rgbToHex(
               hsbToRgb(hue, 100, brightness)
            )})`}
         />
         <ColorSlider
            label="Brightness"
            min={0}
            max={100}
            value={brightness}
            onChange={(value) => handleValues("brightness", value)}
            background={`linear-gradient(to right, rgb(0, 0, 0), ${rgbToHex(
               hsbToRgb(hue, saturation, 100)
            )})`}
         />
      </div>
   );
}

export default HSBColorPicker;
