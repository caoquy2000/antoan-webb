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
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: variable.RED_COLOR, color: '#fff' }}
                            icon={<StarIcon />}
                        >
                            <ChooseItemImg>
                                <img src="./img/choose-reasion-1.jpg" alt="NHÂN VIÊN  NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ" />
                            </ChooseItemImg>
                            <ChooseItemTitle>
                                NHÂN VIÊN NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ
                            </ChooseItemTitle>
                            <ChooseItemContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.
                            </ChooseItemContent>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<AssignmentTurnedInIcon />}
                        >
                           <ChooseItemImg>
                                <img src="./img/bao-ve-su-kien-le-hoi.png" alt="NHÂN VIÊN  NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ" />
                            </ChooseItemImg>
                            <ChooseItemTitle>
                                PHÍ DỊCH VỤ CẠNH TRANH TỪ PHỔ THÔNG ĐẾN CAO CẤP
                            </ChooseItemTitle>
                            <ChooseItemContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.
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
                                <img src="./img/choose-reasion-1.jpg" alt="NHÂN VIÊN  NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ" />
                            </ChooseItemImg>
                            <ChooseItemTitle>
                                ÁP DỤNG QUY TRÌNH QUẢN LÝ CHẤT LƯỢNG THEO TIÊU CHUẨN 
                                <br/>
                                ISO 9001:2015
                            </ChooseItemTitle>
                            <ChooseItemContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.
                            </ChooseItemContent>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<HomeRepairServiceIcon />}
                        >
                           <ChooseItemImg>
                                <img src="./img/choose-reasion-1.jpg" alt="NHÂN VIÊN  NHIỆT TÌNH - THÂN THIỆN - MẠNH MẼ" />
                            </ChooseItemImg>
                            <ChooseItemTitle>
                                CÔNG TY TRANG BỊ BẢO HIỂM TRÁCH NHIỆM NGHỀ NGHIỆP CHO KHÁCH HÀNG
                            </ChooseItemTitle>
                            <ChooseItemContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.
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
    font-family: 'LTR';
`;

export default ChooseSection;