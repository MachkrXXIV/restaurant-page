/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/ambient.jpg */ "./src/imgs/ambient.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * Style Sheet Structure:\n * Top-Bottom\n * Outside-In\n * Left-Right\n * Block Element Modifier\n */\n:root {\n  color: black;\n  font-size: 16;\n}\n\n*,\n*::before,\n*::after {\n  border: 2px solid red;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: hsl(67deg, 81%, 96%);\n  min-height: 100vh;\n  width: 100vw;\n}\n\n.content {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.nav {\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100vw;\n  padding: 1rem;\n  margin: 1rem;\n  background-color: hsla(0deg, 16%, 17%, 0.5);\n  font-size: 2rem;\n  color: hsla(60deg, 18%, 84%, 0.8);\n}\n.nav__tab {\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  gap: 0.2rem;\n  font-size: 1.5rem;\n  color: hsla(60deg, 33%, 96%, 0.8);\n  cursor: pointer;\n}\n.nav__item {\n  padding: 0.25rem 0.5rem;\n  border-radius: 1rem;\n}\n.nav--sticky {\n  position: sticky;\n  top: 1rem;\n}\n\n.home {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  align-items: center;\n  width: min(40rem, 80%);\n  min-height: 100%;\n  height: 80vh;\n  margin: 1rem;\n  background-color: hsla(0deg, 22%, 92%, 0.9);\n  border-radius: 5%/5%;\n  color: hsla(0deg, 9%, 9%, 0.9);\n}\n.home__slogan {\n  font-size: 3rem;\n}\n.home__order {\n  font-size: 2.5rem;\n  text-align: center;\n}\n.home__pick-up {\n  color: hsla(0deg, 22%, 92%, 0.9);\n  font-weight: 700;\n  background-color: hsla(0deg, 16%, 17%, 0.5);\n  padding: 0.25rem 0.7rem;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n.home__delivery {\n  color: hsla(0deg, 22%, 92%, 0.9);\n  font-weight: 700;\n  background-color: hsla(0deg, 16%, 17%, 0.5);\n  padding: 0.25rem 0.7rem;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n.home--img {\n  width: 90%;\n  border-radius: 20%;\n  border-bottom-left-radius: 5%;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n.home--shadow {\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n}\n\n.menu {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  align-items: center;\n  width: min(40rem, 80%);\n  min-height: 100%;\n  height: 80vh;\n  margin: 1rem;\n  background-color: hsla(0deg, 22%, 92%, 0.9);\n  border-radius: 5%/5%;\n  color: hsla(0deg, 9%, 9%, 0.9);\n  width: max(500px, 80%);\n}\n.menu__gallery {\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  flex: 1 1 0px;\n}\n.menu__item {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n  width: 33.3333333333%;\n  border: 2px solid blue;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n.menu__itemImg {\n  height: 200px;\n  width: min(200px, 80%);\n  max-width: 100%;\n}\n.menu__itemName {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\n@media (max-width: 600px) {\n  .menu__gallery {\n    align-items: center;\n    width: 100%;\n  }\n  .menu__item {\n    width: 100%;\n  }\n}\n.container__main {\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  margin-top: -20rem;\n  padding-top: 20rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;;;;;;EAAA;AAsCA;EACE,YAAA;EACA,aAAA;AA9BF;;AAiCA;;;EAGE,qBAAA;EACA,sBAAA;AA9BF;;AAiCA;EACE,sCAxCW;EAyCX,iBAAA;EACA,YAAA;AA9BF;;AAiCA;EAnCE,aAAA;EACA,iBAmCmB;EAlCnB,uBAH4C;EAI5C,mBAJ4D;EAsC5D,kBAAA;AA3BF;;AA+BA;EAzCE,aAAA;EACA,cAyCmB;EAxCnB,8BAwCwB;EAvCxB,mBAuCuC;EACvC,YAAA;EACA,aAAA;EACA,YAAA;EACA,2CAvDY;EAwDZ,eAAA;EACA,iCAxDU;AA+BZ;AA2BE;EAlDA,aAAA;EACA,cAkDqB;EAjDrB,uBAH4C;EAI5C,mBAJ4D;EAqD1D,iBAAA;EACA,WAAA;EACA,iBAAA;EACA,iCA9DO;EA+DP,eAAA;AAtBJ;AAyBE;EACE,uBAAA;EACA,mBAAA;AAvBJ;AA0BE;EACE,gBAAA;EACA,SAAA;AAxBJ;;AA6BA;EAvEE,aAAA;EACA,iBAuEmB;EAtEnB,6BAsE2B;EArE3B,mBAJ4D;EAQ5D,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,2CAjBa;EAkBb,oBAAA;EACA,8BAlBgB;AA6DlB;AAmBE;EACE,eAAA;AAjBJ;AAoBE;EACE,iBAAA;EACA,kBAAA;AAlBJ;AAqBE;EACE,gCA3FW;EA4FX,gBAAA;EACA,2CAhGU;EAiGV,uBAAA;EACA,mBAAA;EACA,eAAA;AAnBJ;AAsBE;EACE,gCApGW;EAqGX,gBAAA;EACA,2CAzGU;EA0GV,uBAAA;EACA,mBAAA;EACA,eAAA;AApBJ;AAuBE;EACE,UAAA;EACA,kBAAA;EACA,6BAAA;EACA,+EAAA;AArBJ;AAyBE;EACE,8IAAA;AAvBJ;;AA8BA;EAtHE,aAAA;EACA,iBAsHmB;EArHnB,6BAqH2B;EApH3B,mBAJ4D;EAQ5D,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,2CAjBa;EAkBb,oBAAA;EACA,8BAlBgB;EA8HhB,sBAAA;AAlBF;AAoBE;EA3HA,aAAA;EACA,cA2HqB;EA1HrB,uBA0H0B;EAzH1B,qBAyHkC;EAChC,eAAA;EACA,kBAAA;EACA,aAAA;AAfJ;AAkBE;EAlIA,aAAA;EACA,iBAkIqB;EAjIrB,uBAH4C;EAI5C,mBAJ4D;EAqI1D,WAAA;EACA,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;AAbJ;AAeI;EACE,aAAA;EACA,sBAAA;EACA,eAAA;AAbN;AAgBI;EACE,iBAAA;EACA,gBAAA;AAdN;;AAoBA;EACE;IACE,mBAAA;IACA,WAAA;EAjBF;EAoBA;IACE,WAAA;EAlBF;AACF;AAqBA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EAGA,yDAAA;EACA,sBAAA;EACA,2BAAA;AArBF","sourcesContent":["/*\n * Style Sheet Structure:\n * Top-Bottom\n * Outside-In\n * Left-Right\n * Block Element Modifier\n */\n\n// Reminder to import fonts\n\n// Variables\n$bg-primary: hsl(67, 81%, 96%);\n$nav-overlay: hsla(0, 16%, 17%, 0.5);\n$logo-font: hsla(60, 18%, 84%, 0.8);\n$tab-font: hsla(60, 33%, 96%, 0.8);\n$home-overlay: hsla(0, 22%, 92%, 0.9);\n$home-font-color: hsla(0, 9%, 9%, 0.9);\n$numMenuItems: 6;\n\n// Mixins\n@mixin init-flex($orientation: row, $justify: center, $align: center) {\n  display: flex;\n  flex-flow: $orientation;\n  justify-content: $justify;\n  align-items: $align;\n}\n\n@mixin default-styling {\n  width: min(40rem, 80%);\n  min-height: 100%;\n  height: 80vh;\n  margin: 1rem;\n  background-color: $home-overlay;\n  border-radius: 5% / 5%;\n  color: $home-font-color;\n}\n\n// Base\n:root {\n  color: black;\n  font-size: 16;\n}\n\n*,\n*::before,\n*::after {\n  border: 2px solid red;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: $bg-primary;\n  min-height: 100vh;\n  width: 100vw;\n}\n\n.content {\n  @include init-flex(column);\n  position: relative;\n}\n\n// Header\n.nav {\n  @include init-flex(row, space-between, center);\n  width: 100vw;\n  padding: 1rem;\n  margin: 1rem;\n  background-color: $nav-overlay;\n  font-size: 2rem;\n  color: $logo-font;\n\n  &__tab {\n    @include init-flex(row);\n    margin-left: auto;\n    gap: 0.2rem;\n    font-size: 1.5rem;\n    color: $tab-font;\n    cursor: pointer;\n  }\n\n  &__item {\n    padding: 0.25rem 0.5rem;\n    border-radius: 1rem;\n  }\n\n  &--sticky {\n    position: sticky;\n    top: 1rem;\n  }\n}\n\n// Home Page also pls add hover effect for home\n.home {\n  @include init-flex(column, space-around);\n  @include default-styling;\n\n  &__slogan {\n    font-size: 3rem;\n  }\n\n  &__order {\n    font-size: 2.5rem;\n    text-align: center;\n  }\n\n  &__pick-up {\n    color: $home-overlay;\n    font-weight: 700;\n    background-color: $nav-overlay;\n    padding: 0.25rem 0.7rem;\n    border-radius: 2rem;\n    cursor: pointer;\n  }\n\n  &__delivery {\n    color: $home-overlay;\n    font-weight: 700;\n    background-color: $nav-overlay;\n    padding: 0.25rem 0.7rem;\n    border-radius: 2rem;\n    cursor: pointer;\n  }\n\n  &--img {\n    width: 90%;\n    border-radius: 20%;\n    border-bottom-left-radius: 5%;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n      rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  }\n\n  &--shadow {\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  }\n}\n\n// Menu\n.menu {\n  @include init-flex(column, space-around);\n  @include default-styling;\n  width: Max(500px, 80%);\n\n  &__gallery {\n    @include init-flex(row, center, flex-end);\n    flex-wrap: wrap;\n    overflow-y: scroll;\n    flex: 1 1 0px;\n  }\n\n  &__item {\n    @include init-flex(column);\n    height: 50%;\n    width: calc(100% / 3);\n    border: 2px solid blue;\n    text-align: center;\n    overflow-wrap: break-word;\n\n    &Img {\n      height: 200px;\n      width: Min(200px, 80%);\n      max-width: 100%;\n    }\n\n    &Name {\n      font-size: 1.2rem;\n      font-weight: 700;\n    }\n  }\n}\n\n// menu small screen\n@media (max-width: 600px) {\n  .menu__gallery {\n    align-items: center;\n    width: 100%;\n  }\n\n  .menu__item {\n    width: 100%;\n  }\n}\n\n.container__main {\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  margin-top: -20rem;\n  padding-top: 20rem;\n\n  //img\n  background-image: url(\"../imgs/ambient.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.scss"],"names":[],"mappings":"AAAA;;;CAAA;AAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AAAF;;AAEA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AACF;;AACA;EACE,cAAA;AAEF;;AAAA;;EAEE,gBAAA;AAGF;;AADA;;EAEE,YAAA;AAIF;;AAFA;;;;EAIE,WAAA;EACA,aAAA;AAKF;;AAHA;EACE,yBAAA;EACA,iBAAA;AAMF","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/container.js":
/*!********************************!*\
  !*** ./src/pages/container.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @desc cleans container then adds content to it
 * @param {pageBlock} content
 */
