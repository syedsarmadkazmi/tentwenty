import { Box, Flex, Heading, Square } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { THEME } from "~theme"
import { PressableItem } from "./PressableItem"
import { NavHeaderProps } from "~types"
import { CONSTANTS } from "~config"
import { StyleSheet } from "react-native"

const colorStyle = {
	dark: THEME.COLORS.white,
	default: THEME.COLORS.primaryBlack,
}

export const NavHeader: React.FC<NavHeaderProps>  = ({ 
	onBackPress,
	showBackButton = true,
	title,
	theme = "default",
	custom,
	customStyle
}) => {

	if(custom) {
		return <Flex style={styles.header} >{custom}</Flex>
	}


	return <Flex style={customStyle ? [styles.header, customStyle] : styles.header} >
		{showBackButton &&
			<Box style={styles.backButton}>
				<PressableItem onPress={onBackPress}>
					<Square h={50} px={5}>
						<AntDesign name="left" size={20} color={colorStyle[theme]} />
					</Square>
				</PressableItem>
			</Box>
		}

		<Heading size={"md"} style={{ color: colorStyle[theme] }}>{title}</Heading>
	</Flex>
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: CONSTANTS.STATUS_BAR_HEIGHT,
		width: "100%",
		backgroundColor: THEME.COLORS.white,
		paddingBottom: 15,
	},
	backButton: {
		width: 60,
	}
})