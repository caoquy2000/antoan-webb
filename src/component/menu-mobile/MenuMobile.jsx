import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const MenuMobile = (props) => {
    return (
        <MenuMobileContainer>
            <MenuMobileWrapper>
                <MenuChecker type="checkbox" name="checkerMb" id="checkerMobile" className="check" />
                <MenuHamm className="menu-hamm">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </MenuHamm>
                <MenuItem className="menu-items">
                    <li>
                        <a href="#" className="first-item">TRANG CHỦ</a>
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
                </MenuItem>
            </MenuMobileWrapper>
        </MenuMobileContainer>
    );
};

const MenuMobileContainer = styled.div`
    display: none;
    @media (max-width: ${variable.SM_MAX}) {
        display: initial;
        position: absolute;
        right: 0;
    }   
`;

const MenuMobileWrapper = styled.div `
    position: relative;
`;

const MenuChecker = styled.input `
    position: absolute;
    top: 0;
    right: 0;
    height: 3rem;
    width: 3rem;
    opacity: 0;
    z-index: 3;
    &:hover {
        cursor: pointer;
    }
    &:checked~.menu-hamm {
        background-color: ${variable.RED_COLOR};
    }
    &:checked~.menu-hamm .line {
        width: 2.3rem;
    }
    &:checked~.menu-hamm .line1 {
        display: block;
        transform: rotate(45deg);
    }
    &:checked~.menu-hamm .line2 {
        opacity: 0;
    }
    &:checked~.menu-hamm .line3 {
        display: block;
        transform: rotate(-45deg);
    }
    &:checked~.menu-items {
        display: block;
        transform: translateX(0%);
        opacity: 1;
    }
`;

const MenuHamm = styled.div `
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${variable.MAIN_COLOR};
    border-radius: 0.25em;
    .line {
        background-color: white;
        border-radius: 1em;
        width: 2rem;
        height: 0.25rem;
    }
    .line1 {
        transform-origin: 4px 5px;
        transition: transform 100ms ease-in-out;
    }
    .line3 {
        transform-origin: 3px 0px;
        transition: transform 100ms ease-in-out;
    }
`;

const MenuItem = styled.ul `
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    list-style: none;
    opacity: 0;
    font-size: 2rem;
    border: 4px solid ${variable.MAIN_COLOR};
    background-color: ${variable.MAIN_COLOR};
    border-radius: 0.25em;
    transform: translateX(10%);
    transition: transform 100ms ease-in-out, opacity 200ms;
    li a {
        text-decoration: none;
        color: ${variable.WHITE_COLOR};
        padding: 10px 40px;
        display: inline-block;
        white-space: nowrap;
    }
    li .first-item {
        margin-top: 35px;
    }
`;

export default MenuMobile;