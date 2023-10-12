// "use client";
// import React, { useState } from "react";
// import Square2 from "./Square2";
// import Square1 from "./Square1";
// import { FaAngleDown } from "react-icons/fa";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import Link from "next/link";
// // import axios from "axios";
// // import { API } from "@/Essentials";

// const Section2 = () => {
//   const [data, setData] = useState({
//     CampaignName: "",
//     CampaignCategory: "",
//     TotalBudget: "",
//     DailyBudget: "",
//     StartDate: "",
//     EndDate: "",
//   });

//   const validateData = () => {
//     const {
//       CampaignName,
//       CampaignCategory,
//       TotalBudget,
//       DailyBudget,
//       StartDate,
//       EndDate,
//     } = data;

//     const startDateValid = StartDate?.match(/^\d{4}-\d{2}-\d{2}$/);
//     const endDateValid = EndDate?.match(/^\d{4}-\d{2}-\d{2}$/);

//     const totalBudgetAsNumber = parseFloat(TotalBudget);
//     const dailyBudgetAsNumber = parseFloat(DailyBudget);

//     if (
//       CampaignName === "" ||
//       CampaignCategory === "" ||
//       TotalBudget === "" ||
//       isNaN(totalBudgetAsNumber) ||
//       isNaN(dailyBudgetAsNumber) ||
//       totalBudgetAsNumber <= 0 ||
//       dailyBudgetAsNumber <= 0 ||
//       !startDateValid ||
//       !endDateValid
//     ) {
//       return false;
//     }

//     return true;
//   };

//   const isdatavalid = validateData();

//   return (
//     <>
//       <div className="bg-[#f8f8f8] w-full flex pn:max-md:flex-col px-3 justify-center md:space-x-5">
//         <div className="my-3">
//           <Square1 />
//         </div>

