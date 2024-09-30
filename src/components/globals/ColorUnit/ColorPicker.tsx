import React from "react";
import { hexToRgb, rgbToHsl, hslToRgb, rgbToHex } from "@/utilities/colorize";
import ColorSlider from "../../common/ColorSlider";
import { SketchPicker } from "react-color";

interface ColorPickerProps {
   color: string;
   setColor: (color: string) => void;
}

function ColorPicker({ color, setColor }: ColorPickerProps) {
   // Convert hex color to HSL
   const [h, s, l] = rgbToHsl(...hexToRgb(color));
   let [hue, saturation, lightness] = [h, s, l];

   const handleValues = (type: "hue" | "saturation" | "lightness", value: number) => {
      const values = { hue, saturation, lightness };
      values[type] = value;
      ({ hue, saturation, lightness } = values);

      // Update the color based on the new values
      const newColor = hslToRgb(hue, saturation, lightness);
      setColor(rgbToHex(newColor));
   };

   return (
      <div className="flex gap-4 pb-1 flex-col">
         <SketchPicker
            color={color}
            onChange={(v) => setColor(v.hex)}
            className="sketch-manner"
         />
         <ColorSlider
            label="Hue"
            min={0}
            max={360}
            value={hue}
            onChange={(value) => handleValues("hue", value)}
            background={`linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0))`}
         />
      </div>
   );
}

export default ColorPicker;
