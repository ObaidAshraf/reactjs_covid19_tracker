const URL = 'https://api.covid19api.com/'

export const fetchCountry = async () => {
    const response = await fetch(URL + "countries")
    const jsonData = await response.json()
    return jsonData
}

export const fetchCountryData = async (country) => {
    const response = await fetch(URL + "total/country/" + country)
    const jsonData = await response.json()
    return jsonData
}

export const fetchGlobalData = async () => {
    const response = await fetch(URL + "summary")
    const jsonData = await response.json()
    return jsonData
}

export const numFormatter = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}