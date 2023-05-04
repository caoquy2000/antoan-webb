import { ContainerWrapper } from "Container";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const ServiceDetail8 = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        serviceDetail8.title
                    }
                </title>
                <meta name="description"  content={serviceDetail8.metaDescription} />
            </Head>
            <ContainerWrapper>
                <ContentWrapperCar>
                    <ContentTextCar>
                    <h2 style={{
                            textAlign: 'center',
                            padding: '20px 0px',
                        }}>Tổng quan về dịch vụ bảo vệ xe vận chuyển hàng hóa</h2>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                           Bạn đã biết rồi đấy, hiện nay thì những tên trộm và cướp vô cùng táo bạo và manh động, chúng sử dụng rất nhiều cách khác nhau để có thể dẫn dụ cho con mồi rơi vào bẫy của chúng, nhằm chiếm đoạt hết tài sản của chúng ta, có thể là người quen hay người làm hoặc cũng có thể là những kẻ đã theo dõi hàng hóa vận chuyển của chúng ta ra vào mà tìm lỗ hở để có thể cướp và chiếm đoạt tài sản của chúng ta.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Vì vậy nếu như hàng hóa vận chuyển của quý khách có giá trị cao thì rất sợ, những tên cướp rình mò và cướp đi mất hàng hóa, từ đó sẽ ảnh hưởng đến uy tín chất lượng của một doanh nghiệp.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-xe-van-chuyen-01.png" 
                                alt="Dich vu bao ve xe van chuyen" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Dịch vụ bảo vệ xe vận chuyển hàng hóa tại Công Ty Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Là một trong những công ty cung cấp về loại hình dịch vụ bảo vệ uy tín nhất tại thị trường Việt Nam. Đến với dịch vụ bảo vệ xe vận chuyển hàng hóa uy tín chất lượng và chuyên nghiệp của Bảo Vệ An Toàn. Mục tiêu chính của Công Ty khi thực hiện loại hình dịch vụ này là giúp phòng tránh mọi rủi ro xảy ra trong quá trình vận chuyển hàng hóa và đảm bảo được độ an toàn cho hàng hóa có giá trị cao cho khách hàng.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Tại sao lại phải thuê bảo vệ xe vận chuyển hàng hóa?
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Bảo vệ xe vận chuyển hàng hóa là một trong những công đoạn vô cùng quan trọng đòi hỏi nhân viên bảo vệ xe vận chuyển hàng hóa cần phải có năng lực nghiệp vụ và chuyên môn có một lực tốt và nhạy bén để tránh được những âm mưu cướp giật của kẻ xấu.</li>
                            <li>Hàng hóa được vận chuyển có giá trị cao được vận chuyển xuyên quốc gia, nếu như bị đánh mất hay bị thất thoát về hàng hóa thì sẽ làm ảnh hưởng không nhỏ đến tổ chức hay cá nhân ở trong nước. Và thậm chí là còn có thể gây ra tác động đến công ty hay tổ chức nhận hàng ở nước ngoài. Vì thế, việc thuê bảo vệ xe vận chuyển hàng hóa, tiền bạc là một việc làm rất quan trọng mà công ty cần phải thực hiện.</li>
                            <li>Đặc biệt là những chuyến vận chuyển hàng hóa một công việc cần phải thuê nhân viên để bảo vệ xe vận chuyển hàng hóa để đề phòng và ngăn chặn những diễn biến ngày càng táo bạo và manh động của trộm cắp hiện nay.</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-xe-van-chuyen-02.png" 
                                alt="Dich vu bao ve xe van chuyen" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Dịch vụ bảo vệ xe vận chuyển hàng hóa tránh trường hợp bị kẻ gian trộm cắp</figcaption>
                        </figure>
                    
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Yêu cầu đặc biệt đối với bảo vệ xe vận chuyển hàng hóa
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Nắm rõ được hết những hàng hóa mình cần phải vận chuyển và bảo vệ.</li>
                            <li>Nắm rõ được hành trình vận chuyển hàng hóa, để có thể xem xét và nghiên cứu những địa hình vận chuyển hàng hóa sao cho phù hợp.</li>
                            <li>Tuyệt đối nghiêm cấm bảo vệ áp tải những loại hàng hóa quốc cấm các hàng trốn thuế và hàng hóa đã bị pháp luật kiểm định.</li>
                            <li>Kiểm tra hàng hóa thật kỹ càng, để đề phòng những chuyện bất trắc xảy ra trong suốt quá trình vận chuyển hàng hóa.</li>
                            <li>Theo sát hàng hóa khi vận chuyển và không được lơ là trong bất kỳ trường hợp nào.</li>
                            <li>Đảm bảo phải giữ nguyên hình dạng và mẫu mã, niêm phong hay tem nhãn của hàng hóa trong quá trình vận chuyển.</li>
                            <li>Cần phải bí mật tuyệt đối về tuyến đường di chuyển, tên hàng hóa hay số lượng hàng hóa. Để kẻ xấu không biết về hàng hóa và thực hiện những ý đồ xấu.</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-xe-van-chuyen-03.png" 
                                alt="Dich vu bao ve xe van chuyen 03" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Kiểm tra hàng hóa kỹ càng</figcaption>
                        </figure>

                       
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Bài viết trên đây là đặc điểm nổi bật về dịch vụ bảo vệ xe vận chuyển hàng hóa mà Công Ty Bảo Vệ An Toàn đã cung cấp. Bảo vệ xe vận chuyển hàng hóa của Công Ty Bảo Vệ An Toàn được rất nhiều doanh nghiệp quan tâm và đánh giá cao về chất lượng cũng như độ uy tín của dịch vụ bảo vệ.
                        </p>

                               
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingTop: '20px',
                        }}>
                           Vì nhân viên bảo vệ cả chúng tôi đã được đào tạo luôn làm tốt nhiệm vụ của mình và tỉnh táo trước mọi tình huống có thể xảy ra, luôn cảnh giác với những trường hợp đặc biệt và bảo vệ tốt các loại hàng hóa của quý khách. Liên hệ ngay cho Cong Ty Bảo Vệ An Toàn để tư vấn và hỗ trợ về các dịch vụ bảo vệ nhé.
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
                    </ContentTextCar>
                    <ContentBannerCar>
                            <BannerHotline />
                            <SendPhoneWrapperCar>
                                <BannerSendPhone />
                            </SendPhoneWrapperCar>
                    </ContentBannerCar>
                </ContentWrapperCar>
            </ContainerWrapper>
        </>
    );
};

const serviceDetail8 = {
    title: 'Dịch Vụ Bảo Vệ Xe Vận Chuyển',
    metaDescription: 'Bạn đã biết rồi đấy, hiện nay thì những tên trộm và cướp vô cùng táo bạo và manh động, chúng sử dụng rất nhiều cách khác nhau để có thể dẫn dụ cho con mồi rơi vào bẫy của chúng, nhằm chiếm đoạt hết tài sản của chúng ta, có thể là người quen hay người làm hoặc cũng có thể là những kẻ đã theo dõi hàng hóa vận chuyển của chúng ta ra vào mà tìm lỗ hở để có thể cướp và chiếm đoạt tài sản của chúng ta.',
    bodyContent: '',
};

const ContentWrapperCar = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentTextCar = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBannerCar = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapperCar = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default ServiceDetail8;