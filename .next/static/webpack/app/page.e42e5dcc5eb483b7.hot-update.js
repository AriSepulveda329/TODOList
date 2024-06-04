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

/***/ "(app-pages-browser)/./src/components/Todolist.tsx":
/*!*************************************!*\
  !*** ./src/components/Todolist.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputAdd */ \"(app-pages-browser)/./src/components/InputAdd.tsx\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItem */ \"(app-pages-browser)/./src/components/ListItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Todolist() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedTodos = localStorage.getItem(\"todos\");\n        if (storedTodos) {\n            setTodos(JSON.parse(storedTodos));\n        }\n    }, []);\n    const addTodo = (todo)=>{\n        if (!todo.text || /^\\s*$/.test(todo.text)) {\n            return;\n        }\n        const newTodos = [\n            todo,\n            ...todos\n        ];\n        setTodos(newTodos);\n        localStorage.setItem(\"todos\", JSON.stringify(newTodos));\n    };\n    const todoComplete = (id)=>{\n        const updatedTodos = todos.map((todo)=>{\n            if (id === todo.id) {\n                todo.isCompleted = !todo.isCompleted;\n            }\n            return todo;\n        });\n        setTodos(updatedTodos);\n        localStorage.setItem(\"todos\", JSON.stringify(updatedTodos));\n    };\n    const removeTodo = (id)=>{\n        const newTodos = todos.filter((todo)=>todo.id !== id);\n        setTodos(newTodos);\n        localStorage.setItem(\"todos\", JSON.stringify(newTodos));\n    };\n    const updateTodo = (id, newTodo)=>{\n        if (!newTodo.text || /^\\s*$/.test(newTodo.text)) {\n            return;\n        }\n        setTodos((prev)=>{\n            const newTodos = prev.map((todo)=>todo.id === id ? newTodo : todo);\n            localStorage.setItem(\"todos\", JSON.stringify(newTodos));\n            return newTodos;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center w-screen h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl mb-3 font-medium\",\n                children: \"TODO LIST\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\Todolist.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-y-4 w-1/2 h-2/3 bg-cyan-100 rounded-lg p-6 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputAdd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onSubmit: addTodo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\Todolist.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    todos?.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            todo: todo,\n                            todoComplete: todoComplete,\n                            removeTodo: removeTodo,\n                            updateTodo: updateTodo\n                        }, todo.id, false, {\n                            fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\Todolist.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\Todolist.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alons\\\\OneDrive\\\\Documentos\\\\React Portfolio\\\\todo-list-app\\\\src\\\\components\\\\Todolist.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Todolist, \"p6SBc2ZNam5s5kRD+fts6JgCy3M=\");\n_c = Todolist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todolist);\nvar _c;\n$RefreshReg$(_c, \"Todolist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RvZG9saXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNqQjtBQUNBO0FBU2xDLFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUE7SUFFbENDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3pDLElBQUlGLGFBQWE7WUFDZkQsU0FBU0ksS0FBS0MsS0FBSyxDQUFDSjtRQUN0QjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLFVBQVUsQ0FBQ0M7UUFDZixJQUFJLENBQUNBLEtBQUtDLElBQUksSUFBSSxRQUFRQyxJQUFJLENBQUNGLEtBQUtDLElBQUksR0FBRztZQUN6QztRQUNGO1FBRUEsTUFBTUUsV0FBVztZQUFDSDtlQUFTUjtTQUFNO1FBRWpDQyxTQUFTVTtRQUNUUixhQUFhUyxPQUFPLENBQUMsU0FBU1AsS0FBS1EsU0FBUyxDQUFDRjtJQUMvQztJQUVBLE1BQU1HLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTUMsZUFBZWhCLE1BQU1pQixHQUFHLENBQUMsQ0FBQ1Q7WUFDOUIsSUFBSU8sT0FBT1AsS0FBS08sRUFBRSxFQUFFO2dCQUNsQlAsS0FBS1UsV0FBVyxHQUFHLENBQUNWLEtBQUtVLFdBQVc7WUFDdEM7WUFDQSxPQUFPVjtRQUNUO1FBQ0FQLFNBQVNlO1FBQ1RiLGFBQWFTLE9BQU8sQ0FBQyxTQUFTUCxLQUFLUSxTQUFTLENBQUNHO0lBQy9DO0lBRUEsTUFBTUcsYUFBYSxDQUFDSjtRQUNsQixNQUFNSixXQUFXWCxNQUFNb0IsTUFBTSxDQUFDLENBQUNaLE9BQVNBLEtBQUtPLEVBQUUsS0FBS0E7UUFDcERkLFNBQVNVO1FBQ1RSLGFBQWFTLE9BQU8sQ0FBQyxTQUFTUCxLQUFLUSxTQUFTLENBQUNGO0lBQy9DO0lBRUEsTUFBTVUsYUFBYSxDQUFDTixJQUFZTztRQUM5QixJQUFJLENBQUNBLFFBQVFiLElBQUksSUFBSSxRQUFRQyxJQUFJLENBQUNZLFFBQVFiLElBQUksR0FBRztZQUMvQztRQUNGO1FBRUFSLFNBQVMsQ0FBQ3NCO1lBQ1IsTUFBTVosV0FBV1ksS0FBS04sR0FBRyxDQUFDLENBQUNULE9BQVVBLEtBQUtPLEVBQUUsS0FBS0EsS0FBS08sVUFBVWQ7WUFDaEVMLGFBQWFTLE9BQU8sQ0FBQyxTQUFTUCxLQUFLUSxTQUFTLENBQUNGO1lBQzdDLE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTRCOzs7Ozs7MEJBQzFDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUM1QixpREFBUUE7d0JBQUM4QixVQUFVcEI7Ozs7OztvQkFDbkJQLE9BQU9pQixJQUFJLENBQUNULHFCQUNYLDhEQUFDVixpREFBUUE7NEJBRVBVLE1BQU1BOzRCQUNOTSxjQUFjQTs0QkFDZEssWUFBWUE7NEJBQ1pFLFlBQVlBOzJCQUpQYixLQUFLTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVV4QjtHQW5FU2hCO0tBQUFBO0FBcUVULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RvZG9saXN0LnRzeD80MmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dEFkZCBmcm9tIFwiLi9JbnB1dEFkZFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9kbyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaXNDb21wbGV0ZWQ6IGJvb2xlYW47XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb2RvbGlzdCgpIHtcclxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9bXT4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKTtcclxuICAgIGlmIChzdG9yZWRUb2Rvcykge1xyXG4gICAgICBzZXRUb2RvcyhKU09OLnBhcnNlKHN0b3JlZFRvZG9zKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhZGRUb2RvID0gKHRvZG86IFRvZG8pID0+IHtcclxuICAgIGlmICghdG9kby50ZXh0IHx8IC9eXFxzKiQvLnRlc3QodG9kby50ZXh0KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3VG9kb3MgPSBbdG9kbywgLi4udG9kb3NdO1xyXG5cclxuICAgIHNldFRvZG9zKG5ld1RvZG9zKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkobmV3VG9kb3MpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2RvQ29tcGxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XHJcbiAgICAgIGlmIChpZCA9PT0gdG9kby5pZCkge1xyXG4gICAgICAgIHRvZG8uaXNDb21wbGV0ZWQgPSAhdG9kby5pc0NvbXBsZXRlZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9kbztcclxuICAgIH0pO1xyXG4gICAgc2V0VG9kb3ModXBkYXRlZFRvZG9zKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG9zKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpO1xyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeShuZXdUb2RvcykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAoaWQ6IG51bWJlciwgbmV3VG9kbzogVG9kbykgPT4ge1xyXG4gICAgaWYgKCFuZXdUb2RvLnRleHQgfHwgL15cXHMqJC8udGVzdChuZXdUb2RvLnRleHQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb2RvcygocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBuZXdUb2RvcyA9IHByZXYubWFwKCh0b2RvKSA9PiAodG9kby5pZCA9PT0gaWQgPyBuZXdUb2RvIDogdG9kbykpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KG5ld1RvZG9zKSk7XHJcbiAgICAgIHJldHVybiBuZXdUb2RvcztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi0zIGZvbnQtbWVkaXVtXCI+VE9ETyBMSVNUPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC15LTQgdy0xLzIgaC0yLzMgYmctY3lhbi0xMDAgcm91bmRlZC1sZyBwLTYgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAgPElucHV0QWRkIG9uU3VibWl0PXthZGRUb2RvfSAvPlxyXG4gICAgICAgIHt0b2Rvcz8ubWFwKCh0b2RvKSA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAga2V5PXt0b2RvLmlkfVxyXG4gICAgICAgICAgICB0b2RvPXt0b2RvfVxyXG4gICAgICAgICAgICB0b2RvQ29tcGxldGU9e3RvZG9Db21wbGV0ZX1cclxuICAgICAgICAgICAgcmVtb3ZlVG9kbz17cmVtb3ZlVG9kb31cclxuICAgICAgICAgICAgdXBkYXRlVG9kbz17dXBkYXRlVG9kb31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb2xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRBZGQiLCJMaXN0SXRlbSIsIlRvZG9saXN0IiwidG9kb3MiLCJzZXRUb2RvcyIsInN0b3JlZFRvZG9zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImFkZFRvZG8iLCJ0b2RvIiwidGV4dCIsInRlc3QiLCJuZXdUb2RvcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2RvQ29tcGxldGUiLCJpZCIsInVwZGF0ZWRUb2RvcyIsIm1hcCIsImlzQ29tcGxldGVkIiwicmVtb3ZlVG9kbyIsImZpbHRlciIsInVwZGF0ZVRvZG8iLCJuZXdUb2RvIiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Todolist.tsx\n"));

/***/ })

});