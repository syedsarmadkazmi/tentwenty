export function transformTags(tags) {
	const groups = tags.reduce((arr, item) => {
		return {
			...arr,
			[item.type]: [...(arr[item.type] || []), item]
		}
	}, {})

	const tagsList = Object.keys(groups).map((key) => {
		return {
			title: key,
			data: groups[key]
		}
	})

	return tagsList
}


export const humanizeString = (text: string) => {
	return text.trim().slice(0, 1).toUpperCase().concat(text.slice(1)).replace(/[^A-Za-z]/g, " ")
}

export const mapTagTypes = (type: string) => {
	switch(type) {
	case "energy": 
		return "Strictness"
	case "ease": 
		return "Difficulty"
	case "recipe_type": 
		return "Type"
	case "recipe_content": 
		return "Protein"
	case "recipe_tag": 
		return "Cuisine"
	case "dish_type": 
		return "Dish"
	case "mealplan_type": 
		return "Mealplan"
	case "ingredient_type": 
		return "Ingredient"
	default:
		return humanizeString(type)
	}
}
