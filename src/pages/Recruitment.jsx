import React from "react";
import RecruitBanner from "./section/recruit-banner/RecruitBanner";
import { ContainerWrapper } from "Container";

const Recruitment = (props) => {
    return (
        <React.Fragment>
            <RecruitBanner />
            <ContainerWrapper>
                <h1>Chưa có nội dung bài viết</h1>
            </ContainerWrapper>
        </React.Fragment>
    );
};

export default Recruitment;