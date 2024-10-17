// import { error } from '@sveltejs/kit'
import { unsplash } from '$lib/server/unsplashAPI'
import type { LayoutServerLoad } from './$types'
import 'dotenv/config'

export const load: LayoutServerLoad = async ({ cookies }) => {
	const background = cookies.get('background')
	if (background) return { data: background }

	try {
		const randomImage = await unsplash.photos.getRandom({ query: 'landscape', orientation: 'landscape' })
		const photo = Array.isArray(randomImage.response) ? randomImage.response[0] : randomImage.response
		if (!photo) throw new Error('Failed to fetch photo')
		const background = photo.urls.full

		cookies.set('background', background, { path: '/', maxAge: 60 * 60 * 24 * 7 })

		return { background }
	} catch (error) {
		return error
	}
}
