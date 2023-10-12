// "use client";
// import React, { useEffect, useState } from "react";
// import Square1 from "./Square1";
// import Square4 from "./Square4";
// import Square3 from "./Square3";
// import { BiMap } from "react-icons/bi";
// import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
// import { FaAngleDown } from "react-icons/fa";
// import { BsLink } from "react-icons/bs";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// const Section3 = () => {
//   const [second, setSecond] = useState({
//     location: [],
//     tags: [],
//     maxage: "",
//     minage: "",
//     selectedAgeRange: "",
//     gender: "",
//     age: "",
//     type: "",
//     TotalBudget: "",
//     DailyBudget: "",
//     startDate: Date.now(),
//     endDate: Date.now(),
//   });

//   const search = useSearchParams();

//   const head = search.get("head");
//   const pN = search.get("pN");
//   const pics = search.get("pics");
//   const Act = search.get("Act");
//   const desp = search.get("desp");
//   const adName = search.get("adName");
//   const link = search.get("link");
//   const goal = search.get("goal");
//   const picsend = search.get("picsend");

//   const [click, setCLick] = useState(0);
//   const [loc, setLoc] = useState("");
//   const [t, setT] = useState("");
//   // const search = useSearchParams();
//   // const CampaignName = search.get("CampaignName");
//   // const CampaignCategory = search.get("CampaignCategory");
//   // const TotalBudget = search.get("TotalBudget");
//   // const DailyBudget = search.get("DailyBudget");
//   // const StartDate = search.get("StartDate");
//   // const EndDate = search.get("EndDate");

//   const validateData = () => {
//     if (
//       // second.location.length === 0 ||
//       // second.tags.length === 0 ||
//       (second.age === "Custom age"
//         ? second.selectedAgeRange === ""
//         : second.age === "") ||
//       second.age === "" ||
//       second.type === "" ||
//       second.DailyBudget === "" ||
//       second.TotalBudget === "" ||
//       second.endDate === "" ||
//       second.startDate === ""
//     ) {
//       // console.log("Condition 1:", second.location.length > 0);
//       // console.log("Condition 2:", second.tags.length > 0);
//       // console.log("Condition 3:", second.selectedAgeRange === "");
//       // console.log("Condition 4:", second.type === "");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const isdatavalid = validateData();
//   const handleAgeRangeChange = (event) => {
//     const newValue = event.target.value;
//     if (newValue) {
//       const [min, max] = newValue.split("-").map(Number);
//       setSecond(
//         {
//           ...second,
//           selectedAgeRange: newValue,
//           minage: min,
//           maxage: max,
//         },
//         () => {
//           // Now, the state has been updated, so you can log the values here
//           // console.log(second.selectedAgeRange, second.minage, second.maxage);
//         }
//       );
//     }
//     //else {
//     //   setSecond(
//     //     {
//     //       ...second,
//     //       selectedAgeRange: "",
//     //       minage: "",
//     //       maxage: "",
//     //     },
//     //     () => {
//     //       // Log the values here as well if needed
//     //       console.log(second.selectedAgeRange, second.minage, second.maxage);
//     //     }
//     //   );
//     // }
//   };

//   useEffect(() => {
//     setSecond({
//       ...second,
//       head,
//       pN,
//       pics,
//       Act,
//       desp,
//       head,
//       adName,
//       link,
//       goal,
//       picsend,
//     });
//   }, []);

//   // console.log(loc);
//   // console.log(second.location);

//   // console.log("break")

//   // console.log(t);
//   console.log(second);

//   return (
//     <>
//       {" "}
//       <div className="grid bg-[#F8F8F8] grid-cols-1 pn:max-md:hidden">
//         <div className="flex bg-white flex-col py-2">
//           <div className=" sticky top-0 z-50">
//             <div className="flex bg-white w-full justify-between items-center px-5 py-2">
//               <div className="text-[#555555] text-xl font-semibold">
//                 Set up a new Ad
//               </div>
//               <div className="flex justify-center items-center gap-3 ">
//                 <div className="border-b  border-black">Discard</div>

