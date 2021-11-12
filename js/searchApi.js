const API_BASE_ENDPOINT = "https://www.boredapi.com/api/activity"

const searchApi = async (query) => {
    const URL = `${API_BASE_ENDPOINT}?type=${query}`;
    //console.log(URL)
    let result = await fetch(URL)
    return result.json()
}