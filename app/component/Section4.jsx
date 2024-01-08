// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   BsCheckLg,
// } from "react-icons/bs";
// import styles from "../CustomScrollbarComponent.module.css"
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { API } from "@/Essentials";
// import {
//   AiOutlineClose,
//   AiFillCheckCircle,
//   AiOutlinePlus,
// } from "react-icons/ai";
// import { BiMap } from "react-icons/bi";
// import Square3 from "./Square3";
// import Square4 from "./Square4";
// import feed from "../assests/feed.svg";
// import video from "../assests/video.svg";
// import search from "../assests/search.svg";
// import Ad1 from "../spliting/Ad1";
// import Ad3 from "../spliting/Ad3";
// import Ad2 from "../spliting/Ad2";

// const Section4 = () => {
//   const [three, setThree] = useState({
//     location: [],
//     Headline: "",
//     adName: "",
//     Description: "",
//     Action: "",
//     link: "",
//     pic: "",
//     picname: "",
//     goal: "",
//     picsend: "",
//     tags: [],
//     maxage: "",
//     minage: "",
//     selectedAgeRange: "",
//     gender: "",
//     age: "",
//     type: [],
//     TotalBudget: "",
//     DailyBudget: "",
//     category: "",
//     startDate: Date.now(),
//     // endDate: Date.now(),
//     duration: "1",
//     random_id: Date.now().toString(),
//   });

//   const [inputValue, setInputValue] = useState("");
//   const [t, setT] = useState("");
//   const [down, setDown] = useState(0);
//   const [data, setData] = useState();
//   const [click, setCLick] = useState(0);
//   const [step, setStep] = useState(1);
//   const router = useRouter();
//   const [point, setPoint] = useState(null);
//   const [PointsCategory, setPointsCategory] = useState([]);
//   const [myLocation, setMyLocation] = useState([]);
//   const [aud, setAud] = useState([]);
//   const [men, setMen] = useState([]);
//   const [female, setFemale] = useState([]);
//   const [audbyCategory, setAudbyCategory] = useState("");
//   const [ctr, setCtr] = useState("");

//   const handleCategoryChange = (name, points, audbyCategory, ctr) => {
//     setThree({ ...three, category: name });
//     setAudbyCategory(audbyCategory);
//     setPoint(points);
//     setCtr(ctr);
//   };

//   const handleCheckboxClick = () => {
//     // Find the input element by its name attribute
//     const inputElement = document.querySelector('input[name="selectinput"]');

//     if (inputElement) {
//       // Set the focus on the input element
//       inputElement.focus();
//     }
//   };
//   const [myArray, setMyArray] = useState([]);
//   const [myTags, setMyTags] = useState([]);

//   const elementMappings = {
//     infeed: 0.5,
//     search: 0.2,
//     videoads: 0.4,
//   };

//   const newArray = myArray.map((element) => {
//     if (element in elementMappings) {
//       return elementMappings[element];
//     }

//     return element;
//   });

//   let sum = 0;

//   for (let i of newArray) {
//     sum += i;
//   }

//   const tagsMapping = {
//     [myTags[0]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
//     [myTags[1]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
//     [myTags[2]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
//     [myTags[3]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
//     [myTags[4]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
//   };

//   const newTags = myTags.map((element) => {
//     if (element in tagsMapping) {
//       return tagsMapping[element];
//     }

//     return element;
//   });

//   let sumtags = 0;
//   let average;

//   for (let i of newTags) {
//     sumtags += i;
//   }

//   average = sumtags / newTags.length;

//   useEffect(() => {
//     setMyTags(three.tags);
//   }, [three.tags]);

//   const percost = 0.1;
//   let totalCost = point * percost;
//   const fullTotalCost = sum + totalCost + average;
//   // console.log(fullTotal);
//   // console.log(fullTotal * 82);

//   // let audience = 10000;
//   // let costData = audience * fullTotalCost;
//   useEffect(() => {
//     setMyArray(three.type);
//   }, [three.type]);

//   let locwithAudience = aud;

//   // sum of audience
//   let totalAudience = 0;
//   for (let i = 0; i < locwithAudience.length; i++) {
//     totalAudience += locwithAudience[i];
//   }

//   //   men audience by location start
//   let locwithMenAudience = men;

//   let totalMenAudience = 0;
//   let avgMen;
//   for (let i = 0; i < locwithMenAudience.length; i++) {
//     totalMenAudience += locwithMenAudience[i];
//   }
//   avgMen = (totalMenAudience / locwithMenAudience.length).toFixed(2);

