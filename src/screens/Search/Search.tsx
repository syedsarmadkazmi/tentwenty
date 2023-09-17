import { useState } from "react"
import { ScrollView, View } from "react-native"
import { NavHeader, TextInput } from "~components"
import { GStyles } from "~theme"
import { SearchResults } from "./SearchResults"
import { Box } from "native-base"


export function Search() {
	const [keyword, setKeyword] = useState("")

	/* Search keyword input callbacks */
	const handleChange = text => setKeyword(text)

	const handleClearSearch = async () => {
		await setKeyword("")
	}

	const onSubmitEditing = async () => {
	}

	return (
		<View style={GStyles.container}>
			{true ?
				<NavHeader 
					custom={
						<Box w={"100%"} px={4}>
							<TextInput 
								value={keyword}
								onChangeText={handleChange}
								placeholder="Search"
								onClear={handleClearSearch}
								onSubmitEditing={onSubmitEditing}
							/>
						</Box>
					}
			
				/>
				:
				<NavHeader 
					title="3 Results Found"
				/>	
			}
			<ScrollView style={GStyles.screen}>
			
				<SearchResults/>
				{/* <Flex flexDirection={"row"} flexWrap={"wrap"} alignItems={"center"}>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/2ii07lSwHarg0gWnJoCYL3Gyd1j.jpg"}
					variant="small"
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
					variant="small"
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
					variant="small"
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
					variant="small"
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
					variant="small"
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
					variant="small"
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
					variant="small"
				/>
			</Flex> */}
			</ScrollView>
		</View>
	)
}