import { createApi } from 'unsplash-js'

export const unsplash = createApi({
	accessKey: import.meta.env.VITE_UNSPALSH_ACCESS_KEY
})