const changeContent = function (container, content) {
  container.replaceChildren();
  container.appendChild(content);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeContent);


/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @desc creates tabs
 * @param {listElement} list
 * @param {int} numTabs
 */
const createTabs = function (list, numTabs) {
  for (let i = 0; i < numTabs; i++) {
    let tab = document.createElement("li");
    list.appendChild(tab);
    tab.classList.add("nav__item");
  }
};

const loadHeader = function () {
  //create elements
  const header = document.createElement("nav");
  const nav__logo = document.createElement("div");
  const nav__tab = document.createElement("ul");
  createTabs(nav__tab, 3);

  //add to header
  header.appendChild(nav__logo);
  header.appendChild(nav__tab);

  //add style
  header.classList.add("nav", "nav--sticky");
  nav__logo.classList.add("nav__logo");
  nav__tab.classList.add("nav__tab");

  // add text
  nav__logo.textContent = "Little Chef's Cuisines";
  nav__tab.childNodes[0].textContent = "Home";
  nav__tab.childNodes[1].textContent = "Menu";
  nav__tab.childNodes[2].textContent = "Contact";

  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_little_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/little-chef.jpeg */ "./src/imgs/little-chef.jpeg");
/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.js */ "./src/pages/container.js");



const loadHome = function () {
  const home = document.createElement("main");
  const slogan = document.createElement("h1");
  const rat = document.createElement("img");
  const order = document.createElement("h2");

  // Add src url
  rat.src = _imgs_little_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__;

  // Add to page
  home.appendChild(slogan);
  home.appendChild(rat);
  home.appendChild(order);

  // Add classes(styling)
  home.classList.add("home");
  home.classList.add("home--shadow");
  slogan.classList.add("home__slogan");
  order.classList.add("home__order");
  rat.classList.add("home--img");

  // Add text
  slogan.textContent = "Little Chef is here to impress!";
  order.innerHTML =
    'Order online for <br/> <span class="home__pick-up">pick-up</span> or <span class="home__delivery">delivery</span> today!';

  return home;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_food_food_italianTaco_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/food/food_italianTaco.jpg */ "./src/imgs/food/food_italianTaco.jpg");
