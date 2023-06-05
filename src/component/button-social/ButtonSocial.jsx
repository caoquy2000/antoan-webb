import React from "react";

const ButtonSocial = (props) => {
    return (
        <>
            <div class="float-contact" style={{
                 position: 'fixed',
                 bottom: '40px',
                 right: '40px',
                 zIndex: '99999',
                 textAlign: 'left',
            }}>
                <div class="zalo" style={{
                    marginBottom: '20px',
                }}>
                    <a href="https://zalo.me/0937669977" target="blank">
                        <img alt="zalo" src="/img/zalo-icon.png" className="icon_zalo"
                           
                        />
                    </a>
                </div>

                <div class="hotline">
                    <a href="tel:0937669977">
                        <img alt="hotline" src="/img/phone-icon.png" className="icon_phone"
                           
                        />
                    </a>
                </div>
            </div>

            <style jsx>
                {
                    `
                    .float-contact {
                        position: fixed;
                        bottom: 40px;
                        right: 40px;
                        z-index: 99999;
                        text-align: left;
                    }
                    .icon_zalo {
                        width: 80px;
                        height: 80px;
                    }
                    .icon_phone {
                        width: 80px;
                        height: 80px;
                    }
                    @media (min-width: 1025px) {
                        .float-contact {
                            position: fixed;
                            bottom: 40px;
                            right: 40px;
                            z-index: 99999;
                            text-align: left;
                        }
                        .chat-face, .hotline, .zalo, .face {
                            overflow: hidden;
                            border: none !important;
                            background: none !important;
                        }   
                        .chat-face a, .hotline a, .zalo a, .face a {
                            display: block;
                            margin-bottom: 6px;
                        }
                        .chat-face a:hover, .hotline a:hover, .zalo a:hover, .face a:hover {
                            background: #137b00;
                            color: #fff;
                            text-decoration: none;
                        }
                        .chat-face a img, .hotline a img, .zalo a img, .face a img {
                            display: block;
                            margin: auto;
                        }
                        .chat-face a, .hotline a, .zalo a, .face a {
                            color: #000;
                            text-align: center;
                            display: block;
                            font-size: 10px;
                        }   
                    }
                        
                    @media (max-width: 1024px) {
                        .float-contact {
                            position: fixed;
                            bottom: 0px;
                            z-index: 99999;
                            display: flex;
                            background: linear-gradient(#fff,#137b00);
                            width: 100%;
                            height: 63px;
                        }
                        .icon_zalo {
                            width: 40px;
                            height: 40px;
                        }
                        .icon_phone {
                            width: 40px;
                            height: 40px;
                        }
                        .face, .chat-face, .zalo, .hotline {
                            width: 25%;
                            text-align: center;
                            margin: auto;
                            border-left: 1px solid #fff;
                            border-right: 1px solid #fff;
                        }
                        .face a img, .chat-face a img, .zalo a img, .hotline a img {
                            display: block;
                            margin: 5px auto 5px;
                        }
                        .face a, .chat-face a, .zalo a, .hotline a {
                            color: #fff;
                            font-size: 13px;
                        }
                    
                    }
                        
                    `
                }
            </style>
        </>
    );
};

export default ButtonSocial;