export enum ETabName {
    RECIPES = "RECIPES",
    MEALPLAN = "MEALPLAN",
}

export interface IENV {
    API_URL: string
	IMAGE_BASE_URL: string
	FALLBACK_IMAGE: string
}

export interface IItem {
    id?: string
}

export enum ETheme {
    dark = "dark",
    default = "default"
}