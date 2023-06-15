"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 1425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1416);
/* harmony import */ var component_text_box_TextBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_variable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9229);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MissionSection = props => {
  const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const {
    0: Active1,
    1: setActive1
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const {
    0: Active2,
    1: setActive2
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: currentSlide => {
      if (currentSlide == 0) {
        setActive1(false);
        setActive2(true);
      } else if (currentSlide == 1) {
        setActive1(true);
        setActive2(false);
      }
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MissionWrapper, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Container__WEBPACK_IMPORTED_MODULE_0__/* .ContainerWrapper */ .jL, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(MissionContainer, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(MissionContent, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MissionContentWrapper, {
            className: !!Active1 && 'active1',
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(component_text_box_TextBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              className: 'mission_textbox',
              tagTitle: 'h3',
              titleStyle: {
                fontFamily: 'OSB',
                fontSize: '28px',
                marginBottom: '8px'
              },
              titleContent: "S\u1EE8 M\u1EC6NH C\u1EE6A CH\xDANG T\xD4I",
              bodyStyle: {
                fontFamily: "'Roboto', sans-serif",
                fontSize: '22px'
              },
              bodyContent1: 'Nhằm nâng cao hình ảnh doanh nghiệp, phát triển kinh doanh và đảm bảo an ninh trong quá trình hoạt động. Bảo Vệ An Toàn là đơn vị cung cấp dịch vụ bảo vệ uy tín và chất lượng được nhiều khách hàng tin tưởng. Chúng tôi có thể tự tin trở thành đối tác đáng tin cậy đồng hành cùng quý khách hàng.'
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MissionContentWrapper, {
            className: !!Active2 && 'active2',
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(component_text_box_TextBox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              className: 'mission_textbox',
              tagTitle: 'h3',
              titleStyle: {
                fontFamily: 'OSB',
                fontSize: '28px',
                marginBottom: '8px'
              },
              titleContent: "S\u1EE8 M\u1EC6NH C\u1EE6A CH\xDANG T\xD4I",
              bodyStyle: {
                fontFamily: "'Roboto', sans-serif",
                fontSize: '22px'
              },
              bodyContent1: 'Nhằm nâng cao hình ảnh doanh nghiệp, phát triển kinh doanh và đảm bảo an ninh trong quá trình hoạt động. Bảo Vệ An Toàn là đơn vị cung cấp dịch vụ bảo vệ uy tín và chất lượng được nhiều khách hàng tin tưởng. Chúng tôi có thể tự tin trở thành đối tác đáng tin cậy đồng hành cùng quý khách hàng.'
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MissionSlider, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({
            ref: sliderRef
          }, settings), {}, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Container__WEBPACK_IMPORTED_MODULE_0__/* .ImageWrapper */ .fb, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: "./img/mission.jpg",
                alt: "Mission"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Container__WEBPACK_IMPORTED_MODULE_0__/* .ImageWrapper */ .fb, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: "./img/mission.jpg",
                alt: "Mission"
              })
            })]
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MissionButton, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(MissionButtonWrapper, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              onClick: () => sliderRef?.current?.slickPrev(),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: "./img/ic_arrow_left.svg",
                alt: "Icon Arrow Left"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "arrow_right",
              onClick: () => sliderRef?.current?.slickNext(),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: "./img/ic_arrow_left.svg",
                alt: "Icon Arrow Left"
              })
            })]
          })
        })]
      })
    })
  });
};

const MissionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().section.withConfig({
  displayName: "MissionSection__MissionWrapper",
  componentId: "sc-1qpm5pm-0"
})(["position:relative;width:100%;height:0;padding-top:31.6%;color:", ";@media (max-width:1100px){padding-top:initial;height:initial;}"], common_variable__WEBPACK_IMPORTED_MODULE_5__/* .LOGO_COLOR */ .At);
const MissionContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "MissionSection__MissionContainer",
  componentId: "sc-1qpm5pm-1"
})(["@media (max-width:1100px){display:flex;flex-direction:column-reverse;}"]);
const MissionContent = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "MissionSection__MissionContent",
  componentId: "sc-1qpm5pm-2"
})(["width:30%;position:absolute;top:40%;left:15%;transform:translateY(-50%);@media (max-width:1300px){width:34%;}@media (max-width:1100px){position:initial;width:100%;top:initial;left:initial;transform:initial;margin-top:30px;}"]);
const MissionContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "MissionSection__MissionContentWrapper",
  componentId: "sc-1qpm5pm-3"
})(["position:absolute;.title_textbox{opacity:0;transform:translateY(40px);}.content_textbox{opacity:0;transform:translateY(40px);}&.active1 .title_textbox{opacity:1;transform:translateY(0px);transition:all linear 500ms;}&.active1 .content_textbox{opacity:1;transform:translateY(0px);transition:all linear 500ms;}&.active2 .title_textbox{opacity:1;transform:translateY(0px);transition:all linear 500ms;}&.active2 .content_textbox{opacity:1;transform:translateY(0px);transition:all linear 500ms;}:before{content:'';width:100%;height:2px;background-color:", ";position:absolute;top:-20px;left:-200%;}&.active1::before{left:-50%;transition:all linear 500ms;}&.active2::before{left:-50%;transition:all linear 500ms;}@media (max-width:500px){.title_textbox{font-size:22px !important;}.content_textbox{font-size:18px !important;}}"], common_variable__WEBPACK_IMPORTED_MODULE_5__/* .LOGO_COLOR */ .At);
const MissionSlider = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "MissionSection__MissionSlider",
  componentId: "sc-1qpm5pm-4"
})(["position:absolute;width:50%;top:0;right:0;@media (max-width:1100px){position:initial;width:100%;}"]);
const MissionButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "MissionSection__MissionButton",
  componentId: "sc-1qpm5pm-5"
})(["background-color:", ";position:absolute;bottom:0;left:50%;transform:translateX(-50%);@media (max-width:1100px){display:none;}"], common_variable__WEBPACK_IMPORTED_MODULE_5__/* .RED_COLOR */ .Ss);
const MissionButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "MissionSection__MissionButtonWrapper",
  componentId: "sc-1qpm5pm-6"
})(["display:flex;position:relative;:before{content:'';width:2px;height:60%;position:absolute;top:50%;left:50%;background-color:", ";transform:translate(-50%,-50%);}div{width:50px;height:50px;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;cursor:pointer;}.arrow_right{transform:rotate(180deg);}"], common_variable__WEBPACK_IMPORTED_MODULE_5__/* .WHITE_COLOR */ .Y);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MissionSection);

/***/ })

};
;