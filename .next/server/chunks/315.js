exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 4315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
          src: "./img/slide-1.jpg",
          alt: "Banner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Container/* ImageWrapper */.fb, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "./img/slide-2.jpg",
          alt: "Banner"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Container/* ImageWrapper */.fb, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "./img/Banner.jpg",
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
;// CONCATENATED MODULE: ./src/component/text-box/TextBox.jsx
function TextBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TextBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TextBox_ownKeys(Object(source), !0).forEach(function (key) { TextBox_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TextBox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function TextBox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






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
          titleNode = /*#__PURE__*/jsx_runtime_.jsx("h2", {
            style: TextBox_objectSpread({}, titleStyle),
            className: "title_textbox",
            children: titleContent
          });
          break;
        }

      case 'h3':
        {
          titleNode = /*#__PURE__*/jsx_runtime_.jsx("h3", {
            style: TextBox_objectSpread({}, titleStyle),
            className: "title_textbox",
            children: titleContent
          });
          break;
        }

      case 'h4':
        {
          titleNode = /*#__PURE__*/jsx_runtime_.jsx("h4", {
            style: TextBox_objectSpread({}, titleStyle),
            className: "title_textbox",
            children: titleContent
          });
          break;
        }

      default:
        break;
    }

    return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
      children: titleNode
    });
  };

  const _renderContentNode = () => {
    let bodyNode1 = bodyContent1 && /*#__PURE__*/jsx_runtime_.jsx("p", {
      style: TextBox_objectSpread(TextBox_objectSpread({}, bodyStyle), {}, {
        marginBottom: '6px'
      }),
      className: "content_textbox",
      children: bodyContent1
    });

    let bodyNode2 = bodyContent2 && /*#__PURE__*/jsx_runtime_.jsx("p", {
      style: TextBox_objectSpread({}, bodyStyle),
      className: "content_textbox",
      children: bodyContent2
    });

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [bodyNode1, bodyNode2]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBoxWrapper, {
    children: [_renderTitleNode(), _renderContentNode()]
  });
};

const TextBoxWrapper = external_styled_components_default().div.withConfig({
  displayName: "TextBox__TextBoxWrapper",
  componentId: "sc-1teg1fw-0"
})([""]);
/* harmony default export */ const text_box_TextBox = (TextBox);
;// CONCATENATED MODULE: ./src/component/section/intro-section/IntroSection.jsx








const IntroSection = props => {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(IntroWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* ContainerFuildWrapper */.Mz, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(IntroImage, {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "./img/bao-ve-an-toan-gioi-thieu.png",
            alt: "Bao Ve An Toan Gioi Thieu"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IntroContent, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(text_box_TextBox, {
            tagTitle: 'h2',
            titleStyle: {
              fontFamily: 'OSB',
              fontSize: '32px',
              marginBottom: '12px'
            },
            titleContent: 'GIỚI THIỆU VỀ BẢO VỆ AN TOÀN',
            bodyStyle: {
              fontFamily: "'Tinos', serif",
              fontSize: '24px'
            },
            bodyContent1: 'Tốt nghiệp từ nhiều trường đại học nổi tiếng về kinh tế và quản lí nhân sự. Bảo Vệ An Toàn được xây dựng từ ban lãnh đạo chất lượng, giàu kinh nghiệm. Với nguồn vốn đầu tư lớn, Bảo Vệ An Toàn đã hoạt động ổn định hơn 10 năm trong lĩnh vực dịch vụ bảo vệ.'
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "icon_intro icon_1",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "./img/1.svg",
              alt: "icon 1"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "icon_intro icon_2",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "./img/2.svg",
              alt: "icon 2"
            })
          })]
        })]
      })
    })
  });
};

