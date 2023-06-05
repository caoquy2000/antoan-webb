import { ContainerWrapper } from "Container";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from "../../common/variable";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import DOMPurify from "isomorphic-dompurify";
import { useRef } from "react";
import { useLayoutEffect } from "react";

const DetailPage = (props) => {
    const {
        newsColl,
    } = props;
    const bodyContentRef = useRef();

    useLayoutEffect(() => {
        if (bodyContentRef.current) {
            console.log(bodyContentRef);
            // bodyContentRef.current.childNodes.map((item) => {
            //     if (item.localName === 'h2' || item.localName === 'h3' || item.localName === 'h4' || item.localName === 'h5') {
            //         item.style.paddingBottom = '20px';
            //     } else if (item.localName === 'p') {
            //         item.style.paddingBottom = '10px';
            //     } else if (item.localName === 'ul') {
            //         item.style.paddingBottom = '20px';
            //     }
            // })
            for (const child of bodyContentRef.current.children) {
                if (child.tagName === 'H2' || child.tagName === 'H3' || child.tagName === 'H4' || child.tagName === 'H5') {
                    child.style.paddingBottom = '10px';
                } else if (child.tagName === 'P') {
                    child.style.paddingBottom = '20px';
                } else if (child.tagName === 'UL') {
                    child.style.paddingBottom = '12px';
                    child.style.paddingLeft = '20px';
                    for (const nestedChil of child.children) {
                        if (nestedChil.tagName === 'LI') {
                            nestedChil.style.paddingBottom = '8px';
                        }
                    }
                }
            }
        }
    });

    return (
        <>
            <Head>
                <title>
                    {
                        newsColl.titlePage
                    }
                </title>
                <meta name="description"  content={newsColl.metaDescription} />
            </Head>
            <ContainerWrapper>
                <ContentWrapperWWW>
                    <ContentText4>
                        <h2 style={{
                                textAlign: 'center',
                                padding: '20px 0px',
                                fontFamily: 'Oswald',
                            }}>
                            {
                                newsColl.titleContent
                            }
                        </h2>
                        <div 
                            ref={bodyContentRef}
                            className="body_content" 
                            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(newsColl.editorContent)}} 
                        /> 
                    </ContentText4>
                    <ContentBanner4>
                            <BannerHotline />
                            <SendPhoneWrapper4>
                                <BannerSendPhone/>
                            </SendPhoneWrapper4>
                    </ContentBanner4>
                </ContentWrapperWWW>
            </ContainerWrapper>
        </>
    );
};

export async function getServerSideProps(context) {
    const { idPath } = context.query;
    const newsColl = await getDoc(doc(db, 'news', idPath));
    const data = newsColl.data();
    return {
        props: {
            newsColl: data,
        },
    };
};

const ContentWrapperWWW = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentText4 = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBanner4 = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapper4 = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default DetailPage;
