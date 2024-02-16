import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		step: 0,
	},
	reducers: {
		setStep: (state, action) => {
			state.step = action.payload
		}
	}
})

export const { setStep } = dataSlice.actions
export default dataSlice.reducer