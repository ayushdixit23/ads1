import Cookies from "js-cookie";
import { decryptaes } from "./security";
import { useCallback } from "react";

export const formatDateToString=(dateString)=> {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so add 1
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}


// export const appData = async ()=>{
//     try {
//       const getcookie = Cookies.get("adwkpiz")
//         const de =getcookie? decryptaes(getcookie):null
//         const data = de ? JSON.parse(de) : null
//        return data
//     } catch (error) {
//      console.log(error)   
//     }
// }