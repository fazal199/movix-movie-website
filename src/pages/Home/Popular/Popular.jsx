import React, { useState } from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import "../Trending/trending.scss";
import Carousel from '../../../components/Carousel/Carousel';
import useFetch from "../../../Hooks/useFetch"

const Popular = () => {

  let [endPoint,setEndPoint] = useState("movie");
  let {data,loading,error} = useFetch(`/${endPoint}/popular`);

  
  let onTabchange = (tab)=>{
     setEndPoint(tab == "Movies" ? "movie" : "tv");
     console.log(data.results);

  }

  return (
    <section className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Popular</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabchange={onTabchange}/>
        </ContentWrapper>
        <Carousel endPoint={endPoint} data={data?.results} loading={loading}/>
    </section>
  )
}

export default Popular;