const IntroWrapper = external_styled_components_default().section.withConfig({
  displayName: "IntroSection__IntroWrapper",
  componentId: "sc-1hc3btf-0"
})(["background-color:", ";color:", ";padding-bottom:125px;", "{display:flex;align-items:center;}@media (max-width:", "){", "{display:initial;}}@media (max-width:1100px){padding-bottom:50px;}"], variable/* BACKGROUND_COLOR */.Et, variable/* LOGO_COLOR */.At, Container/* ContainerFuildWrapper */.Mz, variable/* SM_MAX */.as, Container/* ContainerFuildWrapper */.Mz);
const IntroImage = external_styled_components_default().div.withConfig({
  displayName: "IntroSection__IntroImage",
  componentId: "sc-1hc3btf-1"
})(["padding:10px;width:50%;display:flex;justify-content:center;align-items:center;img{width:100%;height:100%;object-fit:cover;}@media (max-width:", "){width:100%;}"], variable/* SM_MAX */.as);
const IntroContent = external_styled_components_default().div.withConfig({
  displayName: "IntroSection__IntroContent",
  componentId: "sc-1hc3btf-2"
})(["width:50%;padding:0px 10px 0px 90px;position:relative;.icon_intro{position:absolute;}.icon_intro.icon_1{left:50%;bottom:-100%;transform:translateX(-50%);}.icon_intro.icon_2{top:90%;right:30%;}@media (max-width:1200px){padding:0px 10px 0px 20px;.icon_intro.icon_1{display:none;}.icon_intro.icon_2{display:none;}}@media (max-width:", "){width:100%;}@media (max-width:500px){padding:0px 15px 0px 15px;.title_textbox{font-size:22px !important;}.content_textbox{font-size:18px !important;}}"], variable/* SM_MAX */.as);
/* harmony default export */ const intro_section_IntroSection = (IntroSection);
;// CONCATENATED MODULE: ./src/component/section/mission-section/MissionSection.jsx
function MissionSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MissionSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MissionSection_ownKeys(Object(source), !0).forEach(function (key) { MissionSection_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MissionSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function MissionSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MissionSection = props => {
  const sliderRef = (0,external_react_.useRef)(null);
  const {
    0: Active1,
    1: setActive1
  } = (0,external_react_.useState)(true);
  const {
    0: Active2,
    1: setActive2
  } = (0,external_react_.useState)(false);
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
  return /*#__PURE__*/jsx_runtime_.jsx(MissionWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* ContainerWrapper */.jL, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MissionContainer, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MissionContent, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(MissionContentWrapper, {
            className: !!Active1 && 'active1',
            children: /*#__PURE__*/jsx_runtime_.jsx(text_box_TextBox, {
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
          }), /*#__PURE__*/jsx_runtime_.jsx(MissionContentWrapper, {
            className: !!Active2 && 'active2',
            children: /*#__PURE__*/jsx_runtime_.jsx(text_box_TextBox, {
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
        }), /*#__PURE__*/jsx_runtime_.jsx(MissionSlider, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), MissionSection_objectSpread(MissionSection_objectSpread({
            ref: sliderRef
          }, settings), {}, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* ImageWrapper */.fb, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/mission.jpg",
                alt: "Mission"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Container/* ImageWrapper */.fb, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/mission.jpg",
                alt: "Mission"
              })
            })]
          }))
        }), /*#__PURE__*/jsx_runtime_.jsx(MissionButton, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MissionButtonWrapper, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              onClick: () => sliderRef?.current?.slickPrev(),
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/ic_arrow_left.svg",
                alt: "Icon Arrow Left"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "arrow_right",
              onClick: () => sliderRef?.current?.slickNext(),
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
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

const MissionWrapper = external_styled_components_default().section.withConfig({
  displayName: "MissionSection__MissionWrapper",
  componentId: "sc-1qpm5pm-0"
})(["position:relative;width:100%;height:0;padding-top:31.6%;color:", ";@media (max-width:1100px){padding-top:initial;height:initial;}"], variable/* WHITE_COLOR */.Y);
const MissionContainer = external_styled_components_default().div.withConfig({
  displayName: "MissionSection__MissionContainer",
  componentId: "sc-1qpm5pm-1"
})(["@media (max-width:1100px){display:flex;flex-direction:column-reverse;}"]);
const MissionContent = external_styled_components_default().div.withConfig({
  displayName: "MissionSection__MissionContent",
  componentId: "sc-1qpm5pm-2"
})(["width:30%;position:absolute;top:40%;left:15%;transform:translateY(-50%);@media (max-width:1300px){width:34%;}@media (max-width:1100px){position:initial;width:100%;top:initial;left:initial;transform:initial;margin-top:30px;}"]);
const MissionContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "MissionSection__MissionContentWrapper",
  componentId: "sc-1qpm5pm-3"
})(["position:absolute;.title_textbox{opacity:0;transform:translateY(40px);}.content_textbox{opacity:0;transform:translateY(40px);}&.active1 .title_textbox{opacity:1;transform:translateY(0px);transition:all linear 500ms;}&.active1 .content_textbox{opacity:1;transform:translateY(0px);transition:all linear 500ms;}&.active2 .title_textbox{opacity:1;transform:translateY(0px);transition:all linear 500ms;}&.active2 .content_textbox{opacity:1;transform:translateY(0px);transition:all linear 500ms;}:before{content:'';width:100%;height:2px;background-color:", ";position:absolute;top:-20px;left:-200%;}&.active1::before{left:-50%;transition:all linear 500ms;}&.active2::before{left:-50%;transition:all linear 500ms;}@media (max-width:500px){.title_textbox{font-size:22px !important;}.content_textbox{font-size:18px !important;}}"], variable/* LOGO_COLOR */.At);
const MissionSlider = external_styled_components_default().div.withConfig({
  displayName: "MissionSection__MissionSlider",
  componentId: "sc-1qpm5pm-4"
})(["position:absolute;width:50%;top:0;right:0;@media (max-width:1100px){position:initial;width:100%;}"]);
const MissionButton = external_styled_components_default().div.withConfig({
  displayName: "MissionSection__MissionButton",
  componentId: "sc-1qpm5pm-5"
})(["background-color:", ";position:absolute;bottom:0;left:50%;transform:translateX(-50%);@media (max-width:1100px){display:none;}"], variable/* RED_COLOR */.Ss);
const MissionButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "MissionSection__MissionButtonWrapper",
  componentId: "sc-1qpm5pm-6"
})(["display:flex;position:relative;:before{content:'';width:2px;height:60%;position:absolute;top:50%;left:50%;background-color:", ";transform:translate(-50%,-50%);}div{width:50px;height:50px;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;cursor:pointer;}.arrow_right{transform:rotate(180deg);}"], variable/* WHITE_COLOR */.Y);
/* harmony default export */ const mission_section_MissionSection = (MissionSection);
// EXTERNAL MODULE: ./src/component/card-cpn/CardCpn.jsx
var CardCpn = __webpack_require__(5379);
;// CONCATENATED MODULE: ./src/component/section/service-section/ServiceSection.jsx








