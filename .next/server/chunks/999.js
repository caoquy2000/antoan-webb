"use strict";
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 6999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1416);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_variable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9229);
/* harmony import */ var component_card_cpn_CardCpn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const ServiceSection = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ServiceWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Container__WEBPACK_IMPORTED_MODULE_0__/* .ContainerWrapper */ .jL, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ServiceTitle, {
        children: "D\u1ECBch V\u1EE5 C\u1EE7a Ch\xFAng T\xF4i"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ServiceList, {
        children: serviceMock && serviceMock.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ServiceItem, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(component_card_cpn_CardCpn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            img: item.banner,
            heightImg: "210",
            alt: item.alt,
            title: item.title,
            route: item.route,
            content: item.description,
            cardStyle: {
              borderRadius: '8px',
              boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
              background: common_variable__WEBPACK_IMPORTED_MODULE_3__/* .WHITE_COLOR */ .Y,
              height: '100%'
            },
            titleStyle: {
              fontFamily: 'OSB',
              fontSize: '20px',
              color: common_variable__WEBPACK_IMPORTED_MODULE_3__/* .MAIN_COLOR */ .lU,
              paddingBottom: '8px'
            },
            contentStyle: {
              fontFamily: 'sans-serif',
              fontSize: '16px',
              color: common_variable__WEBPACK_IMPORTED_MODULE_3__/* .TEXT_DESCRIPTION_COLOR */ .kx,
              lineHeight: '22px',
              overflow: 'hidden',
              display: '-webkit-box',
              'WebkitLineClamp': '3',
              'WebkitBoxOrient': 'vertical'
            },
            bodyStyle: {
              padding: '22px'
            }
          })
        }))
      })]
    })
  });
};

const ServiceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "ServiceSection__ServiceWrapper",
  componentId: "sc-1hcnwbk-0"
})(["margin-top:90px;background-color:", ";@media (max-width:500px){text-align:center;}"], common_variable__WEBPACK_IMPORTED_MODULE_3__/* .BACKGROUND_COLOR */ .Et);
const ServiceTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h3.withConfig({
  displayName: "ServiceSection__ServiceTitle",
  componentId: "sc-1hcnwbk-1"
})(["color:", ";font-family:'OSB';font-size:30px;padding-top:30px;padding-bottom:22px;"], common_variable__WEBPACK_IMPORTED_MODULE_3__/* .WHITE_COLOR */ .Y);
const ServiceList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "ServiceSection__ServiceList",
  componentId: "sc-1hcnwbk-2"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;gap:64px;padding-bottom:60px;@media (max-width:", "){grid-template-columns:repeat(3,1fr);}@media (max-width:892px){grid-template-columns:repeat(2,1fr);}@media (max-width:592px){grid-template-columns:repeat(1,1fr);}"], common_variable__WEBPACK_IMPORTED_MODULE_3__/* .MD_MAX */ .Ft);
const ServiceItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "ServiceSection__ServiceItem",
  componentId: "sc-1hcnwbk-3"
})([""]);
const serviceMock = [{
  banner: './img/bao-ve-muc-tieu-co-dinh.jpg',
  alt: 'Bảo Vệ Chung Cư - Tòa Nhà',
  title: 'Bảo Vệ Chung Cư - Tòa Nhà',
  route: '/dich-vu-bao-ve-muc-tieu-co-dinh',
  description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo...'
}, {
  banner: './img/dich-vu-moi.jpg',
  alt: 'Bảo Vệ Giữ Xe',
  title: 'Bảo vệ Giữ xe',
  route: '/dich-vu-bao-ve-giu-xe',
  description: 'Bảo Vệ An Toàn chuyên cung cấp nhân lực bảo vệ các nhà máy, xí nghiệp có quy mô lớn...'
}, {
  banner: './img/bao-ve-chat-luong-cao.png',
  alt: 'Bảo Vệ Nhà Máy, Xý Nghiệp, Công Ty',
  title: 'Bảo Vệ Nhà Máy, Xý Nghiệp, Công Ty',
  route: '/dich-vu-bao-ve-chat-luong-cao',
  description: 'Công ty Bảo Vệ An Toàn tự hào cung cấp dịch vụ bảo vệ chất lượng cao đến quý doanh nghiệp khách hàng...'
}, {
  banner: './img/bao-ve-su-kien-le-hoi.png',
  alt: 'Bảo Vệ Sự Kiện, Lễ hội',
  title: 'Bảo Vệ Sự Kiện, Lễ hội',
  route: '/dich-vu-bao-ve-su-kien',
  description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...'
}, {
  banner: './img/hinh-banner-dich-vu-2.jpg',
  alt: 'Bảo Vệ Mục Tiêu Di Động',
  title: 'Bảo Vệ Mục Tiêu Di Động',
  route: '/dich-vu-bao-ve-muc-tieu-di-dong',
  description: 'Bảo Vệ An Toàn chuyên cung cấp nhân lực bảo vệ các nhà máy, xí nghiệp có quy mô lớn...'
}, {
  banner: './img/bao-ve-khu-cong-nghiep.png',
  alt: 'Bảo Vệ Khu Công Nghiệp',
  title: 'Bảo Vệ Khu Công Nghiệp',
  route: '/dich-vu-bao-ve-khu-cong-nghiep',
  description: 'Công ty Bảo Vệ An Toàn tự hào cung cấp dịch vụ bảo vệ chất lượng cao đến quý doanh nghiệp khách hàng...'
} // {
//     banner: './img/bao-ve-xe-van-chuyen.png',
//     alt: 'Bảo vệ xe vận chuyển',
//     title: 'Bảo vệ xe vận chuyển',
//     route: '/dich-vu-bao-ve-xe-van-chuyen.html',
//     description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...',
// }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceSection);

/***/ })

};
;