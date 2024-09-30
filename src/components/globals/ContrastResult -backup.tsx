// "use client";
// import Rating from "react-rating";
// import React, { useEffect, useState } from "react";

// // const formatNumber = new Intl.NumberFormat("en-US", {
// //    minimumFractionDigits: 0,
// //    maximumFractionDigits: 2,
// // }).format;

// interface ContrastResultProps {
//    value: number;
//    onChange?: (value: number) => void;
// }

// function Index({ value, onChange }: ContrastResultProps) {
//    console.log("Contrast Result");

//    // const [contrastInput, setContrastInput] = useState<string>(
//    //    formatNumber(Number(value))
//    // );

//    // useEffect(() => {
//    //    const formattedValue = formatNumber(value);
//    //    if (formattedValue !== contrastInput) {
//    //       setContrastInput(formattedValue);
//    //    }
//    //    // eslint-disable-next-line react-hooks/exhaustive-deps
//    // }, [value]);

//    // const handleOnChange = (value: number) => {
//    //    onChange?.(value);
//    // };

//    // const handleIncrement = (
//    //    event: React.KeyboardEvent<HTMLInputElement> | React.WheelEvent<HTMLInputElement>,
//    //    direction: number
//    // ) => {
//    //    const adjust = event.ctrlKey ? 3 : event.shiftKey ? 0.25 : event.altKey ? 0.05 : 1;
//    //    if (direction !== 0) {
//    //       // onChange((v) => Math.max(1, Math.min(21, v + direction * adjust)));
//    //       handleOnChange(
//    //          Math.max(1, Math.min(21, parseFloat(contrastInput) + direction * adjust))
//    //       );
//    //    }
//    // };

//    // const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
//    //    // event.preventDefault();
//    //    const direction = event.key === "ArrowUp" ? 1 : event.key === "ArrowDown" ? -1 : 0;
//    //    handleIncrement(event, direction);

//    //    if (event.key === "Enter") {
//    //       let value = event.currentTarget.value as unknown as number;
//    //       value = parseFloat(formatNumber(Math.max(1, Math.min(21, Number(value)))));
//    //       handleOnChange(value);
//    //    }
//    // };

//    // const handleWheel = (event: React.WheelEvent<HTMLInputElement>) => {
//    //    event.preventDefault();
//    //    const direction = Math.max(-1, Math.min(1, event.deltaY));
//    //    handleIncrement(event, direction * -1);
//    // };

//    // const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
//    //    let value = event.currentTarget.value;
//    //    value = formatNumber(Math.max(1, Math.min(21, Number(value))));
//    //    handleOnChange(Number(value));
//    // };

//    return (
//       <div className="bg-white pt-5 px-6 pb-7 flex gap-7 flex-col">
//          <h4 className="text-xl leading-normal">Contrast Result & Rating</h4>
//          <div className="flex gap-24 items-center">
//             <div className="">
//                <span className="font-mochiy-pop-one font-black text-[48px] leading-none w-max pt-2 pb-1 px-1">
//                   {value}
//                </span>
//                {/* <input
//                   // onKeyDown={handleKey}
//                   value={value}
//                   // onChange={(e) => setContrastInput(e.currentTarget.value)}
//                   // onWheel={handleWheel}
//                   // onBlur={handleBlur}
//                   className="font-mochiy-pop-one text-[40px] leading-none w-max border-b border-transparent hover:border-[rgba(104,109,118)]/75 focus:border-[rgba(104,109,118)]/75 focus:bg-[rgba(104,109,118)]/15 hover:bg-[rgba(104,109,118)]/15 pt-2 pb-1 px-1 cursor-text duration-200 select-none selection:bg-transparent min-w-[100px]"
//                   style={{ width: `${formatNumber(value).length}ch` }}
//                /> */}
//             </div>
//             <div className="flex gap-2 items-end justify-center flex-col text-end flex-grow">
//                <span className="text-lg leading-normal">Good</span>
//                <div className="">
//                   {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
//                   {/* @ts-ignore */}
//                   <Rating
//                      initialRating={3}
//                      readonly
//                      fullSymbol={
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img src="/images/Star 1.svg" alt="" />
//                      }
//                      emptySymbol={
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img src="/images/Star 5.svg" alt="" />
//                      }
//                   />
//                </div>
//             </div>
//          </div>
//          <div className="grid grid-cols-2 gap-8">
//             {[2, 1].map((rate, index) => (
//                <div key={index} className="py-2.5 flex items-center justify-between">
//                   <span className="font-medium text-sm leading-normal">
//                      {index == 0 && "Small Text"}
//                      {index == 1 && "Large Text"}
//                   </span>
//                   <div className="">
//                      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
//                      {/* @ts-ignore */}
//                      <Rating
//                         initialRating={rate}
//                         stop={3}
//                         readonly
//                         fullSymbol={
//                            // eslint-disable-next-line @next/next/no-img-element
//                            <img src="/images/Star 1 (1).svg" alt="" />
//                         }
//                         emptySymbol={
//                            // eslint-disable-next-line @next/next/no-img-element
//                            <img src="/images/Star 5 (1).svg" alt="" />
//                         }
//                      />
//                   </div>
//                </div>
//             ))}
//          </div>
//       </div>
//    );
// }

// export default Index;
