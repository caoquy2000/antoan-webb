"use strict";
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 6520:
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






const BannerHotline = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(BannerHotlineWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(BannerHotlineImg, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "img_wrapper",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: "https://firebasestorage.googleapis.com/v0/b/antoan-data.appspot.com/o/static%2F1685963284232banner-hotline.png?alt=media&token=ed98c90c-9a2b-4d89-b1df-cf9dafc5e180",
          alt: "Banner Hotline"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "text_wrapper",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: "Ch\u0103m s\xF3c kh\xE1ch h\xE0ng 24/7"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(BannerHotlineContent, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        children: "HotLine:  0937669977"
      })
    })]
  });
};

const BannerHotlineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BannerHotline__BannerHotlineWrapper",
  componentId: "sc-xb79ot-0"
})(["width:100%;background-color:", ";color:", ";"], common_variable__WEBPACK_IMPORTED_MODULE_2__/* .MAIN_COLOR */ .lU, common_variable__WEBPACK_IMPORTED_MODULE_2__/* .WHITE_COLOR */ .Y);
const BannerHotlineImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BannerHotline__BannerHotlineImg",
  componentId: "sc-xb79ot-1"
})(["display:flex;.img_wrapper{width:50%;height:0;padding-bottom:34%;position:relative;img{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}}.text_wrapper{width:50%;padding:40px;}@media (max-width:1000px){.text_wrapper{display:flex;justify-content:center;align-items:center;}}@media (max-width:550px){display:initial;.img_wrapper{width:100%;padding-bottom:59%;}.text_wrapper{width:100%;text-align:center;padding-left:5px;padding-right:5px;padding-bottom:0px;}}span{font-family:'OSB';font-style:normal;font-weight:700;font-size:30px;line-height:44px;text-transform:uppercase;}"]);
const BannerHotlineContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BannerHotline__BannerHotlineContent",
  componentId: "sc-xb79ot-2"
})(["padding:30px 50px;text-align:center;span{display:inline-block;font-family:'OSB';font-style:normal;font-weight:700;font-size:30px;line-height:44px;}@media (max-width:1400px){padding:30px 0px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerHotline);

/***/ }),

/***/ 3209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_variable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9229);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const BannerSendPhone = props => {
  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(BannerSendPhoneWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(BannerSendPhoneTop, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Label, {
        children: "\u0110\u1EC3 L\u1EA1i Phone:"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {
        id: "standard-basic",
        variant: "standard",
        value: phone,
        onChange: e => setPhone(e.target.value),
        sx: {
          input: {
            color: common_variable__WEBPACK_IMPORTED_MODULE_2__/* .WHITE_COLOR */ .Y,
            fontSize: 18
          },
          padding: '0px 8px'
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "button",
        children: "G\u1EEDi"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(BannerSendPhoneBottom, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
        children: "Qu\xFD kh\xE1ch s\u1EBD \u0111\u01B0\u1EE3c t\u01B0 v\u1EA5n d\u1ECBch v\u1EE5 v\xE0 ch\u0103m s\xF3c kh\xE1ch h\xE0ng trong \xEDt ph\xFAt."
      })
    })]
  });
};

const BannerSendPhoneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BannerSendPhone__BannerSendPhoneWrapper",
  componentId: "sc-1metu5h-0"
})(["background-color:", ";color:", ";padding:60px 55px;@media (max-width:1400px){padding:60px 20px;}"], common_variable__WEBPACK_IMPORTED_MODULE_2__/* .MAIN_COLOR */ .lU, common_variable__WEBPACK_IMPORTED_MODULE_2__/* .WHITE_COLOR */ .Y);
const BannerSendPhoneTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BannerSendPhone__BannerSendPhoneTop",
  componentId: "sc-1metu5h-1"
})(["display:flex;align-items:center;justify-content:center;.button{font-family:'OSB';font-style:normal;font-weight:700;font-size:22px;line-height:39px;padding:3px 30px;background:#85C7D6;cursor:pointer;border-radius:4px;}@media (max-width:550px){flex-wrap:wrap;.button{margin-top:20px;}}"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "BannerSendPhone__Label",
  componentId: "sc-1metu5h-2"
})(["display:inline-block;font-family:'OSB';font-style:normal;font-weight:700;font-size:24px;line-height:44px;"]);
const BannerSendPhoneBottom = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BannerSendPhone__BannerSendPhoneBottom",
  componentId: "sc-1metu5h-3"
})(["text-align:center;padding-top:35px;span{display:inline-block;font-family:'OSB';font-style:normal;font-weight:700;font-size:26px;line-height:30px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerSendPhone);

/***/ })

};
;