"use client";
import React, { useEffect, useState } from "react";

function Demo() {
   console.log("Demo");

   const [name, setName] = useState("");

   return (
      <div className="p-4">
         <h2 className="text-4xl font-black">DEMO APP</h2>
         <InputField name={name} setName={setName} />
         <div className="flex gap-2 items-center">
            <input
               className="px-4 py-3"
               placeholder="Enter your name directly"
               type="text"
               value={name}
               onChange={(e) => setName(e.currentTarget.value)} // Direct input updates
            />
            <p>Your name is: {name || "Anonymous"}</p>
         </div>
      </div>
   );
}

export default Demo;

interface InputFieldProps {
   name: string;
   setName: (name: string) => void;
}

function InputField({ name, setName }: InputFieldProps) {
   const [value, setValue] = useState(name);
   console.log("InputField");

   // Sync local state with `name` prop when it changes
   useEffect(() => {
      console.log("UseEffect: InputField");

      setValue(name);
   }, []);

   // Handle submit on blur
   const submit = () => {
      setName(value); // Only update parent when onBlur occurs
   };

   return (
      <div className="py-4">
         <input
            type="text"
            className="px-4 py-3"
            placeholder="Enter your name"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)} // Local updates only
            onBlur={submit} // Update parent on blur (submit)
         />
      </div>
   );
}
