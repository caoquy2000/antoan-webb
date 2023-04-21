import { ContainerWrapper } from "Container";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';
import Slider from "react-slick";

const CustomerSection = (props) => {

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <CustomerWrapper>
            <ContainerWrapper>
                <CustomerTitle>
                    KHách hàng của chúng tôi
                </CustomerTitle>
                <CustomerBody>
                    <Slider {...settings}>
                        <CustomerItem>
                            <CustomerLogo>
                                <img src="./img/mcdonald_logo.png" alt="MCDonald Logo" />
                            </CustomerLogo>
                            <CustomerContent>
                                “Là một nhãn hàng sở hữu chuỗi cửa hàng thức ăn nhanh nổi tiếng trên thế giới. MCDonald đã tin tưởng và sử dụng dịch vụ của Bảo Vệ An Toàn. Nhờ sự chuyên nghiệp, nhân viên nghiêm túc, nhiệt tình.”
                            </CustomerContent>
                            <CustomerName>
                                MCDonald
                            </CustomerName>
                        </CustomerItem>
                        <CustomerItem>
                            <CustomerLogo>
                                <img src="./img/mcdonald_logo.png" alt="MCDonald Logo" />
                            </CustomerLogo>
                            <CustomerContent>
                                “Là một nhãn hàng sở hữu chuỗi cửa hàng thức ăn nhanh nổi tiếng trên thế giới. MCDonald đã tin tưởng và sử dụng dịch vụ của Bảo Vệ An Toàn. Nhờ sự chuyên nghiệp, nhân viên nghiêm túc, nhiệt tình.”
                            </CustomerContent>
                            <CustomerName>
                                MCDonald
                            </CustomerName>
                        </CustomerItem>
                        <CustomerItem>
                            <CustomerLogo>
                                <img src="./img/mcdonald_logo.png" alt="MCDonald Logo" />
                            </CustomerLogo>
                            <CustomerContent>
                                “Là một nhãn hàng sở hữu chuỗi cửa hàng thức ăn nhanh nổi tiếng trên thế giới. MCDonald đã tin tưởng và sử dụng dịch vụ của Bảo Vệ An Toàn. Nhờ sự chuyên nghiệp, nhân viên nghiêm túc, nhiệt tình.”
                            </CustomerContent>
                            <CustomerName>
                                MCDonald
                            </CustomerName>
                        </CustomerItem>
                    </Slider>
                </CustomerBody>
            </ContainerWrapper>
        </CustomerWrapper>
    );
};

const CustomerWrapper = styled.section`
    margin-top: 85px;
    background-color: ${variable.GRAY_COLOR};
`;

const CustomerTitle = styled.h4`
    text-align: center;
    padding-top: 70px;
    padding-bottom: 40px;
    color: ${variable.MAIN_COLOR};
    font-family: 'OSB';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
    text-transform: uppercase;
`;

const CustomerBody = styled.div`
    padding-bottom: 66px;
`;

const CustomerItem = styled.div`
    text-align: center;
`;

const CustomerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CustomerContent = styled.p`
    padding: 26px 390px 15px;
    @media (max-width: 1200px) {
        padding: 26px 190px 15px;
    }
    @media (max-width: 782px) {
        padding: 26px 90px 15px;
    }
    @media (max-width: 500px) {
        padding: 26px 20px 15px;
    }
`;

const CustomerName = styled.span`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: ${variable.RED_COLOR};
`;

export default CustomerSection;