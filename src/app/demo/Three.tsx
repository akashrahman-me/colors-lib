import React from "react";

function Three({
   value,
   setValue,
}: {
   value: number;
   setValue: (value: number) => void;
}) {
   return (
      <div>
         <input
            type="range"
            min="0"
            max="360"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-[9px] rounded-lg appearance-none cursor-pointer slider-thumb"
         />
      </div>
   );
}

export default Three;
