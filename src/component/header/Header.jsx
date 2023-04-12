import styled from "styled-components";
import * as variable from 'common/variable';

const Header = (props) => {
    return (
        <HeaderContainer>
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
                    <span>HOTLINE:</span>
                    <span>0914.68.2423</span>
                </Hotline>
                <Menu>
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
    );
};

const HeaderContainer = styled.section `
    display: flex;
    justify-content: space-between;
    margin: 24px 0px;
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
`;

const MenuWrapper = styled.div `
`;

const Hotline = styled.div `
    display: flex; 
    justify-content: flex-end;
    img {
        width: ${variable.ICON_WIDTH};
        height: ${variable.ICON_HEIGHT};
    }
`;

const Menu = styled.div `
    ul {
        display: flex;
        list-style-type: none;
    }
    ul li a {
        text-decoration: none;
    }
`;

export default Header;