/* harmony import */ var _imgs_food_food_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/food/food_pasta.jpg */ "./src/imgs/food/food_pasta.jpg");
/* harmony import */ var _imgs_food_food_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/food/food_pizza.jpg */ "./src/imgs/food/food_pizza.jpg");
/* harmony import */ var _imgs_food_food_ratatouille_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/food/food_ratatouille.jpg */ "./src/imgs/food/food_ratatouille.jpg");
/* harmony import */ var _imgs_food_food_sandwich_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/food/food_sandwich.jpg */ "./src/imgs/food/food_sandwich.jpg");
/* harmony import */ var _imgs_food_food_specialty_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/food/food_specialty.jpg */ "./src/imgs/food/food_specialty.jpg");







/**
 *
 * @param {string} name
 * @param {imgPath} fileName
 * @param {string} description
 * @returns menuItemElement
 */
const createMenuItem = function (name, fileName, description) {
  const menuItem = document.createElement("article");
  const foodImg = document.createElement("img");
  const foodName = document.createElement("h2");
  const foodDescription = document.createElement("p");

  // Add classes
  menuItem.classList.add("menu__item");
  foodImg.classList.add("menu__itemImg");
  foodName.classList.add("menu__itemName");
  foodDescription.classList.add("menu__itemDesc");

  // Create text
  foodName.textContent = name;
  foodDescription.textContent = description;

  // foodImg.src = `../imgs/food/food_${fileName.toLowerCase()}.jpg`;
  foodImg.src = fileName;

  // Add to menuItem
  menuItem.appendChild(foodImg);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
};

