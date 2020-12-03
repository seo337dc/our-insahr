module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/schedule_data.js":
/*!*********************************!*\
  !*** ./config/schedule_data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: '149',
  calendarId: '99',
  title: '한국심리측정평가학회 2020 연구방법론 기초학교 과정8 : 문항반응이론',
  category: 'time',
  isAllDay: false,
  isReadOnly: true,
  start: '2020-12-28T13:00',
  end: '2020-12-28T18:00'
}, {
  id: '150',
  calendarId: '99',
  title: '한국심리측정평가학회 2020 온라인 추계 학술대회',
  category: 'time',
  isAllDay: false,
  isReadOnly: true,
  start: '2020-12-24T13:00',
  end: '2020-12-24T18:00'
}, {
  id: '153',
  calendarId: '1',
  title: '(수정)LGU+결과리포트발송(다면평가)완료',
  category: 'allday',
  start: '2020-12-30',
  end: '2020-12-30',
  isAllDay: true,
  isReadOnly: true
}, {
  id: '154',
  calendarId: '1',
  title: '[채용] 개발자 면접',
  category: 'time',
  start: '2020-12-28T10:00',
  end: '2020-12-28T14:00',
  isAllDay: false,
  isReadOnly: true
}, {
  id: '155',
  calendarId: '1',
  title: 'INSA Workshop',
  category: 'allday',
  start: '2020-12-05',
  end: '2020-12-06',
  isAllDay: true,
  isReadOnly: true
}, {
  id: '156',
  calendarId: '3',
  title: '[롯데] PJT미팅',
  category: 'time',
  start: '2020-12-10T10:00',
  end: '2020-12-10T13:00',
  isAllDay: false,
  isReadOnly: true
}, {
  id: '157',
  calendarId: '3',
  title: '[롯데] 가상인턴 PJT 미팅',
  category: 'time',
  start: '2020-12-17T10:00',
  end: '2020-12-17T13:00',
  isAllDay: false,
  isReadOnly: true
}, {
  id: '158',
  calendarId: '1',
  title: '테스트중입니다(..)',
  category: 'allday',
  start: '2020-12-29',
  end: '2020-12-29',
  isAllDay: true,
  isReadOnly: true
}, {
  id: '159',
  calendarId: '1',
  title: '[INSA&ACG] 가상업무pjt 미팅',
  category: 'time',
  end: '2020-12-18T15:00',
  isAllDay: false,
  isReadOnly: true
}, {
  id: '160',
  calendarId: '1',
  title: '[INSA&ACG] 가상업무 PJT미팅',
  category: 'time',
  end: '2020-12-25T17:00',
  isAllDay: false,
  isReadOnly: true
}, {
  id: '161',
  calendarId: '3',
  title: '롯데 AC 온라인플랫폼 논의',
  category: 'time',
  start: '2020-12-25T13:00',
  end: '2020-12-25T15:00',
  isAllDay: false,
  isReadOnly: true
}, {
  id: '162',
  calendarId: '99',
  title: '[미래엔] 인적성검사',
  category: 'time',
  start: '2020-12-26T18:00',
  end: '2020-12-26T20:00',
  isAllDay: false,
  isReadOnly: true
}, {
  id: '163',
  calendarId: '1',
  title: '[롯데] PJT 문항개발방향논의',
  category: 'time',
  start: '2020-12-30T14:00',
  end: '2020-12-30T15:00',
  isAllDay: false,
  isReadOnly: true
}]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_schedule_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/schedule_data */ "./config/schedule_data.js");

var _jsxFileName = "D:\\ACG\\our-insahr\\pages\\index.js";


const DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/CalenderComponent */ "./components/CalenderComponent.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/CalenderComponent */ "./components/CalenderComponent.js")],
    modules: ['../components/CalenderComponent']
  }
});