//                 {isdatavalid ? (
//                   <Link
//                     href={{
//                       pathname: "/five",
//                       query: {
//                         location: second.location,
//                         head: second.head,
//                         age: second.age,
//                         desp: second.desp,
//                         pN: second.pN,
//                         pics: second.pics,
//                         Act: second.Act,
//                         link: second.link,
//                         adName: second.adName,
//                         tags: second.tags,
//                         gender: second.gender,
//                         DailyBudget: second.DailyBudget,
//                         TotalBudget: second.TotalBudget,
//                         selectedAgeRange: second.selectedAgeRange,
//                         minage: second.minage,
//                         maxage: second.maxage,
//                         type: second.type,
//                         startDate: second.startDate,
//                         endDate: second.endDate,
//                         goal: second.goal,
//                       },
//                     }}
//                     className="p-2 px-7 rounded-full bg-[#2D9AFF] text-white"
//                   >
//                     Next
//                   </Link>
//                 ) : (
//                   <div className="p-2 px-7 rounded-full bg-[#b3bbc3] text-white">
//                     Next
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>
//               <Square1 />
//             </div>
//           </div>
//           <div className="flex justify-center gap-9 px-[2%] pn:max-md:hidden">
//             <div className="pn:max-md:hidden md:w-[900px] bg-white border-2 my-4 rounded-2xl py-5 px-5">
//               <div>
//                 <h1 className="sm:text-3xl text-xl font-semibold py-2">
//                   Select Target
//                 </h1>
//                 <h2 className="sm:text-xl text-lg font-semibold py-2">
//                   Select type of ad
//                 </h2>
//                 <div className="flex flex-wrap gap-3 my-4">
//                   <div
//                     onClick={() => {
//                       setSecond({ ...second, type: "Image" });
//                     }}
//                     className="border flex flex-col justify-center items-center  h-[100px] w-[150px] border-black rounded-lg"
//                   >
//                     <div className="w-full h-[70%] bg-blue-400"></div>
//                     <div>Image</div>
//                   </div>
//                   <div
//                     onClick={() => {
//                       setSecond({ ...second, type: "Video" });
//                     }}
//                     className="border flex flex-col justify-center items-center  h-[100px] w-[150px] border-black rounded-lg"
//                   >
//                     <div className="w-full h-[70%] bg-blue-400"></div>
//                     <div>Video</div>
//                   </div>
//                   <div
//                     onClick={() => {
//                       setSecond({ ...second, type: "Search" });
//                     }}
//                     className="border flex flex-col justify-center items-center  h-[100px] w-[150px] border-black rounded-lg"
//                   >
//                     <div className="w-full h-[70%] bg-blue-400"></div>
//                     <div>Search</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="my-1">
//                 <h1 className="text-lg py-1 font-medium">Enter Tags</h1>
//                 <div className="w-full flex justify-center items-center rounded-xl border ">
//                   <BiMap className="border-r-2 p-2 text-4xl" />
//                   <input
//                     type="text"
//                     onChange={(e) => {
//                       setT(e.target.value);
//                     }}
//                     onKeyPress={(e) => {
//                       if (!t) return;
//                       else if (second?.tags?.length < 5) {
//                         if (e.key === "Enter") {
//                           setSecond((second) => ({
//                             ...second,
//                             tags: [...second.tags, e.target.value],
//                           }));
//                           setT("");
//                         }
//                       } else {
//                         if (e.key === "Enter") {
//                           setT(e.target.value);
//                         }
//                       }
//                     }}
//                     value={t}
//                     placeholder="tags"
//                     className="w-full rounded-xl p-2 outline-none "
//                   />
//                 </div>
//               </div>

//               <div className="flex  flex-wrap items-center gap-2 my-3">
//                 {second?.tags?.map((f, g) => (
//                   <div
//                     key={g}
//                     className="flex justify-center items-center space-x-1 border p-1 px-3 rounded-full border-black"
//                   >
//                     <div>{f}</div>
//                     <div
//                       onClick={() => {
//                         setSecond((second) => ({
//                           ...second,
//                           tags: second.tags.filter((_, h) => h !== g),
//                         }));
//                       }}
//                     >
//                       <AiOutlineClose />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div>
//                 {second?.tags?.length >= 5 && t !== "" && (
//                   <>
//                     <div className="text-sm font-medium text-red-500">
//                       Cant insert more than 5 tags
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="text-[#5585FF] text-[13px] my-2">
//                 Note: Enter tags that your audience interested in..
//               </div>

