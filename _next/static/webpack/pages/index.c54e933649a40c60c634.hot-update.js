self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/views/Index/Carrossel/styles.ts":
/*!*********************************************!*\
  !*** ./src/views/Index/Carrossel/styles.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carrossel": function() { return /* binding */ Carrossel; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "H4": function() { return /* binding */ H4; },
/* harmony export */   "SectionImg": function() { return /* binding */ SectionImg; }
/* harmony export */ });
/* harmony import */ var D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject4() {
  var data = (0,D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  width: 45%;\n  z-index: 10;\n\n  @media screen and (max-width: 1024px){\n    width: 50%;\n    margin-right: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: min-content;\n    border-radius: 50px;\n    padding: 3% 6%;\n    cursor: pointer;\n      z-index: 10;\n    background-color: ", ";\n    color: ", ";\n    font-family: 'Roboto', sans-serif;\n    font-size: clamp(20px, 1vw, 27px);\n    &:hover{\n      background-color: ", ";\n    }\n @media screen and (max-width: 1024px){\n      text-align: center;\n      margin: auto\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  width: 40%;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  z-index: 10;\n    @media screen and (max-width: 1024px){\n       align-items: center;\n     height: max-content;\n     width: 90%;\n    }\n    @media screen and (max-width: 768px) {\n     align-items: center;\n     height: max-content;\n     width: 90%;\n    }\n  div h1{\n    color: ", ";\n    font-weight: 700;\n    font-size: clamp(40px, 4vw, 200px);\n    @media screen and (max-width: 1024px){\n      text-align: center;\n      font-size: clamp(22px, 4vh, 200px);\n    }\n  }\n  div h3{\n    color: ", ";\n    font-size: clamp(24px, 1vw , 200px);\n    @media screen and (max-width: 1024px){\n      text-align: center;\n      font-size: clamp(20px, 3vh + 1px, 200px);\n    }\n  }\n  div p{\n    color: ", ";\n    font-size: clamp(20px, 1vw + 5px, 25px);\n    width: 75%;\n    margin-bottom: 5%;\n    @media screen and (max-width: 1024px){\n      text-align: center;\n      font-size: clamp(20px, 3vh - 5px, 200px);\n      margin: auto;\n      margin-top: 15px;\n      margin-bottom: 10px\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  flex: 1;\n  width: 90%;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n  height: 90vh;\n  margin-left: 10%;\n @media screen and (max-width: 1024px){\n    flex-direction: column-reverse;\n     height: 90vh;\n     margin-left: none;\n     margin-top: -5%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Carrossel = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div)(_templateObject());
var SectionText = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div)(_templateObject2(), function (props) {
  return props.theme.colors.title;
}, function (props) {
  return props.theme.colors.title;
}, function (props) {
  return props.theme.colors.title;
});
var H4 = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h4)(_templateObject3(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.backgroundColor;
}, function (props) {
  return props.theme.colors.secound;
});
var SectionImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div)(_templateObject4());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0luZGV4L0NhcnJvc3NlbC9zdHlsZXMudHMiXSwibmFtZXMiOlsiQ2Fycm9zc2VsIiwic3R5bGVkIiwibW90aW9uIiwiU2VjdGlvblRleHQiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwidGl0bGUiLCJINCIsInByaW1hcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWNvdW5kIiwiU2VjdGlvbkltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQywwREFBTSxDQUFDQyxxREFBRCxDQUFULG1CQUFmO0FBa0JBLElBQU1DLFdBQVcsR0FBR0YsMERBQU0sQ0FBQ0MscURBQUQsQ0FBVCxxQkFtQlgsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBbkJNLEVBNEJYLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQTVCTSxFQW9DWCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FwQ00sQ0FBakI7QUFpREEsSUFBTUMsRUFBRSxHQUFHUCwwREFBTSxDQUFDQyxvREFBRCxDQUFULHFCQU1TLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsT0FBdkI7QUFBQSxDQU5kLEVBT0YsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxlQUF2QjtBQUFBLENBUEgsRUFXVyxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJLLE9BQXZCO0FBQUEsQ0FYaEIsQ0FBUjtBQW1CQSxJQUFNQyxVQUFVLEdBQUdYLDBEQUFNLENBQUNDLHFEQUFELENBQVQsb0JBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1NGU5MzM2NDlhNDBjNjBjNjM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENhcnJvc3NlbCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDFzO1xuICBoZWlnaHQ6IDkwdmg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgIGhlaWdodDogOTB2aDtcbiAgICAgbWFyZ2luLWxlZnQ6IG5vbmU7XG4gICAgIG1hcmdpbi10b3A6IC01JTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgei1pbmRleDogMTA7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgZGl2IGgxe1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50aXRsZX07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGNsYW1wKDQwcHgsIDR2dywgMjAwcHgpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDIycHgsIDR2aCwgMjAwcHgpO1xuICAgIH1cbiAgfVxuICBkaXYgaDN7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRpdGxlfTtcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHgsIDF2dyAsIDIwMHB4KTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAzdmggKyAxcHgsIDIwMHB4KTtcbiAgICB9XG4gIH1cbiAgZGl2IHB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRpdGxlfTtcbiAgICBmb250LXNpemU6IGNsYW1wKDIwcHgsIDF2dyArIDVweCwgMjVweCk7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAzdmggLSA1cHgsIDIwMHB4KTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgfVxuICB9XG5gXG5leHBvcnQgY29uc3QgSDQgPSBzdHlsZWQobW90aW9uLmg0KWBcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiAzJSA2JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZENvbG9yfTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAxdncsIDI3cHgpO1xuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvdW5kfTtcbiAgICB9XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogYXV0b1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25JbWcgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIHdpZHRoOiA0NSU7XG4gIHotaW5kZXg6IDEwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IG5vbmU7XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=