"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/InputAdd.jsx":
/*!*************************************!*\
  !*** ./src/components/InputAdd.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction InputAdd({ onSubmit, editTodo = {\n    id: null,\n    text: \"\",\n    date: null,\n    isCompleted: false\n} }) {\n    _s();\n    const [taskInput, setTaskInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(editTodo.text ? editTodo.text : \"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        inputRef.current.focus();\n    });\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const today = new Date();\n        const day = String(today.getDate()).padStart(2, \"0\");\n        const month = String(today.getMonth() + 1).padStart(2, \"0\");\n        const year = today.getFullYear();\n        onSubmit({\n            id: editTodo.id ? editTodo.id : Date.now(),\n            text: taskInput,\n            isCompleted: editTodo.isCompleted,\n            date: editTodo.date ? editTodo.date : `${month}/${day}/${year}`\n        });\n        setTaskInput(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"flex gap-x-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"add task...\",\n                    type: \"text\",\n                    value: taskInput,\n                    onChange: (e)=>setTaskInput(e.target.value),\n                    ref: inputRef,\n                    className: \"w-[88%] px-4 py-2.5 box-border border-none rounded-lg text-xl font-medium\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\InputAdd.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"w-[11%] no-underline border-none rounded-lg bg-cyan-500 text-white font-bold text-xl transition-all cursor-pointer hover:bg-cyan-600\",\n                    children: editTodo.id ? \"EDIT\" : \"ADD\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\InputAdd.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\InputAdd.jsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\InputAdd.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(InputAdd, \"P6vRdr4n3fz+m+uNf2qoxipJBCw=\");\n_c = InputAdd;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputAdd);\nvar _c;\n$RefreshReg$(_c, \"InputAdd\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0lucHV0QWRkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkQ7QUFFM0QsU0FBU0ksU0FBUyxFQUNoQkMsUUFBUSxFQUNSQyxXQUFXO0lBQUVDLElBQUk7SUFBTUMsTUFBTTtJQUFJQyxNQUFNO0lBQU1DLGFBQWE7QUFBTSxDQUFDLEVBQ2xFOztJQUNDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FDeENLLFNBQVNFLElBQUksR0FBR0YsU0FBU0UsSUFBSSxHQUFHO0lBRWxDLE1BQU1LLFdBQVdWLDZDQUFNQSxDQUFDO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSVyxTQUFTQyxPQUFPLENBQUNDLEtBQUs7SUFDeEI7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFFBQVEsSUFBSUM7UUFDbEIsTUFBTUMsTUFBTUMsT0FBT0gsTUFBTUksT0FBTyxJQUFJQyxRQUFRLENBQUMsR0FBRztRQUNoRCxNQUFNQyxRQUFRSCxPQUFPSCxNQUFNTyxRQUFRLEtBQUssR0FBR0YsUUFBUSxDQUFDLEdBQUc7UUFDdkQsTUFBTUcsT0FBT1IsTUFBTVMsV0FBVztRQUU5QnZCLFNBQVM7WUFDUEUsSUFBSUQsU0FBU0MsRUFBRSxHQUFHRCxTQUFTQyxFQUFFLEdBQUdhLEtBQUtTLEdBQUc7WUFDeENyQixNQUFNRztZQUNORCxhQUFhSixTQUFTSSxXQUFXO1lBQ2pDRCxNQUFNSCxTQUFTRyxJQUFJLEdBQUdILFNBQVNHLElBQUksR0FBRyxDQUFDLEVBQUVnQixNQUFNLENBQUMsRUFBRUosSUFBSSxDQUFDLEVBQUVNLEtBQUssQ0FBQztRQUNqRTtRQUVBZixhQUFhO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUszQixVQUFVVztZQUFjZSxXQUFVOzs4QkFDdEMsOERBQUNFO29CQUNDQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMQyxPQUFPekI7b0JBQ1AwQixVQUFVLENBQUNwQixJQUFNTCxhQUFhSyxFQUFFcUIsTUFBTSxDQUFDRixLQUFLO29CQUM1Q0csS0FBSzFCO29CQUNMa0IsV0FBVTs7Ozs7OzhCQUVaLDhEQUFDUztvQkFDQ0wsTUFBSztvQkFDTEosV0FBVTs4QkFFVHpCLFNBQVNDLEVBQUUsR0FBRyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztHQW5EU0g7S0FBQUE7QUFxRFQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRBZGQuanN4P2JlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW5wdXRBZGQoe1xyXG4gIG9uU3VibWl0LFxyXG4gIGVkaXRUb2RvID0geyBpZDogbnVsbCwgdGV4dDogXCJcIiwgZGF0ZTogbnVsbCwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXHJcbn0pIHtcclxuICBjb25zdCBbdGFza0lucHV0LCBzZXRUYXNrSW5wdXRdID0gdXNlU3RhdGUoXHJcbiAgICBlZGl0VG9kby50ZXh0ID8gZWRpdFRvZG8udGV4dCA6IFwiXCJcclxuICApO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGRheSA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICBvblN1Ym1pdCh7XHJcbiAgICAgIGlkOiBlZGl0VG9kby5pZCA/IGVkaXRUb2RvLmlkIDogRGF0ZS5ub3coKSxcclxuICAgICAgdGV4dDogdGFza0lucHV0LFxyXG4gICAgICBpc0NvbXBsZXRlZDogZWRpdFRvZG8uaXNDb21wbGV0ZWQsXHJcbiAgICAgIGRhdGU6IGVkaXRUb2RvLmRhdGUgPyBlZGl0VG9kby5kYXRlIDogYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YCxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRhc2tJbnB1dChcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBnYXAteC00XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImFkZCB0YXNrLi4uXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXt0YXNrSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bODglXSBweC00IHB5LTIuNSBib3gtYm9yZGVyIGJvcmRlci1ub25lIHJvdW5kZWQtbGcgdGV4dC14bCBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzExJV0gbm8tdW5kZXJsaW5lIGJvcmRlci1ub25lIHJvdW5kZWQtbGcgYmctY3lhbi01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1jeWFuLTYwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2VkaXRUb2RvLmlkID8gXCJFRElUXCIgOiBcIkFERFwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEFkZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJbnB1dEFkZCIsIm9uU3VibWl0IiwiZWRpdFRvZG8iLCJpZCIsInRleHQiLCJkYXRlIiwiaXNDb21wbGV0ZWQiLCJ0YXNrSW5wdXQiLCJzZXRUYXNrSW5wdXQiLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZGF5IiwiRGF0ZSIsImRheSIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJub3ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/InputAdd.jsx\n"));

/***/ })

});