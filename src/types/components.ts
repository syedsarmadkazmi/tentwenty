import { ETheme } from "./general"

export interface SearchResultsCardProps {
	id: string
	title: string
	imageURL: string
	subTitle: React.ReactNode
}

export interface VideoModalProps {
    title: string
	visible: boolean
	onClose: () => void
	videoId: string
}

export interface NavHeaderProps {
    onBackPress?: () => void
	showBackButton?: boolean
	title?: string
	theme?: ETheme
	custom?: React.ReactNode
	customStyle?,
}

export interface TextInputProps {
    onClear?: () => void
	onFilter?: () => void
    value?: string
    isFilterOn?: boolean
	onChangeText: (text) => void
	placeholder?: string
	onSubmitEditing?: () => void
}

export interface ButtonPressableProps {
    title: string
	filled?: boolean
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	onPress?: (text) => void
}

export enum EText {
	SM = "SM",
	SM_600 = "SM_600",
	MD = "MD",
	MD_600 = "MD_600",
	LG = "LG",
	LG_600 = "LG_600",
	XL_600 = "XL_600",
}

export interface TypographyProps {
	kind?: EText
	children: React.ReactNode
	style?
	color?: string
}

export interface LoaderProps {
	loading: boolean,
}