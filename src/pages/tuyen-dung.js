import React from "react";
import { ContainerWrapper } from "Container";
import RecruitBanner from "component/section/recruit-banner/RecruitBanner";
import Head from "next/head";
import styled from "styled-components";
import * as variable from 'common/variable';

const Recruitment = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        tuyenDungPage?.title
                    }
                </title>
                <meta name="description" content={tuyenDungPage.metaDescription}/>
            </Head>
            <RecruitBanner buttonText='Tuyển Dụng' />
            <ContainerWrapper>
                <BodyContent>
                    <h2 style={{
                        textAlign: 'center',
                        padding: '20px 0px',
                    }}>Tìm đồng đội tại Công Ty Bảo Vệ An Toàn</h2>
                    <p style={{
                        fontSize: '18px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        Không khó để có thể bắt gặp được hình ảnh những cô chú lớn tuổi đang khoác lên mình màu áo xanh trong dịch vụ bảo vệ. 
                        Số lượng nhân viên bảo vệ lớn tuổi trong ngành dịch vụ này đang chiếm tỷ lệ không nhỏ của doanh nghiệp hoạt động dịch vụ bảo vệ. Công Ty Bảo Vệ An Toàn đang tuyển dụng nhân viên bảo vệ nam/nữ với độ tuổi từ 18 tuổi trở lên. 
                        Hãy cùng mình tìm hiểu chi tiết hơn trong bài viết sau đây nhé!
                    </p>
                    <figure style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}>
                        <img 
                            src="./img/tuyen-dung-bao-ve-an-toan.png" 
                            alt="Tuyen dung bao ve an toan 1" 
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        <figcaption>Tìm đồng đội về Công Ty Bảo Vệ An Toàn</figcaption>
                    </figure>
                    <h3 style={{
                        fontFamily: 'OSB',
                        fontSize: '22px',
                        padding: '20px 0px',
                    }}>
                        Nhiệm vụ cần phải thực hiện
                    </h3>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>Thực hiện nhiệm vụ trực an ninh cho tòa nhà, chung cư hay ngân hàng...</li>
                        <li>Giữ xe các hàng quán hay cửa hàng...</li>
                        <li>Trực sảnh và quan sát camera an ninh, quẹt thẻ xe khi có xe ra vào...</li>
                        <li>Bảo vệ nhà máy và kho hàng tránh thất thoát…</li>
                    </ul>
                    <figure style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}>
                        <img 
                            src="./img/tuyen-dung-bao-ve-quan-sat.png" 
                            alt="Tuyen dung bao ve an toan quan sat" 
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        <figcaption>Quan sát và kiểm tra</figcaption>
                    </figure>
                    <h3 style={{
                        fontFamily: 'OSB',
                        fontSize: '22px',
                        padding: '20px 0px',
                    }}>
                       Thu nhập thực tế của nhân viên bảo vệ
                    </h3>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>Ca làm từ 8h/ngày lương sẽ là 5.000.000đ cho đến 6.000.000đ/tháng.</li>
                        <li>Ca làm từ 12h/ngày lương sẽ là 6.500.000đ cho đến 8.500.000đ/tháng.</li>
                        <li>Ca làm từ 16h/ngày lương sẽ là 9.000.000đ cho đến 10.000.000đ/tháng.</li>
                        <li>Ca làm từ 24/24h lương sẽ là 10.000.000đ cho đến 12.000.000đ/ tháng.</li>
                        <li>10 Nhân Viên Cơ Động lương sẽ từ 8.000.000đ đến 10.000.000đ/tháng, thời gian làm việc 12h/ngày.</li>
                        <li>Đội trưởng mức lương sẽ từ 12.000.000đ cho đến 15.000.000đ/tháng, nếu như đã có kinh nghiệm.</li>
                        <li>Nhân viên làm thời vụ mức lương sẽ từ 20.000đ cho đến 25.000đ/giờ và nhận lương tuần.</li>
                        <li>Bao ở và bao ăn trong ca trực (tuỳ theo vào tiêu).</li>
                        <li>Công ty sẽ xét tăng lương cho nhân viên 6 tháng/lần.</li>
                        <li>Nhân viên khó khăn sẽ được công ty cho ứng lương hàng ngày hay hàng tuần.</li>
                    </ul>
                    <h3 style={{
                        fontFamily: 'OSB',
                        fontSize: '22px',
                        padding: '20px 0px',
                    }}>
                       Yêu cầu tuyển dụng
                    </h3>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>Nam độ tuổi từ 18 đến dưới 60 tuổi.</li>
                        <li>Nữ độ tuổi từ 18 đến dưới 45 tuổi.</li>
                        <li>Yêu cầu có sức khỏe thể lực tốt, trung thực và không dị tật, đặc biệt là không có tiền án tiền sự.</li>
                        <li>Biết đọc và biết viết.</li>
                        <li>Có CMND nhận việc ngay.</li>
                    </ul>
                    <h3 style={{
                        fontFamily: 'OSB',
                        fontSize: '22px',
                        padding: '20px 0px',
                    }}>
                       Tại sao nên ứng tuyển tại Công Ty Bảo Vệ An Toàn
                    </h3>
                    <p style={{
                        fontSize: '18px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        Bởi vì những quyền lợi mà công ty Bảo Vệ An Toàn đã mang đến như:
                    </p>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>Nhân viên bảo vệ tại công ty Bảo Vệ An Toàn được tham gia đầy đủ các công tác đóng bảo hiểm xã hội và bảo hiểm y tế.</li>
                        <li>Được công ty chăm sóc và cư xử thân thiện và hướng dẫn tận tình.</li>
                        <li>Khi bắt đầu làm việc từ ngày đầu tiên, thì sẽ được công ty Bảo Vệ An Toàn tặng gói bảo hiểm tai nạn.</li>
                        <li>Được nhân lương tháng 13 dịp cuối năm.</li>
                        <li>Hoạt động ngày lễ lương sẽ được nhân đôi, và sẽ được nhân ba khi làm vào những ngày Tết.</li>
                        <li>Được trải qua quá trình đào tạo chuyên môn bài bản nhất và những khóa rèn luyện chuyên nghiệp.</li>
                        <li>Đặc biệt là, làm việc tại Công Ty Bảo Vệ An Toàn anh chị và cô chú sẽ nhận được đồng phục và những trang thiết bị để có thể hỗ trợ cho công việc tốt nhất một cách miễn phí.</li>
                        <li>Nếu như trở thành nhân viên bảo vệ chính thức tại Công Ty Bảo Vệ An Toàn, bạn sẽ nhận được vô số những lợi ích mà công ty mang lại sẽ không nơi đâu đạt được.</li>
                    </ul>
                    <p style={{
                        fontSize: '18px',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                       Công ty cung cấp dịch vụ bảo vệ Bảo Vệ An Toàn chuyên cung cấp nhiều loại hình dịch vụ bảo vệ như: Bảo vệ mục tiêu cố định, bảo vệ giữ xe, bảo vệ chất lượng cao, bảo vệ sự kiện, lễ hội, bảo vệ yếu nhân, bảo vệ mục tiêu di động, bảo vệ khu công nghiệp hay bảo vệ xe vận chuyển hàng hóa.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                       Đã được thành lập từ rất lâu, với nhiều năm kinh nghiệm dày dặn trong ngành dịch vụ bảo vệ. Công Ty Bảo Vệ An Toàn sẽ cam kết sẽ cho khách hàng tận hưởng được những trải nghiệm dịch vụ tốt nhất về bảo vệ. Đem lại sự chuyên nghiệp về nghiệp vụ cũng như về kỹ năng công tác chuyên môn của một nhân viên bảo vệ.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                       Công Ty Bảo Vệ An Toàn đang có nhu cầu tuyển dụng bảo vệ. Đây sẽ là một trong những cơ hội tốt cho những người lao động. Nếu như bạn cũng đảm bảo được đủ sức khoẻ thì hãy nhanh chóng tham gia ngay với chúng tôi để có được một công việc mới kiếm thêm nhiều thu nhập và nâng cao nghiệp vụ của mình hơn.
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

const tuyenDungPage = {
    title: 'Tuyển Dụng Bảo Vệ An Toàn',
    metaDescription: 'Công Ty Bảo Vệ An Toàn đang tuyển dụng nhân viên bảo vệ nam/nữ với độ tuổi từ 18 tuổi trở lên. Hãy cùng mình tìm hiểu chi tiết hơn trong bài viết sau đây nhé!',
    bodyContent: '',
};

const BodyContent = styled.div`
`;


export default Recruitment;