import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useTokenAndData from "./token";
import { actualData, changeloading } from "../redux/slice/userData";

const TokenDataWrapper = ({ children }) => {
  const { isValid, parsedData } = useTokenAndData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isValid) {
      dispatch(changeloading({ loading: false }));
      dispatch(actualData(parsedData));
      console.log("from tokenwrapper")
    }
  }, [isValid, parsedData, dispatch]);
  return <>{children}</>;
};

export default TokenDataWrapper;
