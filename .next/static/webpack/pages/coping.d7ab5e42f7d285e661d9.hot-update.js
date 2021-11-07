"use strict";
self["webpackHotUpdate_N_E"]("pages/coping",{

/***/ "./pages/coping.js":
/*!*************************!*\
  !*** ./pages/coping.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\sopan\\OneDrive\\Documents\\Personal Projects\\anxiety\\pages\\coping.js",
    _this = undefined,
    _s = $RefreshSig$();





var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var i = 0;
var cope_methods = [{
  title: "Breathing",
  description: "Square Breathing, Deep Breaths, Counting Breaths to 10 or 20. This can be obvious, yet most people take advantage of such a simple technique. During panic attacks and even casual moments of anxiety or stress, this technique can be useful."
}, {
  title: "Share your Anxiety",
  description: "Don't avoid your anxious thoughts, which can make them worse. Talk them over with a friend or family member, who can help you put them in perspective."
}, {
  title: "Don't Criticize Feelings",
  description: "Instead, say, \"This is a normal, healthy, response by my body to these circumstances, which are complicated, stressful, or difficult. It's OK to feel this way.\""
}, {
  title: "Use a Mantra",
  description: "A mantra can shift your mind away from anxious thoughts that play over and over in your head, Kissen says. An example: \"These thoughts are uncomfortable, but not dangerous,\" and \"This, too, will pass.\""
}, {
  title: "Redirect Nervous Energy",
  description: "Anxiety can be like a motor revving, says licensed professional counselor Lisa Henderson. \"Take control of that energy and put it somewhere else,\" says Henderson, co-founder and chief executive officer of Synchronous Health in Nashville. \"If you're sitting there worried for example, get up and walk or pace,\" she says. \"Take a few minutes to clean something. Go outside for 5 minutes. Shorts bursts of activity can release that anxious energy.\""
}, {
  title: "Reality Check",
  description: "On scale of 1 to 100, how likely is it that the thing that I'm anxious about will happen? Do I have good reasons to think something will go wrong? Is there a chance I'm overly worried"
}];

var Coping = function Coping() {
  _s();

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__.default)("/api/coping", fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: "Error Occured"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this);
  } // Refresh Button


  if (data) {
    if (data.x) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Head, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
            children: "Anxiety"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "Yo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: cope_methods[data.x - 1].title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: cope_methods[data.x - 1].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: "This page generates a random coping method, since different people react and have different affects with different methods. The best way is to try different methods, even if not diagnosed with anxiety, during stressful times."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            onClick: function onClick() {
              return window.location.reload(false);
            },
            style: {
              margin: 10
            },
            children: "Generate New Strategy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
          children: cope_methods.map(function (method, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              className: "list",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: method.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: method.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety",
            children: "Sources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: "Back Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this);
    }
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this);
  }
};

_s(Coping, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = Coping;
/* harmony default export */ __webpack_exports__["default"] = (Coping);

var _c;

$RefreshReg$(_c, "Coping");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29waW5nLmQ3YWI1ZTQyZjdkMjg1ZTY2MWQ5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUFuQixDQUFUO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsQ0FBQyxHQUFHLENBQVY7QUFFQSxJQUFNQyxZQUFZLEdBQUcsQ0FDakI7QUFDSUMsRUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFO0FBRmpCLENBRGlCLEVBS2pCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxvQkFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FMaUIsRUFTakI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLDBCQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRTtBQUZqQixDQVRpQixFQWFqQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUUsY0FEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FiaUIsRUFpQmpCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSx5QkFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FqQmlCLEVBcUJqQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUUsZUFEWDtBQUVJQyxFQUFBQSxXQUFXO0FBRmYsQ0FyQmlCLENBQXJCOztBQTJCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCLGdCQUF3QlgsNENBQU0sZ0JBQWdCQyxPQUFoQixDQUE5QjtBQUFBLE1BQVFXLElBQVIsV0FBUUEsSUFBUjtBQUFBLE1BQWNDLEtBQWQsV0FBY0EsS0FBZDs7QUFFQSxNQUFHQSxLQUFILEVBQVU7QUFDTix3QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0gsR0FQZ0IsQ0FTakI7OztBQUVBLE1BQUdELElBQUgsRUFBUztBQUNMLFFBQUdBLElBQUksQ0FBQ0UsQ0FBUixFQUFXO0FBQ1AsMEJBQ0k7QUFBQSxnQ0FDSSw4REFBQyxJQUFEO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFNLGdCQUFJLEVBQUMsVUFBWDtBQUFzQixtQkFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLElBQWY7QUFBQSxrQ0FDSTtBQUFBLHNCQUFJTixZQUFZLENBQUNJLElBQUksQ0FBQ0UsQ0FBTCxHQUFTLENBQVYsQ0FBWixDQUF5Qkw7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsc0JBQUlELFlBQVksQ0FBQ0ksSUFBSSxDQUFDRSxDQUFMLEdBQVMsQ0FBVixDQUFaLENBQXlCSjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosZUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSixlQWFJO0FBQUEsaUNBQ0k7QUFBRyxtQkFBTyxFQUFFO0FBQUEscUJBQU1LLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUIsS0FBdkIsQ0FBTjtBQUFBLGFBQVo7QUFBaUQsaUJBQUssRUFBRTtBQUFFQyxjQUFBQSxNQUFNLEVBQUU7QUFBVixhQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkosZUFnQkk7QUFBQSxvQkFFSVYsWUFBWSxDQUFDVyxHQUFiLENBQWlCLFVBQUNDLE1BQUQsRUFBU2IsQ0FBVDtBQUFBLGdDQUNiO0FBQVksdUJBQVMsRUFBQyxNQUF0QjtBQUFBLHNDQUNJO0FBQUEsMEJBQUlhLE1BQU0sQ0FBQ1g7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSwwQkFBSVcsTUFBTSxDQUFDVjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQSxlQUFTSCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFqQjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKLGVBMEJJO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFDLHFFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWlDSDtBQUNKLEdBcENELE1Bb0NPO0FBQ0gsd0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUtIO0FBQ0osQ0F0REQ7O0dBQU1JO1VBQ3NCWDs7O0tBRHRCVztBQXdETiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb3BpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG5jb25zdCBpID0gMDtcclxuXHJcbmNvbnN0IGNvcGVfbWV0aG9kcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJCcmVhdGhpbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTcXVhcmUgQnJlYXRoaW5nLCBEZWVwIEJyZWF0aHMsIENvdW50aW5nIEJyZWF0aHMgdG8gMTAgb3IgMjAuIFRoaXMgY2FuIGJlIG9idmlvdXMsIHlldCBtb3N0IHBlb3BsZSB0YWtlIGFkdmFudGFnZSBvZiBzdWNoIGEgc2ltcGxlIHRlY2huaXF1ZS4gRHVyaW5nIHBhbmljIGF0dGFja3MgYW5kIGV2ZW4gY2FzdWFsIG1vbWVudHMgb2YgYW54aWV0eSBvciBzdHJlc3MsIHRoaXMgdGVjaG5pcXVlIGNhbiBiZSB1c2VmdWwuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2hhcmUgeW91ciBBbnhpZXR5XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRG9uJ3QgYXZvaWQgeW91ciBhbnhpb3VzIHRob3VnaHRzLCB3aGljaCBjYW4gbWFrZSB0aGVtIHdvcnNlLiBUYWxrIHRoZW0gb3ZlciB3aXRoIGEgZnJpZW5kIG9yIGZhbWlseSBtZW1iZXIsIHdobyBjYW4gaGVscCB5b3UgcHV0IHRoZW0gaW4gcGVyc3BlY3RpdmUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRG9uJ3QgQ3JpdGljaXplIEZlZWxpbmdzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSW5zdGVhZCwgc2F5LCBcXFwiVGhpcyBpcyBhIG5vcm1hbCwgaGVhbHRoeSwgcmVzcG9uc2UgYnkgbXkgYm9keSB0byB0aGVzZSBjaXJjdW1zdGFuY2VzLCB3aGljaCBhcmUgY29tcGxpY2F0ZWQsIHN0cmVzc2Z1bCwgb3IgZGlmZmljdWx0LiBJdCdzIE9LIHRvIGZlZWwgdGhpcyB3YXkuXFxcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlVzZSBhIE1hbnRyYVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgbWFudHJhIGNhbiBzaGlmdCB5b3VyIG1pbmQgYXdheSBmcm9tIGFueGlvdXMgdGhvdWdodHMgdGhhdCBwbGF5IG92ZXIgYW5kIG92ZXIgaW4geW91ciBoZWFkLCBLaXNzZW4gc2F5cy4gQW4gZXhhbXBsZTogXFxcIlRoZXNlIHRob3VnaHRzIGFyZSB1bmNvbWZvcnRhYmxlLCBidXQgbm90IGRhbmdlcm91cyxcXFwiIGFuZCBcXFwiVGhpcywgdG9vLCB3aWxsIHBhc3MuXFxcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlJlZGlyZWN0IE5lcnZvdXMgRW5lcmd5XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW54aWV0eSBjYW4gYmUgbGlrZSBhIG1vdG9yIHJldnZpbmcsIHNheXMgbGljZW5zZWQgcHJvZmVzc2lvbmFsIGNvdW5zZWxvciBMaXNhIEhlbmRlcnNvbi4gXFxcIlRha2UgY29udHJvbCBvZiB0aGF0IGVuZXJneSBhbmQgcHV0IGl0IHNvbWV3aGVyZSBlbHNlLFxcXCIgc2F5cyBIZW5kZXJzb24sIGNvLWZvdW5kZXIgYW5kIGNoaWVmIGV4ZWN1dGl2ZSBvZmZpY2VyIG9mIFN5bmNocm9ub3VzIEhlYWx0aCBpbiBOYXNodmlsbGUuIFxcXCJJZiB5b3UncmUgc2l0dGluZyB0aGVyZSB3b3JyaWVkIGZvciBleGFtcGxlLCBnZXQgdXAgYW5kIHdhbGsgb3IgcGFjZSxcXFwiIHNoZSBzYXlzLiBcXFwiVGFrZSBhIGZldyBtaW51dGVzIHRvIGNsZWFuIHNvbWV0aGluZy4gR28gb3V0c2lkZSBmb3IgNSBtaW51dGVzLiBTaG9ydHMgYnVyc3RzIG9mIGFjdGl2aXR5IGNhbiByZWxlYXNlIHRoYXQgYW54aW91cyBlbmVyZ3kuXFxcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlJlYWxpdHkgQ2hlY2tcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYE9uIHNjYWxlIG9mIDEgdG8gMTAwLCBob3cgbGlrZWx5IGlzIGl0IHRoYXQgdGhlIHRoaW5nIHRoYXQgSSdtIGFueGlvdXMgYWJvdXQgd2lsbCBoYXBwZW4/IERvIEkgaGF2ZSBnb29kIHJlYXNvbnMgdG8gdGhpbmsgc29tZXRoaW5nIHdpbGwgZ28gd3Jvbmc/IElzIHRoZXJlIGEgY2hhbmNlIEknbSBvdmVybHkgd29ycmllZGBcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgQ29waW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAvYXBpL2NvcGluZ2AsIGZldGNoZXIpXHJcblxyXG4gICAgaWYoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PkVycm9yIE9jY3VyZWQ8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVmcmVzaCBCdXR0b25cclxuXHJcbiAgICBpZihkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS54KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+QW54aWV0eTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJZb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29wZV9tZXRob2RzW2RhdGEueCAtIDFdLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvcGVfbWV0aG9kc1tkYXRhLnggLSAxXS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHBhZ2UgZ2VuZXJhdGVzIGEgcmFuZG9tIGNvcGluZyBtZXRob2QsIHNpbmNlIGRpZmZlcmVudCBwZW9wbGUgcmVhY3QgYW5kIGhhdmUgZGlmZmVyZW50IGFmZmVjdHMgd2l0aCBkaWZmZXJlbnQgbWV0aG9kcy4gVGhlIGJlc3Qgd2F5IGlzIHRvIHRyeSBkaWZmZXJlbnQgbWV0aG9kcywgZXZlbiBpZiBub3QgZGlhZ25vc2VkIHdpdGggYW54aWV0eSwgZHVyaW5nIHN0cmVzc2Z1bCB0aW1lcy5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSl9IHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+R2VuZXJhdGUgTmV3IFN0cmF0ZWd5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29wZV9tZXRob2RzLm1hcCgobWV0aG9kLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21ldGhvZC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21ldGhvZC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LndlYm1kLmNvbS9tZW50YWwtaGVhbHRoL2ZlYXR1cmVzL3dheXMtdG8tcmVkdWNlLWFueGlldHlcIj5Tb3VyY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkJhY2sgSG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Bpbmc7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImkiLCJjb3BlX21ldGhvZHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQ29waW5nIiwiZGF0YSIsImVycm9yIiwieCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibWFyZ2luIiwibWFwIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==