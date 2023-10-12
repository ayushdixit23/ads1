"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import koi from "../assests/koiimage.svg";
import graph from "../assests/Graph.svg";
import Header from "./Header";
import axios from "axios";
import { API } from "@/Essentials";
import { FaAngleDown } from "react-icons/fa";
import circle from "../assests/Pic2.svg";
import dsh from "../assests/dsh.svg";
import { AiOutlinePlus } from "react-icons/ai";
import dashp2 from "../assests/Pic1.svg";
import { useRouter } from "next/navigation";

const Section8 = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [mount, setMount] = useState(false);
  const [adata, setAdata] = useState([]);
  const [campdata, setCampdata] = useState([]);
  const router = useRouter();

  function formatDate(inputDate) {
    // Parse the input date string into a Date object
    const date = new Date(inputDate);

    // Get the day, month, and year components
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const year = date.getFullYear();

    // Format the components with leading zeros if necessary
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    // Combine the components in the desired format "dd mm yyyy"
    const formattedDate = `${formattedDay} ${formattedMonth} ${year}`;

    return formattedDate;
  }

  // Example usage:
  const dateString = "2023-10-06"; // Example input date string in yyyy-mm-dd format
  const formattedDate = formatDate(dateString);
  // console.log(formattedDate); // Output: "06 10 2023"

  const fetchData = async (id) => {
    try {
      const res = await axios.get(`${API}/fetchdashboard/${id}`);
      if (res?.data?.success) {
        setData(res.data);
        // console.log(res.data);
        setLoad(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const CampaignFetch = async (id) => {
    try {
      const res = await axios.get(`${API}/getallads/${id}`);
      if (res?.data?.success) {
        const ad = res.data.ads;
        const content = res.data.content;
        const merge = ad?.map((a, i) => ({
          a,
          c: content[i],
        }));

        setCampdata(merge);
        // console.log(merge);
        setLoad(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!mount) {
      setMount(true);
      const id = sessionStorage.getItem("id");
      if (id) {
        fetchData(id);
        CampaignFetch(id);
      }
    }
  }, []);

  return (
    <>
      <div className="bg-[#f8f8f8] flex flex-col">
        <Header />
      </div>
      <div className="grid grid-cols-1 select-none p-4">
        <div className="grid grid-cols-1  gap-4 md:gap-7">
          <div className=" w-full grid md:grid-cols-4 pn:max-md:gap-2 grid-cols-2 py-4 rounded-xl">
            <div className="flex bg-white justify-center items-center p-2 sm:h-[100px] gap-2 sm:gap-5 sm:p-3 rounded-tl-2xl rounded-bl-2xl space-x-2 md:border-r-2">
              <div className="flex flex-col justify-center">
                <div>Spent this month</div>
                <div className="sm:text-2xl font-semibold">
                  {data?.amountspent?.amount
                    ? "₹" + data?.amountspent?.amount
                    : "No Data Yet"}
                </div>
              </div>
              <div>
                <Image src={koi} alt="logo" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 sm:gap-5 p-2 sm:p-3  bg-white space-x-2 md:border-r-2">
              <div>
                {/* <Icon5 /> */}
                <Image src={circle} alt="circle" />
              </div>
              <div className="flex flex-col justify-center">
                <div>Current Balance</div>
                <div className="sm:text-2xl font-semibold">
                  {data?.currentbalance ? "₹" + data?.currentbalance : "₹0"}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 sm:gap-5 p-2 sm:p-3  bg-white space-x-2 md:border-r-2">
              <div>
                <Image src={dashp2} alt="dashp2" priority={true} />
              </div>
              <div className="flex flex-col justify-center">
                <div>Total Conversion</div>
                <div className="sm:text-2xl font-semibold">
                  {data?.totalconversion
                    ? data?.totalconversion + "%"
                    : "No Data Yet"}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-2 sm:p-3 gap-2 sm:gap-5 rounded-tr-2xl rounded-br-2xl bg-white space-x-2">
              <div className="flex flex-col justify-center">
                <div>Popularitiy</div>
                <div className="sm:text-2xl font-semibold">
                  {data?.popularity ? data?.popularity + "%" : "No Data Yet"}
                </div>
              </div>
              <div>
                <Image src={graph} alt="pic" />
              </div>
            </div>
          </div>

          {campdata.length === 0 && (
            <div
              style={{ marginBottom: "5rem" }}
              className="flex flex-col w-full justify-center bg-white p-2 py-5 my-3 md:hidden items-center"
            >
              <div>
                <div className="flex justify-center items-center">
                  <Image src={dsh} alt="dsh" priority={true} />
                </div>
                <div className="text-xl font-semibold text-center py-2">
                  No Analytics Yet?
                </div>
                <div className="py-2 text-sm text-[#8B8D97]">
                  Add a new Campaign to see Live Analytics here.
                </div>
                <div
                  onClick={() => {
                    router.push("/createAd");
                  }}
                  className="text-white cursor-pointer bg-[#2D9AFF] flex justify-center items-center p-2 rounded-xl gap-3"
                >
                  <div>
                    <AiOutlinePlus />
                  </div>
                  <div>Create Ad</div>
                </div>
              </div>
              <div className="flex justify-between w-full mt-6 border-2 items-center p-3">
                <div className="font-semibold">No Ads Yet</div>
                <div className="flex justify-center space-x-5 items-center">
                  <div className="flex justify-center space-x-1 p-1 px-3 border-2 rounded-full items-center">
                    <div>{campdata?.length}</div>
                    <div>
                      <FaAngleDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* table */}

          {load ? (
            <div
              className={`${
                campdata.length != 0
                  ? "max-w-full my-6 overflow-x-scroll no-scrollbar"
                  : "pn:max-md:hidden"
              }`}
            >
              <table className="min-w-[900px] w-full bg-white border border-separate border-spacing-y-5 rounded-lg">
                <thead className="bg-[#FAFAFA] font-semibold text-[#6E7191]">
                  <tr>
                    <th role="columnheader" className="py-2 px-4">
                      NAME
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      STATUS
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      Interaction
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      Conversion
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      Avg. Cost
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      START DATE
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      END DATE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y border-2 w-full">
                  {campdata.length > 0 ? (
                    <>
                      {campdata?.map((d, i) => (
                        // <tr className="bg-red-800">
                        //   <td colSpan="7 w-full">
                        <tr
                          key={i}
                          className="bg-white border-2 font-semibold border-black "
                        >
                          <td className="py-2 px-4 ">{d?.a?.adname}</td>
                          <td className="py-2 px-4 text-center text-[#27AE60]">
                            {d?.a?.status}
                          </td>
                          <td className="py-2 px-4 text-center">5,00,000</td>
                          <td className="py-2 px-4 text-center">10%</td>
                          <td className="py-2 px-4 text-center">
                            {d?.a?.budget ? d?.a?.budget : "___"}
                          </td>
                          <td className="py-2 px-4 text-center">
                            {d?.a?.startdate
                              ? formatDate(Number(d?.a?.startdate))
                              : "___"}
                          </td>
                          <td className="py-2 px-4 text-center">
                            {/* {d?.a?.enddate != "Not Selected"
                            ? formatDate(d?.a?.enddate)
                            : "___"} */}
                            {d?.a?.enddate}
                          </td>
                        </tr>

                        // {/* <div className="flex justify-between  items-center border-y-2 p-3">
                        //   <div className="font-semibold">
                        //     {campdata?.length}
                        //     Ads
                        //   </div>
                        //   <div className="flex justify-center space-x-5 items-center">
                        //     <div className="flex justify-center space-x-1 p-1 px-3 border-2 rounded-full items-center">
                        //       <div>{campdata?.length}</div>
                        //       <div>
                        //         <FaAngleDown />
                        //       </div>
                        //     </div>
                        //   </div>
                        // </div> */}

                        //   </td>
                        // </tr>
                      ))}
                      <tr>
                        <td colSpan="7">
                          <div className="flex justify-between  items-center border-y-2 p-3">
                            <div className="font-semibold">
                              {campdata?.length}
                              Ads
                            </div>
                            <div className="flex justify-center space-x-5 items-center">
                              <div className="flex justify-center space-x-1 p-1 px-3 border-2 rounded-full items-center">
                                <div>{campdata?.length}</div>
                                <div>
                                  <FaAngleDown />
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr>
                        <td colSpan="7">
                          {" "}
                          <div className="flex justify-center pn:max-md:hidden my-6 mb-7 items-center">
                            <div>
                              <div className="flex justify-center items-center">
                                <Image src={dsh} alt="dsh" />
                              </div>
                              <div className="text-xl font-semibold text-center py-2">
                                No Analytics Yet?
                              </div>
                              <div className="py-2 text-sm text-[#8B8D97]">
                                Add a new Campaign to see Live Analytics here.
                              </div>
                              <div className="text-white cursor-pointer bg-[#2D9AFF] flex justify-center items-center p-2 rounded-xl gap-3">
                                <div>
                                  <AiOutlinePlus />
                                </div>
                                <div
                                  onClick={() => {
                                    router.push("/createAd");
                                  }}
                                >
                                  Create Ad
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between  items-center border-y-2 p-3">
                            <div className="font-semibold">
                              {campdata?.length}
                              Ads
                            </div>
                            <div className="flex justify-center space-x-5 items-center">
                              <div className="flex justify-center space-x-1 p-1 px-3 border-2 rounded-full items-center">
                                <div>{campdata?.length}</div>
                                <div>
                                  <FaAngleDown />
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <table className="min-w-[900px] w-full bg-white border border-separate border-spacing-y-5 rounded-lg">
                <thead className="bg-[#FAFAFA] font-semibold text-[#6E7191]">
                  <tr>
                    <th role="columnheader" className="py-2 px-4">
                      NAME
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      STATUS
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      Interaction
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      Conversion
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      Avg. Cost
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      START DATE
                    </th>
                    <th role="columnheader" className="py-2 px-4">
                      END DATE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y h-[35vh] border-2 w-full">
                  <tr>
                    <td colSpan="7">
                      <div className="flex justify-center items-center">
                        Loading...
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Section8;