//               <h1 className="text-2xl py-1 font-medium">Locations</h1>
//               <div>
//                 <h1 className="text-lg py-1 font-medium">
//                   Search for location<span className="text-[#FF4444]">*</span>
//                 </h1>
//                 <div className="w-full flex justify-center items-center rounded-xl border ">
//                   <BiMap className="border-r-2 p-2 text-4xl" />
//                   <input
//                     type="text"
//                     onChange={(e) => {
//                       setLoc(e.target.value);
//                     }}
//                     onKeyPress={(e) => {
//                       if (!loc) return;
//                       else if (second?.location?.length < 3) {
//                         if (e.key === "Enter") {
//                           setSecond((second) => ({
//                             ...second,
//                             location: [...second.location, e.target.value],
//                           }));
//                           setLoc("");
//                         }
//                       } else {
//                         if (e.key === "Enter") {
//                           setLoc(e.target.value);
//                         }
//                       }
//                     }}
//                     value={loc}
//                     placeholder="Enter the location to target audience"
//                     className="w-full rounded-xl p-2 outline-none "
//                   />
//                 </div>

//                 <div className="flex items-center flex-wrap gap-2 my-3">
//                   {second?.location?.map((m, i) => (
//                     <div
//                       key={i}
//                       className="flex justify-center items-center space-x-1 border p-1 px-3 rounded-full border-black"
//                     >
//                       <div>{m}</div>
//                       <div
//                         onClick={() => {
//                           setSecond((second) => ({
//                             ...second,
//                             location: second.location.filter((_, a) => a !== i),
//                           }));
//                         }}
//                       >
//                         <AiOutlineClose />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   {second.location.length >= 3 && loc !== "" && (
//                     <>
//                       <div className="text-sm font-medium text-red-500">
//                         Cant insert more than 3 locations
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 <div className="text-[#5585FF] text-[13px] my-2">
//                   Note: Prices may fluctuate depending on factors such as
//                   traffic, weather conditions, events etc..
//                   <span className="text-[#5585FF] mx-1">Learn more</span>
//                 </div>

//                 <div>
//                   <h1 className="text-2xl font-semibold py-2">Target People</h1>

//                   <h1 className="font-semibold py-2">Gender</h1>

//                   <div className="flex flex-wrap gap-2 items-center">
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, gender: "Men" });
//                       }}
//                       className={`p-2 px-6 border border-black rounded-full ${
//                         second.gender === "Men"
//                           ? "text-white bg-blue-500"
//                           : null
//                       } `}
//                     >
//                       Men
//                     </div>
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, gender: "Women" });
//                       }}
//                       className={`p-2 px-6 border border-black rounded-full ${
//                         second.gender === "Women"
//                           ? "text-white bg-blue-500"
//                           : null
//                       } `}
//                     >
//                       Women
//                     </div>
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, gender: "Both" });
//                       }}
//                       className={`p-2 px-6 border border-black rounded-full ${
//                         second.gender === "Both"
//                           ? "text-white bg-blue-500"
//                           : null
//                       } `}
//                     >
//                       Both
//                     </div>
//                   </div>

