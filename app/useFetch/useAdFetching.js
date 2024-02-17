import { API } from "@/Essentials";
import axios from "axios";
import { useCallback } from "react";

const useAdsFetching = () => {
	const CampaignFetch = useCallback(async (id) => {
		try {
			const res = await axios.get(`${API}/getallads/${id}`);
			if (res?.data?.success) {
				const ad = res?.data?.ads;
				const content = res?.data?.content;
				const merge = ad?.map((a, i) => ({
					a,
					c: content[i],
				}));
				return merge
			}
		} catch (e) {
			console.log(e);
		}
	}, []);
	return { CampaignFetch }
}

export default useAdsFetching