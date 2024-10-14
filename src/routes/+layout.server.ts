// import { error } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'
import 'dotenv/config'

export const load: LayoutServerLoad = async ({ fetch, cookies }) => {
	const background = cookies.get('background')
	if (background) return { data: background }

	try {
		const apiKey = import.meta.env.VITE_PIXABAY_API_KEY
		const url = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&editors_choice=true&orientation=horizontal`
		const response = await fetch(url)
		const data = await response.json()

		const randomImage = data.hits[Math.floor(Math.random() * data.hits.length)]
		const { largeImageURL: background } = randomImage

		cookies.set('background', background, { path: '/', maxAge: 60 * 60 * 24 * 7 })

		return { data: background }
	} catch (error) {
		return error
	}
}
