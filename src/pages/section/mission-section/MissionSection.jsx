import { ContainerWrapper, ImageWrapper } from "Container";
import TextBox from "component/text-box/TextBox";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import * as variable from "common/variable";

const MissionSection = (props) => {

    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <MissionWrapper>
            <ContainerWrapper> 
                <MissionContainer>
                    <MissionContent>
                        <MissionContentWrapper>
                            <TextBox 
                                tagTitle={'h3'}
                                titleStyle={{
                                    fontFamily: 'OSB',
                                    fontSize: '28px',
                                    marginBottom: '8px',
                                }}
                                titleContent='SỨ MỆNH CỦA CHÚNG TÔI'
                                bodyStyle={{
                                    fontFamily: 'LTR',
                                    fontSize: '22px',
                                }}
                                bodyContent1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.'}
                            />
                        </MissionContentWrapper>
                    </MissionContent>
                    <MissionSlider>
                        <Slider {...settings} >
                            <ImageWrapper>
                                <img src="./img/mission.jpg" alt="Mission" />
                            </ImageWrapper>
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
                            <div>
                                <img src="./img/ic_arrow_left.svg" alt="Icon Arrow Left" />
                            </div>
                            <div className="arrow_right">
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
    margin-top: 125px;
`;

const MissionContainer = styled.div`

`;

const MissionContent = styled.div`
    width: 30%;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
    
`;

const MissionContentWrapper = styled.div`
    position: relative;
    :before {
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${variable.BLACK_COLOR};
        position: absolute;
        top: -20px;
        left: -50%;
    }
`;

const MissionSlider = styled.div`
    position: absolute;
    width: 50%;
    top: 0;
    right: 0;
`;

const MissionButton = styled.div`
    background-color: ${variable.RED_COLOR};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    
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
    }
    .arrow_right {
        transform: rotate(180deg);
    
    }
`;

export default MissionSection;