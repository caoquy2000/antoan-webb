"use strict";
(() => {
var exports = {};
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 755:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
  apiKey: "AIzaSyD7qa1mpqRDpHwKbLUv4pNGmkoJzCxbSMc",
  authDomain: "antoan-data.firebaseapp.com",
  projectId: "antoan-data",
  storageBucket: "antoan-data.appspot.com",
  messagingSenderId: "206272901359",
  appId: "1:206272901359:web:955af0fb8fcbfc95abeb1a"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var component_section_banner_section_BannerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_variable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9229);
/* harmony import */ var Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1416);
/* harmony import */ var component_card_cpn_CardCpn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5379);
/* harmony import */ var component_banner_hotline_BannerHotline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6520);
/* harmony import */ var component_banner_send_phone_BannerSendPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3209);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_WebUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9412);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3477);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(755);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _firebase__WEBPACK_IMPORTED_MODULE_11__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _firebase__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















async function getNews() {
  const newsCollec = await getDocs(collection(db, 'news'));
  const newsData = newsCollec.docs.map(doc => doc.data());
  return newsData;
}

;

const News = props => {
  const {
    newsColl
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]),
        children: "Tin T\u1EE9c"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(component_section_banner_section_BannerSection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      imgLink: './img/hinh-4.jpg'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("section", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]) + " " + "service_page_section_wrapper",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Container__WEBPACK_IMPORTED_MODULE_4__/* .ContainerWrapper */ .jL, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]) + " " + "service_page_container",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h2", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]) + " " + "service_page_title",
            children: "Tin T\u1EE9c B\u1EA3o V\u1EC7 An To\xE0n"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]) + " " + "page_container",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]) + " " + "service_list",
              children: newsColl && newsColl.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(component_card_cpn_CardCpn__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                  img: item.uploadBannerImg,
                  heightImg: "210",
                  alt: item.altImgBanner,
                  title: item.titleContent,
                  content: item.metaDescription,
                  route: item.idPath,
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
                }, item.idPath)
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]) + " " + "service_banner",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(component_banner_hotline_BannerHotline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["2767949099", [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At]]]) + " " + "send_phone_wrapper",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(component_banner_send_phone_BannerSendPhone__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2767949099",
      dynamic: [common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At],
      children: [".service_page_section_wrapper.__jsx-style-dynamic-selector{margin-top:100px;}", ".service_page_container.__jsx-style-dynamic-selector{padding-top:26px;padding-bottom:60px;}", `.service_page_title.__jsx-style-dynamic-selector{font-family:'OSB';font-style:normal;font-weight:700;font-size:30px;line-height:44px;text-transform:uppercase;color:${common_variable__WEBPACK_IMPORTED_MODULE_3__/* .LOGO_COLOR */ .At};padding-bottom:15px;}`, ".page_container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".service_list.__jsx-style-dynamic-selector{width:50%;display:grid;grid-template-columns:repeat(2,1fr);-webkit-column-gap:87px;column-gap:87px;row-gap:64px;}", ".service_banner.__jsx-style-dynamic-selector{width:50%;padding-left:100px;}", ".send_phone_wrapper.__jsx-style-dynamic-selector{margin-top:15px;}", "@media (max-width:1200px){.service_list.__jsx-style-dynamic-selector{gap:20px 35px;}.service_banner.__jsx-style-dynamic-selector{padding-left:40px;}}", "@media (max-width:1000px){.page_container.__jsx-style-dynamic-selector{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.service_list.__jsx-style-dynamic-selector{width:100%;gap:55px 100px;}.service_banner.__jsx-style-dynamic-selector{width:100%;padding-left:initial;}.send_phone_wrapper.__jsx-style-dynamic-selector{margin-bottom:15px;}}", "@media (max-width:800px){.service_list.__jsx-style-dynamic-selector{gap:30px 50px;}}", "@media (max-width:600px){.service_list.__jsx-style-dynamic-selector{grid-template-columns:repeat(1,1fr);}}", "@media (max-width:550px){.service_page_section_wrapper.__jsx-style-dynamic-selector{margin-top:50px;}}"]
    })]
  });
};

async function getServerSideProps(context) {
  const newsCollec = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_11__.db, 'news'));
  const newsData = newsCollec.docs.map(doc => doc.data());
  return {
    props: {
      newsColl: newsData
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9412:
/***/ (() => {


// UNUSED EXPORTS: getAnNews, getNewsList, setNewsList

;// CONCATENATED MODULE: ./src/core/WebMgr.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WebMgr {
  constructor() {
    _defineProperty(this, "setNewsList", newsList => {
      WebMgr.news = newsList;
    });

    _defineProperty(this, "getNewsList", () => {
      console.log('list', WebMgr.news);
      return WebMgr.news;
    });

    _defineProperty(this, "getAnNews", newsId => {
      return WebMgr.news.filter(news => news.idPath === newsId);
    });
  }

  static getInstance() {
    if (!WebMgr.instance) WebMgr.instance = new WebMgr();
    return WebMgr.instance;
  } //Variable


}

_defineProperty(WebMgr, "instance", null);

_defineProperty(WebMgr, "news", []);
;// CONCATENATED MODULE: ./src/utils/WebUtil.ts

const WebInstance = WebMgr.getInstance();
const getNewsList = () => WebInstance.getNewsList();
const getAnNews = newsId => WebInstance.getAnNews(newsId);
const setNewsList = newsList => WebInstance.setNewsList(newsList);

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [416,789,766,785], () => (__webpack_exec__(6455)));
module.exports = __webpack_exports__;

})();