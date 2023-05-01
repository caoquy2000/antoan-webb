import { ContainerWrapper } from "Container";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const ServiceDetail5 = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        serviceDetail5.title
                    }
                </title>
                <meta name="description"  content={serviceDetail5.metaDescription} />
            </Head>
            <ContainerWrapper>
                <ContentWrapper6>
                    <ContentText6>
                    <h2 style={{
                            textAlign: 'center',
                            padding: '20px 0px',
                        }}>Công Ty Bảo Vệ An Toàn cung cấp dịch vụ bảo vệ chất lượng cao tại TPHCM</h2>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Công ty dịch vụ bảo vệ chất lượng cao, uy tín đáng tin cậy chuyên nghiệp với giá thành rẻ, đang là xu hướng tìm kiếm của rất nhiều doanh nghiệp. Công Ty Bảo Vệ An Toàn sở hữu được một đội ngũ nhân viên bảo vệ chuyên nghiệp được rèn luyện đầy đủ các kỹ năng và nghiệp vụ bảo vệ chuyên sâu nhất.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-chat-luong-cao-1.png" 
                                alt="Dich vu bao ve chat luong cao 1" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Công Ty Bảo Vệ An Toàn cung cấp dịch vụ bảo vệ chất lượng cao</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Ngoài ra Công Ty còn cung cấp rất nhiều dịch vụ bảo vệ khác như: Bảo vệ giữ xe, bảo vệ mục tiêu cố định, bảo vệ khu công nghiệp... Với tinh thần làm việc có trách nhiệm với khách hàng, tận tâm và đảm bảo được an ninh để quý khách hàng cảm thấy yên tâm hơn khi lựa chọn dịch vụ bảo vệ Công Ty Bảo Vệ An Toàn.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Dịch vụ bảo vệ chất lượng cao giá thành có tốt không?
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Ngày nay trên các trang website của đa số công ty cung cấp dịch vụ bảo vệ thường sẽ đưa ra bảng giá dịch vụ bảo vệ chất lượng cao với giá thành vô cùng rẻ nhằm để thu hút khách hàng. Nhưng tuy nhiên, đã không ít người đã từng sử dụng các dịch vụ bảo vệ với giá thành rẻ, đã phàn nàn về chất lượng của dịch vụ và tác phong làm việc của những công ty, cung cấp dịch vụ bảo vệ vô cùng thiếu chuyên nghiệp và không thể đảm bảo được độ an toàn cho doanh nghiệp khi sử dụng dịch vụ.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-chat-luong-cao-2.png" 
                                alt="Dich vu bao ve chat luong cao 2" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Dịch vụ bảo vệ chất lượng cao có giá thành tốt không</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Với dịch vụ bảo vệ chất lượng cao với giá thành vô cùng rẻ của Công Ty Bảo Vệ An Toàn, được các doanh nghiệp biết đến như một trong những đơn vị cung cấp dịch vụ bảo vệ, có nhiều kinh nghiệm hoạt động trong lĩnh vực và hội tụ những chuyên gia về việc đào tạo nhân viên bảo vệ, cũng như đã nghiên cứu nhiều phương án để có thể tiết kiệm được chi phí cho doanh nghiệp. Vì thế, mỗi khi nhận yêu cầu dịch vụ từ khách hàng, thì đội ngũ lãnh đạo đều sẽ nghiên cứu ra một kế hoạch kỹ lưỡng, để có thể điều phối lực lượng sao cho hợp lý.
                        </p>
                       
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Công Ty Bảo Vệ An Toàn cung cấp những dịch vụ bảo vệ chất lượng cao nào?
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Công Ty Bảo Vệ An Toàn cung cấp đến cho khách hàng các dịch vụ bảo vệ với giá thành vô cùng rẻ tại TPHCM do sở hữu được đa dạng những loại hình dịch vụ bảo vệ nhằm đáp ứng được tối đa nhu cầu sử dụng của khách hàng. Dịch vụ Công Ty cung cấp đến cho khách hàng bao gồm:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Bảo vệ mục tiêu cố định</li>
                            <li>Dịch vụ bảo vệ giữ xe</li>
                            <li>Dịch vụ bảo vệ chất lượng cao</li>
                            <li>Bảo vệ lễ hội, sự kiện</li>
                            <li>Dịch vụ bảo vệ yếu nhân</li>
                            <li>Bảo vệ mục tiêu di động</li>
                            <li>Dịch vụ bảo vệ khu công nghiệp</li>
                            <li>Dịch vụ bảo vệ xe vận chuyển</li>
                        </ul>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Với các dịch vụ Công Ty Bảo Vệ An Toàn đã cung cấp trên, thì Công Ty luôn đảm bảo sẽ mang đến sự bảo vệ chất lượng cao và an toàn tuyệt đối cho tài sản và tính mạng người.
                        </p>

                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Công Ty cung cấp dịch vụ bảo vệ chất lượng cao uy tín Bảo Vệ An Toàn cam kết điều gì cho khách hàng?
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                           Nếu như khách hàng đã tin tưởng và lựa chọn Bảo Vệ An Toàn thì công ty của chúng tôi sẽ sẵn sàng phục vụ khách hàng tốt nhất. Chúng tôi cam kết đến với khách hàng về dịch vụ bảo vệ chất lượng cao cùng với đội ngũ bảo vệ chuyên nghiệp và với chi phí hợp lý nhất thị trường hiện nay.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                           Bảo Vệ An Toàn cam kết đến với khách hàng về dịch vụ bảo vệ chất lượng cao, cùng với đội ngũ nhân viên bảo vệ nắm rõ những kỹ năng và nghiệp vụ bảo vệ vô cùng chuyên nghiệp. Điều này sẽ góp phần không nhỏ vào những công tác bảo vệ an ninh tại địa chỉ của khách hàng. Cụ thể về những kiến thức và kỹ năng mà lực lượng Bảo Vệ An Toàn đã được đào tạo qua sau đây:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Pháp luật</li>
                            <li>Võ thuật</li>
                            <li>Ứng xử giao tiếp</li>
                            <li>Nghiệp vụ cơ động</li>
                            <li>Nghiệp vụ phòng cháy chữa cháy</li>
                            <li>Sơ cấp cứu</li>
                        </ul>
                     
                        <figure style={{
                            textAlign: 'center',
                        }}>
                            <img 
                                src="./img/bao-ve-chat-luong-cao-3.png" 
                                alt="Dich vu bao ve chat luong cao 3" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Nghiệp vụ cơ động</figcaption>
                        </figure>
              
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Qua những thông tin bài viết trên công ty dịch vụ bảo vệ chất lượng cao uy tín và chuyên nghiệp thì bạn còn những băn khoăn hay thắc mắc như thế nào. Mọi thông tin vui lòng liên hệ đến Bảo Vệ An Toàn để hỗ trợ thêm cho bạn nhé. Công Ty Bảo Vệ An Toàn sẽ giúp cho bạn lựa chọn được những loại dịch vụ phù hợp nhất.
                        </p>
                        
                        <style jsx>
                            {
                                `
                                    ul li {
                                        padding-bottom: ${variable.paddingULLI};
                                    }
                                `
                            }
                        </style>
                    </ContentText6>
                    <ContentBanner6>
                            <BannerHotline />
                            <SendPhoneWrapper6>
                                <BannerSendPhone />
                            </SendPhoneWrapper6>
                    </ContentBanner6>
                </ContentWrapper6>
            </ContainerWrapper>
        </>
    );
};

const serviceDetail5 = {
    title: 'Dịch Vụ Bảo Vệ Mục Tiêu Di Động',
    metaDescription: 'Dịch vụ bảo vệ mục tiêu di động là một trong những loại hình phổ biến thường di chuyển trên vị trí nhất định bằng những phương tiện khác nhau (và các mục tiêu khác nhau). Bảo vệ mục tiêu di động là cần phải gìn giữ cho mục tiêu đó di chuyển an toàn tuyệt đối.',
    bodyContent: '',
};

const ContentWrapper6 = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentText6 = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBanner6 = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapper6 = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default ServiceDetail5;