//                   <div className="my-2">
//                     <h1 className="font-semibold py-2">Age Group</h1>
//                     <div className="flex space-x-4 items-center">
//                       <div className="flex justify-center items-center space-x-1">
//                         <input
//                           onClick={() => {
//                             setCLick(0);
//                             setSecond({ ...second, age: "All age group" });
//                           }}
//                           type="radio"
//                           name="age"
//                         />
//                         <label className="font-semibold " htmlFor="">
//                           All Age Groups
//                         </label>
//                       </div>
//                       <div className="flex justify-center items-center space-x-1">
//                         <input
//                           onClick={() => {
//                             setCLick(1),
//                               setSecond({ ...second, age: "Custom age" });
//                           }}
//                           type="radio"
//                           name="age"
//                         />
//                         <label className="font-semibold " htmlFor="">
//                           Age Range
//                         </label>
//                       </div>
//                     </div>
//                     <div className={`${click === 1 ? null : "hidden"}`}>
//                       <label className="font-medium my-2" htmlFor="ageRange">
//                         Select Age Range:
//                       </label>
//                       <select
//                         id="ageRange"
//                         className="p-1 border outline-none rounded-lg border-[#e6e6e6] mx-1 my-2"
//                         name="ageRange"
//                         value={second.selectedAgeRange}
//                         onChange={handleAgeRangeChange}
//                       >
//                         <option value="0-17">0-17</option>
//                         <option value="18-30">18-30</option>
//                         <option value="31-50">31-50</option>
//                         <option value="51-65">51-65</option>
//                         <option value="65-80">65-80</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="py-3">
//                     <h1 className="text-2xl font-semibold">Budget</h1>
//                     <div className="grid grid-cols-2 gap-4 py-3">
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-lg font-semibold">
//                           Total Budget
//                         </label>
//                         <div className="flex justify-center  rounded-xl items-center border">
//                           <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
//                           <input
//                             onChange={(e) =>
//                               setSecond({
//                                 ...second,
//                                 TotalBudget: e.target.value,
//                               })
//                             }
//                             value={second.TotalBudget}
//                             type="text"
//                             placeholder="Enter Total Budget"
//                             className="w-full rounded-xl placeholder:text-[#333333] outline-none p-2"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-lg font-semibold">
//                           Daily Budget
//                         </label>
//                         <div className="flex justify-center  rounded-xl items-center border">
//                           <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
//                           <input
//                             onChange={(e) =>
//                               setSecond({
//                                 ...second,
//                                 DailyBudget: e.target.value,
//                               })
//                             }
//                             value={second.DailyBudget}
//                             type="text"
//                             placeholder="Enter Daily Budget"
//                             className="w-full rounded-xl placeholder:text-[#333333] outline-none p-2"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h1 className="text-2xl font-semibold">Date & Time</h1>
//                     <div className="grid grid-cols-2 gap-4 py-2">
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-lg font-semibold py-2">
//                           Start Date<span className="text-[#FF4444]">*</span>
//                         </label>
//                         <input
//                           type="date"
//                           onChange={(e) =>
//                             setSecond({
//                               ...second,
//                               startDate: e.target.value,
//                             })
//                           }
//                           value={second.startDate}
//                           placeholder="Enter Campaign Name"
//                           className="w-full border rounded-xl placeholder:text-[#333333] outline-none p-2"
//                         />
//                       </div>
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-lg font-semibold py-2">
//                           End Date<span className="text-[#FF4444]">*</span>
//                         </label>
//                         <input
//                           onChange={(e) =>
//                             setSecond({
//                               ...second,
//                               endDate: e.target.value,
//                             })
//                           }
//                           value={second.endDate}
//                           type="date"
//                           placeholder="Enter Campaign Name"
//                           className="w-full border rounded-xl placeholder:text-[#333333] outline-none p-2"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* {isdatavalid ? (
//                 <Link
//                   href={{ pathname: "/three", query: second }}
//                   className="flex justify-center items-center w-full text-white my-[3%]"
//                 >
//                   <div className="flex justify-center rounded-xl items-center p-3 bg-[#1A73E8] space-x-2 font-medium w-[70%]">
//                     <div>Go next</div>
//                     <AiOutlineArrowRight />
//                   </div>
//                 </Link>
//               ) : (
//                 <div className="flex justify-center items-center w-full text-white my-[3%]">
//                   <div className="flex justify-center rounded-xl items-center p-3 bg-[#a0b5d1] space-x-2 font-medium w-[70%]">
//                     <div>Go next</div>
//                     <AiOutlineArrowRight />
//                   </div>
//                 </div>
//               )} */}
//               </div>
//             </div>
//             <div className="flex flex-col border-2 items-center">
//               <Square3 />
//               <Square4 />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="md:hidden">
//         <div className="flex bg-white flex-col py-2">
//           <div className=" sticky top-0 z-50">
//             <div className="flex justify-between px-5 items-center py-2">
//               <div className="text-[#555555] text-xl font-semibold">
//                 Ad SetUp
//               </div>
//               <div className="flex justify-center items-center gap-3 ">
//                 <div className="border-b hidden border-black">Discard</div>

