import React from "react";
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ContainerWrapper } from "Container";
import * as variable from 'common/variable';
import StarIcon from '@mui/icons-material/Star';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import GppGoodIcon from '@mui/icons-material/GppGood';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const ChooseSection = (props) => {

    return (
        <ChooseSectionWrapper>
            <ContainerWrapper>
                <ChooseTitle>
                    TẠI SAO CHỌN CÔNG TY BẢO VỆ AN TOÀN
                </ChooseTitle>
                <ChooseBody>
                    <VerticalTimeline
                        animate={false}
                    >
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: variable.RED_COLOR, color: '#fff' }}
                            icon={<StarIcon />}
                        >
                            <ChooseItemImg>
                                <img src="./img/hinh-3.jpg" alt="NHÂN VIÊN  NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ" />
                            </ChooseItemImg>
                            <ChooseItemTitle>
                                NHÂN VIÊN NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ
                            </ChooseItemTitle>
                            <ChooseItemContent>
                            Bảo Vệ An Toàn là đơn vị chuyên cung cấp dịch vụ bảo vệ chuyên nghiệp, đảm bảo trật tự an ninh – xã hội tại tp. Hồ Chí Minh. Để làm hài lòng khách hàng, chắc chắn phải kể đến tầm quan trọng trong việc đào tạo đội ngũ nhân viên: Nhiệt Tình - Thân Thiện - Mạnh Mẽ.
                            </ChooseItemContent>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<AssignmentTurnedInIcon />}
                            style={{
                                color: `${variable.BLACK_COLOR}`,
                            }}
                        >
                           <ChooseItemImg>
                                <img src="./img/bao-ve-su-kien-le-hoi.png" alt="NHÂN VIÊN  NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ" />
                            </ChooseItemImg>
                            <ChooseItemTitle>
                                PHÍ DỊCH VỤ CẠNH TRANH TỪ PHỔ THÔNG ĐẾN CAO CẤP
                            </ChooseItemTitle>
                            <ChooseItemContent>
                            Khi thuê dịch vụ bảo vệ thì ngoài chất lượng, hiệu quả công việc thì khách hàng bao giờ cũng quan tâm đến yếu tố giá cả. Hãy yên tâm khi lựa chọn dịch vụ của công ty Bảo Vệ An Toàn, bạn sẽ được đảm bảo phí dịch vụ cạnh tranh từ phổ thông đến cao cấp.
                            </ChooseItemContent>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: variable.RED_COLOR, color: '#fff' }}
                            icon={<GppGoodIcon />}
                        >
                           <ChooseItemImg>
                                <img src="./img/hinh-4.jpg" alt="NHÂN VIÊN  NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ" />
                            </ChooseItemImg>
                            <ChooseItemTitle>
                                ÁP DỤNG QUY TRÌNH QUẢN LÝ CHẤT LƯỢNG THEO TIÊU CHUẨN 
                                <br/>
                                ISO 9001:2015
                            </ChooseItemTitle>
                            <ChooseItemContent>
                            Đào tạo đội ngũ bảo vệ là một trong những khâu hết sức quan trọng để mang đến chất lượng dịch vụ tốt nhất cho khách hàng. Tại Bảo Vệ An Toàn thường xuyên tổ chức các các khóa đào tạo chuyên nghiệp để đảm bảo nghiệp vụ tinh thông, tác phong nhanh nhẹn cho từng nhân viên.
                            </ChooseItemContent>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<HomeRepairServiceIcon />}
                            style={{
                                color: `${variable.BLACK_COLOR}`,
                            }}
                        >
                           <ChooseItemImg>
                                <img src="./img/hinh-5.jpg" alt="NHÂN VIÊN  NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ" />
                            </ChooseItemImg>
                            <ChooseItemTitle>
                                CÔNG TY TRANG BỊ BẢO HIỂM TRÁCH NHIỆM NGHỀ NGHIỆP CHO KHÁCH HÀNG
                            </ChooseItemTitle>
                            <ChooseItemContent>
                            Tiền thân là Công ty cung cấp dịch vụ việc làm mỗi năm cung cấp cho thị trường vài nghìn lao động.Do đó, Công ty bảo vệ An Toàn nhanh chóng tuyển dụng và đáp ứng nhu cầu số lượng lớn của khách hàng trong thời gian sớm nhất.
                            </ChooseItemContent>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </ChooseBody>
            </ContainerWrapper>
        </ChooseSectionWrapper>
    );
};

const ChooseSectionWrapper = styled.section`
    background-color: ${variable.MAIN_COLOR};
    margin-top: 85px;
    .vertical-timeline-element-content p {
        margin: initial !important;
    }
    @media (max-width: 1050px) {
        margin-top: 250px;
    }
`;

const ChooseTitle = styled.h3`
    font-family: 'OSB';
    font-size: 32px;
    line-height: 18px;
    font-weight: 700;
    color: ${variable.WHITE_COLOR};
    text-align: center;
    padding: 80px 0px;
    text-transform: uppercase;
    @media (max-width: 600px) {
        font-size: 24px;
    }
    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

const ChooseBody = styled.div`

`;

const ChooseItemImg = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const ChooseItemTitle = styled.h4`
    margin-top: 12px;
    font-family: 'OSB';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 41px;
`;
const ChooseItemContent = styled.p`
    font-family:  'Roboto', sans-serif;
`;

export default ChooseSection;