import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { unsplash } from '$lib/server/unsplashAPI'

export const POST: RequestHandler = async ({ request }) => {
	const { search, category } = await request.json()

	const data = await unsplash.search.getPhotos({ query: `${search} ${category}`, perPage: 20, page: 1 })
	const resp = data.response?.results.map((photo) => ({
		id: photo.id,
		url: photo.urls.small,
		alt: photo.alt_description
	}))

	return json({ resp })
}
