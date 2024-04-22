import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_APP_API_KEY;


const getDataFromApi = async(url, params = false)=>{
    
    let Main_url = !params ? BASE_URL + url + `?api_key=${API_KEY}` : BASE_URL + url + `&api_key=${API_KEY}`
    
    try {
        let {data} = await axios.get(Main_url);
        
        return data;

    } catch (error) {
        console.log("error while fetching data [api.js]!");
        throw Error;
    }
};

export default getDataFromApi;