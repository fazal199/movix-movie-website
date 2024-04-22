import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Img from "../LazyLoadImage/Img.jsx";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../CircleRating/CircleRating";
import "./carousel.scss";
import Genres from "../Genres/Genres";

const Carousel = ({data,loading,endPoint,title}) => {

  const navigate = useNavigate();
  const carouselContainer = useRef();
  const {url} = useSelector(movix => movix.home);

  const skItem = ()=>{
      return(
        <div className="skeletonItem">
          <div className="posterBlack skeleton"></div>
          <div className="textBlock">
            <div className="title skeleton"></div>
            <div className="date skeleton"></div>
          </div>
        </div>
      )
  }

  const navigation = (direction)=>{
      const container = carouselContainer.current;
      
      const scrollAmount = direction == "left" ? 
      container.scrollLeft - (container.offsetWidth + 20) : 
      container.scrollLeft + (container.offsetWidth + 20) ;

      
      console.log(scrollAmount);
      
      container.scrollTo({
        left: scrollAmount,
        behavior : "smooth",
      })
  }

  return (
    <div className="carousel">
      <ContentWrapper>
      {
        title && <div className="carouselTitle">{title}</div>
      }
        <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={() => navigation("left")}/>
        <BsFillArrowRightCircleFill className="carouselRightNav arrow" onClick={() => navigation("right")}/>
        {!loading ? (
            <div className="carouselItems" ref={carouselContainer}>
                {
                   data?.map((item) =>{
                     const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                     return (
                        <div onClick={() => navigate(`/${item.media_type || endPoint}/${item.id}`)} key={item.id} className="carouselItem">
                         <div className="posterBlock">
                            <Img src={posterUrl}/>
                            <CircleRating rating={item.vote_average.toFixed(1)}/>
                            <Genres data={item.genre_ids.slice(0,2)} />
                         </div>
                         <div className="textBlock">
                            <span className="title">
                              {item.title || item.name }
                            </span>
                            <span className="date">
                              {dayjs(item.release_date).format("MMM D, YYYY") }
                            </span>
                         </div>
                        </div>
                     )
                   })
                }
            </div>
        ) : (
            <div className="loadingSkeleton">
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </div>
        )

        }
      </ContentWrapper>
    </div>
  )
}

export default Carousel
