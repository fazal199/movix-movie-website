import React, { useState } from "react";

import "./videosection.scss";

import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper.jsx";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/VideoPopup/VideoPopup.jsx";
import Img from "../../../components/LazyLoadImage/Img.jsx";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {
                            data?.results?.map(video => {
                                return <div key={video.id} className="videoItem" onClick={() => 
                                {setVideoId(video.id) 
                                setShow(true)}}>
                                    <div className="videoThumbnail">
                                        <Img src={`http://img.youtube.com/vi/${video.key}/mqdefault.jpg`}/>
                                    <PlayIcon/>
                                    </div>
                                    <div className="videoTitle">
                                        {video.name}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;