//                 {isdatavalid ? (
//                   <Link
//                     href={{
//                       pathname: "/five",
//                       query: {
//                         location: second.location,
//                         head: second.head,
//                         age: second.age,
//                         desp: second.desp,
//                         pN: second.pN,
//                         pics: second.pics,
//                         Act: second.Act,
//                         link: second.link,
//                         adName: second.adName,
//                         tags: second.tags,
//                         gender: second.gender,
//                         DailyBudget: second.DailyBudget,
//                         TotalBudget: second.TotalBudget,
//                         selectedAgeRange: second.selectedAgeRange,
//                         minage: second.minage,
//                         maxage: second.maxage,
//                         type: second.type,
//                         startDate: second.startDate,
//                         endDate: second.endDate,
//                         goal: second.goal,
//                       },
//                     }}
//                     className="p-2 px-7 rounded-full bg-[#2D9AFF] text-white"
//                   >
//                     Next
//                   </Link>
//                 ) : (
//                   <div className="p-2 px-7 rounded-full bg-[#b3bbc3] text-white">
//                     Next
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>
//               <Square1 />
//             </div>
//           </div>
//           <div className="grid grid-cols-1">
//             <div className="flex flex-col">
//               <Square3 />
//               <Square4 />
//             </div>
//             <div className="w-full md:hidden bg-white  my-4 rounded-2xl py-5 px-5">
//               <div className="my-2">
//                 <h1 className="text-3xl font-semibold py-2">Select Target</h1>
//                 <div>
//                   <h2 className="text-2xl font-semibold py-2">
//                     Select type of ad
//                   </h2>
//                   {/* <div className="text-[#6E7191] py-1">
//               Based on the billboards you've selected, the following ad formats
//               are available for your ad campaign.
//             </div> */}
//                   {/* <div className="flex my-2 items-center space-x-3">
//               <div className="bg-[#F3F4F6] font-semibold p-2 px-3 rounded-full">
//                 Delhi
//               </div>
//               <div className="bg-[#F3F4F6] font-semibold p-2 px-3 rounded-full">
//                 Kanpur
//               </div>
//             </div> */}
//                   <div className="flex flex-wrap gap-3 my-4">
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, type: "Image" });
//                       }}
//                       className="border flex flex-col justify-center items-center  h-[100px] w-[150px] border-black rounded-lg"
//                     >
//                       <div className="w-full h-[70%] bg-blue-400"></div>
//                       <div>Image</div>
//                     </div>
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, type: "Video" });
//                       }}
//                       className="border flex flex-col justify-center items-center  h-[100px] w-[150px] border-black rounded-lg"
//                     >
//                       <div className="w-full h-[70%] bg-blue-400"></div>
//                       <div>Video</div>
//                     </div>
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, type: "Search" });
//                       }}
//                       className="border flex flex-col justify-center items-center  h-[100px] w-[150px] border-black rounded-lg"
//                     >
//                       <div className="w-full h-[70%] bg-blue-400"></div>
//                       <div>Search</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="my-1">
//                   <h1 className="text-lg py-1 font-medium">Enter Tags</h1>
//                   <div className="w-full flex justify-center items-center rounded-xl border ">
//                     <BiMap className="border-r-2 p-2 text-4xl" />
//                     <input
//                       type="text"
//                       onChange={(e) => {
//                         setT(e.target.value);
//                       }}
//                       onKeyPress={(e) => {
//                         if (!t) return;
//                         else if (second?.tags?.length < 5) {
//                           if (e.key === "Enter" || e.key === "Next") {
//                             setSecond((second) => ({
//                               ...second,
//                               tags: [...second.tags, e.target.value],
//                             }));
//                             setT("");
//                           }
//                         } else {
//                           if (e.key === "Enter") {
//                             setT(e.target.value);
//                           }
//                         }
//                       }}
//                       value={t}
//                       placeholder="tags"
//                       className="w-full rounded-xl p-2 outline-none "
//                     />
//                   </div>
//                 </div>

