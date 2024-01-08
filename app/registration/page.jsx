"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiFillLock } from "react-icons/ai";
// import Indiv from "../component/Indiv";
// import Organ from "../component/Organ";
// import Question from "../component/Question";
// import ads from "../assests/image/zm.svg";
import { BiRadioCircleMarked } from "react-icons/bi";
import { API } from "@/Essentials";
import axios from "axios";
import { useRouter } from "next/navigation";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";
import { RxCross2 } from "react-icons/rx";
import { GrFormAdd } from "react-icons/gr";
import Link from "next/link";
import { BsArrowRight, BsCheckLg } from "react-icons/bs";
import Individual from "../spliting/Individual";
import Organisation from "../spliting/Organisation";

const Register = () => {
  const [radio, setRadio] = useState(1);
  const [change, setChange] = useState(1);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    myImage: "",
    city: "",
    state: "",
    postalCode: "",
    LandMark: "",
    PAN: "",
    type: "Individual",
    GST: "",
    Organistaion: "",
    password: "",
    confirmPass: "",
  });

  const otpElementRef = useRef(null);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isActive, setIsActive] = useState(true);
  const [come, setCome] = useState(0);
  // const [toast, setToast] = useState(false);
  const otpInputRefs = Array.from({ length: 6 }, () => React.createRef());
  const [checked, setChecked] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const [OTP, setOTP] = useState();

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setOtp((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      return newOTP;
    });

    if (value === "" && index > 0) {
      otpInputRefs[index - 1].current.focus();
    } else if (value !== "" && index < 5) {
      otpInputRefs[index + 1].current.focus();
    }
  };
  useEffect(() => {
    const finalOTP = otp.join("");
    setOTP(finalOTP);
    const otpElement = otpElementRef.current;

    if (otpElement) {
      otpElement.innerText = finalOTP;

      if (finalOTP.length === 6) {
        otpElement.classList.replace("_notok", "_ok");
      } else {
        otpElement.classList.replace("_ok", "_notok");
      }
    }
  }, [otp]);

  useEffect(() => {
    let interval;

    if (seconds === 0) {
      setSeconds(0);
      setIsActive(true);
      setCome(come + 1);
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 100);
      if (seconds === 0) {
        setSeconds(0);
        setCome(1);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    onSignup();
    setSeconds(30);
    //setIsActive(!isActive);
  };

  // console.log(details);

  const validateData = () => {
    if (details.type === "Individual") {
      if (
        details.firstName === "" ||
        details.lastName === "" ||
        details.phoneNumber === "" ||
        details.email === "" ||
        details.address === "" ||
        details.city === "" ||
        details.state === "" ||
        details.postalCode === "" ||
        details.LandMark === "" ||
        details.myImage === "" ||
        checked === false
      ) {
        return false;
      } else {
        return true;
      }
    }
    if (details.type === "Organization") {
      if (
        details.firstName === "" ||
        details.lastName === "" ||
        details.phoneNumber === "" ||
        details.email === "" ||
        details.address === "" ||
        details.city === "" ||
        details.state === "" ||
        details.postalCode === "" ||
        details.LandMark === "" ||
        details.GST === "" ||
        details.Organistaion === "" ||
        details.PAN === "" ||
        details.myImage === "" ||
        checked === false
      ) {
        return false;
      } else {
        return true;
      }
    }
  };
  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];

  //   if (selectedFile) {
  //     // Assuming you have a "details" state and you want to update the "images" property
  //     setDetails({
  //       ...details,
  //       myImage: selectedFile,
  //     });
  //   }
  // };
  const dataValid = validateData();

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("lastname", details.lastName);
      formDataToSend.append("firstname", details.firstName);
      formDataToSend.append("city", details.city);
      formDataToSend.append("state", details.state);
      formDataToSend.append("landmark", details.LandMark);
      formDataToSend.append("email", details.email);
      formDataToSend.append("phone", details.phoneNumber);
      formDataToSend.append("type", details.type);
      formDataToSend.append("pincode", details.postalCode);
      formDataToSend.append("address", details.address);
      formDataToSend.append("image", details.img);
      formDataToSend.append("organizationname", details.Organistaion);
      formDataToSend.append("pan", details.PAN);
      formDataToSend.append("gst", details.GST);
      formDataToSend.append("password", details.password);
      formDataToSend.append("retypepassword", details.confirmPass);

      const res = await axios.post(`${API}/createadvacc`, formDataToSend);
      if (res?.data?.success) {
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hundle = () => {
    setRadio(1);
    setDetails({ ...details, type: "Individual" });
  };
  const hundl = () => {
    setRadio(2);
    setDetails({ ...details, type: "Organization" });
  };

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {
            // Response expired. Ask the user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchaVerify();
    setSeconds(30);
    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+91" + details.phoneNumber;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        setChange(3);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const handleChangePhotoClick = () => {
    // Trigger the hidden file input to select a new image
    document.getElementById("image").click();
  };

  // const myToast = () => {
  //   setTimeout(() => {
  //     setToast(false);
  //   }, 6000);
  // };

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(OTP)
      .then(async (res) => {
        setLoading(false);
        console.log(OTP);
        handleSave();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <div id="recaptcha-container"></div>

      <div className="flex justify-center items-center px-2">
        <div className=" px-[2%] ">
          <h1 className="text-center text-3xl font-semibold mt-[4%] pt-2 pb-1">
            Create an account
          </h1>
          <h1 className="text-center">
            Already have an account?
            <Link href="/login" className="underline">
              Log in
            </Link>
          </h1>
          <div className="flex justify-center gap-3 rounded-lg sm:my-7 my-4 items-center sm:p-3 p-2 py-4 bg-[#fafafa]">
            <AiFillLock className="text-3xl" />
            <div>
              We take privacy issues seriously. You can be sure that your
              personal data is securely protected.
            </div>
          </div>

          <div className="flex justify-center pn:max-sm:text-xs px-4 pn:max-sm:text-center my-8">
            <div className=" flex flex-col gap-1 justify-center items-center">
              <div
                className={` h-10 w-10 rounded-full flex items-center justify-center ${change === 1 ? "bg-blue-600 text-white" : "bg-[#27AE60]"
                  }`}
              >
                {change > 1 ? (
                  <BsCheckLg className="text-lg font-bold text-white" />
                ) : (
                  1
                )}
              </div>

              <div
                className={` flex items-center  font-semibold flex-col ${change > 1 ? "text-[#27AE60] " : "text-blue-600"
                  }`}
              >
                Select your type
              </div>
            </div>

            <div
              className={`border-[#f9f9f9] border-dashed border-t-2 w-20 mt-5 ${change >= 1 ? "border-black " : "border-black"
                }`}
            />

            <div className="flex flex-col gap-1 justify-center items-center">
              <div
                className={` h-10 w-10 rounded-full flex items-center justify-center ${change === 2 ? "bg-blue-600 text-white" : ""
                  } 
                 ${change === 1 ? "border-4 border-black " : "bg-[#27AE60]"}
                 ${change > 2 ? "bg-[#27AE60] " : ""}
                `}
              >
                {change > 2 ? (
                  <BsCheckLg className="text-lg font-bold text-white" />
                ) : (
                  2
                )}
              </div>

              <div
                className={` flex items-center flex-col ${change === 2 ? "text-blue-600 " : "text-[#27AE60]"
                  }
                ${change === 1 ? "text-black" : null}
                `}
              >
                Provide your basic info
              </div>
            </div>
            <div
              className={`border-[#f9f9f9] border-dashed border-t-2 w-20  mt-5 ${change >= 2 ? "border-black " : "border-black"
                }`}
            />
            <div className="flex flex-col gap-1 justify-center items-center">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${change >= 3 ? "bg-blue-600 text-white" : ""
                  }
                ${change === 2 || change === 1 ? "border-4 border-black " : null
                  }
                
                `}
              >
                3
              </div>

              <div
                className={` flex items-center flex-col justify-center ${change === 3 ? "text-blue-600 " : ""
                  }
                ${change === 1 ? "text-black" : ""}
                
                `}
              >
                Verify your OTP
              </div>
            </div>
          </div>

          <div
            className={`${change === 1 ? "flex flex-col px-3 mt-4" : "hidden"}`}
          >
            <div className="flex justify-center flex-col my-5 w-full">
              <div className="text-2xl py-2 font-semibold">Who are you?</div>
              <div className="flex flex-col gap-3 my-4">
                <div className="text-xl flex items-center font-semibold">
                  {/* <BiRadioCircleMarked
                    onClick={hundle}
                    className={`text-4xl ${
                      radio === 1 ? "text-blue-500" : null
                    }`}
                  /> */}
                  <div
                    onClick={hundle}
                    className={`w-[20px] h-[20px] border border-black p-[2.8px] rounded-full ${radio === 1 ? "border-blue-800" : null
                      }`}
                  >
                    <div
                      className={`w-[13px] h-[13px]  rounded-full ${radio === 1 ? "bg-blue-800" : null
                        }`}
                    ></div>
                  </div>
                  <div className="mx-1">Individual</div>
                </div>
                <div className="text-xl flex items-center font-semibold">
                  {/* <BiRadioCircleMarked
                    onClick={hundl}
                    className={`text-4xl ${
                      radio === 2 ? "text-blue-800 " : null
                    }`}
                  /> */}
                  <div
                    onClick={hundl}
                    className={`w-[20px] h-[20px] border border-black p-[2.8px] rounded-full ${radio === 2 ? "border-blue-800" : null
                      }`}
                  >
                    <div
                      className={`w-[13px] h-[13px]  rounded-full ${radio === 2 ? "bg-blue-800" : null
                        }`}
                    ></div>
                  </div>
                  <div className="mx-1">Organisation</div>
                </div>
              </div>
            </div>
            <div
              onClick={() =>
                radio == 1 || radio == 2 ? setChange(2) : setChange(1)
              }
              className="p-2 flex justify-center items-center gap-2 my-5 rounded-xl max-w-[130px] px-5 border font-medium"
            >
              <div>Go Next</div>
              <div>
                <BsArrowRight />
              </div>
            </div>
          </div>

          <div className={`${change === 2 ? "" : "hidden"}`}>
            {radio === 1 && (<Individual
              details={details}
              handleChangePhotoClick={handleChangePhotoClick}
              setDetails={setDetails}
              setChecked={setChecked}
              checked={checked}
              setChange={setChange}
              onSignup={onSignup}
            />)
            }
            {radio === 2 && (<Organisation
              details={details}
              handleChangePhotoClick={handleChangePhotoClick}
              setDetails={setDetails}
              setChecked={setChecked}
              checked={checked}
              setChange={setChange}
              onSignup={onSignup}
            />)
            }
          </div>
          <div className={`${change === 3 ? "" : "hidden"}`}>
            <div className="flex justify-center gap-4 font-medium p-2 pn:max-vs:max-w-[300px] vs:max-sm:min-w-[350px] w-full items-center">
              <div className="flex flex-col gap-3 items-center">
                <div className="py-3">
                  {" "}
                  <div>We're Sending an SMS to phone numbber</div>
                  <div>
                    + 91 {details.phoneNumber}{" "}
                    <span className="text-[#0075ff]">Wrong Number ?</span>
                  </div>
                </div>

                <div>
                  <>
                    <div className="mx-auto max-w-md w-auto flex justify-center gap-2 sm:p-10">
                      {otp?.map((value, index) => (
                        <input
                          key={`otp-field-${index}`}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              onOTPVerify();
                            }
                          }}
                          className="otp__digit otp__field outline-transparent h-[50px] w-[50px] border-b-2 border-[#3e3e3e] flex justify-center items-center text-center text-[#3e3e3e]"
                          value={value}
                          onChange={(event) => handleInputChange(event, index)}
                          ref={otpInputRefs[index]}
                          maxLength="1"
                          type="number"
                        />
                      ))}
                    </div>
                  </>
                </div>
                <div className="text-black font-semibold flex text-[15px] pt-8">
                  <div className="text-center">
                    {come === 1 ? (
                      <div className="space-x-4  ">
                        <div className="text-[#3e3e3e]">
                          Don't receive code ?
                        </div>
                        <button
                          className={` text-blue-600 rounded ${isActive ? "" : ""
                            }`}
                          onClick={toggleTimer}
                        >
                          Request Again
                        </button>
                      </div>
                    ) : (
                      <h1
                        className={` ${come === 1 ? "hidden" : "text-[16px] text-[#3e3e3e]"
                          }`}
                      >
                        Resend: 00:{seconds}
                      </h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pn:max-sm:flex-col sm:justify-between gap-3 my-3 sm:gap-5 sm:items-center">
              <button
                onClick={() => {
                  setChange(2);
                }}
                className="w-full p-2 bg-[#f9f9f9] text-black font-semibold rounded-xl sm:my-2"
              >
                Back
              </button>
              <button
                onClick={() => {
                  setChange(3);
                  onOTPVerify();
                  // handleSave();
                  // router.push("/login");
                }}
                className="w-full p-2 bg-black text-white font-semibold rounded-xl sm:my-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