//   //   men audience by location end

//   //   women audience by location start
//   let locwithWomenAudience = female;

//   let totalWomenAudience = 0;
//   let avgwomen;
//   for (let i = 0; i < locwithWomenAudience.length; i++) {
//     totalWomenAudience += locwithWomenAudience[i];
//   }
//   avgwomen = (totalWomenAudience / locwithWomenAudience.length).toFixed(2);

//   //   women audience by location end

//   // calculation according to gender age start
//   let AudienceByGender;
//   let AudiencebyAge;
//   if (three.gender === "Men") {
//     AudienceByGender = Math.ceil(avgMen * totalAudience);
//     if (three.selectedAgeRange === "12-18") {
//       AudiencebyAge = Math.ceil(AudienceByGender * (20 / 100));
//     } else if (three.selectedAgeRange === "19-40") {
//       AudiencebyAge = Math.ceil(AudienceByGender * (60 / 100));
//     } else if (three.selectedAgeRange === "41-65") {
//       AudiencebyAge = Math.ceil(AudienceByGender * (20 / 100));
//     } else {
//       AudiencebyAge = AudienceByGender;
//     }
//   } else if (three.gender === "Women") {
//     AudienceByGender = avgwomen * totalAudience;
//     if (three.selectedAgeRange === "12-18") {
//       AudiencebyAge = Math.ceil(AudienceByGender * (20 / 100));
//     } else if (three.selectedAgeRange === "19-40") {
//       AudiencebyAge = Math.ceil(AudienceByGender * (60 / 100));
//     } else if (three.selectedAgeRange === "41-65") {
//       AudiencebyAge = Math.ceil(AudienceByGender * (20 / 100));
//     } else {
//       AudiencebyAge = AudienceByGender;
//     }
//   } else {
//     AudienceByGender = totalAudience;
//     if (three.selectedAgeRange === "12-18") {
//       AudiencebyAge = AudienceByGender * (20 / 100);
//     } else if (three.selectedAgeRange === "19-40") {
//       AudiencebyAge = AudienceByGender * (60 / 100);
//     } else if (three.selectedAgeRange === "41-65") {
//       AudiencebyAge = AudienceByGender * (20 / 100);
//     } else {
//       AudiencebyAge = AudienceByGender;
//     }
//   }

//   const ProperAudience = Math.ceil(AudiencebyAge * audbyCategory);

//   // const dataAudience = AudiencebyAge * fullTotal;
//   // console.log(fullTotal);
//   // console.log(dataAudience);

//   const audbyCtr = ctr * ProperAudience;
//   let pricebyDay;

//   let totalPrice = audbyCtr * fullTotalCost;

//   if (three.duration == 7) {
//     pricebyDay = totalPrice * 7;
//   } else if (three.duration == 30) {
//     pricebyDay = totalPrice * 30;
//   } else {
//     pricebyDay = totalPrice;
//   }

//   const tax = pricebyDay * 0.18;
//   const addTax = tax + pricebyDay;
//   // const [date, setDate] = useState(false);

//   const [user, setUser] = useState({
//     fullname: "",
//     photo: "",
//     id: "",
//   });

//   function formatDateToString(dateString) {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so add 1
//     const day = date.getDate().toString().padStart(2, "0");
//     const formattedDate = `${year}-${month}-${day}`;
//     return formattedDate;
//   }

