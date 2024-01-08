import {createSlice} from "@reduxjs/toolkit"

export const dataSlice= createSlice({
	name:"data",
	initialState:{
		data:[],
	},
	reducers:{
		dataAction:(state,action)=>{
			state.data= action.payload
		}
	}
})

export const {dataAction} = dataSlice.actions
export default dataSlice.reducer