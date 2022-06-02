/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"canvas\");\n  canvasEl.height = 450;\n  canvasEl.width = 700;\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, 700, 450);\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWpCO0VBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQixHQUFsQjtFQUNBRixRQUFRLENBQUNHLEtBQVQsR0FBaUIsR0FBakI7RUFDQSxNQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQixJQUFwQixDQUFaO0VBQ0FELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixNQUFoQjtFQUNBRixHQUFHLENBQUNHLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCO0VBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlYLHFEQUFKLENBQVNPLEdBQVQsQ0FBYjtBQUNILENBVEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GQUNFTUFOLVJldmFtcGVkLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbiAgICBjYW52YXNFbC5oZWlnaHQgPSA0NTA7XHJcbiAgICBjYW52YXNFbC53aWR0aCA9IDcwMDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCA3MDAsIDQ1MCk7XHJcblxyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XHJcbn0pIl0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0Iiwid2lkdGgiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(ctx) {\n    this.video = document.getElementById(\"video\");\n    this.ctx = ctx;\n    this.mode = \"gameon\";\n    this.model; // Checks to see if game is playing to set up camera and load face models\n\n    if (this.mode === \"gameon\") {\n      this.setupCamera();\n      this.loadFaceModel(); // Sets interval to loop the draw function (which loses context)\n\n      setInterval(this.draw.bind(this), 20);\n    }\n  }\n\n  setupCamera() {\n    // Using the mediaDevices API to grab the video\n    navigator.mediaDevices.getUserMedia({\n      video: {\n        width: 700,\n        height: 450\n      },\n      audio: false\n    }).then(stream => {\n      // Which returns us a promise which we then take the stream and set that to the video srcObject\n      this.video.srcObject = stream;\n    });\n  }\n\n  loadFaceModel() {\n    // Waiting for the video to have a stream from the setupCamera function\n    this.video.addEventListener(\"loadeddata\", async () => {\n      // Then loads the face detection API\n      this.model = await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh);\n    });\n  }\n\n  async detectFace() {\n    // Here we grab the model we waited from the API for and grab its preditions\n    // from estimatFaces function passing in the video element in order to detect those faces\n    const prediction = await this.model.estimateFaces({\n      input: document.querySelector('video')\n    });\n    this.ctx.drawImage(this.video, 0, 0, 700, 450);\n    console.log(prediction);\n  } // Load face models predictions before drawing which happens in the detectFace function\n\n\n  draw() {\n    // This is so that we don't error out before out video loads up\n    if (this.model !== undefined) {\n      this.detectFace();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFOLENBQVc7RUFFUEMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixLQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFiO0lBQ0EsS0FBS0gsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0ksSUFBTCxHQUFZLFFBQVo7SUFDQSxLQUFLQyxLQUFMLENBSmEsQ0FNYjs7SUFDQSxJQUFJLEtBQUtELElBQUwsS0FBYyxRQUFsQixFQUEyQjtNQUN2QixLQUFLRSxXQUFMO01BQ0EsS0FBS0MsYUFBTCxHQUZ1QixDQUd2Qjs7TUFDQUMsV0FBVyxDQUFDLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBRCxFQUF1QixFQUF2QixDQUFYO0lBQ0g7RUFDSjs7RUFFREosV0FBVyxHQUFHO0lBQ1Y7SUFDQUssU0FBUyxDQUFDQyxZQUFWLENBQXVCQyxZQUF2QixDQUFvQztNQUNoQ1osS0FBSyxFQUFFO1FBQUNhLEtBQUssRUFBRSxHQUFSO1FBQWFDLE1BQU0sRUFBRTtNQUFyQixDQUR5QjtNQUVoQ0MsS0FBSyxFQUFFO0lBRnlCLENBQXBDLEVBR0dDLElBSEgsQ0FHU0MsTUFBTSxJQUFJO01BQ2Y7TUFDQSxLQUFLakIsS0FBTCxDQUFXa0IsU0FBWCxHQUF1QkQsTUFBdkI7SUFDSCxDQU5EO0VBT0g7O0VBRURYLGFBQWEsR0FBRztJQUNaO0lBQ0EsS0FBS04sS0FBTCxDQUFXbUIsZ0JBQVgsQ0FBNEIsWUFBNUIsRUFBMEMsWUFBWTtNQUNsRDtNQUNBLEtBQUtmLEtBQUwsR0FBYSxNQUFNZ0Isc0JBQXNCLENBQUNDLElBQXZCLENBQ2ZELHNCQUFzQixDQUFDRSxpQkFBdkIsQ0FBeUNDLGlCQUQxQixDQUFuQjtJQUdILENBTEQ7RUFNSDs7RUFFZSxNQUFWQyxVQUFVLEdBQUc7SUFDZjtJQUNBO0lBQ0EsTUFBTUMsVUFBVSxHQUFHLE1BQU0sS0FBS3JCLEtBQUwsQ0FBV3NCLGFBQVgsQ0FBeUI7TUFDOUNDLEtBQUssRUFBRTFCLFFBQVEsQ0FBQzJCLGFBQVQsQ0FBdUIsT0FBdkI7SUFEdUMsQ0FBekIsQ0FBekI7SUFHQSxLQUFLN0IsR0FBTCxDQUFTOEIsU0FBVCxDQUFtQixLQUFLN0IsS0FBeEIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsR0FBckMsRUFBMEMsR0FBMUM7SUFFQThCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixVQUFaO0VBQ0gsQ0EvQ00sQ0FpRFA7OztFQUNBakIsSUFBSSxHQUFHO0lBQ0g7SUFDQSxJQUFJLEtBQUtKLEtBQUwsS0FBZTRCLFNBQW5CLEVBQThCO01BQzFCLEtBQUtSLFVBQUw7SUFDSDtFQUNKOztBQXZETTs7QUEyRFgsK0RBQWUzQixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRkFDRU1BTi1SZXZhbXBlZC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcclxuICAgICAgICB0aGlzLnZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKTtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLm1vZGUgPSBcImdhbWVvblwiO1xyXG4gICAgICAgIHRoaXMubW9kZWw7XHJcblxyXG4gICAgICAgIC8vIENoZWNrcyB0byBzZWUgaWYgZ2FtZSBpcyBwbGF5aW5nIHRvIHNldCB1cCBjYW1lcmEgYW5kIGxvYWQgZmFjZSBtb2RlbHNcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBcImdhbWVvblwiKXtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cENhbWVyYSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRGYWNlTW9kZWwoKTtcclxuICAgICAgICAgICAgLy8gU2V0cyBpbnRlcnZhbCB0byBsb29wIHRoZSBkcmF3IGZ1bmN0aW9uICh3aGljaCBsb3NlcyBjb250ZXh0KVxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCh0aGlzLmRyYXcuYmluZCh0aGlzKSwgMjApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENhbWVyYSgpIHtcclxuICAgICAgICAvLyBVc2luZyB0aGUgbWVkaWFEZXZpY2VzIEFQSSB0byBncmFiIHRoZSB2aWRlb1xyXG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgICAgdmlkZW86IHt3aWR0aDogNzAwLCBoZWlnaHQ6IDQ1MH0sXHJcbiAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcclxuICAgICAgICB9KS50aGVuKCBzdHJlYW0gPT4ge1xyXG4gICAgICAgICAgICAvLyBXaGljaCByZXR1cm5zIHVzIGEgcHJvbWlzZSB3aGljaCB3ZSB0aGVuIHRha2UgdGhlIHN0cmVhbSBhbmQgc2V0IHRoYXQgdG8gdGhlIHZpZGVvIHNyY09iamVjdFxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRmFjZU1vZGVsKCkge1xyXG4gICAgICAgIC8vIFdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBoYXZlIGEgc3RyZWFtIGZyb20gdGhlIHNldHVwQ2FtZXJhIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkZGF0YVwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRoZW4gbG9hZHMgdGhlIGZhY2UgZGV0ZWN0aW9uIEFQSVxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gYXdhaXQgZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5sb2FkKFxyXG4gICAgICAgICAgICAgICAgZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5TdXBwb3J0ZWRQYWNrYWdlcy5tZWRpYXBpcGVGYWNlbWVzaFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRldGVjdEZhY2UoKSB7XHJcbiAgICAgICAgLy8gSGVyZSB3ZSBncmFiIHRoZSBtb2RlbCB3ZSB3YWl0ZWQgZnJvbSB0aGUgQVBJIGZvciBhbmQgZ3JhYiBpdHMgcHJlZGl0aW9uc1xyXG4gICAgICAgIC8vIGZyb20gZXN0aW1hdEZhY2VzIGZ1bmN0aW9uIHBhc3NpbmcgaW4gdGhlIHZpZGVvIGVsZW1lbnQgaW4gb3JkZXIgdG8gZGV0ZWN0IHRob3NlIGZhY2VzXHJcbiAgICAgICAgY29uc3QgcHJlZGljdGlvbiA9IGF3YWl0IHRoaXMubW9kZWwuZXN0aW1hdGVGYWNlcyh7XHJcbiAgICAgICAgICAgIGlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudmlkZW8sIDAsIDAsIDcwMCwgNDUwKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJlZGljdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBmYWNlIG1vZGVscyBwcmVkaWN0aW9ucyBiZWZvcmUgZHJhd2luZyB3aGljaCBoYXBwZW5zIGluIHRoZSBkZXRlY3RGYWNlIGZ1bmN0aW9uXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhhdCB3ZSBkb24ndCBlcnJvciBvdXQgYmVmb3JlIG91dCB2aWRlbyBsb2FkcyB1cFxyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RGYWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwiY3R4IiwidmlkZW8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kZSIsIm1vZGVsIiwic2V0dXBDYW1lcmEiLCJsb2FkRmFjZU1vZGVsIiwic2V0SW50ZXJ2YWwiLCJkcmF3IiwiYmluZCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsIndpZHRoIiwiaGVpZ2h0IiwiYXVkaW8iLCJ0aGVuIiwic3RyZWFtIiwic3JjT2JqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZhY2VMYW5kbWFya3NEZXRlY3Rpb24iLCJsb2FkIiwiU3VwcG9ydGVkUGFja2FnZXMiLCJtZWRpYXBpcGVGYWNlbWVzaCIsImRldGVjdEZhY2UiLCJwcmVkaWN0aW9uIiwiZXN0aW1hdGVGYWNlcyIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsImRyYXdJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GQUNFTUFOLVJldmFtcGVkLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;