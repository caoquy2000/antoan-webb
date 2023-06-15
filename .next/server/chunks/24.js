"use strict";
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 1024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1416);
/* harmony import */ var component_card_cpn_CardCpn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9229);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const NewsSection = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(NewsWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Container__WEBPACK_IMPORTED_MODULE_0__/* .ContainerWrapper */ .jL, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(NewsTitle, {
        children: "Tin T\u1EE9c"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(NewsSubTitle, {
        children: "T\u1ED5ng h\u1EE3p tin t\u1EE9c m\u1EDBi nh\u1EA5t t\u1EEB B\u1EA3o V\u1EC7 An To\xE0n SECURITY"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(NewsList, {
        children: !!newsMock && newsMock.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(NewsItem, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(component_card_cpn_CardCpn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            img: item.banner,
            heightImg: '288',
            alt: item.alt,
            title: item.title,
            content: item.description,
            route: item.link,
            cardStyle: {
              textAlign: 'center',
              boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
              height: '100%'
            },
            titleStyle: {
              fontFamily: 'OSB',
              fontSize: '22px',
              padding: '18px 0px',
              color: common_variable__WEBPACK_IMPORTED_MODULE_4__/* .MAIN_COLOR */ .lU
            },
            contentStyle: {
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              lineHeight: '22px',
              color: '#8D8D8D',
              overflow: 'hidden',
              display: '-webkit-box',
              'WebkitLineClamp': '3',
              'WebkitBoxOrient': 'vertical'
            },
            button: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
              href: item.link,
              style: {
                textDecoration: 'underline',
                color: common_variable__WEBPACK_IMPORTED_MODULE_4__/* .BLACK_COLOR */ .wC,
                fontFamily: "'Lato', sans-serif",
                fontSize: '16px',
                paddingBottom: '28px',
                display: 'inline-block'
              },
              children: "Xem chi ti\u1EBFt"
            })
          }, item.alt)
        }))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(NewsButton, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
          href: "#",
          children: "Xem th\xEAm tin t\u1EE9c kh\xE1c"
        })
      })]
    })
  });
};

const NewsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "NewsSection__NewsWrapper",
  componentId: "sc-8qicme-0"
})(["margin-top:85px;text-align:center;"]);
const NewsTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h4.withConfig({
  displayName: "NewsSection__NewsTitle",
  componentId: "sc-8qicme-1"
})(["padding-top:5px;font-family:'OSB';font-style:normal;font-weight:700;font-size:32px;line-height:47px;"]);
const NewsSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "NewsSection__NewsSubTitle",
  componentId: "sc-8qicme-2"
})(["display:inline-block;padding-top:20px;padding-bottom:47px;font-family:'Lato',sans-serif;font-style:normal;font-weight:400;font-size:28px;line-height:34px;"]);
const NewsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "NewsSection__NewsList",
  componentId: "sc-8qicme-3"
})(["width:100%;display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:1fr;gap:37px;@media (max-width:892px){display:initial;}"]);
const NewsItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "NewsSection__NewsItem",
  componentId: "sc-8qicme-4"
})(["@media (max-width:892px){margin-bottom:20px;}"]);
const NewsButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "NewsSection__NewsButton",
  componentId: "sc-8qicme-5"
})(["text-align:center;margin-top:45px;a{font-family:'OSB';font-style:normal;font-weight:700;font-size:22px;line-height:33px;text-transform:uppercase;color:", ";padding:18px 52px;background-color:", ";text-decoration:none;display:inline-block;border-radius:35px;}"], common_variable__WEBPACK_IMPORTED_MODULE_4__/* .WHITE_COLOR */ .Y, common_variable__WEBPACK_IMPORTED_MODULE_4__/* .RED_COLOR */ .Ss);
const newsMock = [{
  banner: '/img/bao-ve-muc-tieu-co-dinh.jpg',
  alt: 'Công Việc Bảo Vệ',
  title: 'Công Việc Bảo Vệ',
  description: 'Công việc bảo vệ gồm những việc như Bảo vệ tài sản, Giám sát an ninh, Kiểm tra an ninh, Phát hiện và giải quyết sự cố,... Với tình hình an ninh, trật tự và an toàn đang được đặt lên hàng đầu, việc bảo vệ được xem là một công việc rất quan trọng trong xã hội hiện nay.',
  link: '/tin-tuc/cong-viec-bao-ve'
}, {
  banner: '/img/gioi-thieu-bao-ve-an-toan-01.jpg',
  alt: 'Mẫu phương án bảo vệ mục tiêu chuyên nghiệp tại Bảo Vệ An Toàn',
  title: 'Mẫu phương án bảo vệ mục tiêu chuyên nghiệp tại Bảo Vệ An Toàn',
  description: 'Mẫu phương án bảo vệ mục tiêu gồm các nội dung hạng mục bảo vệ và nhiệm vụ bảo vệ chi tiết mà công ty bảo vệ cung cấp. Bởi lẽ thông qua mẫu phương án bảo vệ sẽ giúp khách hàng đánh giá được công ty dịch vụ bảo vệ có chuyên nghiệp và uy tín không. Đồng thời đây còn là cơ sở để công ty dịch vụ bảo vệ thực hiện nhiệm vụ của mình. Vậy mẫu phương án bảo vệ mục tiêu có vai trò gì? Xây dựng phương án bảo vệ như thế nào là phù hợp. Cùng Bảo Vệ An Toàn tìm hiểu qua bài viết sau nhé.',
  link: '/tin-tuc/mau-phuong-an-bao-ve-chuyen-nghiep'
}, {
  banner: '/img/gioi-thieu-bao-ve-an-toan-04.jpg',
  alt: 'Công ty bảo vệ Quận 4 TPHCM chuyên nghiệp với giá cả phải chăng',
  title: 'Công ty bảo vệ Quận 4 TPHCM chuyên nghiệp với giá cả phải chăng',
  description: 'Công ty bảo vệ Quận 4 TPHCM uy tín với giá cả phải chăng là địa chỉ được nhiều doanh nghiệp quan tâm và tìm kiếm. Bởi lẽ khu vực Quận 4 có mật độ dân số khá đông kèm theo đó là vấn đề an ninh khá phức tạp. Do đó, việc lựa chọn được Công ty bảo vệ Quận 4 chuyên nghiệp không chỉ đảm bảo an toàn mà còn góp phần nâng hình ảnh của doanh nghiệp. Cùng Bảo Vệ An Toàn tìm hiểu sự cần thiết cũng như các tiêu chí để lựa chọn được công ty bảo vệ TPHCM uy tín nhé. Đừng quên liên hệ với hotline 0933777005 để sở hữu dịch vụ bảo vệ chuyên nghiệp của Bảo Vệ An Toàn nhé.',
  link: '/tin-tuc/cong-ty-bao-ve-quan-4'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsSection);

/***/ })

};
;