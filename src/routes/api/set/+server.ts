import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { unsplash } from '$lib/server/unsplashAPI'

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { imgId } = await request.json()

	const resp = await unsplash.photos.get({ photoId: imgId })
	const img = resp.response?.urls.full
	if (!img) return json({ error: 'Image not found' }, { status: 404 })
	cookies.set('background', img, { path: '/', maxAge: 60 * 60 * 24 * 7 })

	return json({ img })
}
