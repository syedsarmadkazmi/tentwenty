import { Flex, Center } from "native-base"
import { StyleSheet } from "react-native"
import { PressableItem } from "./PressableItem"
import { THEME } from "~theme"
import { ButtonPressableProps, EText } from "~types"
import { Typography } from "./Typography"

export const ButtonPressable: React.FC<ButtonPressableProps> = ({ 
	title, 
	onPress = () => null,
	filled,
	leftIcon,
	rightIcon,
}) => {
	return (
		<Flex style={[styles.buttonStyle, filled && styles.filled]}>
			<PressableItem onPress={onPress}>
				<Center style={styles.content}>
					{leftIcon && leftIcon}
					<Typography kind={EText.MD_600} style={styles.buttonText}>{title}</Typography>
					{rightIcon && rightIcon}
				</Center>
			</PressableItem>
		</Flex>
	)
}

const styles = StyleSheet.create({
	buttonStyle: {
		width: "60%",
		borderWidth: 1,
		borderColor: THEME.COLORS.skyBlue,
		borderRadius: 10,
		paddingVertical: 10,
		marginBottom: 10,
	},
	content: {
		flexDirection: "row",
		width: "100%",
		paddingHorizontal: 12,
	},
	buttonText: {
		color: THEME.COLORS.white,
		fontWeight: "bold",
		fontSize: 14,
		paddingHorizontal: 5,
	},
	filled: {
		backgroundColor: THEME.COLORS.skyBlue
	}
})