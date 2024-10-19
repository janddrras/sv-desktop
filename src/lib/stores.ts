import { writable } from 'svelte/store'

type WeatherData = {
	current: {
		time: Date
		temperature2m: number
		weatherCode: number
	}
	hourly: {
		time: Date[]
		temperature2m: {
			idx: number
		}
		weatherCode: {
			idx: number
		}
	}
	daily: {
		time: Date[]
		weatherCode: {
			idx: number
		}
		temperature2mMax: {
			idx: number
		}
		temperature2mMin: {
			idx: number
		}
		sunrise: Date
		sunset: Date
	}
}

export const modal = writable(false)

export const images = writable<{ id: string; url: string; alt: string }[]>([])

export const background = writable<string | null>(null)

export const loading = writable(false)

export const weather = writable<WeatherData | null>(null)
