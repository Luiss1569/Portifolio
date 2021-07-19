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
  var data = (0,D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  width: 45%;\n  margin-left: -10%;\n  z-index: 10;\n\n  @media screen and (max-width: 1024px){\n    width: 100%;\n    margin-right: none;\n  }\n"]);

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
  var data = (0,D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  flex: 1;\n  width: 100%;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n  height: 90vh;\n  margin: auto;\n @media screen and (max-width: 1024px){\n    flex-direction: column-reverse;\n     height: 90vh;\n     margin-top: -5%;\n  }\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0luZGV4L0NhcnJvc3NlbC9zdHlsZXMudHMiXSwibmFtZXMiOlsiQ2Fycm9zc2VsIiwic3R5bGVkIiwibW90aW9uIiwiU2VjdGlvblRleHQiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwidGl0bGUiLCJINCIsInByaW1hcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWNvdW5kIiwiU2VjdGlvbkltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQywwREFBTSxDQUFDQyxxREFBRCxDQUFULG1CQUFmO0FBaUJBLElBQU1DLFdBQVcsR0FBR0YsMERBQU0sQ0FBQ0MscURBQUQsQ0FBVCxxQkFtQlgsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBbkJNLEVBNEJYLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQTVCTSxFQW9DWCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FwQ00sQ0FBakI7QUFpREEsSUFBTUMsRUFBRSxHQUFHUCwwREFBTSxDQUFDQyxvREFBRCxDQUFULHFCQU1TLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsT0FBdkI7QUFBQSxDQU5kLEVBT0YsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxlQUF2QjtBQUFBLENBUEgsRUFXVyxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJLLE9BQXZCO0FBQUEsQ0FYaEIsQ0FBUjtBQW1CQSxJQUFNQyxVQUFVLEdBQUdYLDBEQUFNLENBQUNDLHFEQUFELENBQVQsb0JBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmNDkyZDk0YjkxYThjOGJlODc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENhcnJvc3NlbCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgaGVpZ2h0OiA5MHZoO1xuICBtYXJnaW46IGF1dG87XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgIGhlaWdodDogOTB2aDtcbiAgICAgbWFyZ2luLXRvcDogLTUlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB6LWluZGV4OiAxMDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICBkaXYgaDF7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRpdGxlfTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoNDBweCwgNHZ3LCAyMDBweCk7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMjJweCwgNHZoLCAyMDBweCk7XG4gICAgfVxuICB9XG4gIGRpdiBoM3tcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGl0bGV9O1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgMXZ3ICwgMjAwcHgpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDIwcHgsIDN2aCArIDFweCwgMjAwcHgpO1xuICAgIH1cbiAgfVxuICBkaXYgcHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGl0bGV9O1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgMXZ3ICsgNXB4LCAyNXB4KTtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDIwcHgsIDN2aCAtIDVweCwgMjAwcHgpO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgICB9XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBINCA9IHN0eWxlZChtb3Rpb24uaDQpYFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDMlIDYlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IGNsYW1wKDIwcHgsIDF2dywgMjdweCk7XG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY291bmR9O1xuICAgIH1cbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiBhdXRvXG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkltZyA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIHotaW5kZXg6IDEwO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBub25lO1xuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9