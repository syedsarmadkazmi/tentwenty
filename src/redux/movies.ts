import { createSlice } from "@reduxjs/toolkit"
import { IMovieState } from "~types"


const moviesSlice = createSlice({
	name: "movies",
	initialState: <IMovieState> {
		list: [],
	},

	reducers: {
		updateList: (state, action) => {
			state.list = action.payload
		},
	}
})

export const updateList = moviesSlice.actions.updateList

export default moviesSlice.reducer