"use client";
import React, { useEffect, useState } from "react";
import {
  BsLink,
  BsThreeDots,
  BsThreeDotsVertical,
  BsCheckLg,
} from "react-icons/bs";
import styles from "../CustomScrollbarComponent.module.css"; // Import the CSS module
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import adss from "../assests/adss.svg";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API } from "@/Essentials";
import {
  AiOutlineClose,
  AiFillCheckCircle,
  AiOutlineEdit,
  AiTwotoneEdit,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import Square3 from "./Square3";
import Square4 from "./Square4";
import { FiAlertCircle } from "react-icons/fi";
import feed from "../assests/feed.svg";
import video from "../assests/video.svg";
import search from "../assests/search.svg";
import { duration } from "moment";

const Section4 = () => {
  const [three, setThree] = useState({
    location: [],
    Headline: "",
    adName: "",
    Description: "",
    Action: "",
    link: "",
    pic: "",
    picname: "",
    goal: "",
    picsend: "",
    tags: [],
    maxage: "",
    minage: "",
    selectedAgeRange: "",
    gender: "",
    age: "",
    type: [],
    TotalBudget: "",
    DailyBudget: "",
    category: "",
    startDate: Date.now(),
    // endDate: Date.now(),
    duration: "1",
    random_id: Date.now().toString(),
  });

  const [inputValue, setInputValue] = useState("");
  const [t, setT] = useState("");
  const [down, setDown] = useState(0);
  const [data, setData] = useState();
  const [click, setCLick] = useState(0);
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [point, setPoint] = useState(null);
  const [PointsCategory, setPointsCategory] = useState([]);
  const [myLocation, setMyLocation] = useState([]);
  const [aud, setAud] = useState([]);
  const [men, setMen] = useState([]);
  const [female, setFemale] = useState([]);
  const [audbyCategory, setAudbyCategory] = useState("");
  const [ctr, setCtr] = useState("");

  const handleCategoryChange = (name, points, audbyCategory, ctr) => {
    setThree({ ...three, category: name });
    setAudbyCategory(audbyCategory);
    setPoint(points);
    setCtr(ctr);
  };

  const handleCheckboxClick = () => {
    // Find the input element by its name attribute
    const inputElement = document.querySelector('input[name="selectinput"]');

    if (inputElement) {
      // Set the focus on the input element
      inputElement.focus();
    }
  };

  const [myArray, setMyArray] = useState([]);
  const [myTags, setMyTags] = useState([]);

  const elementMappings = {
    infeed: 0.5,
    search: 0.2,
    videoads: 0.4,
  };

  const newArray = myArray.map((element) => {
    if (element in elementMappings) {
      return elementMappings[element];
    }

    return element;
  });

  let sum = 0;

  for (let i of newArray) {
    sum += i;
  }

  const tagsMapping = {
    [myTags[0]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
    [myTags[1]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
    [myTags[2]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
    [myTags[3]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
    [myTags[4]]: Number((0.1 + Math.random() * 0.1).toFixed(2)),
  };

  const newTags = myTags.map((element) => {
    if (element in tagsMapping) {
      return tagsMapping[element];
    }

    return element;
  });

  let sumtags = 0;
  let average;

  for (let i of newTags) {
    sumtags += i;
  }

  average = sumtags / newTags.length;

  useEffect(() => {
    setMyTags(three.tags);
  }, [three.tags]);

  const percost = 0.1;
  let totalCost = point * percost;
  const fullTotalCost = sum + totalCost + average;
  // console.log(fullTotal);
  // console.log(fullTotal * 82);

  // let audience = 10000;
  // let costData = audience * fullTotalCost;
  useEffect(() => {
    setMyArray(three.type);
  }, [three.type]);

  let locwithAudience = aud;

  // sum of audience
  let totalAudience = 0;
  for (let i = 0; i < locwithAudience.length; i++) {
    totalAudience += locwithAudience[i];
  }

  //   men audience by location start
  let locwithMenAudience = men;

  let totalMenAudience = 0;
  let avgMen;
  for (let i = 0; i < locwithMenAudience.length; i++) {
    totalMenAudience += locwithMenAudience[i];
  }
  avgMen = (totalMenAudience / locwithMenAudience.length).toFixed(2);

  //   men audience by location end

  //   women audience by location start
  let locwithWomenAudience = female;

  let totalWomenAudience = 0;
  let avgwomen;
  for (let i = 0; i < locwithWomenAudience.length; i++) {
    totalWomenAudience += locwithWomenAudience[i];
  }
  avgwomen = (totalWomenAudience / locwithWomenAudience.length).toFixed(2);

  //   women audience by location end

  // calculation according to gender age start
  let AudienceByGender;
  let AudiencebyAge;
  if (three.gender === "Men") {
    AudienceByGender = Math.ceil(avgMen * totalAudience);
    if (three.selectedAgeRange === "12-18") {
      AudiencebyAge = Math.ceil(AudienceByGender * (20 / 100));
    } else if (three.selectedAgeRange === "19-40") {
      AudiencebyAge = Math.ceil(AudienceByGender * (60 / 100));
    } else if (three.selectedAgeRange === "41-65") {
      AudiencebyAge = Math.ceil(AudienceByGender * (20 / 100));
    } else {
      AudiencebyAge = AudienceByGender;
    }
  } else if (three.gender === "Women") {
    AudienceByGender = avgwomen * totalAudience;
    if (three.selectedAgeRange === "12-18") {
      AudiencebyAge = Math.ceil(AudienceByGender * (20 / 100));
    } else if (three.selectedAgeRange === "19-40") {
      AudiencebyAge = Math.ceil(AudienceByGender * (60 / 100));
    } else if (three.selectedAgeRange === "41-65") {
      AudiencebyAge = Math.ceil(AudienceByGender * (20 / 100));
    } else {
      AudiencebyAge = AudienceByGender;
    }
  } else {
    AudienceByGender = totalAudience;
    if (three.selectedAgeRange === "12-18") {
      AudiencebyAge = AudienceByGender * (20 / 100);
    } else if (three.selectedAgeRange === "19-40") {
      AudiencebyAge = AudienceByGender * (60 / 100);
    } else if (three.selectedAgeRange === "41-65") {
      AudiencebyAge = AudienceByGender * (20 / 100);
    } else {
      AudiencebyAge = AudienceByGender;
    }
  }

  const ProperAudience = Math.ceil(AudiencebyAge * audbyCategory);

  // const dataAudience = AudiencebyAge * fullTotal;
  // console.log(fullTotal);
  // console.log(dataAudience);

  const audbyCtr = ctr * ProperAudience;
  let pricebyDay;

  let totalPrice = audbyCtr * fullTotalCost;

  if (three.duration == 7) {
    pricebyDay = totalPrice * 7;
  } else if (three.duration == 30) {
    pricebyDay = totalPrice * 30;
  } else {
    pricebyDay = totalPrice;
  }

  const tax = pricebyDay * 0.18;
  const addTax = tax + pricebyDay;
  // const [date, setDate] = useState(false);

  const [user, setUser] = useState({
    fullname: "",
    photo: "",
    id: "",
  });

  function formatDateToString(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so add 1
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  // const PointsCategory = [
  //   { name: "Gaming", points: 4, selected: false },
  //   { name: "Technology", points: 5, selected: false },
  //   { name: "Travel", points: 5, selected: false },
  //   { name: "Food", points: 5, selected: false },
  //   { name: "Fashion", points: 3, selected: false },
  //   { name: "Fitness", points: 5, selected: false },
  //   { name: "Lifestyle", points: 4, selected: false },
  //   { name: "Entertainment", points: 5, selected: false },
  //   { name: "Activism", points: 2, selected: false },
  //   { name: "Education", points: 4, selected: false },
  //   { name: "Art", points: 3, selected: false },
  //   { name: "Business", points: 5, selected: false },
  //   { name: "Photography", points: 3, selected: false },
  //   { name: "Literature", points: 2, selected: false },
  //   { name: "Pets", points: 4, selected: false },
  //   { name: "DIY", points: 4, selected: false },
  //   { name: "Community", points: 5, selected: false },
  //   { name: "Sports", points: 5, selected: false },
  //   { name: "Music", points: 4, selected: false },
  //   { name: "Film", points: 4, selected: false },
  //   { name: "Health", points: 4, selected: false },
  //   { name: "Home", points: 2, selected: false },
  //   { name: "Design", points: 3, selected: false },
  //   { name: "Science", points: 5, selected: false },
  //   { name: "History", points: 3, selected: false },
  //   { name: "Interests", points: 3, selected: false },
  //   { name: "Meditation", points: 4, selected: false },
  //   { name: "Charity", points: 3, selected: false },
  //   { name: "Tech", points: 5, selected: false },
  //   { name: "Cars", points: 3, selected: false },
  //   { name: "Motivation", points: 4, selected: false },
  //   { name: "Comedy", points: 5, selected: false },
  //   { name: "Finance", points: 4, selected: false },
  //   { name: "Hiking", points: 3, selected: false },
  //   { name: "Astrology", points: 1, selected: false },
  //   { name: "Spirituality", points: 3, selected: false },
  //   { name: "Language", points: 2, selected: false },
  //   { name: "LGBTQ+", points: 1, selected: false },
  //   { name: "Startups", points: 5, selected: false },
  //   { name: "Virtual Reality", points: 3, selected: false },
  //   { name: "Anime", points: 5, selected: false },
  //   { name: "Cosplay", points: 3, selected: false },
  //   { name: "Cooking", points: 3, selected: false },
  // ];

  const formastStartDate = formatDateToString(three.startDate);
  // const formastEndDate = formatDateToString(three.endDate);

  // useEffect(() => {
  //   const id = sessionStorage.getItem("id");
  //   setId(id);
  // }, []);

  const validateData = () => {
    if (
      // three.location.length === 0 ||
      three.tags.length === 0 ||
      (three.age === "All age group"
        ? three.age === ""
        : three.selectedAgeRange === "") ||
      three.type === "" ||
      three.tags === "" ||
      three.duration === ""
      // three.TotalBudget === "" ||
      // three.category === "" ||
      // three.endDate === "" ||
      // formastEndDate < formastStartDate ||
      // three.startDate === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const validateDatas = () => {
    if (
      three.Action === "" ||
      three.Description === "" ||
      three.Headline === "" ||
      three.link === "" ||
      three.adName === "" ||
      three.goal === "" ||
      three.pic === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const validDatas = validateDatas();

  console.log(step);

  const myAgeHandle = () => {
    setCLick(1);
    setThree({
      ...three,
      selectedAgeRange: "12-18",
      age: "",
      maxage: "18",
      minage: "12",
    });
  };

  const handleAgeRangeChange = (event) => {
    const newValue = event.target.value;

    if (newValue) {
      const [min, max] = newValue.split("-").map(Number);
      setThree(
        {
          ...three,
          selectedAgeRange: newValue,
          minage: min,
          maxage: max,
        },
        () => {
          // Now, the state has been updated, so you can log the values here
          // console.log(three.selectedAgeRange, three.minage, three.maxage);
        }
      );
    }
  };

  const isdatavalid = validateData();

  const sendData = async (e) => {
    e.preventDefault();
    const advid = await sessionStorage.getItem("advid");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("location", three.location);
      formDataToSend.append("headline", three.Headline);
      formDataToSend.append("desc", three.Description);
      formDataToSend.append("age", three.age);
      formDataToSend.append("image", three.picsend);
      formDataToSend.append("cta", three.Action);
      formDataToSend.append("ctalink", three.link);
      formDataToSend.append("adname", three.adName);
      formDataToSend.append("gender", three.gender);
      formDataToSend.append("estaudience", ProperAudience);
      formDataToSend.append("category", three.category);
      formDataToSend.append("contenttype", "image");
      formDataToSend.append("tags", three.tags);
      formDataToSend.append("dailybudget", totalPrice);
      formDataToSend.append("totalbudget", pricebyDay);
      formDataToSend.append("agerange", three.selectedAgeRange);
      formDataToSend.append("minage", three.minage);
      formDataToSend.append("preferedsection", three.type);
      formDataToSend.append("maxage", three.maxage);
      formDataToSend.append("startdate", three.startDate);
      formDataToSend.append("adid", three.random_id);
      formDataToSend.append("enddate", three.duration);
      formDataToSend.append("goal", three.goal);
      formDataToSend.append("advertiserid", advid);

      const res = await axios.post(`${API}/newad/${user.id}`, formDataToSend);
      setData(res?.data);
      if (res?.data?.success) {
        router.push("/main/dashboard");
      }
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleType = (type) => {
    if (three.type.includes(type)) {
      setThree({ ...three, type: three.type.filter((t) => t !== type) });
    } else {
      setThree({ ...three, type: [...three.type, type] });
    }
  };

  useEffect(() => {
    setUser({
      fullname: sessionStorage.getItem("firstname"),
      photo: sessionStorage.getItem("image"),
      id: sessionStorage.getItem("id"),
    });
  }, []);

  // useEffect(() => {
  //   if (step === 1) {
  //     axios
  //       .post("http://localhost:5000/addata", {
  //         locations: three.location,
  //         tagss: three.tags,
  //         types: three.type,
  //         myAdPoints: point,
  //         categorys: three.category,
  //         myAge: three.selectedAgeRange,
  //         myAudience: aud,
  //         totalmen: men,
  //         totalwomen: female,
  //         mygender: three.gender,
  //         advid: sessionStorage.getItem("advid"),
  //       })
  //       .then((res) => {
  //         // console.log(res.data);
  //       })
  //       .catch((Error) => console.log(Error));
  //     console.log("step=1");
  //   }
  //   console.log("doest matter");
  // }, [step]);

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);

    // Intercept the back button click and simulate step changes
    window.onpopstate = function () {
      if (step > 0) {
        // If step is greater than 0, decrement it
        setStep(step - 1);
      } else {
        // If step is 0, navigate to "/main/dashboard"
        window.location.href = "/main/dashboard";
      }
    };
  }, [step]);

  useEffect(() => {
    axios
      .get(`${API}/getData`)
      .then((res) => {
        setPointsCategory(res.data.Newcategory);
        setMyLocation(res.data.NewLocations);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(audbyCategory);

  useEffect(() => {
    // Update the men and female arrays when three.location changes
    const selectedLocations = myLocation.filter((location) =>
      three.location.includes(location.name)
    );

    const audience = selectedLocations.map((location) => location.audienceNo);
    const menValues = selectedLocations.map((location) => location.men);
    const femaleValues = selectedLocations.map((location) => location.women);

    setMen(menValues);
    setFemale(femaleValues);
    setAud(audience);
  }, [three.location]);

  return (
    <div className="no-scrollbar select-none w-screen h-screen overflow-x-hidden">
      <div
        className={`${
          step === 0
            ? "bg-[#F8F8F8] select-none grid grid-cols-1 w-full"
            : "hidden"
        }`}
      >
        <div className="flex flex-col bg-white ">
          <div className="fixed top-0 left-0 w-full z-50 bg-white">
            <div className="flex border w-full bg-white justify-between shadow-lg items-center px-5 py-2 pb-4">
              <div className="text-[#555555] pn:max-sm:hidden text-xl font-semibold">
                Set up a new Ad
              </div>
              <div className="text-[#555555] sm:hidden text-xl font-semibold">
                Ad SetUp
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="border-b cursor-pointer pn:max-sm:hidden border-black">
                  Discard
                </div>
                {validDatas ? (
                  <div
                    onClick={() => setStep(1)}
                    className="p-2 px-7 rounded-full cursor-pointer bg-[#2D9AFF] text-white"
                  >
                    <div>Next</div>
                  </div>
                ) : (
                  <div className="p-2 px-7 rounded-full cursor-pointer bg-[#b3bbc3]/30 text-white">
                    <div>Next</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ marginTop: "4rem" }}
              className="flex justify-center bg-[#fafafa] pt-5 py-3 pn:max-sm:text-xs text-center px-3"
            >
              <div className=" flex flex-col gap-1 mr-2 justify-center items-center">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    step >= 0
                      ? "bg-[#2D9AFF] text-white"
                      : "bg-green-300 text-white"
                  }`}
                >
                  {step >= 1 ? <BsCheckLg className="text-[#27AE60]" /> : 1}
                </div>

                <div
                  className={` flex items-center font-semibold flex-col ${
                    step === 0 ? "text-blue-600 " : "text-green-300"
                  }`}
                >
                  Set up Ad
                </div>
              </div>

              <div
                className={`border-[#f9f9f9] border-dashed border-t-2 pn:max-sm:w-10 sm:w-20 mt-5 ${
                  step >= 0 ? "border-black" : "border-black"
                }`}
              />

              <div className="flex flex-col gap-1 justify-center items-center">
                <div
                  className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${
                    step >= 1
                      ? "bg-blue-600 text-white"
                      : " text-black border-4 border-black/70"
                  }`}
                >
                  2
                </div>

                <div
                  className={` flex items-center flex-col ${
                    step >= 1 ? "text-blue-600 " : "text-black"
                  }`}
                >
                  Select target
                </div>
              </div>
              <div
                className={`border-[#f9f9f9] border-dashed border-t-2  pn:max-sm:w-10 sm:w-20 mt-5 ${
                  step >= 1 ? "border-black" : "border-black"
                }`}
              />
              <div className="flex flex-col gap-1 -ml-4 justify-center items-center">
                <div
                  className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${
                    step >= 2
                      ? "bg-blue-600 text-white"
                      : " text-black border-4 border-black/70"
                  }`}
                >
                  3
                </div>

                <div
                  className={` flex items-center flex-col justify-center ${
                    step === 2 ? "text-blue-600 " : "text-black"
                  }`}
                >
                  Preview & Launch
                </div>
              </div>
            </div>
          </div>

          {/* scroll this */}
          <div className="grid grid-cols-7 my-4 md:h-screen px-3 sm:px-[2%] md:overflow-auto gap-4 md:scrollbar-hidden pn:max-md:grid-cols-1 w-full">
            <div
              className={` ${styles.customScrollbar} sm:px-4 px-2 bg-[#F0F2F5] w-full md:col-span-4 rounded-xl sm:overflow-y-scroll py-2 pn:max-md:order-1`}
            >
              <h1 className="text-2xl font-semibold py-2 pn:max-sm:px-2 my-2">
                Ad Details
              </h1>
              <div className="my-2 rounded-xl bg-white pn:max-sm:px-2">
                <div className="flex  py-2 px-[2%] flex-col w-full">
                  <label
                    htmlFor="adname"
                    className="text-lg font-semibold py-2"
                  >
                    Ad Name<span className="text-[#FF4444]"> *</span>
                  </label>
                  <input
                    name="myForm"
                    id="adname"
                    onChange={(e) =>
                      setThree({ ...three, adName: e.target.value })
                    }
                    value={three.adName}
                    type="text"
                    placeholder="Enter Ad Name"
                    className="w-full border rounded-xl outline-none p-2"
                  />
                </div>
                <div className=" py-2 px-[2%]">
                  <h1 className="text-lg font-semibold py-2">
                    Select a goal for Ad
                  </h1>
                  <div className="sm:flex grid grid-cols-2 sm:flex-wrap gap-3">
                    <div
                      onClick={() => setThree({ ...three, goal: "Sales" })}
                      className={`p-1 border-2 inline-block  text-black w-full sm:w-[220px] rounded-xl ${
                        three.goal === "Sales"
                          ? "border-2 border-[#2D9AFF]"
                          : " sm:hover:text-black"
                      } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${
                          three.goal === "Sales"
                            ? "bg-[#2D9AFF]/30"
                            : "bg-white sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
                        }  `}
                      >
                        {" "}
                        <h1 className="sm:text-2xl text-lg  font-robot font-bold py-1">
                          Sales
                        </h1>
                        <p className="text-sm w-[90%]">
                          Drive Sales To your desired destination
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setThree({ ...three, goal: "Awareness" })}
                      className={`p-1 border-2 inline-block w-full sm:w-[220px] rounded-xl ${
                        three.goal === "Awareness"
                          ? "border-2 border-[#2D9AFF]"
                          : " sm:hover:text-black"
                      } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${
                          three.goal === "Awareness"
                            ? "bg-[#2D9AFF]/30"
                            : "bg-white sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
                        }  `}
                      >
                        {" "}
                        <h1 className="sm:text-2xl text-lg  font-robot font-bold py-1">
                          Awareness
                        </h1>
                        <p className="text-sm w-[90%]">
                          Generate trust for your brand between audience.
                        </p>
                      </div>{" "}
                    </div>
                    <div
                      onClick={() => setThree({ ...three, goal: "Clicks" })}
                      className={` p-1 border-2 inline-block w-full sm:w-[220px] rounded-xl ${
                        three.goal === "Clicks"
                          ? "border-2 border-[#2D9AFF]"
                          : " sm:hover:text-black"
                      } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${
                          three.goal === "Clicks"
                            ? "bg-[#2D9AFF]/30"
                            : "bg-white sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
                        }  `}
                      >
                        <h1 className="sm:text-2xl text-lg  font-robot font-bold py-1">
                          Clicks
                        </h1>
                        <p className="text-sm w-[90%]">
                          Bring Conversion for your platform.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setThree({ ...three, goal: "Downloads" })}
                      className={` p-1 border-2 inline-block w-full sm:w-[220px] rounded-xl ${
                        three.goal === "Downloads"
                          ? "border-2 border-[#2D9AFF]"
                          : " sm:hover:text-black"
                      } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${
                          three.goal === "Downloads"
                            ? "bg-[#2D9AFF]/30"
                            : "bg-white sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
                        }  `}
                      >
                        {" "}
                        <h1 className="sm:text-2xl text-lg  font-robot font-bold py-1">
                          Downloads
                        </h1>
                        <p className="text-sm w-[90%]">
                          Get downloads for your app or digital product.
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setThree({ ...three, goal: "Views" })}
                      className={` p-1 border-2 inline-block w-full sm:w-[220px] rounded-xl ${
                        three.goal === "Views"
                          ? "border-2 border-[#2D9AFF]"
                          : " sm:hover:text-black"
                      } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${
                          three.goal === "Views"
                            ? "bg-[#2D9AFF]/30"
                            : "bg-white sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
                        }  `}
                      >
                        {" "}
                        <h1 className="sm:text-2xl text-lg  font-robot font-bold py-1">
                          Views
                        </h1>
                        <p className="text-sm w-[90%]">
                          Drive Traffice to your desired content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-[4%] rounded-xl pn:max-sm:px-2 bg-white">
                <div className="flex flex-col  py-2 px-[2%] w-full">
                  <div className="flex items-center gap-1">
                    <label
                      htmlFor="headline"
                      className="text-lg font-semibold py-2"
                    >
                      Headline
                    </label>
                    <div className="relative w-full cursor-pointer group">
                      <FiAlertCircle className="text-sm" />

                      <div className="absolute hidden text-black/75 bg-[#fff] shadow-lg text-sm p-2 px-4 rounded-b-xl rounded-r-xl group-hover:inline-block top-4 left-2">
                        <div className="  my-2 h-3 w-3 z-20 bg-white absolute -top-[13px] shadow-2xl left-0 -rotate-45"></div>
                        <div> This is a headline</div>
                      </div>
                    </div>
                  </div>
                  <input
                    name="myForm"
                    id="headline"
                    onChange={(e) =>
                      setThree({ ...three, Headline: e.target.value })
                    }
                    value={three.Headline}
                    type="text"
                    placeholder="Never have a bad meal"
                    className="w-full border rounded-xl outline-none p-2"
                  />
                </div>
                <div className="flex flex-col  py-2 px-[2%] w-full">
                  <div className="flex items-center gap-1">
                    <label htmlFor="des" className="text-lg font-semibold py-2">
                      Description
                    </label>
                    <div className="relative w-full cursor-pointer group">
                      <FiAlertCircle className="text-sm" />
                      <div className="absolute hidden text-black/75 bg-[#fff] shadow-lg text-sm p-2 px-4 rounded-b-xl rounded-r-xl group-hover:inline-block top-4 left-2">
                        <div className="  my-2 h-3 w-3 z-20 bg-white absolute -top-[13px] shadow-2xl left-0 -rotate-45"></div>
                        <div> This is a Description</div>
                      </div>
                    </div>
                  </div>
                  <input
                    name="myForm"
                    id="des"
                    onChange={(e) =>
                      setThree({ ...three, Description: e.target.value })
                    }
                    value={three.Description}
                    type="text"
                    placeholder="healthy and sweet dishes"
                    className="w-full border rounded-xl outline-none p-2"
                  />
                </div>
                <div className="grid sm:grid-cols-2 px-[2%] w-full grid-cols-1 sm:gap-4 py-2">
                  <div className="flex flex-col w-full group hover:rounded-[0] hover:rounded-t-2xl relative">
                    <div className="flex w-full items-center gap-1">
                      <label
                        htmlFor="action"
                        className="text-lg w-full font-semibold py-2"
                      >
                        Select Call To Action
                      </label>
                      {/* <div className="relative w-full cursor-pointer group">
                        <FiAlertCircle className="text-sm" />
                        <div className="absolute hidden text-black/75 bg-[#fff] shadow-lg text-sm p-2 px-4 rounded-b-xl rounded-r-xl group-hover:inline-block top-4 left-2">
                          <div className="  my-2 h-3 w-3 z-20 bg-white absolute -top-[13px] shadow-2xl left-0 -rotate-45"></div>
                          <div> This is a Select Call To Action</div>
                        </div>
                      </div> */}
                    </div>

                    <div
                      onClick={() => setDown(1)}
                      className="flex items-center p-2 border group-hover:rounded-[0] group-hover:rounded-t-xl rounded-xl"
                    >
                      <div
                        placeholder="Order Now"
                        className="w-full rounded-xl outline-none"
                      >
                        {three.Action}
                      </div>
                      <FaAngleDown className="mx-2 text-xl text-[#333333]" />
                    </div>

                    {three.Action && down === 0 ? (
                      <div
                        className={`absolute hidden  ${
                          down === 0
                            ? "rounded-2xl "
                            : "rounded-b-2xl group-hover:block pb-2 top-[99%] left-0 w-full bg-white border"
                        } `}
                      >
                        <div className="flex flex-col gap-3 px-3 py-3">
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Order Now" });
                            }}
                          >
                            Order Now
                          </div>
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Learn More" });
                            }}
                          >
                            Learn More
                          </div>
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Install Now" });
                            }}
                          >
                            Install Now
                          </div>
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Buy Now" });
                            }}
                          >
                            Buy Now
                          </div>
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Visit" });
                            }}
                          >
                            Visit
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        // onClick={}
                        className={`absolute hidden rounded-b-2xl group-hover:block pb-2 top-[99%] left-0 w-full bg-white border`}
                      >
                        <div className="flex flex-col gap-3 px-3 py-3">
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Order Now" });
                              setDown(0);
                            }}
                          >
                            Order Now
                          </div>
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Learn More" });
                              setDown(0);
                            }}
                          >
                            Learn More
                          </div>
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Install Now" });
                              setDown(0);
                            }}
                          >
                            Install Now
                          </div>
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Buy Now" });
                              setDown(0);
                            }}
                          >
                            Buy Now
                          </div>
                          <div
                            onClick={() => {
                              setThree({ ...three, Action: "Visit" });
                              setDown(0);
                            }}
                          >
                            Visit
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="flex w-full items-center gap-1">
                      <label
                        htmlFor="link"
                        className="text-lg w-full min-w-[230px] font-semibold py-2"
                      >
                        Paste Link To Call To Action
                      </label>
                      {/* <div className="relative flex flex-col w-full cursor-pointer group">
                        <FiAlertCircle className="text-sm" />
                        <div className="absolute hidden text-black/75 bg-[#fff] shadow-lg text-sm p-2 px-4 rounded-b-xl rounded-r-xl group-hover:inline-block top-4 left-2">
                          <div className="  my-2 h-3 w-3 z-20 bg-white absolute -top-[13px] shadow-2xl left-0 -rotate-45"></div>
                          <div> This is a Paste Link To Call To Action</div>
                        </div>
                      </div> */}
                    </div>
                    <div className="flex justify-center  rounded-xl items-center border">
                      <BsLink className="border-r-2 p-2 text-4xl " />
                      <input
                        name="myForm"
                        id="link"
                        onChange={(e) =>
                          setThree({ ...three, link: e.target.value })
                        }
                        value={three.link}
                        type="text"
                        placeholder="grovyo.com"
                        className="w-full rounded-xl rounded-l-none outline-none p-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="my-3 mb-4 flex py-2 px-[2%] flex-col space-y-2">
                  <h1 className="text-lg font-semibold">Ad images</h1>
                  {/* <div>
                  Create up to 5 ads by Selecting multiple images from the
                  library or by uploading directly.
                </div> */}
                  <div className="bg-[#F3F6F8] flex sm:flex-row flex-col justify-around py-3 rounded-2xl items-center w-full">
                    <div className="pn:max-sm:text-center pn:max-sm:w-[80%] pn:max-sm:py-2">
                      Image must be JPG, PNG, or GIF, up to 5 mb
                    </div>
                    <div className="text-[#5585FF] border pn:max-sm:w-[80%] pn:max-sm:text-center hover:border-[#5585FF] p-2 rounded-2xl">
                      <label htmlFor="files">Select and Upload</label>
                      <input
                        name="myForm"
                        onChange={(e) =>
                          setThree({
                            ...three,
                            pic: URL.createObjectURL(e.target.files[0]),
                            picname: e.target.files[0].name,
                            picsend: e.target.files[0],
                          })
                        }
                        type="file"
                        id="files"
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-2 px-[2%]">
                  <div className="bg-[#F3F6F8] py-2 px-[2%]  flex justify-between rounded-2xl items-center w-full">
                    <div className="flex justify-center overflow-hidden space-x-4 items-center">
                      <div>
                        <Image
                          width={50}
                          height={50}
                          className="max-w-[50px] max-h-[50px]"
                          src={three.pic ? three.pic : adss}
                          alt="image"
                        />
                      </div>
                      <div>
                        {three?.picname ? (
                          <>
                            {three?.picname.slice(0, 35)}
                            {three.picname.length > 35 && <>...</>}
                          </>
                        ) : (
                          "File Name"
                        )}
                      </div>
                    </div>

                    <div>
                      <AiOutlineClose className="text-2xl text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 pn:max-md:order-2 w-full sm:overflow-y-auto sm:no-scrollbar rounded-xl max-h-[780px]">
              <div className="bg-[#FAFAFA] rounded-xl w-full flex justify-center items-center">
                <div className="bg-white rounded-xl flex flex-col w-[85%] sm:w-[500px] md:w-[370px]  my-10 h-auto px-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-1 pt-2 w-full">
                      <div>
                        <img
                          width={40}
                          height={30}
                          alt={user?.fullname}
                          // alt="naam"
                          src={user?.photo}
                          // src={zm}
                          className="min-w-[40px] min-h-[40px] max-w-[60px] max-h-[60px] h-auto"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold">{user?.fullname}</div>
                        <div>Sponsored</div>
                      </div>
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>

                  <img
                    src={three?.pic ? three?.pic : adss}
                    width={350}
                    height={200}
                    alt="image"
                    className="w-auto h-auto object-cover"
                  />

                  <div className="py-1">
                    {" "}
                    {three.Headline != ""
                      ? three.Headline
                      : "Never have a bad meal"}
                  </div>
                  <div className="py-1">
                    {" "}
                    {three.Description != ""
                      ? three.Description
                      : "healthy and sweet dishes"}
                  </div>

                  <button className="text-white bg-black p-2 my-3 rounded-xl">
                    {three.Action != "" ? three.Action : "Order Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second step */}

      <div className={`${step === 1 ? null : "hidden"}`}>
        <div className="grid bg-[#F8F8F8] grid-cols-1 pn:max-md:hidden">
          <div className="flex bg-white flex-col ">
            <div className=" sticky top-0 z-50">
              <div className="flex bg-white w-full justify-between items-center px-5 py-4">
                <div className="text-[#555555] text-xl font-semibold">
                  Set up a new Ad
                </div>
                <div className="flex justify-center items-center gap-3 ">
                  <div
                    onClick={() => setStep(0)}
                    className="border-b cursor-pointer border-black"
                  >
                    Discard
                  </div>

                  {isdatavalid ? (
                    <div
                      className="p-2 px-7 rounded-full cursor-pointer bg-[#2D9AFF] text-white"
                      onClick={() => setStep(2)}
                    >
                      Next
                    </div>
                  ) : (
                    <div className="p-2 px-7 rounded-full bg-[#b3bbc3] text-white">
                      Next
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex justify-center bg-[#fafafa] pt-5 py-3 mt-3">
                  <div className=" flex flex-col justify-center items-center">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        step >= 0
                          ? "bg-[#27AE60] border-2 text-white"
                          : "text-white"
                      }`}
                    >
                      {step >= 1 ? (
                        <BsCheckLg className="text-lg font-bold" />
                      ) : (
                        1
                      )}
                    </div>

                    <div
                      className={` flex items-center font-semibold flex-col ${
                        step > 1 ? "text-blue-600 " : "text-[#27AE60]"
                      }`}
                    >
                      Set up Ad
                    </div>
                  </div>

                  <div
                    className={`border-[#f9f9f9] border-dashed border-t-2 w-20 mt-5 ${
                      step >= 0 ? "border-black " : "border-black "
                    }`}
                  />

                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${
                        step >= 1
                          ? "bg-blue-600 text-white"
                          : "bg-green-300 text-white"
                      }`}
                    >
                      2
                    </div>

                    <div
                      className={` flex items-center flex-col ${
                        step >= 1 ? "text-blue-600 " : "text-green-300"
                      }`}
                    >
                      Select target
                    </div>
                  </div>
                  <div
                    className={`border-[#f9f9f9] border-dashed border-t-2 w-20  mt-5 ${
                      step >= 1 ? "border-black " : "border-black "
                    }`}
                  />
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${
                        step >= 2
                          ? "bg-blue-600 text-white"
                          : "border-4 border-black "
                      }`}
                    >
                      3
                    </div>

                    <div
                      className={`flex items-center flex-col justify-center ${
                        step === 2 ? "text-blue-600 " : "text-black"
                      }`}
                    >
                      Preview & Launch
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center max-h-[800px] bg-[#fafafa] gap-9 px-[2%] pn:max-md:hidden">
              <div
                className={`${styles.customScrollbar} pn:max-md:hidden md:w-[900px] overflow-y-scroll bg-[#F0F2F5] border-2 my-4 rounded-2xl py-5 px-5`}
              >
                <h1 className="sm:text-3xl text-xl font-semibold py-2">
                  Select Target
                </h1>
                <div className="bg-white my-3 px-[2%] select-none py-2 rounded-xl ">
                  <h2 className="sm:text-xl text-lg font-semibold py-2">
                    Select Optimal section for effective advertising
                  </h2>
                  <div className="flex flex-wrap gap-3 my-4">
                    <div
                      onClick={() => toggleType("infeed")}
                      className={` flex flex-col justify-center border relative  p-2 z-0  items-center min-w-[150px] max-w-[250px] rounded-lg ${
                        three.type.includes("infeed")
                          ? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
                          : ""
                      }`}
                    >
                      <div>
                        <Image
                          src={feed}
                          className="w-[90px] h-[90px]"
                          alt="infeed"
                        />
                      </div>
                      <div className="font-medium py-2">In Feed Ads</div>
                      {three.type.includes("infeed") && (
                        <div className={`absolute -top-2 -right-2 z-50`}>
                          <AiFillCheckCircle className="text-blue-600 z-50 text-xl" />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => toggleType("search")}
                      className={` flex flex-col justify-center border relative  p-2 z-0 items-center min-w-[150px] max-w-[250px] rounded-lg ${
                        three.type.includes("search")
                          ? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
                          : ""
                      }`}
                    >
                      <div>
                        <Image
                          src={video}
                          className="w-[90px] h-[90px]"
                          alt="search"
                        />
                      </div>
                      <div className="font-medium py-2">Search</div>
                      {three.type.includes("search") && (
                        <div className={`absolute -top-2 -right-2`}>
                          <AiFillCheckCircle className="text-blue-600 text-xl" />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => toggleType("videoads")}
                      className={` flex flex-col justify-center border relative  p-2 z-0  items-center min-w-[150px] max-w-[250px] rounded-lg ${
                        three.type.includes("videoads")
                          ? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
                          : ""
                      }`}
                    >
                      <div>
                        <Image
                          src={search}
                          className="w-[90px] h-[90px]"
                          alt="video"
                        />
                      </div>{" "}
                      <div className="font-medium py-2">Video Ads</div>
                      {three.type.includes("videoads") && (
                        <div className={`absolute -top-2 -right-2`}>
                          <AiFillCheckCircle className="text-blue-600 text-xl" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="my-[4%] rounded-xl">
                  <div className="py-3 px-[2%] rounded-t-xl bg-white relative">
                    <h1 className="text-lg py-1 font-medium">Category</h1>
                    <div className="w-full flex justify-center items-center rounded-xl border ">
                      <BiMap className="border-r-2 p-2 text-4xl" />
                      <div
                        placeholder="Select a Category"
                        className="w-full rounded-xl p-2 outline-none "
                      >
                        {three.category}
                      </div>
                    </div>

                    <div className="relative overflow-y-scroll my-3 no-scrollbar w-[360px] h-[230px]">
                      <div>
                        <div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-white">
                          <div className="text-sm text-[#6B778C] mb-2 pb-2">
                            Categories{" "}
                          </div>
                          <div className="flex flex-col gap-2">
                            {PointsCategory?.map((data, i) => (
                              <div
                                key={i}
                                className="flex items-center z-20 gap-2"
                              >
                                <input
                                  type="radio"
                                  name="mycategory"
                                  onChange={() =>
                                    handleCategoryChange(
                                      data.name,
                                      data.points,
                                      data.audienceByCategory,
                                      data.ctr
                                    )
                                  }
                                  checked={data.name === three.category}
                                />

                                <div className="text-lg font-medium">
                                  {data.name}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-2 px-[2%] bg-white rounded-b-xl relative">
                    <h1 className="text-lg py-1 font-medium">Enter Tags</h1>
                    <div className="w-full flex justify-center items-center  rounded-xl border ">
                      <BiMap className="border-r-2 p-2 text-4xl" />
                      <input
                        name="myForm"
                        type="text"
                        onChange={(e) => {
                          setT(e.target.value);
                        }}
                        onKeyPress={(e) => {
                          if (!t) return;
                          else if (three?.tags?.length < 5) {
                            if (e.key === "Enter") {
                              setThree((three) => ({
                                ...three,
                                tags: [...three.tags, e.target.value],
                              }));
                              setT("");
                            }
                          } else {
                            if (e.key === "Enter") {
                              setT(e.target.value);
                            }
                          }
                        }}
                        value={t}
                        placeholder="tags"
                        className="w-full rounded-xl p-2 outline-none "
                      />
                    </div>
                    {three?.tags?.length >= 5 && t !== "" && (
                      <>
                        <div className="text-sm font-medium py-3 text-red-500">
                          Cant insert more than 5 tags
                        </div>
                      </>
                    )}
                    <div className="flex  flex-wrap items-center gap-2 my-3">
                      {three?.tags?.map((f, g) => (
                        <div
                          key={g}
                          className="flex justify-center items-center gap-2 bg-[#FAFAFA] p-2 px-3 rounded-full"
                        >
                          <div>{f}</div>
                          <div
                            onClick={() => {
                              setThree((three) => ({
                                ...three,
                                tags: three.tags.filter((_, h) => h !== g),
                              }));
                            }}
                          >
                            <AiOutlineClose className="text-white bg-black rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-[#5585FF] text-[13px] mt-2">
                      Note: Enter tags that your audience interested in..
                    </div>
                  </div>
                </div>

                <div className="my-[4%] rounded-xl py-2 px-[2%] bg-white">
                  <h1 className="text-2xl font-semibold py-2">
                    Target Audience
                  </h1>

                  <div>
                    <h1 className="text-lg py-1 font-medium">
                      Location
                      <span className="text-[#FF4444]">*</span>
                    </h1>
                    <div className="w-full flex justify-center items-center rounded-xl border">
                      <BiMap className="border-r-2 p-2 text-4xl" />
                      <input
                        name="selectinput"
                        type="text"
                        onChange={() => {}}
                        placeholder="Enter the location to target audience"
                        className="w-full rounded-xl p-2 outline-none"
                        value={inputValue}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            if (inputValue && three.location.length < 3) {
                              setThree((prevState) => ({
                                ...prevState,
                                location: [...prevState.location, inputValue],
                              }));
                              setInputValue("");
                            }
                          }
                        }}
                      />
                    </div>

                    <div>
                      {three.location.length >= 3 && inputValue !== "" && (
                        <>
                          <div className="text-sm font-medium py-2 text-red-500">
                            Cant insert more than 3 locations
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex items-center flex-wrap gap-2 my-3 mb-4">
                      {three?.location?.map((m, i) => (
                        <div
                          key={i}
                          className="flex justify-center items-center gap-2 bg-[#FAFAFA] p-2 px-3 rounded-full "
                        >
                          <div>{m}</div>
                          <div
                            onClick={() => {
                              setThree((three) => ({
                                ...three,
                                location: three.location.filter(
                                  (_, a) => a !== i
                                ),
                              }));
                            }}
                          >
                            <AiOutlineClose className="text-white bg-black rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="relative overflow-y-scroll no-scrollbar w-[360px] h-[230px]">
                      <div>
                        <div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-white">
                          <div className="text-sm text-[#6B778C] mb-2 pb-2">
                            Trending tags related to Tech{" "}
                          </div>
                          <div className="flex flex-col gap-2">
                            {myLocation.map((l, i) => (
                              <div key={i} className="flex items-center gap-1">
                                <input
                                  name={i}
                                  type="checkbox"
                                  onClick={handleCheckboxClick}
                                  checked={three.location.includes(l.name)}
                                  onChange={(event) => {
                                    const isChecked = event.target.checked;
                                    if (isChecked) {
                                      // If checkbox is checked, set the value to the input field
                                      setInputValue(l.name);
                                    } else {
                                      // If checkbox is unchecked, clear the input field and remove from location array
                                      setInputValue("");
                                      setThree((prevState) => ({
                                        ...prevState,
                                        location: prevState.location.filter(
                                          (item) => item !== l.name
                                        ),
                                      }));
                                    }
                                  }}
                                />

                                <div className="font-medium">{l.name}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[#5585FF] text-[13px] my-2">
                      Note: Prices may fluctuate depending on factors such as
                      traffic, weather conditions, events etc..
                      <span className="text-[#5585FF] mx-1">Learn more</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold py-2">Gender</h1>

                    <div className="flex flex-wrap gap-2 items-center">
                      <div
                        onClick={() => {
                          setThree({ ...three, gender: "Men" });
                        }}
                        className={`p-2 px-6 rounded-full ${
                          three.gender === "Men"
                            ? "text-white bg-blue-500"
                            : "border border-black"
                        } `}
                      >
                        Men
                      </div>
                      <div
                        onClick={() => {
                          setThree({ ...three, gender: "Women" });
                        }}
                        className={`p-2 px-6 rounded-full ${
                          three.gender === "Women"
                            ? "text-white bg-blue-500"
                            : "border border-black"
                        } `}
                      >
                        Women
                      </div>
                      <div
                        onClick={() => {
                          setThree({ ...three, gender: "Both" });
                        }}
                        className={`p-2 px-6  rounded-full ${
                          three.gender === "Both"
                            ? "text-white bg-blue-500"
                            : "border border-black"
                        } `}
                      >
                        Both
                      </div>
                    </div>

                    <div className="my-3">
                      <h1 className="font-semibold py-2">Age Group</h1>
                      <div className="flex space-x-4 items-center">
                        <div className="flex justify-center items-center space-x-1">
                          <input
                            onClick={() => {
                              setCLick(0);
                              setThree({
                                ...three,
                                selectedAgeRange: "",
                                age: "All age group",
                                maxage: "",
                                minage: "",
                              });
                            }}
                            type="radio"
                            name="age"
                          />
                          <div className="font-semibold ">All Age Groups</div>
                        </div>
                        <div className="flex justify-center items-center space-x-1">
                          <input
                            onClick={() => {
                              myAgeHandle();
                            }}
                            type="radio"
                            name="age"
                            id="ageweb"
                          />
                          <div className="font-semibold">Age Range</div>
                        </div>
                      </div>
                      <div className={`${click === 1 ? null : "hidden"}`}>
                        <label className="font-medium my-2" htmlFor="ageRange">
                          Select Age Range:
                        </label>
                        <select
                          id="ageRange"
                          className="p-1 border outline-none rounded-lg border-[#e6e6e6] mx-1 my-2"
                          name="ageRange"
                          value={three.selectedAgeRange}
                          onChange={handleAgeRangeChange}
                        >
                          <option value="12-18">12-18</option>
                          <option value="19-40">19-40</option>
                          <option value="41-65">41-65</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[4%] rounded-xl py-3 px-[2%] bg-white">
                  <div>
                    <h1 className="text-2xl font-semibold">
                      Schedule and duration
                    </h1>
                    <div className="grid grid-cols-2 w-full gap-4 py-2">
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="sdate"
                          className="text-lg font-semibold py-2"
                        >
                          Start Date<span className="text-[#FF4444]">*</span>
                        </label>
                        <input
                          name="myForm"
                          id="sdate"
                          type="date"
                          onChange={(e) =>
                            setThree({
                              ...three,
                              startDate: e.target.value,
                            })
                          }
                          value={formastStartDate}
                          placeholder="Enter Campaign Name"
                          className="w-full border rounded-xl outline-none p-2"
                        />
                      </div>
                      {/* <div
                        className={`${
                          date ? "flex flex-col space-y-1" : "hidden"
                        }`}
                      >
                        <label
                          htmlFor="edate"
                          className="text-lg font-semibold py-2"
                        >
                          End Date<span className="text-[#FF4444]">*</span>
                        </label>
                        <input
                          name="myForm"
                          id="edate"
                          onChange={(e) =>
                            setThree({
                              ...three,
                              endDate: e.target.value,
                            })
                          }
                          value={formastEndDate}
                          type="date"
                          placeholder="Enter Campaign Name"
                          className="w-full border rounded-xl outline-none p-2"
                        />
                        {formastEndDate < formastStartDate && (
                          <div className="text-sm text-red-700">
                            Please Enter a Valid Enddate
                          </div>
                        )}
                      </div> */}
                      {/* <div className="flex flex-col relative top-1 w-full gap-2">
                        <label
                          htmlFor="dbudget"
                          className="text-lg font-semibold"
                        >
                          Daily Budget
                        </label>
                        <div className="flex justify-center rounded-xl items-center border">
                          <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
                          <input
                            id="dbudget"
                            onChange={(e) =>
                              setThree({
                                ...three,
                                DailyBudget: e.target.value,
                              })
                            }
                            value={three.DailyBudget}
                            type="number"
                            placeholder="Enter Daily Budget"
                            className="w-full px-2 rounded-xl outline-none"
                          />
                        </div>
                      </div> */}
                    </div>

                    <div className="my-[2%]">
                      <h1 className="text-lg py-2 font-semibold">
                        Select Ad Duration
                      </h1>
                      <div className="flex flex-wrap my-2 gap-4">
                        <div
                          onClick={() => setThree({ ...three, duration: 1 })}
                          className={`${
                            three.duration == 1
                              ? "bg-[#2D9AFF] text-white"
                              : "border border-black"
                          } p-1 px-5 rounded-full`}
                        >
                          1 day
                        </div>
                        <div
                          onClick={() => setThree({ ...three, duration: 7 })}
                          className={`${
                            three.duration === 7
                              ? "bg-[#2D9AFF] text-white"
                              : "border border-black"
                          } p-1 px-5 rounded-full`}
                        >
                          7 days
                        </div>
                        <div
                          onClick={() => setThree({ ...three, duration: 30 })}
                          className={`${
                            three.duration === 30
                              ? "bg-[#2D9AFF] text-white"
                              : "border  border-black"
                          } p-1 px-5 rounded-full`}
                        >
                          30 days
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-col gap-1">
                    <div className="flex gap-2 my-2 items-center">
                      <input
                        name="myFormzpp"
                        id="258"
                        type="radio"
                        onChange={() => {
                          setDate(false);
                        }}
                        className="w-4 h-4"
                        checked={!date}
                      />
                      <div className="flex flex-col">
                        <div className="font-medium">
                          Run this ad Continuously
                        </div>
                        <div>
                          Your ad will run continuously for a daily budget. This
                          option is recommended. Learn more
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 my-2 items-center">
                      <input
                        name="myFormzder"
                        id="234"
                        type="radio"
                        onChange={() => {}}
                        onClick={() => {
                          setDate(true);
                          setThree({ ...three, endDate: "" });
                        }}
                        checked={date}
                        className="w-4 h-4"
                      />
                      <div className="font-medium">
                        Choose When this Ad Will End
                      </div>
                    </div>
                  </div> */}
                  {/* <div>
                    <h1 className="text-2xl font-semibold">Budget</h1>
                    <div className="grid grid-cols-2 gap-4 py-3">
                      <div className="flex flex-col space-y-1">
                        <label
                          htmlFor="tbudget"
                          className="text-lg font-semibold"
                        >
                          Total Budget
                        </label>
                        <div className="flex justify-center  rounded-xl items-center border">
                          <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
                          <input
                            id="tbudget"
                            name="myForm"
                            onChange={(e) =>
                              setThree({
                                ...three,
                                TotalBudget: e.target.value,
                              })
                            }
                            value={three.TotalBudget}
                            type="text"
                            placeholder="Enter Total Budget"
                            className="w-full rounded-xl outline-none p-2"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </div> */}
                </div>
                {/* <div className="lg:min-w-[700px] bg-white my-4 rounded-2xl py-5 px-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="font-bold">Payment Details</div>
                      
                    </div>
                    <div className="bg-[#FAFAFA] p-5 rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Ad Budget</div>
                          <div>₹ 10,000.00</div>
                        </div>
                

                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Taxes and Charges</div>
                          <div>₹ 1800</div>
                        </div>
                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Total</div>
                          <div className="font-semibold">₹ 10,800</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex flex-col items-center">
                <Square3 display={ProperAudience ? ProperAudience : 0} />
                <Square4
                  ctr={ctr ? ctr : 0}
                  duration={three.duration ? three.duration : 1}
                  price={pricebyDay ? pricebyDay : 0}
                  daily={totalPrice ? totalPrice : 0}
                  display={ProperAudience ? ProperAudience : 0}
                />
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="md:hidden">
          <div className="flex bg-white flex-col py-2">
            <div className="fixed left-0 w-full top-0 z-50">
              <div className="flex bg-white justify-between px-5 items-center py-4 shadow-md">
                <div className="text-[#555555] text-xl font-semibold">
                  Ad SetUp
                </div>
                <div className="flex justify-center items-center gap-3 ">
                  <div
                    onClick={() => setStep(0)}
                    className="border-b hidden cursor-pointer border-black"
                  >
                    Discard
                  </div>

                  {isdatavalid ? (
                    <div
                      onClick={() => setStep(2)}
                      className="p-2 px-7 rounded-full cursor-pointer bg-[#2D9AFF] text-white"
                    >
                      Next
                    </div>
                  ) : (
                    <div className="p-2 px-7 rounded-full bg-[#b3bbc3] text-white">
                      Next
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div
                  style={{ marginTop: "4rem" }}
                  className="flex justify-center bg-[#fafafa] pt-5 py-3 mt-3 pn:max-sm:text-xs text-center px-3"
                >
                  <div className=" flex flex-col gap-1 justify-center items-center">
                    <div
                      className={` h-10 w-10 rounded-full mr-2 flex items-center justify-center ${
                        step >= 0 ? "bg-[#27AE60] text-white" : ""
                      }`}
                    >
                      {step > 0 ? (
                        <BsCheckLg className="font-bold text-lg" />
                      ) : (
                        1
                      )}
                    </div>

                    <div
                      className={` flex items-center font-semibold flex-col ${
                        step >= 0 ? "text-[#27AE60]" : ""
                      }`}
                    >
                      Set up Ad
                    </div>
                  </div>

                  <div
                    className={`border-[#f9f9f9] border-dashed border-t-2 pn:max-sm:w-10 sm:w-20 mt-5 ${
                      step >= 0 ? "border-black " : "border-black"
                    }`}
                  />

                  <div className="flex flex-col gap-1 justify-center items-center">
                    <div
                      className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${
                        step >= 1
                          ? "bg-blue-600 text-white"
                          : "bg-green-300 text-white"
                      }`}
                    >
                      2
                    </div>

                    <div
                      className={` flex items-center flex-col ${
                        step >= 1 ? "text-blue-600 " : "text-green-300"
                      }`}
                    >
                      Select target
                    </div>
                  </div>
                  <div
                    className={`border-[#f9f9f9] border-dashed border-t-2  pn:max-sm:w-10 sm:w-20 mt-5 ${
                      step >= 1 ? "border-blue-600 " : "border-green-300"
                    }`}
                  />
                  <div className="flex flex-col gap-1 -ml-4 justify-center items-center">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        step >= 2
                          ? "bg-blue-600 text-white"
                          : "border-black border-2 "
                      }`}
                    >
                      3
                    </div>

                    <div
                      className={` flex items-center flex-col justify-center ${
                        step === 2 ? "text-blue-600 " : "text-black"
                      }`}
                    >
                      Preview & Launch
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex flex-col">
                <Square3 display={ProperAudience ? ProperAudience : 0} />
                <Square4
                  ctr={ctr ? ctr : 0}
                  duration={three.duration ? three.duration : 1}
                  price={pricebyDay ? pricebyDay : 0}
                  daily={totalPrice ? totalPrice : 0}
                  display={ProperAudience ? ProperAudience : 0}
                />
              </div>

              <div className="w-full md:hidden bg-[#F0F2F5] my-4 rounded-2xl py-5 px-2">
                <h1 className="text-2xl font-semibold py-2 px-2">
                  Select Target
                </h1>
                <div className="my-2 bg-white p-3 rounded-xl">
                  <div>
                    <h2 className="text-xl font-semibold py-2">
                      Select Optimal section for
                      <br className="sm:hidden" /> effective advertising
                    </h2>
                    <div className="flex flex-wrap gap-3 my-4">
                      <div
                        onClick={() => toggleType("infeed")}
                        className={` flex flex-col justify-center border relative  p-2 z-0  items-center min-w-[150px] max-w-[250px] rounded-lg ${
                          three.type.includes("infeed")
                            ? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
                            : ""
                        }`}
                      >
                        <div>
                          <Image
                            src={feed}
                            className="w-[90px] h-[90px]"
                            alt="infeed"
                          />
                        </div>
                        <div className="font-medium py-2">In Feed Ads</div>
                        {three.type.includes("infeed") && (
                          <div className={`absolute -top-2 -right-2 z-50`}>
                            <AiFillCheckCircle className="text-blue-600 z-50 text-xl" />
                          </div>
                        )}
                      </div>
                      <div
                        onClick={() => toggleType("search")}
                        className={` flex flex-col justify-center border relative  p-2 z-0 items-center min-w-[150px] max-w-[250px] rounded-lg ${
                          three.type.includes("search")
                            ? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
                            : ""
                        }`}
                      >
                        <div>
                          <Image
                            src={video}
                            className="w-[90px] h-[90px]"
                            alt="search"
                          />
                        </div>
                        <div className="font-medium py-2">Search</div>
                        {three.type.includes("search") && (
                          <div className={`absolute -top-2 -right-2`}>
                            <AiFillCheckCircle className="text-blue-600 text-xl" />
                          </div>
                        )}
                      </div>
                      <div
                        onClick={() => toggleType("videoads")}
                        className={` flex flex-col justify-center border relative  p-2 z-0  items-center min-w-[150px] max-w-[250px] rounded-lg ${
                          three.type.includes("videoads")
                            ? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
                            : ""
                        }`}
                      >
                        <div>
                          <Image
                            src={search}
                            className="w-[90px] h-[90px]"
                            alt="video"
                          />
                        </div>{" "}
                        <div className="font-medium py-2">Video Ads</div>
                        {three.type.includes("videoads") && (
                          <div className={`absolute -top-2 -right-2`}>
                            <AiFillCheckCircle className="text-blue-600 text-xl" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl">
                  <div className="my-5 bg-white p-3 rounded-xl">
                    <div className="my-1 relative">
                      <h1 className="text-lg py-1 font-medium">Category</h1>
                      <div className="w-full flex justify-center items-center rounded-xl border ">
                        <BiMap className="border-r-2 p-2 text-4xl" />
                        <div
                          placeholder="Select a Category"
                          className="w-full rounded-xl p-2 outline-none "
                        >
                          {three.category}
                        </div>
                      </div>

                      <div className="relative overflow-y-scroll my-5 no-scrollbar w-[360px] h-[230px]">
                        <div>
                          <div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-white">
                            <div className="text-sm text-[#6B778C] mb-2 pb-2">
                              Trending Categories
                            </div>
                            <div className="flex flex-col gap-2">
                              {PointsCategory?.map((data, i) => (
                                <div
                                  key={i}
                                  className="flex items-center z-20 gap-2"
                                >
                                  <input
                                    type="radio"
                                    name="categoryss"
                                    onChange={() =>
                                      handleCategoryChange(
                                        data.name,
                                        data.points,
                                        data.audienceByCategory,
                                        data.ctr
                                      )
                                    }
                                    checked={data.name === three.category}
                                  />
                                  <div className="text-lg font-medium">
                                    {data.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="my-2">
                        <h1 className="text-lg py-1 font-medium">Enter Tags</h1>
                        <div className="border flex justify-between items-center rounded-xl">
                          <div className="flex justify-center  items-center">
                            <BiMap className="text-3xl  px-1" />
                            <input
                              name="myForm"
                              type="text"
                              onChange={(e) => {
                                setT(e.target.value);
                              }}
                              value={t}
                              placeholder="tags"
                              className="outline-none border-l-2 rounded-l-none p-2 rounded-xl"
                            />
                          </div>
                          <div className="bg-[#2D9AFF] p-2 px-3 font-bold text-xl rounded-r-xl text-white">
                            <button
                              onClick={() => {
                                if (t && three?.tags?.length < 5) {
                                  setThree((three) => ({
                                    ...three,
                                    tags: [...three.tags, t],
                                  }));
                                  setT("");
                                }
                              }}
                            >
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        {three?.tags?.length >= 5 && t !== "" && (
                          <>
                            <div className="text-sm font-medium py-3  text-red-500">
                              Cant insert more than 5 tags
                            </div>
                          </>
                        )}
                      </div>

                      <div className="flex  flex-wrap items-center gap-2 my-3">
                        {three?.tags?.map((f, g) => (
                          <div
                            key={g}
                            className="flex justify-center items-center gap-2 p-2 px-3 bg-[#fafafa] rounded-full"
                          >
                            <div>{f}</div>
                            <div
                              onClick={() => {
                                setThree((three) => ({
                                  ...three,
                                  tags: three.tags.filter((_, h) => h !== g),
                                }));
                              }}
                            >
                              <AiOutlineClose className="text-white bg-black rounded-full" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* <div className="relative overflow-y-scroll no-scrollbar w-[330px] h-[230px]">
                        <div>
                          <div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-white">
                            <div className="text-sm text-[#6B778C] mb-2 pb-2">
                              Trending tags related to Tech{" "}
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Artificial Intelligence - AI
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Vertual Reality - VR{" "}
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Robotics & Autonomous Systems{" "}
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Data Privacy & Protection
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Internet of Things - IOT
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      <div className="text-[#5585FF] text-[13px] my-2">
                        Note: Enter tags that your audience interested in..
                      </div>
                    </div>
                  </div>

                  <div className="my-5 bg-white p-3 rounded-xl">
                    <h1 className="text-2xl font-semibold py-2">
                      Target Audience
                    </h1>

                    <div>
                      <h1 className="text-xl py-1 font-medium">
                        Location<span className="text-[#FF4444]">*</span>
                      </h1>
                      <div className="w-full flex justify-center items-center rounded-xl border ">
                        <BiMap className="border-r-2 p-2 text-4xl" />
                        <input
                          name="myFrm"
                          type="text"
                          onChange={() => {}}
                          placeholder="Enter the location to target audience"
                          className="w-full rounded-xl p-2 outline-none"
                          onKeyPress={(e) => {
                            const inputValue = e.target.value;
                            if (!inputValue) return;
                            if (
                              e.key === "Enter" &&
                              three?.location?.length < 3
                            ) {
                              setThree((prevState) => ({
                                ...prevState,
                                location: [...prevState.location, inputValue],
                              }));
                              e.target.value = "";
                            }
                          }}
                        />
                      </div>

                      <div className="">
                        {three.location.length >= 3 && (
                          <>
                            <div className="text-sm font-medium py-2 text-red-500">
                              Max location reached
                            </div>
                          </>
                        )}
                      </div>

                      <div className="flex items-center flex-wrap gap-2 my-2">
                        {three?.location?.map((m, i) => (
                          <div
                            key={i}
                            className="flex justify-center items-center gap-2 p-2 px-3 bg-[#fafafa] rounded-full "
                          >
                            <div>{m}</div>
                            <div
                              onClick={() => {
                                setThree((three) => ({
                                  ...three,
                                  location: three.location.filter(
                                    (_, a) => a !== i
                                  ),
                                }));
                              }}
                            >
                              <AiOutlineClose className="text-white bg-black rounded-full" />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="relative overflow-y-scroll no-scrollbar w-[330px] h-[230px]">
                        <div>
                          <div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-white">
                            <div className="text-sm text-[#6B778C] mb-2 pb-2">
                              Trending tags related to Tech{" "}
                            </div>
                            <div className="flex flex-col gap-2">
                              {myLocation.map((l, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-1"
                                >
                                  <input
                                    name={i}
                                    type="checkbox"
                                    checked={three.location.includes(l.name)}
                                    onChange={(event) => {
                                      const isChecked = event.target.checked;
                                      if (
                                        isChecked &&
                                        three.location.length < 3
                                      ) {
                                        // If checkbox is checked and less than 3 locations are selected, add the value to the location array
                                        setThree((prevState) => ({
                                          ...prevState,
                                          location: [
                                            ...prevState.location,
                                            l.name,
                                          ],
                                        }));
                                      } else if (!isChecked) {
                                        // If checkbox is unchecked, remove the value from the location array
                                        setThree((prevState) => ({
                                          ...prevState,
                                          location: prevState.location.filter(
                                            (item) => item !== l.name
                                          ),
                                        }));
                                      }
                                    }}
                                  />
                                  <div className="font-medium">{l.name}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-[#5585FF] text-[13px] my-2">
                        Note: Prices may fluctuate depending on factors such as
                        traffic, weather conditions, events etc..
                        <span className="text-[#5585FF] mx-1">Learn more</span>
                      </div>
                    </div>
                    <h1 className="font-semibold py-2">Gender</h1>

                    <div className="flex flex-wrap gap-2 items-center">
                      <div
                        onClick={() => {
                          setThree({ ...three, gender: "Men" });
                        }}
                        className={`p-2 px-6 rounded-full ${
                          three.gender === "Men"
                            ? "text-white bg-blue-500"
                            : "border border-black"
                        } `}
                      >
                        Men
                      </div>
                      <div
                        onClick={() => {
                          setThree({ ...three, gender: "Women" });
                        }}
                        className={`p-2 px-6 rounded-full ${
                          three.gender === "Women"
                            ? "text-white bg-blue-500"
                            : "border border-black"
                        } `}
                      >
                        Women
                      </div>
                      <div
                        onClick={() => {
                          setThree({ ...three, gender: "Both" });
                        }}
                        className={`p-2 px-6  rounded-full ${
                          three.gender === "Both"
                            ? "text-white bg-blue-500"
                            : "border border-black"
                        } `}
                      >
                        Both
                      </div>
                    </div>

                    {/* <div className="my-2">
                      <h1 className="font-semibold py-2">Age Group</h1>
                      <div className="flex space-x-4 items-center">
                        <div className="flex justify-center items-center space-x-1">
                          <input
                            onClick={() => {
                              setCLick(0);
                              setThree({
                                ...three,
                                selectedAgeRange: "",
                                age: "All age group",
                                maxage: "",
                                minage: "",
                              });
                            }}
                            type="radio"
                            name="age"
                            id="ages"
                          />
                          <label className="font-semibold " htmlFor="ages">
                            All Age Groups
                          </label>
                        </div>
                        <div className="flex justify-center items-center space-x-1">
                          <input
                            onClick={() => {
                              myAgeHandle();
                            }}
                            type="radio"
                            id="RadioAge"
                          />
                          <label className="font-semibold " htmlFor="RadioAge">
                            Age Range
                          </label>
                        </div>
                      </div>
                      <div className={`${click === 1 ? null : "hidden"}`}>
                        <label
                          className="font-medium my-2"
                          htmlFor="myAgeRange"
                        >
                          Select Age Range:
                        </label>
                        <select
                          id="myAgeRange"
                          className="p-1 border outline-none rounded-lg border-[#e6e6e6] mx-1 my-2"
                          name="myAgeRange"
                          value={three.selectedAgeRange}
                          onChange={handleAgeRangeChange}
                        >
                          <option value="12-18">12-18</option>
                          <option value="19-40">19-40</option>
                          <option value="41-65">41-65</option>
                        </select>
                      </div>
                    </div> */}

                    <div className="my-2">
                      <h1 className="font-semibold py-2">Age Group</h1>
                      <div className="flex space-x-4 items-center">
                        <div className="flex justify-center items-center space-x-1">
                          <input
                            onClick={() => {
                              setCLick(0);
                              setThree({
                                ...three,
                                selectedAgeRange: "",
                                age: "All age group",
                                maxage: "",
                                minage: "",
                              });
                            }}
                            type="radio"
                            name="ageofmobile"
                            id="mobilekiage"
                          />
                          <div className="font-semibold " htmlFor="age">
                            All Age Groups
                          </div>
                        </div>
                        <div className="flex justify-center items-center space-x-1">
                          <input
                            onClick={() => {
                              myAgeHandle();
                            }}
                            type="radio"
                            name="ageofmobile"
                            id="agedmobile"
                          />
                          <div className="font-semibold " htmlFor="age">
                            Age Range
                          </div>
                        </div>
                      </div>
                      <div className={`${click === 1 ? "my-1" : "hidden"}`}>
                        <label className="font-medium my-2" htmlFor="ageRange">
                          Select Age Range:
                        </label>
                        <select
                          id="ageRange"
                          className="p-1 border outline-none rounded-lg border-[#e6e6e6] mx-1 my-2"
                          name="ageRangemobile"
                          value={three.selectedAgeRange}
                          onChange={handleAgeRangeChange}
                        >
                          <option value="12-18">12-18</option>
                          <option value="19-40">19-40</option>
                          <option value="41-65">41-65</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="my-[4%] rounded-xl py-3 px-[2%] bg-white">
                    <div>
                      <h1 className="text-2xl font-semibold">
                        Schedule and duration
                      </h1>
                      <div className="grid sm:grid-cols-2 gap-4 py-2">
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="sdate"
                            className="text-lg font-semibold py-2"
                          >
                            Start Date<span className="text-[#FF4444]">*</span>
                          </label>
                          <input
                            name="myForm"
                            id="sdate"
                            type="date"
                            onChange={(e) =>
                              setThree({
                                ...three,
                                startDate: e.target.value,
                              })
                            }
                            value={formastStartDate}
                            placeholder="Enter Campaign Name"
                            className="w-full border rounded-xl outline-none p-2"
                          />
                        </div>
                        {/* <div
                          className={`${
                            date ? "flex flex-col space-y-1" : "hidden"
                          }`}
                        >
                          <label
                            htmlFor="edate"
                            className="text-lg font-semibold py-2"
                          >
                            End Date<span className="text-[#FF4444]">*</span>
                          </label>
                          <input
                            name="myForm"
                            id="edate"
                            onChange={(e) =>
                              setThree({
                                ...three,
                                endDate: e.target.value,
                              })
                            }
                            value={formastEndDate}
                            type="date"
                            placeholder="Enter Campaign Name"
                            className="w-full border rounded-xl outline-none p-2"
                          />
                          {formastEndDate < formastStartDate && (
                            <div className="text-sm text-red-700">
                              Please Enter a Valid Enddate
                            </div>
                          )}
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="flex flex-col gap-1">
                      <div className="flex gap-2 my-2 items-center">
                        <input
                          name="mpypFormzpp"
                          id="2529346758"
                          type="radio"
                          onChange={() => {
                            setDate(false);
                          }}
                          className="w-4 h-4"
                          checked={!date}
                        />
                        <div className="flex flex-col">
                          <div className="font-medium">
                            Run this ad Continuously
                          </div>
                          <div>
                            Your ad will run continuously for a daily budget.
                            This option is recommended. Learn more
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 my-2 items-center">
                        <input
                          name="myFormerloi"
                          id="234123565"
                          type="radio"
                          onChange={() => {}}
                          onClick={() => {
                            setDate(true);
                            setThree({ ...three, endDate: "" });
                          }}
                          checked={date}
                          className="w-4 h-4"
                        />
                        <div className="font-medium">
                          Choose When this Ad Will End
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="flex flex-col my-1 gap-1">
                      <label
                        htmlFor="dbudget"
                        className="text-lg font-semibold"
                      >
                        Daily Budget
                      </label>
                      <div className="flex justify-center  rounded-xl items-center border">
                        <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
                        <input
                          id="dbudget"
                          onChange={(e) =>
                            setThree({
                              ...three,
                              DailyBudget: e.target.value,
                            })
                          }
                          value={three.DailyBudget}
                          type="text"
                          placeholder="Enter Daily Budget"
                          className="w-full rounded-xl outline-none p-2"
                        />
                      </div>
                    </div> */}
                    <div className="my-3">
                      <h1 className="text-lg py-2 font-semibold">
                        Select Ad Duration
                      </h1>
                      <div className="flex flex-wrap my-2 gap-5">
                        <div
                          onClick={() => setThree({ ...three, duration: 1 })}
                          className={`${
                            three.duration == 1
                              ? "bg-[#2D9AFF] text-white"
                              : "border border-black"
                          } p-1 px-5 rounded-full`}
                        >
                          1 day
                        </div>
                        <div
                          onClick={() => setThree({ ...three, duration: 7 })}
                          className={`${
                            three.duration === 7
                              ? "bg-[#2D9AFF] text-white"
                              : "border border-black"
                          } p-1 px-5 rounded-full`}
                        >
                          7 days
                        </div>
                        <div
                          onClick={() => setThree({ ...three, duration: 30 })}
                          className={`${
                            three.duration === 30
                              ? "bg-[#2D9AFF] text-white"
                              : "border  border-black"
                          } p-1 px-5 rounded-full`}
                        >
                          30 days
                        </div>
                      </div>
                    </div>
                    {/* <div>
                      <h1 className="text-2xl font-semibold">Budget</h1>
                      <div className="grid sm:grid-cols-2 gap-4 py-3">
                        <div className="flex flex-col space-y-1">
                          <label
                            htmlFor="tbudget"
                            className="text-lg font-semibold"
                          >
                            Total Budget
                          </label>
                          <div className="flex justify-center  rounded-xl items-center border">
                            <div className="border-r-2 p-2 text-lg">
                              &#x20B9;
                            </div>
                            <input
                              id="tbudget"
                              name="myForm"
                              onChange={(e) =>
                                setThree({
                                  ...three,
                                  TotalBudget: e.target.value,
                                })
                              }
                              value={three.TotalBudget}
                              type="text"
                              placeholder="Enter Total Budget"
                              className="w-full rounded-xl outline-none p-2"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <label
                            htmlFor="dbudget"
                            className="text-lg font-semibold"
                          >
                            Daily Budget
                          </label>
                          <div className="flex justify-center  rounded-xl items-center border">
                            <div className="border-r-2 p-2 text-lg">
                              &#x20B9;
                            </div>
                            <input
                              id="dbudget"
                              onChange={(e) =>
                                setThree({
                                  ...three,
                                  DailyBudget: e.target.value,
                                })
                              }
                              value={three.DailyBudget}
                              type="text"
                              placeholder="Enter Daily Budget"
                              className="w-full rounded-xl outline-none p-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* <div
                    className="w-full bg-white my-4 rounded-2xl py-5 px-5"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="font-bold">Payment Details</div>
                     
                      </div>
                      <div className="bg-[#FAFAFA] p-3 rounded-2xl">
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between p-[2px] items-center">
                            <div className="font-medium">Ad Budget</div>
                            <div>₹ 10,000.00</div>
                          </div>
                          <div className="text-[#333333] text-sm">
                            ₹83.60 a day x 7 days
                          </div>

                          <div className="flex justify-between p-[2px] items-center">
                            <div className="font-medium">Taxes and Charges</div>
                            <div>₹ 1800</div>
                          </div>

                          <div className="w-full h-1 border-t border-black"></div>

                          <div className="flex justify-between p-[2px] items-center">
                            <div className="font-medium">Total</div>
                            <div className="font-semibold">₹ 10,800</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${step === 2 ? null : "hidden"}`}>
        <div className="grid bg-[#f8f8f8] grid-cols-1 pn:max-md:hidden">
          <div className="flex flex-col">
            <div className="fixed left-0 w-full top-0 z-10 bg-white ">
              <div className="flex justify-between px-5 items-center py-4">
                <div className="text-[#555555] text-xl font-semibold">
                  Set up a new Ad
                </div>
                <div className="flex justify-center items-center gap-3 ">
                  <div
                    onClick={() => setStep(1)}
                    className="border-b cursor-pointer border-black"
                  >
                    Discard
                  </div>

                  <div
                    className="p-2 px-7 rounded-full cursor-pointer bg-[#2D9AFF] text-white"
                    onClick={sendData}
                  >
                    {/* Proceed to Pay */}
                    Save
                    {/* Next */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{ marginTop: "5rem" }}
                className="flex justify-center bg-[#fafafa] pt-5 py-3 mt-3"
              >
                <div className=" flex flex-col justify-center items-center">
                  <div
                    className={` h-10 w-10 rounded-full flex items-center justify-center ${
                      step >= 0
                        ? "bg-[#27AE60] text-white"
                        : "bg-green-300 text-white"
                    }`}
                  >
                    {step >= 1 ? (
                      <BsCheckLg className="text-lg font-bold" />
                    ) : (
                      1
                    )}
                  </div>

                  <div
                    className={` flex items-center font-semibold flex-col ${
                      step >= 0 ? "text-[#27AE60] " : "text-green-300"
                    }`}
                  >
                    Set up Ad
                  </div>
                </div>

                <div
                  className={`border-[#f9f9f9] border-dashed border-t-2 w-20 mt-5 ${
                    step >= 0 ? "border-black" : "border-black"
                  }`}
                />

                <div className="flex flex-col justify-center items-center">
                  <div
                    className={` h-10 w-10 rounded-full flex items-center justify-center ${
                      step >= 1
                        ? "bg-[#27AE60] text-white"
                        : "bg-green-300 text-white"
                    }`}
                  >
                    {step >= 1 ? (
                      <BsCheckLg className="text-lg font-bold" />
                    ) : (
                      2
                    )}
                  </div>

                  <div
                    className={` flex items-center flex-col ${
                      step >= 1 ? "text-[#27AE60]" : ""
                    }`}
                  >
                    Select target
                  </div>
                </div>
                <div
                  className={`border-[#f9f9f9] border-dashed border-t-2 w-20  mt-5 ${
                    step >= 1 ? "border-blue-600 " : "border-green-300"
                  }`}
                />
                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      step >= 2
                        ? "bg-blue-600 text-white"
                        : "border-2 border-black "
                    }`}
                  >
                    3
                  </div>

                  <div
                    className={` flex items-center flex-col justify-center ${
                      step === 2 ? "text-blue-600 " : ""
                    }`}
                  >
                    Preview & Launch
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 px-[2%] w-full pn:max-md:hidden">
            <div
              className={`flex bg-[#F0F2F5]  p-4 px-[2%] md:min-w-[800px] lg:min-w-[1024px] my-4 pn:max-md:hidden rounded-2xl flex-col`}
            >
              <div className="md:min-w-[800px]  lg:min-w-[1024px] bg-white  rounded-2xl py-5 px-5">
                <div className="flex justify-between items-center">
                  <div className="text-xl font-semibold py-2">Preview</div>
                  <div
                    onClick={() => setStep(0)}
                    className="flex justify-center border cursor-pointer border-black p-1 px-4 rounded-full items-center"
                  >
                    <div>
                      <AiOutlineEdit />
                    </div>
                    <div className="font-medium mx-1">Edit</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 px-2">
                  <div className="flex flex-col space-y-2 my-1">
                    <div className=" text-[#333333]">Ad Name</div>
                    <div className="font-medium">{three.adName}</div>
                  </div>
                  <div className="flex flex-col space-y-2 my-1">
                    <div className="text-[#333333]">Ad Goal</div>
                    <div className="font-medium">{three.goal}</div>
                  </div>
                </div>

                <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

                <div className="grid grid-cols-2 px-2">
                  <div className="my-3">
                    <h1 className="text-lg font-semibold py-2">Budget</h1>
                    <div className="flex items-center gap-5 ">
                      <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">Total Budget</div>
                        <div className="font-medium">
                          {Math.ceil(pricebyDay)}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">Daily Budget</div>
                        <div className="font-medium">
                          {Math.ceil(totalPrice)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-3">
                    <h1 className="text-lg font-semibold py-2">Date & Time</h1>
                    <div className="flex items-center gap-5">
                      <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">Start Date</div>
                        <div className="font-medium">{formastStartDate}</div>
                      </div>
                      {/* <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">End Date</div>
                        <div className="font-medium">
                          {date
                            ? formastEndDate > formastStartDate
                              ? formastEndDate
                              : null
                            : (three.endDate = "Not Selected")}
                        </div>
                      </div> */}
                      <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">Ad Duration</div>
                        <div className="font-medium">{three.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

                <div className="my-3">
                  <h1 className="text-xl font-semibold py-2">Target People</h1>
                  <div className="flex items-center gap-7 px-2">
                    <div className="flex flex-col space-y-2 my-1">
                      <div className="text-[#333333]">Gender</div>
                      <div className="font-medium">{three.gender}</div>
                    </div>
                    <div className="flex flex-col space-y-2 my-1">
                      <div className="text-[#333333]">Age Group</div>
                      <div className="font-medium">
                        {three.selectedAgeRange
                          ? three.selectedAgeRange
                          : "All age group"}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 my-1">
                      <div className="text-[#333333]">Call to Action</div>
                      <div className="font-medium">{three.Action}</div>
                    </div>
                    <div className="flex flex-col space-y-2 my-1">
                      <div className="text-[#333333]">Category</div>
                      <div className="font-medium">{three.category}</div>
                    </div>
                  </div>
                </div>

                <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

                <div className="my-3">
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold py-2">Locations</div>
                  </div>
                  <div className="flex my-2 items-center space-x-3">
                    <div className="flex flex-wrap my-2 items-center space-x-3">
                      {three.location.map((loc, i) => (
                        <div
                          key={i}
                          className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full"
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold py-2">Type of ad</div>
                  </div>
                  <div className="flex my-2 items-center space-x-3">
                    {three.type.map((data, i) => (
                      <div
                        key={i}
                        className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full"
                      >
                        {data}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" lg:min-w-[700px] bg-white  my-4 rounded-2xl py-5 px-5">
                <div className="bg-[#FAFAFA] flex justify-between py-5 my-3 px-1 items-center">
                  <div className="flex justify-center space-x-2 sm:space-x-4 items-center">
                    <div>
                      <img
                        src={three.pic}
                        alt="ads"
                        className="w-auto h-auto max-w-[70px] max-h-[70px]"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="font-medium">{three.Headline} </span>
                        <span>
                          <AiTwotoneEdit className="text-blue-600" />
                        </span>
                      </div>
                      <div className=" text-sm ">{three.Description}</div>
                      <div className="flex justify-center text-sm space-x-3 items-center">
                        <div></div>
                        <div>Id: 271617804</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <BsThreeDots className="text-xl" />
                  </div>
                </div>
              </div>
              <div className="lg:min-w-[700px] bg-white my-4 rounded-2xl py-5 px-5">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Payment Details</div>
                    {/* <div className="text-[#333333] text-sm">
                      Your Ad will run for 7 days
                    </div> */}
                  </div>
                  <div className="bg-[#FAFAFA] p-5 rounded-2xl">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between p-[2px] items-center">
                        <div className="font-medium">Ad Budget</div>
                        <div>₹ {Math.ceil(pricebyDay)}</div>
                      </div>
                      {/* <div className="text-[#333333] text-sm">
                        ₹83.60 a day x 7 days
                      </div> */}

                      <div className="flex justify-between p-[2px] items-center">
                        <div className="font-medium">Taxes and Charges</div>
                        <div>₹ {Math.ceil(tax)}</div>
                      </div>
                      <div className="flex justify-between p-[2px] items-center">
                        <div className="font-medium">Total</div>
                        <div className="font-semibold">
                          ₹ {Math.ceil(addTax)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col">
              <Square3 />
              <Square4 />
            </div> */}
          </div>
        </div>

        {/* mobile step-2 */}
        <div className="md:hidden">
          <div className="flex bg-white flex-col">
            <div className="fixed w-full top-0 z-50 bg-white">
              <div className="flex shadow-lg justify-between px-5 items-center py-2">
                <div className="text-[#555555] text-xl py-2 font-semibold">
                  Ad SetUp
                </div>
                <div className="flex justify-center pn:max-sm:hidden items-center gap-3 ">
                  <div
                    onClick={() => setStep(1)}
                    className="border-b cursor-pointer hidden border-black"
                  >
                    Discard
                  </div>

                  <div
                    onClick={sendData}
                    className="p-2 px-7  rounded-full cursor-pointer bg-[#2D9AFF] text-white"
                  >
                    {/* Proceed To Pay */}
                    Save
                    {/* Next */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{ marginTop: "4rem" }}
                className="flex justify-center bg-[#fafafa] pt-5 py-3 mt-3 pn:max-sm:text-xs text-center px-3"
              >
                <div className=" flex flex-col gap-1 justify-center items-center">
                  <div
                    className={` h-10 w-10 rounded-full mr-2 flex items-center justify-center ${
                      step > 0
                        ? "bg-[#27AE60] text-white"
                        : "bg-green-300 text-white"
                    }`}
                  >
                    {step >= 1 ? (
                      <BsCheckLg className="text-lg font-bold" />
                    ) : (
                      1
                    )}
                  </div>

                  <div
                    className={` flex items-center font-semibold flex-col ${
                      step >= 0 ? "text-[#27AE60]" : null
                    }`}
                  >
                    Set up Ad
                  </div>
                </div>

                <div
                  className={`border-[#f9f9f9] border-dashed border-t-2 pn:max-sm:w-10 sm:w-20 mt-5 ${
                    step >= 0 ? "border-black " : "border-black"
                  }`}
                />

                <div className="flex flex-col gap-1 justify-center items-center">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      step >= 1
                        ? "bg-[#27AE60] text-white"
                        : "bg-green-300 text-white"
                    }`}
                  >
                    {step >= 1 ? (
                      <BsCheckLg className="text-lg font-bold" />
                    ) : (
                      2
                    )}
                  </div>

                  <div
                    className={` flex items-center flex-col ${
                      step >= 1 ? "text-[#27AE60] " : "text-green-300"
                    }`}
                  >
                    Select target
                  </div>
                </div>
                <div
                  className={`border-[#f9f9f9] border-dashed border-t-2 pn:max-sm:w-10 sm:w-20 mt-5 ${
                    step >= 1 ? "border-black " : "border-black"
                  }`}
                />
                <div className="flex flex-col gap-1 justify-center -ml-4 items-center">
                  <div
                    className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${
                      step >= 2
                        ? "bg-blue-600 text-white"
                        : "bg-green-300 text-white"
                    }`}
                  >
                    3
                  </div>

                  <div
                    className={` flex items-center flex-col justify-center ${
                      step === 2 ? "text-blue-600 " : "text-green-300"
                    }`}
                  >
                    Preview & Launch
                  </div>
                </div>
              </div>
            </div>
            <div className="grid bg-[#F0F2F5] grid-cols-1">
              {/* <div className="flex flex-col">
                {" "}
                <Square3 />
                <Square4 />
              </div> */}
              <div className="flex md:hidden flex-col px-3">
                <div className="bg-white w-full my-4 rounded-2xl py-5 px-3">
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold py-2">Ad Details</div>
                    <div
                      onClick={() => setStep(0)}
                      className="flex cursor-pointer justify-center border border-black p-1 px-3 sm:px-4 rounded-full items-center"
                    >
                      <div>
                        <AiOutlineEdit />
                      </div>
                      <div className="font-medium mx-1">Edit</div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-1 my-2">
                    <div className="flex flex-col space-y-2 my-1">
                      <div className="text-[#333333]">Ad Name</div>
                      <div className="font-medium">{three.adName}</div>
                    </div>
                    <div className="flex flex-col space-y-2 my-1">
                      <div className="text-[#333333]">Ad Goal</div>
                      <div className="font-medium">{three.goal}</div>
                    </div>
                  </div>

                  <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

                  <div className="grid sm:grid-cols-2 px-2">
                    <div className="my-3">
                      <h1 className="text-lg font-semibold py-2">Budget</h1>
                      <div className="flex items-center gap-5 ">
                        <div className="flex flex-col space-y-2 my-1">
                          <div className="text-[#333333]">Total Budget</div>
                          <div className="font-medium">
                            {Math.ceil(pricebyDay)}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 my-1">
                          <div className="text-[#333333]">Daily Budget</div>
                          <div className="font-medium">
                            {Math.ceil(totalPrice)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="my-3">
                      <h1 className="text-lg font-semibold py-2">
                        Date & Time
                      </h1>
                      <div className="flex items-center space-x-5 ">
                        <div className="flex flex-col space-y-2 my-1">
                          <div className="text-[#333333]">Start Date</div>
                          <div className="font-medium">{formastStartDate}</div>
                        </div>
                        {/* <div className="flex flex-col space-y-2 my-1">
                          <div className="text-[#333333]">End Date</div>
                          <div className="font-medium">
                            {date
                              ? formastEndDate > formastStartDate
                                ? formastEndDate
                                : null
                              : (three.endDate = "Not Selected")}
                          </div>
                        </div> */}
                        <div className="flex flex-col space-y-2 my-1">
                          <div className="text-[#333333]">Ad Duration</div>
                          <div className="font-medium">{three.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

                  <div className="my-3">
                    <h1 className="text-xl font-semibold py-2">
                      Target People
                    </h1>
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">Gender</div>
                        <div className="font-medium">{three.gender}</div>
                      </div>
                      <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">Age Group</div>
                        <div className="font-medium">
                          {" "}
                          {three.selectedAgeRange
                            ? three.selectedAgeRange
                            : "All age group"}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">Call to Action</div>
                        <div className="font-medium">{three.Action}</div>
                      </div>
                      <div className="flex flex-col space-y-2 my-1">
                        <div className="text-[#333333]">Category</div>
                        <div className="font-medium">{three.category}</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full my-3 h-[1px] bg-[#D4D5D7]"></div>

                  <div className="my-3">
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-semibold py-2">
                        Locations
                      </div>
                    </div>
                    <div className="flex flex-wrap my-2 items-center space-x-3">
                      {three.location.map((loc, i) => (
                        <div
                          key={i}
                          className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full"
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-semibold py-2">
                        Type of ad
                      </div>
                    </div>
                    <div className="flex my-2 items-center space-x-3">
                      {three.type.map((data, i) => (
                        <div
                          key={i}
                          className="bg-[#F3F4F6] font-semibold p-1 px-3 rounded-full"
                        >
                          {data}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full bg-white my-4 rounded-2xl py-5 px-5">
                  <div className="bg-[#FAFAFA] flex justify-between py-5 my-3 px-1 items-center">
                    <div className="flex justify-center space-x-2 sm:space-x-4 items-center">
                      <div>
                        <img
                          src={three.pic ? three.pic : adss}
                          alt="ads"
                          className="w-auto h-auto max-w-[70px] max-h-[70px]"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-medium">
                            {three.Headline ? three.Headline : "headline"}
                          </span>
                          <span>
                            <AiTwotoneEdit className="text-blue-600" />
                          </span>
                        </div>
                        <div className=" text-sm max-w-[87%]">
                          {three.Description
                            ? three.Description
                            : "Never have a bad meal"}
                        </div>
                        <div className="flex justify-center  text-sm space-x-3 items-center">
                          <div>some line</div>
                          <div>Id: 271617804</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <BsThreeDots className="text-xl" />
                    </div>
                  </div>
                </div>

                <div
                  style={{ marginBottom: "5rem" }}
                  className="w-full bg-white my-4 rounded-2xl py-5 px-5"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="font-bold">Payment Details</div>
                      {/* <div className="text-[#333333] text-sm">
                        Your Ad will run for 7 days
                      </div> */}
                    </div>
                    <div className="bg-[#FAFAFA] p-3 rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Ad Budget</div>
                          <div>₹ {Math.ceil(pricebyDay)}</div>
                        </div>
                        {/* <div className="text-[#333333] text-sm">
                          ₹83.60 a day x 7 days
                        </div> */}

                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Taxes and Charges</div>
                          <div>₹ {Math.ceil(tax)}</div>
                        </div>

                        <div className="w-full h-1 border-t border-black"></div>

                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Total</div>
                          <div className="font-semibold">
                            ₹ {Math.ceil(addTax)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:hidden fixed bottom-0 bg-white w-full p-3">
                <button className="bg-[#2D9AFF] text-lg font-medium rounded-2xl text-white p-3 w-full">
                  {/* Proceed To Pay */}
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
