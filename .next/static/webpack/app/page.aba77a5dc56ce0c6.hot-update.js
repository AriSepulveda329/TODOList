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

/***/ "(app-pages-browser)/./src/components/ListItem.jsx":
/*!*************************************!*\
  !*** ./src/components/ListItem.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/DeleteOutline */ \"(app-pages-browser)/./node_modules/@mui/icons-material/DeleteOutline.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Edit.js\");\n/* harmony import */ var _styles_ListItem_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/ListItem.css */ \"(app-pages-browser)/./src/styles/ListItem.css\");\n/* harmony import */ var _InputAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputAdd */ \"(app-pages-browser)/./src/components/InputAdd.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ListItem({ todo, todoComplete, removeTodo, updateTodo }) {\n    _s();\n    const [edit, setEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: null,\n        text: \"\",\n        isCompleted: false,\n        date: null\n    });\n    const submitUpdate = (value)=>{\n        updateTodo(edit.id, value);\n        setEdit({\n            id: null,\n            text: \"\"\n        });\n    };\n    if (edit.id) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputAdd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            editTodo: edit,\n            onSubmit: submitUpdate\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row bg-white rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative cursor-pointer group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        checked: todo.isCompleted,\n                        onChange: ()=>todoComplete(todo.id),\n                        className: \"absolute opacity-0 z-10 top-[10px] left-[10px] cursor-pointer h-[45px] w-[45px] peer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"absolute top-[10px] left-[10px] h-[45px] w-[45px] rounded-md bg-slate-200 group-hover:bg-slate-300 peer-checked:bg-blue-500 after:absolute after:hidden\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"textSection\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"description\",\n                        children: todo.text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"date\",\n                        children: todo.date\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"iconSection\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>removeTodo(todo.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setEdit(todo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\ListItem.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(ListItem, \"3S4roysHvgngAxOdAaR179bqCAo=\");\n_c = ListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQzBCO0FBQ2xCO0FBQ2pCO0FBQ0c7QUFFbEMsU0FBU0ssU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUU7O0lBQzlELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztRQUMvQlcsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQlIsV0FBV0MsS0FBS0UsRUFBRSxFQUFFSztRQUNwQk4sUUFBUTtZQUFFQyxJQUFJO1lBQU1DLE1BQU07UUFBRztJQUMvQjtJQUVBLElBQUlILEtBQUtFLEVBQUUsRUFBRTtRQUNYLHFCQUFPLDhEQUFDUixpREFBUUE7WUFBQ2MsVUFBVVI7WUFBTVMsVUFBVUg7Ozs7OztJQUM3QztJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBU2xCLEtBQUtRLFdBQVc7d0JBQ3pCVyxVQUFVLElBQU1sQixhQUFhRCxLQUFLTSxFQUFFO3dCQUNwQ1MsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDSzt3QkFBS0wsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUVsQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBRU4sV0FBVTtrQ0FBZWYsS0FBS08sSUFBSTs7Ozs7O2tDQUNyQyw4REFBQ2M7d0JBQUVOLFdBQVU7a0NBQVFmLEtBQUtTLElBQUk7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ087d0JBQU9DLFNBQVMsSUFBTXJCLFdBQVdGLEtBQUtNLEVBQUU7a0NBQ3ZDLDRFQUFDVix5RUFBaUJBOzs7Ozs7Ozs7O2tDQUVwQiw4REFBQzBCO3dCQUFPQyxTQUFTLElBQU1sQixRQUFRTDtrQ0FDN0IsNEVBQUNILGdFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQjtHQTFDU0U7S0FBQUE7QUE0Q1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlzdEl0ZW0uanN4PzhjZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEZWxldGVPdXRsaW5lSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGVPdXRsaW5lXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0XCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL0xpc3RJdGVtLmNzc1wiO1xyXG5pbXBvcnQgSW5wdXRBZGQgZnJvbSBcIi4vSW5wdXRBZGRcIjtcclxuXHJcbmZ1bmN0aW9uIExpc3RJdGVtKHsgdG9kbywgdG9kb0NvbXBsZXRlLCByZW1vdmVUb2RvLCB1cGRhdGVUb2RvIH0pIHtcclxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogbnVsbCxcclxuICAgIHRleHQ6IFwiXCIsXHJcbiAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICBkYXRlOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzdWJtaXRVcGRhdGUgPSAodmFsdWUpID0+IHtcclxuICAgIHVwZGF0ZVRvZG8oZWRpdC5pZCwgdmFsdWUpO1xyXG4gICAgc2V0RWRpdCh7IGlkOiBudWxsLCB0ZXh0OiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChlZGl0LmlkKSB7XHJcbiAgICByZXR1cm4gPElucHV0QWRkIGVkaXRUb2RvPXtlZGl0fSBvblN1Ym1pdD17c3VibWl0VXBkYXRlfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYmctd2hpdGUgcm91bmRlZC1sZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIGdyb3VwXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgY2hlY2tlZD17dG9kby5pc0NvbXBsZXRlZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2RvQ29tcGxldGUodG9kby5pZCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBvcGFjaXR5LTAgei0xMCB0b3AtWzEwcHhdIGxlZnQtWzEwcHhdIGN1cnNvci1wb2ludGVyIGgtWzQ1cHhdIHctWzQ1cHhdIHBlZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVsxMHB4XSBsZWZ0LVsxMHB4XSBoLVs0NXB4XSB3LVs0NXB4XSByb3VuZGVkLW1kIGJnLXNsYXRlLTIwMCBncm91cC1ob3ZlcjpiZy1zbGF0ZS0zMDAgcGVlci1jaGVja2VkOmJnLWJsdWUtNTAwIGFmdGVyOmFic29sdXRlIGFmdGVyOmhpZGRlblwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFNlY3Rpb25cIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPnt0b2RvLnRleHR9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj57dG9kby5kYXRlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblNlY3Rpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRvZG8odG9kby5pZCl9PlxyXG4gICAgICAgICAgPERlbGV0ZU91dGxpbmVJY29uIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KHRvZG8pfT5cclxuICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRlbGV0ZU91dGxpbmVJY29uIiwiRWRpdEljb24iLCJJbnB1dEFkZCIsIkxpc3RJdGVtIiwidG9kbyIsInRvZG9Db21wbGV0ZSIsInJlbW92ZVRvZG8iLCJ1cGRhdGVUb2RvIiwiZWRpdCIsInNldEVkaXQiLCJpZCIsInRleHQiLCJpc0NvbXBsZXRlZCIsImRhdGUiLCJzdWJtaXRVcGRhdGUiLCJ2YWx1ZSIsImVkaXRUb2RvIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJzcGFuIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ListItem.jsx\n"));

/***/ })

});