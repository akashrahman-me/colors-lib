import React from "react";

interface Props {
   value: string;
   onCopy?: (status: boolean) => void;
}

const ColorPreview = ({ value, onCopy }: Props) => {
   const copyToClipboard = () => {
      navigator.clipboard.writeText(value).then(() => {
         onCopy?.(true);
         setTimeout(() => onCopy?.(false), 2000); // Reset copied status after 2 seconds
      });
   };

   return (
      <div
         aria-label="Copy to clipboard"
         onClick={copyToClipboard}
         className="py-2.5 px-5 flex-1"
         role="button"
         style={{ backgroundColor: value }}
      />
   );
};

export default ColorPreview;
