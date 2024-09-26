"use client";
import React, { useEffect, useState } from "react";
import { hexToRgb, hsbToRgb, rgbToHex, rgbToHsb } from "@/utilities/colorize";
import ColorSlider from "../common/ColorSlider";

interface HSBColorPickerProps {
   color: string;
   submition: boolean;
   setColor?: (color: string) => void;
}

function HSBColorPicker({ color, submition, setColor }: HSBColorPickerProps) {
   console.log("HSB Color Picker");

   const [h, s, b] = rgbToHsb(...hexToRgb(color));
   const [hue, setHue] = useState<number>(h); // Range 0-360
   const [saturation, setSaturation] = useState<number>(s); // Range 0-100
   const [brightness, setBrightness] = useState<number>(b); // Range 0-100

   // useEffect(() => {
   //    // console.log("useEffect: Submition");
   //    const [h, s, b] = rgbToHsb(...hexToRgb(color));
   //    setHue(h);
   //    setSaturation(s);
   //    setBrightness(b);
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [submition]);

   // useEffect(() => {
   //    // console.log("useEffect: HSB Color Picker");

   //    const hexColor = rgbToHex(hsbToRgb(hue, saturation, brightness));
   //    setColor?.(hexColor);
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [hue, saturation, brightness]);

   return (
      <div className="flex gap-4 pb-1 flex-col">
         <ColorSlider
            label="Hue"
            min={0}
            max={360}
            value={hue}
            onChange={setHue}
            background="linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0))"
         />
         <ColorSlider
            label="Saturation"
            min={0}
            max={100}
            value={saturation}
            onChange={setSaturation}
            background={`linear-gradient(to right, rgb(255, 255, 255), ${rgbToHex(
               hsbToRgb(hue, 100, brightness)
            )})`}
         />
         <ColorSlider
            label="Brightness"
            min={0}
            max={100}
            value={brightness}
            onChange={setBrightness}
            background={`linear-gradient(to right, rgb(0, 0, 0), ${rgbToHex(
               hsbToRgb(hue, saturation, 100)
            )})`}
         />
      </div>
   );
}

export default HSBColorPicker;
