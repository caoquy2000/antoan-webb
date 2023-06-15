import BannerSection from "component/section/banner-section/BannerSection";
import React from "react";
import * as variable from 'common/variable';
import { ContainerWrapper } from "Container";
import CardCpn from "component/card-cpn/CardCpn";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";


const Service = (props) => {
    return (
        <>
          <Head>
                <title>
                   Dịch Vụ
                </title>
            </Head>
            <BannerSection imgLink={'./img/hinh-4.jpg'} />
            <section className="service_page_section_wrapper">
                <ContainerWrapper>
                    <div className="service_page_container">
                        <h2 className="service_page_title">
                            DỊCH VỤ CỦA CHÚNG TÔI
                        </h2>
                        <div className="page_container">
                            <div className="service_list">
                            {
                                serviceMock && serviceMock.map((item) => (
                                    <div>
                                        <CardCpn 
                                            img={item.banner}
                                            heightImg='210'
                                            alt={item.alt}
                                            title={item.title}
                                            content={item.description}
                                            route={item.route}
                                            cardStyle={{
                                                borderRadius: '8px',
                                                boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                                                background: variable.WHITE_COLOR,
                                                height: '100%',
                                            }}
                                            titleStyle={{
                                                fontFamily: 'OSB',
                                                fontSize: '20px',
                                                color: variable.MAIN_COLOR,
                                                paddingBottom: '8px',
                                            }}
                                            contentStyle={{
                                                fontFamily: 'sans-serif',
                                                fontSize: '16px',
                                                color: variable.TEXT_DESCRIPTION_COLOR,
                                                lineHeight: '22px',
                                                overflow: 'hidden',
                                                display: '-webkit-box',
                                                'WebkitLineClamp': '3',
                                                'WebkitBoxOrient': 'vertical',
                                            }}
                                            bodyStyle={{
                                                padding: '22px',
                                            }}
                                        />
                                    </div>
                                ))
                            }
                            </div>
                            <div className="service_banner">
                                <BannerHotline />
                                <div className="send_phone_wrapper">
                                    <BannerSendPhone />
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerWrapper>
            </section>
            <style jsx>
            {
                `
                    .service_page_section_wrapper {
                        margin-top: 100px;
                    }
                    .service_page_container {
                        padding-top: 26px;
                        padding-bottom: 60px;
                    }
                    .service_page_title {
                        font-family: 'OSB';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 30px;
                        line-height: 44px;
                        text-transform: uppercase;
                        color: ${variable.LOGO_COLOR};
                        padding-bottom: 15px;
                    }
                    .page_container {
                        display: flex;
                    }
                    .service_list {
                        width: 50%;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        column-gap: 87px;
                        row-gap: 64px;
                    }
                    .service_banner {
                        width: 50%;
                        padding-left: 100px;
                    }
                    .send_phone_wrapper {
                        margin-top: 15px;
                    }
                    @media (max-width: 1200px) {
                        .service_list {
                            gap: 20px 35px;
                        }
                        .service_banner {
                            padding-left: 40px;
                        }
                    }
                    @media (max-width: 1000px) {
                        .page_container {
                            flex-direction: column-reverse;
                        }
                        .service_list {
                            width: 100%;
                            gap: 55px 100px;
                        }
                        .service_banner {
                            width: 100%;
                            padding-left: initial;
                        }
                        .send_phone_wrapper {
                            margin-bottom: 15px;
                        }
                    }
                    @media (max-width: 800px) {
                        .service_list {
                            gap: 30px 50px;
                        }
                    }
                    @media (max-width: 600px) {
                        .service_list {
                            grid-template-columns: repeat(1, 1fr);
                        }
                    }
                    @media (max-width: 550px) {
                        .service_page_section_wrapper {
                            margin-top: 50px;
                        }
                    }
                `
            }
        </style>
        </>
    );
};
const serviceMock = [
    {
        banner: './img/bao-ve-muc-tieu-co-dinh.jpg',
        alt: 'Bảo Vệ Chung Cư - Tòa Nhà',
        title: 'Bảo Vệ Chung Cư - Tòa Nhà',
        route: '/dich-vu-bao-ve-muc-tieu-co-dinh',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo...',
    },
    {
        banner: './img/dich-vu-moi.jpg',
        alt: 'Bảo Vệ Giữ Xe',
        title: 'Bảo vệ Giữ xe',
        route: '/dich-vu-bao-ve-giu-xe',
        description: 'Bảo Vệ An Toàn chuyên cung cấp nhân lực bảo vệ các nhà máy, xí nghiệp có quy mô lớn...',
    },
    {
        banner: './img/bao-ve-chat-luong-cao.png',
        alt: 'Bảo Vệ Nhà Máy, Xý Nghiệp, Công Ty',
        title: 'Bảo Vệ Nhà Máy, Xý Nghiệp, Công Ty',
        route: '/dich-vu-bao-ve-chat-luong-cao',
        description: 'Công ty Bảo Vệ An Toàn tự hào cung cấp dịch vụ bảo vệ chất lượng cao đến quý doanh nghiệp khách hàng...',
    },
    {
        banner: './img/bao-ve-su-kien-le-hoi.png',
        alt: 'Bảo Vệ Sự Kiện, Lễ hội',
        title: 'Bảo Vệ Sự Kiện, Lễ hội',
        route: '/dich-vu-bao-ve-su-kien',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...',
    },
    {
        banner: './img/hinh-banner-dich-vu-1.jpg',
        alt: 'Bảo Vệ Yếu Nhân',
        title: 'Bảo Vệ Yếu Nhân',
        route: '/dich-vu-bao-ve-yeu-nhan',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...',
    },
    {
        banner: './img/hinh-banner-dich-vu-2.jpg',
        alt: 'Bảo Vệ Mục Tiêu Di Động',
        title: 'Bảo Vệ Mục Tiêu Di Động',
        route: '/dich-vu-bao-ve-muc-tieu-di-dong',
        description: 'Bảo Vệ An Toàn chuyên cung cấp nhân lực bảo vệ các nhà máy, xí nghiệp có quy mô lớn...',
    },
    {
        banner: './img/bao-ve-khu-cong-nghiep.png',
        alt: 'Bảo Vệ Khu Công Nghiệp',
        title: 'Bảo Vệ Khu Công Nghiệp',
        route: '/dich-vu-bao-ve-khu-cong-nghiep',
        description: 'Công ty Bảo Vệ An Toàn tự hào cung cấp dịch vụ bảo vệ chất lượng cao đến quý doanh nghiệp khách hàng...',
    },
    {
        banner: './img/bao-ve-xe-van-chuyen.png',
        alt: 'Bảo vệ xe vận chuyển',
        title: 'Bảo vệ xe vận chuyển',
        route: '/dich-vu-bao-ve-xe-van-chuyen',
        description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...',
    }
];
export default Service;