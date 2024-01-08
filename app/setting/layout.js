"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import LogoutModal from "../component/LogOut";
import MobileNav from "../component/MobileNav";
import Image from "next/image";
import useTokenAndData from "../utils/token";


export default function SettingLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChildrenHidden, setIsChildrenHidden] = useState(false);
  const [user, setUser] = useState({ name: "", image: "", accountid: "" });
  const {appData} = useTokenAndData()

  useEffect(() => {
    appData()
      .then((data) => {
        setUser({
          name: data.firstname,
          image: data.image,
          accountid: data.advid,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToggleChildren = () => {
    setIsChildrenHidden(!isChildrenHidden);
  };

  const handleLogout = () => {
    setIsModalOpen(false);
    // Add your logout logic here
  };

  // (() => {
  // 	if (window.history && window.history.pushState) {

  // 		window.addEventListener('popstate', function () {
  // 			setIsChildrenHidden(false)

  // 		});
  // 	}
  // })();



  (() => {
    if (
      typeof window !== "undefined" &&
      window.history &&
      window.history.pushState
    ) {
      window.addEventListener("popstate", function () {
        // Check if 'setIsChildrenHidden' is defined and is a function before calling it
        if (typeof setIsChildrenHidden === "function") {
          setIsChildrenHidden(false);
        }
      });
    } else {
      console.warn("History API is not supported by this browser");
    }
  })();

  return (
    <div>
      <div>
        <div className="bg-black select-none">
          <div className="flex bg-slate-50  ">
            <div className="pn:max-sm:hidden max-h-screen">
              <Sidebar />
            </div>
            <div
              className="sm:hidden
						"
            >
              <MobileNav />
            </div>
            <div
              className={`w-full md:overflow-y-scroll max-h-screen md:no-scrollbar`}
            >
              <div className="py-4 px-5 shadow-md bg-white">
                <div className="text-2xl py-2 font-semibold">Settings</div>
              </div>
              <div className="bg-[#f8f8f8]  grid grid-cols-1 w-full h-[90%] sm:h-full p-[2%]">
                <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 md:gap-8">
                  <div
                    className={`sm:col-span-1 h-[90%] rounded-2xl bg-white max-h-screen sm:max-md:p-[2%] p-[3%] ${
                      isChildrenHidden
                        ? "pn:max-sm:hidden"
                        : " pn:max-sm:w-full"
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 bg-[#f9f9f9] sm:max-md:p-2 p-4 rounded-xl">
                        <div>
                          <Image
                            src={user?.image}
                            width={60}
                            height={60}
                            className="min-w-[50px]"
                            alt="profile"
                          />
                        </div>
                        <div>
                          <div className="text-lg sm:max-md:text-base font-semibold">
                            {" "}
                            {user?.name}
                          </div>
                          <div className="font-medium">{user?.accountid}</div>
                        </div>
                      </div>
                      <Link
                        onClick={() => setIsChildrenHidden(true)}
                        href="/setting/billing"
                        className="text-lg rounded-xl focus:bg-[#f9f9f9] hover:bg-[#f9f9f9] my-2 p-2 py-3  font-semibold"
                      >
                        Billing and Payments
                      </Link>
                      <Link
                        onClick={() => setIsChildrenHidden(true)}
                        href="/setting/verfication"
                        className="text-lg p-2 py-3   my-2 rounded-xl focus:bg-[#f9f9f9] hover:bg-[#f9f9f9] font-semibold"
                      >
                        Advertiser Verification
                      </Link>
                      {/* <div className="text-lg p-2 py-3  py-4 font-semibold">
												Help And Support
											</div> */}
                      <Link
                        href="/setting/feedback"
                        className=" text-lg p-2 py-3   my-2  rounded-xl focus:bg-[#f9f9f9] hover:bg-[#f9f9f9] font-semibold"
                      >
                        Feedback
                      </Link>
                      <div
                        onClick={() => setIsModalOpen(true)}
                        className=" text-lg p-2 py-3 my-1 rounded-xl focus:bg-[#f9f9f9] hover:bg-[#f9f9f9] font-semibold"
                      >
                        Log Out
                      </div>
                      <LogoutModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onLogout={handleLogout}
                      />
                    </div>
                  </div>
                  <div
                    className={`bg-white overflow-y-scroll no-scrollbar max-h-screen sm:col-span-2 rounded-xl ${
                      isChildrenHidden ? "" : "pn:max-sm:hidden"
                    }`}
                  >
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
