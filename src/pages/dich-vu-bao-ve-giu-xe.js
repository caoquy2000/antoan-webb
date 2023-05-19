import { ContainerWrapper } from "Container";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const ServiceDetail2 = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        serviceDetail2.title
                    }
                </title>
                <meta name="description"  content={serviceDetail2.metaDescription} />
            </Head>
            <ContainerWrapper>
                <ContentWrapper2>
                    <ContentText2>
                        <h2 style={{
                            textAlign: 'center',
                            padding: '20px 0px',
                        }}>Dịch vụ bảo vệ giữ xe uy tín tại TPHCM - Công Ty Bảo Vệ An Toàn</h2>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           Hiện nay các phương tiện di chuyển cá nhân như: Xe máy, xe ô tô hay xe đạp điện… vẫn là một trong những sự lựa chọn di chuyển hàng đầu và chủ yếu hàng ngày của người dân hiện nay. Dịch vụ bảo vệ giữ xe và bãi xe là một trọng những dịch vụ gắn liền với những địa điểm như: Trường học, siêu thị hay các trung tâm mua sắm và bệnh viện.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-giu-xe-1.png" 
                                alt="Bao ve giu xe 1" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Dịch vụ bảo vệ giữ xe tại Công Ty Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                           Bởi vì những nơi này luôn có một lượng lớn người và những phương tiện ra vào rất thường xuyên và liên tục nên rất cần có sự quản lý nghiêm túc và chặt chẽ của nhân viên bảo vệ giữ xe.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            
                        }}>
                           Nắm được những tình hình đó, công ty dịch vụ bảo vệ Bảo Vệ An Toàn cung cấp đến dịch vụ bảo vệ giữ xe và bãi xe vô cùng chuyên nghiệp. Những bảo vệ giữ xe của Công Ty Bảo Vệ An Toàn được tuyển chọn rất kỹ lưỡng và đều trải qua một quá trình đào tạo vô cùng chuyên nghiệp và có nghiệp vụ tốt.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Mục tiêu bảo vệ giữ xe gồm
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Giữ xe cho công viên vui chơi.</li>
                            <li>Giữ xe cho những trung tâm mua sắm hay siêu thị.</li>
                            <li>Giữ xe cho những sự kiện lớn hay các đêm biểu diễn ca nhạc, liveshow và sân vận động…</li>
                            <li>Giữ bãi xe cho trường học.</li>
                            <li>Giữ bãi cho các xe bệnh viện.</li>
                            <li>Giữ bãi xe văn phòng.</li>
                            <li>Giữ bãi xe cho các công trình thi công…</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Những nhiệm vụ chính của các nhân viên bảo vệ giữ xe
                        </h3>
                        <figure style={{
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/hinh-2.jpg" 
                                alt="Bao ve giu xe 1" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Nhân viên chất lượng tại bảo vệ an toàn.</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                          Bảo vệ giữ xe là một trong những loại hình dịch vụ tốt nhất hiện nay nó bảo vệ cho xe máy và ô tô trong những khuôn viên của bãi xe (hay tại các mặt tiền và những điểm kinh doanh của quý khách) có thể quan sát và tuần tra kiểm soát xe đề phòng mất cắp và ngăn chặn kẻ xấu trộm xe và những phụ tùng được gắn trên xe.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                          Đồng thời cần phải kiểm soát và công tác phòng cháy chữa cháy để có thể đảm bảo độ an toàn cho tài sản của người gửi xe.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                          Thái độ của những bảo vệ cần phải luôn vui tươi, nhiệt tình và luôn thân thiện vì nhân viên bảo vệ là một trong những người tiếp xúc trực tiếp đối với khách hàng. Nhân viên bảo vệ giữ xe cần phải làm nhiệm vụ gì với khách hàng:
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-giu-xe-2.png" 
                                alt="Bao ve giu xe 2" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Nhiệm vụ của bảo vệ giữ xe</figcaption>
                        </figure>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Ghi vé xe và tiến hành phân biệt các loại xe để vào trong từng khu vực đã quy định.</li>
                            <li>Cấm hút thuốc bên trong bãi gửi xe để đề phòng sự cố cháy nổ xảy ra bên trong bãi xe.</li>
                            <li>Bảo vệ giữ xe cần phải tuyệt đối tránh để mất cắp hay hư hỏng xe.</li>
                            <li>Hướng dẫn cho khách hàng dừng xe và đậu xe có trật tự theo khu vực chào hỏi và hướng dẫn cho khách vào.</li>
                            <li>Xếp xe vô bãi gọn gàng và ngay hàng thẳng lối.</li>
                            <li>Kiểm tra chung bãi xe nhằm đề phòng các tình trạng cháy nổ xảy ra.</li>
                            <li>Giữ thái độ ân cần và lịch sự đối với khách hàng khi đến gửi xe.</li>
                            <li>Khi khách hàng lấy xe thì bảo vệ giữ xe phải có trách nhiệm và so sánh số seri trong thẻ gửi xe với ở xe thì mới được lấy, còn nếu như không thì giữ xe lại để có thể làm rõ và có những phương án giải quyết khác.</li>
                            <li>Nếu bị mất thẻ thì nhân viên bảo vệ giữ xe lại và yêu cầu xuất trình các giấy tờ hay chứng minh và báo lại với cấp trên để có thể giải quyết nhanh chóng nhất không làm cho khách hàng mất quá nhiều thời gian.</li>
                        </ul>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Những điều cần biết khi chọn lựa dịch vụ bảo vệ giữ xe
                        </h3>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Nên chọn lựa công ty cung cấp các dịch vụ bảo vệ giữ xe uy tín đáng tin cậy, đã có nhiều kinh nghiệm về nghiệp vụ chuyên nghiệp.</li>
                            <li>Nhân viên bảo vệ cần phải đáp ứng đầy đủ yêu cầu về sức khỏe cũng như tác phong nhanh nhẹn và không sử dụng điện thoại riêng trong giờ làm việc và luôn niềm nở tươi cười chào khách.</li>
                            <li>Bảo vệ giữ xe cần phải có đủ thẻ xe để cung cấp cho khách hàng.</li>
                            <li><b>Lưu Ý:</b> Nhân viên bảo vệ giữ xe chỉ được quan sát và trông giữ xe tối đa khoảng 20 đến 30 chiếc xe máy, nếu như nhiều hơn thì khách hàng nên yêu cầu các công ty bảo vệ tăng cường thêm nhân viên bảo vệ để hỗ trợ trông giữ xe nhằm đảm bảo độ an toàn.</li>
                            <li>Chỉ cần bảo vệ có 1 lơ là nhỏ thì có thể bị mất xe ngay lập tức, từ đó khách hàng không nên yêu cầu các bảo vệ giữ xe làm thêm những yêu cầu khác xa di chuyển khỏi bãi xe và mục tiêu giữ xe, rất dễ xảy ra các tranh chấp khi bị đánh mất xe.</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/bao-ve-giu-xe-3.png" 
                                alt="Bao ve giu xe 3" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Lưu ý khi lựa chọn bảo vệ giữ xe</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                          Công ty dịch vụ bảo vệ chuyên nghiệp Bảo Vệ An Toàn luôn tự hào là một trong những đơn vị hàng đầu về lĩnh vực cung cấp các dịch vụ bảo vệ giữ xe và bãi xe trong nhiều năm qua trên thị trường. Công Ty Bảo Vệ An Toàn là đối tác đáng tin cậy cung cấp đến cho khách hàng dịch vụ bảo vệ chuyên nghiệp cho mục tiêu bảo vệ sự kiện, bảo vệ chung cư hay bảo vệ tòa nhà và bảo vệ trường học…
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
                    </ContentText2>
                    <ContentBanner2>
                            <BannerHotline />
                            <SendPhoneWrapper2>
                                <BannerSendPhone />
                            </SendPhoneWrapper2>
                    </ContentBanner2>
                </ContentWrapper2>
            </ContainerWrapper>
        </>
    );
};

const serviceDetail2 = {
    title: 'Bảo Vệ Giữ Xe',
    metaDescription: 'Dịch vụ bảo vệ mục tiêu cố định tại Công Ty Bảo Vệ An Toàn là mục tiêu đặt ở một vị trí nhất định như: bảo vệ tài sản cố định, bảo vệ tòa nhà hay văn phòng và siêu thị… Dù là bảo vệ mục tiêu cố định nhưng những vật chứa trong đó là những món tài sản có giá trị.',
    bodyContent: '',
};

const ContentWrapper2 = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentText2 = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBanner2 = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapper2 = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default ServiceDetail2;