const loadMenu = function () {
  // Create elements
  const menu = document.createElement("main");
  const menu__gallery = document.createElement("div");

  menu__gallery.appendChild(
    createMenuItem("Rat tail", _imgs_food_food_specialty_jpg__WEBPACK_IMPORTED_MODULE_5__, "This is little chef's signature")
  );
  menu__gallery.appendChild(
    createMenuItem(
      "Linguine",
      _imgs_food_food_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__,
      "Pasta | Olives | Special-Tomato Sauce | Famous Meatballs"
    )
  );
  menu__gallery.appendChild(
    createMenuItem("Pilla Pizza", _imgs_food_food_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__, "Pinapple | Eggs | Onions | Cilantro")
  );
  menu__gallery.appendChild(
    createMenuItem("Ratatouille", _imgs_food_food_ratatouille_jpg__WEBPACK_IMPORTED_MODULE_3__, "Honestly idk whats in this")
  );
  menu__gallery.appendChild(
    createMenuItem(
      "Sosa Sandwich",
      _imgs_food_food_sandwich_jpg__WEBPACK_IMPORTED_MODULE_4__,
      "Toasted 5-spice bread | Chili | Mushrooms | Turkey | Chef's Sauce"
    )
  );
  menu__gallery.appendChild(
    createMenuItem(
      "Les Taco Bout This",
      _imgs_food_food_italianTaco_jpg__WEBPACK_IMPORTED_MODULE_0__,
      "Roma Tomatoes | Baguette | Cream | Meat | Pate"
    )
  );

  // Add to page
  menu.appendChild(menu__gallery);

  //Add classes(styling)
  menu.classList.add("menu");
  menu__gallery.classList.add("menu__gallery");

  return menu;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/imgs/ambient.jpg":
/*!******************************!*\
  !*** ./src/imgs/ambient.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ambient.jpg";

/***/ }),

/***/ "./src/imgs/food/food_italianTaco.jpg":
/*!********************************************!*\
  !*** ./src/imgs/food/food_italianTaco.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food_italianTaco.jpg";

/***/ }),

/***/ "./src/imgs/food/food_pasta.jpg":
/*!**************************************!*\
  !*** ./src/imgs/food/food_pasta.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food_pasta.jpg";

/***/ }),

/***/ "./src/imgs/food/food_pizza.jpg":
/*!**************************************!*\
  !*** ./src/imgs/food/food_pizza.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food_pizza.jpg";

/***/ }),

/***/ "./src/imgs/food/food_ratatouille.jpg":
/*!********************************************!*\
  !*** ./src/imgs/food/food_ratatouille.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food_ratatouille.jpg";

/***/ }),

/***/ "./src/imgs/food/food_sandwich.jpg":
/*!*****************************************!*\
  !*** ./src/imgs/food/food_sandwich.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food_sandwich.jpg";

/***/ }),

/***/ "./src/imgs/food/food_specialty.jpg":
/*!******************************************!*\
  !*** ./src/imgs/food/food_specialty.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food_specialty.jpg";

/***/ }),

/***/ "./src/imgs/little-chef.jpeg":
/*!***********************************!*\
  !*** ./src/imgs/little-chef.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "little-chef.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _imgs_ambient_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/ambient.jpg */ "./src/imgs/ambient.jpg");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/header */ "./src/pages/header.js");
/* harmony import */ var _pages_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/container */ "./src/pages/container.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");








/**
 * @desc On first load, creates container, nav, and start on home page
 */
function initializePage() {
  const content = document.querySelector(".content");
  const container = document.createElement("main");

  container.classList.add("container__main");

  content.appendChild((0,_pages_header__WEBPACK_IMPORTED_MODULE_4__["default"])());
  content.appendChild(container);
  // changeContent(container, loadHome());
  // changeContent(container, loadMenu());
}

initializePage();

})();

/******/ })()
;
//# sourceMappingURL=main.19437858d4e31f0d1d89.js.map