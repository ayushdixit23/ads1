// "use client";
// import React, { useState } from "react";
// import Square1 from "./Square1";
// import Square3 from "./Square3";
// import Square4 from "./Square4";
// import Image from "next/image";
// import { AiOutlineEdit, AiTwotoneEdit } from "react-icons/ai";
// import ads from "../assests/image/ads.svg";
// import { BsThreeDots } from "react-icons/bs";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";
// import { API } from "@/Essentials";

// const Section6 = () => {
//   const [data, setData] = useState();
//   const search = useSearchParams();
//   const location = search.get("location");
//   const head = search.get("head");
//   const age = search.get("age");
//   const desp = search.get("desp");
//   const pN = search.get("pN");
//   const pics = search.get("pics");
//   const Act = search.get("Act");
//   const link = search.get("link");
//   const adName = search.get("adName");
//   const tags = search.get("tags");
//   const gender = search.get("gender");
//   const DailyBudget = search.get("DailyBudget");
//   const TotalBudget = search.get("TotalBudget");
//   const selectedAgeRange = search.get("selectedAgeRange");
//   const minage = search.get("minage");
//   const maxage = search.get("maxage");
//   const type = search.get("type");
//   const startDate = search.get("startDate");
//   const endDate = search.get("endDate");
//   const goal = search.get("goal");

//   const newLocation = [location];
//   const ls = newLocation[0];
//   const loc = ls.split(",");

//   const id = sessionStorage.getItem("id");

//   const sendData = async (e) => {
//     e.preventDefault()
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("location", loc);
//       formDataToSend.append("headline", head);
//       formDataToSend.append("desc", desp);
//       formDataToSend.append("age", age);
//       formDataToSend.append("image", pN);
//       formDataToSend.append("cta", Act);
//       formDataToSend.append("ctalink", link);
//       formDataToSend.append("adName", adName);
//       formDataToSend.append("estaudience", gender);
//       formDataToSend.append("tags", tags);
//       formDataToSend.append("dailybudget", DailyBudget);
//       formDataToSend.append("totalbudget", TotalBudget);
//       formDataToSend.append("agerange", selectedAgeRange);
//       formDataToSend.append("minage", minage);
//       formDataToSend.append("preferedsection", type);
//       formDataToSend.append("maxage", maxage);
//       formDataToSend.append("startdate", startDate);
//       formDataToSend.append("enddate", endDate);
//       formDataToSend.append("goal", goal);

//       const res = await axios.post(`${API}/newad/${id}`, formDataToSend);
//       setData(res?.data);
//       // console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <div className="grid bg-[#F8F8F8] grid-cols-1 pn:max-md:hidden">
//         <div className="flex bg-white flex-col py-2">
//           <div className="flex justify-between px-5 items-center py-2">
//             <div className="text-[#555555] text-xl font-semibold">
//               Set up a new Ad
//             </div>
//             <div className="flex justify-center items-center gap-3 ">
//               <div className="border-b  border-black">Discard</div>
            
//               <div  className="p-2 px-7 rounded-full bg-[#2D9AFF] text-white" onClick={sendData}>
//                 Next
//                 </div>
             
//             </div>
//           </div>
//           <div>
//             <Square1 />
//           </div>
//         </div>

//         <div className="flex justify-center gap-6 px-[2%] pn:max-md:hidden">
//           <div className="flex pn:max-md:hidden flex-col">
//             <div className="md:w-[700px] bg-white my-4 rounded-2xl py-5 px-5">
//               <div className="flex justify-between items-center">
//                 <div className="text-xl font-semibold py-2">Preview</div>
//                 <div className="flex justify-center border border-black p-1 px-4 rounded-full items-center">
//                   <div>
//                     <AiOutlineEdit />
//                   </div>
//                   <div onClick={sendData} className="font-medium mx-1">
//                     Edit
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 px-2">
//                 <div className="flex flex-col space-y-2 my-1">
//                   <div className=" text-[#333333]">Ad Name</div>
//                   <div className="font-medium">{adName}</div>
//                 </div>
//                 <div className="flex flex-col space-y-2 my-1">
//                   <div className="text-[#333333]">Ad Category</div>
//                   <div className="font-medium">Gadgets & Wearables</div>
//                 </div>
//               </div>

//               <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

