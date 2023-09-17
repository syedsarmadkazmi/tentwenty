import { createStackNavigator } from "@react-navigation/stack"
import { Eat } from "~screens"
import { NavHeader } from "~components"

const Stack = createStackNavigator()

export function MainStackNavigator() {
	return (
		<Stack.Navigator screenOptions={{
			header: () => {
				return <>
					<NavHeader title="Eat" showBackButton={false} />
				</>
			},
		}}>
			<Stack.Screen name="Eat" component={Eat} />
		</Stack.Navigator>
	)
}