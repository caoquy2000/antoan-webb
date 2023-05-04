import { ContainerWrapper } from "Container";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const ServiceDetail7 = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        serviceDetail7.title
                    }
                </title>
                <meta name="description"  content={serviceDetail7.metaDescription} />
            </Head>
            <ContainerWrapper>
                <ContentWrapperFactory>
                    <ContentTextFactory>
                    <h2 style={{
                            textAlign: 'center',
                            padding: '20px 0px',
                        }}>Dịch vụ bảo vệ khu công nghiệp tại Công Ty Bảo Vệ An Toàn có gì nổi bật?</h2>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Khu công nghiệp là một trong những nơi tập trung rất nhiều người. Hiện nay các tình trạng những khu công nghiệp tại các nhà máy, khu công nghiệp đang xảy ra tình trạng mất cắp hàng hóa ngày càng tăng.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-factory.png" 
                                alt="Dich Vu Bao Ve Khu Cong Nghiep" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Dịch vụ bảo vệ khu công nghiệp tại Công Ty Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Chúng thường lợi dụng vào thời điểm công nhân tan ca mà thực hiện những hành vi trộm cắp. Ngoài việc cần phải đầu tư một số hệ thống camera an ninh theo dõi, thì các chủ doanh nghiệp cần phải bố trí thêm một đội ngũ nhân viên bảo vệ khu công nghiệp có nghiệp vụ chuyên nghiệp. Đội ngũ nhân viên bảo vệ khu công nghiệp này sẽ giúp cho tăng thêm được sự an tâm cho nhiều công nhân viên, lại còn đảm bảo được an ninh và trật tự trong khu công nghiệp hiệu quả nhất.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Nhân viên bảo vệ khu công nghiệp cần phải thực hiện nhiệm vụ gì?
                        </h3>

                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Nhân viên bảo vệ khu công nghiệp của Công Ty Bảo Vệ An Toàn sẽ có nhiệm vụ đi tuần tra và canh gác, bảo vệ tài sản của công nhân viên, tại những vị trí đã được đảm nhiệm. Đồng thời cần phải phối kết hợp cùng với các Ban quản lý và lực lượng bảo vệ khu công nghiệp khác trên địa bàn để có thể tạo thành các vòng và các lớp để bảo vệ an ninh trật tự.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Phòng chống và ngăn chặn những đối tượng có hành vi xấu trà trộn vào bên trong khu công nghiệp để lợi dụng móc nối với các công nhân hay cán bộ quản lý để tha hóa trộm cắp và tẩu tán tài sản tại các nhà máy khu công nghiệp.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Thường xuyên đi tuần tra và giám sát xung quanh mục tiêu, điều phối hoạt động giao thông hay xuất nhập hàng hóa bên trong khu vực quản lý. Phòng chống cháy nổ xảy ra , đảm bảo cái công tác an toàn về lao động,…
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-factory-1.png" 
                                alt="Dich Vu Bao Ve Nha May" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Kiểm tra hệ thống camera an ninh</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                            paddingBottom: '20px',
                        }}>
                           Đặc thù của bảo vệ khu công nghiệp thì phải thực hiện nhiệm vụ bao gồm:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Đảm bảo phải giữ gìn được an ninh trật tự 24h/24h.</li>
                            <li>Bảo vệ các tài sản và thiết bị tránh những thiệt hại hay thất thoát xảy ra trong nhà máy.</li>
                            <li>Cần phải bảo mật tuyệt đối các thông tin quan trọng của khách hàng.</li>
                            <li>Thường xuyên đi xung quanh kiểm tra hệ thống phòng cháy chữa cháy của nhà máy.</li>
                            <li>Thường xuyên đi xung quanh kiểm tra hệ thống camera an ninh và ứng phó những trường hợp cần thiết.</li>
                            <li>Thực hiện nhiệm vụ giải cứu và di tản lánh nạn trong trường hợp khẩn cấp xảy ra tại khu công nghiệp.</li>
                            <li>Thực hiện nhiệm vụ về thống kê hay xuất nhập hàng hóa.</li>
                            <li>Nhân viên bảo vệ khu công nghiệp đang làm nhiệm vụ tuần tra trong khu công nghiệp thì không được rời khỏi chỗ làm tuỳ ý.</li>
                            <li>Kiểm soát được các giấy tờ của công nhân ra vào khu công nghiệp cần phải bảo vệ (nếu được cho phép).</li>
                            <li>Bảo vệ khu công nghiệp tránh sự xâm nhập của những kẻ xấu, tránh để làm thất thoát về hàng hóa hay tài sản của Công ty.</li>
                            <li>Ngăn chặn những hành vi gây mất trật tự an ninh và phá hoại trộm cắp về tài sản hay đe dọa đến tính mạng của cán bộ và công nhân viên đang làm việc tại khu công nghiệp, chỉ được sinh hoạt trong phạm vi khu vực bảo vệ.</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Những yêu cầu cần thiết đối với bảo vệ khu công nghiệp
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Luôn thể hiện được thái độ vui vẻ và lịch sự với mọi người, thể hiện được tính chuyên nghiệp cao trong công tác nghiệp vụ khi làm nhiệm vụ.</li>
                            <li>Bàn giao lại nhiệm vụ rõ ràng trước khi rời khỏi khu vực làm việc.</li>
                            <li>Phòng chống và phát hiện những hiện tượng cháy nổ để có thể xử lý ngày và đồng thời thông báo đến cho cơ quan có chức năng phối hợp giải quyết kịp thời sự việc.</li>
                            <li>Được trang bị công cụ hỗ trợ khi làm nhiệm vụ cơ bản như: Bộ đàm cầm tay hay gậy 3 khúc, đèn pin, dùi cui điện và máy rà…</li>
                            <li>Tinh thần làm việc có trách nhiệm và kỷ luật cao.</li>
                            <li>Thành thạo hết về kỹ năng nghiệp vụ như: Võ và sử dụng thành thạo những thiết bị phòng cháy chữa cháy, giám sát camera an ninh và thiết bị điện…</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-factory-2.png" 
                                alt="Dich Vu Bao Ve Nha May 2" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Thái độ vui vẻ lịch sự</figcaption>
                        </figure>

                       
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Nếu như quý khách có nhu cầu về những loại hình dịch vụ bảo vệ an ninh trật tự, bảo vệ tài sản con người uy tín đáng tin cậy. Thì hãy liên hệ ngay với Công Ty Bảo Vệ An Toàn qua số Hotline: 0933.777.005. Chúng tôi luôn sẵn sàng phục vụ khách hàng những dịch vụ tốt nhất.
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
                    </ContentTextFactory>
                    <ContentBannerFactory>
                            <BannerHotline />
                            <SendPhoneWrapperFactory>
                                <BannerSendPhone />
                            </SendPhoneWrapperFactory>
                    </ContentBannerFactory>
                </ContentWrapperFactory>
            </ContainerWrapper>
        </>
    );
};

const serviceDetail7 = {
    title: 'Dịch Vụ Bảo Vệ Khu Công Nghiệp',
    metaDescription: 'Khu công nghiệp là một trong những nơi tập trung rất nhiều người. Hiện nay các tình trạng những khu công nghiệp tại các nhà máy, khu công nghiệp đang xảy ra tình trạng mất cắp hàng hóa ngày càng tăng.',
    bodyContent: '',
};

const ContentWrapperFactory = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentTextFactory = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBannerFactory = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapperFactory = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default ServiceDetail7;