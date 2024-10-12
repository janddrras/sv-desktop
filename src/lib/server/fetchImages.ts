export async function fetchImages({ search, category }: { search: string; category: string }) {
	const apiKey = import.meta.env.VITE_PIXABAY_API_KEY
	const baseUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&editors_choice=true&orientation=horizontal`

	let url = baseUrl

	if (category !== '') url = baseUrl + `&category=${category}`
	if (search !== '') {
		const searchTerm = String(search).trim().split(' ').join('+').toLowerCase()
		url = baseUrl + `&q=${searchTerm}`
	}

	const response = await fetch(url)
	const data = await response.json()

	return { data }
}
