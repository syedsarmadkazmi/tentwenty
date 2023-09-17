import { Details, Home, Search, Watch } from "~screens"
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons"

export const BottomTabRouteNames = {
	Dashboard: "Dashboard",
	Watch: "Watch",
	MediaLibrary: "Media Library",
	More: "More",
}


export const BottomTabRoutes = [
	{
		component: Details,
		icon: (props) => <MaterialCommunityIcons name="view-dashboard" {...props} />,
		title: BottomTabRouteNames.Dashboard,
	},
	{
		component: Watch,
		icon: (props) => <MaterialCommunityIcons name="play-box" {...props} />,
		title: BottomTabRouteNames.Watch,
	},
	{
		component: Search,
		icon: (props) => <Entypo name="folder-images" {...props} />,
		title: BottomTabRouteNames.MediaLibrary,
	},
	{
		component: Home,
		icon: (props) => <MaterialCommunityIcons name="format-list-bulleted" {...props} />,
		title: BottomTabRouteNames.More,
	},
]