import { Flex, Box, Text, Image, Center, Button, Heading, Divider, VStack, HStack, Badge } from "native-base"
import { StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NavHeader } from "~components"
import { THEME } from "~theme"
import { ETheme } from "~types"


export function Details() {

	return (
		<Flex style={styles.container}>
			<Box h={"60%"} >
				<Image source={{
					uri: "https://image.tmdb.org/t/p/w780/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg"
				}} alt="" flex={1} />

				<Box style={styles.overlayContainer}>
					<NavHeader title="Watch" theme={ETheme.dark} customStyle={styles.headerStyles} />

					<Center style={styles.buttonsContainer}>
						<Text>In Theaters 21, December</Text>
						<Button rounded={"xl"} colorScheme={THEME.COLORS.skyBlue} w={"60%"} my={3}>Get Tickets</Button>
						<Button w={"60%"} leftIcon={<Ionicons name="play" size={20} color={THEME.COLORS.white} />} variant={"outline"}>Watch Trailer</Button>
					</Center>
				</Box>
			</Box>
			<Box h={"40%"} pt={8} px={10} bgColor="yellow">
				<VStack space={3}>
					<Heading size={"md"}>Genres</Heading>
					<HStack space={2}>
						<Badge rounded={"2xl"} colorScheme="success">SUCCESS</Badge>
						<Badge colorScheme="danger">DANGER</Badge>
						<Badge colorScheme="info">INFO</Badge>
						<Badge colorScheme="coolGray">DARK</Badge>
					</HStack>
					<Divider/>
					<Heading size={"md"}>Overview</Heading>
					<Text>As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them. Discover the origins of the very first independent intelligence agency in The King's Man. The Comic Book “The Secret Service” by Mark Millar and Dave Gibbons.</Text>
				</VStack>
			</Box>

		</Flex>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	overlayContainer: {
		position: "absolute",
		flex: 1,
		width: "100%",
		height: "100%"
	},
	headerStyles: {
		backgroundColor: null, 
	},
	buttonsContainer: {
		height: "100%",
	},
})