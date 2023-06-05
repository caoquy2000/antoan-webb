import { ContainerWrapper } from "Container";
import BannerHotline from "component/banner-hotline/BannerHotline";
import BannerSendPhone from "component/banner-send-phone/BannerSendPhone";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import * as variable from 'common/variable';

const ServiceDetail3 = (props) => {
    return (
        <>
            <Head>
                <title>
                    {
                        serviceDetail3.title
                    }
                </title>
                <meta name="description"  content={serviceDetail3.metaDescription} />
            </Head>
            <ContainerWrapper>
                <ContentWrapperWWW>
                    <ContentText4>
                        <h2 style={{
                                textAlign: 'center',
                                padding: '20px 0px',
                            }}>Giới thiệu về Công ty Bảo Vệ An Toàn
                            </h2>
                         <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Công ty Cổ phần Dịch vụ Bảo Vệ An Toàn được thành lập từ năm 2013 là công ty uy tín hàng đầu trong lĩnh vực cung cấp <b>dịch vụ bảo vệ an ninh chuyên nghiệp</b> tại TPHCM. Chúng tôi có bề dày kinh nghiệm hơn 10 năm với quy trình làm việc bài bản, đội ngũ nhân sự chất lượng cao, đa dạng dịch vụ, áp dụng công nghệ hiện đại trong công tác quản lý giám sát giúp mang đến giải pháp đảm bảo an toàn tối ưu nhất cho khách hàng.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/gioi-thieu-bao-ve-an-toan-01.jpg" 
                                alt="Dich vu bao ve yeu nhan 1" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Công ty Bảo Vệ An Toàn - Công ty bảo vệ tốt nhất TPHCM</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            paddingBottom: '20px',
                        }}>
                          Từ một công ty non trẻ trong lĩnh vực cung cấp nhân sự bảo vệ, đến nay Công ty Bảo Vệ An Toàn đã xây dựng được uy tín nhất định đối với khách hàng bởi phong cách làm việc cực kỳ chuyên nghiệp, cung cấp gói dịch vụ với chi phí phải chăng, đem lại giá trị thực cho khách hàng với tầm nhìn, sứ mệnh và giá trị cốt lõi rõ ràng.
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Về Tầm nhìn: Trở thành <b>công ty bảo vệ uy tín</b> hàng đầu tại TPHCM nói riêng cũng như mở rộng ra cả nước.</li>
                            <li>Về Sứ mệnh: Công ty Bảo Vệ An Toàn hướng đến cung cấp dịch vụ bảo vệ chất lượng tốt nhất, đáp ứng đúng nhu cầu của khách hàng.</li>
                            <li>Về Giá trị cốt lõi: “An toàn - Chuyên nghiệp - Đạo đức - Đổi mới” là phương châm mà Công ty Cổ phần Dịch vụ Bảo Vệ An Toàn hướng đến kể từ khi thành lập cho đến nay. Bên cạnh việc cung cấp <i>dịch vụ bảo vệ chất lượng</i>, uy tín, chúng tôi cũng không ngừng tiếp thu và cải tiến để có thể nâng cao hiệu suất công việc và trải nghiệm của khách hàng.</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/gioi-thieu-bao-ve-an-toan-02.jpg" 
                                alt="Dich vu bao ve yeu nhan 1" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Bảo Vệ An Toàn tận tâm phục vụ khách hàng</figcaption>
                        </figure>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Đội ngũ nhân sự Công ty Bảo Vệ An Toàn
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                          Đội ngũ nhân sự của Công ty Bảo Vệ An Toàn là yếu tố cốt lõi giúp cho công ty có thể phát triển mạnh đến ngày hôm nay và khẳng định được vị trí trong lòng khách hàng với <i>dịch vụ bảo vệ uy tín</i> hàng đầu.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/gioi-thieu-bao-ve-an-toan-03.jpg" 
                                alt="Dich vu bao ve yeu nhan 3" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Đội ngũ bảo vệ chuyên nghiệp Công ty Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            marginBottom: '20px',
                        }}>
                          Bà Lê Hồng Thúy - Giám đốc Công ty Cổ phần Dịch vụ Bảo Vệ An Toàn tốt nghiệp Đại học chuyên ngành Kinh tế, đã có nhiều năm kinh nghiệm trong lĩnh vực cung ứng nhân sự chất lượng cao. CEO Lê Hồng Thúy cũng từng hoàn thành xuất sắc các khóa đào tạo Giám đốc điều hành, Giám đốc nhân sự, Giám đốc tài chính, Giám đốc kinh doanh tại trường doanh nhân.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                          Ngay từ đầu khi lựa chọn nhân sự cơ cấu vào đội ngũ lãnh đạo của công ty, CEO Hồng Thúy đã khẳng định rằng phải tuyển chọn thật kỹ lưỡng. Vậy nên hàng ngũ lãnh đạo hiện nay đều là những nhân vật có học vấn “khủng”, có đầu óc kinh doanh, đam mê sáng tạo và tận tâm phụng sự khách hàng.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/gioi-thieu-bao-ve-an-toan-04.jpg" 
                                alt="Dich vu bao ve yeu nhan 3" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Nhân sự bảo vệ được tuyển dụng kỹ lưỡng</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                          Đạt đến con số hàng nghìn khách hàng đã tin tưởng và lựa chọn, <b>Công ty Bảo Vệ An Toàn</b> đã cho thấy được con đường đi đúng đắn của đội ngũ lãnh đạo, trong đó có vai trò rất lớn của Giám đốc Lê Hồng Thúy - Người phụ nữ đã chèo lái đưa công ty phát triển lên tầm cao mới.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Các dịch vụ bảo vệ của Công ty Bảo Vệ An Toàn
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Công ty Bảo Vệ An Toàn hiện nay đang cung cấp các gói dịch vụ bảo vệ tốt nhất tại TPHCM và các tỉnh thành lân cận cụ thể như:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Dịch vụ bảo vệ công ty, xí nghiệp, nhà máy</li>
                            <li>Cung ứng <i>nhân sự bảo vệ kho hàng</i>, nhà xưởng</li>
                            <li>Cung cấp dịch vụ bảo vệ tòa nhà văn phòng</li>
                            <li>Dịch vụ bảo vệ ngân hàng</li>
                            <li>Dịch vụ bảo vệ căn hộ chung cư</li>
                            <li>Cung cấp <b>dịch vụ bảo vệ siêu thị</b>, cửa hàng tiện lợi, trung tâm thương mại, khu mua sắm</li>
                            <li>Dịch vụ bảo vệ trường học, bệnh viện</li>
                            <li>Giải pháp dịch vụ bảo vệ sự kiện, chương trình văn nghệ, buổi biểu diễn, họp báo, triển lãm, lễ hội</li>
                            <li>Chuyên cung cấp dịch vụ bảo vệ quán cafe, quán ăn uống, nhà hàng, cửa hàng</li>
                            <li>Gói <i>dịch vụ bảo vệ giữ xe</i>, giám sát an ninh</li>
                            <li>Dịch vụ bảo vệ cá nhân và các địa điểm cố định theo yêu cầu của khách hàng</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/gioi-thieu-bao-ve-an-toan-05.jpg" 
                                alt="Gioi thieu dich vu bao ve an toan" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Các dịch vụ bảo vệ chuyên nghiệp mà Bảo Vệ An Toàn cung cấp</figcaption>
                        </figure>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Lý do nên lựa chọn dịch vụ bảo vệ chuyên nghiệp của Bảo Vệ An Toàn
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Danh sách các công ty bảo vệ tại TPHCM hiện nay có thể thấy là rất nhiều, tuy nhiên đâu là <b>công ty bảo vệ uy tín đáng tin cậy</b> cho bạn lựa chọn? Công ty Bảo Vệ An Toàn tự tin khẳng định sẽ mang đến giải pháp bảo vệ tốt nhất cho bạn với nhiều ưu điểm vượt trội so với đối thủ. Cụ thể đó là những lý do mà các bạn nên lựa chọn chúng tôi như sau:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Có nhiều năm kinh nghiệm: Với hơn 10 năm kinh nghiệm trong nghề, Bảo Vệ An Toàn dần trở thành cái tên uy tín hàng đầu trong lĩnh vực cung ứng <i>nhân sự bảo vệ chất lượng cao tại TPHCM</i> và các khu vực lân cận.</li>
                            <li>Quy trình làm việc chuyên nghiệp: Sau rất nhiều năm hoạt động, công ty đã xây dựng nên quy trình làm việc chuyên nghiệp, nhanh gọn giúp mang đến sự tin tưởng và hài lòng từ khách hàng ngay từ ban đầu.</li>
                            <li>Hợp đồng và cam kết rõ ràng: Chúng tôi làm việc theo hợp đồng và sẵn sàng chịu trách nhiệm theo những gì đã giao kết của các bên. Chúng tôi cam kết bồi thường thiệt hại 100% với bảo hiểm lên đến 2 tỷ đồng đối với bất kỳ vấn đề nào khi khách hàng sử dụng <b>dịch vụ bảo vệ chuyên nghiệp</b> của công ty.</li>
                            <li>Chất lượng nhân sự tốt: Bảo Vệ An Toàn rất kỹ lưỡng trong khâu tuyển chọn đầu vào nên đảm bảo nhân viên có lý lịch rõ ràng, đa phần là bộ đội xuất ngũ có sức khỏe đảm bảo.</li>
                            <li>Đa dạng <i>dịch vụ bảo vệ chuyên nghiệp tại TPHCM</i>: Công ty cung cấp các dịch vụ bảo vệ tòa nhà, xí nghiệp, bệnh viện, trường học, ngân hàng, giữ xe… từ cơ bản đến cao cấp, theo nhu cầu riêng của khách hàng nên bạn không phải mất thời gian tìm kiếm.</li>
                            <li>Áp dụng công nghệ hiện đại: Thành công của chúng tôi cũng đến từ việc luôn cập nhật công nghệ mới nhất để áp dụng trong công việc giúp tăng hiệu quả giám sát an ninh, đảm bảo an ninh luôn được kiểm soát tốt.</li>

                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/gioi-thieu-bao-ve-an-toan-06.jpg" 
                                alt="Gioi thieu cong ty bao ve an toan" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Lý do nên chọn dịch vụ bảo vệ TPHCM của Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Khách hàng nổi bật đã sử dụng dịch vụ bảo vệ uy tín của Bảo Vệ An Toàn
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Trong nhiều năm qua, công ty Bảo Vệ An Toàn rất tự hào khi trở thành đối tác của nhiều khách hàng lớn nhỏ với rất nhiều hợp đồng hợp tác với:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Chung cư M - One Gia Định, Khu Chung cư cao cấp Masteri Thảo Điền, Chung cư Tecco, Chung cư Xi Grand Court Quận 10…</li>
                            <li>Hợp đồng cung ứng <b>dịch vụ bảo vệ uy tín</b> cho Công ty Rita Võ, Công ty cổ phần Giấy CP, Công ty Bất động sản Yeshouse, Công ty Cổ phần Nhà Sách Fahasa… cùng với nhiều công ty tại các khu công nghiệp lớn như KCN Lê Minh Xuân, KCN Tân Tạo, KCN Vĩnh Lộc…</li>
                            <li>Là đối tác chuyên cung cấp <i>dịch vụ bảo vệ chuyên nghiệp</i> tại các trường học, bệnh viện, spa, nhà hàng, shop thời trang… tại các quận huyện TPHCM và khu vực giáp ranh như Long An, Bình Dương, Đồng Nai</li>
                        </ul>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            <img 
                                src="./img/gioi-thieu-bao-ve-an-toan-07.jpg" 
                                alt="Gioi thieu cong ty bao ve" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Bảo vệ tập huấn tại chung cư khách hàng của Công ty Bảo Vệ An Toàn</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Với chất lượng dịch vụ đảm bảo, đội ngũ nhân sự <i>bảo vệ chuyên nghiệp</i>, được đào tạo bài bản với hệ thống trang thiết bị hiện đại, <b>Công ty Bảo Vệ An Toàn</b> hứa hẹn mang đến giải pháp bảo vệ, giám sát an ninh toàn diện cho quý khách hàng gần xa. Là <i>công ty dịch vụ bảo vệ uy tín</i> hàng đầu tại TPHCM, Bảo Vệ An Toàn luôn không ngừng nỗ lực để nâng cao trải nghiệm khách hàng, tạo ra nhiều giá trị thực tế giúp quý khách yên tâm hơn khi lựa chọn đơn vị cung ứng nhân sự bảo vệ.
                        </p>
                        <style jsx>
                            {
                                `
                                    ul li {
                                        padding-bottom: ${variable.paddingULLI};
                                    }
                                `
                            }
                        </style>
                    </ContentText4>
                    <ContentBanner4>
                            <BannerHotline />
                            <SendPhoneWrapper4>
                                <BannerSendPhone />
                            </SendPhoneWrapper4>
                    </ContentBanner4>
                </ContentWrapperWWW>
            </ContainerWrapper>
        </>
    );
};

const serviceDetail3 = {
    title: 'Giới Thiệu Công Ty TNHH Bảo Vệ An Toàn',
    metaDescription: 'Công ty Bảo Vệ An Toàn với hơn 10 năm hoạt động là một trong những công ty bảo vệ uy tín hàng đầu tại TPHCM với đa dạng các dịch vụ bảo vệ như dịch vụ bảo vệ cá nhân, dịch vụ bảo vệ nhà máy, dịch vụ bảo vệ sự kiện, dịch vụ bảo vệ giữ xe, giám sát an ninh…',
    bodyContent: '',
};

const ContentWrapperWWW = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

const ContentText4 = styled.div`
    width: 55%;
    padding: 0px 40px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 600px) {
        padding: initial;
    }
`;

const ContentBanner4 = styled.div`
    width: 45%;
    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const SendPhoneWrapper4 = styled.div`
    margin-top: 15px;
    @media (max-width: 1000px) {
        margin-bottom: 15px;
    }
`;

export default ServiceDetail3;