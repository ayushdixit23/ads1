import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  // const [data, setData] = useState([]);
  // const createAD = async () => {
  //   const id = sessionStorage.getItem("id");
  //   try {
  //     const res = await axios.post(`${API}/newad/${id}`);
  //     const data = await res?.data;
  //     if (data?.success) {
  //       const {} = data;
  //     }
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
      <div className="flex justify-between bg-white items-center px-4 sm:px-[2%]">
        <div className="sm:text-3xl text-xl py-5 font-semibold">Overview</div>
        <Link
          href="/createAd"
          className="flex justify-center cursor-pointer items-center bg-[#1A73E8] text-white p-2 sm:px-4 px-3 rounded-full space-x-2"
        >
          <div>
            <AiOutlinePlus className="text-xl font-semibold" />
          </div>
          <div>
            <p className="pr-2 ">Create Ad</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