//         <div className="w-[700px] pn:max-md:hidden bg-white my-4 rounded-2xl py-5 shadow-lg px-5">
//           <div>
//             <h1 className="text-2xl font-semibold">Campaign Details</h1>
//             <div className="flex flex-col w-full py-2">
//               <label className="text-lg font-semibold py-2">
//                 Campaign Name <span className="text-[#FF4444]">*</span>
//               </label>
//               <input
//                 onChange={(e) =>
//                   setData({
//                     ...data,
//                     CampaignName: e.target.value,
//                   })
//                 }
//                 value={data.CampaignName}
//                 type="text"
//                 placeholder="Enter Campaign Name"
//                 className="w-full border-2 rounded-xl placeholder:text-[#333333] outline-none p-2"
//               />
//             </div>
//             <div className="flex flex-col py-2 w-full">
//               <label className="text-lg font-semibold py-2">
//                 Campaign Category<span className="text-[#FF4444]">*</span>
//               </label>
//               <div className="flex items-center border-2 rounded-xl">
//                 <input
//                   onChange={(e) =>
//                     setData({
//                       ...data,
//                       CampaignCategory: e.target.value,
//                     })
//                   }
//                   value={data.CampaignCategory}
//                   type="text"
//                   placeholder="Select Category"
//                   className="w-full placeholder:text-[#333333] rounded-xl outline-none p-2"
//                 />
//                 <FaAngleDown className="mx-2 text-xl text-[#333333]" />
//               </div>
//             </div>
//             <div className="py-3">
//               <h1 className="text-2xl font-semibold">Budget</h1>
//               <div className="grid grid-cols-2 gap-4 py-3">
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-lg font-semibold">Total Budget</label>
//                   <div className="flex justify-center  rounded-xl items-center border-2">
//                     <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
//                     <input
//                       onChange={(e) =>
//                         setData({
//                           ...data,
//                           TotalBudget: e.target.value,
//                         })
//                       }
//                       value={data.TotalBudget}
//                       type="text"
//                       placeholder="Enter Total Budget"
//                       className="w-full rounded-xl placeholder:text-[#333333] outline-none p-2"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-lg font-semibold">Daily Budget</label>
//                   <div className="flex justify-center  rounded-xl items-center border-2">
//                     <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
//                     <input
//                       onChange={(e) =>
//                         setData({
//                           ...data,
//                           DailyBudget: e.target.value,
//                         })
//                       }
//                       value={data.DailyBudget}
//                       type="text"
//                       placeholder="Enter Daily Budget"
//                       className="w-full rounded-xl placeholder:text-[#333333] outline-none p-2"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h1 className="text-2xl font-semibold">Date & Time</h1>
//               <div className="grid grid-cols-2 gap-4 py-2">
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-lg font-semibold py-2">
//                     Start Date<span className="text-[#FF4444]">*</span>
//                   </label>
//                   <input
//                     type="date"
//                     onChange={(e) =>
//                       setData({
//                         ...data,
//                         StartDate: e.target.value,
//                       })
//                     }
//                     value={data.StartDate}
//                     placeholder="Enter Campaign Name"
//                     className="w-full border-2 rounded-xl placeholder:text-[#333333] outline-none p-2"
//                   />
//                 </div>
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-lg font-semibold py-2">
//                     End Date<span className="text-[#FF4444]">*</span>
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setData({
//                         ...data,
//                         EndDate: e.target.value,
//                       })
//                     }
//                     value={data.EndDate}
//                     type="date"
//                     placeholder="Enter Campaign Name"
//                     className="w-full border-2 rounded-xl placeholder:text-[#333333] outline-none p-2"
//                   />
//                 </div>
//               </div>
//             </div>
//             {isdatavalid ? (
//               <Link
//                 href={{ pathname: "/second", query: data }}
//                 className="flex justify-center items-center w-full text-white my-[3%]"
//               >
//                 <div className="flex justify-center rounded-xl items-center p-3 bg-[#1A73E8] space-x-2 font-medium w-[70%]">
//                   <div>Go next</div>
//                   <AiOutlineArrowRight />
//                 </div>
//               </Link>
//             ) : (
//               <div className="flex justify-center items-center w-full text-white my-[3%]">
//                 <div className="flex justify-center rounded-xl items-center p-3 bg-[#b9c5d5] space-x-2 font-medium w-[70%]">
//                   <div>Go next</div>
//                   <AiOutlineArrowRight />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div>
//           <Square2 />
//         </div>

//         <div className="md:hidden bg-white my-4 rounded-2xl py-5 shadow-lg px-2">
//           <div>
//             <h1 className="text-2xl font-semibold">Campaign Details</h1>
//             <div className="flex flex-col w-full py-2">
//               <label className="text-lg font-semibold py-2">
//                 Campaign Name <span className="text-[#FF4444]">*</span>
//               </label>
//               <input
//                 type="text"
//                 onChange={(e) =>
//                   setData({
//                     ...data,
//                     CampaignName: e.target.value,
//                   })
//                 }
//                 value={data.CampaignName}
//                 placeholder="Enter Campaign Name"
//                 className="w-full border-2 rounded-xl placeholder:text-[#333333] outline-none p-2"
//               />
//             </div>
//             <div className="flex flex-col py-2 w-full">
//               <label className="text-lg font-semibold py-2">
//                 Campaign Category<span className="text-[#FF4444]">*</span>
//               </label>
//               <div className="flex items-center border-2 rounded-xl">
//                 <input
//                   onChange={(e) =>
//                     setData({
//                       ...data,
//                       CampaignCategory: e.target.value,
//                     })
//                   }
//                   value={data.CampaignCategory}
//                   type="text"
//                   placeholder="Select Category"
//                   className="w-full placeholder:text-[#333333] rounded-xl outline-none p-2"
//                 />
//                 <FaAngleDown className="mx-2 text-xl text-[#333333]" />
//               </div>
//             </div>
//             <div className="py-3">
//               <h1 className="text-2xl font-semibold">Budget</h1>
//               <div className="grid sm:grid-cols-2 gap-4 py-3">
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-lg font-semibold">Total Budget</label>
//                   <div className="flex justify-center  rounded-xl items-center border-2">
//                     <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
//                     <input
//                       type="text"
//                       onChange={(e) =>
//                         setData({
//                           ...data,
//                           TotalBudget: e.target.value,
//                         })
//                       }
//                       value={data.TotalBudget}
//                       placeholder="Enter Total Budget"
//                       className="w-full rounded-xl placeholder:text-[#333333] outline-none p-2"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-lg font-semibold">Daily Budget</label>
//                   <div className="flex justify-center  rounded-xl items-center border-2">
//                     <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
//                     <input
//                       onChange={(e) =>
//                         setData({
//                           ...data,
//                           DailyBudget: e.target.value,
//                         })
//                       }
//                       value={data.DailyBudget}
//                       type="text"
//                       placeholder="Enter Daily Budget"
//                       className="w-full rounded-xl placeholder:text-[#333333] outline-none p-2"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h1 className="text-2xl font-semibold">Date & Time</h1>
//               <div className="grid  sm:grid-cols-2 gap-4 py-2">
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-lg font-semibold py-2">
//                     Start Date<span className="text-[#FF4444]">*</span>
//                   </label>
//                   <input
//                     type="date"
//                     onChange={(e) =>
//                       setData({
//                         ...data,
//                         StartDate: e.target.value,
//                       })
//                     }
//                     value={data.StartDate}
//                     placeholder="Enter Campaign Name"
//                     className="w-full border-2 rounded-xl placeholder:text-[#333333] outline-none p-2"
//                   />
//                 </div>
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-lg font-semibold py-2">
//                     End Date<span className="text-[#FF4444]">*</span>
//                   </label>
//                   <input
//                     type="date"
//                     onChange={(e) =>
//                       setData({
//                         ...data,
//                         EndDate: e.target.value,
//                       })
//                     }
//                     value={data.EndDate}
//                     placeholder="Enter Campaign Name"
//                     className="w-full border-2 rounded-xl placeholder:text-[#333333] outline-none p-2"
//                   />
//                 </div>
//               </div>
//             </div>
//             {isdatavalid ? (
//               <Link
//                 href={{ pathname: "/second", query: data }}
//                 className="flex justify-center items-center w-full text-white my-[3%]"
//               >
//                 <div className="flex justify-center rounded-xl items-center p-3 bg-[#1A73E8] space-x-2 font-medium w-[70%]">
//                   <div>Go next</div>
//                   <AiOutlineArrowRight />
//                 </div>
//               </Link>
//             ) : (
//               <div className="flex justify-center items-center w-full text-white my-[3%]">
//                 <div className="flex justify-center rounded-xl items-center p-3 bg-[#b8c1cd] space-x-2 font-medium w-[70%]">
//                   <div>Go next</div>
//                   <AiOutlineArrowRight />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section2;
