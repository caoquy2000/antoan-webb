import { ContainerFuildWrapper } from "Container";
import TextBox from "component/text-box/TextBox";
import React from "react";
import styled from "styled-components";

const IntroSection = (props) => {
    return (
        <React.Fragment>
            <IntroWrapper>
                <ContainerFuildWrapper>
                    <IntroImage>
                        <img src="./img/bao-ve-an-toan-gioi-thieu.png" alt="Bao Ve An Toan Gioi Thieu" />
                    </IntroImage>
                    <IntroContent>
                        <TextBox 
                            tagTitle={'h2'}
                            titleStyle={{
                                fontFamily: 'OSB',
                                fontSize: '38px',
                                marginBottom: '12px',
                            }}
                            titleContent={'GIỚI THIỆU VỀ BẢO VỆ AN TOÀN'}
                            bodyStyle={{
                                fontFamily: 'LTR',
                                fontSize: '24px',
                            }}
                            bodyContent1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.'}
                            bodyContent2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla quam mollis nulla purus, interdum. Viverra imperdiet id eros nunc, diam sed sed condimentum. Ultrices molestie enim malesuada id odio.'}
                        />
                    </IntroContent>
                </ContainerFuildWrapper>
            </IntroWrapper>
        </React.Fragment>
    );
};

const IntroWrapper = styled.section`
    ${ContainerFuildWrapper} {
        display: flex;
        align-items: center;
    }
`;

const IntroImage = styled.div`
    padding: 10px;
`;

const IntroContent = styled.div`
    padding: 0px 10px 0px 90px;
`;

export default IntroSection;