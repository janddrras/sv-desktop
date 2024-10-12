// import { error } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'
import 'dotenv/config'

export const load: LayoutServerLoad = async ({ fetch }) => {
	try {
		const apiKey = import.meta.env.VITE_PIXABAY_API_KEY
		const url = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&editors_choice=true&orientation=horizontal`
		const response = await fetch(url)
		const data = await response.json()

		const randomImage = data.hits[Math.floor(Math.random() * data.hits.length)]
		const { largeImageURL } = randomImage

		return { data: largeImageURL }
	} catch (error) {
		return error
	}
}
