"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assests/logo.svg";
import { FiSettings } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [image, setImage] = useState();
  const router = useRouter();
  const [color, setColor] = useState(0);

  useEffect(() => {
    const storedColor = sessionStorage.getItem("selectedColor");
    setColor(storedColor !== null ? parseInt(storedColor, 10) : 0);
  }, []);

  useEffect(() => {
    // Store the selected color in sessionStorage
    // Use sessionStorage to retrieve the stored state or default to 0

    sessionStorage.setItem("selectedColor", color?.toString());
  }, [color]);

  const handleColor = (i) => {
    setColor(i);
  };
  useEffect(() => {
    const pics = sessionStorage.getItem("image");
    setImage(pics);
  }, []);

  return (
    <>
      <div className=" h-screen w-24 bg-white px-4 shadow-sm flex flex-col justify-between py-6 items-center">
        <div className="flex flex-col justify-between items-center h-[45%]">
          <div>
            <Image src={logo} alt="logo" className="w-[50px]" />
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex flex-col text-xs font-medium h-[70vh] gap-6 justify-center items-center">
              <li
                onClick={() => {
                  handleColor(0);
                  router.push("/main/dashboard");
                }}
              >
                <div className="flex flex-col justify-center gap-2 hover:text-blue-500 items-center">
                  <div>
                    <AiOutlineBarChart
                      className={`text-[26px] ${
                        color === 0 ? "text-blue-600 " : null
                      }`}
                    />
                  </div>
                  <div className={`${color === 0 ? "text-blue-600 " : null}`}>
                    Overview
                  </div>
                </div>
              </li>

              <li
                onClick={() => {
                  handleColor(1);
                  router.push("/main/wallet");
                }}
              >
                <div
                  className={` flex flex-col justify-center gap-2 hover:text-blue-500 items-center ${
                    color === 1 ? "text-blue-600 " : null
                  }`}
                >
                  <div>
                    <BiWallet className={` text-[26px]`} />
                  </div>
                  <div className={`${color === 1 ? "text-blue-600 " : null}`}>
                    Wallet
                  </div>
                </div>
              </li>
              <li
                onClick={() => {
                  handleColor(2);
                  router.push("/setting");
                }}
              >
                <div
                  className="flex flex-col justify-center gap-2 hover:text-blue-500 items-center"
                  href="/setting"
                >
                  <div>
                    <FiSettings
                      className={`text-[26px] ${
                        color === 2 ? "text-blue-600 " : null
                      }`}
                    />
                  </div>
                  <div className={`${color === 2 ? "text-blue-600 " : null}`}>
                    Settings
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={image} width={50} height={50} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
