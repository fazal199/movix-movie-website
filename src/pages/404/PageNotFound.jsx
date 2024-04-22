import React from "react";

import "./pagenotfound.scss";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper.jsx";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;
