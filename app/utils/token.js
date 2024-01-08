import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { decryptaes } from "./security";
import { useGetRefreshTokenMutation } from "../redux/slice/apiSlice";
import { actualData, changeloading } from "../redux/slice/userData";

const useTokenAndData = () => {
  const [isValid, setIsValid] = useState(false);
  const token = Cookies.get("axetkn");
  const path = useSelector((state)=>state.userData.path)
  const router = useRouter();
  const [parsedData, setParsedData] = useState(null);
  const dispatch = useDispatch();
  const [refreshedtokenAgain] = useGetRefreshTokenMutation();

  const appData= useCallback(async()=>{
    try {
      const getcookie = Cookies.get("adwkpiz")
        const de =getcookie? decryptaes(getcookie):null
        const data = de ? JSON.parse(de) : null
       return data
    } catch (error) {
     console.log(error)   
    }
  },[Cookies.get("adwkpiz")])

  const refreshAccessToken = async (refreshToken) => {
    try {
      const res = await refreshedtokenAgain({
        refresh_token: refreshToken,
      });
      const { access_token, success } = res.data;
      if (success) {
        return { access_token, refresh_token: refreshToken };
      } else {
        console.error("Failed to refresh token");
        return Promise.reject("Failed to refresh token");
      }
    } catch (err) {
      console.error(err);
      return Promise.reject("Failed to refresh token");
    }
  };

  const checkRefreshTokenValidity = () => {
    try {
      const refreshToken = Cookies.get("rvktkn");
      if (!refreshToken) {
        console.error("No refresh token found");
        return false;
      }
      const decodedRefreshToken = jwt.decode(refreshToken);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const expiration = decodedRefreshToken.exp;
      const isValid = currentTimestamp <= expiration;
      return isValid;
    } catch (error) {
      console.error("Error checking refresh token validity:", error);
      return false;
    }
  };

  const refresh = async () => {
    const refreshToken = Cookies.get("rvktkn");
    if (!refreshToken) {
      console.error("No refresh token found");
      return Promise.reject("No refresh token found");
    }

    try {
      const newToken = await refreshAccessToken(refreshToken);
      if (newToken) {
        Cookies.set("axetkn", newToken.access_token);
      }
    } catch (error) {
      console.error("Error during token refresh:", error);
    }
  };

  const generateData = useCallback(
    async () => {
      const t = Cookies.get("adwkpiz");
      try {
       
        const decodedToken = jwt.decode(token, { complete: true });
   
        if (decodedToken && decodedToken.header && decodedToken.payload) {
          const issuedAt = decodedToken.payload.iat;
          const currentTimestamp = Math.floor(Date.now() / 1000);
          const isValidIat = issuedAt <= currentTimestamp;
          const expiration = decodedToken.payload.exp;
          const isValidExp = currentTimestamp <= expiration;

          if (isValidIat && isValidExp) {
            setIsValid(true);
            const mydec = decryptaes(t);
            const parse = JSON.parse(mydec);
            setParsedData(parse);
            dispatch(changeloading({ loading: false }));
            dispatch(actualData(parse));
            console.log("runned 1");
            if (path) {
              router.push(`${path}`);
            }
          } else if (checkRefreshTokenValidity()) {
            await refresh();
          } else {
            Cookies.remove("adwkpiz");
            Cookies.remove("rvktkn");
            console.log("runned 2");
            sessionStorage.clear()
            Cookies.remove("axetkn");

            router.push("/login");
          }
        } else {
          setIsValid(false);
          Cookies.remove("adwkpiz");
          Cookies.remove("rvktkn");
          sessionStorage.clear()
          Cookies.remove("axetkn");
          console.log("runned 3");
          router.push("/login");
        }
      } catch (e) {
        console.error(e);
        setIsValid(false);
        Cookies.remove("adwkpiz");
        Cookies.remove("rvktkn");
        Cookies.remove("axetkn");
        sessionStorage.clear()
        console.log("runned 4");
        router.push("/login");
      }
    },
    [token, path]
  );

  useEffect(() => {
    // const currentPath = window.location.pathname;
    // if (currentPath != "/login/qrcode") {
      generateData();
    // }
  }, [token, dispatch]);

  return { isValid, parsedData,appData, generateData };
};

export default useTokenAndData;
