import { Flex, Heading } from "native-base"
import { ScrollView, StyleSheet, View } from "react-native"
import { MovieCard, NavHeader, PressableItem } from "~components"
import { GStyles } from "~theme"
import { Ionicons } from "@expo/vector-icons"


export function Watch() {
	return (
		<View style={GStyles.container}>
			<NavHeader 
				title="Watch" 
				showBackButton={false} 
				custom={
					<Flex style={styles.searchBar}>
						<Heading>Watch</Heading>
						<PressableItem extraStyles={GStyles.touchable}>
							<Ionicons name="search" size={24} color="black" />
						</PressableItem>
					</Flex>
				}
			
			/>
			<ScrollView style={GStyles.screen}>
				{/* <Flex style={styles.searchBar}>
					<Heading>Watch</Heading>
					<PressableItem extraStyles={GStyles.touchable}>
						<Ionicons name="search" size={24} color="black" />
					</PressableItem>
				</Flex> */}
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/2ii07lSwHarg0gWnJoCYL3Gyd1j.jpg"}
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				/>
				<MovieCard 
					title={"Jack Reacher"} 
					imageURL={"/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"}
				/>
			</ScrollView>
		</View>
	)
}


const styles = StyleSheet.create({
	searchBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
		width: "100%"
	},
})