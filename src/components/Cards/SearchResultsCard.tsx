import { Center, Flex, Image, Text } from "native-base"
import { Entypo } from "@expo/vector-icons"
import React from "react"
import { PressableItem } from "../PressableItem"
import { ENV } from "~config"
import { SearchResultsCardProps } from "~types"
import { GStyles, THEME } from "~theme"

export const SearchResultsCard: React.FC<SearchResultsCardProps>  = ({ 
	title,
	imageURL,
	subTitle = null,
}) => {

	return <Flex direction="row" h={130} my={3}>
		<Flex w={"40%"} overflow={"hidden"} borderRadius={10}>
			<Image 
				source={{ uri: `${ENV.IMAGE_BASE_URL}${imageURL}` }} 
				resizeMode="cover"
				alt=""
				flex={1}
				borderRadius={10} overflow={"hidden"}
			/>
		</Flex>
		<Center w={"50%"} pt={2} px={3} alignItems={"flex-start"}>
			<Text fontSize={"lg"}>{title}</Text>
			<Text fontSize={"sm"} color={THEME.COLORS.gray}>{subTitle}</Text>
		</Center>

		<Center w={"50%"} alignItems={"flex-start"}>
			<PressableItem extraStyles={GStyles.center}>
				<Entypo name="dots-three-horizontal" size={20} color={THEME.COLORS.skyBlue} />
			</PressableItem>
		</Center>
			
	</Flex>
}