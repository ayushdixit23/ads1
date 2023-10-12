// "use client";
// import React, { useState } from "react";
// import Square1 from "./Square1";
// import Square3 from "./Square3";
// import Square4 from "./Square4";
// import { AiOutlineSearch, AiTwotoneEdit } from "react-icons/ai";
// import { BsThreeDots } from "react-icons/bs";
// import Image from "next/image";
// import adss from "../assests/ads.svg";
// import Link from "next/link";

// const Section7 = () => {
//   const [ads, setAds] = useState("");
//   return (
//     <>
//       <div className="bg-[#f8f8f8] w-full flex pn:max-md:flex-col justify-center md:space-x-5">
//         <div className="my-3">
//           <Square1 />
//         </div>
//         <div className="w-[700px] pn:max-md:hidden bg-white my-4 h-[500px]  rounded-2xl py-4 shadow-lg px-5">
//           <div className="flex justify-between text-lg items-center">
//             <div>Ads In this campaign</div>
//             <div className="text-[#5585FF]">Create New Ad</div>
//           </div>
//           <div className="flex border-2 w-[50%] my-3 rounded-xl space-x-1 px-2 items-center">
//             <AiOutlineSearch className="text-xl" />
//             <input
//               onChange={(e) => setAds(e.target.value)}
//               value={ads}
//               className="w-full outline-none placeholder:text-black p-2 rounded-xl"
//               placeholder="Search"
//             />
//           </div>
//           <div className="flex flex-col justify-between h-[75%] ">
//             <div className="bg-[#FAFAFA] flex justify-between py-5 my-3 px-3 items-center">
//               <div className="flex justify-center space-x-4 items-center">
//                 <div>
//                   <Image src={adss} alt="adss" />
//                 </div>
//                 <div>
//                   <div className="flex items-center space-x-1">
//                     <span className="font-medium">
//                       “Never have a bad meal”{" "}
//                     </span>
//                     <span>
//                       <AiTwotoneEdit className="text-blue-600" />
//                     </span>
//                   </div>
//                   <div className=" text-sm ">healthy and sweet dishes</div>
//                   <div className="flex justify-center text-sm space-x-3 items-center">
//                     <div>Single image ad</div>
//                     <div>Id: 271617804</div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <BsThreeDots className="text-xl" />
//               </div>
//             </div>
//             <div className="flex justify-between items-center ">
//               <div className="text-black border-2 border-[#5585FF] p-2 px-4 rounded-full">
//                 Previous
//               </div>
//               <Link
//                 href="/five"
//                 className="text-white bg-[#5585FF] p-2 px-6 rounded-full"
//               >
//                 Next
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col">
//           <Square3 />
//           <Square4 />
//         </div>
//         <div className="md:hidden bg-white my-4 rounded-2xl py-4 shadow-lg px-5">
//           <div className="flex justify-between sm:text-lg items-center">
//             <div>Ads In this campaign</div>
//             <div className="text-[#5585FF]">Create New Ad</div>
//           </div>
//           <div className="flex border-2 w-[60%] my-3 rounded-xl space-x-1 px-2 items-center">
//             <AiOutlineSearch className="text-xl" />
//             <input
//               className="w-full outline-none placeholder:text-black p-2 rounded-xl"
//               placeholder="Search"
//             />
//           </div>
//           <div className="flex flex-col justify-between md:h-[75%] ">
//             <div className="bg-[#FAFAFA] flex justify-between py-5 my-3 px-1 items-center">
//               <div className="flex justify-center space-x-2 sm:space-x-4 items-center">
//                 <div>
//                   <Image src={ads} alt="ads" />
//                 </div>
//                 <div>
//                   <div className="flex items-center space-x-1">
//                     <span className="font-medium">
//                       “Never have a bad meal”{" "}
//                     </span>
//                     <span>
//                       <AiTwotoneEdit className="text-blue-600" />
//                     </span>
//                   </div>
//                   <div className=" text-sm ">healthy and sweet dishes</div>
//                   <div className="flex justify-center text-sm space-x-3 items-center">
//                     <div>Single image ad</div>
//                     <div>Id: 271617804</div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <BsThreeDots className="text-xl" />
//               </div>
//             </div>
//             <div className="flex sm:flex-row flex-col w-full justify-between pn:max-sm:space-y-3 items-center ">
//               <div className="text-black border-2 border-[#5585FF] pn:max-sm:w-full text-center p-2 px-4 rounded-full">
//                 Previous
//               </div>
//               <Link
//                 href="/five"
//                 className="text-white bg-[#5585FF] p-2 px-6 rounded-full"
//               >
//                 Next
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section7;
