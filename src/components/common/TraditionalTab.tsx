"use client";
import React, { Children, useEffect, useReducer, useRef, useState } from "react";
import { motion } from "framer-motion";
import SwipeableViews from "react-swipeable-views-react-18-fix";

interface Props {
   children?: React.ReactNode | React.ReactNode[];
   options: string[];
   label: string;
}

interface State {
   value: number;
   previous: number;
}

interface Action {
   value: number;
}

const TraditionalTab = ({ options, children, label }: Props) => {
   // const [value, setValue] = useState(0);

   const reducer = (state: State, action: Action): State => ({
      value: action.value,
      previous: state.value,
   });

   const [{ value }, dispatch] = useReducer(reducer, {
      value: 2,
      previous: 0,
   });

   const handleChange = (index: number) => {
      dispatch({
         value: index,
      });
   };

   const tabsButtonRef = useRef<Array<HTMLElement | null>>([]);
   const tabsButtonWidth = useRef<Array<number>>([]);
   const [paper, setPaper] = useState({
      x: 168,
      width: 76,
      index: value,
   });

   useEffect(() => {
      const savedTabIndex = localStorage.getItem(`${label}-selected-tab`);

      if (savedTabIndex && Number(savedTabIndex) !== value) {
         dispatch({
            value: Number(savedTabIndex),
         });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      tabsButtonRef.current.forEach((button, value) => {
         tabsButtonWidth.current[value] = button?.clientWidth || 0;
      });
   }, []);

   useEffect(() => {
      if (value !== paper.index) {
         localStorage.setItem(`${label}-selected-tab`, String(value));

         let x: number = 0;
         if (
            tabsButtonWidth.current.length !== 0 &&
            tabsButtonWidth.current.slice(0, value).length !== 0
         ) {
            x = tabsButtonWidth.current.slice(0, value).reduce((a, b) => a + b);
         }
         const width = tabsButtonWidth.current[value] || 0;
         setPaper({ x, width, index: value });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [value]);

   return (
      <div aria-label="Tab container" className="color-adjust-tab flex flex-col gap-6">
         <div
            aria-label="Tab Buttions"
            className="flex border-b border-primary-700 relative z-0"
         >
            <motion.span
               animate={{
                  x: paper.x,
                  width: paper.width,
               }}
               transition={{ duration: 0.2 }}
               className=" bg-primary-700/5 absolute top-0 left-0 bottom-0 -z-10 w-full"
            />
            {options.map((button, index) => (
               <div
                  onClick={() => handleChange(index)}
                  ref={(el) => {
                     tabsButtonRef.current[index] = el;
                  }}
                  key={index}
                  role="button"
                  className="cursor-pointer py-1.5 px-6 flex items-center justify-center text-sm leading-normal focus:outline-0"
               >
                  {button}
               </div>
            ))}
         </div>
         <div
            className="sm:p-5 sm:shadow-[1px_1px_2px_0px_rgba(0,_0,_0,_0.10)]"
            aria-label="Tab Panel Container"
         >
            <SwipeableViews className="[&_>_div]:max-w-[280px]" index={value}>
               {Children.map(children, (child, index) => (
                  <div key={index} className="px-px">
                     {child}
                  </div>
               ))}
            </SwipeableViews>
         </div>
      </div>
   );
};

export default TraditionalTab;
