import { writable } from 'svelte/store'

export const modal = writable(false)

export const images = writable<string[]>([])

export const background = writable<string | null>(null)
