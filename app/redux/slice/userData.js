import {createSlice} from "@reduxjs/toolkit"

export const userSlice= createSlice({
	name:"userData",
	initialState:{
		data:null,
		loading:false,
		path:null
	},
	reducers:{
		actualData:(state,action)=>{
			state.data= action.payload
		},
		changeloading:(state,action)=>{
			const { loading, path } = action.payload;
			state.loading = loading
			state.path = path
		}
	}
})

export const { actualData,changeloading } = userSlice.actions
export default userSlice.reducer