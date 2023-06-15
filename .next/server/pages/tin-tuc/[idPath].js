"use strict";
(() => {
var exports = {};
exports.id = 64;
exports.ids = [64];
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

/***/ 9705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1416);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9229);
/* harmony import */ var component_banner_hotline_BannerHotline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6520);
/* harmony import */ var component_banner_send_phone_BannerSendPhone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3209);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(755);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3477);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const DetailPage = props => {
  const {
    newsColl
  } = props;
  const bodyContentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(() => {
    if (bodyContentRef.current) {
      console.log(bodyContentRef); // bodyContentRef.current.childNodes.map((item) => {
      //     if (item.localName === 'h2' || item.localName === 'h3' || item.localName === 'h4' || item.localName === 'h5') {
      //         item.style.paddingBottom = '20px';
      //     } else if (item.localName === 'p') {
      //         item.style.paddingBottom = '10px';
      //     } else if (item.localName === 'ul') {
      //         item.style.paddingBottom = '20px';
      //     }
      // })

      for (const child of bodyContentRef.current.children) {
        if (child.tagName === 'H2' || child.tagName === 'H3' || child.tagName === 'H4' || child.tagName === 'H5') {
          child.style.paddingBottom = '10px';
        } else if (child.tagName === 'P') {
          child.style.paddingBottom = '20px';
        } else if (child.tagName === 'UL') {
          child.style.paddingBottom = '12px';
          child.style.paddingLeft = '20px';

          for (const nestedChil of child.children) {
            if (nestedChil.tagName === 'LI') {
              nestedChil.style.paddingBottom = '8px';
            }
          }
        }
      }
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("title", {
        children: newsColl.titlePage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("meta", {
        name: "description",
        content: newsColl.metaDescription
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Container__WEBPACK_IMPORTED_MODULE_0__/* .ContainerWrapper */ .jL, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ContentWrapperWWW, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ContentText4, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h2", {
            style: {
              textAlign: 'center',
              padding: '20px 0px',
              fontFamily: 'Oswald'
            },
            children: newsColl.titleContent
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            ref: bodyContentRef,
            className: "body_content",
            dangerouslySetInnerHTML: {
              __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_9___default().sanitize(newsColl.editorContent)
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ContentBanner4, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(component_banner_hotline_BannerHotline__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SendPhoneWrapper4, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(component_banner_send_phone_BannerSendPhone__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
          })]
        })]
      })
    })]
  });
};

async function getServerSideProps(context) {
  const {
    idPath
  } = context.query;
  const newsColl = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, 'news', idPath));
  const data = newsColl.data();
  return {
    props: {
      newsColl: data
    }
  };
}
;
const ContentWrapperWWW = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "idPath__ContentWrapperWWW",
  componentId: "sc-ocp00i-0"
})(["width:100%;display:flex;@media (max-width:1100px){flex-wrap:wrap;}"]);
const ContentText4 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "idPath__ContentText4",
  componentId: "sc-ocp00i-1"
})(["width:55%;padding:0px 40px;@media (max-width:1100px){width:100%;}@media (max-width:600px){padding:initial;}"]);
const ContentBanner4 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "idPath__ContentBanner4",
  componentId: "sc-ocp00i-2"
})(["width:45%;@media (max-width:1100px){width:100%;}"]);
const SendPhoneWrapper4 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "idPath__SendPhoneWrapper4",
  componentId: "sc-ocp00i-3"
})(["margin-top:15px;@media (max-width:1000px){margin-bottom:15px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 3059:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [416,789], () => (__webpack_exec__(9705)));
module.exports = __webpack_exports__;

})();