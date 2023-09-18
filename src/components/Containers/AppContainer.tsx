import { View, StatusBar } from "react-native"
import { GStyles, THEME } from "~theme"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { MainStackNavigator } from "src/navigation/MainStackNavigator"

const AppTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: THEME.COLORS.white,
	},
}


export function AppContainer() {
	return (
		<View style={GStyles.appContainer}>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer theme={AppTheme}>
				<MainStackNavigator />
			</NavigationContainer>
		</View>
	)
}