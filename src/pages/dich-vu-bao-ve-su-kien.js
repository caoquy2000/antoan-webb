import { ContainerWrapper } from "Container";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const ServiceDetail6 = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        serviceDetail6.title
                    }
                </title>
                <meta name="description"  content={serviceDetail6.metaDescription} />
            </Head>
            <ContainerWrapper>
                <ContentWrapperEvent>
                    <ContentTextEvent>
                    <h2 style={{
                            textAlign: 'center',
                            padding: '20px 0px',
                        }}>Sử dụng dịch vụ bảo vệ sự kiện, lễ hội trong trường hợp nào?</h2>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Bảo vệ là một phần đặc biệt không thể nào thiếu trong bất kỳ các lễ hội, hay sự kiện và còn là một phần vô cùng quan trọng. Nhiệm vụ của bảo vệ sự kiện, lễ hội đó chính là đảm bảo được sự an ninh và trật tự trong sự kiện đông người, để đảm bảo cho tiến trình diễn ra tốt nhất và đúng với kế hoạch đã được sắp đặt, với vai trò quan trọng của bảo vệ sự kiện, lễ hội rất quan trọng và đặc biệt là trong những sự kiện hay lễ hội lớn.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-event-1.png" 
                                alt="Dich Vu Bao Ve Su Kien Le Hoi" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Bảo vệ sự kiện, lễ hội tại Công Ty Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Vì thế, khi mỗi sự kiện hay lễ hội được diễn ra cần phải có sự hỗ trợ của các lực lượng bảo vệ chuyên nghiệp có nghiệp vụ tốt từ các công ty hỗ trợ dịch vụ bảo vệ như Công Ty Bảo Vệ An Toàn.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Bảo vệ sự kiện, lễ hội sẽ bao gồm các mục tiêu như sau:
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Bảo vệ sự kiện lễ khởi công: Các công trình xây dựng và nhà máy…</li>
                            <li>Bảo vệ sự kiện các khai trương như: trung tâm thương mại, siêu thị, nhà hàng…</li>
                            <li>Bảo vệ an ninh tại các sự kiện liveshow như: Biểu diễn âm nhạc hay trình diễn thời trang…</li>
                            <li>Bảo vệ an ninh tại các triển lãm và hội chợ như: Triển lãm công nghiệp hay nông nghiệp và triển lãm ô tô…</li>
                            <li>Bảo vệ an ninh tại các hội nghị như: Họp cổ đông, hội nghị kinh tế…</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Bảo vệ sự kiện, lễ hội được triển khai như sau:
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                           Công Ty Bảo Vệ An Toàn luôn đưa ra các phương án bảo vệ tốt nhất và tối ưu nhất. Các phương án quan trọng cần phải đảm bảo được khi bảo vệ sự kiện, lễ hội là:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Bảo vệ tính mạng con người và tài sản của các đơn vị tổ chức sự kiện, lễ hội và những vị khách đến tham dự. Không để cho tội phạm thực hiện các hành vi xấu từ giai đoạn trước sự kiện – trong sự kiện – kết thúc sự kiện.</li>
                            <li>Bảo vệ an toàn và phối hợp với các lực lượng chức năng nhằm để ngăn chặn và bắt giữ những đối tượng có hành vi không đúng với chuẩn mực trong sự kiện.</li>
                            <li>Đào tạo thái độ của nhân viên bảo vệ cư xử chuyên nghiệp với người tham gia trong sự kiện.</li>
                            <li>Đảm bảo được các dụng cụ và thiết bị hỗ trợ trong sự kiện được sử dụng tốt.</li>
                            <li>Đảm bảo tốt những công tác phòng cháy chữa cháy khi xảy ra.</li>
                            <li>Đảm bảo được thời gian làm việc theo đúng như yêu cầu của khách hàng khi tham gia sự kiện.</li>
                            <li>Kiểm soát số lượng người ra vào khu vực cổng.</li>
                            <li>Bố trí các phương tiện có kỹ thuật và nghiệp vụ ở những nơi và ở những vị trí cần thiết.</li>
                            <li>Tất cả nhân viên bảo vệ cần phải trang bị bộ đàm, và sử dụng bộ đàm để thông báo các tình hình và yêu cầu hỗ trợ.</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Tiêu chuẩn và yêu cầu đối với nhân viên bảo vệ khi làm nhiệm vụ
                        </h3>
                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '20px',
                            paddingBottom: '20px',
                        }}>
                            Yêu cầu tốt về nghiệp vụ
                        </h4>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Đã học qua các lớp đào tạo về pháp luật.</li>
                            <li>Đã học qua các lớp đào tạo về bảo vệ sự kiện, lễ hội.</li>
                            <li>Đã học các lớp đào tạo giải quyết những sự cố trong lúc bảo vệ sự kiện, lễ hội.</li>
                            <li>Biết cách sử dụng các công cụ hỗ trợ chuyên dụng để làm nghiệp vụ như: gậy sắt, gậy sáng điều phối xe, roi điện …</li>
                            <li>Độ tuổi để ứng tuyển bảo vệ sự kiện, lễ hội từ 25 đến 40 tuổi, và đáp ứng được những tiêu chí riêng về ngoại hình.</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-event-2.png" 
                                alt="Dich vu bao ve su kien 2" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Tiêu chuẩn khi làm nhiệm vụ</figcaption>
                        </figure>
                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '20px',
                            paddingBottom: '20px',
                            paddingTop: '20px',
                        }}>
                           Trang phục khi làm nhiệm vụ
                        </h4>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                           Công Ty Bảo Vệ An Toàn đã chuẩn bị những loại đồng phục phù hợp với từng loại hình dịch vụ khác nhau, bảo vệ sự kiện, lễ hội tùy vào từng sự kiện lễ hội được tổ chức và tùy vào yêu cầu của quý khách hàng. Những trang phục đang được áp dụng tại Công Ty như:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Quần và áo bảo vệ thông thường sẽ được phục vụ cho những sự kiện, lễ hội bình thường và ngoài trời, không phức tạp, …</li>
                            <li>Quần đen và áo sơ mi trắng, đeo cà vạt hay áo vest đen sẽ phục vụ cho những sự kiện, lễ hội sang trọng và hội trường hay những cuộc hội thảo cấp cao …</li>
                            <li>Áo chống đâm và nón chống bạo động đối với sự kiện lễ hội có tính chất phức tạp cao hơn và ngoài trời.</li>
                        </ul>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                          Quý khách hàng cần phải lưu ý đến các yếu tố an ninh trật tự khi tổ chức sự kiện, lễ hội. Nếu như khách hàng đang tìm kiếm công ty cung cấp dịch vụ bảo vệ sự kiện, lễ hội chuyên nghiệp tại TP.HCM, thì hãy tham khảo ngay dịch vụ của Công Ty Bảo Vệ An Toàn qua trang Website https://baoveantoan.com/ hoặc liên hệ ngay số hotline 0937.669.977
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
                    </ContentTextEvent>
                    <ContentBannerEvent>
                            <BannerHotline />
                            <SendPhoneWrapperEvent>
                                <BannerSendPhone />
                            </SendPhoneWrapperEvent>
                    </ContentBannerEvent>
                </ContentWrapperEvent>
            </ContainerWrapper>
        </>
    );
};

const serviceDetail6 = {
    title: 'Dịch Vụ Bảo Vệ Sự Kiện, Lễ Hội',
    metaDescription: 'Bảo vệ là một phần đặc biệt không thể nào thiếu trong bất kỳ các lễ hội, hay sự kiện và còn là một phần vô cùng quan trọng. Nhiệm vụ của bảo vệ sự kiện, lễ hội đó chính là đảm bảo được sự an ninh và trật tự trong sự kiện đông người, để đảm bảo cho tiến trình diễn ra tốt nhất và đúng với kế hoạch đã được sắp đặt, với vai trò quan trọng của bảo vệ sự kiện, lễ hội rất quan trọng và đặc biệt là trong những sự kiện hay lễ hội lớn.',
    bodyContent: '',
};

const ContentWrapperEvent = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentTextEvent = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBannerEvent = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapperEvent = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default ServiceDetail6;