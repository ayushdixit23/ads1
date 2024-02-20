import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsLink, BsThreeDotsVertical } from "react-icons/bs";
import styles from "../CustomScrollbarComponent.module.css";
import { FaAngleDown } from "react-icons/fa";
import adss from "../assests/adss.svg";
import { getData } from "../utils/useful";
import { useGetCommunityQuery } from "../redux/slice/apiSlice";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Ad1 = ({
  three,
  dispatch,
  setThree,
  down,
  setDown,
  handleFileChanges,
  user,
}) => {
  const [select, setSelect] = useState()
  const [comimage, setComimage] = useState("")
  const { userid, firstname, lastname } = getData()
  const { data } = useGetCommunityQuery({ id: userid }, { skip: !userid })

  useEffect(() => {
    setComimage(data?.communitywithDps[0].dps)
    setSelect(data?.communitywithDps[0].title)
    dispatch(setThree({ comid: data?.communitywithDps[0]._id }))
  }, [data])

  return (
    <>
      <div className={`bg-[#F8F8F8]  select-none grid grid-cols-1 w-full`}>
        <div className="flex flex-col bg-maincolor ">


          {/* scroll this */}
          <div className="grid grid-cols-7 my-4 md:h-screen px-3 sm:px-[2%] md:overflow-auto gap-4 md:scrollbar-hidden pn:max-md:grid-cols-1 w-full">
            <div
              className={` ${styles.customScrollbar} sm:px-4 px-2 bg-[#F0F2F5] dark:bg-[#1b2431] w-full md:col-span-4 rounded-xl sm:overflow-y-scroll py-2 pn:max-md:order-1`}
            >

              {
                data?.communitywithDps.length > 0 ?

                  <div className=" px-[2%] my-2 rounded-xl bg-maincolor pn:max-sm:px-2 pb-4">
                    <div className="text-2xl font-semibold py-2 pn:max-sm:px-2 my-2">Community</div>
                    <Select
                      className="dark:text-white dark:bg-[#323b4e] w-full dark:border-none "
                      onValueChange={(selectValue) => {
                        console.log(selectValue)
                        const selectedData = data?.communitywithDps?.find(
                          (item) => item._id === selectValue
                        );
                        console.log(selectedData)
                        if (selectedData) {
                          dispatch(setThree({ comid: selectValue }))

                          setComimage(selectedData.dps)
                          setSelect(selectedData.title)
                        }
                      }}

                    >
                      <SelectTrigger className="w-full dark:text-white dark:bg-[#323b4e] dark:border-none ">
                        <SelectValue
                          value={select}
                          placeholder={select}
                          className="dark:text-white dark:bg-[#323b4e] dark:border-none "
                        />
                      </SelectTrigger>
                      <SelectContent className="dark:text-white dark:bg-[#323b4e] dark:border-none ">
                        <SelectGroup className="max-h-[200px] gap-1 w-full flex flex-col justify-center items-center">
                          {data?.communitywithDps?.map((d, i) => (
                            <SelectItem
                              value={d._id}
                              key={i}
                              className="flex justify-start p-2 gap-2 w-full items-center "
                            >


                              <div className="flex justify-center gap-2 items-center w-full">
                                <div>
                                  <img
                                    src={d?.dps}
                                    className="max-w-[30px] rounded-lg min-h-[30px] min-w-[30px] max-h-[30px]"
                                    alt="image"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-xs">{d?.title}</div>
                                </div>
                              </div>

                            </SelectItem>
                          ))}

                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  :
                  <div>
                    <h1 className="text-2xl font-semibold py-2 pn:max-sm:px-2 my-2">Community Details</h1>
                    <div className="my-2 rounded-xl bg-maincolor pn:max-sm:px-2">
                      <div className="flex gap-2 py-2 px-[2%] flex-col w-full">
                        <div>Community Name</div>
                        <input value={three.communityName} onChange={(e) => dispatch(setThree({ communityName: e.target.value }))} type="text" className="w-full border rounded-xl bg-input outline-none p-2" placeholder="Enter Community Name" />
                      </div>
                      <div className="flex gap-2 py-2 px-[2%] flex-col w-full">
                        <div>Community Description</div>
                        <textarea value={three.communityDesc} onChange={(e) => dispatch(setThree({ communityDesc: e.target.value }))} className="w-full border rounded-xl bg-input max-h-[200px] outline-none p-2" placeholder="Enter Community Name" />
                      </div>
                      <div className="flex gap-2 py-2 px-[2%] flex-col w-full">
                        <div>Category</div>
                        <input value={three.communityCategory} onChange={(e) => dispatch(setThree({ communityCategory: e.target.value }))} type="text" className="w-full border rounded-xl bg-input outline-none p-2" placeholder="Enter Community Name" />
                      </div>
                      <div className="flex gap-2 py-2 px-[2%] flex-col w-full">
                        <div>Image</div>
                        <input onChange={(e) => dispatch(setThree({ communityImage: e.target.files[0] }))} type="file" className="w-full border rounded-xl bg-input outline-none p-2" placeholder="Enter Community Name" />
                      </div>
                    </div>
                  </div>
              }

              <h1 className="text-2xl font-semibold py-2 pn:max-sm:px-2 my-2">
                Ad Details
              </h1>
              <div className="my-2 rounded-xl bg-maincolor pn:max-sm:px-2">
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
                    onChange={(e) => dispatch(setThree({ adName: e.target.value }))}
                    value={three.adName}
                    type="text"
                    placeholder="Enter Ad Name"
                    className="w-full border rounded-xl bg-input outline-none p-2"
                  />
                </div>
                <div className=" py-2 px-[2%]">
                  <h1 className="text-lg font-semibold py-2">
                    Select a goal for Ad
                  </h1>
                  <div className="sm:flex grid grid-cols-2 sm:flex-wrap gap-3">
                    <div
                      onClick={() => dispatch(setThree({ goal: "Sales" }))}
                      // onClick={() => setThree({ ...three, goal: "Sales" })}
                      className={`p-1 border-2 inline-block  text-text w-full sm:w-[220px] rounded-xl ${three.goal === "Sales"
                        ? "border-2 border-[#2D9AFF]"
                        : " sm:hover:text-black"
                        } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${three.goal === "Sales"
                          ? "bg-[#2D9AFF]/30"
                          : "bg-maincolor sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
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
                      onClick={() => dispatch(setThree({ goal: "Awareness" }))}

                      className={`p-1 border-2 inline-block w-full sm:w-[220px] rounded-xl ${three.goal === "Awareness"
                        ? "border-2 border-[#2D9AFF]"
                        : " sm:hover:text-black"
                        } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${three.goal === "Awareness"
                          ? "bg-[#2D9AFF]/30"
                          : "bg-maincolor sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
                          }  `}
                      >
                        <h1 className="sm:text-2xl text-lg  font-robot font-bold py-1">
                          Awareness
                        </h1>
                        <p className="text-sm w-[90%]">
                          Generate trust for your brand between audience.
                        </p>
                      </div>
                    </div>
                    <div

                      onClick={() => dispatch(setThree({ goal: "Clicks" }))}
                      className={` p-1 border-2 inline-block w-full sm:w-[220px] rounded-xl ${three.goal === "Clicks"
                        ? "border-2 border-[#2D9AFF]"
                        : " sm:hover:text-black"
                        } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${three.goal === "Clicks"
                          ? "bg-[#2D9AFF]/30"
                          : "bg-maincolor sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
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

                      onClick={() => dispatch(setThree({ goal: "Downloads" }))}

                      className={` p-1 border-2 inline-block w-full sm:w-[220px] rounded-xl ${three.goal === "Downloads"
                        ? "border-2 border-[#2D9AFF]"
                        : " sm:hover:text-black"
                        } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${three.goal === "Downloads"
                          ? "bg-[#2D9AFF]/30"
                          : "bg-maincolor sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
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

                      onClick={() => dispatch(setThree({ goal: "Views" }))}
                      className={` p-1 border-2 inline-block w-full sm:w-[220px] rounded-xl ${three.goal === "Views"
                        ? "border-2 border-[#2D9AFF]"
                        : " sm:hover:text-black"
                        } `}
                    >
                      <div
                        className={`p-2 h-full rounded-lg ${three.goal === "Views"
                          ? "bg-[#2D9AFF]/30"
                          : "bg-maincolor sm:hover:bg-[#3e3e3e]/80 sm:hover:text-white"
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

              <div className="my-[4%] rounded-xl pn:max-sm:px-2 bg-maincolor">
                <div className="flex flex-col  py-2 px-[2%] w-full">
                  <div className="flex items-center gap-1">
                    <label
                      htmlFor="headline"
                      className="text-lg font-semibold py-2"
                    >
                      Headline
                    </label>
                    {/* <div className="relative w-full cursor-pointer group">
                      <FiAlertCircle className="text-sm" />

                      <div className="absolute hidden text-black/75 bg-[#fff] shadow-lg text-sm p-2 px-4 rounded-b-xl rounded-r-xl group-hover:inline-block top-4 left-2">
                        <div className="  my-2 h-3 w-3 z-20 bg-maincolor absolute -top-[13px] shadow-2xl left-0 -rotate-45"></div>
                        <div> This is a headline</div>
                      </div>
                    </div> */}
                  </div>
                  <input
                    name="myForm"
                    id="headline"
                    onChange={(e) =>
                      dispatch(setThree({ Headline: e.target.value }))
                    }
                    value={three.Headline}
                    type="text"
                    placeholder="Never have a bad meal"
                    className="w-full border rounded-xl bg-input outline-none p-2"
                  />
                </div>
                <div className="flex flex-col  py-2 px-[2%] w-full">
                  <div className="flex items-center gap-1">
                    <label htmlFor="des" className="text-lg font-semibold py-2">
                      Description
                    </label>
                    {/* <div className="relative w-full cursor-pointer group">
                      <FiAlertCircle className="text-sm" />
                      <div className="absolute hidden text-black/75 bg-[#fff] shadow-lg text-sm p-2 px-4 rounded-b-xl rounded-r-xl group-hover:inline-block top-4 left-2">
                        <div className="  my-2 h-3 w-3 z-20 bg-maincolor absolute -top-[13px] shadow-2xl left-0 -rotate-45"></div>
                        <div> This is a Description</div>
                      </div>
                    </div> */}
                  </div>
                  <input
                    name="myForm"
                    id="des"

                    onChange={(e) =>
                      dispatch(setThree({ Description: e.target.value }))
                    }
                    value={three.Description}
                    type="text"
                    placeholder="healthy and sweet dishes"
                    className="w-full border rounded-xl bg-input outline-none p-2"
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
                          <div className="  my-2 h-3 w-3 z-20 bg-maincolor absolute -top-[13px] shadow-2xl left-0 -rotate-45"></div>
                          <div> This is a Select Call To Action</div>
                        </div>
                      </div> */}
                    </div>

                    <div
                      onMouseEnter={() => setDown(1)}
                      className={`flex items-center p-2 border ${three.Action && down === 0 ? "" : ""
                        } group-hover:rounded-[0] group-hover:rounded-t-xl rounded-xl`}
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
                        className={`absolute hidden  ${down === 0
                          ? "rounded-2xl "
                          : "rounded-b-2xl group-hover:block pb-2 top-[99%] left-0 w-full bg-maincolor border"
                          } `}
                      >
                        <div className="flex flex-col gap-3 px-3 py-3">
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Order Now" }))
                            }}
                          >
                            Order Now
                          </div>
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Learn More" }))
                            }}
                          >
                            Learn More
                          </div>
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Install Now" }))
                            }}
                          >
                            Install Now
                          </div>
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Buy Now" }))
                            }}
                          >
                            Buy Now
                          </div>
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Visit" }))
                            }}
                          >
                            Visit
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`absolute hidden rounded-b-2xl group-hover:block pb-2 top-[99%] left-0 w-full bg-maincolor border`}
                      >
                        <div className="flex flex-col gap-3 px-3 py-3">
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Order Now" }))

                              setDown(0);
                            }}
                          >
                            Order Now
                          </div>
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Learn More" }))

                              setDown(0);
                            }}
                          >
                            Learn More
                          </div>
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Install Now" }))
                              setDown(0);
                            }}
                          >
                            Install Now
                          </div>
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Buy Now" }))
                              setDown(0);
                            }}
                          >
                            Buy Now
                          </div>
                          <div
                            onClick={() => {
                              dispatch(setThree({ Action: "Visit" }))
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
                          <div className="  my-2 h-3 w-3 z-20 bg-maincolor absolute -top-[13px] shadow-2xl left-0 -rotate-45"></div>
                          <div> This is a Paste Link To Call To Action</div>
                        </div>
                      </div> */}
                    </div>
                    <div className="flex justify-center  rounded-xl items-center border">
                      <BsLink className="border-r-2 p-2 text-4xl " />
                      <input
                        name="myForm"
                        id="link"
                        // onChange={(e) =>
                        //   setThree({ ...three, link: e.target.value })
                        // }
                        onChange={(e) => dispatch(setThree({ link: e.target.value }))}
                        value={three.link}
                        type="text"
                        placeholder="grovyo.com"
                        className="w-full rounded-xl bg-transparent rounded-l-none outline-none p-2"
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
                  <div className="bg-[#F3F6F8] dark:bg-[#273142] dark:border dark:border-border  flex sm:flex-row flex-col justify-around py-3 rounded-2xl items-center w-full">
                    <div className="pn:max-sm:text-center pn:max-sm:w-[80%] pn:max-sm:py-2">
                      Image must be JPG, PNG, or GIF, up to 5 mb
                    </div>
                    <div className="text-[#5585FF] border pn:max-sm:w-[80%] pn:max-sm:text-center hover:border-[#5585FF] p-2 rounded-2xl">
                      <label htmlFor="files">Select and Upload</label>

                      <input
                        name="myForm"
                        onChange={handleFileChanges}
                        type="file"
                        id="files"
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-2 px-[2%]">
                  <div className="bg-[#F3F6F8] dark:bg-[#273142] dark:border dark:border-border py-2 px-[2%]  flex justify-between rounded-2xl items-center w-full">
                    <div className="flex justify-center overflow-hidden space-x-4 items-center">
                      <div>

                        {three.pic === "" && (
                          <Image
                            src={three.pic ? three.pic : adss}
                            alt={three.picname}
                            width={350}
                            height={200}
                            className="w-auto h-auto object-cover"
                          />
                        )}
                        {three.pic && (
                          <img
                            className="max-w-[50px] max-h-[50px]"
                            src={three.pic}
                            alt={three.picname}
                          />
                        )}
                        {/* {three.picsend &&
                          ["mp4", "avi", "mov"].includes(
                            three.picname.split(".").pop().toLowerCase()
                          ) && (
                            <video
                              className="max-w-[50px] max-h-[50px]"
                              controls
                            >
                              <source
                                src={URL.createObjectURL(three.picsend)}
                                type={three.picsend.type}
                              />
                            </video>
                          )} */}

                        {three.picsend &&
                          ["mp4", "avi", "mov"].includes(
                            three.picname.split(".").pop().toLowerCase()
                          ) && <div>Video</div>}
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
              <div className="bg-[#FAFAFA] dark:bg-[#1b2431] rounded-xl w-full flex justify-center items-center">
                <div className="bg-maincolor rounded-xl flex flex-col w-[85%] sm:w-[500px] md:w-[370px]  my-10 px-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2 pt-2 w-full">
                      <div>
                        {
                          data?.communitywithDps.length > 0 ? <img
                            width={40}
                            height={30}
                            alt="commmunityImage"
                            src={comimage}
                            className="min-w-[40px] min-h-[40px] rounded-xl h-[45px] w-[45px]"
                          />
                            :
                            (
                              three.communityImage && <img src={(URL.createObjectURL(three.communityImage))} width={40}
                                height={30}
                                alt="commmunityImage"
                                className="min-w-[40px] min-h-[40px] rounded-xl h-[45px] w-[45px]" />
                            )

                        }

                      </div>
                      <div className="flex -mt-1 flex-col ">
                        {
                          data?.communitywithDps.length > 0 ? <div className="font-semibold">{select}</div>
                            :
                            <div className="font-semibold">{three.communityName}</div>

                        }

                        <div className="flex items-center gap-1 text-xs">
                          <div>By {firstname + " " + lastname + " •"}</div>
                          <div>Sponsored</div>
                        </div>

                      </div>
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mt-2  h-full w-full">

                    {three.pic === "" && (
                      <Image
                        src={adss}
                        alt={three.picname}
                        width={350}
                        height={200}
                        className="w-auto h-auto min-w-full  rounded-lg object-cover"
                      />
                    )}
                    {three.pic ? (
                      <Image
                        src={three.pic}
                        alt={three.picname}
                        width={350}
                        height={200}
                        className="w-auto min-w-full h-auto rounded-lg object-cover"
                      />
                    ) : null}

                    {three.picsend &&
                      ["mp4", "avi", "mov"].includes(
                        three.picname.split(".").pop().toLowerCase()
                      ) ? (
                      <video
                        className="w-auto h-auto rounded-2xl object-cover"
                        width="350"
                        height="200"
                        controls
                      >
                        <source
                          src={URL.createObjectURL(three.picsend)}
                          type={three.picsend.type}
                        />
                      </video>
                    ) : null}

                  </div>

                  <div className="py-1 mt-2 font-semibold">
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
      </div >
    </>
  );
};

export default Ad1;
