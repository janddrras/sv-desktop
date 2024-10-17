import { createApi } from 'unsplash-js'
import { UNSPALSH_ACCESS_KEY } from '$env/static/private'

export const unsplash = createApi({
	accessKey: UNSPALSH_ACCESS_KEY
})
