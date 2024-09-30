/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import Rating from "react-rating";
import React from "react";

interface ContrastResultProps {
   value: number;
}

const colors = ["#dc3545", "#fd7e14", "#9b59b6", "#5bc0de", "#28a745"];

// Helper function to get the rating based on the contrast ratio (3-star system for text ratings)
const getTextRating = (contrast: number, isLargeText: boolean) => {
   if (isLargeText) {
      if (contrast >= 4.5) return { label: "Good", color: colors[4] };
      if (contrast >= 3) return { label: "Average", color: colors[2] };
      return { label: "Very Bad", color: colors[0] };
   } else {
      if (contrast >= 7) return { label: "Good", color: colors[4] };
      if (contrast >= 4.5) return { label: "Average", color: colors[2] };
      return { label: "Very Bad", color: colors[0] };
   }
};

// Helper function to calculate star rating (3-star system for text ratings)
const calculateTextStarRating = (contrast: number, isLargeText: boolean) => {
   if (isLargeText) {
      if (contrast >= 4.5) return 3; // 3 stars
      if (contrast >= 3) return 2; // 2 stars
      return 1; // 1 star
   } else {
      if (contrast >= 7) return 3; // 3 stars
      if (contrast >= 4.5) return 2; // 2 stars
      return 1; // 1 star
   }
};

// Function to calculate star rating based on the contrast value (5 stars system for overall rating)
const calculateStarRating = (contrast: number) => {
   if (contrast >= 10) return 5; // 5 stars
   if (contrast >= 7) return 4; // 4 stars
   if (contrast >= 4.5) return 3; // 3 stars
   if (contrast >= 3) return 2; // 2 stars
   return 1; // 1 star
};

function ContrastResult({ value }: ContrastResultProps) {
   const smallTextRating = getTextRating(value, false);
   const largeTextRating = getTextRating(value, true);

   const overallRating =
      value >= 10
         ? "Excellent"
         : value >= 7
           ? "Good"
           : value >= 4.5
             ? "Average"
             : value >= 3
               ? "Poor"
               : "Very Bad";
   const overallColor =
      value >= 10
         ? colors[4] // Green
         : value >= 7
           ? colors[3] // Light Blue
           : value >= 4.5
             ? colors[2] // Yellow
             : value >= 3
               ? colors[1] // Orange
               : colors[0]; // Red

   return (
      <div className="bg-white pt-5 px-6 pb-7 flex gap-7 flex-col">
         <h4 className="text-xl leading-normal">Contrast Result & Rating</h4>
         <div className="flex gap-24 items-center">
            <div>
               <span
                  className="font-mochiy-pop-one font-black text-[48px] leading-none w-max pt-2 pb-1 px-1"
                  style={{ color: overallColor }}
               >
                  {value}
               </span>
            </div>
            <div className="flex gap-2 items-end justify-center flex-col text-end flex-grow">
               <span className="text-lg leading-normal" style={{ color: overallColor }}>
                  {overallRating}
               </span>
               <div>
                  {/* @ts-ignore */}
                  <Rating
                     initialRating={calculateStarRating(value)}
                     readonly
                     fullSymbol={<img src="/images/Star%201.svg" alt="Full Star" />}
                     emptySymbol={<img src="/images/Star%205.svg" alt="Empty Star" />}
                  />
               </div>
            </div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
            {[smallTextRating, largeTextRating].map((rating, index) => (
               <div
                  key={index}
                  className="py-2.5 flex items-center justify-between border-b border-[#686D76]/10"
               >
                  <span className="font-medium text-sm leading-normal">
                     {index === 0 ? "Small Text" : "Large Text"}
                  </span>
                  <div className="flex items-center gap-2">
                     <span
                        className="text-sm font-medium"
                        style={{ color: rating.color }}
                     >
                        {rating.label}
                     </span>

                     {/* @ts-ignore */}
                     <Rating
                        className="-mb-[5px]"
                        initialRating={calculateTextStarRating(value, index === 1)}
                        stop={3}
                        readonly
                        fullSymbol={
                           <img src="/images/Star%201%20(1).svg" alt="Full Star" />
                        }
                        emptySymbol={
                           <img src="/images/Star%205%20(1).svg" alt="Empty Star" />
                        }
                     />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ContrastResult;
