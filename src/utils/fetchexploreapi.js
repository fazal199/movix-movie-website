import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDgwMzBkMWMzYjgwNDdlYmQwNTY0ZmYxZjEwMzUzZiIsInN1YiI6IjY1Nzg3YzA2N2EzYzUyMDBjYTdhMjIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2dqLXDp4TsZaZnEmceEfJO-IENUJYse2Xf5GMtNPC1Y";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

const fetchExploreDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log("something went wrong while fetching data for explore page");
        return err;
    }
};

export default fetchExploreDataFromApi;