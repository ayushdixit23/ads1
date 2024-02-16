"use client"
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../redux/slice/dataSlice";

export default function createAdLayout({ children }) {
	const step = useSelector((state) => state.data.step)
	const dispatch = useDispatch()
	const a = true

	const stepRunner = () => {
		if (step === 0) {
			dispatch(setStep(1))
		} else if (step === 1) {
			dispatch(setStep(2))
		} else {
			console.log("first")
		}
	}

	const stepBacker = () => {
		if (step === 2) {
			dispatch(setStep(1))
		} else if (step === 1) {
			dispatch(setStep(0))
		} else {
			console.log("first")
		}
	}

	return (
		<>
			<div className="w-screen h-screen no-scrollbar overflow-auto">
				<div className="w-full z-50  bg-maincolor">
					<div className="flex border w-full bg-maincolor justify-between items-center px-5 py-3 pb-4">
						<div className="text-[#555555] pn:max-sm:hidden text-xl font-semibold">
							Set up a new Ad
						</div>
						<div className="text-[#555555] sm:hidden text-xl font-semibold">
							Ad SetUp
						</div>
						<div className="flex justify-center pt-2 items-center gap-3">
							<div onClick={stepBacker} className="border-b cursor-pointer pn:max-sm:hidden border-black">
								Discard
							</div>
							<div onClick={stepRunner} className="p-2 px-7 rounded-full cursor-pointer bg-[#b3bbc3]/30 text-white">
								<div>Next</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-5 bg-maincolor items-center">
						<div class="after:mt-4 mb-7 after:block after:h-1 min-w-[83%] sm:min-w-[600px] after:w-full after:rounded-lg after:bg-gray-200">
							<ol class="grid grid-cols-3 text-sm font-medium text-gray-500">
								<li class="relative flex justify-start text-green-600">

									<span class="absolute -bottom-[1.90rem] -start-1 rounded-full bg-green-600 text-white">
										{a ? <BsCheckLg className="w-7 h-7 p-[5px]" /> : <div className="w-7 h-7 rounded-full bg-blue-600 text-sm flex justify-center items-center">1</div>}
									</span>

									<span class="text-xs pp:text-base">Set up Ad</span>


								</li>

								<li class="relative flex justify-center text-green-600">
									<span
										class="absolute -bottom-[1.90rem] left-1/2 -translate-x-1/2 rounded-full bg-green-600 text-white"
									>
										{a ? <BsCheckLg className="w-7 h-7 p-[5px]" /> : <div className="w-7 h-7 rounded-full bg-blue-600 text-sm flex justify-center items-center">2</div>}
									</span>


									<span class="text-xs pp:text-base">Select target</span>


								</li>

								<li class="relative flex justify-end">
									<span class="absolute -bottom-[1.90rem] -end-1 rounded-full bg-gray-600 text-white">
										{a ? <BsCheckLg className="w-7 h-7 p-[5px]" /> :
											<div className="w-7 h-7 rounded-full bg-blue-600 text-sm flex justify-center items-center">3</div>
										}
									</span>
									<span class="text-xs pp:text-base">Preview & Launch</span>


								</li>
							</ol>
						</div>
					</div>
				</div>
				<div>
					{children}
				</div>
			</div >
		</>
	)

}