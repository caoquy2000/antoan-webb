import React from "react";
import styled from "styled-components";

const TextBox = (props) => {
    const {
        tagTitle, // h2, h3, h4
        titleStyle,
        titleContent, 
        bodyStyle,
        bodyContent1,
        bodyContent2,
    } = props;
    const _renderTitleNode = () => {
        let titleNode;
        switch (tagTitle) {
            case 'h2': {
                titleNode = (
                    <h2 style={{...titleStyle}}
                        className="title_textbox"
                    >
                        {titleContent}
                    </h2>
                );
                break;
            } 
            case 'h3': {
                titleNode = (
                    <h3 style={{...titleStyle}}
                        className="title_textbox"
                    >
                        {titleContent}
                    </h3>
                );
                break;
            } 
            case 'h4': {
                titleNode = (
                    <h4 style={{...titleStyle}}
                        className="title_textbox"
                    >
                        {titleContent}
                    </h4>
                );
                break;
            } 
            default: 
                break;
        }
        return (
            <React.Fragment>
                {titleNode}
            </React.Fragment>
        );
    };

    const _renderContentNode = () => {
        let bodyNode1 = (
            bodyContent1 && <p style={{...bodyStyle, marginBottom: '6px'}}
                className="content_textbox"
            >
                {bodyContent1}
            </p>    
        );
        let bodyNode2 = (
            bodyContent2 && <p style={{...bodyStyle}} 
            className="content_textbox">
                {bodyContent2}
            </p>    
        );
        return (
            <React.Fragment>
                {bodyNode1}
                {bodyNode2}
            </React.Fragment>
        );
    };

    return (
        <TextBoxWrapper>
            {_renderTitleNode()}
            {_renderContentNode()}
        </TextBoxWrapper>
    );
};

const TextBoxWrapper = styled.div`

`;

export default TextBox;