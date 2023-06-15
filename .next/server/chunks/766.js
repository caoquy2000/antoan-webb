"use strict";
exports.id = 766;
exports.ids = [766];
exports.modules = {

/***/ 5379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CardCpn = props => {
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
    route
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Card, {
    sx: {
      maxWidth: '100%'
    },
    style: _objectSpread({}, cardStyle),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.CardActionArea, {
      href: route,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.CardMedia, {
        component: 'img',
        height: heightImg,
        image: img,
        alt: alt
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.CardContent, {
        style: _objectSpread({}, bodyStyle),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CardTitle, {
          style: _objectSpread({}, titleStyle),
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CardBody, {
          style: _objectSpread({}, contentStyle),
          children: content
        })]
      }), !!button && button]
    })
  });
};

const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h5.withConfig({
  displayName: "CardCpn__CardTitle",
  componentId: "sc-rbd5tl-0"
})([""]);
const CardBody = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "CardCpn__CardBody",
  componentId: "sc-rbd5tl-1"
})([""]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardCpn);

/***/ })

};
;