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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "top",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: cope_methods[data.x - 1].title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: cope_methods[data.x - 1].description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: ["This page generates a random coping method, since different people react and have different affects with different methods. The best way is to try different methods, even if not diagnosed with anxiety, during stressful times.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            onClick: function onClick() {
              return window.location.reload(false);
            },
            style: {
              padding: 20
            },
            children: "Generate New Strategy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 31
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
          children: cope_methods.map(function (method, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              className: "list",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: method.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: method.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety",
            children: "Sources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: "Back Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
      lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29waW5nLmVmNmJiOTZlYjNjOWViM2ZjZmQ2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUFuQixDQUFUO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsQ0FBQyxHQUFHLENBQVY7QUFFQSxJQUFNQyxZQUFZLEdBQUcsQ0FDakI7QUFDSUMsRUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFO0FBRmpCLENBRGlCLEVBS2pCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxvQkFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FMaUIsRUFTakI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLDBCQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRTtBQUZqQixDQVRpQixFQWFqQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUUsY0FEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FiaUIsRUFpQmpCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSx5QkFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FqQmlCLEVBcUJqQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUUsZUFEWDtBQUVJQyxFQUFBQSxXQUFXO0FBRmYsQ0FyQmlCLENBQXJCOztBQTJCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCLGdCQUF3QlgsNENBQU0sZ0JBQWdCQyxPQUFoQixDQUE5QjtBQUFBLE1BQVFXLElBQVIsV0FBUUEsSUFBUjtBQUFBLE1BQWNDLEtBQWQsV0FBY0EsS0FBZDs7QUFFQSxNQUFHQSxLQUFILEVBQVU7QUFDTix3QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0gsR0FQZ0IsQ0FTakI7OztBQUVBLE1BQUdELElBQUgsRUFBUztBQUNMLFFBQUdBLElBQUksQ0FBQ0UsQ0FBUixFQUFXO0FBQ1AsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNJO0FBQUEsc0JBQUlOLFlBQVksQ0FBQ0ksSUFBSSxDQUFDRSxDQUFMLEdBQVMsQ0FBVixDQUFaLENBQXlCTDtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxzQkFBSUQsWUFBWSxDQUFDSSxJQUFJLENBQUNFLENBQUwsR0FBUyxDQUFWLENBQVosQ0FBeUJKO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JO0FBQUEsdVFBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUVVO0FBQUcsbUJBQU8sRUFBRTtBQUFBLHFCQUFNSyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCLEtBQXZCLENBQU47QUFBQSxhQUFaO0FBQWlELGlCQUFLLEVBQUU7QUFBRUMsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBVUk7QUFBQSxvQkFFSVYsWUFBWSxDQUFDVyxHQUFiLENBQWlCLFVBQUNDLE1BQUQsRUFBU2IsQ0FBVDtBQUFBLGdDQUNiO0FBQVksdUJBQVMsRUFBQyxNQUF0QjtBQUFBLHNDQUNJO0FBQUEsMEJBQUlhLE1BQU0sQ0FBQ1g7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSwwQkFBSVcsTUFBTSxDQUFDVjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQSxlQUFTSCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFqQjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkosZUFvQkk7QUFBQSxrQ0FDSTtBQUFHLGdCQUFJLEVBQUMscUVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMkJIO0FBQ0osR0E5QkQsTUE4Qk87QUFDSCx3QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBS0g7QUFDSixDQWhERDs7R0FBTUk7VUFDc0JYOzs7S0FEdEJXO0FBa0ROLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvcGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbmNvbnN0IGkgPSAwO1xyXG5cclxuY29uc3QgY29wZV9tZXRob2RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkJyZWF0aGluZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNxdWFyZSBCcmVhdGhpbmcsIERlZXAgQnJlYXRocywgQ291bnRpbmcgQnJlYXRocyB0byAxMCBvciAyMC4gVGhpcyBjYW4gYmUgb2J2aW91cywgeWV0IG1vc3QgcGVvcGxlIHRha2UgYWR2YW50YWdlIG9mIHN1Y2ggYSBzaW1wbGUgdGVjaG5pcXVlLiBEdXJpbmcgcGFuaWMgYXR0YWNrcyBhbmQgZXZlbiBjYXN1YWwgbW9tZW50cyBvZiBhbnhpZXR5IG9yIHN0cmVzcywgdGhpcyB0ZWNobmlxdWUgY2FuIGJlIHVzZWZ1bC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJTaGFyZSB5b3VyIEFueGlldHlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb24ndCBhdm9pZCB5b3VyIGFueGlvdXMgdGhvdWdodHMsIHdoaWNoIGNhbiBtYWtlIHRoZW0gd29yc2UuIFRhbGsgdGhlbSBvdmVyIHdpdGggYSBmcmllbmQgb3IgZmFtaWx5IG1lbWJlciwgd2hvIGNhbiBoZWxwIHlvdSBwdXQgdGhlbSBpbiBwZXJzcGVjdGl2ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEb24ndCBDcml0aWNpemUgRmVlbGluZ3NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJJbnN0ZWFkLCBzYXksIFxcXCJUaGlzIGlzIGEgbm9ybWFsLCBoZWFsdGh5LCByZXNwb25zZSBieSBteSBib2R5IHRvIHRoZXNlIGNpcmN1bXN0YW5jZXMsIHdoaWNoIGFyZSBjb21wbGljYXRlZCwgc3RyZXNzZnVsLCBvciBkaWZmaWN1bHQuIEl0J3MgT0sgdG8gZmVlbCB0aGlzIHdheS5cXFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVXNlIGEgTWFudHJhXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBtYW50cmEgY2FuIHNoaWZ0IHlvdXIgbWluZCBhd2F5IGZyb20gYW54aW91cyB0aG91Z2h0cyB0aGF0IHBsYXkgb3ZlciBhbmQgb3ZlciBpbiB5b3VyIGhlYWQsIEtpc3NlbiBzYXlzLiBBbiBleGFtcGxlOiBcXFwiVGhlc2UgdGhvdWdodHMgYXJlIHVuY29tZm9ydGFibGUsIGJ1dCBub3QgZGFuZ2Vyb3VzLFxcXCIgYW5kIFxcXCJUaGlzLCB0b28sIHdpbGwgcGFzcy5cXFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUmVkaXJlY3QgTmVydm91cyBFbmVyZ3lcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBbnhpZXR5IGNhbiBiZSBsaWtlIGEgbW90b3IgcmV2dmluZywgc2F5cyBsaWNlbnNlZCBwcm9mZXNzaW9uYWwgY291bnNlbG9yIExpc2EgSGVuZGVyc29uLiBcXFwiVGFrZSBjb250cm9sIG9mIHRoYXQgZW5lcmd5IGFuZCBwdXQgaXQgc29tZXdoZXJlIGVsc2UsXFxcIiBzYXlzIEhlbmRlcnNvbiwgY28tZm91bmRlciBhbmQgY2hpZWYgZXhlY3V0aXZlIG9mZmljZXIgb2YgU3luY2hyb25vdXMgSGVhbHRoIGluIE5hc2h2aWxsZS4gXFxcIklmIHlvdSdyZSBzaXR0aW5nIHRoZXJlIHdvcnJpZWQgZm9yIGV4YW1wbGUsIGdldCB1cCBhbmQgd2FsayBvciBwYWNlLFxcXCIgc2hlIHNheXMuIFxcXCJUYWtlIGEgZmV3IG1pbnV0ZXMgdG8gY2xlYW4gc29tZXRoaW5nLiBHbyBvdXRzaWRlIGZvciA1IG1pbnV0ZXMuIFNob3J0cyBidXJzdHMgb2YgYWN0aXZpdHkgY2FuIHJlbGVhc2UgdGhhdCBhbnhpb3VzIGVuZXJneS5cXFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUmVhbGl0eSBDaGVja1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgT24gc2NhbGUgb2YgMSB0byAxMDAsIGhvdyBsaWtlbHkgaXMgaXQgdGhhdCB0aGUgdGhpbmcgdGhhdCBJJ20gYW54aW91cyBhYm91dCB3aWxsIGhhcHBlbj8gRG8gSSBoYXZlIGdvb2QgcmVhc29ucyB0byB0aGluayBzb21ldGhpbmcgd2lsbCBnbyB3cm9uZz8gSXMgdGhlcmUgYSBjaGFuY2UgSSdtIG92ZXJseSB3b3JyaWVkYFxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBDb3BpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYC9hcGkvY29waW5nYCwgZmV0Y2hlcilcclxuXHJcbiAgICBpZihlcnJvcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+RXJyb3IgT2NjdXJlZDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWZyZXNoIEJ1dHRvblxyXG5cclxuICAgIGlmKGRhdGEpIHtcclxuICAgICAgICBpZihkYXRhLngpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvcGVfbWV0aG9kc1tkYXRhLnggLSAxXS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb3BlX21ldGhvZHNbZGF0YS54IC0gMV0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBwYWdlIGdlbmVyYXRlcyBhIHJhbmRvbSBjb3BpbmcgbWV0aG9kLCBzaW5jZSBkaWZmZXJlbnQgcGVvcGxlIHJlYWN0IGFuZCBoYXZlIGRpZmZlcmVudCBhZmZlY3RzIHdpdGggZGlmZmVyZW50IG1ldGhvZHMuIFRoZSBiZXN0IHdheSBpcyB0byB0cnkgZGlmZmVyZW50IG1ldGhvZHMsIGV2ZW4gaWYgbm90IGRpYWdub3NlZCB3aXRoIGFueGlldHksIGR1cmluZyBzdHJlc3NmdWwgdGltZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxhIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpfSBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5HZW5lcmF0ZSBOZXcgU3RyYXRlZ3k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3BlX21ldGhvZHMubWFwKChtZXRob2QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bWV0aG9kLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bWV0aG9kLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VibWQuY29tL21lbnRhbC1oZWFsdGgvZmVhdHVyZXMvd2F5cy10by1yZWR1Y2UtYW54aWV0eVwiPlNvdXJjZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QmFjayBIb21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcGluZzsiXSwibmFtZXMiOlsiTGluayIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaSIsImNvcGVfbWV0aG9kcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJDb3BpbmciLCJkYXRhIiwiZXJyb3IiLCJ4Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJwYWRkaW5nIiwibWFwIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==