const ServiceSection = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(ServiceWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* ContainerWrapper */.jL, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ServiceTitle, {
        children: "D\u1ECBch V\u1EE5 C\u1EE7a Ch\xFAng T\xF4i"
      }), /*#__PURE__*/jsx_runtime_.jsx(ServiceList, {
        children: serviceMock && serviceMock.map(item => /*#__PURE__*/jsx_runtime_.jsx(ServiceItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(CardCpn/* default */.Z, {
            img: item.banner,
            heightImg: "210",
            alt: item.alt,
            title: item.title,
            route: item.route,
            content: item.description,
            cardStyle: {
              borderRadius: '8px',
              boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
              background: variable/* WHITE_COLOR */.Y,
              height: '100%'
            },
            titleStyle: {
              fontFamily: 'OSB',
              fontSize: '20px',
              color: variable/* MAIN_COLOR */.lU,
              paddingBottom: '8px'
            },
            contentStyle: {
              fontFamily: 'sans-serif',
              fontSize: '16px',
              color: variable/* TEXT_DESCRIPTION_COLOR */.kx,
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

const ServiceWrapper = external_styled_components_default().section.withConfig({
  displayName: "ServiceSection__ServiceWrapper",
  componentId: "sc-1hcnwbk-0"
})(["margin-top:90px;background-color:", ";@media (max-width:500px){text-align:center;}"], variable/* BACKGROUND_COLOR */.Et);
const ServiceTitle = external_styled_components_default().h3.withConfig({
  displayName: "ServiceSection__ServiceTitle",
  componentId: "sc-1hcnwbk-1"
})(["color:", ";font-family:'OSB';font-size:30px;padding-top:30px;padding-bottom:22px;"], variable/* WHITE_COLOR */.Y);
const ServiceList = external_styled_components_default().div.withConfig({
  displayName: "ServiceSection__ServiceList",
  componentId: "sc-1hcnwbk-2"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;gap:64px;padding-bottom:60px;@media (max-width:", "){grid-template-columns:repeat(3,1fr);}@media (max-width:892px){grid-template-columns:repeat(2,1fr);}@media (max-width:592px){grid-template-columns:repeat(1,1fr);}"], variable/* MD_MAX */.Ft);
const ServiceItem = external_styled_components_default().div.withConfig({
  displayName: "ServiceSection__ServiceItem",
  componentId: "sc-1hcnwbk-3"
})([""]);
const serviceMock = [{
  banner: './img/bao-ve-muc-tieu-co-dinh.jpg',
  alt: 'Bảo Vệ Mục Tiêu Cố Định',
  title: 'Bảo Vệ Mục Tiêu Cố Định',
  route: '/dich-vu-bao-ve-muc-tieu-co-dinh.html',
  description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo...'
}, {
  banner: './img/dich-vu-moi.jpg',
  alt: 'Bảo Vệ Giữ Xe',
  title: 'Bảo vệ Giữ xe',
  route: '/dich-vu-bao-ve-giu-xe.html',
  description: 'Bảo Vệ An Toàn chuyên cung cấp nhân lực bảo vệ các nhà máy, xí nghiệp có quy mô lớn...'
}, {
  banner: './img/bao-ve-chat-luong-cao.png',
  alt: 'Bảo vệ chất lượng cao',
  title: 'Bảo vệ chất lượng cao',
  route: '/dich-vu-bao-ve-chat-luong-cao.html',
  description: 'Công ty Bảo Vệ An Toàn tự hào cung cấp dịch vụ bảo vệ chất lượng cao đến quý doanh nghiệp khách hàng...'
}, {
  banner: './img/bao-ve-su-kien-le-hoi.png',
  alt: 'Bảo Vệ Sự Kiện, Lễ hội',
  title: 'Bảo Vệ Sự Kiện, Lễ hội',
  route: '/dich-vu-bao-ve-su-kien.html',
  description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...'
}, {
  banner: './img/hinh-banner-dich-vu-1.jpg',
  alt: 'Bảo Vệ Yếu Nhân',
  title: 'Bảo Vệ Yếu Nhân',
  route: '/dich-vu-bao-ve-yeu-nhan.html',
  description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...'
}, {
  banner: './img/hinh-banner-dich-vu-2.jpg',
  alt: 'Bảo Vệ Mục Tiêu Di Động',
  title: 'Bảo Vệ Mục Tiêu Di Động',
  route: '/dich-vu-bao-ve-muc-tieu-di-dong.html',
  description: 'Bảo Vệ An Toàn chuyên cung cấp nhân lực bảo vệ các nhà máy, xí nghiệp có quy mô lớn...'
}, {
  banner: './img/bao-ve-khu-cong-nghiep.png',
  alt: 'Bảo Vệ Khu Công Nghiệp',
  title: 'Bảo Vệ Khu Công Nghiệp',
  route: '/dich-vu-bao-ve-khu-cong-nghiep.html',
  description: 'Công ty Bảo Vệ An Toàn tự hào cung cấp dịch vụ bảo vệ chất lượng cao đến quý doanh nghiệp khách hàng...'
} // {
//     banner: './img/bao-ve-xe-van-chuyen.png',
//     alt: 'Bảo vệ xe vận chuyển',
//     title: 'Bảo vệ xe vận chuyển',
//     route: '/dich-vu-bao-ve-xe-van-chuyen.html',
//     description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu...',
// }
];
/* harmony default export */ const service_section_ServiceSection = (ServiceSection);
// EXTERNAL MODULE: external "react-vertical-timeline-component"
var external_react_vertical_timeline_component_ = __webpack_require__(8938);
// EXTERNAL MODULE: ./node_modules/react-vertical-timeline-component/style.min.css
var style_min = __webpack_require__(1164);
// EXTERNAL MODULE: external "@mui/icons-material/Star"
var Star_ = __webpack_require__(7849);
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_);
// EXTERNAL MODULE: external "@mui/icons-material/AssignmentTurnedIn"
var AssignmentTurnedIn_ = __webpack_require__(6913);
var AssignmentTurnedIn_default = /*#__PURE__*/__webpack_require__.n(AssignmentTurnedIn_);
// EXTERNAL MODULE: external "@mui/icons-material/GppGood"
var GppGood_ = __webpack_require__(1989);
var GppGood_default = /*#__PURE__*/__webpack_require__.n(GppGood_);
// EXTERNAL MODULE: external "@mui/icons-material/HomeRepairService"
var HomeRepairService_ = __webpack_require__(1702);
var HomeRepairService_default = /*#__PURE__*/__webpack_require__.n(HomeRepairService_);
;// CONCATENATED MODULE: ./src/component/section/choose-section/ChooseSection.jsx













const ChooseSection = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(ChooseSectionWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* ContainerWrapper */.jL, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ChooseTitle, {
        children: "T\u1EA0I SAO CH\u1ECCN C\xD4NG TY B\u1EA2O V\u1EC6 AN TO\xC0N"
      }), /*#__PURE__*/jsx_runtime_.jsx(ChooseBody, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_vertical_timeline_component_.VerticalTimeline, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_vertical_timeline_component_.VerticalTimelineElement, {
            className: "vertical-timeline-element--work",
            contentStyle: {
              background: 'rgb(33, 150, 243)',
              color: '#fff'
            },
            contentArrowStyle: {
              borderRight: '7px solid  rgb(33, 150, 243)'
            },
            iconStyle: {
              background: variable/* RED_COLOR */.Ss,
              color: '#fff'
            },
            icon: /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {}),
            children: [/*#__PURE__*/jsx_runtime_.jsx(ChooseItemImg, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/hinh-3.jpg",
                alt: "NH\xC2N VI\xCAN  NHI\u1EC6T T\xCCNH - TH\xC2N THI\u1EC6N - M\u1EA0NH M\u1EBC"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(ChooseItemTitle, {
              children: "NH\xC2N VI\xCAN NHI\u1EC6T T\xCCNH - TH\xC2N THI\u1EC6N - M\u1EA0NH M\u1EBC"
            }), /*#__PURE__*/jsx_runtime_.jsx(ChooseItemContent, {
              children: "B\u1EA3o V\u1EC7 An To\xE0n l\xE0 \u0111\u01A1n v\u1ECB chuy\xEAn cung c\u1EA5p d\u1ECBch v\u1EE5 b\u1EA3o v\u1EC7 chuy\xEAn nghi\u1EC7p, \u0111\u1EA3m b\u1EA3o tr\u1EADt t\u1EF1 an ninh \u2013 x\xE3 h\u1ED9i t\u1EA1i tp. H\u1ED3 Ch\xED Minh. \u0110\u1EC3 l\xE0m h\xE0i l\xF2ng kh\xE1ch h\xE0ng, ch\u1EAFc ch\u1EAFn ph\u1EA3i k\u1EC3 \u0111\u1EBFn t\u1EA7m quan tr\u1ECDng trong vi\u1EC7c \u0111\xE0o t\u1EA1o \u0111\u1ED9i ng\u0169 nh\xE2n vi\xEAn: Nhi\u1EC7t T\xECnh - Th\xE2n Thi\u1EC7n - M\u1EA1nh M\u1EBD."
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_vertical_timeline_component_.VerticalTimelineElement, {
            className: "vertical-timeline-element--work",
            iconStyle: {
              background: 'rgb(33, 150, 243)',
              color: '#fff'
            },
            icon: /*#__PURE__*/jsx_runtime_.jsx((AssignmentTurnedIn_default()), {}),
            style: {
              color: `${variable/* BLACK_COLOR */.wC}`
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(ChooseItemImg, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/bao-ve-su-kien-le-hoi.png",
                alt: "NH\xC2N VI\xCAN  NHI\u1EC6T T\xCCNH - TH\xC2N THI\u1EC6N - M\u1EA0NH M\u1EBC"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(ChooseItemTitle, {
              children: "PH\xCD D\u1ECACH V\u1EE4 C\u1EA0NH TRANH T\u1EEA PH\u1ED4 TH\xD4NG \u0110\u1EBEN CAO C\u1EA4P"
            }), /*#__PURE__*/jsx_runtime_.jsx(ChooseItemContent, {
              children: "Khi thu\xEA d\u1ECBch v\u1EE5 b\u1EA3o v\u1EC7 th\xEC ngo\xE0i ch\u1EA5t l\u01B0\u1EE3ng, hi\u1EC7u qu\u1EA3 c\xF4ng vi\u1EC7c th\xEC kh\xE1ch h\xE0ng bao gi\u1EDD c\u0169ng quan t\xE2m \u0111\u1EBFn y\u1EBFu t\u1ED1 gi\xE1 c\u1EA3. H\xE3y y\xEAn t\xE2m khi l\u1EF1a ch\u1ECDn d\u1ECBch v\u1EE5 c\u1EE7a c\xF4ng ty B\u1EA3o V\u1EC7 An To\xE0n, b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c \u0111\u1EA3m b\u1EA3o ph\xED d\u1ECBch v\u1EE5 c\u1EA1nh tranh t\u1EEB ph\u1ED5 th\xF4ng \u0111\u1EBFn cao c\u1EA5p."
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_vertical_timeline_component_.VerticalTimelineElement, {
            className: "vertical-timeline-element--work",
            contentStyle: {
              background: 'rgb(33, 150, 243)',
              color: '#fff'
            },
            contentArrowStyle: {
              borderRight: '7px solid  rgb(33, 150, 243)'
            },
            iconStyle: {
              background: variable/* RED_COLOR */.Ss,
              color: '#fff'
            },
            icon: /*#__PURE__*/jsx_runtime_.jsx((GppGood_default()), {}),
            children: [/*#__PURE__*/jsx_runtime_.jsx(ChooseItemImg, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/hinh-4.jpg",
                alt: "NH\xC2N VI\xCAN  NHI\u1EC6T T\xCCNH - TH\xC2N THI\u1EC6N - M\u1EA0NH M\u1EBC"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ChooseItemTitle, {
              children: ["\xC1P D\u1EE4NG QUY TR\xCCNH QU\u1EA2N L\xDD CH\u1EA4T L\u01AF\u1EE2NG THEO TI\xCAU CHU\u1EA8N", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "ISO 9001:2015"]
            }), /*#__PURE__*/jsx_runtime_.jsx(ChooseItemContent, {
              children: "\u0110\xE0o t\u1EA1o \u0111\u1ED9i ng\u0169 b\u1EA3o v\u1EC7 l\xE0 m\u1ED9t trong nh\u1EEFng kh\xE2u h\u1EBFt s\u1EE9c quan tr\u1ECDng \u0111\u1EC3 mang \u0111\u1EBFn ch\u1EA5t l\u01B0\u1EE3ng d\u1ECBch v\u1EE5 t\u1ED1t nh\u1EA5t cho kh\xE1ch h\xE0ng. T\u1EA1i B\u1EA3o V\u1EC7 An To\xE0n th\u01B0\u1EDDng xuy\xEAn t\u1ED5 ch\u1EE9c c\xE1c c\xE1c kh\xF3a \u0111\xE0o t\u1EA1o chuy\xEAn nghi\u1EC7p \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o nghi\u1EC7p v\u1EE5 tinh th\xF4ng, t\xE1c phong nhanh nh\u1EB9n cho t\u1EEBng nh\xE2n vi\xEAn."
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_vertical_timeline_component_.VerticalTimelineElement, {
            className: "vertical-timeline-element--work",
            iconStyle: {
              background: 'rgb(33, 150, 243)',
              color: '#fff'
            },
            icon: /*#__PURE__*/jsx_runtime_.jsx((HomeRepairService_default()), {}),
            style: {
              color: `${variable/* BLACK_COLOR */.wC}`
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(ChooseItemImg, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/hinh-5.jpg",
                alt: "NH\xC2N VI\xCAN  NHI\u1EC6T T\xCCNH - TH\xC2N THI\u1EC6N - M\u1EA0NH M\u1EBC"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(ChooseItemTitle, {
              children: "C\xD4NG TY TRANG B\u1ECA B\u1EA2O HI\u1EC2M TR\xC1CH NHI\u1EC6M NGH\u1EC0 NGHI\u1EC6P CHO KH\xC1CH H\xC0NG"
            }), /*#__PURE__*/jsx_runtime_.jsx(ChooseItemContent, {
              children: "Ti\u1EC1n th\xE2n l\xE0 C\xF4ng ty cung c\u1EA5p d\u1ECBch v\u1EE5 vi\u1EC7c l\xE0m m\u1ED7i n\u0103m cung c\u1EA5p cho th\u1ECB tr\u01B0\u1EDDng v\xE0i ngh\xECn lao \u0111\u1ED9ng.Do \u0111\xF3, C\xF4ng ty b\u1EA3o v\u1EC7 An To\xE0n nhanh ch\xF3ng tuy\u1EC3n d\u1EE5ng v\xE0 \u0111\xE1p \u1EE9ng nhu c\u1EA7u s\u1ED1 l\u01B0\u1EE3ng l\u1EDBn c\u1EE7a kh\xE1ch h\xE0ng trong th\u1EDDi gian s\u1EDBm nh\u1EA5t."
            })]
          })]
        })
      })]
    })
  });
};

const ChooseSectionWrapper = external_styled_components_default().section.withConfig({
  displayName: "ChooseSection__ChooseSectionWrapper",
  componentId: "sc-m3l7se-0"
})(["background-color:", ";margin-top:85px;.vertical-timeline-element-content p{margin:initial !important;}@media (max-width:1050px){margin-top:250px;}"], variable/* MAIN_COLOR */.lU);
const ChooseTitle = external_styled_components_default().h3.withConfig({
  displayName: "ChooseSection__ChooseTitle",
  componentId: "sc-m3l7se-1"
})(["font-family:'OSB';font-size:32px;line-height:18px;font-weight:700;color:", ";text-align:center;padding:80px 0px;text-transform:uppercase;@media (max-width:600px){font-size:24px;}@media (max-width:500px){font-size:20px;}"], variable/* WHITE_COLOR */.Y);
const ChooseBody = external_styled_components_default().div.withConfig({
  displayName: "ChooseSection__ChooseBody",
  componentId: "sc-m3l7se-2"
})([""]);
const ChooseItemImg = external_styled_components_default().div.withConfig({
  displayName: "ChooseSection__ChooseItemImg",
  componentId: "sc-m3l7se-3"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;img{width:100%;height:100%;object-fit:cover;}"]);
const ChooseItemTitle = external_styled_components_default().h4.withConfig({
  displayName: "ChooseSection__ChooseItemTitle",
  componentId: "sc-m3l7se-4"
})(["margin-top:12px;font-family:'OSB';font-style:normal;font-weight:700;font-size:28px;line-height:41px;"]);
const ChooseItemContent = external_styled_components_default().p.withConfig({
  displayName: "ChooseSection__ChooseItemContent",
  componentId: "sc-m3l7se-5"
})(["font-family:'Roboto',sans-serif;"]);
/* harmony default export */ const choose_section_ChooseSection = (ChooseSection);
;// CONCATENATED MODULE: ./src/component/section/customer-section/CustomerSection.jsx
function CustomerSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function CustomerSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? CustomerSection_ownKeys(Object(source), !0).forEach(function (key) { CustomerSection_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : CustomerSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function CustomerSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const CustomerSection = props => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return /*#__PURE__*/jsx_runtime_.jsx(CustomerWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* ContainerWrapper */.jL, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CustomerTitle, {
        children: "KH\xE1ch h\xE0ng c\u1EE7a ch\xFAng t\xF4i"
      }), /*#__PURE__*/jsx_runtime_.jsx(CustomerBody, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), CustomerSection_objectSpread(CustomerSection_objectSpread({}, settings), {}, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CustomerItem, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(CustomerLogo, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/mcdonald_logo.png",
                alt: "MCDonald Logo"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomerContent, {
              children: "\u201CL\xE0 m\u1ED9t nh\xE3n h\xE0ng s\u1EDF h\u1EEFu chu\u1ED7i c\u1EEDa h\xE0ng th\u1EE9c \u0103n nhanh n\u1ED5i ti\u1EBFng tr\xEAn th\u1EBF gi\u1EDBi. MCDonald \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a B\u1EA3o V\u1EC7 An To\xE0n. Nh\u1EDD s\u1EF1 chuy\xEAn nghi\u1EC7p, nh\xE2n vi\xEAn nghi\xEAm t\xFAc, nhi\u1EC7t t\xECnh.\u201D"
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomerName, {
              children: "MCDonald"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CustomerItem, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(CustomerLogo, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/mcdonald_logo.png",
                alt: "MCDonald Logo"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomerContent, {
              children: "\u201CL\xE0 m\u1ED9t nh\xE3n h\xE0ng s\u1EDF h\u1EEFu chu\u1ED7i c\u1EEDa h\xE0ng th\u1EE9c \u0103n nhanh n\u1ED5i ti\u1EBFng tr\xEAn th\u1EBF gi\u1EDBi. MCDonald \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a B\u1EA3o V\u1EC7 An To\xE0n. Nh\u1EDD s\u1EF1 chuy\xEAn nghi\u1EC7p, nh\xE2n vi\xEAn nghi\xEAm t\xFAc, nhi\u1EC7t t\xECnh.\u201D"
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomerName, {
              children: "MCDonald"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CustomerItem, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(CustomerLogo, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "./img/mcdonald_logo.png",
                alt: "MCDonald Logo"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomerContent, {
              children: "\u201CL\xE0 m\u1ED9t nh\xE3n h\xE0ng s\u1EDF h\u1EEFu chu\u1ED7i c\u1EEDa h\xE0ng th\u1EE9c \u0103n nhanh n\u1ED5i ti\u1EBFng tr\xEAn th\u1EBF gi\u1EDBi. MCDonald \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a B\u1EA3o V\u1EC7 An To\xE0n. Nh\u1EDD s\u1EF1 chuy\xEAn nghi\u1EC7p, nh\xE2n vi\xEAn nghi\xEAm t\xFAc, nhi\u1EC7t t\xECnh.\u201D"
            }), /*#__PURE__*/jsx_runtime_.jsx(CustomerName, {
              children: "MCDonald"
            })]
          })]
        }))
      })]
    })
  });
};

const CustomerWrapper = external_styled_components_default().section.withConfig({
  displayName: "CustomerSection__CustomerWrapper",
  componentId: "sc-u4hkyb-0"
})(["margin-top:85px;background-color:", ";"], variable/* GRAY_COLOR */.eR);
const CustomerTitle = external_styled_components_default().h4.withConfig({
  displayName: "CustomerSection__CustomerTitle",
  componentId: "sc-u4hkyb-1"
})(["text-align:center;padding-top:70px;padding-bottom:40px;color:", ";font-family:'OSB';font-style:normal;font-weight:700;font-size:32px;line-height:47px;text-transform:uppercase;"], variable/* MAIN_COLOR */.lU);
const CustomerBody = external_styled_components_default().div.withConfig({
  displayName: "CustomerSection__CustomerBody",
  componentId: "sc-u4hkyb-2"
})(["padding-bottom:66px;"]);
const CustomerItem = external_styled_components_default().div.withConfig({
  displayName: "CustomerSection__CustomerItem",
  componentId: "sc-u4hkyb-3"
})(["text-align:center;"]);
const CustomerLogo = external_styled_components_default().div.withConfig({
  displayName: "CustomerSection__CustomerLogo",
  componentId: "sc-u4hkyb-4"
})(["display:flex;justify-content:center;align-items:center;"]);
const CustomerContent = external_styled_components_default().p.withConfig({
  displayName: "CustomerSection__CustomerContent",
  componentId: "sc-u4hkyb-5"
})(["color:", ";padding:26px 390px 15px;@media (max-width:1200px){padding:26px 190px 15px;}@media (max-width:782px){padding:26px 90px 15px;}@media (max-width:500px){padding:26px 20px 15px;}"], variable/* BLACK_COLOR */.wC);
const CustomerName = external_styled_components_default().span.withConfig({
  displayName: "CustomerSection__CustomerName",
  componentId: "sc-u4hkyb-6"
})(["font-family:'Arial';font-style:normal;font-weight:700;font-size:16px;line-height:18px;color:", ";"], variable/* RED_COLOR */.Ss);
/* harmony default export */ const customer_section_CustomerSection = (CustomerSection);
;// CONCATENATED MODULE: ./src/component/section/news-section/NewsSection.jsx








const NewsSection = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(NewsWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* ContainerWrapper */.jL, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(NewsTitle, {
        children: "Tin T\u1EE9c"
      }), /*#__PURE__*/jsx_runtime_.jsx(NewsSubTitle, {
        children: "T\u1ED5ng h\u1EE3p tin t\u1EE9c m\u1EDBi nh\u1EA5t t\u1EEB B\u1EA3o V\u1EC7 An To\xE0n SECURITY"
      }), /*#__PURE__*/jsx_runtime_.jsx(NewsList, {
        children: !!newsMock && newsMock.map(item => /*#__PURE__*/jsx_runtime_.jsx(NewsItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(CardCpn/* default */.Z, {
            img: item.banner,
            heightImg: '288',
            alt: item.alt,
            title: item.title,
            content: item.description,
            route: item.link,
            cardStyle: {
              textAlign: 'center',
              boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'
            },
            titleStyle: {
              fontFamily: 'OSB',
              fontSize: '22px',
              padding: '18px 0px',
              color: variable/* MAIN_COLOR */.lU
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
            button: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: item.link,
              style: {
                textDecoration: 'underline',
                color: variable/* BLACK_COLOR */.wC,
                fontFamily: "'Lato', sans-serif",
                fontSize: '16px',
                paddingBottom: '28px',
                display: 'inline-block'
              },
              children: "Xem chi ti\u1EBFt"
            })
          }, item.alt)
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx(NewsButton, {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          children: "Xem th\xEAm tin t\u1EE9c kh\xE1c"
        })
      })]
    })
  });
};

const NewsWrapper = external_styled_components_default().section.withConfig({
  displayName: "NewsSection__NewsWrapper",
  componentId: "sc-8qicme-0"
})(["margin-top:85px;text-align:center;"]);
const NewsTitle = external_styled_components_default().h4.withConfig({
  displayName: "NewsSection__NewsTitle",
  componentId: "sc-8qicme-1"
})(["padding-top:5px;font-family:'OSB';font-style:normal;font-weight:700;font-size:32px;line-height:47px;"]);
const NewsSubTitle = external_styled_components_default().span.withConfig({
  displayName: "NewsSection__NewsSubTitle",
  componentId: "sc-8qicme-2"
})(["display:inline-block;padding-top:20px;padding-bottom:47px;font-family:'Lato',sans-serif;font-style:normal;font-weight:400;font-size:28px;line-height:34px;"]);
const NewsList = external_styled_components_default().div.withConfig({
  displayName: "NewsSection__NewsList",
  componentId: "sc-8qicme-3"
})(["display:flex;gap:37px;@media (max-width:892px){display:initial;}"]);
const NewsItem = external_styled_components_default().div.withConfig({
  displayName: "NewsSection__NewsItem",
  componentId: "sc-8qicme-4"
})(["@media (max-width:892px){margin-bottom:20px;}"]);
const NewsButton = external_styled_components_default().div.withConfig({
  displayName: "NewsSection__NewsButton",
  componentId: "sc-8qicme-5"
})(["text-align:center;margin-top:45px;a{font-family:'OSB';font-style:normal;font-weight:700;font-size:22px;line-height:33px;text-transform:uppercase;color:", ";padding:18px 52px;background-color:", ";text-decoration:none;display:inline-block;border-radius:35px;}"], variable/* WHITE_COLOR */.Y, variable/* RED_COLOR */.Ss);
const newsMock = [{
  banner: './img/bao-ve-muc-tieu-co-dinh.jpg',
  alt: 'Công Việc Bảo Vệ',
  title: 'Công Việc Bảo Vệ',
  description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo vệ cố định luôn là nhiệm vụ quan...',
  link: '/cong-viec-bao-ve.html'
}, {
  banner: './img/gioi-thieu-bao-ve-an-toan-01.jpg',
  alt: 'Công Việc Bảo Vệ',
  title: 'Công Việc Bảo Vệ',
  description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo vệ cố định luôn là nhiệm vụ quan...',
  link: '/cong-viec-bao-ve.html'
}, {
  banner: './img/gioi-thieu-bao-ve-an-toan-04.jpg',
  alt: 'Công Việc Bảo Vệ',
  title: 'Công Việc Bảo Vệ',
  description: 'Bảo vệ mục tiêu cố định luôn được xem là nhiệm vụ bảo vệ cơ yêu và quan trọng nhất, bởi mục tiêu bảo vệ cố định luôn là nhiệm vụ quan...',
  link: '/cong-viec-bao-ve.html'
}];
/* harmony default export */ const news_section_NewsSection = (NewsSection);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/trang-chu.js















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
    }), /*#__PURE__*/jsx_runtime_.jsx(intro_section_IntroSection, {}), /*#__PURE__*/jsx_runtime_.jsx(mission_section_MissionSection, {}), /*#__PURE__*/jsx_runtime_.jsx(choose_section_ChooseSection, {}), /*#__PURE__*/jsx_runtime_.jsx(service_section_ServiceSection, {}), /*#__PURE__*/jsx_runtime_.jsx(customer_section_CustomerSection, {}), /*#__PURE__*/jsx_runtime_.jsx(news_section_NewsSection, {})]
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
})(["position:absolute;top:50%;left:50%;z-index:3;transform:translate(-50%,-50%);text-align:center;.text-wrapper{color:", ";span{display:block;text-transform:uppercase;font-family:'OSB',sans-serif;}.text1{font-size:35px;}.text2{font-size:28px;}}.button-wrapper{display:inline-block;margin-top:15px;}a{display:flex;align-items:center;text-decoration:none;color:", ";padding:10px 20px;background-color:", ";border-radius:4px;span{margin-right:6px;}img{animation:", " 1s linear infinite;filter:invert(100%) sepia(81%) saturate(0%) hue-rotate(142deg) brightness(106%) contrast(104%);}}@media (max-width:", "){.text-wrapper{.text1{font-size:28px;}.text2{font-size:22px;}}a{font-size:16px;padding:5px 10px;}}@media (max-width:500px){.text-wrapper{.text1{font-size:22px;}.text2{font-size:16px;}}a{font-size:12px;padding:5px 10px;}}@media (max-width:420px){.text-wrapper{.text1{font-size:18px;}.text2{font-size:15px;}}a{font-size:12px;padding:5px 10px;}}"], variable/* WHITE_COLOR */.Y, variable/* WHITE_COLOR */.Y, variable/* THIRD_COLOR */.JU, animateArrow, variable/* XS_MAX */.vL);
/* harmony default export */ const trang_chu = (Home);

/***/ }),

/***/ 1164:
/***/ (() => {



/***/ })

};
;