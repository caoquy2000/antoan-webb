"use strict";
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 4026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ trang_chu)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/Container.jsx
var Container = __webpack_require__(1416);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/component/silder/Slider.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SliderComponent = props => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* ImageWrapper */.fb, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/img/slide-1.jpg",
          alt: "Banner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Container/* ImageWrapper */.fb, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/img/slide-1.jpg",
          alt: "Banner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Container/* ImageWrapper */.fb, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/img/Banner.jpg",
          alt: "Banner"
        })
      })]
    }))
  });
};

/* harmony default export */ const Slider = (SliderComponent);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/variable.js
var variable = __webpack_require__(9229);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/pages/trang-chu.js











const LazyIntroComponent = /*#__PURE__*/(0,external_react_.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(747), __webpack_require__.e(421)]).then(__webpack_require__.bind(__webpack_require__, 7421)));
const LazyMissionComponent = /*#__PURE__*/(0,external_react_.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(747), __webpack_require__.e(425)]).then(__webpack_require__.bind(__webpack_require__, 1425)));
const LazyChooseComponent = /*#__PURE__*/(0,external_react_.lazy)(() => __webpack_require__.e(/* import() */ 913).then(__webpack_require__.bind(__webpack_require__, 1913)));
const LazyServiceComponent = /*#__PURE__*/(0,external_react_.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(766), __webpack_require__.e(999)]).then(__webpack_require__.bind(__webpack_require__, 6999)));
const LazyCustomerComponent = /*#__PURE__*/(0,external_react_.lazy)(() => __webpack_require__.e(/* import() */ 447).then(__webpack_require__.bind(__webpack_require__, 4447)));
const LazyNewsComponent = /*#__PURE__*/(0,external_react_.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(766), __webpack_require__.e(24)]).then(__webpack_require__.bind(__webpack_require__, 1024)));

const renderLoading = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(material_.Skeleton, {
    x: {
      bgcolor: 'grey.900'
    },
    variant: "rectangular",
    width: "100%",
    height: "100%"
  });
};

const Home = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Trang Ch\u1EE7"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SliderSection, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Slider, {}), /*#__PURE__*/jsx_runtime_.jsx(BannerOverlay, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-wrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text1",
            children: "C\xF4ng Ty B\u1EA3o V\u1EC7 An To\xE0n"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text2",
            children: "Uy T\xEDn - Tr\xE1ch Nhi\u1EC7m"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "button-wrapper",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Xem D\u1ECBch V\u1EE5"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "./img/arrow-right.svg",
              alt: "icon"
            })]
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
      fallback: renderLoading(),
      children: /*#__PURE__*/jsx_runtime_.jsx(LazyIntroComponent, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
      fallback: renderLoading(),
      children: /*#__PURE__*/jsx_runtime_.jsx(LazyMissionComponent, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
      fallback: renderLoading(),
      children: /*#__PURE__*/jsx_runtime_.jsx(LazyChooseComponent, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
      fallback: renderLoading(),
      children: /*#__PURE__*/jsx_runtime_.jsx(LazyServiceComponent, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
      fallback: renderLoading(),
      children: /*#__PURE__*/jsx_runtime_.jsx(LazyCustomerComponent, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
      fallback: renderLoading(),
      children: /*#__PURE__*/jsx_runtime_.jsx(LazyNewsComponent, {})
    })]
  });
};

const SliderSection = external_styled_components_default().section.withConfig({
  displayName: "trang-chu__SliderSection",
  componentId: "sc-g9hid0-0"
})(["width:100%;height:0px;padding-bottom:46.5%;overflow:hidden;position:relative;z-index:1;margin-bottom:50px;"]);
const BannerOverlay = external_styled_components_default().div.withConfig({
  displayName: "trang-chu__BannerOverlay",
  componentId: "sc-g9hid0-1"
})(["width:100%;height:100%;background-color:", ";position:absolute;top:0;left:0;opacity:0.3;z-index:2;"], variable/* BLACK_COLOR */.wC);
const animateArrow = (0,external_styled_components_.keyframes)(["from{transform:translateX(0px);}to{transform:translateX(10px);}"]);
const ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "trang-chu__ContentWrapper",
  componentId: "sc-g9hid0-2"
})(["position:absolute;top:50%;left:50%;z-index:3;display:none;transform:translate(-50%,-50%);text-align:center;.text-wrapper{color:", ";span{display:block;text-transform:uppercase;font-family:'OSB',sans-serif;}.text1{font-size:35px;}.text2{font-size:28px;}}.button-wrapper{display:inline-block;margin-top:15px;}a{display:flex;align-items:center;text-decoration:none;color:", ";padding:10px 20px;background-color:", ";border-radius:4px;span{margin-right:6px;}img{animation:", " 1s linear infinite;filter:invert(100%) sepia(81%) saturate(0%) hue-rotate(142deg) brightness(106%) contrast(104%);}}@media (max-width:", "){.text-wrapper{.text1{font-size:28px;}.text2{font-size:22px;}}a{font-size:16px;padding:5px 10px;}}@media (max-width:500px){.text-wrapper{.text1{font-size:22px;}.text2{font-size:16px;}}a{font-size:12px;padding:5px 10px;}}@media (max-width:420px){.text-wrapper{.text1{font-size:18px;}.text2{font-size:15px;}}a{font-size:12px;padding:5px 10px;}}"], variable/* WHITE_COLOR */.Y, variable/* WHITE_COLOR */.Y, variable/* THIRD_COLOR */.JU, animateArrow, variable/* XS_MAX */.vL);
/* harmony default export */ const trang_chu = (Home);

/***/ })

};
;