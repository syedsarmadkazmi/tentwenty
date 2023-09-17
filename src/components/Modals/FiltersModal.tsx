import { Badge, Box, Fab, Icon, Text } from "native-base"
import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { Modal, SafeAreaView, SectionList, StyleSheet } from "react-native"
import { NavHeader, PressableItem } from "~components"
import { humanizeString, mapTagTypes } from "~services"
import { GStyles } from "~theme"
import { useSelector } from "react-redux"
import { FiltersModalProps } from "~types"
import { RootState } from "~redux"

export const FiltersModal: React.FC<FiltersModalProps>  = ({ 
	title,
	visible,
	onClose,
	selected,
	onSelect,
}) => {

	const tags = useSelector(({ recipes }: RootState) => recipes?.tags)

	return <Modal
		animationType="fade"
		transparent={true}
		visible={visible}
		onRequestClose={() => {
			onClose()
		}}
	>
		<Box style={styles.main}>
			<NavHeader
				title={title}
				showBackButton={true}
				onBackPress={onClose}
			/>

			<SafeAreaView style={GStyles.container}>
				{tags &&
					<SectionList
						removeClippedSubviews={true}
						sections={tags}
						keyExtractor={(item, index) => item.id + index}
						contentContainerStyle={styles.sectionList}
						renderItem={({item}) => (
							<PressableItem onPress={() => onSelect(item.id)}>
								<Badge style={styles.badge} mr={3} mb={2} py={2} px={3} variant={selected.includes(item?.id) ? "solid" : "subtle"}>{humanizeString(item.title)}</Badge>
							</PressableItem>
						)}
						renderSectionHeader={({section: {title}}) => (
							<>
								<Box w={400} pt={2} pb={3} bgColor={"white"}>
									<Text fontSize={"2xl"}>{mapTagTypes(title)}</Text>
								</Box>
							</>
						)}
					/>
				}
				{selected?.length > 0 && 
					<Fab onPress={onClose} renderInPortal={false} shadow={2} right={30} bottom={50} size="sm" icon={<Icon color="white" as={AntDesign} name="right" size="8" /> } />
				}
			</SafeAreaView>
		</Box>
	</Modal>
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#fff",
	},
	sectionList: {
		flexDirection: "row",
		flexWrap: "wrap",
		paddingBottom: 40,
		paddingHorizontal: 20,
	},
	badge: {
		borderRadius: 10,
	}
})