//                 <div className="flex  flex-wrap items-center gap-2 my-3">
//                   {second?.tags?.map((f, g) => (
//                     <div
//                       key={g}
//                       className="flex justify-center items-center space-x-1 border p-1 px-3 rounded-full border-black"
//                     >
//                       <div>{f}</div>
//                       <div
//                         onClick={() => {
//                           setSecond((second) => ({
//                             ...second,
//                             tags: second.tags.filter((_, h) => h !== g),
//                           }));
//                         }}
//                       >
//                         <AiOutlineClose />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   {second?.tags?.length >= 5 && t !== "" && (
//                     <>
//                       <div className="text-sm font-medium text-red-500">
//                         Cant insert more than 5 tags
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 <div className="text-[#5585FF] text-[13px] my-2">
//                   Note: Enter tags that your audience interested in..
//                 </div>

//                 <h1 className="text-2xl py-1 font-medium">Locations</h1>
//                 <h1 className="text-lg py-1 font-medium">
//                   Search for location<span className="text-[#FF4444]">*</span>
//                 </h1>
//                 <div className="w-full flex justify-center items-center rounded-xl border ">
//                   <BiMap className="border-r-2 p-2 text-4xl" />
//                   <input
//                     type="text"
//                     onChange={(e) => {
//                       setLoc(e.target.value);
//                     }}
//                     onKeyPress={(e) => {
//                       if (!loc) return;
//                       else if (second?.location?.length < 3) {
//                         if (e.key === "Enter") {
//                           setSecond((second) => ({
//                             ...second,
//                             location: [...second.location, e.target.value],
//                           }));
//                           setLoc("");
//                         }
//                       } else {
//                         if (e.key === "Enter") {
//                           setLoc(e.target.value);
//                         }
//                       }
//                     }}
//                     value={loc}
//                     placeholder="Enter the location to target audience"
//                     className="w-full rounded-xl p-2 outline-none "
//                   />
//                 </div>
//                 <div className="flex items-center flex-wrap gap-2 my-3">
//                   {second?.location?.map((m, i) => (
//                     <div
//                       key={i}
//                       className="flex justify-center items-center space-x-1 border p-1 px-3 rounded-full border-black"
//                     >
//                       <div>{m}</div>
//                       <div
//                         onClick={() => {
//                           setSecond((second) => ({
//                             ...second,
//                             location: second.location.filter((_, a) => a !== i),
//                           }));
//                         }}
//                       >
//                         <AiOutlineClose />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   {second.location.length >= 3 && loc !== "" && (
//                     <>
//                       <div className="text-sm font-medium text-red-500">
//                         Cant insert more than 3 locations
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 <div className="text-[#5585FF] text-[13px] my-2">
//                   Note: Prices may fluctuate depending on factors such as
//                   traffic, weather conditions, events etc..
//                   <span className="text-[#5585FF] mx-1">Learn more</span>
//                 </div>

//                 <div>
//                   <h1 className="text-2xl font-semibold py-2">Target People</h1>

//                   <h1 className="font-semibold py-2">Gender</h1>

//                   <div className="flex flex-wrap gap-2 items-center">
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, gender: "Men" });
//                       }}
//                       className={`p-2 px-6 border border-black rounded-full ${
//                         second.gender === "Men"
//                           ? "text-white bg-blue-500"
//                           : null
//                       } `}
//                     >
//                       Men
//                     </div>
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, gender: "Women" });
//                       }}
//                       className={`p-2 px-6 border border-black rounded-full ${
//                         second.gender === "Women"
//                           ? "text-white bg-blue-500"
//                           : null
//                       } `}
//                     >
//                       Women
//                     </div>
//                     <div
//                       onClick={() => {
//                         setSecond({ ...second, gender: "Both" });
//                       }}
//                       className={`p-2 px-6 border border-black rounded-full ${
//                         second.gender === "Both"
//                           ? "text-white bg-blue-500"
//                           : null
//                       } `}
//                     >
//                       Both
//                     </div>
//                   </div>

