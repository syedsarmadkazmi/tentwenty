import { Box } from "native-base"
import { ResultsList } from "../ResultsList"
import { GStyles } from "~theme"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { ETabName, ITabScreenProps } from "~types"
import { useSelector } from "react-redux"
import { RootState } from "~redux"
import React from "react"

const tabName = ETabName.MEALPLAN

export const MealPlansTab: React.FC<ITabScreenProps> = ({
	isLoading,
	setCurrentTab	
}) => {
	const navigation = useNavigation()
	
	const mealplan = useSelector(({ recipes }: RootState) => recipes.mealplan)

	useEffect(() => {
		const unsubscribe = navigation?.addListener("focus", () => {
			setCurrentTab(tabName)
		})
	
		// Return the function to unsubscribe from the event so it gets removed on unmount
		return unsubscribe
	}, [navigation])

	return (
		<Box style={GStyles.container}>
			<ResultsList isLoading={isLoading} tabName={tabName} data={mealplan} />
		</Box>
	)
}