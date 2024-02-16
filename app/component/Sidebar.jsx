"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assests/logo.svg";
import { FiSettings } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { BsPeopleFill } from "react-icons/bs";
import { ModeToggle } from "./ModeToggle";
import { getData } from "../utils/useful";


const Sidebar = () => {
  const router = useRouter();
  const [color, setColor] = useState(0);
  const { image } = getData()
  useEffect(() => {
    // Retrieve the selected color from sessionStorage
    const storedColor = sessionStorage.getItem("selectedColor");

    if (storedColor !== null) {
      setColor(parseInt(storedColor, 10));
    }
  }, []);

  const handleColor = (i) => {
    setColor(i);

    // Store the selected color in sessionStorage
    sessionStorage.setItem("selectedColor", i.toString());

    switch (i) {
      case 0:
        router.push("/main/dashboard");
        break;
      case 1:
        router.push("/main/wallet");
        break;
      case 2:
        router.push("/setting");
        break;
      case 3:
        router.push("/main/community");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="h-screen w-24 bg-maincolor px-4 shadow-sm flex flex-col justify-between py-6 items-center">
        <div className="flex flex-col justify-between items-center h-[45%]">
          <div>
            <Image src={logo} alt="logo" className="w-[50px]" />
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex flex-col text-xs font-medium h-[70vh] gap-6 justify-center items-center">
              <li
                onClick={() => {
                  handleColor(0);
                }}
              >
                <div className="flex flex-col justify-center gap-2 hover:text-blue-500 items-center">
                  <div>
                    <AiOutlineBarChart
                      className={`text-[26px] ${color === 0 ? "active [&.active]:text-blue-600 " : null
                        }`}
                    />
                  </div>
                  <div
                    className={`${color === 0 ? "active [&.active]:text-blue-600 " : null
                      }`}
                  >
                    Overview
                  </div>
                </div>
              </li>

              <li
                onClick={() => {
                  handleColor(3);
                }}
              >
                <div
                  className={` flex flex-col justify-center gap-2 hover:text-blue-500 items-center ${color === 3 ? "active [&.active]:text-blue-600 " : null
                    }`}
                >
                  <div>
                    <BsPeopleFill
                      className={` text-[26px]`} />
                  </div>
                  <div
                    className={`${color === 3 ? "active [&.active]:text-blue-600 " : null
                      }`}
                  >
                    Community
                  </div>
                </div>
              </li>

              <li
                onClick={() => {
                  handleColor(1);
                }}
              >
                <div
                  className={` flex flex-col justify-center gap-2 hover:text-blue-500 items-center ${color === 1 ? "active [&.active]:text-blue-600 " : null
                    }`}
                >
                  <div>
                    <BiWallet className={` text-[26px]`} />
                  </div>
                  <div
                    className={`${color === 1 ? "active [&.active]:text-blue-600 " : null
                      }`}
                  >
                    Wallet
                  </div>
                </div>
              </li>

              <li
                onClick={() => {
                  handleColor(2);
                }}
              >
                <div
                  className="flex flex-col justify-center gap-2 hover:text-blue-500 items-center"
                  href="/setting"
                >
                  <div>
                    <FiSettings
                      className={`text-[26px] ${color === 2 ? "active [&.active]:text-blue-600 " : null
                        }`}
                    />
                  </div>
                  <div
                    className={`${color === 2 ? "active [&.active]:text-blue-600 " : null
                      }`}
                  >
                    Settings
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {image && <Image src={image} width={50} height={50} alt="profile" />}
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