//                   <div className="my-2">
//                     <h1 className="font-semibold py-2">Age Group</h1>
//                     <div className="flex space-x-4 items-center">
//                       <div className="flex justify-center items-center space-x-1">
//                         <input
//                           onClick={() => {
//                             setCLick(0);
//                             setSecond({ ...second, age: "All age group" });
//                           }}
//                           type="radio"
//                           name="age"
//                         />
//                         <label className="font-semibold " htmlFor="">
//                           All Age Groups
//                         </label>
//                       </div>
//                       <div className="flex justify-center items-center space-x-1">
//                         <input
//                           onClick={() => setCLick(1)}
//                           type="radio"
//                           name="age"
//                         />
//                         <label className="font-semibold " htmlFor="">
//                           Age Range
//                         </label>
//                       </div>
//                     </div>
//                     <div className={`${click === 1 ? null : "hidden"}`}>
//                       <label className="font-medium my-2" htmlFor="ageRange">
//                         Select Age Range:
//                       </label>
//                       <select
//                         id="ageRange"
//                         className="p-1 border outline-none rounded-lg border-[#e6e6e6] mx-1 my-2"
//                         name="ageRange"
//                         value={second.selectedAgeRange}
//                         onChange={handleAgeRangeChange}
//                       >
//                         <option value="0-17">0-17</option>
//                         <option value="18-30">18-30</option>
//                         <option value="31-50">31-50</option>
//                         <option value="51-65">51-65</option>
//                         <option value="65-80">65-80</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="py-3">
//                     <h1 className="text-2xl font-semibold">Budget</h1>
//                     <div className="grid sm:grid-cols-2 gap-4 py-3">
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-lg font-semibold">
//                           Total Budget
//                         </label>
//                         <div className="flex justify-center  rounded-xl items-center border">
//                           <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
//                           <input
//                             type="text"
//                             onChange={(e) =>
//                               setSecond({
//                                 ...second,
//                                 TotalBudget: e.target.value,
//                               })
//                             }
//                             value={second.TotalBudget}
//                             placeholder="Enter Total Budget"
//                             className="w-full rounded-xl placeholder:text-[#333333] outline-none p-2"
//                           />
//                         </div>
//                       </div>
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-lg font-semibold">
//                           Daily Budget
//                         </label>
//                         <div className="flex justify-center  rounded-xl items-center border">
//                           <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
//                           <input
//                             onChange={(e) =>
//                               setSecond({
//                                 ...second,
//                                 DailyBudget: e.target.value,
//                               })
//                             }
//                             value={second.DailyBudget}
//                             type="text"
//                             placeholder="Enter Daily Budget"
//                             className="w-full rounded-xl placeholder:text-[#333333] outline-none p-2"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h1 className="text-2xl font-semibold">Date & Time</h1>
//                     <div className="grid  sm:grid-cols-2 gap-4 py-2">
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-lg font-semibold py-2">
//                           Start Date<span className="text-[#FF4444]">*</span>
//                         </label>
//                         <input
//                           type="date"
//                           onChange={(e) =>
//                             setSecond({
//                               ...second,
//                               startDate: e.target.value,
//                             })
//                           }
//                           value={second.startDate}
//                           placeholder="Enter Campaign Name"
//                           className="w-full border rounded-xl placeholder:text-[#333333] outline-none p-2"
//                         />
//                       </div>
//                       <div className="flex flex-col space-y-1">
//                         <label className="text-lg font-semibold py-2">
//                           End Date<span className="text-[#FF4444]">*</span>
//                         </label>
//                         <input
//                           type="date"
//                           onChange={(e) =>
//                             setSecond({
//                               ...second,
//                               endDate: e.target.value,
//                             })
//                           }
//                           value={second.endDate}
//                           placeholder="Enter Campaign Name"
//                           className="w-full border rounded-xl placeholder:text-[#333333] outline-none p-2"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section3;
