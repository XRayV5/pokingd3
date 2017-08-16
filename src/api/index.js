export const url_base = "http://api.openweathermap.org/data/2.5/forecast?"
export const Kii = "362ff356a2f563ea09e05c598fc67925"
// id=1805754&appid="


export function fetchIndividual(q) {
    return fetch(q).then((res) => res.json()).catch(console.error)
}

export function fetchFromOpenWeather(cityIds) {
    return cityIds.map((id) => fetchIndividual(`${url_base}id=${id}&appid=${Kii}`))
}