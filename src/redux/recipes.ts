import { createSlice } from "@reduxjs/toolkit"
import { IRecipeState } from "~types"


const recipesSlice = createSlice({
	name: "recipes",
	initialState: <IRecipeState> {
		tags: [],
		list: [],
		mealplan: [],
		searchKeyword: "",
		isLoading: false,
	},
	reducers: {
		updateTags: (state, action) => {
			state.tags = action.payload
		},
		updateList: (state, action) => {
			state.list = action.payload
		},
		updateMealplan: (state, action) => {
			state.mealplan = action.payload
		},
		toggleLoader: (state) => {
			state.isLoading = !state.isLoading
		},
		updateSearchKeyword: (state, action) => {
			state.searchKeyword = action.payload.keyword
		},
	}
})

export const updateTags = recipesSlice.actions.updateTags
export const updateList = recipesSlice.actions.updateList
export const updateMealplan = recipesSlice.actions.updateMealplan
export const toggleLoader = recipesSlice.actions.toggleLoader
export const updateSearchKeyword = recipesSlice.actions.updateSearchKeyword

export default recipesSlice.reducer