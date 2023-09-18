import { createStackNavigator } from "@react-navigation/stack"
import { BottomTabNavigator } from "./BottomTabNavigator"
import { Details, Search } from "~screens"

const Stack = createStackNavigator()


export const Routes = {
	BottomTabNavigator: "BottomTabNavigator",
	Details: "Details",
	Search: "Search",
}

export function MainStackNavigator() {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name={Routes.BottomTabNavigator} component={BottomTabNavigator} />
			<Stack.Screen name={Routes.Details} component={Details} />
			<Stack.Screen name={Routes.Search} component={Search} />
		</Stack.Navigator>
	)
}