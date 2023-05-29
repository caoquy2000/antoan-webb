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
                        <a href="/trang-chu.html" className="first-item">TRANG CHỦ</a>
                    </li>
                    <li>
                        <a href="/gioi-thieu.html">GIỚI THIỆU</a>
                    </li>
                    <li>
                        <a href="/dich-vu.html">DỊCH VỤ</a>
                    </li>
                    <li>
                        <a href="/bao-gia.html">BÁO GIÁ</a>
                    </li>
                    <li>
                        <a href="/tuyen-dung.html">TUYỂN  DỤNG</a>
                    </li>
                    <li>
                        <a href="/cong-viec-bao-ve.html">TIN TỨC</a>
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
        top: 10%;
        left: 0;
    }   
    @media (max-width: 420px) {
        top: 15%;
    }
`;

const MenuMobileWrapper = styled.div `
    position: relative;
`;

const MenuChecker = styled.input `
    position: absolute;
    top: 0;
    left: 0;
    height: 3rem;
    width: 3rem;
    opacity: 0;
    z-index: 9;
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
        transform: translateX(100%);
        opacity: 1;
        pointer-events: auto;
    }
`;

const MenuHamm = styled.div `
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem;
    z-index: 8;
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
    z-index: 7;
    transform: translateX(0);
    transition: transform 100ms ease-in-out, opacity 200ms;
    pointer-events: none;
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
    @media (max-width: 500px) {
        li a {
            font-size: 22px;
        }
    }
`;

export default MenuMobile;