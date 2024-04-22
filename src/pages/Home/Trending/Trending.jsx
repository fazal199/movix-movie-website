import React, { useState } from 'react'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import "./trending.scss";
import Carousel from '../../../components/Carousel/Carousel';
import useFetch from "../../../Hooks/useFetch"

const Trending = () => {

  let [endPoint,setEndPoint] = useState("day");
  let {data,loading,error} = useFetch(`/trending/movie/${endPoint}`);

  let onTabchange = (tab)=>{
     setEndPoint(tab == "Day" ? "day" : "week");
     console.log(data.results);

  }

  return (
    <section className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day","Week"]} onTabchange={onTabchange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </section>
  )
}

export default Trending
