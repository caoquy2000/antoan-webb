import React from "react";
import BannerSection from "./section/banner-section/BannerSection";
import ServicePageSection from "./section/service-page-section/ServicePageSection";

const Service = (props) => {
    return (
        <React.Fragment>
            <BannerSection />
            <ServicePageSection />
        </React.Fragment>
    );
};

export default Service;