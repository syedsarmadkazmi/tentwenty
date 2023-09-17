import { View } from "react-native"
import { Divider, Text } from "native-base"
import { SearchResultsCard } from "~components"
import { GStyles } from "~theme"


export function SearchResults() {

	return (
		<View style={GStyles.container}>
			<Text>Top Results</Text>
			<Divider my={2} />
			<SearchResultsCard
				title={"Jack Reacher"} 
				imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				subTitle="Rick Fillay"
			/>
			<SearchResultsCard
				title={"Jack Reacher"} 
				imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				subTitle="Rick Fillay"
			/>
			<SearchResultsCard
				title={"Jack Reacher"} 
				imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				subTitle="Rick Fillay"
			/>
			<SearchResultsCard
				title={"Jack Reacher"} 
				imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				subTitle="Rick Fillay"
			/>
			<SearchResultsCard
				title={"Jack Reacher"} 
				imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				subTitle="Rick Fillay"
			/>
			<SearchResultsCard
				title={"Jack Reacher"} 
				imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				subTitle="Rick Fillay"
			/>
		</View>
	)
}