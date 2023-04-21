import styled from "styled-components";
import * as variable from 'common/variable';
import React, { useEffect, useRef, useState } from "react";
import MenuMobile from "component/menu-mobile/MenuMobile";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Header = (props) => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const { scrollY } = useScroll();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        setHeaderHeight(headerRef?.current?.clientHeight);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > headerHeight) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    });

    return (
        <React.Fragment>
            <HeaderContainer ref={headerRef}>
                <LogoWrapper>
                    <LogoImg>
                        <img src="./img/logo.png" alt="Logo Bao Ve An Toan" />
                    </LogoImg>
                    <LogoText>
                        <h1 className="logo">BẢO VỆ AN TOÀN SECURITY</h1>
                        <p>UY TÍN - TẬN TÂM - CHẤT LƯỢNG</p>
                    </LogoText>
                </LogoWrapper>
                <MenuWrapper>
                    <Hotline>
                        <img src="./img/icCall.svg" alt="Icon Call" />
                        <Middle>HOTLINE:</Middle>
                        <Phone>0914.68.2423</Phone>
                    </Hotline>
                    <Menu className={!!isFixed && 'menu_fixed'}>
                        <ul>
                            <li>
                                <a href="#">TRANG CHỦ</a>
                            </li>
                            <li>
                                <a href="#">GIỚI THIỆU</a>
                            </li>
                            <li>
                                <a href="#">DỊCH VỤ</a>
                            </li>
                            <li>
                                <a href="#">BÁO GIÁ</a>
                            </li>
                            <li>
                                <a href="#">TUYỂN  DỤNG</a>
                            </li>
                            <li>
                                <a href="#">TIN TỨC</a>
                            </li>
                        </ul>
                    </Menu>
                </MenuWrapper>
            </HeaderContainer>
            <MenuMobile 
                background={variable.MAIN_COLOR}
                colorLine={variable.WHITE_COLOR}
            />
        </React.Fragment>
    );
};

const HeaderContainer = styled.section `
    display: flex;
    justify-content: space-between;
    margin: 24px 0px;
    @media (max-width: ${variable.SM_MAX}) {
        justify-content: center;
    }
`;

const LogoWrapper = styled.div `
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div `
    width: ${variable.LOGO_WIDTH};
    height: ${variable.LOGO_HEIGHT};
    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoText = styled.div `
    margin-left: 25px;
    text-align: center;

    .logo {
        font-family: 'OSB', sans-serif;
        font-size: 28px;
        color: ${variable.MAIN_COLOR};
        position: relative;
        z-index: 1;
    }

    .logo::after{
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        transform: translate(-50%, 0);
        z-index: 2;
        width: 90%;
        height: 1px;
        background-color: ${variable.THIRD_COLOR};
    }

    p {
        font-family: 'OSM', sans-serif;
        font-size: 18px;
        color: ${variable.SECOND_COLOR};
        margin-top: 5px;
    }

    @media (max-width: ${variable.MD_MAX}) {
        .logo {
            font-size: 22px;
        }
        p {
            font-size: 12px;
        }
    }
    @media (max-width: 420px) {
        .logo {
            font-size: 20px;
        }
   
    }
`;

const MenuWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: ${variable.SM_MAX}) {
        display: none;
    }
`;

const Hotline = styled.div `
    display: flex; 
    justify-content: flex-end;
    font-family: 'OSB', sans-serif;
    font-size: 20px;
    line-height: 1;
    color: ${variable.MAIN_COLOR};
    img {
        width: ${variable.ICON_WIDTH};
        height: ${variable.ICON_HEIGHT};
    }
`;

const Middle = styled.span `
    padding: 0px 4px 0px 8px;
`;

const Phone = styled.a `
    text-decoration: none;
    color: ${variable.RED_COLOR};
`;
const paddingMargin = '24px';
const Menu = styled.div `
    margin-bottom: ${paddingMargin};
    
    &.menu_fixed {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%; 
        z-index: 1000;
        background-color: ${variable.BLACK_COLOR};
        transition: all linear 500ms;
        ul {
            justify-content: center;
            li a {
                display: block;
                background-color: inherit;
            }
        }
    }

    ul {
        display: flex;
        list-style-type: none;
        position: relative;
        &:after {
            content: "";
            width: 0;
            height: 0;
            border-top: 72px solid ${variable.MAIN_COLOR};
            border-left: 72px solid transparent;
            position: absolute;
            right: 100%;
            top: -${paddingMargin};
        }
    }
    ul li a {
        text-decoration: none;
        font-family: 'OSB', sans-serif;
        font-size: 16px;
        line-height: 1;
        padding: ${paddingMargin} 22px;
        color: ${variable.WHITE_COLOR};
        background-color: ${variable.MAIN_COLOR};
    }
    @media (max-width: ${variable.MD_MAX}) {
        ul {
            &:after {
                display: none;
            }
        }
        ul li a {
            font-size: 12px;
            padding: ${paddingMargin} 16px;
        }
    }
`;

export default Header;