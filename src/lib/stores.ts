import { writable } from 'svelte/store'

export const modal = writable(false)

export const images = writable<{ id: string; url: string; alt: string }[]>([])

export const background = writable<string | null>(null)

export const loading = writable(false)
