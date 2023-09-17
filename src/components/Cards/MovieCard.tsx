import { Heading, Image, Box } from "native-base"
import React from "react"
import { ENV } from "~config"
import { GStyles, THEME } from "~theme"
import { PressableItem } from "../PressableItem"

const variantStyles = {
	"large": {
		height: 180,
	},
	"small": {
		height: 150,
		width: "44%",
		marginHorizontal: 10,
	}
}

export const MovieCard = ({ 
	title,
	imageURL,
	variant = "large",
}) => {

	return <Box h={150} borderRadius={10} my={2} style={{ ...variantStyles[variant] }} >
		<PressableItem extraStyles={GStyles.container}>
			<Image 
				source={{ uri: `${ENV.IMAGE_BASE_URL}${imageURL}` }} 
				resizeMode="cover"
				alt=""
				flex={1}
				borderRadius={10} overflow={"hidden"}
			/>
		
			<Box position={"absolute"} bottom={5} left={5}>
				<Heading fontSize={"xl"} color={THEME.COLORS.white}>{title}</Heading>
			</Box>
		</PressableItem>
	</Box>
}