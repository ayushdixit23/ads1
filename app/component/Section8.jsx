"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import koi from "../assests/koiimage.svg";
import graph from "../assests/Graph.svg";
import Header from "./Header";
import axios from "axios";
import { API } from "@/Essentials";
import circle from "../assests/Pic2.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import dashp2 from "../assests/Pic1.svg";
import { getData } from "../utils/useful";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useAdsFetching from "../useFetch/useAdFetching";

const Section8 = () => {
  const [data, setData] = useState();
  const [campdata, setCampdata] = useState([]);
  // const [loading, setLoading] = useState(true)
  const { CampaignFetch } = useAdsFetching()
  const { advid } = getData()
  const [check, setCheck] = useState({
    click: true,
    impressions: false,
    cpc: false,
    cost: false,
  })

  const fetchData = async (id) => {
    try {
      const res = await axios.get(`${API}/fetchdashboard/${id}`);
      if (res?.data?.success) {
        setData(res.data, "1");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const GraphData = [
    {
      "name": "Page A",
      "click": 4000,
      "cost": 2400,
      "impressions": 2400,
      "cpc": 2300
    },
    {
      "name": "Page B",
      "click": 3000,
      "cost": 1398,
      "impressions": 2210,
      "cpc": 2000
    },
    {
      "name": "Page C",
      "click": 2000,
      "cost": 9800,
      "impressions": 2290,
      "cpc": 2790
    },
    {
      "name": "Page D",
      "click": 2780,
      "cost": 3908,
      "impressions": 2000,
      "cpc": 4000
    },
    {
      "name": "Page E",
      "click": 1890,
      "cost": 4800,
      "impressions": 2181,
      "cpc": 2151
    },
    {
      "name": "Page F",
      "click": 2390,
      "cost": 3800,
      "impressions": 2500,
      "cpc": 2550
    },
    {
      "name": "Page G",
      "click": 3490,
      "cost": 4300,
      "impressions": 2100,
      "cpc": 3100
    }
  ]

  const f = async () => {
    try {
      if (advid) {
        fetchData(advid);
        const data = await CampaignFetch(advid);
        setCampdata(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    f()
  }, [advid])


  return (
    <>
      <div className="bg-maincolor sticky top-0 left-0 z-30 light:bg-[#f8f8f8] flex flex-col">
        <Header />
      </div>
      <div className="grid grid-cols-1 select-none p-4">
        <div className="grid grid-cols-1 gap-4">
          <div className=" w-full grid md:grid-cols-4 pn:max-md:gap-2 grid-cols-2 py-4 rounded-xl">
            <div className="flex bg-maincolor justify-center items-center p-2 gap-2 sm:gap-5 pn:max-sm:rounded-md sm:max-md:rounded-xl sm:p-3 md:rounded-tl-2xl md:rounded-bl-2xl md:border-r-2">
              <div className="flex flex-col text-xs justify-center">
                <div>Spent this month</div>
                <div className="sm:text-xl text-sm font-semibold">
                  {data?.amountspent?.amount
                    ? "₹" + data?.amountspent?.amount
                    : "No Data Yet"}
                </div>
              </div>
              <div>
                <Image
                  src={koi}
                  alt="logo"
                  className="min-w-[50px] min-h-[50px]"
                />
              </div>
            </div>
            <div className="flex justify-center w-full items-center pn:max-sm:rounded-md sm:max-md:rounded-xl gap-2 sm:gap-5 p-2 sm:p-3  bg-maincolor md:border-r-2">
              <div>
                {/* <Icon5 /> */}
                <Image
                  src={circle}
                  alt="circle"
                  className="min-w-[50px] min-h-[50px]"
                />
              </div>
              <div className="flex flex-col text-xs w-full sm:w-auto justify-center">
                <div>Current Balance</div>
                <div className="sm:text-xl text-base font-semibold">
                  {data?.currentbalance ? "₹" + data?.currentbalance : "₹0"}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 pn:max-sm:rounded-md sm:max-md:rounded-xl sm:gap-5 p-2 sm:p-3  bg-maincolor md:border-r-2">
              <div>
                <Image
                  src={dashp2}
                  alt="dashp2"
                  priority={true}
                  className="min-w-[50px] min-h-[50px]"
                />
              </div>
              <div className="flex flex-col text-xs justify-center">
                <div>Total Conversion</div>
                <div className="sm:text-xl text-sm font-semibold">
                  {data?.totalconversion
                    ? data?.totalconversion + "%"
                    : "No Data Yet"}
                </div>
              </div>
            </div>
            <div className="flex sm:justify-center items-center p-2 sm:p-3 pn:max-sm:rounded-md sm:max-md:rounded-xl gap-2 sm:gap-5 md:rounded-tr-2xl md:rounded-br-2xl bg-maincolor ">
              <div className="flex flex-col ml-3 text-xs">
                <div>Popularitiy</div>
                <div className="sm:text-xl text-sm font-semibold">
                  {data?.popularity ? data?.popularity + "%" : "No Data Yet"}
                </div>
              </div>
              <div>
                <Image
                  src={graph}
                  alt="pic"
                  className="min-w-[50px] min-h-[50px]"
                />
              </div>
            </div>
          </div>

          <div className="w-full bg-maincolor rounded-xl min-h-[400px] max-h-[450px]">
            <div className="flex mb-3 justify-between w-full flex-wrap">
              <div className="flex justify-center items-center">
                <div className="p-2">
                  <Select className="bg-maincolor">
                    <SelectTrigger className="pp:w-[180px]">
                      <SelectValue placeholder="Ads" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {campdata.length > 0 &&
                          campdata?.map((d, i) => (
                            <SelectItem key={i} value={d?.a?.adname}>{d?.a?.adname}</SelectItem>
                          ))
                        }
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select className="bg-maincolor">
                    <SelectTrigger className="pp:w-[180px]">
                      <SelectValue placeholder="1 day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1 day">1 day</SelectItem>
                        <SelectItem value="7 days">7 days</SelectItem>
                        <SelectItem value="30 days">30 days</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex sm:justify-between flex-wrap">
                <div onClick={() => setCheck({
                  ...check, click: !check.click
                })} className={`flex justify-center ${check.click ? "bg-yellow-500" : ""} sm:rounded-l-xl w-[150px] border border-l-none p-2 items-center`}>
                  <div className="flex  w-full p-2 gap-1 font-semibold flex-col">
                    <div>Click</div>
                    <div>0</div>
                  </div>
                </div>
                <div onClick={() => setCheck({
                  ...check, impressions: !check.impressions
                })} className={`flex justify-center ${check.impressions ? "bg-red-600" : ""} w-[150px] border border-l-none border-r-none p-2 items-center`}>
                  <div className="flex  w-full p-2 gap-1 font-semibold flex-col">
                    <div>Impressions</div>
                    <div>0</div>
                  </div>
                </div>
                <div onClick={() => setCheck({
                  ...check, cpc: !check.cpc
                })} className={`flex justify-center ${check.cpc ? "bg-green-700" : ""} w-[150px] border border-l-none border-r-none p-2 items-center`}>
                  <div className="flex  w-full p-2 gap-1 font-semibold flex-col">
                    <div>Avg. CPC</div>
                    <div>0</div>
                  </div>
                </div>
                <div onClick={() => setCheck({
                  ...check, cost: !check.cost
                })} className={`flex justify-center ${check.cost ? "bg-white text-black" : ""} sm:rounded-r-xl w-[150px] border p-2 items-center`}>
                  <div className="flex  w-full p-2 gap-1 font-semibold flex-col">
                    <div>Cost</div>
                    <div>0</div>
                  </div>
                </div>
              </div>
            </div>
            <ResponsiveContainer className={`dark:bg-maincolor`}>
              <LineChart width={730} height={250} data={GraphData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {check.click && < Line type="monotone" dataKey="click" stroke="#F59E0B" />}
                {check.cost && <Line type="monotone" dataKey="cost" stroke="#CBD5E0" />}
                {check.impressions && <Line type="monotone" dataKey="impressions" stroke="#DC2626" />}
                {check.cpc && <Line type="monotone" dataKey="cpc" stroke="#047857" />}
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* {campdata.length === 0 && (
            <div
              style={{ marginBottom: "3rem" }}
              className="flex flex-col w-full justify-center bg-maincolor p-2 py-5 my-3 md:hidden items-center"
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
                <div className="flex justify-center gap-5 items-center">
                  <div className="flex justify-center space-x-1 p-1 px-3 border-2 rounded-full items-center">
                    <div>{campdata?.length}</div>
                    <div>
                      <FaAngleDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}

          {/* table */}

          {/* <div
            className={`${campdata.length != 0
              ? "max-w-full my-3 overflow-x-scroll no-scrollbar"
              : "pn:max-md:hidden"
              }`}
          >

            <Table className="w-full border bg-maincolor min-w-[900px] border-border">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">NAME</TableHead>
                  <TableHead className="text-center">STATUS</TableHead>
                  <TableHead className="text-center">INTERACTION</TableHead>
                  <TableHead className="text-center">CONVERSION</TableHead>
                  <TableHead className="text-center">AVG. COST</TableHead>
                  <TableHead className="text-center">START DATE</TableHead>
                  <TableHead className="text-center">DURATION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>

                {campdata.length > 0 ? (
                  <>
                    {campdata?.map((d, i) => (
                      <TableRow>
                        <TableCell className="font-medium text-center">
                          {d?.a?.adname}
                        </TableCell>
                        <TableCell className="font-medium text-center">
                          {d?.a?.status}
                        </TableCell>
                        <TableCell className="font-medium text-center">
                          5,00,000
                        </TableCell>
                        <TableCell className="font-medium text-center">
                          10%
                        </TableCell>
                        <TableCell className="font-medium text-center">
                          {d?.a?.budget ? d?.a?.budget : "___"}
                        </TableCell>
                        <TableCell className="font-medium text-center">
                          {d?.a?.startdate
                            ? formatDate(Number(d?.a?.startdate))
                            : "___"}
                        </TableCell>
                        <TableCell className="font-medium text-center">
                          {d?.a?.enddate}
                        </TableCell>
                      </TableRow>

                    ))}
                    <TableRow>
                      <TableCell colSpan="7">
                        <div className="flex justify-between  items-center p-3">
                          <div className="font-semibold">
                            {campdata?.length}
                            Ads
                          </div>
                          <div className="flex justify-center gap-5 items-center">
                            <div className="flex justify-center space-x-1 p-1 px-3 rounded-full items-center">
                              <div>{campdata?.length}</div>
                              <div>
                                <FaAngleDown />
                              </div>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                ) : (
                  <>
                    <TableRow>
                      <TableCell colSpan="7">
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
                                  router.push(`/createAd?step=1`);
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
                          <div className="flex justify-center gap-5 items-center">
                            <div className="flex justify-center space-x-1 p-1 px-3 border-2 rounded-full items-center">
                              <div>{campdata?.length}</div>
                              <div>
                                <FaAngleDown />
                              </div>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </div> */}


        </div >
      </div >
    </>
  );
};

export default Section8;
