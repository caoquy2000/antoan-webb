"use strict";
exports.id = 747;
exports.ids = [747];
exports.modules = {

/***/ 4747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const TextBox = props => {
  const {
    tagTitle,
    // h2, h3, h4
    titleStyle,
    titleContent,
    bodyStyle,
    bodyContent1,
    bodyContent2
  } = props;

  const _renderTitleNode = () => {
    let titleNode;

    switch (tagTitle) {
      case 'h2':
        {
          titleNode = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
            style: _objectSpread({}, titleStyle),
            className: "title_textbox",
            children: titleContent
          });
          break;
        }

      case 'h3':
        {
          titleNode = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
            style: _objectSpread({}, titleStyle),
            className: "title_textbox",
            children: titleContent
          });
          break;
        }

      case 'h4':
        {
          titleNode = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
            style: _objectSpread({}, titleStyle),
            className: "title_textbox",
            children: titleContent
          });
          break;
        }

      default:
        break;
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: titleNode
    });
  };

  const _renderContentNode = () => {
    let bodyNode1 = bodyContent1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      style: _objectSpread(_objectSpread({}, bodyStyle), {}, {
        marginBottom: '6px'
      }),
      className: "content_textbox",
      children: bodyContent1
    });

    let bodyNode2 = bodyContent2 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      style: _objectSpread({}, bodyStyle),
      className: "content_textbox",
      children: bodyContent2
    });

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [bodyNode1, bodyNode2]
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(TextBoxWrapper, {
    children: [_renderTitleNode(), _renderContentNode()]
  });
};

const TextBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "TextBox__TextBoxWrapper",
  componentId: "sc-1teg1fw-0"
})([""]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBox);

/***/ })

};
;