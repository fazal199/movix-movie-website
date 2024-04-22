import React, { useState } from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import "../Trending/trending.scss";
import Carousel from '../../../components/Carousel/Carousel';
import useFetch from "../../../Hooks/useFetch"

const TopRated = () => {

  let [endPoint,setEndPoint] = useState("movie");
  let {data,loading,error} = useFetch(`/${endPoint}/top_rated`);

  
  let onTabchange = (tab)=>{
     setEndPoint(tab == "Movies" ? "movie" : "tv");
     console.log(data.results);

  }

  return (
    <section className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Top Rated</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabchange={onTabchange}/>
        </ContentWrapper>
        <Carousel endPoint={endPoint} data={data?.results} loading={loading}/>
    </section>
  )
}

export default TopRated;
