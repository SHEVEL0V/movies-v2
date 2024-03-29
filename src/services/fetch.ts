/** @format */

const BASE_URL = 'https://api.themoviedb.org/3'
const KEY = '4fc86b17259ac63837b074fbab2b63b2'

const fetchUrl = async (url: string) => {
  const response = await fetch(url)
  return response.ok ? response.json() : Promise.reject(new Error('Not found'))
}

const fetchFilmById = async (id = '', page = 1) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
  return fetchUrl(url)
}

const fetchFilmByIdCredits = async (id = '', page = 1) => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
  return fetchUrl(url)
}

const fetchFilmQuery = async (query = '', page = 1) => {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
  return fetchUrl(url)
}

const fetchFilmTrendWeek = async (query = '', page = 1) => {
  const url = `${BASE_URL}/trending/movie/week?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
  return fetchUrl(url)
}

const fetchFilmReviews = async (id = '', page = 1) => {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}&include_adult=true`
  return fetchUrl(url)
}

export {
  fetchFilmQuery,
  fetchFilmTrendWeek,
  fetchFilmReviews,
  fetchFilmById,
  fetchFilmByIdCredits
}
