import Videogame from "@/models/Videogame";

const FETCH_LIMIT = 8;
const BASE_URL  = "http:\\localhost:3000/api"

export const fetchVideogame = async () => {
    const response = await fetch(`${BASE_URL}/videogames/videogame`)
    const videogames = (await response.json()) as Videogame[];
    return videogames;
}   