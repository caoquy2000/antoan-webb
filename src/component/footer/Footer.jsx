import { ContainerWrapper } from "Container";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';


const Footer = (props) => {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

    return (
        <FooterWrapper>
            <ContainerWrapper>
                <FooterContainer>
                    <FooterContent>
                        <span>
                            THÔNG TIN LIÊN HỆ
                        </span>
                        <span>Công ty Bảo Vệ An Toàn</span>
                        <p>
                        CÔNG TY CỔ PHẦN DỊCH VỤ BẢO VỆ AN TOÀN
                        <br/>
                        Giấy xác nhận đủ điều kiện kinh doanh dịch vụ bảo vệ:
                        <br/>
                        * Số: 1865/GCN, ngày cấp: 10/09/2018, nơi cấp: cục cảnh sat QLHH và TTXH
                        <br/>
                        * Mst 0312237477, Ngày cấp: 14/04/2013, Nơi cấp: Sở KH&ĐT Tp. HCM
                        <br/>
                        Trụ Sở: <b style={{
                            color: '#fff'
                        }}>207B TRẦN THỦ ĐỘ, PHƯỜNG PHÚ THẠNH, QUẬN TÂN PHÚ, TP. HỒ CHÍ MINH </b>
                        <br/>
                        Web: http://baoveantoan.vn - Email: leducanhlhvn@gmail.com 
                        <br/>
                        Hotline: 0937669977
                        </p>
                        <p style={{
                            paddingTop: 12
                        }}>
                        Chi nhánh 1:<b style={{
                            color: '#fff'
                        }}> 275/50 ĐƯỜNG NGUYỄN VĂN LỘNG, KHU PHỐ CHÁNH LỘC 1, PHƯỜNG CHÁNH MỸ, THÀNH PHỐ THỦ DẦU MỘT, BÌNH DƯƠNG 
                        </b>
                        <br/>
                        Web: http://baoveantoan.vn - Email: leducanhlhvn@gmail.com 
                        <br/>
                        Hotline: 0937669977
                        </p>
                        <p style={{
                            paddingTop: 12
                        }}>
                        Chi nhánh 2:<b style={{
                            color: '#fff'
                        }}> 34A ĐƯỜNG ĐẶNG ĐẠI ĐỘ, XÃ HIỆP HÒA, TP. BIÊN HÒA, ĐỒNG NAI 
                        </b>
                        <br/>
                        Web: http://baoveantoan.vn - Email: leducanhlhvn@gmail.com 
                        <br/>
                        Hotline: 0937669977
                        </p>
                        <p style={{
                            paddingTop: 12,
                            paddingBottom: 12,
                        }}>
                        Chi nhánh 3:<b style={{
                            color: '#fff'
                        }}> 204/10 QUỐC LỘ 62, PHƯỜNG 2, TP. TÂN AN, LONG AN </b>
                        <br/>
                        Web: http://baoveantoan.vn - Email: leducanhlhvn@gmail.com 
                        <br/>
                        Hotline: 0937669977
                        </p>
                    </FooterContent>
                    <FooterMap>
                        <img src="https://firebasestorage.googleapis.com/v0/b/antoan-data.appspot.com/o/static%2F1685963363455map.jpg?alt=media&token=a7f670dd-c7af-47c3-9cda-b338e4d4e8dc" alt="Google Map" />
                    </FooterMap>
                    <FooterSocial>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100043559239823&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                     
                        style={{
                            width: 340,
                            height: 500,
                            border: 'none',
                            overflow: 'hidden',
                        }}
                    scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </FooterSocial>
                </FooterContainer>
            </ContainerWrapper>
        </FooterWrapper>
    );
};


const FooterWrapper = styled.footer`
    margin-top: 85px;
    background-color: ${variable.BACKGROUND_COLOR};
    color: ${variable.LOGO_COLOR};
`;

const FooterContainer = styled.div`
    display: flex;
    gap: 55px;
    padding: 45px 0px;
    @media (max-width: 1200px) {
        flex-wrap: wrap;
        gap: initial;
    }
    @media (max-width: 740px) {
        flex-wrap: initial;
        display: initial;
        text-align: center;
        padding-top: 20px;
    }
`;

const FooterContent = styled.div`
    width: 35%;
    span {
        display: block;
        margin-bottom: 9px;
    }
    span:nth-child(1) {
        font-family: 'OSB';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
    span:nth-child(2) {
        font-family: 'OSB';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 39px;
    }
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 740px) {
        width: 100%;
        padding-top: 20px;
    }
`;

const FooterMap = styled.div`
    width: 35%;
    height: 100%;
    @media (max-width: 1200px) {
        display: none;
    }
`;
const FooterSocial = styled.div`
    width: 30%;
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 740px) {
        width: 100%;
    }
`;

export default Footer;
