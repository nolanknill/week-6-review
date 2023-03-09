const API_URL = "http://localhost:8080";
const API_KEY = "grogu";

export function getPlantsEndpoint() {
    return API_URL + "/plants?api_key=" + API_KEY;
}

export function getPlantEndpoint(id) {
    return API_URL + "/plants/" + id + "?api_key=" + API_KEY;
}