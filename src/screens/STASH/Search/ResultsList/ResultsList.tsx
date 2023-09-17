import { Box, Text, Center, Spinner, Divider, Flex } from "native-base"
import { FlatList } from "react-native"
import { StyleSheet } from "react-native"
import { SearchResultsCard } from "~components"
import { ENV } from "~config"
import { humanizeString } from "~services"
import { ETabName, IItem, IResultProps } from "~types"



function renderItem(data, tabName) {
	const { item } = data
	const isRecipies = tabName === ETabName.RECIPES
	return <SearchResultsCard 
		title={item?.title}
		imageURL={item?.images?.vt || item?.image?.vt || ENV.FALLBACK_IMAGE}
		subTitle={
			(isRecipies) &&
			<Flex direction="row" my={2}>
				<Text fontSize={"sm"} color={"gray.500"}>{item?.time?.cook} min</Text>
				<Divider mx="2" orientation="vertical" />
				<Text fontSize={"sm"} color={"gray.500"}>{humanizeString(item?.difficulty?.rating)}</Text>
				{item?.isMembersOnly &&
					<>
						<Divider mx="2" orientation="vertical" />
						<Text fontSize={"sm"} color={"gray.500"}>Premium</Text>
					</>
				}
			</Flex>
		}
		showOptions={isRecipies}
	/>
}


export const ResultsList: React.FC<IResultProps> = ({
	isLoading = false,
	tabName,
	data
}) => {

	return (
		<Box style={styles.content} bgColor={"#dfeedf"} pt={95}>
			<Box style={styles.results}>
				{isLoading ?
					<Center flex={1}>
						<Spinner accessibilityLabel="Loading posts" />
					</Center>
					:
					!data?.length ?
						<Center flex={1}>
							<Text>No data found!</Text>
						</Center>
						:
						<FlatList
							data={data}
							extraData={data}
							keyExtractor={(item: IItem) => item.id}
							renderItem={(data) => renderItem(data, tabName)}
						/>
				}
				
			</Box>
		</Box>
	)
}


const styles = StyleSheet.create({
	content: {
		flex: 1,
	},
	results: {
		flex: 1,
		paddingVertical: 30,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
	},
})


