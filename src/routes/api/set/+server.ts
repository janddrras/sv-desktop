import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { img } = await request.json()

	cookies.set('background', img, { path: '/', maxAge: 60 * 60 * 24 * 7 })

	return json({ img })
}
