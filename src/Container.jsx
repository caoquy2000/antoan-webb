import Header from "component/header/Header";
import React from "react";
import styled from "styled-components";
import * as reponsive from "common/variable";

const ContainerWrapper = styled.div `
    width: ${reponsive.CONTAINER_WIDTH};
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    
    @media (max-width: ${reponsive.LG_MAX}) {
        max-width: ${reponsive.CONTAINER_WIDTH};
    }

    @media (max-width: ${reponsive.MD_MAX}) {
        max-width: ${reponsive.MD_WIDTH};
    }

    @media (max-width: ${reponsive.SM_MAX}) {
        max-width: ${reponsive.SM_WIDTH};
    }

    @media (max-width: ${reponsive.XS_MAX}) {
        max-width: ${reponsive.XS_WIDTH};
    }

    @media (max-width: ${reponsive.XXS_MAX}) {
        max-width: ${reponsive.XXS_WIDTH};
    }
`;

const Container = ({page}) => {
    return (
        <ContainerWrapper>
            <Header />
            <React.Fragment>
                {page}
            </React.Fragment>
        </ContainerWrapper>
    );
};

export default Container;