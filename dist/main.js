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

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(ctx) {\n    this.video = document.getElementById(\"video\");\n    this.ctx = ctx;\n    this.mode = \"gameon\";\n    this.model;\n    this.face;\n    this.DIM_width = 700;\n    this.DIM_height = 450; // Checks to see if game is playing to set up camera and load face models\n\n    if (this.mode === \"gameon\") {\n      this.setupCamera();\n      this.loadFaceModel(); // Sets interval to loop the draw function (which loses context)\n\n      setInterval(this.draw.bind(this), 20);\n    }\n  }\n\n  setupCamera() {\n    // Using the mediaDevices API to grab the video\n    navigator.mediaDevices.getUserMedia({\n      video: {\n        width: this.DIM_width,\n        height: this.DIM_height\n      },\n      audio: false\n    }).then(stream => {\n      // Which returns us a promise which we then take the stream and set that to the video srcObject\n      this.video.srcObject = stream;\n    });\n  }\n\n  loadFaceModel() {\n    // Waiting for the video to have a stream from the setupCamera function\n    this.video.addEventListener(\"loadeddata\", async () => {\n      // Then loads the face detection API\n      this.model = await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh);\n    });\n  }\n\n  async detectFace() {\n    // Here we grab the model we waited from the API for and grab its preditions\n    // from estimatFaces function passing in the video element in order to detect those faces\n    const facePredictions = await this.model.estimateFaces({\n      input: document.querySelector('video')\n    }); // Below are errors to restrict user\n\n    if (facePredictions.length === 0) {\n      this.face = undefined;\n      console.log(\"Error: No face detected\");\n    } else if (facePredictions.length > 1) {\n      this.face = undefined;\n      console.log(\"Error: This app is designed for 1 person at a time\");\n    } else {\n      // Set the face instance variable to the first face prediction\n      this.face = facePredictions[0];\n    }\n  }\n\n  scaleCoord(pt) {\n    let x = pt[0];\n    let y = pt[1];\n    let z = pt[2];\n    return [x, y]; // debugger\n    // let x = map(pt[0], 0,video.width, 0,width);\n    // let y = map(pt[1], 0,video.height, 0,height);\n    // return createVector(x, y);\n  } // Load face models predictions before drawing which happens in the detectFace function\n\n\n  draw() {\n    // This is so that we don't error out before out video loads up\n    if (this.model !== undefined) {\n      this.detectFace();\n      this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height); // console.log(this.face)\n    } // Logic for error handling when face is too far or too close\n\n\n    if (this.face !== undefined) {\n      if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 < 100 || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 < 175) {\n        console.log(\"Error: Bring your face closer and keep it straight\");\n      } else if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 > 300 || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 > 375) {\n        console.log(\"Error: Back up a bit and keep your head straight\");\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFOLENBQVc7RUFFUEMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixLQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFiO0lBQ0EsS0FBS0gsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0ksSUFBTCxHQUFZLFFBQVo7SUFDQSxLQUFLQyxLQUFMO0lBQ0EsS0FBS0MsSUFBTDtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsR0FBakI7SUFDQSxLQUFLQyxVQUFMLEdBQWtCLEdBQWxCLENBUGEsQ0FTYjs7SUFDQSxJQUFJLEtBQUtKLElBQUwsS0FBYyxRQUFsQixFQUEyQjtNQUN2QixLQUFLSyxXQUFMO01BQ0EsS0FBS0MsYUFBTCxHQUZ1QixDQUd2Qjs7TUFDQUMsV0FBVyxDQUFDLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBRCxFQUF1QixFQUF2QixDQUFYO0lBQ0g7RUFDSjs7RUFFREosV0FBVyxHQUFHO0lBQ1Y7SUFDQUssU0FBUyxDQUFDQyxZQUFWLENBQXVCQyxZQUF2QixDQUFvQztNQUNoQ2YsS0FBSyxFQUFFO1FBQUNnQixLQUFLLEVBQUUsS0FBS1YsU0FBYjtRQUF3QlcsTUFBTSxFQUFFLEtBQUtWO01BQXJDLENBRHlCO01BRWhDVyxLQUFLLEVBQUU7SUFGeUIsQ0FBcEMsRUFHR0MsSUFISCxDQUdTQyxNQUFNLElBQUk7TUFDZjtNQUNBLEtBQUtwQixLQUFMLENBQVdxQixTQUFYLEdBQXVCRCxNQUF2QjtJQUNILENBTkQ7RUFPSDs7RUFFRFgsYUFBYSxHQUFHO0lBQ1o7SUFDQSxLQUFLVCxLQUFMLENBQVdzQixnQkFBWCxDQUE0QixZQUE1QixFQUEwQyxZQUFZO01BQ2xEO01BQ0EsS0FBS2xCLEtBQUwsR0FBYSxNQUFNbUIsc0JBQXNCLENBQUNDLElBQXZCLENBQ2ZELHNCQUFzQixDQUFDRSxpQkFBdkIsQ0FBeUNDLGlCQUQxQixDQUFuQjtJQUdILENBTEQ7RUFNSDs7RUFFZSxNQUFWQyxVQUFVLEdBQUc7SUFDZjtJQUNBO0lBQ0EsTUFBTUMsZUFBZSxHQUFHLE1BQU0sS0FBS3hCLEtBQUwsQ0FBV3lCLGFBQVgsQ0FBeUI7TUFDbkRDLEtBQUssRUFBRTdCLFFBQVEsQ0FBQzhCLGFBQVQsQ0FBdUIsT0FBdkI7SUFENEMsQ0FBekIsQ0FBOUIsQ0FIZSxDQU9mOztJQUNBLElBQUlILGVBQWUsQ0FBQ0ksTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7TUFDOUIsS0FBSzNCLElBQUwsR0FBWTRCLFNBQVo7TUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7SUFDSCxDQUhELE1BR08sSUFBSVAsZUFBZSxDQUFDSSxNQUFoQixHQUF5QixDQUE3QixFQUFnQztNQUNuQyxLQUFLM0IsSUFBTCxHQUFZNEIsU0FBWjtNQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBWjtJQUNILENBSE0sTUFHQTtNQUNIO01BQ0EsS0FBSzlCLElBQUwsR0FBWXVCLGVBQWUsQ0FBQyxDQUFELENBQTNCO0lBQ0g7RUFFSjs7RUFFRFEsVUFBVSxDQUFDQyxFQUFELEVBQUs7SUFDWCxJQUFJQyxDQUFDLEdBQUdELEVBQUUsQ0FBQyxDQUFELENBQVY7SUFDQSxJQUFJRSxDQUFDLEdBQUdGLEVBQUUsQ0FBQyxDQUFELENBQVY7SUFDQSxJQUFJRyxDQUFDLEdBQUdILEVBQUUsQ0FBQyxDQUFELENBQVY7SUFDQSxPQUFPLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFQLENBSlcsQ0FLWDtJQUNBO0lBQ0E7SUFDQTtFQUNILENBdkVNLENBeUVQOzs7RUFDQTVCLElBQUksR0FBRztJQUNIO0lBQ0EsSUFBSSxLQUFLUCxLQUFMLEtBQWU2QixTQUFuQixFQUE4QjtNQUMxQixLQUFLTixVQUFMO01BQ0EsS0FBSzVCLEdBQUwsQ0FBUzBDLFNBQVQsQ0FBbUIsS0FBS3pDLEtBQXhCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLEtBQUtNLFNBQTFDLEVBQXFELEtBQUtDLFVBQTFELEVBRjBCLENBRzFCO0lBQ0gsQ0FORSxDQU9IOzs7SUFDQSxJQUFJLEtBQUtGLElBQUwsS0FBYzRCLFNBQWxCLEVBQTZCO01BQ3pCLElBQUksS0FBSzVCLElBQUwsQ0FBVXFDLFdBQVYsQ0FBc0JDLFdBQXRCLENBQWtDLENBQWxDLElBQXVDLEtBQUt0QyxJQUFMLENBQVVxQyxXQUFWLENBQXNCRSxPQUF0QixDQUE4QixDQUE5QixDQUF2QyxHQUEwRSxFQUExRSxHQUErRSxHQUEvRSxJQUFzRixLQUFLdkMsSUFBTCxDQUFVcUMsV0FBVixDQUFzQkMsV0FBdEIsQ0FBa0MsQ0FBbEMsSUFBdUMsS0FBS3RDLElBQUwsQ0FBVXFDLFdBQVYsQ0FBc0JFLE9BQXRCLENBQThCLENBQTlCLENBQXZDLEdBQTBFLEdBQTFFLEdBQWdGLEdBQTFLLEVBQStLO1FBQzNLVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBWjtNQUNILENBRkQsTUFHTSxJQUFJLEtBQUs5QixJQUFMLENBQVVxQyxXQUFWLENBQXNCQyxXQUF0QixDQUFrQyxDQUFsQyxJQUF1QyxLQUFLdEMsSUFBTCxDQUFVcUMsV0FBVixDQUFzQkUsT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FBdkMsR0FBMEUsRUFBMUUsR0FBK0UsR0FBL0UsSUFBc0YsS0FBS3ZDLElBQUwsQ0FBVXFDLFdBQVYsQ0FBc0JDLFdBQXRCLENBQWtDLENBQWxDLElBQXVDLEtBQUt0QyxJQUFMLENBQVVxQyxXQUFWLENBQXNCRSxPQUF0QixDQUE4QixDQUE5QixDQUF2QyxHQUEwRSxHQUExRSxHQUFnRixHQUExSyxFQUErSztRQUNqTFYsT0FBTyxDQUFDQyxHQUFSLENBQVksa0RBQVo7TUFDSDtJQUNKO0VBRUo7O0FBM0ZNOztBQStGWCwrREFBZXRDLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GQUNFTUFOLVJldmFtcGVkLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xyXG4gICAgICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMubW9kZSA9IFwiZ2FtZW9uXCI7XHJcbiAgICAgICAgdGhpcy5tb2RlbDtcclxuICAgICAgICB0aGlzLmZhY2U7XHJcbiAgICAgICAgdGhpcy5ESU1fd2lkdGggPSA3MDA7XHJcbiAgICAgICAgdGhpcy5ESU1faGVpZ2h0ID0gNDUwO1xyXG5cclxuICAgICAgICAvLyBDaGVja3MgdG8gc2VlIGlmIGdhbWUgaXMgcGxheWluZyB0byBzZXQgdXAgY2FtZXJhIGFuZCBsb2FkIGZhY2UgbW9kZWxzXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJnYW1lb25cIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBDYW1lcmEoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRmFjZU1vZGVsKCk7XHJcbiAgICAgICAgICAgIC8vIFNldHMgaW50ZXJ2YWwgdG8gbG9vcCB0aGUgZHJhdyBmdW5jdGlvbiAod2hpY2ggbG9zZXMgY29udGV4dClcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5kcmF3LmJpbmQodGhpcyksIDIwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBDYW1lcmEoKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgdGhlIG1lZGlhRGV2aWNlcyBBUEkgdG8gZ3JhYiB0aGUgdmlkZW9cclxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICAgIHZpZGVvOiB7d2lkdGg6IHRoaXMuRElNX3dpZHRoLCBoZWlnaHQ6IHRoaXMuRElNX2hlaWdodH0sXHJcbiAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcclxuICAgICAgICB9KS50aGVuKCBzdHJlYW0gPT4ge1xyXG4gICAgICAgICAgICAvLyBXaGljaCByZXR1cm5zIHVzIGEgcHJvbWlzZSB3aGljaCB3ZSB0aGVuIHRha2UgdGhlIHN0cmVhbSBhbmQgc2V0IHRoYXQgdG8gdGhlIHZpZGVvIHNyY09iamVjdFxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRmFjZU1vZGVsKCkge1xyXG4gICAgICAgIC8vIFdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBoYXZlIGEgc3RyZWFtIGZyb20gdGhlIHNldHVwQ2FtZXJhIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkZGF0YVwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRoZW4gbG9hZHMgdGhlIGZhY2UgZGV0ZWN0aW9uIEFQSVxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gYXdhaXQgZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5sb2FkKFxyXG4gICAgICAgICAgICAgICAgZmFjZUxhbmRtYXJrc0RldGVjdGlvbi5TdXBwb3J0ZWRQYWNrYWdlcy5tZWRpYXBpcGVGYWNlbWVzaFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRldGVjdEZhY2UoKSB7XHJcbiAgICAgICAgLy8gSGVyZSB3ZSBncmFiIHRoZSBtb2RlbCB3ZSB3YWl0ZWQgZnJvbSB0aGUgQVBJIGZvciBhbmQgZ3JhYiBpdHMgcHJlZGl0aW9uc1xyXG4gICAgICAgIC8vIGZyb20gZXN0aW1hdEZhY2VzIGZ1bmN0aW9uIHBhc3NpbmcgaW4gdGhlIHZpZGVvIGVsZW1lbnQgaW4gb3JkZXIgdG8gZGV0ZWN0IHRob3NlIGZhY2VzXHJcbiAgICAgICAgY29uc3QgZmFjZVByZWRpY3Rpb25zID0gYXdhaXQgdGhpcy5tb2RlbC5lc3RpbWF0ZUZhY2VzKHtcclxuICAgICAgICAgICAgaW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmVsb3cgYXJlIGVycm9ycyB0byByZXN0cmljdCB1c2VyXHJcbiAgICAgICAgaWYgKGZhY2VQcmVkaWN0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mYWNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBObyBmYWNlIGRldGVjdGVkXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChmYWNlUHJlZGljdGlvbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFRoaXMgYXBwIGlzIGRlc2lnbmVkIGZvciAxIHBlcnNvbiBhdCBhIHRpbWVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGZhY2UgaW5zdGFuY2UgdmFyaWFibGUgdG8gdGhlIGZpcnN0IGZhY2UgcHJlZGljdGlvblxyXG4gICAgICAgICAgICB0aGlzLmZhY2UgPSBmYWNlUHJlZGljdGlvbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzY2FsZUNvb3JkKHB0KSB7XHJcbiAgICAgICAgbGV0IHggPSBwdFswXTtcclxuICAgICAgICBsZXQgeSA9IHB0WzFdO1xyXG4gICAgICAgIGxldCB6ID0gcHRbMl07XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgIC8vIGxldCB4ID0gbWFwKHB0WzBdLCAwLHZpZGVvLndpZHRoLCAwLHdpZHRoKTtcclxuICAgICAgICAvLyBsZXQgeSA9IG1hcChwdFsxXSwgMCx2aWRlby5oZWlnaHQsIDAsaGVpZ2h0KTtcclxuICAgICAgICAvLyByZXR1cm4gY3JlYXRlVmVjdG9yKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgZmFjZSBtb2RlbHMgcHJlZGljdGlvbnMgYmVmb3JlIGRyYXdpbmcgd2hpY2ggaGFwcGVucyBpbiB0aGUgZGV0ZWN0RmFjZSBmdW5jdGlvblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICAvLyBUaGlzIGlzIHNvIHRoYXQgd2UgZG9uJ3QgZXJyb3Igb3V0IGJlZm9yZSBvdXQgdmlkZW8gbG9hZHMgdXBcclxuICAgICAgICBpZiAodGhpcy5tb2RlbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0RmFjZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy52aWRlbywgMCwgMCwgdGhpcy5ESU1fd2lkdGgsIHRoaXMuRElNX2hlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmFjZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTG9naWMgZm9yIGVycm9yIGhhbmRsaW5nIHdoZW4gZmFjZSBpcyB0b28gZmFyIG9yIHRvbyBjbG9zZVxyXG4gICAgICAgIGlmICh0aGlzLmZhY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mYWNlLmJvdW5kaW5nQm94LmJvdHRvbVJpZ2h0WzBdIC0gdGhpcy5mYWNlLmJvdW5kaW5nQm94LnRvcExlZnRbMF0gLSA0MCA8IDEwMCB8fCB0aGlzLmZhY2UuYm91bmRpbmdCb3guYm90dG9tUmlnaHRbMV0gLSB0aGlzLmZhY2UuYm91bmRpbmdCb3gudG9wTGVmdFsxXSArIDExMCA8IDE3NSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogQnJpbmcgeW91ciBmYWNlIGNsb3NlciBhbmQga2VlcCBpdCBzdHJhaWdodFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZhY2UuYm91bmRpbmdCb3guYm90dG9tUmlnaHRbMF0gLSB0aGlzLmZhY2UuYm91bmRpbmdCb3gudG9wTGVmdFswXSAtIDQwID4gMzAwIHx8IHRoaXMuZmFjZS5ib3VuZGluZ0JveC5ib3R0b21SaWdodFsxXSAtIHRoaXMuZmFjZS5ib3VuZGluZ0JveC50b3BMZWZ0WzFdICsgMTEwID4gMzc1KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBCYWNrIHVwIGEgYml0IGFuZCBrZWVwIHlvdXIgaGVhZCBzdHJhaWdodFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJ2aWRlbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2RlIiwibW9kZWwiLCJmYWNlIiwiRElNX3dpZHRoIiwiRElNX2hlaWdodCIsInNldHVwQ2FtZXJhIiwibG9hZEZhY2VNb2RlbCIsInNldEludGVydmFsIiwiZHJhdyIsImJpbmQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ3aWR0aCIsImhlaWdodCIsImF1ZGlvIiwidGhlbiIsInN0cmVhbSIsInNyY09iamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmYWNlTGFuZG1hcmtzRGV0ZWN0aW9uIiwibG9hZCIsIlN1cHBvcnRlZFBhY2thZ2VzIiwibWVkaWFwaXBlRmFjZW1lc2giLCJkZXRlY3RGYWNlIiwiZmFjZVByZWRpY3Rpb25zIiwiZXN0aW1hdGVGYWNlcyIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJzY2FsZUNvb3JkIiwicHQiLCJ4IiwieSIsInoiLCJkcmF3SW1hZ2UiLCJib3VuZGluZ0JveCIsImJvdHRvbVJpZ2h0IiwidG9wTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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