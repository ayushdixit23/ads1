import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"

export const api=createApi({
	reducerPath:"api",
	baseQuery:fetchBaseQuery({
		// baseUrl:"http://192.168.29.226:7700/api"
		baseUrl:"http://192.168.1.6:7700/api"
	}),
	endpoints:(builder)=>({
		getCommunity:builder.query({
			query:({id})=>`/getcommunities/${id}`
		}),
		getPosts:builder.query({
			query:({comid,id})=>`/getallposts/${comid}/${id}`
		}),
		getRefreshToken:builder.mutation({
			query:({refresh_token})=>({
				url:`/refresh`,
				body:{refresh_token},
				method:"POST",
			})
		})
	})
})

export const {useGetCommunityQuery,useGetPostsQuery,useGetRefreshTokenMutation} = api