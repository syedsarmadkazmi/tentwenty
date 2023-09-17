import React, { useEffect } from "react"
import { View, StatusBar } from "react-native"
import { GStyles, THEME } from "~theme"
import { useQuery } from "@apollo/client"
import { GET_TAGS, transformTags } from "~services"
import { useDispatch } from "react-redux"
import { updateTags } from "~redux"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { BottomTabNavigator } from "src/navigation/BottomTabNavigator"

const AppTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: THEME.COLORS.white,
	},
}


export function AppContainer() {
	const dispatch = useDispatch()
	// const [ transformTags, { data } ] = useLazyQuery(GET_TAGS)
	const { data } = useQuery(GET_TAGS, {
		variables: {
			page: 1,
			pageSize: 150,
		}
	})


	useEffect(() => {		
		if(data?.listTags?.tags) dispatch(updateTags(transformTags(data.listTags.tags)))
	}, [data])
	
	return (
		<View style={GStyles.appContainer}>
			<StatusBar/>
			<NavigationContainer theme={AppTheme}>
				<BottomTabNavigator />
			</NavigationContainer>
		</View>
	)
}