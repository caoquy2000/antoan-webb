"use strict";
exports.id = 785;
exports.ids = [785];
exports.modules = {

/***/ 1785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1416);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const BannerSection = props => {
  const {
    imgLink
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(BannerSectionWrapper, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Container__WEBPACK_IMPORTED_MODULE_0__/* .ContainerWrapper */ .jL, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(BannerSectionImage, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: imgLink ? imgLink : './img/banner-service.png',
          alt: "Banner Service"
        })
      })
    })
  });
};

const BannerSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "BannerSection__BannerSectionWrapper",
  componentId: "sc-1y9gf2h-0"
})([""]);
const BannerSectionImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BannerSection__BannerSectionImage",
  componentId: "sc-1y9gf2h-1"
})(["width:100%;height:0;padding-bottom:50%;position:relative;img{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);object-fit:cover;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerSection);

/***/ })

};
;