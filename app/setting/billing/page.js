"use client";
import { API } from "@/Essentials";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BsToggleOn } from "react-icons/bs";

const Page = () => {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    accid: '',
    name: '',
    country: '',
    city: '',
    address: '',
    accounttype: '',
    taxinfo: '',
  });

  useEffect(() => {
    setData({
      ...data,
      accid: sessionStorage.getItem("advid"),
      name: sessionStorage.getItem("firstname"),
      country: sessionStorage.getItem("country"),
      city: sessionStorage.getItem("city"),
      address: sessionStorage.getItem("address"),
      accounttype: sessionStorage.getItem("accounttype"),
      taxinfo: sessionStorage.getItem("taxinfo"),
    });
  }, [])

  const handleSave = async () => {
    const id = sessionStorage.getItem("id")
    try {
      const res = await axios.post(`${API}/editadvertiser/${id}`, {
        firstname: data?.name,
        city: data?.city,
        country: data?.country,
        taxinfo: data?.taxinfo,
        address: data?.address,
        accounttype: data?.accounttype,
      })
      console.log(res.data)
      setEdit(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="h-full w-full p-[3%]">
        <h1 className="text-xl font-semibold py-2">Payment Methods</h1>

        {/* <div className="flex justify-between my-5 hover:bg-[#fafafa] p-2 items-center">
          <div>Auto Payments</div>
          <div>
            <BsToggleOn className="text-3xl" />
          </div>
        </div> */}
        <div className=" my-5">
          <div className="flex hover:bg-[#fafafa] p-2 justify-between items-center">
            {" "}
            <div>Payments Details</div>
            <div className="cursor-pointer">
              <BiPencil onClick={() => setEdit(!edit)} className="text-2xl" />
            </div>
          </div>

          {
            edit ?
              <div className={`${edit ? null : null}`}>
                <div className="flex justify-between  my-2 items-center">
                  <div className="font-semibold">Name</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.name} onChange={(e) => {
                    setData({ ...data, name: e.target.value })
                    sessionStorage.setItem("firstname", e.target.value)
                  }} />
                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">Country</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.country} onChange={(e) => {
                    setData({ ...data, country: e.target.value })
                    sessionStorage.setItem("county", e.target.value)
                  }} />

                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">City</div>
                  <input
                    className="text-[#82888D] border outline-none p-2 rounded-lg"
                    value={data.city}
                    onChange={(e) => {
                      setData({ ...data, city: e.target.value })
                      sessionStorage.setItem("city", e.target.value)
                    }}
                  />

                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">Address</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.address} onChange={(e) => {
                    setData({ ...data, address: e.target.value })
                    sessionStorage.setItem("address", e.target.value)
                  }} />
                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">Account Type</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.accounttype} onChange={(e) => {
                    setData({ ...data, accounttype: e.target.value })
                    sessionStorage.setItem("accounttype", e.target.value)
                  }} />
                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">Tax Info</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.taxinfo} onChange={(e) => {
                    setData({ ...data, taxinfo: e.target.value })
                    sessionStorage.setItem("taxinfo", e.target.value)
                  }} />

                </div>

                <div className="flex my-2 justify-end">
                  <div className="flex justify-center gap-3 items-center">
                    <div
                      onClick={() => {
                        setEdit
                          (false)
                      }}
                      className="border-2 font-medium p-2 px-4 rounded-md border-[#7D899D]">
                      Cancel
                    </div>
                    <div onClick={handleSave} className="p-2 px-4 rounded-md bg-[#5585FF] font-medium text-white">
                      Save Changes
                    </div>
                  </div>
                </div>
              </div>
              :
              <div className="">
                <div className="flex justify-between my-2 p-2 items-center">
                  <div className="font-semibold">Name</div>
                  <div className="text-[#82888D]">{data?.name}</div>
                </div>
                <div className="flex justify-between my-2 p-2 items-center">
                  <div className="font-semibold">Country</div>
                  <div className="text-[#82888D]">{data?.country}</div>
                </div>
                <div className="flex justify-between my-2 p-2 items-center">
                  <div className="font-semibold">City</div>
                  <div className="text-[#82888D]">{data?.city}</div>
                </div>
                <div className="flex justify-between my-2 p-2 items-center">
                  <div className="font-semibold">Address</div>
                  <div className="text-[#82888D]">{data?.address}</div>
                </div>
                <div className="flex justify-between my-2 p-2 items-center">
                  <div className="font-semibold">Account Type</div>
                  <div className="text-[#82888D]">{data?.accounttype}</div>
                </div>
                <div className="flex justify-between my-2 p-2 items-center">
                  <div className="font-semibold">Tax Info</div>
                  <div className="text-[#82888D]">{data?.taxinfo}</div>
                </div>
                {/* <div className="flex justify-between my-2 p-2 items-center">
            <div className="font-semibold">Language preference</div>
            <div className="text-[#82888D]">Not chosen</div>
          </div> */}
                {/* <div className="flex justify-end">
                  <div className="flex justify-center gap-3 items-center">
                    <div className="border-2 font-medium p-2 px-4 rounded-md border-[#7D899D]">
                      Cancel
                    </div>
                    <div className="p-2 px-4 rounded-md bg-[#5585FF] font-medium text-white">
                      Save Changes
                    </div>
                  </div>
                </div> */}

              </div>
          }




        </div>
        <div className="flex justify-between hover:bg-[#fafafa] p-2 my-5 items-center">
          <div>Account ID</div>
          <div>{data?.accid}</div>
        </div>
      </div>


    </>
  );
};

export default Page;
