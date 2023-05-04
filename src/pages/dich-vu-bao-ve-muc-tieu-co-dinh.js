import { ContainerWrapper } from "Container";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const ServiceDetail1 = (props) => {
    return (
        <>
            {/* <Head>
                <title>
                    {
                        serviceDetail1.title
                    }
                </title>
                <meta name="description"  content={serviceDetail1.metaDescription} />
            </Head> */}
            <ContainerWrapper>
                <ContentWrapper1>
                    <ContentText1>
                        <h2 style={{
                            textAlign: 'center',
                            padding: '20px 0px',
                        }}>Tìm hiểu về dịch vụ bảo vệ mục tiêu cố định tại Công Ty Bảo Vệ An Toàn</h2>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Dịch vụ bảo vệ mục tiêu cố định tại Công Ty Bảo Vệ An Toàn là mục tiêu đặt ở một vị trí nhất định như: bảo vệ tài sản cố định, bảo vệ tòa nhà hay văn phòng và siêu thị… Dù là bảo vệ mục tiêu cố định nhưng những vật chứa trong đó là những món tài sản có giá trị. Vì vậy yêu cầu và nhiệm vụ của bảo vệ mục tiêu cố định vô cùng cao và quan trọng. Cần phải có được một sự kiên nhẫn và sự tập trung cao độ khi làm nhiệm vụ.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/dich-vu-bao-ve-muc-tieu-co-dinh-1.png" 
                                alt="Tuyen dung bao ve an toan 1" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Bảo vệ mục tiêu cố định tại Công Ty Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Dựa trên những đặc điểm hay vị trí và an ninh của từng bảo vệ mục tiêu cố định thì sẽ có các phương án để bảo vệ cụ thể để có thể đảm bảo được sự an ninh và tài sản hay phòng cháy chữa cháy và an toàn hơn cho nhân viên và những khách hàng tại mục tiêu. Công Ty Bảo Vệ An Toàn chuyên cung cấp đến cho khách hàng các dịch vụ bảo vệ để có thể đảm bảo tốt hơn về mặt an ninh trật tự và đảm bảo cho mọi hoạt động diễn ra tại mục tiêu cố định được an toàn tuyệt đối nhất.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Những đặc điểm thú vị của dịch vụ bảo vệ mục tiêu cố định
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                           Bảo vệ mục tiêu cố định là bảo vệ những tài sản có giá trị cao nên nhiệm vụ của bảo vệ mục tiêu cố định rất quan trọng và nghiệp vụ chuyên nghiệp.
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Có đội ngũ bảo vệ mục tiêu cố định chuyên nghiệp và tính ổn định cao sẽ giúp khách hàng an tâm hơn.</li>
                            <li>Chịu ảnh hưởng ít bởi môi trường xung quanh mình.</li>
                            <li>Hoạt động khép kín và có tính bảo mật cao được đặt lên hàng đầu cho khách hàng.</li>
                            <li>Thường sẽ có được một cổng chính ra vào.</li>
                            <li>Có năng dự kiến được những tình huống xấu đột xuất có thể xảy ra làm nguy hại đến khách hàng.</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Nhiệm vụ cần phải làm của bảo vệ mục tiêu cố định
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Mỗi mục tiêu bảo vệ đều sẽ có một nhiệm vụ riêng và tùy vào từng trường hợp khác nhau được phân chia công việc sao cho phù hợp. Và nhiệm vụ cần phải làm của bảo vệ mục tiêu cố định là:
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-muc-tieu-co-dinh-1.png" 
                                alt="Bao ve muc tieu co dinh 1" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Nhiệm vụ cần phải làm của bảo vệ mục tiêu cố định</figcaption>
                        </figure>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Kiểm tra xuất nhập hàng hóa và các nguyên vật liệu hay thiết bị máy móc ra vào ở mục tiêu cố định.</li>
                            <li>Kiểm tra và kiểm soát cán bộ hay nhân viên ra vào bên trong mục tiêu cố định.</li>
                            <li>Thường xuyên quan sát, phát hiện và ngăn chặn xử lý các hành vi vi phạm.</li>
                            <li>Kiểm soát nhân sự tuyệt đối không cho phép người lạ hay nghi vấn vào bên trong mục tiêu.</li>
                            <li>Giữ gìn an ninh và giữ trật tự để đảm bảo được độ an toàn về tính mạng và tài sản hay trang thiết bị của mục tiêu cố định.</li>
                            <li>Giám sát và nhắc nhở cần phải chấp hành nội quy theo quy định.</li>
                            <li>Luôn kiểm tra và biết cách vận hành hệ thống phòng chống chữa cháy (PCCC) nếu như có trường hợp xấu xảy ra.</li>
                            <li>Hỗ trợ cho khách hàng đến và liên hệ công tác.</li>
                            <li>Không cho phép người lạ không có giấy tờ tùy thân hay có dấu hiệu nào khả nghi và những người không theo chỉ dẫn của nhân viên bảo vệ khi vào bên trong công ty (trừ trường hợp khách hàng VIP và người được thông báo từ trước thì được miễn thủ tục này mới được vào bên trong).</li>
                            <li>Phân chia và bàn giao công việc nhiệm vũ rõ ràng trước khi rời khỏi khu vực làm việc.</li>
                        </ul>
                        <p style={{
                            fontSize: '18px',
                            paddingTop: '20px',
                            paddingBottom: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Trong bất kỳ mọi tình huống bất thường nào, nghiêm trọng xảy ra, thì nhân viên bảo vệ phải lập tức thông báo đến cho cấp trên biết để có thể xin chỉ đạo và có kế hoạch xử lý các tình huống.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Ngay sau sự cố phải lập tức báo cáo, tường trình hay phải biên bản sự việc cho ban chỉ huy đội để tiếp tục có báo cáo kịp thời đến cho khách hàng nắm bắt.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Nguyên tắc phân chia bảo vệ mục tiêu cố định
                        </h3>
                        <figure style={{
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-muc-tieu-co-dinh-2.png" 
                                alt="Bao ve muc tieu co dinh 2" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Nguyên tắc phân chia bảo vệ mục tiêu cố định</figcaption>
                        </figure>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                            paddingBottom: '20px',
                        }}>
                            <li>An ninh trật tự và cách phòng chống cháy nổ luôn được đặt lên hàng đầu để đảm bảo an toàn cho doanh nghiệp.</li>
                            <li>Chịu được những áp lực ở mỗi vị trí bảo vệ khác nhau.</li>
                            <li>Tích cực phòng ngừa và chủ động chiến đấu nếu trường hợp xấu xảy ra.</li>
                            <li>Khả năng hỗ trợ của những vị trí trong mục tiêu cố định.</li>
                            <li>Thực hiện đúng với hợp đồng và lên phương án đã cam kết với khách hàng.</li>
                        </ul>
                        <p style={{
                            fontSize: '18px',
                            paddingBottom: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Xây dựng các phương án để bảo vệ mục tiêu cố định là một trong những việc làm rất cần thiết không chỉ giúp cho đội ngũ bảo vệ có thể dễ dàng nhận diện và đối phó nhanh chóng với các tình huống xấu có thể xảy ra mà còn giúp cho nâng cao hơn về chất lượng dịch vụ và củng cố thêm niềm tin với khách hàng.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            paddingBottom: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Công Ty Bảo Vệ An Toàn là người đồng hành cùng mọi doanh nghiệp cùng với dịch vụ bảo vệ với giá cả cạnh tranh đáng tin cậy uy tín hàng đầu hiện nay. Nếu như bạn cần tư vấn về các dịch vụ bảo vệ hãy liên hệ đến với Công Ty Bảo Vệ An Toàn qua số Hotline: 0312.237.477.
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
                    </ContentText1>
                    <ContentBanner1>
                            <BannerHotline />
                            <SendPhoneWrapper1>
                                <BannerSendPhone />
                            </SendPhoneWrapper1>
                    </ContentBanner1>
                </ContentWrapper1>
            </ContainerWrapper>
        </>
    );
};

const serviceDetail1 = {
    title: 'Bảo Vệ Mục Tiêu Cố Định',
    metaDescription: 'Dịch vụ bảo vệ mục tiêu cố định tại Công Ty Bảo Vệ An Toàn là mục tiêu đặt ở một vị trí nhất định như: bảo vệ tài sản cố định, bảo vệ tòa nhà hay văn phòng và siêu thị… Dù là bảo vệ mục tiêu cố định nhưng những vật chứa trong đó là những món tài sản có giá trị.',
    bodyContent: '',
};

const ContentWrapper1 = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentText1 = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBanner1 = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapper1 = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default ServiceDetail1;