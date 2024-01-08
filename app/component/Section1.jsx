"use client";
import { API } from "@/Essentials";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import useTokenAndData from "../utils/token";

const Section1 = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [mount, setMount] = useState(false);
  const { appData } = useTokenAndData()

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

        setData(merge);

        setLoad(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const f = async () => {
    try {
      const data = await appData()
      if (!mount) {
        setMount(true);
        const id = data.id;
        if (id) {
          CampaignFetch(id);
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    f()
  }, []);

  return (
    <>
      <div className="flex justify-between bg-white items-center py-5 px-4 sm:px-[2%]">
        <div className="sm:text-3xl text-xl font-semibold">Ads</div>
        <div className="flex justify-center items-center bg-[#1A73E8] text-white p-2 sm:px-5 px-3 pr-5 rounded-full space-x-2">
          <div>
            <AiOutlinePlus className="text-xl font-semibold" />
          </div>
          <Link href="/three">
            <p>Create Ad</p>
          </Link>
        </div>
      </div>
      <div className="bg-[#fafafa] md:p-5 flex h-full">
        <div className="bg-white sm:w-[95%] w-full rounded-xl h-auto m-3 py-4 px-[2%]">
          <div className="flex justify-between items-center">
            <div className="flex space-x-3 w-[58%]">
              <div className="flex flex-col w-full">
                <div>Ads</div>
                <div className="flex justify-between group rounded-2xl hover:rounded-[0] hover:rounded-t-2xl relative items-center bg-[#E9EDF7] p-3 w-full">
                  <div>All Ads</div>
                  <div>
                    <FaAngleDown />
                  </div>
                  <div className="absolute hidden rounded-b-2xl group-hover:block border-black pb-2 top-[100%] transition duration-1000 left-0 w-full bg-[#E9EDF7]">
                    <div className="flex flex-col gap-3 px-3 pb-2">
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div>Duration</div>
                <div className="flex justify-between rounded-2xl group hover:rounded-[0] hover:rounded-t-2xl relative items-center bg-[#E9EDF7] p-3 w-full">
                  <div>Last 7 days</div>
                  <div>
                    <FaAngleDown />
                  </div>
                  <div className="absolute hidden rounded-b-2xl group-hover:block border-black pb-2 top-[100%] transition duration-1000 left-0 w-full bg-[#E9EDF7]">
                    <div className="flex flex-col gap-3 px-3 pb-2">
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div>Status</div>
                <div className="flex justify-between group rounded-2xl hover:rounded-[0] hover:rounded-t-2xl relative items-center bg-[#E9EDF7] p-3 w-full">
                  <div>Running</div>
                  <div>
                    <FaAngleDown />
                  </div>
                  <div className="absolute hidden rounded-b-2xl group-hover:block border-black pb-2 top-[100%] transition duration-1000 left-0 w-full bg-[#E9EDF7]">
                    <div className="flex flex-col gap-3 px-3 pb-2">
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                      <div>Lorem ipsum dolor sit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <div className="bg-[#F3F4F6] rounded-full w-10 p-2 flex justify-center items-center h-10 ">
                <BiPencil className="text-3xl" />
              </div>
              <div className="bg-[#F3F4F6] rounded-full w-10 p-2 flex justify-center items-center h-10 ">
                <AiOutlineDelete className="text-3xl" />
              </div>
            </div>
          </div>

          <div className="max-w-full mx-auto my-6 overflow-x-scroll no-scrollbar">
            <table className="min-w-[900px] w-full bg-white border border-separate border-spacing-y-5 rounded-lg">
              <thead className="bg-[#FAFAFA] font-semibold text-[#6E7191]">
                <tr>
                  <th className="py-2 px-4">NAME</th>
                  <th className="py-2 px-4">STATUS</th>
                  <th className="py-2 px-4">Interaction</th>
                  <th className="py-2 px-4">Conversion</th>
                  <th className="py-2 px-4">Avg. Cost</th>
                  <th className="py-2 px-4">START DATE</th>
                  <th className="py-2 px-4">END DATE</th>
                </tr>
              </thead>
              <tbody className="divide-y border-2">
                {data?.map((d, i) => (
                  <tr
                    key={i}
                    className="bg-white border-2 font-semibold border-black "
                  >
                    <td className="py-2 px-4 ">{d?.a?.title}</td>
                    <td className="py-2 px-4 text-center text-[#27AE60]">
                      {d?.a?.status}
                    </td>
                    <td className="py-2 px-4 text-center">₹ 5,00,000</td>
                    <td className="py-2 px-4 text-center">10%</td>
                    <td className="py-2 px-4 text-center">{d?.a?.budget}</td>
                    <td className="py-2 px-4 text-center">
                      {d?.a?.startdate}ayauhs
                    </td>
                    <td className="py-2 px-4 text-center">
                      {d?.a?.enddate}dhdhdjd
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center border-2 p-3">
            <div className="font-semibold"> 2 Ads</div>
            <div className="flex justify-center space-x-5 items-center">
              <div className="flex justify-center space-x-1 p-1 px-3 border-2 rounded-full items-center">
                <div>2</div>
                <div>
                  <FaAngleDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