//               <div className="grid grid-cols-2 px-2">
//                 <div className="my-3">
//                   <h1 className="text-lg font-semibold py-2">Budget</h1>
//                   <div className="flex items-center space-x-5 ">
//                     <div className="flex flex-col space-y-2 my-1">
//                       <div className="text-[#333333]">Total Budget</div>
//                       <div className="font-medium">{TotalBudget}</div>
//                     </div>
//                     <div className="flex flex-col space-y-2 my-1">
//                       <div className="text-[#333333]">Daily Budget</div>
//                       <div className="font-medium">{DailyBudget}</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="my-3">
//                   <h1 className="text-lg font-semibold py-2">Date & Time</h1>
//                   <div className="flex items-center space-x-5 ">
//                     <div className="flex flex-col space-y-2 my-1">
//                       <div className="text-[#333333]">Start Date</div>
//                       <div className="font-medium">{startDate}</div>
//                     </div>
//                     <div className="flex flex-col space-y-2 my-1">
//                       <div className="text-[#333333]">End Date</div>
//                       <div className="font-medium">{endDate}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

//               <div className="my-3">
//                 <h1 className="text-xl font-semibold py-2">Target People</h1>
//                 <div className="flex items-center space-x-5 px-2">
//                   <div className="flex flex-col space-y-2 my-1">
//                     <div className="text-[#333333]">Gender</div>
//                     <div className="font-medium">{gender}</div>
//                   </div>
//                   <div className="flex flex-col space-y-2 my-1">
//                     <div className="text-[#333333]">Age Group</div>
//                     <div className="font-medium">
//                       {selectedAgeRange ? selectedAgeRange : "All age group"}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

//               <div className="my-3">
//                 <div className="flex justify-between items-center">
//                   <div className="text-xl font-semibold py-2">Locations</div>
//                 </div>
//                 <div className="flex my-2 items-center space-x-3">
//                   {/* {location?.map((data, i) => (
//                     <div
//                       key={i}
//                       className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full"
//                     >
//                       {data[i]}
//                     </div>
//                   ))} */}
//                   {loc}
//                 </div>
//               </div>
//               <div className="my-3">
//                 <div className="flex justify-between items-center">
//                   <div className="text-xl font-semibold py-2">Type of ad</div>
//                 </div>
//                 <div className="flex my-2 items-center space-x-3">
//                   <div className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full">
//                     In feed ads
//                   </div>
//                   <div className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full">
//                     {type}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-[700px] bg-white my-4 rounded-2xl py-5 px-5">
//               <div className="bg-[#FAFAFA] flex justify-between py-5 my-3 px-1 items-center">
//                 <div className="flex justify-center space-x-2 sm:space-x-4 items-center">
//                   <div>
//                     <Image src={`/pN`} width={70} height={70} alt="ads" />
//                   </div>
//                   <div>
//                     <div className="flex items-center space-x-1">
//                       <span className="font-medium">{head} </span>
//                       <span>
//                         <AiTwotoneEdit className="text-blue-600" />
//                       </span>
//                     </div>
//                     <div className=" text-sm ">{desp}</div>
//                     <div className="flex justify-center text-sm space-x-3 items-center">
//                       <div></div>
//                       <div>Id: 271617804</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <BsThreeDots className="text-xl" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <Square3 />
//             <Square4 />
//           </div>
//         </div>
//       </div>
//       <div className="md:hidden">
//         <div className="flex bg-white flex-col py-2">
//           <div className="flex justify-between px-5 items-center py-2">
//             <div className="text-[#555555] text-xl font-semibold">Ad SetUp</div>
//             <div className="flex justify-center items-center gap-3 ">
//               <div className="border-b hidden border-black">Discard</div>

//               <Link
//                 href="main/ads"
//                 className="p-2 px-7 rounded-full bg-[#2D9AFF] text-white"
//               >
//                 Next
//               </Link>
//             </div>
//           </div>
//           <div>
//             <Square1 />
//           </div>
//         </div>
//         <div className="grid grid-cols-1">
//           <div className="flex flex-col">
//             {" "}
//             <Square3 />
//             <Square4 />
//           </div>
//           <div className="flex md:hidden flex-col px-3">
//             <div className="bg-white w-full my-4 rounded-2xl py-5 px-3">
//               <div className="flex justify-between items-center">
//                 <div className="text-xl font-semibold py-2">Ad Details</div>
//                 <div className="flex justify-center border border-black p-1 px-3 sm:px-4 rounded-full items-center">
//                   <div>
//                     <AiOutlineEdit />
//                   </div>
//                   <div className="font-medium mx-1">Edit</div>
//                 </div>
//               </div>
//               <div className="grid sm:grid-cols-2 gap-1 my-2">
//                 <div className="flex flex-col space-y-2 my-1">
//                   <div className="text-[#333333]">Ad Name</div>
//                   <div className="font-medium">
//                     Style with Our Latest Watch Collections
//                   </div>
//                 </div>
//                 <div className="flex flex-col space-y-2 my-1">
//                   <div className="text-[#333333]">Ad Category</div>
//                   <div className="font-medium">Gadgets & Wearables</div>
//                 </div>
//               </div>

