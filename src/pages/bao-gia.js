import { ContainerWrapper } from "Container";
import RecruitBanner from "component/section/recruit-banner/RecruitBanner";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const Price = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        baoGiaPage?.title
                    }
                </title>
                <meta name="description" content={baoGiaPage.metaDescription}/>
            </Head>
            <RecruitBanner buttonText='Báo Giá' img='./img/bao-gia-banner.jpg' />
            <ContainerWrapper>
                <BodyContent>
                    <h2 style={{
                        textAlign: 'center',
                        padding: '20px 0px',
                    }}
                    >Bảng báo giá dịch vụ bảo vệ chuyên nghiệp tại Công Ty Bảo Vệ An Toàn</h2>
                    <p style={{
                        fontSize: '18px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        Thuê dịch vụ bảo vệ chuyên nghiệp đang là một trong những xu hướng được rất nhiều doanh nghiệp lựa chọn. Thật ra thì giá thành để thuê dịch vụ bảo vệ không cao như mọi người đã nghĩ. Vì nó đã bao gồm hết chi phí như: Dụng cụ hỗ trợ, phí đào tạo hay trang phục…và những gói bảo hiểm, cam kết cho doanh nghiệp. Hãy cùng Bảo Vệ An Toàn tham khảo qua bảng báo giá dịch vụ bảo vệ chuyên nghiệp để có thể lựa chọn loại hình dịch vụ sao phù hợp cho doanh nghiệp của mình nhất nhé.
                    </p>
                    <figure style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}>
                        <img 
                            src="./img/bao-ve-an-toan-bao-gia-1.png" 
                            alt="Bao gia bao ve an toan 1" 
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        <figcaption>Báo giá dịch vụ bảo vệ tại Công Ty Bảo Vệ An Toàn</figcaption>
                    </figure>
                    <h3 style={{
                        fontFamily: 'OSB',
                        fontSize: '22px',
                        padding: '20px 0px',
                    }}>
                        Yếu tố làm ảnh hưởng đến chi phí dịch vụ bảo vệ
                    </h3>
                    <p style={{
                        fontSize: '18px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                       Điều đầu tiên khi thuê dịch vụ bảo vệ là, bạn phải nên cân nhắc trước những yếu tố ảnh hưởng đến chi phí khi thuê dịch vụ bảo vệ sau đây:
                    </p>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>
                            <b>Số Lượng Bảo Vệ:</b> Cần phải tính toán trước số lượng nhân viên bảo vệ cần thuê để đảm bảo được tính an toàn và hoàn thành được nhiệm vụ đã giao tốt nhất. Số lượng bảo vệ càng nhiều thì chi phí nhân viên bảo vệ sẽ càng cao.
                        </li>
                        <li>
                            <b>Tìm Hiểu Kỹ Tính Chất Công Việc Khi Thuê Dịch Vụ Bảo Vệ:</b> Nếu như công việc của doanh nghiệp nguy hiểm, hay đòi hỏi cần phải di chuyển rất nhiều thì báo giá dịch vụ bảo vệ sẽ cao hơn. Hay ở những môi trường thường xuyên làm việc ngoài trời và thời tiết nóng bức thì chi phí dịch vụ sẽ cao hơn là làm nhiệm vụ trong môi trường dễ chịu.
                        </li>
                        <li>
                            <b>Thời Gian Thuê Dịch Vụ Bảo Vệ:</b> Đối với những vị trí làm việc ca đêm hay ca trực 24/7 thì giá thành thuê dịch vụ sẽ cao hơn những vị trí trực ở khung giờ hành chính.
                        </li>
                        <li>
                            <b>Yêu Cầu Đặc Biệt Về Tiêu Chuẩn:</b> Một trong những yếu tố quyết định không nhỏ đến giá thành thuê dịch vụ bảo vệ. Như là độ tuổi hay kinh nghiệm về nghiệp vụ, kỹ năng giao tiếp bằng tiếng anh, biết lái xe và kiêm nhiệm vệ sĩ…thì sẽ có giá thành dịch vụ cao hơn là bảo vệ tiêu chuẩn thông thường.
                        </li>
                    </ul>
                    <p style={{
                        fontSize: '18px',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                       Vì vậy, các doanh nghiệp cần nắm rõ hết nhu cầu cần phải bảo vệ của những mục tiêu cần được bảo vệ để nhận được báo giá dịch vụ bảo vệ chính xác nhất và tránh gây lãng phí hay thiếu hụt nhân viên bảo vệ sẽ làm ảnh hưởng đến chất lượng của phục vụ về an toàn.
                    </p>
                    <h3 style={{
                        fontFamily: 'OSB',
                        fontSize: '22px',
                        padding: '20px 0px',
                    }}>
                       Báo giá dịch vụ bảo vệ theo giờ tại Công Ty Bảo Vệ An Toàn
                    </h3>
                    <p style={{
                        fontSize: '18px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                       Loại hình dịch vụ bảo vệ cho thuê theo giờ thường là những quán cafe hay nhà hàng và những show ca nhạc, sự kiện, lễ hội… có nhu cầu thuê dịch vụ bảo vệ để giữ xe hay bảo vệ sự kiện theo các khung giờ hoạt động.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                       Khách hàng cũng có thể tham khảo thêm bảng báo giá dịch vụ bảo vệ chuyên nghiệp chất lượng của Công Ty Bảo Vệ An Toàn để cân nhắc hơn về việc lựa chọn sao cho phù hợp nhất.
                    </p>
                    <figure style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}>
                        <img 
                            src="./img/bang-bao-gia.png" 
                            alt="Bang bao gia" 
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        <figcaption>Bảng báo giá dịch vụ bảo vệ</figcaption>
                    </figure>
                    <h3 style={{
                        fontFamily: 'OSB',
                        fontSize: '22px',
                        padding: '20px 0px',
                    }}>
                       Địa chỉ thuê dịch vụ bảo vệ - Chuyên Nghiệp - Chất Lượng - Uy Tín tại TP.HCM
                    </h3>
                    <p style={{
                        fontSize: '18px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                        paddingBottom: '20px',
                    }}>
                       Thuê dịch vụ bảo vệ với giá thành vô cùng rẻ tại Công Ty Bảo Vệ An Toàn là giá thành thuê dịch vụ trọn gói, được rất nhiều doanh nghiệp tín nhiệm. Khách hàng có thể yên tâm bởi nghiệp vụ và kỹ năng đã được đào tạo vô cùng bài bản luôn được nâng cao chất lượng tốt nhất.
                    </p>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>Cam kết các nhân viên bảo vệ đều có chứng chỉ nghiệp vụ chuyên môn cao.</li>
                        <li>Luôn luôn có đội ngũ hỗ trợ 24/24 trong mọi dịch vụ.</li>
                        <li>Đội ngũ nhân viên bảo vệ chuyên nghiệp luôn bảo đảm được an ninh trong mọi tình huống.</li>
                    </ul>
                    <p style={{
                        fontSize: '18px',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        Công ty dịch vụ Bảo Vệ An Toàn cam kết sẽ mang đến cho khách hàng sự trải nghiệm dịch vụ bảo vệ với giá thành tốt nhất thị trường hiện nay. Bảo Vệ An Toàn là một trong những công ty dịch vụ bảo vệ uy tín nhất và có chất lượng tốt nhất hiện nay.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        Quý khách hàng có thể yên tâm khi giao nhiệm vụ bảo vệ tài sản hay tính con người cho đội ngũ Bảo Vệ An Toàn với dày dặn kinh nghiệm nhiều năm của chúng tôi.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        Khi khách hàng có nhu cầu về thuê dịch vụ bảo vệ: Mục tiêu cố định, bảo vệ giữ xe, bảo vệ chất lượng cao, bảo vệ sự kiện, lễ hội, bảo vệ yếu nhân, bảo vệ mục tiêu di động, bảo vệ khu công nghiệp hay bảo vệ xe vận chuyển hàng hóa thì hãy nhanh tay liên hệ đến ngay với Công Ty Bảo Vệ An Toàn qua số Hotline: 0933.777.005.
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
                </BodyContent>
            </ContainerWrapper>
        </>
    );
};

const baoGiaPage = {
    title: 'Báo Giá Dịch Vụ Bảo Vệ An Toàn',
    metaDescription: 'Thuê dịch vụ bảo vệ chuyên nghiệp đang là một trong những xu hướng được rất nhiều doanh nghiệp lựa chọn. Thật ra thì giá thành để thuê dịch vụ bảo vệ không cao như mọi người đã nghĩ.',
    bodyContent: '',
};

const BodyContent = styled.div`
`;

export default Price;