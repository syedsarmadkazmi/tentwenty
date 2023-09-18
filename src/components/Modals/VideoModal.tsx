import { Box } from "native-base"
import React, { useCallback, useState } from "react"
import { Modal, StyleSheet, Dimensions } from "react-native"
import { ETheme, VideoModalProps } from "~types"
import YoutubePlayer from "react-native-youtube-iframe"
import { THEME } from "~theme"
import { NavHeader } from "../NavHeader"

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen")

export const VideoModal: React.FC<VideoModalProps>  = ({ 
	title = "Trailer",
	visible,
	onClose,
	videoId,
}) => {

	const [playing, setPlaying] = useState(true)

	const onStateChange = useCallback((state) => {
		if (state === "ended") {
			setPlaying(false)
			onClose()
		}
	}, [])

	return <Modal
		animationType="fade"
		transparent={true}
		visible={visible}
		onRequestClose={() => {
			onClose()
		}}
	>
		<Box style={styles.main}>
			<YoutubePlayer
				height={300}
				width={screenWidth}
				play={playing}
				videoId={videoId}
				onChangeState={onStateChange}
			/>
			<Box style={styles.headerContainer}>
				<NavHeader title={title} onBackPress={onClose} theme={ETheme.dark} />
			</Box>
		</Box>
	</Modal>
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: THEME.COLORS.black,
		justifyContent: "center",
		alignItems: "center",
	},
	headerContainer: {
		position: "absolute",
		top: 10,
		left: 10,
		width: 300
	}
})