import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { THEME } from "~theme"
import { BottomTabRouteNames, BottomTabRoutes } from "./routes-config"

const Tab = createBottomTabNavigator()

export function BottomTabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName={BottomTabRouteNames.Watch}
			screenOptions={{
				tabBarStyle: {
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					height: 90,
					paddingTop: 15,
					backgroundColor: THEME.COLORS.primaryBlack,
					borderTopWidth: 0,
				},
				tabBarActiveTintColor: THEME.COLORS.white,
				tabBarInactiveTintColor: THEME.COLORS.grayDark,
			}}
		>
			{BottomTabRoutes.map((route) => 
				<Tab.Screen key={route.title} name={route.title} component={route.component} options={{
					tabBarIcon: (props) => route.icon(props),
					headerShown: false,
				}} />
			)}
		</Tab.Navigator>
	)
}