//   // const PointsCategory = [
//   //   { name: "Gaming", points: 4, selected: false },
//   //   { name: "Technology", points: 5, selected: false },
//   //   { name: "Travel", points: 5, selected: false },
//   //   { name: "Food", points: 5, selected: false },
//   //   { name: "Fashion", points: 3, selected: false },
//   //   { name: "Fitness", points: 5, selected: false },
//   //   { name: "Lifestyle", points: 4, selected: false },
//   //   { name: "Entertainment", points: 5, selected: false },
//   //   { name: "Activism", points: 2, selected: false },
//   //   { name: "Education", points: 4, selected: false },
//   //   { name: "Art", points: 3, selected: false },
//   //   { name: "Business", points: 5, selected: false },
//   //   { name: "Photography", points: 3, selected: false },
//   //   { name: "Literature", points: 2, selected: false },
//   //   { name: "Pets", points: 4, selected: false },
//   //   { name: "DIY", points: 4, selected: false },
//   //   { name: "Community", points: 5, selected: false },
//   //   { name: "Sports", points: 5, selected: false },
//   //   { name: "Music", points: 4, selected: false },
//   //   { name: "Film", points: 4, selected: false },
//   //   { name: "Health", points: 4, selected: false },
//   //   { name: "Home", points: 2, selected: false },
//   //   { name: "Design", points: 3, selected: false },
//   //   { name: "Science", points: 5, selected: false },
//   //   { name: "History", points: 3, selected: false },
//   //   { name: "Interests", points: 3, selected: false },
//   //   { name: "Meditation", points: 4, selected: false },
//   //   { name: "Charity", points: 3, selected: false },
//   //   { name: "Tech", points: 5, selected: false },
//   //   { name: "Cars", points: 3, selected: false },
//   //   { name: "Motivation", points: 4, selected: false },
//   //   { name: "Comedy", points: 5, selected: false },
//   //   { name: "Finance", points: 4, selected: false },
//   //   { name: "Hiking", points: 3, selected: false },
//   //   { name: "Astrology", points: 1, selected: false },
//   //   { name: "Spirituality", points: 3, selected: false },
//   //   { name: "Language", points: 2, selected: false },
//   //   { name: "LGBTQ+", points: 1, selected: false },
//   //   { name: "Startups", points: 5, selected: false },
//   //   { name: "Virtual Reality", points: 3, selected: false },
//   //   { name: "Anime", points: 5, selected: false },
//   //   { name: "Cosplay", points: 3, selected: false },
//   //   { name: "Cooking", points: 3, selected: false },
//   // ];

//   const formastStartDate = formatDateToString(three.startDate);
//   // const formastEndDate = formatDateToString(three.endDate);

//   // useEffect(() => {
//   //   const id = sessionStorage.getItem("id");
//   //   setId(id);
//   // }, []);

//   const validateData = () => {
//     if (
//       // three.location.length === 0 ||
//       three.tags.length === 0 ||
//       (three.age === "All age group"
//         ? three.age === ""
//         : three.selectedAgeRange === "") ||
//       three.type === "" ||
//       three.tags === "" ||
//       three.duration === ""
//       // three.TotalBudget === "" ||
//       // three.category === "" ||
//       // three.endDate === "" ||
//       // formastEndDate < formastStartDate ||
//       // three.startDate === ""
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const validateDatas = () => {
//     if (
//       three.Action === "" ||
//       three.Description === "" ||
//       three.Headline === "" ||
//       three.link === "" ||
//       three.adName === "" ||
//       three.goal === "" ||
//       three.pic === ""
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   };

//   const validDatas = validateDatas();

//   const myAgeHandle = () => {
//     setCLick(1);
//     setThree({
//       ...three,
//       selectedAgeRange: "12-18",
//       age: "",
//       maxage: "18",
//       minage: "12",
//     });
//   };

//   const handleAgeRangeChange = (event) => {
//     const newValue = event.target.value;

//     if (newValue) {
//       const [min, max] = newValue.split("-").map(Number);
//       setThree(
//         {
//           ...three,
//           selectedAgeRange: newValue,
//           minage: min,
//           maxage: max,
//         },
//         () => {
//           // Now, the state has been updated, so you can log the values here
//           // console.log(three.selectedAgeRange, three.minage, three.maxage);
//         }
//       );
//     }
//   };

//   const isdatavalid = validateData();

//   const sendData = async (e) => {
//     e.preventDefault();
//     const advid = await sessionStorage.getItem("advid");

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("location", three.location);
//       formDataToSend.append("headline", three.Headline);
//       formDataToSend.append("desc", three.Description);
//       formDataToSend.append("age", three.age);
//       formDataToSend.append("image", three.picsend);
//       formDataToSend.append("cta", three.Action);
//       formDataToSend.append("ctalink", three.link);
//       formDataToSend.append("adname", three.adName);
//       formDataToSend.append("gender", three.gender);
//       formDataToSend.append("estaudience", ProperAudience);
//       formDataToSend.append("category", three.category);
//       formDataToSend.append("contenttype", "image");
//       formDataToSend.append("tags", three.tags);
//       formDataToSend.append("dailybudget", totalPrice);
//       formDataToSend.append("totalbudget", pricebyDay);
//       formDataToSend.append("agerange", three.selectedAgeRange);
//       formDataToSend.append("minage", three.minage);
//       formDataToSend.append("preferedsection", three.type);
//       formDataToSend.append("maxage", three.maxage);
//       formDataToSend.append("startdate", three.startDate);
//       formDataToSend.append("adid", three.random_id);
//       formDataToSend.append("enddate", three.duration);
//       formDataToSend.append("goal", three.goal);
//       formDataToSend.append("advertiserid", advid);

