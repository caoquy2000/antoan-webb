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
                            }}>Cùng tìm hiểu nhân viên bảo vệ là ai?
                            </h2>
                         <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <b>Nhân viên bảo vệ</b> là một người được thuê để bảo vệ tài sản, con người hoặc tài sản của một tổ chức hoặc cá nhân khác khỏi các mối đe dọa, nguy hiểm hoặc vi phạm an ninh. Công việc của một nhân viên bảo vệ bao gồm giám sát và kiểm soát lối vào và ra khỏi tòa nhà, khu vực hay cơ sở của tổ chức hoặc cá nhân. Họ có thể được yêu cầu thực hiện các nhiệm vụ như giám sát hệ thống an ninh, đóng cửa hay mở cửa, kiểm tra chứng minh thư, tìm kiếm vật phẩm cấm hoặc <b>nhân viên trực camera</b> an ninh.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/cong-viec-bao-ve-01.jpg" 
                                alt="Cong viec bao ve la gi" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Nhân viên bảo vệ là một người được thuê để bảo vệ tài sản</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                          Một nhân viên bảo vệ phải có khả năng làm việc độc lập hoặc trong nhóm, thường làm việc vào các ca làm việc không thường xuyên và có khả năng làm việc trong môi trường áp lực cao. Họ cũng phải có kỹ năng giao tiếp tốt để xử lý các tình huống khó khăn và đưa ra quyết định nhanh chóng.
                        </p>
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                           Bản mô tả công việc bảo vệ chính xác và chi tiết nhất
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                          Sau đây là bản <b>mô tả công việc bảo vệ</b> chính xác và chi tiết nhất:
                        </p>
                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '20px',
                            padding: '20px 0px',
                        }}>
                           Nhiệm vụ và trách nhiệm chính của một nhân viên bảo vệ
                        </h4>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Một nhân viên bảo vệ có nhiệm vụ và trách nhiệm chính là đảm bảo an ninh và an toàn cho tòa nhà, khuôn viên, cơ sở hoặc các tài sản khác mà anh ta được giao trách nhiệm bảo vệ. Cụ thể, những nhiệm vụ và trách nhiệm của một nhân viên bảo vệ bao gồm:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Thực hiện các vòng tuần tra định kỳ trong toàn bộ tòa nhà/khu vực bảo vệ để đảm bảo an ninh và giám sát các khu vực nhạy cảm.</li>
                            <li>Kiểm tra và bảo đảm an toàn cho các thiết bị an ninh như camera giám sát, cổng an ninh, hệ thống chữa cháy và các thiết bị khác.</li>
                            <li><b>Quy định thời gian trực bảo vệ.</b></li>
                            <li>Kiểm tra và bảo vệ các cửa vào và ra của tòa nhà/khu vực bảo vệ.</li>
                            <li>Theo dõi và giám sát tình hình qua camera giám sát và đảm bảo người và phương tiện đi vào và ra khỏi tòa nhà/khu vực bảo vệ được kiểm soát.</li>
                            <li>Truyền thông và báo cáo các vấn đề bảo mật cho quản lý và <b>nhân viên bảo vệ khác.</b></li>
                            <li>Tư vấn và giám sát nhân viên và khách hàng khi đi vào và ra khỏi tòa nhà/khu vực bảo vệ, đảm bảo tuân thủ quy định về an ninh và an toàn.</li>
                            <li>Đảm bảo việc giữ gìn vệ sinh và bảo trì các khu vực công cộng, bao gồm cả khu vực bên ngoài tòa nhà/khu vực bảo vệ.</li>
                            <li>Thực hiện các công việc khác liên quan đến an ninh và an toàn theo yêu cầu của quản lý.</li>
                        </ul>
                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '20px',
                            padding: '20px 0px',
                        }}>
                           Yêu cầu kỹ năng mà một nhân viên bảo vệ cần có
                        </h4>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Một nhân viên bảo vệ cần có nhiều kỹ năng khác nhau để thực hiện nhiệm vụ của mình một cách hiệu quả. Dưới đây là một số yêu cầu kỹ năng cơ bản mà một nhân viên bảo vệ cần phải có:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Có khả năng làm việc độc lập và làm việc nhóm.</li>
                            <li>Có khả năng giải quyết vấn đề nhanh chóng và hiệu quả.</li>
                            <li>Có khả năng giao tiếp tốt và lịch sự với khách hàng và nhân viên.</li>
                            <li>Có kỹ năng sử dụng các công cụ bảo mật như camera giám sát, cổng an ninh, hệ thống chữa cháy và các thiết bị khác.</li>
                            <li>Có khả năng quản lý tình huống và phản ứng nhanh trong trường hợp khẩn cấp.</li>
                        </ul>

                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '20px',
                            padding: '20px 0px',
                        }}>
                           Kinh nghiệm và quy trình bảo vệ
                        </h4>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Kinh nghiệm và quy trình bảo vệ là hai yếu tố quan trọng để đảm bảo an ninh và an toàn cho các khu vực, cơ sở hoặc tài sản. Dưới đây là một số thông tin về kinh nghiệm và quy trình bảo vệ:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Hiểu biết về các quy trình và quy định về an ninh và bảo vệ.</li>
                            <li>Thực hiện các quy trình kiểm tra an ninh và an toàn theo hướng dẫn của quản lý.</li>
                            <li>Báo cáo các sự cố hoặc vấn đề liên quan đến an ninh và an toàn đến quản lý hoặc đội ngũ bảo vệ khác để xử lý.</li>
                        </ul>

                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '20px',
                            padding: '20px 0px',
                        }}>
                          Các điều kiện làm việc của nhân viên bảo vệ
                        </h4>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Các điều kiện làm việc của nhân viên bảo vệ là yếu tố quan trọng để đảm bảo sức khỏe và sự an toàn của nhân viên khi làm việc. Dưới đây là một số điều kiện làm việc cần thiết cho nhân viên bảo vệ:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Có thể phải làm việc trong môi trường nhiều ồn ào hoặc khói bụi.</li>
                            <li>Có thể phải làm việc ngoài trời trong các điều kiện thời tiết khắc nghiệt.</li>
                            <li>Có thể phải làm việc ca đêm, cuối tuần hoặc ngày lễ.</li>
                        </ul>

                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '20px',
                            padding: '20px 0px',
                        }}>
                          Môi trường làm việc của nhân viên bảo vệ
                        </h4>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Môi trường làm việc của nhân viên bảo vệ có thể đa dạng và phụ thuộc vào nhiều yếu tố như địa điểm, loại công việc, độ tuổi của nhân viên,... Dưới đây là một số thông tin chung về môi trường làm việc của nhân viên bảo vệ:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Các khu vực công cộng như khách sạn, sân bay, bệnh viện hoặc trung tâm thương mại.</li>
                            <li>Các khu vực độc quyền như các tòa nhà văn phòng, khu chung cư cao cấp hoặc khu biệt thự.</li>
                            <li>Các khu vực công nghiệp hoặc khu chế xuất.</li>
                        </ul>

                        <h4 style={{
                            fontFamily: 'OSB',
                            fontSize: '20px',
                            padding: '20px 0px',
                        }}>
                         Các kỹ năng cần có để làm nhân viên bảo vệ hiệu quả
                        </h4>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Để làm công việc bảo vệ hiệu quả, các nhân viên bảo vệ cần có những kỹ năng chuyên môn, nhân phẩm và kỹ năng mềm sau đây:
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/cong-viec-bao-ve-02.jpg" 
                                alt="Gioi thieu cong viec bao ve" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Để làm một nhân viên bảo vệ thì cần phải có những kỹ năng nhất định</figcaption>
                        </figure>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li><b>Kỹ năng giao tiếp</b>: Kỹ năng giao tiếp là rất quan trọng đối với các <b>nhân viên bảo vệ</b>, bởi vì họ cần phải liên lạc với nhiều người khác nhau, bao gồm cả khách hàng, cán bộ quản lý và các đồng nghiệp. Họ cần biết cách giao tiếp một cách rõ ràng, lịch sự và hiệu quả.</li>
                            <li><b>Kỹ năng quan sát</b>: Kỹ năng quan sát là một kỹ năng quan trọng đối với các nhân viên bảo vệ và <b>nhân viên trực camera</b>, bởi vì họ phải liên tục quan sát môi trường xung quanh để phát hiện các mối đe dọa và các hành vi bất thường.</li>
                            <li><b>Kỹ năng giải quyết vấn đề</b>: Kỹ năng giải quyết vấn đề là rất quan trọng đối với các <i>nhân viên bảo vệ</i>, bởi vì họ thường phải đối mặt với các tình huống khó khăn và phải tìm cách giải quyết các vấn đề một cách nhanh chóng và hiệu quả.</li>
                            <li><b>Kỹ năng tự vệ</b>: Kỹ năng tự vệ là một kỹ năng cần thiết đối với các <i>nhân viên bảo vệ</i>, bởi vì họ phải đối mặt với các tình huống nguy hiểm và phải biết cách tự vệ để bảo vệ mình.</li>
                            <li><b>Kỹ năng sử dụng vũ khí</b>: Nếu công việc yêu cầu, các <i>nhân viên bảo vệ</i> cần có kỹ năng sử dụng vũ khí một cách an toàn và hiệu quả.</li>
                        </ul>

                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                         Những điều cần lưu ý khi làm công việc bảo vệ để đạt được hiệu quả cao
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Làm công việc bảo vệ là một công việc đòi hỏi sự tập trung, cẩn trọng và kiên nhẫn. Để đạt được hiệu quả cao trong công việc, nhân viên cần lưu ý các điều sau:
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/cong-viec-bao-ve-03.jpg" 
                                alt="Cong viec bao ve" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Khi làm công việc bảo vệ phải có những điều cần hết sức lưu ý</figcaption>
                        </figure>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li><b>Nắm vững kiến thức và quy định liên quan đến công việc bảo vệ</b>: Nhân viên bảo vệ cần nắm vững các quy định, quy trình và luật pháp liên quan đến <b>công việc bảo vệ.</b></li>
                            <li><b>Điều chỉnh tư duy và thái độ</b>: Làm việc trong lĩnh vực bảo vệ đòi hỏi nhân viên phải sẵn sàng đối mặt với những tình huống khó khăn, nguy hiểm. Do đó, họ cần có thái độ tích cực, tự tin và bình tĩnh trong mọi tình huống.</li>
                            <li><b>Thực hiện công việc với sự tập trung cao độ</b>: Nhân viên bảo vệ cần tập trung cao độ vào công việc của mình cũng như <b><i>quy định thời gian trực bảo vệ</i></b>. Không nên phân tâm hay đánh giá chủ quan tình huống xảy ra, mà cần sử dụng tất cả các kỹ năng và kiến thức của mình để đảm bảo an toàn cho tất cả mọi người.</li>
                            <li><b>Luôn giữ liên lạc và tương tác với đồng nghiệp</b>: Làm việc trong một đội ngũ, nhân viên bảo vệ cần luôn giữ liên lạc và tương tác với đồng nghiệp của mình.</li>
                            <li><b>Đào tạo và cập nhật kiến thức</b>: Công việc bảo vệ là công việc đòi hỏi sự cập nhật kiến thức liên tục. Bảo vệ cần thường xuyên đào tạo và cập nhật kiến thức để đáp ứng tốt hơn với yêu cầu công việc.</li>
                            <li><b>Giao tiếp và hợp tác tốt</b>: Bảo vệ cần có khả năng giao tiếp và hợp tác tốt với đồng nghiệp và các bên liên quan. Việc này giúp tạo ra một môi trường làm việc hòa đồng, đoàn kết và hiệu quả.</li>
                            <li><b>Lưu ý về sổ bàn giao ca trực</b>: <b><i>Sổ bàn giao ca trực</i></b> là một tài liệu được sử dụng để ghi lại quá trình bàn giao công việc giữa các ca trực trong một tổ chức, đặc biệt là trong các lĩnh vực như y tế, an ninh, bảo vệ, vận chuyển và các lĩnh vực khác liên quan đến việc phải có sự thay đổi và chuyển giao công việc giữa các ca trực khác nhau.</li>
                        </ul>

                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                         Bảo Vệ An Toàn Security - Công ty cung cấp công việc bảo vệ chuyên nghiệp hàng đầu
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Bảo Vệ An Toàn Security là một trong những Công Ty Bảo Vệ An Toàn Cung Cấp Dịch Vụ Bảo Vệ Chuyên Nghiệp - Uy Tín - Giá Rẻ Hàng Đầu tại Việt Nam. Với nhiều năm kinh nghiệm trong lĩnh vực bảo vệ, chúng tôi đã xây dựng được một đội ngũ nhân viên bảo vệ chuyên nghiệp, tận tâm và có kinh nghiệm trong việc bảo vệ tài sản và sự an toàn của khách hàng.
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/cong-viec-bao-ve-04.jpg" 
                                alt="Cong viec bao ve" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Bảo Vệ An Toàn là một trong những công ty cung cấp dịch vụ bảo vệ hàng đầu</figcaption>
                        </figure>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            marginBottom: '20px',
                        }}>
                            Công ty chúng tôi với tiêu chí Chi phí rẻ nhất - dịch vụ tốt nhất - sẵn sàng phục vụ - bồi thường thiệt hại 100% cung cấp các dịch vụ bảo vệ đa dạng như:
                        </p>
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Bảo vệ mục tiêu cố định.</li>
                            <li>Bảo vệ giữ xe.</li>
                            <li>Bảo về chất lượng cao.</li>
                            <li>Bảo vệ yếu nhân.</li>
                            <li>Bảo vệ mục tiêu di động.</li>
                            <li>Bảo vệ khu công nghiệp.</li>
                            <li>Bảo vệ xe vận chuyển.</li>
                        </ul>

                        
                        <h3 style={{
                            fontFamily: 'OSB',
                            fontSize: '22px',
                            padding: '20px 0px',
                        }}>
                            Những ưu thế nổi trội của công ty chúng tôi:
                        </h3>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            Công ty chúng tôi có nhiều ưu điểm và ưu thế nổi trội so với các công ty khác trong cùng lĩnh vực. Dưới đây là những điểm mạnh của chúng tôi:
                        </p>
                        <figure style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                            <img 
                                src="./img/cong-viec-bao-ve-05.jpg" 
                                alt="Cong viec bao ve" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                            <figcaption>Công ty Bảo Vệ An Toàn có rất nhiều những ưu thế nổi trội</figcaption>
                        </figure>
                     
                        <ul style={{
                            fontSize: '18px',
                            paddingLeft: '20px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                            <li>Đội ngũ chuyên nghiệp của chúng tôi cung cấp dịch vụ tư vấn giải pháp và bảo vệ theo tiêu chuẩn an ninh toàn cầu.</li>
                            <li>Chúng tôi cung cấp dịch vụ tuần tra, canh gác và bảo vệ tài sản, môi trường cho doanh nghiệp của bạn.</li>
                            <li>Chúng tôi cung cấp dịch vụ bảo vệ chất lượng uy tín, với đội ngũ nhân viên được đào tạo bài bản và nghiệp vụ tinh thông.</li>
                        </ul>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                            marginBottom: '20px',
                        }}>
                           Đội ngũ nhân viên bảo vệ của chúng tôi được đào tạo chuyên nghiệp và luôn sẵn sàng đáp ứng mọi yêu cầu của khách hàng. Nhân Viên Có Lý Lịch Rõ Ràng - Bảo Hiểm Trách Nhiệm 2 Tỷ Đồng - Bồi Thường Thiệt Hại 100%.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: '400',
                        }}>
                           <b>Công việc bảo vệ</b> là một công việc rất quan trọng trong đảm bảo an ninh và an toàn cho cộng đồng và các tổ chức. Để nhận được <b>công việc bảo vệ</b> tốt nhất hoặc những dịch vụ bảo vệ an toàn, hãy liên hệ với chúng tôi thông qua <b>HOTLINE</b>: 0937.6699.77 hoặc <b>Website</b>: baoveantoan.vn
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
    title: 'Bản mô tả công việc bảo vệ chính xác nhất hiện nay',
    metaDescription: 'Bảo Vệ An Toàn Security với Dịch Vụ Bảo Vệ Chuyên Nghiệp Cung Cấp Dịch Vụ Bảo Vệ Ngày Và Đêm - Uy Tín - Giá Tốt. Hãy liên hệ với chúng tôi qua HOTLINE: 0937.6699.77. Chúng tôi sẽ cung cấp cho bạn những thông tin cần thiết và hỗ trợ bạn trong việc tìm kiếm cơ hội việc làm trong lĩnh vực này.    ',
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