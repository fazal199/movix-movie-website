import React from 'react'
import "./home.scss";
import HeroBanner from './HeroBanner/HeroBanner';
import Trending from './Trending/Trending';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';

const Home = () => {
  return (
   <>
       <HeroBanner/>
       <Trending/>
       <Popular/>
       <TopRated/>
   </>
  )
}

export default Home;
