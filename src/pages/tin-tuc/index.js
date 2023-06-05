import BannerSection from "component/section/banner-section/BannerSection";
import React from "react";
import * as variable from 'common/variable';
import { ContainerWrapper } from "Container";
import CardCpn from "component/card-cpn/CardCpn";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import { useEffect } from "react";
import { getNewsList } from "utils/WebUtil";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

async function getNews() {
    const newsCollec = await getDocs(collection(db, 'news'));
    const newsData = newsCollec.docs.map((doc) => doc.data());
    return newsData;
};


const News = (props) => {

    const {
        newsColl,
    } = props;

    return (
        <>
          <Head>
                <title>
                   Tin Tức 
                </title>
            </Head>
            <BannerSection imgLink={'./img/hinh-4.jpg'} />
            <section className="service_page_section_wrapper">
                <ContainerWrapper>
                    <div className="service_page_container">
                        <h2 className="service_page_title">
                            Tin Tức Bảo Vệ An Toàn
                        </h2>
                        <div className="page_container">
                            <div className="service_list">
                            {
                                newsColl && newsColl.map((item) => (
                                    <div>
                                        <CardCpn 
                                            key={item.idPath}
                                            img={item.uploadBannerImg}
                                            heightImg='210'
                                            alt={item.altImgBanner}
                                            title={item.titleContent}
                                            content={item.metaDescription}
                                            route={`/tin-tuc/${item.idPath}`}
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
                            {/* <div className="service_banner">
                                <BannerHotline />
                                <div className="send_phone_wrapper">
                                    <BannerSendPhone />
                                </div>
                            </div> */}
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
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
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

export async function getServerSideProps(context) {
    const newsCollec = await getDocs(collection(db, 'news'));
    const newsData = newsCollec.docs.map((doc) => doc.data());
    return {
        props: {
            newsColl: newsData
        },
    };
}

export default News;