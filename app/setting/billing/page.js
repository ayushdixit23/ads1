"use client";
import { API } from "@/Essentials";
import {encryptaes } from "@/app/utils/security";
import useTokenAndData from "@/app/utils/token";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";

const Page = () => {
  const [edit, setEdit] = useState(false);
  const { appData } = useTokenAndData()
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
    appData()
      .then((res) => {
       setData({
          ...data,
          accid: res.advid,
          name: res.firstname,
          country: res.country,
          city: res.city,
          address: res.address,
          accounttype: res.accounttype,
          taxinfo: res.taxinfo,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [appData]);

  const handleSave = async () => {
   const cookieData= await appData()
   console.log(cookieData)
   const id = cookieData?.id
   console.log(id)
    try {
      const res = await axios.post(`${API}/editadvertiser/${id}`, {
        firstname: data?.name,
        city: data?.city,
        country: data?.country,
        taxinfo: data?.taxinfo,
        address: data?.address,
        accounttype: data?.accounttype,
      })
    
      if(res.data?.success){
        Cookies.remove("adwkpiz")
        const datatoputinCookie={
        id: cookieData.id,
        userid:cookieData.userid,
        email: cookieData.email,
        advid:cookieData.advid,
        image: cookieData.image,
        firstname: data?.name,
        city: data?.city,
        country: data?.country,
        taxinfo: data?.taxinfo,
        address: data?.address,
        accounttype: data?.accounttype,
        }
        const str= JSON.stringify(datatoputinCookie)
        const en= encryptaes(str)
        Cookies.set("adwkpiz",en)
      }
      setEdit(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="h-full w-full p-[3%]">
        <h1 className="text-xl font-semibold py-2">Payment Methods</h1>
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
                    
                  }} />
                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">Country</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.country} onChange={(e) => {
                    setData({ ...data, country: e.target.value })
                    
                  }} />

                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">City</div>
                  <input
                    className="text-[#82888D] border outline-none p-2 rounded-lg"
                    value={data.city}
                    onChange={(e) => {
                      setData({ ...data, city: e.target.value })
                    
                    }}
                  />

                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">Address</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.address} onChange={(e) => {
                    setData({ ...data, address: e.target.value })
                 
                  }} />
                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">Account Type</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.accounttype} onChange={(e) => {
                    setData({ ...data, accounttype: e.target.value })
                    
                  }} />
                </div>
                <div className="flex justify-between my-2 items-center">
                  <div className="font-semibold">Tax Info</div>
                  <input className="text-[#82888D] border outline-none p-2 rounded-lg" value={data?.taxinfo} onChange={(e) => {
                    setData({ ...data, taxinfo: e.target.value })
                 
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
                <div className="flex justify-between my-2 p-2 w-full items-center">
                  <div className="font-semibold max-w-[50%]">Name</div>
                  <div className="text-[#82888D] max-w-[50%] max-h-[80px] overflow-y-scroll no-scrollbar">{data?.name}</div>
                </div>
                <div className="flex justify-between my-2 p-2 w-full items-center">
                  <div className="font-semibold max-w-[50%]">Country</div>
                  <div className="text-[#82888D] max-w-[50%] max-h-[80px] overflow-y-scroll no-scrollbar">{data?.country}</div>
                </div>
                <div className="flex justify-between my-2 p-2 w-full items-center">
                  <div className="font-semibold max-w-[50%]">City</div>
                  <div className="text-[#82888D] max-w-[50%] max-h-[80px] overflow-y-scroll no-scrollbar">{data?.city}</div>
                </div>
                <div className="flex justify-between my-2 p-2 w-full items-center">
                  <div className="font-semibold max-w-[50%]">Address</div>
                  <div className="text-[#82888D] max-w-[50%] max-h-[80px] overflow-y-scroll no-scrollbar">{data?.address}</div>
                </div>
                <div className="flex justify-between my-2 p-2 w-full items-center">
                  <div className="font-semibold max-w-[50%]">Account Type</div>
                  <div className="text-[#82888D] max-w-[50%] max-h-[80px] overflow-y-scroll no-scrollbar">{data?.accounttype}</div>
                </div>
                <div className="flex justify-between my-2 p-2 w-full items-center">
                  <div className="font-semibold max-w-[50%]">Tax Info</div>
                  <div className="text-[#82888D] max-w-[50%] max-h-[80px] overflow-y-scroll no-scrollbar">{data?.taxinfo}</div>
                </div>
                {/* <div className="flex justify-between my-2 p-2 w-full items-center">
            <div className="font-semibold max-w-[50%]">Language preference</div>
            <div className="text-[#82888D] max-w-[50%] max-h-[80px] overflow-y-scroll no-scrollbar">Not chosen</div>
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
