import styled from "styled-components";
import * as reponsive from "common/variable";

const ContainerWrapper = styled.div `
    width: ${reponsive.CONTAINER_WIDTH};
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
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

const ContainerFuildWrapper = styled.div`
    width: ${reponsive.CONTAINER_FUILD};
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

const ImageWrapper = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    aligin-items: center;
    img {
        width: 100%;
        height: 100%;
        margin: auto;
        display: block;
    }
`;

export {ContainerWrapper, ContainerFuildWrapper, ImageWrapper};