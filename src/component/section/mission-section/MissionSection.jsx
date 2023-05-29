import { ContainerWrapper, ImageWrapper } from "Container";
import TextBox from "component/text-box/TextBox";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import * as variable from "common/variable";

const MissionSection = (props) => {
    const sliderRef = useRef(null);
    const [Active1, setActive1] = useState(true);
    const [Active2, setActive2] = useState(false);
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (currentSlide) => {
            if (currentSlide == 0) {
                setActive1(false);
                setActive2(true);
            } else if (currentSlide == 1) {
                setActive1(true);
                setActive2(false);
            }
        },
       
    };

    return (
        <MissionWrapper>
            <ContainerWrapper> 
                <MissionContainer>
                    <MissionContent>
                        <MissionContentWrapper className={!!Active1 && 'active1'}>
                                <TextBox 
                                    className={'mission_textbox'}
                                    tagTitle={'h3'}
                                    titleStyle={{
                                        fontFamily: 'OSB',
                                        fontSize: '28px',
                                        marginBottom: '8px',
                                    }}
                                    titleContent='SỨ MỆNH CỦA CHÚNG TÔI'
                                    bodyStyle={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontSize: '22px',
                                    }}
                                    bodyContent1={'Nhằm nâng cao hình ảnh doanh nghiệp, phát triển kinh doanh và đảm bảo an ninh trong quá trình hoạt động. Bảo Vệ An Toàn là đơn vị cung cấp dịch vụ bảo vệ uy tín và chất lượng được nhiều khách hàng tin tưởng. Chúng tôi có thể tự tin trở thành đối tác đáng tin cậy đồng hành cùng quý khách hàng.'}
                                />
                            </MissionContentWrapper>
                            <MissionContentWrapper className={!!Active2 && 'active2'}>
                                <TextBox 
                                    className={'mission_textbox'}
                                    tagTitle={'h3'}
                                    titleStyle={{
                                        fontFamily: 'OSB',
                                        fontSize: '28px',
                                        marginBottom: '8px',
                                    }}
                                    titleContent='SỨ MỆNH CỦA CHÚNG TÔI'
                                    bodyStyle={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontSize: '22px',
                                    }}
                                    bodyContent1={'Nhằm nâng cao hình ảnh doanh nghiệp, phát triển kinh doanh và đảm bảo an ninh trong quá trình hoạt động. Bảo Vệ An Toàn là đơn vị cung cấp dịch vụ bảo vệ uy tín và chất lượng được nhiều khách hàng tin tưởng. Chúng tôi có thể tự tin trở thành đối tác đáng tin cậy đồng hành cùng quý khách hàng.'}
                                />
                        </MissionContentWrapper>
                    </MissionContent>
                    <MissionSlider>
                        <Slider ref={sliderRef} {...settings} >
                            <ImageWrapper>
                                <img src="./img/mission.jpg" alt="Mission" />
                            </ImageWrapper>
                            <ImageWrapper>
                                <img src="./img/mission.jpg" alt="Mission" />
                            </ImageWrapper>
                        </Slider>
                    </MissionSlider>
                    <MissionButton>
                        <MissionButtonWrapper>
                            <div onClick={() => sliderRef?.current?.slickPrev()}>
                                <img src="./img/ic_arrow_left.svg" alt="Icon Arrow Left" />
                            </div>
                            <div className="arrow_right" onClick={() => sliderRef?.current?.slickNext()}>
                                <img src="./img/ic_arrow_left.svg" alt="Icon Arrow Left" />
                            </div>
                        </MissionButtonWrapper>
                    </MissionButton>
                </MissionContainer>
            </ContainerWrapper>
        </MissionWrapper>
    );
};


const MissionWrapper = styled.section`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 31.6%;
    background-color: ${variable.WHITE_COLOR};
    color: ${variable.BLACK_COLOR};
    @media (max-width: 1100px) {
        padding-top: initial;
        height: initial;
    }
`;

const MissionContainer = styled.div`
    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

const MissionContent = styled.div`
    width: 30%;
    position: absolute;
    top: 40%;
    left: 15%;
    transform: translateY(-50%);
    @media (max-width: 1300px) {
        width: 34%;
    }
    @media (max-width: 1100px) {
        position: initial;
        width: 100%;
        top: initial;
        left: initial;
        transform: initial;
        margin-top: 30px;
    }
`;

const MissionContentWrapper = styled.div`
    position: absolute;

    .title_textbox {
        opacity: 0;
        transform: translateY(40px);
    }
    .content_textbox {
        opacity: 0;
        transform: translateY(40px);
    }
    &.active1 .title_textbox {
        opacity: 1;
        transform: translateY(0px);
        transition: all linear 500ms;
    }
    &.active1 .content_textbox {
        opacity: 1;
        transform: translateY(0px);
        transition: all linear 500ms;
    }
    &.active2 .title_textbox {
        opacity: 1;
        transform: translateY(0px);
        transition: all linear 500ms;
    }
    &.active2 .content_textbox {
        opacity: 1;
        transform: translateY(0px);
        transition: all linear 500ms;
    }
    :before {
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${variable.BLACK_COLOR};
        position: absolute;
        top: -20px;
        left: -200%;
    }
    &.active1::before {
        left: -50%;
        transition: all linear 500ms;
    }
    &.active2::before {
        left: -50%;
        transition: all linear 500ms;
    }
  
  
    @media (max-width: 500px) {
        .title_textbox {
            font-size: 22px !important;
        }
        .content_textbox {
            font-size: 18px !important;
        }
    }
`;

const MissionSlider = styled.div`
    position: absolute;
    width: 50%;
    top: 0;
    right: 0;
    @media (max-width: 1100px) {
        position: initial;
        width: 100%;
    }
`;

const MissionButton = styled.div`
    background-color: ${variable.RED_COLOR};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1100px) {
        display: none;
    }
`;

const MissionButtonWrapper = styled.div`
    display: flex;
    position: relative;
    :before {
        content: '';
        width: 2px;
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: ${variable.WHITE_COLOR};
        transform: translate(-50%, -50%);
    }
    div {  
        width: 50px;
        height: 50px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .arrow_right {
        transform: rotate(180deg);
    
    }
`;

export default MissionSection;