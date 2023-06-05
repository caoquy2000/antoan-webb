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
                                    route={item.link}
                                    cardStyle={{
                                        textAlign: 'center',
                                        boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                                        height: '100%',
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
                                        'WebkitLineClamp': '3',
                                        'WebkitBoxOrient': 'vertical',
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
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
        banner: '/img/bao-ve-muc-tieu-co-dinh.jpg',
        alt: 'Công Việc Bảo Vệ',
        title: 'Công Việc Bảo Vệ',
        description: 'Công việc bảo vệ gồm những việc như Bảo vệ tài sản, Giám sát an ninh, Kiểm tra an ninh, Phát hiện và giải quyết sự cố,... Với tình hình an ninh, trật tự và an toàn đang được đặt lên hàng đầu, việc bảo vệ được xem là một công việc rất quan trọng trong xã hội hiện nay.',
        link: '/tin-tuc/cong-viec-bao-ve',
    },
    {
        banner: '/img/gioi-thieu-bao-ve-an-toan-01.jpg',
        alt: 'Mẫu phương án bảo vệ mục tiêu chuyên nghiệp tại Bảo Vệ An Toàn',
        title: 'Mẫu phương án bảo vệ mục tiêu chuyên nghiệp tại Bảo Vệ An Toàn',
        description: 'Mẫu phương án bảo vệ mục tiêu gồm các nội dung hạng mục bảo vệ và nhiệm vụ bảo vệ chi tiết mà công ty bảo vệ cung cấp. Bởi lẽ thông qua mẫu phương án bảo vệ sẽ giúp khách hàng đánh giá được công ty dịch vụ bảo vệ có chuyên nghiệp và uy tín không. Đồng thời đây còn là cơ sở để công ty dịch vụ bảo vệ thực hiện nhiệm vụ của mình. Vậy mẫu phương án bảo vệ mục tiêu có vai trò gì? Xây dựng phương án bảo vệ như thế nào là phù hợp. Cùng Bảo Vệ An Toàn tìm hiểu qua bài viết sau nhé.',
        link: '/tin-tuc/mau-phuong-an-bao-ve-chuyen-nghiep',
    },
    {
        banner: '/img/gioi-thieu-bao-ve-an-toan-04.jpg',
        alt: 'Công ty bảo vệ Quận 4 TPHCM chuyên nghiệp với giá cả phải chăng',
        title: 'Công ty bảo vệ Quận 4 TPHCM chuyên nghiệp với giá cả phải chăng',
        description: 'Công ty bảo vệ Quận 4 TPHCM uy tín với giá cả phải chăng là địa chỉ được nhiều doanh nghiệp quan tâm và tìm kiếm. Bởi lẽ khu vực Quận 4 có mật độ dân số khá đông kèm theo đó là vấn đề an ninh khá phức tạp. Do đó, việc lựa chọn được Công ty bảo vệ Quận 4 chuyên nghiệp không chỉ đảm bảo an toàn mà còn góp phần nâng hình ảnh của doanh nghiệp. Cùng Bảo Vệ An Toàn tìm hiểu sự cần thiết cũng như các tiêu chí để lựa chọn được công ty bảo vệ TPHCM uy tín nhé. Đừng quên liên hệ với hotline 0933777005 để sở hữu dịch vụ bảo vệ chuyên nghiệp của Bảo Vệ An Toàn nhé.',
        link: '/tin-tuc/cong-ty-bao-ve-quan-4',
    }
]

export default NewsSection;