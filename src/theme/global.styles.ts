import { StyleSheet } from "react-native"
import { THEME } from "./theme"

export const GStyles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: THEME.COLORS.gray,
	},
	container: {
		flex: 1,
	},
	screen: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
		backgroundColor: THEME.COLORS.grayLight,
	},
	header: {
		fontSize: 16,
		color: "gray"
	},
	touchable: {
		padding: 10,
	},
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
})