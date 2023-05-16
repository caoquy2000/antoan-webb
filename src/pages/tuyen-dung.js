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
            <RecruitBanner buttonText='Tuyển Dụng' img='./img/tuyen-dung-img.jpg' />
            <ContainerWrapper>
                <BodyContent>
                    <h2 style={{
                        textAlign: 'center',
                        padding: '20px 0px',
                        fontSize: '32px',
                    }}><b>Tuyển gấp nam/nữ bảo vệ, giữ kho, giám sát, giữ xe lương cao nhiều ưu đãi tại Thành Phố Hồ Chí Minh.</b></h2>
                    <p style={{
                        fontSize: '18px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                        color: 'red',
                    }}>
                       Có CMND sẽ được nhận đi làm ngay hồ sơ bổ sung với công ty sau 15 - 30 ngày.
                        Mức lương và đãi ngộ của công ty
                    </p>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                        paddingBottom: '20px',
                    }}>
                        <li><mark><b>Ca 8h/ngày lương 5.300.000đ/tháng.</b></mark></li>
                        <li><mark><b>Ca 16h/ngày lương 11.000.000đ/tháng.</b></mark></li>
                        <li><mark><b>Ca 24h/ngày lương 13.000.000đ/tháng.</b></mark></li>
                        <li>Công ty bao ở toàn bộ, nhà đội đầy đủ tiện nghi, bao ăn hoặc hỗ trợ tiền cơm 1.200.000đ/tháng.</li>
                        <li>Đối với ngày lễ nếu nhân viên đi làm sẽ được nhận 200% lương và thưởng lễ, ngày tết nhận 300% lương và tưởng tết.</li>
                        <li>Nhân viên khó khăn sẽ cho ứng 100.000đ-150.000đ/ngày hoặc cho ứng lương mỗi tuần.</li>
                        <li>Nhân viên khó khăn sẽ được công ty xem xét hỗ trợ vay vốn ngân hàng.</li>
                        <li>Công ty xét tăng lương 6 tháng/lần từ 500.000đ - 1.500.000đ</li>
                        <li>Nhân viên có năng lực công ty sẽ xem xét thăng chức chỉ huy trưởng lương `{'>'}` 10.000.000đ</li>
                        <li>Trực ca đêm sẽ được nghỉ ngơi, thay ca đúng giờ.</li>
                        <li>Làm việc theo đúng hợp đồng lao động, không bắt ép nhân viên.</li>
                        <li>Được làm việc trong môi trường hoàn toàn chuyên nghiệp có cơ hội mở rộng quan hệ.</li>
                        <li>Được hưởng đầy đủ các phúc lợi xã hội (BHYT, BHTN,…).</li>
                        <li>Được tào tạo, trang bị kiến thức nghiệp vụ miễn phí theo giáo trình của bộ Công An.</li>
                        <li>Nhận lương tháng 13, đặc biệt công ty không trễ lương của nhân viên.</li>
                    </ul>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>Thực hiện nhiệm vụ, chức năng của nhân viên bảo vệ theo điều lệnh.</li>
                        <li>Đản bảo an ninh, thường xuyên báo cáo tình hình của đơn vị phụ trách.</li>
                        <li>Thường xuyên kiểm tra tình hình hoạt động của hệ thống PCCC và các vấn đề có liên quan tại đơn vị làm việc.</li>
                        <li>Quẹt thẻ, kiểm tra xe ra vào và giúp đỡ khách hàng khi gửi xe.</li>
                        <li>Nhân viên trực đêm sẽ được nghỉ ngơi, thay ca đúng giờ.</li>
                        <li>Phối hợp kịp thời với đội tuần tra khi có tình huống cấp bách.</li>
                    </ul>

                    <figure style={{
                        textAlign: 'center',
                        marginTop: '20px',
                    }}>
                        <img 
                            src="./img/mission.jpg" 
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
                        Yêu cầu nhân viên ứng tuyển
                    </h3>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>Giới tính: nam từ 18 - 60 tuổi/ nữ từ 18 - 45 tuổi sức khỏe tốt, thái độ tác phong nghiêm túc.</li>
                        <li>Đặc biệt ứng viên có kinh nghiệm bảo vệ, là quân nhân xuất ngũ sẽ được xem xét nhận mức lương cao hơn.</li>
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
                        Hồ Sơ đăng kí
                    </h3>
                    <ul style={{
                        fontSize: '18px',
                        paddingLeft: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                        <li>Gửi qua Email leducanhlhvn@gmail.com</li>
                        <li>Liên hệ trực tiếp 090.145.3908 Anh Đức (Phòng tuyển dụng)</li>
                        <li>Đăng kí trực tiếp tại văn phòng công ty địa chỉ 458A Nguyễn Sơn, Phường Phú Thọ Hòa, Quận Tân Phú, TP. HCM.</li>
                    </ul>
                    <p style={{
                        fontSize: '18px',
                        paddingBottom: '20px',
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: '400',
                    }}>
                       <i>tìm việc làm bảo vệ tại tphcm, viec lam bao ve, tuyen bao ve luong cao, tim viec lam bao ve, tuyển bảo vệ tại tphcm, cong ty bao ve luong cao, công ty bảo vệ lương cao</i>
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