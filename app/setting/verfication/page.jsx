"use client";
import { API } from "@/Essentials";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";

const page = () => {
  const [pop, setPop] = useState(false);
  const [user, setUser] = useState({ name: "", pic: "", picname: "" });

  const handleSave = async () => {
    const id = sessionStorage.getItem("id");

    if (user?.name && user?.pic) {
      try {
        const form = new FormData();
        form.append("name", user?.name);
        form.append("image", user?.pic);
        form.append("imagename", user?.picname);
        const res = await axios.post(`${API}/verifyadvertiser/${id}`, form);
        console.log(res?.data);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <div>
        {pop && (
          <div
            onClick={() => setPop(false)}
            className="fixed inset-0 z-40 bg-black opacity-50 backdrop-blur-2xl"
          ></div>
        )}
        <div
          className={`${
            pop
              ? "fixed inset-0 flex items-center p-3 justify-center z-50"
              : "hidden"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="sm:w-[58%] md:w-[43%] h-auto shadow-lg rounded-2xl bg-white p-[3%]"
          >
            {/* p-3 */}
            {/* <div className="flex justify-end p-[1%]">
              <RxCross2
             
                className="text-2xl cursor-pointer font-bold"
              />
            </div> */}
            {/* div remove1 */}
            <div className="p-[2%]">
              <div className="p-5 rounded-2xl">
                <h1 className="text-3xl font-bold py-1">Verification</h1>
                <p>
                  Fill in the registration data. It will take a couple of
                  minutes.{" "}
                </p>
                <div className="relative w-full mt-6 h-20">
                  <input
                    placeholder="Johan Liebert"
                    id="name"
                    className="py-1 transition-colors placeholder-transparent h-10 peer outline-none absolute top-0 left-0 duration-300 border-b w-full"
                    type="text"
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-0 -top-4 left-0 text-sm  peer-focus:-top-4 absolute pb-2 transition-all duration-300 font-semibold"
                  >
                    Full Name
                  </label>
                </div>
                <p className="-mt-7">
                  Confirm phone number with code from sms message
                </p>
                <div>
                  <h1 className="font-medium py-2">
                    Upload your Pan Or Aadhaar
                  </h1>
                  <div className="w-full flex justify-center flex-col rounded-2xl items-center p-2 h-[160px] border-2 border-black border-dashed">
                    <label htmlFor="image">
                      <AiOutlineUpload className="text-3xl" />
                    </label>
                    <div className="text-center text-sm py-2">
                      Drop your images here, or{" "}
                      <label htmlFor="image" className="text-[#007AFF]">
                        click to browse
                      </label>
                      <br />
                      Recommended, up to 5 MB
                    </div>
                    <div className="my-3">
                      <label
                        className="text-lg font-semibold border-2 border-black p-2 px-4 rounded-full"
                        htmlFor="image"
                      >
                        Upload File
                      </label>
                      <input
                        id="image"
                        onChange={(e) =>
                          setUser({
                            ...user,
                            pic: e.target.files[0],
                            picname: URL.createObjectURL(e.target.files[0]),
                          })
                        }
                        className="w-full hidden"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex sm:flex-row flex-col gap-3 justify-center items-center">
                <button
                  onClick={handleSave}
                  className="bg-[#5585FF] sm:hidden text-white p-2 rounded-xl w-full"
                >
                  Submit
                </button>
                <button
                  onClick={() => setPop(false)}
                  className="bg-[#fff] text-black border-2 border-black p-2 rounded-xl w-full"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-[#5585FF] pn:max-sm:hidden
                 text-white p-2 rounded-xl w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full sm:p-[2%] p-3 md:p-[4%]">
        <h1 className="text-xl font-semibold p-2 border-b-2">
          Advertiser Verification
        </h1>
        <div>
          <h1 className="sm:my-5 my-3 font-semibold">
            Verify your identity to build trust with your audience
          </h1>
          <div className="bg-[#FAFAFA] flex justify-between items-center p-2 sm:p-3 sm:px-5">
            <div>Your Status</div>
            <div className="text-red-500">Unverified</div>
          </div>
          <div
            className="flex justify-end items-center my-4 sm:my-7
		  "
          >
            <button
              onClick={() => setPop(!pop)}
              className="bg-[#5585FF] p-2 rounded-md  px-6 text-white"
            >
              Start Verification
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
