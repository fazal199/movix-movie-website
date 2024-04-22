import React, { useEffect, useState } from "react";

import fetchDataFromApi from "../../utils/api";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import "./search.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../components/MovieCard/MovideCard";


const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  console.log(data);
  

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(
      `/search/multi?query=${query}/&page=${pageNum}`,
      true
    ).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
      
    });
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(
      `/search/multi?query=${query}/&page=${pageNum}`,
      true
    ).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });

        
      } else setData(res);

      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
    
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      <ContentWrapper>
         {
          data?.results?.length > 0 ? (
           <>
              <div className="pageTitle">
                 {`Search ${data?.total_results > 1 ? "results" : "result"} of ${query}`}
              </div>
              <InfiniteScroll className="content" dataLength={data?.results?.length || []} next={fetchNextPageData} hasMore={pageNum <= data?.total_pages} loader={<Spinner/>}>
                {
                  data.results.map((item,index) => {
                    if(item.media_type == "person") return;
                    return <>
                      <MovieCard key={index} data={item} fromSearch={true}/>
                    </>
                  })
                }
              </InfiniteScroll>
           </>
          ) : (
            <span className="resultNotFound">
              Sorry Result not Found!
            </span>
          )
         }
      </ContentWrapper>
    </div>
  );
};

export default SearchResult;
