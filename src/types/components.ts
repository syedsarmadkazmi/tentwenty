import { ETheme } from "./general"

export interface SearchResultsCardProps {
	title: string
	imageURL: string
	subTitle: React.ReactNode
}

export interface FiltersModalProps {
    title: string
	visible: boolean
	onClose: () => void
	selected: [string]
	onSelect: (id: string) => void
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
    value: string
    isFilterOn?: boolean
	onChangeText: (text) => void
	placeholder?: string
	onSubmitEditing?: () => void
}