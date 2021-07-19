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
  var data = (0,D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  width: 45%;\n  z-index: 10;\n\n  @media screen and (max-width: 1024px){\n    width: 100%;\n    margin-right: none;\n  }\n"]);

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
  var data = (0,D_Repositorios_Portifolio_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  flex: 1;\n  width: 90%;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n  height: 90vh;\n  margin: auto;\n @media screen and (max-width: 1024px){\n    flex-direction: column-reverse;\n     height: 90vh;\n     margin-top: -5%;\n  }\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0luZGV4L0NhcnJvc3NlbC9zdHlsZXMudHMiXSwibmFtZXMiOlsiQ2Fycm9zc2VsIiwic3R5bGVkIiwibW90aW9uIiwiU2VjdGlvblRleHQiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwidGl0bGUiLCJINCIsInByaW1hcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWNvdW5kIiwiU2VjdGlvbkltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQywwREFBTSxDQUFDQyxxREFBRCxDQUFULG1CQUFmO0FBaUJBLElBQU1DLFdBQVcsR0FBR0YsMERBQU0sQ0FBQ0MscURBQUQsQ0FBVCxxQkFtQlgsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBbkJNLEVBNEJYLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQTVCTSxFQW9DWCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FwQ00sQ0FBakI7QUFpREEsSUFBTUMsRUFBRSxHQUFHUCwwREFBTSxDQUFDQyxvREFBRCxDQUFULHFCQU1TLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsT0FBdkI7QUFBQSxDQU5kLEVBT0YsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxlQUF2QjtBQUFBLENBUEgsRUFXVyxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJLLE9BQXZCO0FBQUEsQ0FYaEIsQ0FBUjtBQW1CQSxJQUFNQyxVQUFVLEdBQUdYLDBEQUFNLENBQUNDLHFEQUFELENBQVQsb0JBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA1OWMwM2MwMTZlMWQyYjhkODM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENhcnJvc3NlbCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDFzO1xuICBoZWlnaHQ6IDkwdmg7XG4gIG1hcmdpbjogYXV0bztcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICBtYXJnaW4tdG9wOiAtNSU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHotaW5kZXg6IDEwO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gIGRpdiBoMXtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGl0bGV9O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiBjbGFtcCg0MHB4LCA0dncsIDIwMHB4KTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgyMnB4LCA0dmgsIDIwMHB4KTtcbiAgICB9XG4gIH1cbiAgZGl2IGgze1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50aXRsZX07XG4gICAgZm9udC1zaXplOiBjbGFtcCgyNHB4LCAxdncgLCAyMDBweCk7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgM3ZoICsgMXB4LCAyMDBweCk7XG4gICAgfVxuICB9XG4gIGRpdiBwe1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50aXRsZX07XG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAxdncgKyA1cHgsIDI1cHgpO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgM3ZoIC0gNXB4LCAyMDBweCk7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgIH1cbiAgfVxuYFxuZXhwb3J0IGNvbnN0IEg0ID0gc3R5bGVkKG1vdGlvbi5oNClgXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogMyUgNiU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmRDb2xvcn07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgMXZ3LCAyN3B4KTtcbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb3VuZH07XG4gICAgfVxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IGF1dG9cbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uSW1nID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuICB3aWR0aDogNDUlO1xuICB6LWluZGV4OiAxMDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogbm9uZTtcbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==