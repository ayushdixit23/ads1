import React from "react";

const Organ = () => {
  return (
    <>
      <div className="flex justify-center  flex-col">
        {" "}
        <div className="grid grid-cols-2 gap-4 my-2">
          <div>
            <div>First Name</div>
            <input
              className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
              type="text"
            />
          </div>
          <div>
            <div>Last Name</div>
            <input
              className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
              type="text"
            />
          </div>
        </div>
        <div>
          <label>Organisation Name</label>
          <input
            className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
            type="text"
          />
        </div>
        <div>
          <label>Pan</label>
          <input
            className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
            type="text"
          />
        </div>
        <div>
          <label>G.S.T</label>
          <input
            className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
            type="number"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
            type="email"
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
            type="tel"
          />
        </div>
        <div>
          <label>Address</label>
          <input
            className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
            type="text"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div>City</div>
            <input
              className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
              type="text"
            />
          </div>
          <div>
            <div>State</div>
            <input
              className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div>Postal Code</div>
            <input
              className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
              type="text"
            />
          </div>
          <div>
            <div>Famous Landmark</div>
            <input
              className="p-2 outline-none bg-[#BDC4CD]/20 w-full rounded-xl my-2"
              type="text"
            />
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <label>
            I have read and agreed to the{" "}
            <span className="text-[#0075FF]">Terms & Conditions</span> and
            <span className="text-[#0075FF]">Privacy policy</span>
          </label>
        </div>
        <button className="w-full p-2 bg-black text-white font-semibold rounded-xl my-2">
          Save
        </button>
      </div>
    </>
  );
};

export default Organ;
