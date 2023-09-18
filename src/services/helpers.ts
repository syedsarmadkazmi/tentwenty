import moment from "moment"
import { ENV } from "~config"
import * as ScreenOrientation from "expo-screen-orientation"

/**
 * The function constructs an image URL by concatenating a base URL with a given slug.
 * @param slug - The slug parameter is a string that represents the unique identifier or name of an
 * image.
 * @returns a string that concatenates the value of the `ENV.IMAGE_BASE_URL` variable with the value of
 * the `slug` parameter.
 */
export function constructImageURL(slug, size = "w780") {
	return `${ENV.IMAGE_BASE_URL(size)}${slug}`
}

/**
 * The `humanizeString` function takes a string as input, trims any leading or trailing whitespace,
 * capitalizes the first letter, replaces any non-alphabetic characters with spaces, and returns the
 * modified string.
 * @param {string} text - The `text` parameter is a string that represents the input text that you want
 * to humanize.
 * @returns The function `humanizeString` returns a humanized version of the input string.
 */
export const humanizeString = (text: string) => {
	return text.trim().slice(0, 1).toUpperCase().concat(text.slice(1)).replace(/[^A-Za-z]/g, " ")
}

/**
 * The function `formatDate` takes a string representing a date and returns it formatted as "Month Day,
 * Year".
 * @param {string} date - A string representing a date in any valid format.
 * @returns The formatted date in the format "MMMM DD, YYYY".
 */
export const formatDate = (date: string) => {
	return moment(date).format("MMMM DD, YYYY")
}

export const getTrailerVideoId = (movieDetails) => {
	const trailer = movieDetails?.videos?.results?.find((item) => item?.type === "Trailer" && item?.site === "YouTube")
	return trailer?.key
}


export const checkOrientation = async () => {
	return await ScreenOrientation.getOrientationAsync()
}