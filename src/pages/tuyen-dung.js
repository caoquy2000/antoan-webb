import React from "react";
import { ContainerWrapper } from "Container";
import RecruitBanner from "component/section/recruit-banner/RecruitBanner";
import Head from "next/head";
import styled from "styled-components";

const Recruitment = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>
                    {
                        tuyenDungPage?.title
                    }
                </title>
                <meta name="description" content={tuyenDungPage.metaDescription}/>
            </Head>
            <RecruitBanner />
            <ContainerWrapper>
                <BodyContent>
                    <h2 className="title_page">Tìm đồng đội tại Công Ty Bảo Vệ An Toàn</h2>
                    <p className="content">
                        Không khó để có thể bắt gặp được hình ảnh những cô chú lớn tuổi đang khoác lên mình màu áo xanh trong dịch vụ bảo vệ. 
                        Số lượng nhân viên bảo vệ lớn tuổi trong ngành dịch vụ này đang chiếm tỷ lệ không nhỏ của doanh nghiệp hoạt động dịch vụ bảo vệ. Công Ty Bảo Vệ An Toàn đang tuyển dụng nhân viên bảo vệ nam/nữ với độ tuổi từ 18 tuổi trở lên. 
                        Hãy cùng mình tìm hiểu chi tiết hơn trong bài viết sau đây nhé!
                    </p>
                    <figure>
                        <img src="./img/tuyen-dung-bao-ve-an-toan.png" alt="Tuyen dung bao ve an toan 1" />
                        <figcaption>Tìm đồng đội về Công Ty Bảo Vệ An Toàn</figcaption>
                    </figure>
                    <h3 className="title">
                        Nhiệm vụ cần phải thực hiện
                    </h3>
                    <ul className="content">
                        <li>Thực hiện nhiệm vụ trực an ninh cho tòa nhà, chung cư hay ngân hàng...</li>
                        <li>Giữ xe các hàng quán hay cửa hàng...</li>
                        <li>Trực sảnh và quan sát camera an ninh, quẹt thẻ xe khi có xe ra vào...</li>
                        <li>Bảo vệ nhà máy và kho hàng tránh thất thoát…</li>
                    </ul>
                    <figure>
                        <img src="./img/tuyen-dung-bao-ve-quan-sat.png" alt="Tuyen dung bao ve an toan quan sat" />
                        <figcaption>Quan sát và kiểm tra</figcaption>
                    </figure>
                </BodyContent>
            </ContainerWrapper>
        </React.Fragment>
    );
};

const tuyenDungPage = {
    title: 'Tuyển Dụng Bảo Vệ An Toàn',
    metaDescription: 'Công Ty Bảo Vệ An Toàn đang tuyển dụng nhân viên bảo vệ nam/nữ với độ tuổi từ 18 tuổi trở lên. Hãy cùng mình tìm hiểu chi tiết hơn trong bài viết sau đây nhé!',
    bodyContent: '',
};

const BodyContent = styled.div`
    .title_page {
        text-align: center;
    }
    & .title {
        font-family: 'OSB';
        font-size: '22px;
    }
    & .content {
        font-family: 'Lato';
        font-size: 16px;
    }
`;


export default Recruitment;