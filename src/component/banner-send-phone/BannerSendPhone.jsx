import React, { useState } from "react";
import styled from "styled-components";
import * as variable from 'common/variable';
import TextField from '@mui/material/TextField';

const BannerSendPhone = (props) => {
    const [phone, setPhone] = useState('');

    return (
        <BannerSendPhoneWrapper>
            <BannerSendPhoneTop>
                <Label>
                    Để Lại Phone: 
                </Label>
                <TextField 
                    id="standard-basic" 
                    variant="standard" 
                    value={phone} onChange={(e) => setPhone(e.target.value)} 
                    sx={{ 
                        input: { 
                            color: variable.WHITE_COLOR,
                            fontSize: 18,

                        },
                        padding: '0px 8px',
                    }}    
                />
                <div className="button">
                    Gửi 
                </div>
            </BannerSendPhoneTop>
            <BannerSendPhoneBottom>
                <span>
                    Quý khách sẽ được tư vấn dịch vụ và chăm sóc khách hàng trong ít phút.
                </span>
            </BannerSendPhoneBottom>
        </BannerSendPhoneWrapper>
    );
};

const BannerSendPhoneWrapper = styled.div`
    background-color: ${variable.MAIN_COLOR};
    color: ${variable.WHITE_COLOR};
    padding: 60px 55px;
    @media (max-width: 1400px) {
        padding: 60px 20px;
    }
`;

const BannerSendPhoneTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .button {
        font-family: 'OSB';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 39px;
        padding: 3px 30px;
        background: #85C7D6;
        cursor: pointer;
        border-radius: 4px;
    }
    @media (max-width: 550px) {
        flex-wrap: wrap;
        .button {
            margin-top: 20px;
        }
    }
`;

const Label = styled.span`
    display: inline-block;
    font-family: 'OSB';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 44px;
`;

const BannerSendPhoneBottom = styled.div`
    text-align: center;
    padding-top: 35px;
    span {  
        display: inline-block;
        font-family: 'OSB';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 30px;
    }
`;

export default BannerSendPhone;