//       const res = await axios.post(`${API}/newad/${user.id}`, formDataToSend);
//       setData(res?.data);
//       if (res?.data?.success) {
//         router.push("/main/dashboard");
//       }
//       // console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     console.log("rendered");
//   }, []);

//   const toggleType = (type) => {
//     if (three.type.includes(type)) {
//       setThree({ ...three, type: three.type.filter((t) => t !== type) });
//     } else {
//       setThree({ ...three, type: [...three.type, type] });
//     }
//   };

//   useEffect(() => {
//     setUser({
//       fullname: sessionStorage.getItem("firstname"),
//       photo: sessionStorage.getItem("image"),
//       id: sessionStorage.getItem("id"),
//     });
//   }, []);

//   const handleFileChanges = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const fileExtension = file.name.split(".").pop().toLowerCase();

//       if (["jpg", "jpeg", "png", "svg"].includes(fileExtension)) {

//         setThree({
//           ...three,
//           pic: URL.createObjectURL(file),
//           picname: file.name,
//           picsend: file,
//         });
//       } else if (["mp4", "avi", "mov", "mp3"].includes(fileExtension)) {

//         setThree({
//           ...three,
//           pic: null,
//           picname: file.name,
//           picsend: file,
//         });
//       } else {

//         alert("Unsupported file type. Please select an image or video.");
//         e.target.value = "";
//       }
//     } else {

//       setThree({ ...three, pic: null, picname: "", picsend: null });
//     }
//   };

//   useEffect(() => {
//     window.history.pushState(null, null, window.location.href);

//     window.onpopstate = function () {
//       if (step > 0) {

//         setStep(step - 1);
//       } else {

//         window.location.href = "/main/dashboard";
//       }
//     };
//   }, [step]);

//   useEffect(() => {
//     axios
//       .get(`${API}/getData`)
//       .then((res) => {
//         setPointsCategory(res.data.Newcategory);
//         setMyLocation(res.data.NewLocations);
//       })
//       .catch((err) => console.log(err));
//   }, []);


//   useEffect(() => {

//     const selectedLocations = myLocation.filter((location) =>
//       three.location.includes(location.name)
//     );

//     const audience = selectedLocations.map((location) => location.audienceNo);
//     const menValues = selectedLocations.map((location) => location.men);
//     const femaleValues = selectedLocations.map((location) => location.women);

//     setMen(menValues);
//     setFemale(femaleValues);
//     setAud(audience);
//   }, [three.location]);

//   return (
//     <div className="no-scrollbar select-none w-screen h-screen overflow-x-hidden">
//       {step === 0 && (
//         <Ad1
//           setStep={setStep}
//           step={step}
//           validDatas={validDatas}
//           three={three}
//           setThree={setThree}
//           down={down}
//           setDown={setDown}
//           handleFileChanges={handleFileChanges}
//           user={user}
//         />
//       )}

//       {step === 1 && (<Ad2
//         setStep={setStep}
//         toggleType={toggleType}
//         setThree={setThree}
//         setT={setT}
//         setCLick={setCLick}
//         three={three}
//         PointsCategory={PointsCategory}
//         handleCategoryChange={handleCategoryChange}
//         inputValue={inputValue}
//         setInputValue={setInputValue}
//         myAgeHandle={myAgeHandle}
//         click={click}
//         handleAgeRangeChange={handleAgeRangeChange}
//         formastStartDate={formastStartDate}
//         isdatavalid={isdatavalid}
//         ProperAudience={ProperAudience}
//         ctr={ctr}
//         pricebyDay={pricebyDay}
//         totalPrice={totalPrice}
//         myLocation={myLocation}
//         t={t}
//         step
//       />)
//       }

//       {step === 2 && (<Ad3
//         setStep={setStep}
//         sendData={sendData}
//         step={step}
//         three={three}
//         pricebyDay={pricebyDay}
//         totalPrice={totalPrice}
//         tax={tax}
//         addTax={addTax}
//         formastStartDate={formastStartDate}
//       />)
//       }
//     </div>
//   );
// };
// export default Section4;
