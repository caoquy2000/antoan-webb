import { ContainerWrapper } from "Container";
import CardCpn from "component/card-cpn/CardCpn";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const NewsSection  = (props) => {
    return (
        <NewsWrapper>
            <ContainerWrapper>
                <NewsTitle>
                    Tin Tức
                </NewsTitle>
                <NewsSubTitle>
                    Tổng hợp tin tức mới nhất từ Bảo Vệ An Toàn SECURITY
                </NewsSubTitle>
                <NewsList>
                    {
                        !!newsMock && newsMock.map((item) => (
                            <NewsItem>
                                <CardCpn 
                                    key={item.alt}
                                    img={item.banner}
                                    heightImg={'288'}        
                                    alt={item.alt}
                                    title={item.title}
                                    content={item.description}
                                    cardStyle={{
                                        textAlign: 'center',
                                        boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                                    }}
                                    titleStyle={{
                                        fontFamily: 'OSB',
                                        fontSize: '22px',
                                        padding: '18px 0px',
                                        color: variable.MAIN_COLOR,
                                    }}   
                                    contentStyle={{
                                        fontFamily: "'Lato', sans-serif",
                                        fontSize: '16px',
                                        lineHeight: '22px',
                                        color: '#8D8D8D',
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        '-webkit-line-clamp': '3',
                                        '-webkit-box-orient': 'vertical',
                                    }}      
                                    button={
                                    <a href={item.link}
                                        style={{
                                            textDecoration: 'underline',
                                            color: variable.BLACK_COLOR,
                                            fontFamily: "'Lato', sans-serif",
                                            fontSize: '16px',
                                            paddingBottom: '28px',
                                            display: 'inline-block',
                                        }}
                                    >
                                        Xem chi tiết
                                    </a>
                                    }
                                />
                            </NewsItem>
                        ))
                    }
                </NewsList>
                <NewsButton>
                    <a href="#">Xem thêm tin tức khác</a>
                </NewsButton>
            </ContainerWrapper>
        </NewsWrapper>
    );
};

const NewsWrapper = styled.section`
    margin-top: 85px;
    text-align: center;
`;

const NewsTitle = styled.h4`
    padding-top: 5px;
    font-family: 'OSB';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
`;

const NewsSubTitle = styled.span`
    display: inline-block;
    padding-top: 20px;
    padding-bottom: 47px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
`;

const NewsList = styled.div`
    display: flex;
    gap: 37px;
    @media (max-width: 892px) {
        display: initial;
    }
`;

const NewsItem = styled.div`
    @media (max-width: 892px) {
        margin-bottom: 20px;
    }
`;

const NewsButton = styled.div`
    text-align: center;
    margin-top: 45px;
    a {
        font-family: 'OSB';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
        text-transform: uppercase;
        color: ${variable.WHITE_COLOR};
        padding: 18px 52px;
        background-color: ${variable.RED_COLOR};
        text-decoration: none;
        display: inline-block;
        border-radius: 35px;
    }
`;

const newsMock = [
    {
        banner: './img/bao-ve-muc-tieu-co-dinh.jpg',
        alt: 'Tin Tức Bảo Vệ an toàn 1',
        title: 'Tin Tức Bảo Vệ an toàn 1',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo vệ cố định luôn là nhiệm vụ quan...',
        link: '#',
    },
    {
        banner: './img/bao-ve-muc-tieu-co-dinh.jpg',
        alt: 'Tin Tức Bảo Vệ an toàn 2',
        title: 'Tin Tức Bảo Vệ an toàn 2',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo vệ cố định luôn là nhiệm vụ quan...',
        link: '#',
    },
    {
        banner: './img/bao-ve-muc-tieu-co-dinh.jpg',
        alt: 'Tin Tức Bảo Vệ an toàn 2',
        title: 'Tin Tức Bảo Vệ an toàn 2',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo vệ cố định luôn là nhiệm vụ quan...',
        link: '#',
    }
]

export default NewsSection;