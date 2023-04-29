import BannerSection from "component/section/banner-section/BannerSection";
import ServicePageSection from "component/section/service-page-section/ServicePageSection";
import React from "react";

const Service = (props) => {
    return (
        <React.Fragment>
            <BannerSection />
            <ServicePageSection />
        </React.Fragment>
    );
};

export default Service;