const Index = ({
  sData
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DynamicComponentWithNoSSR, {
      sData: sData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

async function getServerSideProps(context) {
  //서버 api 접근
  const sData = _config_schedule_data__WEBPACK_IMPORTED_MODULE_2__["default"];
  return {
    props: {
      sData
    } // will be passed to the page component as props

  };
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "tui-calendar":
/*!*******************************!*\
  !*** external "tui-calendar" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tui-calendar");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NjaGVkdWxlX2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0dWktY2FsZW5kYXJcIiJdLCJuYW1lcyI6WyJpZCIsImNhbGVuZGFySWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwiaXNBbGxEYXkiLCJpc1JlYWRPbmx5Iiwic3RhcnQiLCJlbmQiLCJEeW5hbWljQ29tcG9uZW50V2l0aE5vU1NSIiwiZHluYW1pYyIsInNzciIsIkluZGV4Iiwic0RhdGEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2NoZWR1bGVfZGF0YSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlE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TUcseUJBQXlCLEdBQUdDLG1EQUFPLENBQUMsTUFBTSx5SkFBUCxFQUFrRDtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUEsd0NBQXBDLDBFQUFvQztBQUFBLGNBQXBDLGlDQUFvQztBQUFBO0FBQUEsQ0FBbEQsQ0FBekM7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDekIsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyx5QkFBRDtBQUEyQixXQUFLLEVBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EOztBQVFPLGVBQWVDLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUM5QztBQUNBLFFBQU1GLEtBQUssR0FBR0csNkRBQWQ7QUFFQSxTQUFPO0FBQ0hDLFNBQUssRUFBRTtBQUFFSjtBQUFGLEtBREosQ0FDZTs7QUFEZixHQUFQO0FBR0g7QUFFY0Qsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNyQkEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzE0OScsXHJcbiAgICAgICAgY2FsZW5kYXJJZDogJzk5JyxcclxuICAgICAgICB0aXRsZTogJ+2VnOq1reyLrOumrOy4oeygle2PieqwgO2Vme2ajCAyMDIwIOyXsOq1rOuwqeuyleuhoCDquLDstIjtlZnqtZAg6rO87KCVOCA6IOusuO2VreuwmOydkeydtOuhoCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICd0aW1lJyxcclxuICAgICAgICBpc0FsbERheTogZmFsc2UsXHJcbiAgICAgICAgaXNSZWFkT25seTogdHJ1ZSxcclxuICAgICAgICBzdGFydDogJzIwMjAtMTItMjhUMTM6MDAnLFxyXG4gICAgICAgIGVuZDogJzIwMjAtMTItMjhUMTg6MDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzE1MCcsXHJcbiAgICAgICAgY2FsZW5kYXJJZDogJzk5JyxcclxuICAgICAgICB0aXRsZTogJ+2VnOq1reyLrOumrOy4oeygle2PieqwgO2Vme2ajCAyMDIwIOyYqOudvOyduCDstpTqs4Qg7ZWZ7Iig64yA7ZqMJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3RpbWUnLFxyXG4gICAgICAgIGlzQWxsRGF5OiBmYWxzZSxcclxuICAgICAgICBpc1JlYWRPbmx5OiB0cnVlLFxyXG4gICAgICAgIHN0YXJ0OiAnMjAyMC0xMi0yNFQxMzowMCcsXHJcbiAgICAgICAgZW5kOiAnMjAyMC0xMi0yNFQxODowMCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMTUzJyxcclxuICAgICAgICBjYWxlbmRhcklkOiAnMScsXHJcbiAgICAgICAgdGl0bGU6ICco7IiY7KCVKUxHVSvqsrDqs7zrpqztj6ztirjrsJzshqEo64uk66m07Y+J6rCAKeyZhOujjCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdhbGxkYXknLFxyXG4gICAgICAgIHN0YXJ0OiAnMjAyMC0xMi0zMCcsXHJcbiAgICAgICAgZW5kOiAnMjAyMC0xMi0zMCcsXHJcbiAgICAgICAgaXNBbGxEYXk6IHRydWUsXHJcbiAgICAgICAgaXNSZWFkT25seTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxNTQnLFxyXG4gICAgICAgIGNhbGVuZGFySWQ6ICcxJyxcclxuICAgICAgICB0aXRsZTogJ1vssYTsmqldIOqwnOuwnOyekCDrqbTsoJEnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAndGltZScsXHJcbiAgICAgICAgc3RhcnQ6ICcyMDIwLTEyLTI4VDEwOjAwJyxcclxuICAgICAgICBlbmQ6ICcyMDIwLTEyLTI4VDE0OjAwJyxcclxuICAgICAgICBpc0FsbERheTogZmFsc2UsXHJcbiAgICAgICAgaXNSZWFkT25seTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxNTUnLFxyXG4gICAgICAgIGNhbGVuZGFySWQ6ICcxJyxcclxuICAgICAgICB0aXRsZTogJ0lOU0EgV29ya3Nob3AnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnYWxsZGF5JyxcclxuICAgICAgICBzdGFydDogJzIwMjAtMTItMDUnLFxyXG4gICAgICAgIGVuZDogJzIwMjAtMTItMDYnLFxyXG4gICAgICAgIGlzQWxsRGF5OiB0cnVlLFxyXG4gICAgICAgIGlzUmVhZE9ubHk6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMTU2JyxcclxuICAgICAgICBjYWxlbmRhcklkOiAnMycsXHJcbiAgICAgICAgdGl0bGU6ICdb66Gv642wXSBQSlTrr7jtjIUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAndGltZScsXHJcbiAgICAgICAgc3RhcnQ6ICcyMDIwLTEyLTEwVDEwOjAwJyxcclxuICAgICAgICBlbmQ6ICcyMDIwLTEyLTEwVDEzOjAwJyxcclxuICAgICAgICBpc0FsbERheTogZmFsc2UsXHJcbiAgICAgICAgaXNSZWFkT25seTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxNTcnLFxyXG4gICAgICAgIGNhbGVuZGFySWQ6ICczJyxcclxuICAgICAgICB0aXRsZTogJ1vroa/rjbBdIOqwgOyDgeyduO2EtCBQSlQg66+47YyFJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3RpbWUnLFxyXG4gICAgICAgIHN0YXJ0OiAnMjAyMC0xMi0xN1QxMDowMCcsXHJcbiAgICAgICAgZW5kOiAnMjAyMC0xMi0xN1QxMzowMCcsXHJcbiAgICAgICAgaXNBbGxEYXk6IGZhbHNlLFxyXG4gICAgICAgIGlzUmVhZE9ubHk6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMTU4JyxcclxuICAgICAgICBjYWxlbmRhcklkOiAnMScsXHJcbiAgICAgICAgdGl0bGU6ICfthYzsiqTtirjspJHsnoXri4jri6QoLi4pJyxcclxuICAgICAgICBjYXRlZ29yeTogJ2FsbGRheScsXHJcbiAgICAgICAgc3RhcnQ6ICcyMDIwLTEyLTI5JyxcclxuICAgICAgICBlbmQ6ICcyMDIwLTEyLTI5JyxcclxuICAgICAgICBpc0FsbERheTogdHJ1ZSxcclxuICAgICAgICBpc1JlYWRPbmx5OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzE1OScsXHJcbiAgICAgICAgY2FsZW5kYXJJZDogJzEnLFxyXG4gICAgICAgIHRpdGxlOiAnW0lOU0EmQUNHXSDqsIDsg4Hsl4XrrLRwanQg66+47YyFJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3RpbWUnLFxyXG4gICAgICAgIGVuZDogJzIwMjAtMTItMThUMTU6MDAnLFxyXG4gICAgICAgIGlzQWxsRGF5OiBmYWxzZSxcclxuICAgICAgICBpc1JlYWRPbmx5OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzE2MCcsXHJcbiAgICAgICAgY2FsZW5kYXJJZDogJzEnLFxyXG4gICAgICAgIHRpdGxlOiAnW0lOU0EmQUNHXSDqsIDsg4Hsl4XrrLQgUEpU66+47YyFJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3RpbWUnLFxyXG4gICAgICAgIGVuZDogJzIwMjAtMTItMjVUMTc6MDAnLFxyXG4gICAgICAgIGlzQWxsRGF5OiBmYWxzZSxcclxuICAgICAgICBpc1JlYWRPbmx5OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzE2MScsXHJcbiAgICAgICAgY2FsZW5kYXJJZDogJzMnLFxyXG4gICAgICAgIHRpdGxlOiAn66Gv642wIEFDIOyYqOudvOyduO2UjOueq+2PvCDrhbzsnZgnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAndGltZScsXHJcbiAgICAgICAgc3RhcnQ6ICcyMDIwLTEyLTI1VDEzOjAwJyxcclxuICAgICAgICBlbmQ6ICcyMDIwLTEyLTI1VDE1OjAwJyxcclxuICAgICAgICBpc0FsbERheTogZmFsc2UsXHJcbiAgICAgICAgaXNSZWFkT25seTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxNjInLFxyXG4gICAgICAgIGNhbGVuZGFySWQ6ICc5OScsXHJcbiAgICAgICAgdGl0bGU6ICdb66+4656Y7JeUXSDsnbjsoIHshLHqsoDsgqwnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAndGltZScsXHJcbiAgICAgICAgc3RhcnQ6ICcyMDIwLTEyLTI2VDE4OjAwJyxcclxuICAgICAgICBlbmQ6ICcyMDIwLTEyLTI2VDIwOjAwJyxcclxuICAgICAgICBpc0FsbERheTogZmFsc2UsXHJcbiAgICAgICAgaXNSZWFkT25seTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICcxNjMnLFxyXG4gICAgICAgIGNhbGVuZGFySWQ6ICcxJyxcclxuICAgICAgICB0aXRsZTogJ1vroa/rjbBdIFBKVCDrrLjtla3qsJzrsJzrsKntlqXrhbzsnZgnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAndGltZScsXHJcbiAgICAgICAgc3RhcnQ6ICcyMDIwLTEyLTMwVDE0OjAwJyxcclxuICAgICAgICBlbmQ6ICcyMDIwLTEyLTMwVDE1OjAwJyxcclxuICAgICAgICBpc0FsbERheTogZmFsc2UsXHJcbiAgICAgICAgaXNSZWFkT25seTogdHJ1ZSxcclxuICAgIH0sXHJcbl07XHJcbiIsImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBzY2hlZHVsZV9kYXRhIGZyb20gJy4uL2NvbmZpZy9zY2hlZHVsZV9kYXRhJztcclxuXHJcbmNvbnN0IER5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9DYWxlbmRlckNvbXBvbmVudCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IEluZGV4ID0gKHsgc0RhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RHluYW1pY0NvbXBvbmVudFdpdGhOb1NTUiBzRGF0YT17c0RhdGF9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAvL+yEnOuyhCBhcGkg7KCR6re8XHJcbiAgICBjb25zdCBzRGF0YSA9IHNjaGVkdWxlX2RhdGE7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBzRGF0YSB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR1aS1jYWxlbmRhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9