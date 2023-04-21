import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CardCpn = (props) => {
    const {
        img,
        heightImg,
        alt,
        title,
        content,
        cardStyle,
        titleStyle,
        contentStyle,
        bodyStyle,
        button,
    } = props;

    return (
        <Card sx={{ maxWidth: '100%'}}  style={{
            ...cardStyle
        }}>
            <CardActionArea>
                <CardMedia 
                    component={'img'}
                    height={heightImg}
                    image={img}
                    alt={alt}
                />
                <CardContent style={{
                    ...bodyStyle
                }}>
                    <CardTitle style={{
                        ...titleStyle
                    }}>
                        {title}
                    </CardTitle>
                    <CardBody
                        style={{
                            ...contentStyle
                        }}
                    >
                        {content}
                    </CardBody>
                </CardContent>
                {!!button && button}
            </CardActionArea>
        </Card>
    );
};

const CardTitle = styled.h5`

`;
const CardBody = styled.p`

`;

export default CardCpn;