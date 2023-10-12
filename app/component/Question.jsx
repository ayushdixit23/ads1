"use client";
import React, { useState } from "react";
import Organ from "./Organ";
import Indiv from "./Indiv";
import { BiRadioCircleMarked } from "react-icons/bi";

const Question = () => {
  const [radio, setRadio] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col w-full">
          <div className="text-xl py-2 font-semibold">Select Type ?</div>
          <div className="flex items-center my-2">
            <div className="text-xl flex items-center font-semibold">
              <BiRadioCircleMarked
                onClick={() => setRadio(1)}
                className={`${radio === 1 ? "text-blue-500" : null}`}
              />
              <label className="mx-1">Individual</label>
            </div>
            <div className="text-xl flex items-center font-semibold">
              <BiRadioCircleMarked
                onClick={() => setRadio(2)}
                className={`${radio === 2 ? "text-blue-500" : null}`}
              />
              <label className="mx-1">Organisation</label>
            </div>
          </div>
        </div>
        {radio === 1 ? <Indiv /> : null}
        {radio === 2 ? <Organ /> : null}
      </div>
    </>
  );
};

export default Question;
