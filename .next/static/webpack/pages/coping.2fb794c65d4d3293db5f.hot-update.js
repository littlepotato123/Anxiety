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
          children: "This page generates a random coping method, since different people react and have different affects with different methods. The best way is to try different methods, even if not diagnosed with anxiety, during stressful times."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            onClick: function onClick() {
              return window.location.reload(false);
            },
            style: {
              margin: 10,
              marginTop: 50
            },
            children: "Generate New Strategy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
          children: cope_methods.map(function (method, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              className: "list",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: method.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: method.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety",
            children: "Sources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: "Back Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
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
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29waW5nLjJmYjc5NGM2NWQ0ZDMyOTNkYjVmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUFuQixDQUFUO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsQ0FBQyxHQUFHLENBQVY7QUFFQSxJQUFNQyxZQUFZLEdBQUcsQ0FDakI7QUFDSUMsRUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFO0FBRmpCLENBRGlCLEVBS2pCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxvQkFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FMaUIsRUFTakI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLDBCQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRTtBQUZqQixDQVRpQixFQWFqQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUUsY0FEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FiaUIsRUFpQmpCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSx5QkFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUU7QUFGakIsQ0FqQmlCLEVBcUJqQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUUsZUFEWDtBQUVJQyxFQUFBQSxXQUFXO0FBRmYsQ0FyQmlCLENBQXJCOztBQTJCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCLGdCQUF3QlgsNENBQU0sZ0JBQWdCQyxPQUFoQixDQUE5QjtBQUFBLE1BQVFXLElBQVIsV0FBUUEsSUFBUjtBQUFBLE1BQWNDLEtBQWQsV0FBY0EsS0FBZDs7QUFFQSxNQUFHQSxLQUFILEVBQVU7QUFDTix3QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0gsR0FQZ0IsQ0FTakI7OztBQUVBLE1BQUdELElBQUgsRUFBUztBQUNMLFFBQUdBLElBQUksQ0FBQ0UsQ0FBUixFQUFXO0FBQ1AsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNJO0FBQUEsc0JBQUlOLFlBQVksQ0FBQ0ksSUFBSSxDQUFDRSxDQUFMLEdBQVMsQ0FBVixDQUFaLENBQXlCTDtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxzQkFBSUQsWUFBWSxDQUFDSSxJQUFJLENBQUNFLENBQUwsR0FBUyxDQUFWLENBQVosQ0FBeUJKO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBU0k7QUFBQSxpQ0FDSTtBQUFHLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUssTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixLQUF2QixDQUFOO0FBQUEsYUFBWjtBQUFpRCxpQkFBSyxFQUFFO0FBQUVDLGNBQUFBLE1BQU0sRUFBRSxFQUFWO0FBQWNDLGNBQUFBLFNBQVMsRUFBRTtBQUF6QixhQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosZUFZSTtBQUFBLG9CQUVJWCxZQUFZLENBQUNZLEdBQWIsQ0FBaUIsVUFBQ0MsTUFBRCxFQUFTZCxDQUFUO0FBQUEsZ0NBQ2I7QUFBWSx1QkFBUyxFQUFDLE1BQXRCO0FBQUEsc0NBQ0k7QUFBQSwwQkFBSWMsTUFBTSxDQUFDWjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFBLDBCQUFJWSxNQUFNLENBQUNYO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBLGVBQVNILENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWpCO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSixlQXNCSTtBQUFBLGtDQUNJO0FBQUcsZ0JBQUksRUFBQyxxRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE2Qkg7QUFDSixHQWhDRCxNQWdDTztBQUNILHdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFLSDtBQUNKLENBbEREOztHQUFNSTtVQUNzQlg7OztLQUR0Qlc7QUFvRE4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29waW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cclxuY29uc3QgaSA9IDA7XHJcblxyXG5jb25zdCBjb3BlX21ldGhvZHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQnJlYXRoaW5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3F1YXJlIEJyZWF0aGluZywgRGVlcCBCcmVhdGhzLCBDb3VudGluZyBCcmVhdGhzIHRvIDEwIG9yIDIwLiBUaGlzIGNhbiBiZSBvYnZpb3VzLCB5ZXQgbW9zdCBwZW9wbGUgdGFrZSBhZHZhbnRhZ2Ugb2Ygc3VjaCBhIHNpbXBsZSB0ZWNobmlxdWUuIER1cmluZyBwYW5pYyBhdHRhY2tzIGFuZCBldmVuIGNhc3VhbCBtb21lbnRzIG9mIGFueGlldHkgb3Igc3RyZXNzLCB0aGlzIHRlY2huaXF1ZSBjYW4gYmUgdXNlZnVsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNoYXJlIHlvdXIgQW54aWV0eVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRvbid0IGF2b2lkIHlvdXIgYW54aW91cyB0aG91Z2h0cywgd2hpY2ggY2FuIG1ha2UgdGhlbSB3b3JzZS4gVGFsayB0aGVtIG92ZXIgd2l0aCBhIGZyaWVuZCBvciBmYW1pbHkgbWVtYmVyLCB3aG8gY2FuIGhlbHAgeW91IHB1dCB0aGVtIGluIHBlcnNwZWN0aXZlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRvbid0IENyaXRpY2l6ZSBGZWVsaW5nc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluc3RlYWQsIHNheSwgXFxcIlRoaXMgaXMgYSBub3JtYWwsIGhlYWx0aHksIHJlc3BvbnNlIGJ5IG15IGJvZHkgdG8gdGhlc2UgY2lyY3Vtc3RhbmNlcywgd2hpY2ggYXJlIGNvbXBsaWNhdGVkLCBzdHJlc3NmdWwsIG9yIGRpZmZpY3VsdC4gSXQncyBPSyB0byBmZWVsIHRoaXMgd2F5LlxcXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJVc2UgYSBNYW50cmFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIG1hbnRyYSBjYW4gc2hpZnQgeW91ciBtaW5kIGF3YXkgZnJvbSBhbnhpb3VzIHRob3VnaHRzIHRoYXQgcGxheSBvdmVyIGFuZCBvdmVyIGluIHlvdXIgaGVhZCwgS2lzc2VuIHNheXMuIEFuIGV4YW1wbGU6IFxcXCJUaGVzZSB0aG91Z2h0cyBhcmUgdW5jb21mb3J0YWJsZSwgYnV0IG5vdCBkYW5nZXJvdXMsXFxcIiBhbmQgXFxcIlRoaXMsIHRvbywgd2lsbCBwYXNzLlxcXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSZWRpcmVjdCBOZXJ2b3VzIEVuZXJneVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFueGlldHkgY2FuIGJlIGxpa2UgYSBtb3RvciByZXZ2aW5nLCBzYXlzIGxpY2Vuc2VkIHByb2Zlc3Npb25hbCBjb3Vuc2Vsb3IgTGlzYSBIZW5kZXJzb24uIFxcXCJUYWtlIGNvbnRyb2wgb2YgdGhhdCBlbmVyZ3kgYW5kIHB1dCBpdCBzb21ld2hlcmUgZWxzZSxcXFwiIHNheXMgSGVuZGVyc29uLCBjby1mb3VuZGVyIGFuZCBjaGllZiBleGVjdXRpdmUgb2ZmaWNlciBvZiBTeW5jaHJvbm91cyBIZWFsdGggaW4gTmFzaHZpbGxlLiBcXFwiSWYgeW91J3JlIHNpdHRpbmcgdGhlcmUgd29ycmllZCBmb3IgZXhhbXBsZSwgZ2V0IHVwIGFuZCB3YWxrIG9yIHBhY2UsXFxcIiBzaGUgc2F5cy4gXFxcIlRha2UgYSBmZXcgbWludXRlcyB0byBjbGVhbiBzb21ldGhpbmcuIEdvIG91dHNpZGUgZm9yIDUgbWludXRlcy4gU2hvcnRzIGJ1cnN0cyBvZiBhY3Rpdml0eSBjYW4gcmVsZWFzZSB0aGF0IGFueGlvdXMgZW5lcmd5LlxcXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJSZWFsaXR5IENoZWNrXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBPbiBzY2FsZSBvZiAxIHRvIDEwMCwgaG93IGxpa2VseSBpcyBpdCB0aGF0IHRoZSB0aGluZyB0aGF0IEknbSBhbnhpb3VzIGFib3V0IHdpbGwgaGFwcGVuPyBEbyBJIGhhdmUgZ29vZCByZWFzb25zIHRvIHRoaW5rIHNvbWV0aGluZyB3aWxsIGdvIHdyb25nPyBJcyB0aGVyZSBhIGNoYW5jZSBJJ20gb3Zlcmx5IHdvcnJpZWRgXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IENvcGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgL2FwaS9jb3BpbmdgLCBmZXRjaGVyKVxyXG5cclxuICAgIGlmKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5FcnJvciBPY2N1cmVkPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZnJlc2ggQnV0dG9uXHJcblxyXG4gICAgaWYoZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEueCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29wZV9tZXRob2RzW2RhdGEueCAtIDFdLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvcGVfbWV0aG9kc1tkYXRhLnggLSAxXS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHBhZ2UgZ2VuZXJhdGVzIGEgcmFuZG9tIGNvcGluZyBtZXRob2QsIHNpbmNlIGRpZmZlcmVudCBwZW9wbGUgcmVhY3QgYW5kIGhhdmUgZGlmZmVyZW50IGFmZmVjdHMgd2l0aCBkaWZmZXJlbnQgbWV0aG9kcy4gVGhlIGJlc3Qgd2F5IGlzIHRvIHRyeSBkaWZmZXJlbnQgbWV0aG9kcywgZXZlbiBpZiBub3QgZGlhZ25vc2VkIHdpdGggYW54aWV0eSwgZHVyaW5nIHN0cmVzc2Z1bCB0aW1lcy5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSl9IHN0eWxlPXt7IG1hcmdpbjogMTAsIG1hcmdpblRvcDogNTB9fT5HZW5lcmF0ZSBOZXcgU3RyYXRlZ3k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3BlX21ldGhvZHMubWFwKChtZXRob2QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bWV0aG9kLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bWV0aG9kLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VibWQuY29tL21lbnRhbC1oZWFsdGgvZmVhdHVyZXMvd2F5cy10by1yZWR1Y2UtYW54aWV0eVwiPlNvdXJjZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QmFjayBIb21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcGluZzsiXSwibmFtZXMiOlsiTGluayIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaSIsImNvcGVfbWV0aG9kcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJDb3BpbmciLCJkYXRhIiwiZXJyb3IiLCJ4Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXAiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9