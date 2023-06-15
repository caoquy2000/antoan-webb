"use strict";
exports.id = 674;
exports.ids = [674];
exports.modules = {

/***/ 8674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_variable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9229);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const RecruitBanner = props => {
  const {
    buttonText,
    img
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(RecruitBannerWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
      src: img,
      alt: "Tuyen Dung Img"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RecruitBannerOverlay, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RecruitBannerButton, {
      href: "javascript:void(0)",
      children: buttonText
    })]
  });
};

const RecruitBannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "RecruitBanner__RecruitBannerWrapper",
  componentId: "sc-qrbew7-0"
})(["width:100%;position:relative;height:0;padding-bottom:45%;z-index:1;img{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2;}"]);
const RecruitBannerOverlay = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RecruitBanner__RecruitBannerOverlay",
  componentId: "sc-qrbew7-1"
})(["width:100%;height:100%;background-color:", ";opacity:0.4;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;"], common_variable__WEBPACK_IMPORTED_MODULE_2__/* .BLACK_COLOR */ .wC);
const RecruitBannerButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "RecruitBanner__RecruitBannerButton",
  componentId: "sc-qrbew7-2"
})(["text-decoration:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:4;font-family:'OSB';font-style:normal;font-weight:700;font-size:32px;line-height:47px;color:", ";background-color:", ";text-transform:uppercase;padding:10px 20px;border-radius:4px;cursor:pointer;:hover{color:", ";background-color:", ";transition:all linear 500ms;}@media (max-width:900px){font-size:22px;padding:5px 12px;}@media (max-width:550px){font-size:18px;padding:2px 8px;}"], common_variable__WEBPACK_IMPORTED_MODULE_2__/* .WHITE_COLOR */ .Y, common_variable__WEBPACK_IMPORTED_MODULE_2__/* .THIRD_COLOR */ .JU, common_variable__WEBPACK_IMPORTED_MODULE_2__/* .RED_COLOR */ .Ss, common_variable__WEBPACK_IMPORTED_MODULE_2__/* .WHITE_COLOR */ .Y);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecruitBanner);

/***/ })

};
;