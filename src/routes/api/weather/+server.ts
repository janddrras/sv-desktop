import { getWeather } from '$lib/server/getWeather'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
	const weatherData = await getWeather()
	const data = weatherData.weatherData
	return new Response(JSON.stringify({ data }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
