import { View } from "react-native"
import { GStyles } from "~theme"
import { Box } from "native-base"
import { FiltersModal, TextInput } from "~components"
import React, { useEffect, useState } from "react"
import { GET_MEALPLANS, GET_RECIPES } from "~services"
import { updateList, updateMealplan } from "~redux"
import { useDispatch } from "react-redux"
import { useLazyQuery } from "@apollo/client"
import { ETabName } from "~types"


export function SearchOLD() {
	//states
	const [modalVisible, setModalVisible] = useState(false)
	const [keyword, setKeyword] = useState("")
	const [filters, setFilters] = useState([])
	const [currentTab, setCurrentTab] = useState(ETabName.RECIPES)

	//redux
	const dispatch = useDispatch()

	//graphql requests
	const [
		getRecipes, 
		{ loading: isLoading, data: recipesResponse }
	] = useLazyQuery(GET_RECIPES)

	const [
		getMealPlan, 
		{ loading: isLoadingMealPlan, data: mealPlanResponse }
	] = useLazyQuery(GET_MEALPLANS)


	/* react hooks are placed here */
	useEffect(() => {
		fetchResults()
	}, [currentTab])

	useEffect(() => {
		if(recipesResponse?.listRecipes) dispatch(updateList(recipesResponse?.listRecipes.recipes))
		if(mealPlanResponse?.listMealplans) dispatch(updateMealplan(mealPlanResponse?.listMealplans?.mealplans))
	}, [recipesResponse, mealPlanResponse])

	/**
	 * fetchResults is an asynchronous function that fetches recipes based on a keyword and
	 * filters, and it can also accept additional variables as an override.
	 * @param [overrideVars] - The `overrideVars` parameter is an optional object that allows you to
	 * override any variables that are passed to the `getRecipes` function. It is merged with the
	 * `variables` object, which contains the default variables for the `getRecipes` function.
	 */
	const fetchResults = async (overrideVars?) => {
		const variables = {}

		if(keyword) variables["query"] = keyword

		if(filters && filters.length) variables["tagFilters"] = [...filters]

		if(currentTab == ETabName.RECIPES) {
			await getRecipes({
				variables: {
					...variables,
					...overrideVars
				}
			})
		}

		if(currentTab == ETabName.MEALPLAN || !mealPlanResponse) {
			await getMealPlan({
				variables: {
					...variables,
					...overrideVars
				}
			})
		}
			
	}

	/* Search keyword input callbacks */
	const handleChange = text => setKeyword(text)

	const handleClearSearch = async () => {
		await setKeyword("")
		await fetchResults({ query: null })
	}

	const onSubmitEditing = async () => {
		await fetchResults()
	}

	/* filters modal callbacks */
	const handleModalClose = async () => {
		await fetchResults()
		setModalVisible(false)
	}

	/**
	 * The function `handleSelection` updates an array of filters to allow toggle behavior
	 * @param id - The `id` parameter represents the identifier of the selected item.
	 */
	const handleSelection = (id) => {
		const index = filters.findIndex(item => item === id)
		if(index > -1) {
			const newVal = [...filters]
			newVal.splice(index, 1)
			setFilters(newVal)
		}
		else setFilters([...filters, id])
	}

	/* handle tab change callback */
	const handleTabSwitch = (tabName: ETabName) => {
		setCurrentTab(tabName)
	}


	return (
		<View style={GStyles.container}>
			<Box position={"absolute"} top={12} width={"100%"} zIndex={10000}>
				<TextInput 
					value={keyword}
					onChangeText={handleChange}
					placeholder="Search"
					isFilterOn={!!filters.length}
					onClear={handleClearSearch}
					onFilter={() => setModalVisible(true)}
					onSubmitEditing={onSubmitEditing}
				/>
			</Box>
			<FiltersModal 
				title="Recipe Filters" 
				visible={modalVisible} 
				onClose={handleModalClose} 
				selected={filters as [string]}
				onSelect={handleSelection}
			/>
		</View>
	)
}