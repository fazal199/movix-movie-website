import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer.jsx/Footer.jsx";
import { Outlet } from "react-router-dom";
import getDataFromApi from "./utils/api.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApiConfiguration,getGenres } from "./store/Homeslice.js";

const App = () => {

  let dispatch = useDispatch();

  //useeffect for configuration
  useEffect(()=>{
    
      genresCall();
      getDataFromApi('/configuration').then((config)=>{
          const url = {
             backdrop : config.images.secure_base_url + "original",
             poster : config.images.secure_base_url + "original",
             profile : config.images.secure_base_url + "original",
          }

          dispatch(getApiConfiguration(url));
      })
  })

  const genresCall = async()=>{
        let promise = [];
        let endPoint = ["tv","movie"];
        let allGenres = {};

        endPoint.forEach((url)=>{
            promise.push(getDataFromApi(`/genre/${url}/list`))
        })

        const data =await Promise.all(promise);
        
        data.map(({genres})=>{
            
            return genres.map((item) => {
                allGenres[item.id] = item
            })
        })

        dispatch(getGenres(allGenres));
  }
  return (
      <>
            <Header/>
             <Outlet/>
            <Footer/>
      </>
  )
}

export default App;
