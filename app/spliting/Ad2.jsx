import React from 'react'
import { BsCheckLg } from 'react-icons/bs';
import styles from "../CustomScrollbarComponent.module.css";
import { AiFillCheckCircle, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import Square3 from '../component/Square3';
import Square4 from '../component/Square4';
import feed from "../assests/feed.svg";
import video from "../assests/video.svg";
import search from "../assests/search.svg";
import Image from 'next/image';
import { formatDateToString } from '../utils/useful';

const Ad2 = ({

	setCLick,
	setThree,
	setT,
	toggleType,
	three,
	PointsCategory,
	handleCategoryChange,
	inputValue,
	setInputValue,
	myAgeHandle,
	click,
	handleAgeRangeChange,
	isdatavalid,
	ProperAudience,
	ctr,
	pricebyDay,
	totalPrice,
	myLocation,
	t,

}) => {
	return (
		<>
			<div>
				<div className="grid bg-[#F8F8F8] grid-cols-1 pn:max-md:hidden">
					<div className="flex bg-[#1b2431] flex-col ">
						{/* <div className=" sticky top-0 z-50">
							<div className="flex bg-maincolor w-full justify-between items-center px-5 py-4">
								<div className="text-[#555555] text-xl font-semibold">
									Set up a new Ad
								</div>
								<div className="flex justify-center items-center gap-3 ">
									<div
										onClick={() => setStep(0)}
										className="border-b cursor-pointer border-black"
									>
										Discard
									</div>

									{isdatavalid ? (
										<div
											className="p-2 px-7 rounded-full cursor-pointer bg-[#2D9AFF] text-white"
											onClick={() => setStep(2)}
										>
											Next
										</div>
									) : (
										<div className="p-2 px-7 rounded-full bg-[#b3bbc3] text-white">
											Next
										</div>
									)}
								</div>
							</div>
						</div> */}
						{/* <div>
							<div>
								<div className="flex justify-center dark:bg-[#273142] shadow-lg bg-[#fafafa] pt-5 py-3 mt-3">
									<div className=" flex flex-col justify-center items-center">
										<div
											className={`h-10 w-10 rounded-full flex items-center justify-center ${step >= 0
												? "bg-[#27AE60] border-2 text-white"
												: "text-white"
												}`}
										>
											{step >= 1 ? (
												<BsCheckLg className="text-lg font-bold" />
											) : (
												1
											)}
										</div>

										<div
											className={` flex items-center font-semibold flex-col ${step > 1 ? "text-blue-600 " : "text-[#27AE60]"
												}`}
										>
											Set up Ad
										</div>
									</div>

									<div
										className={`border-[#f9f9f9] border-dashed border-t-2 w-20 mt-5 ${step >= 0 ? "border-black " : "border-black "
											}`}
									/>

									<div className="flex flex-col justify-center items-center">
										<div
											className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${step >= 1
												? "bg-blue-600 text-white"
												: "bg-green-300 text-white"
												}`}
										>
											2
										</div>

										<div
											className={` flex items-center flex-col ${step >= 1 ? "text-blue-600 " : "text-green-300"
												}`}
										>
											Select target
										</div>
									</div>
									<div
										className={`border-[#f9f9f9] border-dashed border-t-2 w-20  mt-5 ${step >= 1 ? "border-black " : "border-black "
											}`}
									/>
									<div className="flex flex-col justify-center items-center">
										<div
											className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${step >= 2
												? "bg-blue-600 text-white"
												: "border-4 border-black "
												}`}
										>
											3
										</div>

										<div
											className={`flex items-center flex-col justify-center ${step === 2 ? "text-blue-600 " : "text-black"
												}`}
										>
											Preview & Launch
										</div>
									</div>
								</div>
							</div>
						</div> */}
						<div className="flex justify-center max-h-[800px] dark:bg-[#273142] bg-[#fafafa] gap-9 px-[2%] pn:max-md:hidden">
							<div
								className={`${styles.customScrollbar} pn:max-md:hidden md:w-[900px] overflow-y-scroll dark:bg-[#1b2431] bg-[#F0F2F5] border-2 my-4 rounded-2xl py-5 px-5`}
							>
								<h1 className="sm:text-3xl text-xl font-semibold py-2">
									Select Target
								</h1>
								<div className="bg-maincolor my-3 px-[2%] select-none py-2 rounded-xl ">
									<h2 className="sm:text-xl text-lg font-semibold py-2">
										Select Optimal section for effective advertising
									</h2>
									<div className="flex flex-wrap gap-3 my-4">
										<div
											onClick={() => toggleType("infeed")}
											className={` flex flex-col justify-center border relative  p-2 z-0  items-center min-w-[150px] max-w-[250px] rounded-lg ${three.type.includes("infeed")
												? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
												: ""
												}`}
										>
											<div>
												<Image
													src={feed}
													className="w-[90px] h-[90px]"
													alt="infeed"
												/>
											</div>
											<div className="font-medium py-2">In Feed Ads</div>
											{three.type.includes("infeed") && (
												<div className={`absolute -top-2 -right-2 z-50`}>
													<AiFillCheckCircle className="text-blue-600 z-50 text-xl" />
												</div>
											)}
										</div>
										<div
											onClick={() => toggleType("search")}
											className={` flex flex-col justify-center border relative  p-2 z-0 items-center min-w-[150px] max-w-[250px] rounded-lg ${three.type.includes("search")
												? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
												: ""
												}`}
										>
											<div>
												<Image
													src={video}
													className="w-[90px] h-[90px]"
													alt="search"
												/>
											</div>
											<div className="font-medium py-2">Search</div>
											{three.type.includes("search") && (
												<div className={`absolute -top-2 -right-2`}>
													<AiFillCheckCircle className="text-blue-600 text-xl" />
												</div>
											)}
										</div>
										<div
											onClick={() => toggleType("videoads")}
											className={` flex flex-col justify-center border relative  p-2 z-0  items-center min-w-[150px] max-w-[250px] rounded-lg ${three.type.includes("videoads")
												? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
												: ""
												}`}
										>
											<div>
												<Image
													src={search}
													className="w-[90px] h-[90px]"
													alt="video"
												/>
											</div>{" "}
											<div className="font-medium py-2">Video Ads</div>
											{three.type.includes("videoads") && (
												<div className={`absolute -top-2 -right-2`}>
													<AiFillCheckCircle className="text-blue-600 text-xl" />
												</div>
											)}
										</div>
									</div>
								</div>

								<div className="my-[4%] rounded-xl">
									<div className="py-3 px-[2%] rounded-t-xl bg-maincolor relative">
										<h1 className="text-lg py-1 font-medium">Category</h1>
										<div className="w-full flex justify-center items-center rounded-xl border ">
											<BiMap className="border-r-2 p-2 text-4xl" />
											<div
												placeholder="Select a Category"
												className="w-full rounded-xl p-2 outline-none "
											>
												{three.category}
											</div>
										</div>

										<div className="relative overflow-y-scroll my-3 no-scrollbar w-[360px] h-[230px]">
											<div>
												<div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-maincolor">
													<div className="text-sm text-[#6B778C] mb-2 pb-2">
														Categories{" "}
													</div>
													<div className="flex flex-col gap-2">
														{PointsCategory?.map((data, i) => (
															<div
																key={i}
																className="flex items-center z-20 gap-2"
															>
																<input
																	type="radio"
																	name="mycategory"
																	onChange={() =>
																		handleCategoryChange(
																			data.name,
																			data.points,
																			data.audienceByCategory,
																			data.ctr
																		)
																	}
																	checked={data.name === three.category}
																/>

																<div className="text-lg font-medium">
																	{data.name}
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="py-2 px-[2%] bg-maincolor rounded-b-xl relative">
										<h1 className="text-lg py-1 font-medium">Enter Tags</h1>
										<div className="w-full flex justify-center items-center  rounded-xl border ">
											<BiMap className="border-r-2 p-2 text-4xl" />
											<input
												name="myForm"
												type="text"
												onChange={(e) => {
													setT(e.target.value);
												}}
												onKeyPress={(e) => {
													if (!t) return;
													else if (three?.tags?.length < 5) {
														if (e.key === "Enter") {
															setThree((three) => ({
																...three,
																tags: [...three.tags, e.target.value],
															}));
															setT("");
														}
													} else {
														if (e.key === "Enter") {
															setT(e.target.value);
														}
													}
												}}
												value={t}
												placeholder="tags"
												className="w-full rounded-xl p-2 outline-none "
											/>
										</div>
										{three?.tags?.length >= 5 && t !== "" && (
											<>
												<div className="text-sm font-medium py-3 text-red-500">
													Cant insert more than 5 tags
												</div>
											</>
										)}
										<div className="flex  flex-wrap items-center gap-2 my-3">
											{three?.tags?.map((f, g) => (
												<div
													key={g}
													className="flex justify-center items-center gap-2 bg-[#FAFAFA] p-2 px-3 rounded-full"
												>
													<div>{f}</div>
													<div
														onClick={() => {
															setThree((three) => ({
																...three,
																tags: three.tags.filter((_, h) => h !== g),
															}));
														}}
													>
														<AiOutlineClose className="text-white bg-black rounded-full" />
													</div>
												</div>
											))}
										</div>

										<div className="text-[#5585FF] text-[13px] mt-2">
											Note: Enter tags that your audience interested in..
										</div>
									</div>
								</div>

								<div className="my-[4%] rounded-xl py-2 px-[2%] bg-maincolor">
									<h1 className="text-2xl font-semibold py-2">
										Target Audience
									</h1>

									<div>
										<h1 className="text-lg py-1 font-medium">
											Location
											<span className="text-[#FF4444]">*</span>
										</h1>
										<div className="w-full flex justify-center items-center rounded-xl border">
											<BiMap className="border-r-2 p-2 text-4xl" />
											<input
												name="selectinput"
												type="text"
												onChange={() => { }}
												placeholder="Enter the location to target audience"
												className="w-full rounded-xl p-2 outline-none"
												value={inputValue}
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														if (inputValue && three.location.length < 3) {
															setThree((prevState) => ({
																...prevState,
																location: [...prevState.location, inputValue],
															}));
															setInputValue("");
														}
													}
												}}
											/>
										</div>

										<div>
											{three.location.length >= 3 && inputValue !== "" && (
												<>
													<div className="text-sm font-medium py-2 text-red-500">
														Cant insert more than 3 locations
													</div>
												</>
											)}
										</div>

										<div className="flex items-center flex-wrap gap-2 my-3 mb-4">
											{three?.location?.map((m, i) => (
												<div
													key={i}
													className="flex justify-center items-center gap-2 bg-[#FAFAFA] p-2 px-3 rounded-full "
												>
													<div>{m}</div>
													<div
														onClick={() => {
															setThree((three) => ({
																...three,
																location: three.location.filter(
																	(_, a) => a !== i
																),
															}));
														}}
													>
														<AiOutlineClose className="text-white bg-black rounded-full" />
													</div>
												</div>
											))}
										</div>

										<div className="relative overflow-y-scroll no-scrollbar w-[360px] h-[230px]">
											<div>
												<div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-maincolor">
													<div className="text-sm text-[#6B778C] mb-2 pb-2">
														Trending tags related to Tech{" "}
													</div>
													<div className="flex flex-col gap-2">
														{myLocation.map((l, i) => (
															<div key={i} className="flex items-center gap-1">
																<input
																	name={i}
																	type="checkbox"
																	onClick={handleCheckboxClick}
																	checked={three.location.includes(l.name)}
																	onChange={(event) => {
																		const isChecked = event.target.checked;
																		if (isChecked) {
																			// If checkbox is checked, set the value to the input field
																			setInputValue(l.name);
																		} else {
																			// If checkbox is unchecked, clear the input field and remove from location array
																			setInputValue("");
																			setThree((prevState) => ({
																				...prevState,
																				location: prevState.location.filter(
																					(item) => item !== l.name
																				),
																			}));
																		}
																	}}
																/>

																<div className="font-medium">{l.name}</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>

										<div className="text-[#5585FF] text-[13px] my-2">
											Note: Prices may fluctuate depending on factors such as
											traffic, weather conditions, events etc..
											<span className="text-[#5585FF] mx-1">Learn more</span>
										</div>
									</div>

									<div>
										<h1 className="font-semibold py-2">Gender</h1>

										<div className="flex flex-wrap gap-2 items-center">
											<div
												onClick={() => {
													setThree({ ...three, gender: "Men" });
												}}
												className={`p-2 px-6 rounded-full ${three.gender === "Men"
													? "text-white bg-blue-500"
													: "border border-black"
													} `}
											>
												Men
											</div>
											<div
												onClick={() => {
													setThree({ ...three, gender: "Women" });
												}}
												className={`p-2 px-6 rounded-full ${three.gender === "Women"
													? "text-white bg-blue-500"
													: "border border-black"
													} `}
											>
												Women
											</div>
											<div
												onClick={() => {
													setThree({ ...three, gender: "Both" });
												}}
												className={`p-2 px-6  rounded-full ${three.gender === "Both"
													? "text-white bg-blue-500"
													: "border border-black"
													} `}
											>
												Both
											</div>
										</div>

										<div className="my-3">
											<h1 className="font-semibold py-2">Age Group</h1>
											<div className="flex space-x-4 items-center">
												<div className="flex justify-center items-center space-x-1">
													<input
														onClick={() => {
															setCLick(0);
															setThree({
																...three,
																selectedAgeRange: "",
																age: "All age group",
																maxage: "",
																minage: "",
															});
														}}
														type="radio"
														name="age"
													/>
													<div className="font-semibold ">All Age Groups</div>
												</div>
												<div className="flex justify-center items-center space-x-1">
													<input
														onClick={() => {
															myAgeHandle();
														}}
														type="radio"
														name="age"
														id="ageweb"
													/>
													<div className="font-semibold">Age Range</div>
												</div>
											</div>
											<div className={`${click === 1 ? null : "hidden"}`}>
												<label className="font-medium my-2" htmlFor="ageRange">
													Select Age Range:
												</label>
												<select
													id="ageRange"
													className="p-1 border outline-none rounded-lg border-[#e6e6e6] mx-1 my-2"
													name="ageRange"
													value={three.selectedAgeRange}
													onChange={handleAgeRangeChange}
												>
													<option value="12-18">12-18</option>
													<option value="19-40">19-40</option>
													<option value="41-65">41-65</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className="my-[4%] rounded-xl py-3 px-[2%] bg-maincolor">
									<div>
										<h1 className="text-2xl font-semibold">
											Schedule and duration
										</h1>
										<div className="grid grid-cols-2 w-full gap-4 py-2">
											<div className="flex flex-col w-full">
												<label
													htmlFor="sdate"
													className="text-lg font-semibold py-2"
												>
													Start Date<span className="text-[#FF4444]">*</span>
												</label>
												<input
													name="myForm"
													id="sdate"
													type="date"
													onChange={(e) =>
														setThree({
															...three,
															startDate: e.target.value,
														})
													}
													value={formatDateToString(three.startDate)}
													placeholder="Enter Campaign Name"
													className="w-full border rounded-xl outline-none p-2"
												/>
											</div>
											{/* <div
                        className={`${
                          date ? "flex flex-col space-y-1" : "hidden"
                        }`}
                      >
                        <label
                          htmlFor="edate"
                          className="text-lg font-semibold py-2"
                        >
                          End Date<span className="text-[#FF4444]">*</span>
                        </label>
                        <input
                          name="myForm"
                          id="edate"
                          onChange={(e) =>
                            setThree({
                              ...three,
                              endDate: e.target.value,
                            })
                          }
                          value={formastEndDate}
                          type="date"
                          placeholder="Enter Campaign Name"
                          className="w-full border rounded-xl outline-none p-2"
                        />
                        {formastEndDate < formastStartDate && (
                          <div className="text-sm text-red-700">
                            Please Enter a Valid Enddate
                          </div>
                        )}
                      </div> */}


											{/* <div className="flex flex-col relative top-1 w-full gap-2">
                        <label
                          htmlFor="dbudget"
                          className="text-lg font-semibold"
                        >
                          Daily Budget
                        </label>
                        <div className="flex justify-center rounded-xl items-center border">
                          <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
                          <input
                            id="dbudget"
                            onChange={(e) =>
                              setThree({
                                ...three,
                                DailyBudget: e.target.value,
                              })
                            }
                            value={three.DailyBudget}
                            type="number"
                            placeholder="Enter Daily Budget"
                            className="w-full px-2 rounded-xl outline-none"
                          />
                        </div>
                      </div> */}
										</div>

										<div className="my-[2%]">
											<h1 className="text-lg py-2 font-semibold">
												Select Ad Duration
											</h1>
											<div className="flex flex-wrap my-2 gap-4">
												<div
													onClick={() => setThree({ ...three, duration: 1 })}
													className={`${three.duration == 1
														? "bg-[#2D9AFF] text-white"
														: "border border-black"
														} p-1 px-5 rounded-full`}
												>
													1 day
												</div>
												<div
													onClick={() => setThree({ ...three, duration: 7 })}
													className={`${three.duration === 7
														? "bg-[#2D9AFF] text-white"
														: "border border-black"
														} p-1 px-5 rounded-full`}
												>
													7 days
												</div>
												<div
													onClick={() => setThree({ ...three, duration: 30 })}
													className={`${three.duration === 30
														? "bg-[#2D9AFF] text-white"
														: "border  border-black"
														} p-1 px-5 rounded-full`}
												>
													30 days
												</div>
											</div>
										</div>
									</div>
									{/* <div className="flex flex-col gap-1">
                    <div className="flex gap-2 my-2 items-center">
                      <input
                        name="myFormzpp"
                        id="258"
                        type="radio"
                        onChange={() => {
                          setDate(false);
                        }}
                        className="w-4 h-4"
                        checked={!date}
                      />
                      <div className="flex flex-col">
                        <div className="font-medium">
                          Run this ad Continuously
                        </div>
                        <div>
                          Your ad will run continuously for a daily budget. This
                          option is recommended. Learn more
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 my-2 items-center">
                      <input
                        name="myFormzder"
                        id="234"
                        type="radio"
                        onChange={() => {}}
                        onClick={() => {
                          setDate(true);
                          setThree({ ...three, endDate: "" });
                        }}
                        checked={date}
                        className="w-4 h-4"
                      />
                      <div className="font-medium">
                        Choose When this Ad Will End
                      </div>
                    </div>
                  </div> */}
									{/* <div>
                    <h1 className="text-2xl font-semibold">Budget</h1>
                    <div className="grid grid-cols-2 gap-4 py-3">
                      <div className="flex flex-col space-y-1">
                        <label
                          htmlFor="tbudget"
                          className="text-lg font-semibold"
                        >
                          Total Budget
                        </label>
                        <div className="flex justify-center  rounded-xl items-center border">
                          <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
                          <input
                            id="tbudget"
                            name="myForm"
                            onChange={(e) =>
                              setThree({
                                ...three,
                                TotalBudget: e.target.value,
                              })
                            }
                            value={three.TotalBudget}
                            type="text"
                            placeholder="Enter Total Budget"
                            className="w-full rounded-xl outline-none p-2"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </div> */}
								</div>
								{/* <div className="lg:min-w-[700px] bg-maincolor my-4 rounded-2xl py-5 px-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="font-bold">Payment Details</div>
                      
                    </div>
                    <div className="bg-[#FAFAFA] p-5 rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Ad Budget</div>
                          <div>₹ 10,000.00</div>
                        </div>
                

                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Taxes and Charges</div>
                          <div>₹ 1800</div>
                        </div>
                        <div className="flex justify-between p-[2px] items-center">
                          <div className="font-medium">Total</div>
                          <div className="font-semibold">₹ 10,800</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
							</div>
							<div className="flex flex-col items-center">
								<Square3 display={ProperAudience ? ProperAudience : 0} />
								<Square4
									ctr={ctr ? ctr : 0}
									duration={three.duration ? three.duration : 1}
									price={pricebyDay ? pricebyDay : 0}
									daily={totalPrice ? totalPrice : 0}
									display={ProperAudience ? ProperAudience : 0}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* mobile */}
				<div className="md:hidden">
					<div className="flex bg-maincolor flex-col py-2">
						{/* <div className="fixed left-0 w-full top-0 z-50">
							<div className="flex bg-maincolor justify-between px-5 items-center py-4 shadow-md">
								<div className="text-[#555555] text-xl font-semibold">
									Ad SetUp
								</div>
								<div className="flex justify-center items-center gap-3 ">
									<div
										onClick={() => setStep(0)}
										className="border-b hidden cursor-pointer border-black"
									>
										Discard
									</div>

									{isdatavalid ? (
										<div
											onClick={() => setStep(2)}
											className="p-2 px-7 rounded-full cursor-pointer bg-[#2D9AFF] text-white"
										>
											Next
										</div>
									) : (
										<div className="p-2 px-7 rounded-full bg-[#b3bbc3] text-white">
											Next
										</div>
									)}
								</div>
							</div>
						</div> */}
						{/* <div>
							<div>
								<div
									style={{ marginTop: "4rem" }}
									className="flex justify-center bg-[#fafafa] dark:bg-[#273142] pt-5 py-3 mt-3 pn:max-sm:text-xs text-center px-3"
								>
									<div className=" flex flex-col gap-1 justify-center items-center">
										<div
											className={` h-10 w-10 rounded-full mr-2 flex items-center justify-center ${step >= 0 ? "bg-[#27AE60] text-white" : ""
												}`}
										>
											{step > 0 ? (
												<BsCheckLg className="font-bold text-lg" />
											) : (
												1
											)}
										</div>

										<div
											className={` flex items-center font-semibold flex-col ${step >= 0 ? "text-[#27AE60]" : ""
												}`}
										>
											Set up Ad
										</div>
									</div>

									<div
										className={`border-[#f9f9f9] border-dashed border-t-2 pn:max-sm:w-10 sm:w-20 mt-5 ${step >= 0 ? "border-black " : "border-black"
											}`}
									/>

									<div className="flex flex-col gap-1 justify-center items-center">
										<div
											className={`bg-[#f9f9f9] h-10 w-10 rounded-full flex items-center justify-center ${step >= 1
												? "bg-blue-600 text-white"
												: "bg-green-300 text-white"
												}`}
										>
											2
										</div>

										<div
											className={` flex items-center flex-col ${step >= 1 ? "text-blue-600 " : "text-green-300"
												}`}
										>
											Select target
										</div>
									</div>
									<div
										className={`border-[#f9f9f9] border-dashed border-t-2  pn:max-sm:w-10 sm:w-20 mt-5 ${step >= 1 ? "border-blue-600 " : "border-green-300"
											}`}
									/>
									<div className="flex flex-col gap-1 -ml-4 justify-center items-center">
										<div
											className={`h-10 w-10 rounded-full flex items-center justify-center ${step >= 2
												? "bg-blue-600 text-white"
												: "border-black border-2 "
												}`}
										>
											3
										</div>

										<div
											className={` flex items-center flex-col justify-center ${step === 2 ? "text-blue-600 " : "text-black"
												}`}
										>
											Preview & Launch
										</div>
									</div>
								</div>
							</div>
						</div> */}
						<div className="grid grid-cols-1">
							<div className="flex flex-col">
								<Square3 display={ProperAudience ? ProperAudience : 0} />
								<Square4
									ctr={ctr ? ctr : 0}
									duration={three.duration ? three.duration : 1}
									price={pricebyDay ? pricebyDay : 0}
									daily={totalPrice ? totalPrice : 0}
									display={ProperAudience ? ProperAudience : 0}
								/>
							</div>

							<div className="w-full md:hidden bg-[#F0F2F5] dark:bg-[#1b2431] my-4 rounded-2xl py-5 px-2">
								<h1 className="text-2xl font-semibold py-2 px-2">
									Select Target
								</h1>
								<div className="my-2 bg-maincolor p-3 rounded-xl">
									<div>
										<h2 className="text-xl font-semibold py-2">
											Select Optimal section for
											<br className="sm:hidden" /> effective advertising
										</h2>
										<div className="flex flex-wrap gap-3 my-4">
											<div
												onClick={() => toggleType("infeed")}
												className={` flex flex-col justify-center border relative  p-2 z-0  items-center min-w-[150px] max-w-[250px] rounded-lg ${three.type.includes("infeed")
													? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
													: ""
													}`}
											>
												<div>
													<Image
														src={feed}
														className="w-[90px] h-[90px]"
														alt="infeed"
													/>
												</div>
												<div className="font-medium py-2">In Feed Ads</div>
												{three.type.includes("infeed") && (
													<div className={`absolute -top-2 -right-2 z-50`}>
														<AiFillCheckCircle className="text-blue-600 z-50 text-xl" />
													</div>
												)}
											</div>
											<div
												onClick={() => toggleType("search")}
												className={` flex flex-col justify-center border relative  p-2 z-0 items-center min-w-[150px] max-w-[250px] rounded-lg ${three.type.includes("search")
													? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
													: ""
													}`}
											>
												<div>
													<Image
														src={video}
														className="w-[90px] h-[90px]"
														alt="search"
													/>
												</div>
												<div className="font-medium py-2">Search</div>
												{three.type.includes("search") && (
													<div className={`absolute -top-2 -right-2`}>
														<AiFillCheckCircle className="text-blue-600 text-xl" />
													</div>
												)}
											</div>
											<div
												onClick={() => toggleType("videoads")}
												className={` flex flex-col justify-center border relative  p-2 z-0  items-center min-w-[150px] max-w-[250px] rounded-lg ${three.type.includes("videoads")
													? "border-[#4C9AFF]  bg-[#4C9AFF]/10"
													: ""
													}`}
											>
												<div>
													<Image
														src={search}
														className="w-[90px] h-[90px]"
														alt="video"
													/>
												</div>{" "}
												<div className="font-medium py-2">Video Ads</div>
												{three.type.includes("videoads") && (
													<div className={`absolute -top-2 -right-2`}>
														<AiFillCheckCircle className="text-blue-600 text-xl" />
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
								<div className="rounded-xl">
									<div className="my-5 bg-maincolor p-3 rounded-xl">
										<div className="my-1 relative">
											<h1 className="text-lg py-1 font-medium">Category</h1>
											<div className="w-full flex justify-center items-center rounded-xl border ">
												<BiMap className="border-r-2 p-2 text-4xl" />
												<div
													placeholder="Select a Category"
													className="w-full rounded-xl p-2 outline-none "
												>
													{three.category}
												</div>
											</div>

											<div className="relative overflow-y-scroll my-5 no-scrollbar w-[360px] h-[230px]">
												<div>
													<div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-maincolor">
														<div className="text-sm text-[#6B778C] mb-2 pb-2">
															Trending Categories
														</div>
														<div className="flex flex-col gap-2">
															{PointsCategory?.map((data, i) => (
																<div
																	key={i}
																	className="flex items-center z-20 gap-2"
																>
																	<input
																		type="radio"
																		name="categoryss"
																		onChange={() =>
																			handleCategoryChange(
																				data.name,
																				data.points,
																				data.audienceByCategory,
																				data.ctr
																			)
																		}
																		checked={data.name === three.category}
																	/>
																	<div className="text-lg font-medium">
																		{data.name}
																	</div>
																</div>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="">
											<div className="my-2">
												<h1 className="text-lg py-1 font-medium">Enter Tags</h1>
												<div className="border flex justify-between items-center rounded-xl">
													<div className="flex justify-center  items-center">
														<BiMap className="text-3xl  px-1" />
														<input
															name="myForm"
															type="text"
															onChange={(e) => {
																setT(e.target.value);
															}}
															value={t}
															placeholder="tags"
															className="outline-none border-l-2 rounded-l-none p-2 rounded-xl"
														/>
													</div>
													<div className="bg-[#2D9AFF] p-2 px-3 font-bold text-xl rounded-r-xl text-white">
														<button
															onClick={() => {
																if (t && three?.tags?.length < 5) {
																	setThree((three) => ({
																		...three,
																		tags: [...three.tags, t],
																	}));
																	setT("");
																}
															}}
														>
															<AiOutlinePlus />
														</button>
													</div>
												</div>
											</div>

											<div>
												{three?.tags?.length >= 5 && t !== "" && (
													<>
														<div className="text-sm font-medium py-3  text-red-500">
															Cant insert more than 5 tags
														</div>
													</>
												)}
											</div>

											<div className="flex  flex-wrap items-center gap-2 my-3">
												{three?.tags?.map((f, g) => (
													<div
														key={g}
														className="flex justify-center items-center gap-2 p-2 px-3 bg-[#fafafa] rounded-full"
													>
														<div>{f}</div>
														<div
															onClick={() => {
																setThree((three) => ({
																	...three,
																	tags: three.tags.filter((_, h) => h !== g),
																}));
															}}
														>
															<AiOutlineClose className="text-white bg-black rounded-full" />
														</div>
													</div>
												))}
											</div>

											{/* <div className="relative overflow-y-scroll no-scrollbar w-[330px] h-[230px]">
                        <div>
                          <div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-maincolor">
                            <div className="text-sm text-[#6B778C] mb-2 pb-2">
                              Trending tags related to Tech{" "}
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Artificial Intelligence - AI
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Vertual Reality - VR{" "}
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Robotics & Autonomous Systems{" "}
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Data Privacy & Protection
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <input name="myForm" type="checkbox" />
                                <div className="font-medium">
                                  Internet of Things - IOT
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

											<div className="text-[#5585FF] text-[13px] my-2">
												Note: Enter tags that your audience interested in..
											</div>
										</div>
									</div>

									<div className="my-5 bg-maincolor p-3 rounded-xl">
										<h1 className="text-2xl font-semibold py-2">
											Target Audience
										</h1>

										<div>
											<h1 className="text-lg py-1 font-medium">
												Location
												<span className="text-[#FF4444]">*</span>
											</h1>
											<div className="w-full flex justify-center items-center rounded-xl border">
												<BiMap className="border-r-2 p-2 text-4xl" />
												<input
													name="selectinput"
													type="text"
													onChange={() => { }}
													placeholder="Enter the location to target audience"
													className="w-full rounded-xl p-2 outline-none"
													value={inputValue}
													onKeyDown={(e) => {
														if (e.key === "Enter") {
															if (inputValue && three.location.length < 3) {
																setThree((prevState) => ({
																	...prevState,
																	location: [...prevState.location, inputValue],
																}));
																setInputValue("");
															}
														}
													}}
												/>
											</div>

											<div>
												{three.location.length >= 3 && inputValue !== "" && (
													<>
														<div className="text-sm font-medium py-2 text-red-500">
															Cant insert more than 3 locations
														</div>
													</>
												)}
											</div>

											<div className="flex items-center flex-wrap gap-2 my-3 mb-4">
												{three?.location?.map((m, i) => (
													<div
														key={i}
														className="flex justify-center items-center gap-2 bg-[#FAFAFA] p-2 px-3 rounded-full "
													>
														<div>{m}</div>
														<div
															onClick={() => {
																setThree((three) => ({
																	...three,
																	location: three.location.filter(
																		(_, a) => a !== i
																	),
																}));
															}}
														>
															<AiOutlineClose className="text-white bg-black rounded-full" />
														</div>
													</div>
												))}
											</div>

											<div className="relative overflow-y-scroll no-scrollbar w-[360px] h-[230px]">
												<div>
													<div className="absolute top-0 left-0 h-auto w-full p-3 border rounded-xl z-10 drop-shadow-md bg-maincolor">
														<div className="text-sm text-[#6B778C] mb-2 pb-2">
															Trending tags related to Tech{" "}
														</div>
														<div className="flex flex-col gap-2">
															{myLocation.map((l, i) => (
																<div
																	key={i}
																	className="flex items-center gap-1"
																>
																	<input
																		name={i}
																		type="checkbox"
																		onClick={handleCheckboxClick}
																		checked={three.location.includes(l.name)}
																		onChange={(event) => {
																			const isChecked = event.target.checked;
																			if (isChecked) {
																				// If checkbox is checked, set the value to the input field
																				setInputValue(l.name);
																			} else {
																				// If checkbox is unchecked, clear the input field and remove from location array
																				setInputValue("");
																				setThree((prevState) => ({
																					...prevState,
																					location: prevState.location.filter(
																						(item) => item !== l.name
																					),
																				}));
																			}
																		}}
																	/>

																	<div className="font-medium">{l.name}</div>
																</div>
															))}
														</div>
													</div>
												</div>
											</div>

											<div className="text-[#5585FF] text-[13px] my-2">
												Note: Prices may fluctuate depending on factors such as
												traffic, weather conditions, events etc..
												<span className="text-[#5585FF] mx-1">Learn more</span>
											</div>
										</div>
										<h1 className="font-semibold py-2">Gender</h1>

										<div className="flex flex-wrap gap-2 items-center">
											<div
												onClick={() => {
													setThree({ ...three, gender: "Men" });
												}}
												className={`p-2 px-6 rounded-full ${three.gender === "Men"
													? "text-white bg-blue-500"
													: "border border-black"
													} `}
											>
												Men
											</div>
											<div
												onClick={() => {
													setThree({ ...three, gender: "Women" });
												}}
												className={`p-2 px-6 rounded-full ${three.gender === "Women"
													? "text-white bg-blue-500"
													: "border border-black"
													} `}
											>
												Women
											</div>
											<div
												onClick={() => {
													setThree({ ...three, gender: "Both" });
												}}
												className={`p-2 px-6  rounded-full ${three.gender === "Both"
													? "text-white bg-blue-500"
													: "border border-black"
													} `}
											>
												Both
											</div>
										</div>

										{/* <div className="my-2">
                      <h1 className="font-semibold py-2">Age Group</h1>
                      <div className="flex space-x-4 items-center">
                        <div className="flex justify-center items-center space-x-1">
                          <input
                            onClick={() => {
                              setCLick(0);
                              setThree({
                                ...three,
                                selectedAgeRange: "",
                                age: "All age group",
                                maxage: "",
                                minage: "",
                              });
                            }}
                            type="radio"
                            name="age"
                            id="ages"
                          />
                          <label className="font-semibold " htmlFor="ages">
                            All Age Groups
                          </label>
                        </div>
                        <div className="flex justify-center items-center space-x-1">
                          <input
                            onClick={() => {
                              myAgeHandle();
                            }}
                            type="radio"
                            id="RadioAge"
                          />
                          <label className="font-semibold " htmlFor="RadioAge">
                            Age Range
                          </label>
                        </div>
                      </div>
                      <div className={`${click === 1 ? null : "hidden"}`}>
                        <label
                          className="font-medium my-2"
                          htmlFor="myAgeRange"
                        >
                          Select Age Range:
                        </label>
                        <select
                          id="myAgeRange"
                          className="p-1 border outline-none rounded-lg border-[#e6e6e6] mx-1 my-2"
                          name="myAgeRange"
                          value={three.selectedAgeRange}
                          onChange={handleAgeRangeChange}
                        >
                          <option value="12-18">12-18</option>
                          <option value="19-40">19-40</option>
                          <option value="41-65">41-65</option>
                        </select>
                      </div>
                    </div> */}

										<div className="my-2">
											<h1 className="font-semibold py-2">Age Group</h1>
											<div className="flex space-x-4 items-center">
												<div className="flex justify-center items-center space-x-1">
													<input
														onClick={() => {
															setCLick(0);
															setThree({
																...three,
																selectedAgeRange: "",
																age: "All age group",
																maxage: "",
																minage: "",
															});
														}}
														type="radio"
														name="ageofmobile"
														id="mobilekiage"
													/>
													<div className="font-semibold " htmlFor="age">
														All Age Groups
													</div>
												</div>
												<div className="flex justify-center items-center space-x-1">
													<input
														onClick={() => {
															myAgeHandle();
														}}
														type="radio"
														name="ageofmobile"
														id="agedmobile"
													/>
													<div className="font-semibold " htmlFor="age">
														Age Range
													</div>
												</div>
											</div>
											<div className={`${click === 1 ? "my-1" : "hidden"}`}>
												<label className="font-medium my-2" htmlFor="ageRange">
													Select Age Range:
												</label>
												<select
													id="ageRange"
													className="p-1 border outline-none rounded-lg border-[#e6e6e6] mx-1 my-2"
													name="ageRangemobile"
													value={three.selectedAgeRange}
													onChange={handleAgeRangeChange}
												>
													<option value="12-18">12-18</option>
													<option value="19-40">19-40</option>
													<option value="41-65">41-65</option>
												</select>
											</div>
										</div>
									</div>

									<div className="my-[4%] rounded-xl py-3 px-[2%] bg-maincolor">
										<div>
											<h1 className="text-2xl font-semibold">
												Schedule and duration
											</h1>
											<div className="grid sm:grid-cols-2 gap-4 py-2">
												<div className="flex flex-col gap-1">
													<label
														htmlFor="sdate"
														className="text-lg font-semibold py-2"
													>
														Start Date<span className="text-[#FF4444]">*</span>
													</label>
													<input
														name="myForm"
														id="sdate"
														type="date"
														onChange={(e) =>
															setThree({
																...three,
																startDate: e.target.value,
															})
														}
														value={formatDateToString(three.startDate)}
														placeholder="Enter Campaign Name"
														className="w-full border rounded-xl outline-none p-2"
													/>
												</div>
												{/* <div
                          className={`${
                            date ? "flex flex-col space-y-1" : "hidden"
                          }`}
                        >
                          <label
                            htmlFor="edate"
                            className="text-lg font-semibold py-2"
                          >
                            End Date<span className="text-[#FF4444]">*</span>
                          </label>
                          <input
                            name="myForm"
                            id="edate"
                            onChange={(e) =>
                              setThree({
                                ...three,
                                endDate: e.target.value,
                              })
                            }
                            value={formastEndDate}
                            type="date"
                            placeholder="Enter Campaign Name"
                            className="w-full border rounded-xl outline-none p-2"
                          />
                          {formastEndDate < formastStartDate && (
                            <div className="text-sm text-red-700">
                              Please Enter a Valid Enddate
                            </div>
                          )}
                        </div> */}
											</div>
										</div>
										{/* <div className="flex flex-col gap-1">
                      <div className="flex gap-2 my-2 items-center">
                        <input
                          name="mpypFormzpp"
                          id="2529346758"
                          type="radio"
                          onChange={() => {
                            setDate(false);
                          }}
                          className="w-4 h-4"
                          checked={!date}
                        />
                        <div className="flex flex-col">
                          <div className="font-medium">
                            Run this ad Continuously
                          </div>
                          <div>
                            Your ad will run continuously for a daily budget.
                            This option is recommended. Learn more
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 my-2 items-center">
                        <input
                          name="myFormerloi"
                          id="234123565"
                          type="radio"
                          onChange={() => {}}
                          onClick={() => {
                            setDate(true);
                            setThree({ ...three, endDate: "" });
                          }}
                          checked={date}
                          className="w-4 h-4"
                        />
                        <div className="font-medium">
                          Choose When this Ad Will End
                        </div>
                      </div>
                    </div> */}
										{/* <div className="flex flex-col my-1 gap-1">
                      <label
                        htmlFor="dbudget"
                        className="text-lg font-semibold"
                      >
                        Daily Budget
                      </label>
                      <div className="flex justify-center  rounded-xl items-center border">
                        <div className="border-r-2 p-2 text-lg">&#x20B9;</div>
                        <input
                          id="dbudget"
                          onChange={(e) =>
                            setThree({
                              ...three,
                              DailyBudget: e.target.value,
                            })
                          }
                          value={three.DailyBudget}
                          type="text"
                          placeholder="Enter Daily Budget"
                          className="w-full rounded-xl outline-none p-2"
                        />
                      </div>
                    </div> */}
										<div className="my-3">
											<h1 className="text-lg py-2 font-semibold">
												Select Ad Duration
											</h1>
											<div className="flex flex-wrap my-2 gap-5">
												<div
													onClick={() => setThree({ ...three, duration: 1 })}
													className={`${three.duration == 1
														? "bg-[#2D9AFF] text-white"
														: "border border-black"
														} p-1 px-5 rounded-full`}
												>
													1 day
												</div>
												<div
													onClick={() => setThree({ ...three, duration: 7 })}
													className={`${three.duration === 7
														? "bg-[#2D9AFF] text-white"
														: "border border-black"
														} p-1 px-5 rounded-full`}
												>
													7 days
												</div>
												<div
													onClick={() => setThree({ ...three, duration: 30 })}
													className={`${three.duration === 30
														? "bg-[#2D9AFF] text-white"
														: "border  border-black"
														} p-1 px-5 rounded-full`}
												>
													30 days
												</div>
											</div>
										</div>
										{/* <div>
                      <h1 className="text-2xl font-semibold">Budget</h1>
                      <div className="grid sm:grid-cols-2 gap-4 py-3">
                        <div className="flex flex-col space-y-1">
                          <label
                            htmlFor="tbudget"
                            className="text-lg font-semibold"
                          >
                            Total Budget
                          </label>
                          <div className="flex justify-center  rounded-xl items-center border">
                            <div className="border-r-2 p-2 text-lg">
                              &#x20B9;
                            </div>
                            <input
                              id="tbudget"
                              name="myForm"
                              onChange={(e) =>
                                setThree({
                                  ...three,
                                  TotalBudget: e.target.value,
                                })
                              }
                              value={three.TotalBudget}
                              type="text"
                              placeholder="Enter Total Budget"
                              className="w-full rounded-xl outline-none p-2"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <label
                            htmlFor="dbudget"
                            className="text-lg font-semibold"
                          >
                            Daily Budget
                          </label>
                          <div className="flex justify-center  rounded-xl items-center border">
                            <div className="border-r-2 p-2 text-lg">
                              &#x20B9;
                            </div>
                            <input
                              id="dbudget"
                              onChange={(e) =>
                                setThree({
                                  ...three,
                                  DailyBudget: e.target.value,
                                })
                              }
                              value={three.DailyBudget}
                              type="text"
                              placeholder="Enter Daily Budget"
                              className="w-full rounded-xl outline-none p-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}
									</div>
									{/* <div
                    className="w-full bg-maincolor my-4 rounded-2xl py-5 px-5"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="font-bold">Payment Details</div>
                     
                      </div>
                      <div className="bg-[#FAFAFA] p-3 rounded-2xl">
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between p-[2px] items-center">
                            <div className="font-medium">Ad Budget</div>
                            <div>₹ 10,000.00</div>
                          </div>
                          <div className="text-[#333333] text-sm">
                            ₹83.60 a day x 7 days
                          </div>

                          <div className="flex justify-between p-[2px] items-center">
                            <div className="font-medium">Taxes and Charges</div>
                            <div>₹ 1800</div>
                          </div>

                          <div className="w-full h-1 border-t border-black"></div>

                          <div className="flex justify-between p-[2px] items-center">
                            <div className="font-medium">Total</div>
                            <div className="font-semibold">₹ 10,800</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Ad2