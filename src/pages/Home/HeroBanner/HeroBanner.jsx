import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/LazyLoadImage/Img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import "./herobanner.scss";

const HeroBanner = () => {
  let navigate = useNavigate();
  let [query, setQuery] = useState("");
  let [background, setBackground] = useState("");
  let { url } = useSelector((movixStore) => movixStore.home);
  let { data, loading, error } = useFetch("/movie/upcoming");

  //setting the background state
  useEffect(() => {
    let bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 19)].backdrop_path;
    setBackground(bg);
  }, [data]);

  //handle the user search
  let handleSearch = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <section className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img  src={background} alt="backdrop" />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <h1 className="title">Welcome to <span className="main-name">Movix</span></h1>
          <p className="subtitle">
            Millions of movies, TV shows and poeple to discover.
          </p>
        </div>
        <div className="searchInput">
          <input
            onKeyDown={handleSearch}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="search movies"
          />
          <button>Search</button>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default HeroBanner;
