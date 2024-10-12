import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { fetchImages } from '$lib/server/fetchImages'

export const POST: RequestHandler = async ({ request }) => {
	const { search, category } = await request.json()

	const data = await fetchImages({ search, category })

	const imageResults = data.data.hits.map((image: { largeImageURL: string }) => image.largeImageURL)

	return json({ imageResults })
}
