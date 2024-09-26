import React from "react";
import Three from "./Three";

function Comp({ value, setValue }: { value: number; setValue: (value: number) => void }) {
   return (
      <div>
         <p>Saturation: {value}%</p>
         <Three value={value} setValue={setValue} />
      </div>
   );
}

export default Comp;
