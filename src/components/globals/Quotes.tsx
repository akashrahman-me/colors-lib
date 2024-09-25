"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import React, { useState, useEffect } from "react";

type Quote = {
   writer: string;
   quote: string;
   label: string;
};
const allQuotes: Quote[] = [
   {
      label: "Quote n. 01",
      writer: "Akash",
      quote: "Design thrives on striking differences that catch the eye and evoke emotion.",
   },
   {
      label: "Quote n. 02",
      writer: "Akash",
      quote: "Vibrant pairings bring depth to design, making it both engaging and memorable.",
   },
   {
      label: "Quote n. 03",
      writer: "Akash",
      quote: "The balance between light and dark makes design stand out and adds visual impact.",
   },
   {
      label: "Quote n. 04",
      writer: "Akash",
      quote: "Using opposites wisely transforms ordinary visuals into powerful statements.",
   },
   {
      label: "Quote n. 05",
      writer: "Akash",
      quote: "Bold shifts in hue and tone create a dynamic flow that guides the user's attention.",
   },
   {
      label: "Quote n. 06",
      writer: "Akash",
      quote: "Contrasting shades give your design life, making it energetic and visually appealing.",
   },
   {
      label: "Quote n. 07",
      writer: "Akash",
      quote: "Well-chosen visual differences guide users naturally through content, improving usability.",
   },
   {
      label: "Quote n. 08",
      writer: "Akash",
      quote: "Careful contrasts enhance readability, ensuring that your message is clear and accessible.",
   },
   {
      label: "Quote n. 09",
      writer: "Akash",
      quote: "The interplay of brightness and subtlety defines focus, drawing attention to key elements.",
   },
   {
      label: "Quote n. 10",
      writer: "Akash",
      quote: "When elements diverge, they reveal their true importance, creating a meaningful hierarchy.",
   },
];

function QuotesSlider() {
   const sliderSettings: Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
   };
   const [quotes, setQuotes] = useState<Quote[]>([]);

   useEffect(() => {
      const randomizeQuotes = [...allQuotes].sort(() => 0.5 - Math.random());
      setQuotes(randomizeQuotes.slice(0, 3));
   }, []);

   return (
      <div>
         <Slider className="quotes-slider bg-primary-700" {...sliderSettings}>
            {quotes.map(({ quote, writer, label }) => (
               <blockquote key={label} className="py-8 px-6 text-white text-center">
                  <h4 className="font-medium font-lexend-exa text-[28px] mb-5">
                     {label}
                  </h4>
                  <p className="text-base leading-normal mb-[30px]">{quote}</p>
                  <footer className="font-bold font-lexend-exa text-xs leading-normal -translate-x-2">
                     — {writer}
                  </footer>
               </blockquote>
            ))}
         </Slider>
      </div>
   );
}

export default QuotesSlider;
