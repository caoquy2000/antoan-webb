import { ContainerWrapper } from "Container";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const ServiceDetail4 = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        serviceDetail4.title
                    }
                </title>
                <meta name="description"  content={serviceDetail4.metaDescription} />
            </Head>
            <ContainerWrapper>
                <ContentWrapper5>
                    <ContentText5>
                    <h2 style={{
                            textAlign: 'center',
                            padding: '20px 0px',
                        }}>Dịch vụ bảo vệ mục tiêu di động ở đâu uy tín đáng tin cậy?</h2>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Dịch vụ bảo vệ mục tiêu di động là một trong những loại hình phổ biến thường di chuyển trên vị trí nhất định bằng những phương tiện khác nhau (và các mục tiêu khác nhau). Bảo vệ mục tiêu di động là cần phải gìn giữ cho mục tiêu đó di chuyển an toàn tuyệt đối.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/dich-vu-bao-ve-muc-tieu-di-dong-1.png" 
                                alt="Dich vu bao ve muc tieu di dong 1" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Bảo vệ mục tiêu di động tại Công Ty Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Yêu cầu cần phải làm khi bảo vệ mục tiêu di động
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Đảm bảo được độ an toàn tuyệt đối cho mục tiêu
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Đảm bảo về yêu cầu chính trị.</li>
                            <li>Đảm bảo về yêu cầu pháp lý.</li>
                            <li>Đảm bảo về yêu cầu nghiệp vụ của các nhân viên bảo vệ mục tiêu di động.</li>
                            <li>Đảm bảo về độ an toàn tuyệt đối về người và tài sản.</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Nhiệm vụ của bảo vệ cần phải thực hiện khi bảo vệ mục tiêu di động
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Tuyệt đối cần phải đảm bảo được sự an toàn tuyệt đối cho mục tiêu trong mọi trường hợp xấu xảy ra.</li>
                            <li>Cần phải có sự phòng ngừa.</li>
                            <li>Tập trung cảnh giác cao độ và xử lý các tình huống kiên quyết, đơn giản hóa mọi vấn đề khi xảy ra.</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/dich-vu-bao-ve-muc-tieu-di-dong-2.png" 
                                alt="Dich vu bao ve muc tieu di dong 2" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Nhiệm vụ cần phải làm khi bảo vệ mục tiêu di động</figcaption>
                        </figure>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Nguyên tắc khi bảo vệ mục tiêu di động
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Khi thực hiện nhiệm vụ cần phải nghiêm túc và lịch sự giữ thái độ hòa nhã với khách hàng.</li>
                            <li>Phản ứng nhanh chóng kịp thời và chính xác trong mọi hoàn cảnh có thể xảy ra.</li>
                            <li>Tuyệt đối không được rời bỏ mục tiêu di động và không được ngủ khi thực hiện bảo vệ nhiệm vụ.</li>
                            <li>Đề phòng là chính, (tích cực phòng ngừa và chủ động chiến đấu khi trường hợp nào đó xảy ra).</li>
                            <li>Xử lý mọi tình huống theo hướng đơn giản hóa vấn đề.</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Các phương pháp kế hoạch tiến hành để bảo vệ mục tiêu di động
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Cần phải điều tra và nghiên cứu nắm được tình hình của mục tiêu di động cần bảo vệ
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Mục tiêu di động đó là ai, cái gì?</li>
                            <li>Đoạn đường thường hay đi qua và những nơi lưu lại.</li>
                            <li>Phương tiện mà mục tiêu di động thường hay lưu thông.</li>
                            <li>Những đặc điểm tâm lý và sở thích của mục tiêu di động.</li>
                            <li>Những điều kiện khách quan khác của mục tiêu di động.</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Cần phải lên kế hoạch bảo vệ mục tiêu di động
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Vẽ lại các sơ đồ vị trí và những nơi thường hay di chuyển đến và lưu lại (nếu như có thể).</li>
                            <li>Nắm rõ được các yêu cầu cần phải bảo vệ mục tiêu di động (thông qua hợp đồng thuê dịch vụ).</li>
                            <li>Nắm rõ được những nơi phức tạp về an toàn trật tự phải di chuyển qua.</li>
                            <li>Những tình huống có thể xảy ra đột xuất và những hướng giải quyết.</li>
                            <li>Các đơn vị công an và bộ đội hay UBND trên đoạn đường di chuyển hay không.</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Tổ chức và bảo vệ mục tiêu di động
                        </h3>
                        <figure style={{
                            textAlign: 'center',
                        }}>
                            <img 
                                src="./img/bao-ve-muc-tieu-di-dong-3.png" 
                                alt="Dich vu bao ve muc tieu di dong 3" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Tổ chức bảo vệ mục tiêu di động</figcaption>
                        </figure>
                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Những công tác và chuẩn bị để bảo vệ mục tiêu di động
                        </h4>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Nắm rõ được các nhiệm vụ đã giao và chuẩn bị chu đáo về trang phục và những công cụ hỗ trợ và các hành lý khác. Hành lý cần phải đảm bảo được tính gọn nhẹ và đáp ứng đầy đủ khi sinh hoạt cá nhân trong suốt cuộc hành trình bảo vệ mục tiêu di động.
                        </p>
                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Bảo vệ mục tiêu di động
                        </h4>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Tùy vào sự phân công của công ty và các điều khoản trong hợp đồng dịch vụ, thì vị trí sẽ được phân công để thực hiện nhiệm vụ sao cho phù hợp nhất.</li>
                            <li>Thường thì cần phải làm những công việc sau đây:</li>
                            <li>Quan sát và bám sát chặt chẽ mục tiêu di động.</li>
                            <li>Quan sát những biến động trên đường đi và chú ý cảnh sát hay những hiện tượng có nghi vấn bất thường.</li>
                            <li>Nắm rõ được mệnh lệnh của chỉ huy (nếu có) hay yêu cầu của mục tiêu di động cần được bảo vệ.</li>
                        </ul>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           <b>Lưu Ý:</b> Nếu như mục tiêu di động là con người thì chỉ tuân theo các điều kiện đã được ghi trong hợp đồng khi thuê dịch vụ.
                        </p>
                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Kết thúc bảo vệ mục tiêu di động
                        </h4>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Cần phải báo cáo lại các sự việc lại cấp trên.</li>
                            <li>Rút kinh nghiệm khi thực hiện các nhiệm vụ sau.</li>
                            <li>Nếu như là yếu nhân thì khi chia tay cần phải cảm ơn họ vì đã tạo điều kiện cho ta thực hiện tốt các nhiệm vụ. Chúc yếu nhân sức khoẻ và hẹn gặp lần sau.  </li>
                        </ul>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Công Ty Bảo Vệ An Toàn cam kết đem đến cho khách hàng dịch vụ bảo vệ chất lượng tốt nhất thị trường hiện nay với nhiều dịch vụ tốt. Đối với Công Ty Bảo Vệ An Toàn việc tác phong, đạo đức nghề nghiệp và nghiệp vụ chuyên môn của nhân viên bảo vệ là một trong những yếu tố quyết định về chất lượng của dịch vụ vì vậy, chúng tôi luôn chú trọng trong các dịch vụ để đào tạo một đội ngũ nhân viên một cách chuyên nghiệp nhất và có kỹ năng tốt nhất để có thể phục vụ cho quý khách hàng.
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
                    </ContentText5>
                    <ContentBanner5>
                            <BannerHotline />
                            <SendPhoneWrapper5>
                                <BannerSendPhone />
                            </SendPhoneWrapper5>
                    </ContentBanner5>
                </ContentWrapper5>
            </ContainerWrapper>
        </>
    );
};

const serviceDetail4 = {
    title: 'Dịch Vụ Bảo Vệ Mục Tiêu Di Động',
    metaDescription: 'Dịch vụ bảo vệ mục tiêu di động là một trong những loại hình phổ biến thường di chuyển trên vị trí nhất định bằng những phương tiện khác nhau (và các mục tiêu khác nhau). Bảo vệ mục tiêu di động là cần phải gìn giữ cho mục tiêu đó di chuyển an toàn tuyệt đối.',
    bodyContent: '',
};

const ContentWrapper5 = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentText5 = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBanner5 = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapper5 = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default ServiceDetail4;