//               <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

//               <div className="grid sm:grid-cols-2 px-2">
//                 <div className="my-3">
//                   <h1 className="text-lg font-semibold py-2">Budget</h1>
//                   <div className="flex items-center space-x-5 ">
//                     <div className="flex flex-col space-y-2 my-1">
//                       <div className="text-[#333333]">Total Budget</div>
//                       <div className="font-medium">&#x20B9; 5,00,000</div>
//                     </div>
//                     <div className="flex flex-col space-y-2 my-1">
//                       <div className="text-[#333333]">Daily Budget</div>
//                       <div className="font-medium">&#x20B9; 50,000</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="my-3">
//                   <h1 className="text-lg font-semibold py-2">Date & Time</h1>
//                   <div className="flex items-center space-x-5 ">
//                     <div className="flex flex-col space-y-2 my-1">
//                       <div className="text-[#333333]">Start Date</div>
//                       <div className="font-medium">05-10-23</div>
//                     </div>
//                     <div className="flex flex-col space-y-2 my-1">
//                       <div className="text-[#333333]">End Date</div>
//                       <div className="font-medium">10-05-23</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

//               <div className="my-3">
//                 <h1 className="text-xl font-semibold py-2">Target People</h1>
//                 <div className="flex items-center space-x-5 px-2">
//                   <div className="flex flex-col space-y-2 my-1">
//                     <div className="text-[#333333]">Gender</div>
//                     <div className="font-medium">Any</div>
//                   </div>
//                   <div className="flex flex-col space-y-2 my-1">
//                     <div className="text-[#333333]">Age Group</div>
//                     <div className="font-medium">All Age Groups</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

//               <div className="my-3">
//                 <div className="flex justify-between items-center">
//                   <div className="text-xl font-semibold py-2">Locations</div>
//                 </div>
//                 <div className="flex flex-wrap my-2 items-center space-x-3">
//                   <div className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full">
//                     Delhi
//                   </div>
//                   <div className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full">
//                     Kanpur
//                   </div>
//                   <div className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full">
//                     Lucknow
//                   </div>
//                 </div>
//               </div>
//               <div className="my-3">
//                 <div className="flex justify-between items-center">
//                   <div className="text-xl font-semibold py-2">Type of ad</div>
//                 </div>
//                 <div className="flex flex-wrap my-2 items-center space-x-3">
//                   <div className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full">
//                     In feed ads
//                   </div>
//                   <div className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full">
//                     Search Ads
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* <div className="w-full bg-white my-4 rounded-2xl py-3 sm:py-5 px-5">
//               <h1 className="text-lg font-medium py-2">Ads</h1>
//               <div className="flex items-center space-x-4 py-2">
//                 <div>
//                   <Image src={ads} alt="ads" />
//                 </div>
//                 <div className="flex flex-col">
//                   <div>“Never have a bad meal”</div>
//                   <div>healthy and sweet dishes</div>
//                 </div>
//               </div>
//             </div> */}

//             <div className="w-full bg-white my-4 rounded-2xl py-5 px-5">
//               <div className="bg-[#FAFAFA] flex justify-between py-5 my-3 px-1 items-center">
//                 <div className="flex justify-center space-x-2 sm:space-x-4 items-center">
//                   <div>
//                     <Image
//                       src={ads}
//                       width={70}
//                       height={70}
//                       alt="ads"
//                       className="w-auto h-auto min-w-[70px] min-h-[70px]"
//                     />
//                   </div>
//                   <div>
//                     <div className="flex items-center space-x-1">
//                       <span className="font-medium">
//                         {head ? head : "headline"}
//                       </span>
//                       <span>
//                         <AiTwotoneEdit className="text-blue-600" />
//                       </span>
//                     </div>
//                     <div className=" text-sm max-w-[87%]">
//                       {desp ? desp : "Never have a bad meal"}
//                     </div>
//                     <div className="flex justify-center  text-sm space-x-3 items-center">
//                       <div>some line</div>
//                       <div>Id: 271617804</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <BsThreeDots className="text-xl" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section6;