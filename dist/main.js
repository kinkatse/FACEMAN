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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"canvas\");\n  canvasEl.height = 450;\n  canvasEl.width = 700;\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, 700, 450);\n  const video = document.getElementById(\"video\");\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, video);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWpCO0VBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQixHQUFsQjtFQUNBRixRQUFRLENBQUNHLEtBQVQsR0FBaUIsR0FBakI7RUFDQSxNQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQixJQUFwQixDQUFaO0VBQ0FELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixNQUFoQjtFQUNBRixHQUFHLENBQUNHLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCO0VBRUEsTUFBTUMsS0FBSyxHQUFHVixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtFQUNBLE1BQU1RLElBQUksR0FBRyxJQUFJWixxREFBSixDQUFTTyxHQUFULEVBQWNJLEtBQWQsQ0FBYjtBQUNILENBVkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GQUNFTUFOLVJldmFtcGVkLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbiAgICBjYW52YXNFbC5oZWlnaHQgPSA0NTA7XHJcbiAgICBjYW52YXNFbC53aWR0aCA9IDcwMDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCA3MDAsIDQ1MCk7XHJcblxyXG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpO1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgdmlkZW8pO1xyXG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImhlaWdodCIsIndpZHRoIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidmlkZW8iLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(ctx, video) {\n    this.video = video;\n    this.ctx = ctx;\n    this.mode = \"gameon\";\n    this.model;\n    this.face;\n    this.DIM_width = 700;\n    this.DIM_height = 450; // Checks to see if game is playing to set up camera and load face models\n\n    if (this.mode === \"gameon\") {\n      this.setupCamera();\n      this.loadFaceModel(); // Sets interval to loop the draw function (which loses context)\n      // setInterval(this.draw.bind(this), 20);\n\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  setupCamera() {\n    // Using the mediaDevices API to grab the video\n    navigator.mediaDevices.getUserMedia({\n      video: {\n        width: this.DIM_width,\n        height: this.DIM_height\n      },\n      audio: false\n    }).then(stream => {\n      // Which returns us a promise which we then take the stream and set that to the video srcObject\n      this.video.srcObject = stream;\n    });\n  }\n\n  loadFaceModel() {\n    // Waiting for the video to have a stream from the setupCamera function\n    this.video.addEventListener(\"loadeddata\", async () => {\n      // Then load up the face detection API\n      this.model = await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh);\n    });\n  }\n\n  async detectFace() {\n    // Here we grab the model we waited from the API for and grab its preditions\n    // from estimateFaces function passing in the video element in order to detect those faces\n    const facePredictions = await this.model.estimateFaces({\n      input: this.video\n    }); // Below are errors to restrict user\n\n    if (facePredictions.length === 0) {\n      this.face = undefined;\n      console.log(\"Error: No face detected\");\n    } else if (facePredictions.length > 1) {\n      this.face = undefined;\n      console.log(\"Error: This app is designed for 1 person at a time\");\n    } else {\n      // Set the face instance variable to the first face prediction\n      this.face = facePredictions[0];\n    }\n  }\n\n  animate() {\n    this.draw();\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  scaleCoord(pt) {\n    let x = pt[0];\n    let y = pt[1];\n    let z = pt[2];\n    return [x, y]; // debugger\n    // let x = map(pt[0], 0,video.width, 0,width);\n    // let y = map(pt[1], 0,video.height, 0,height);\n    // return createVector(x, y);\n  } // getPixelMatrix(imgData) {\n  //     const mat = new Array(imgData.height);\n  //     for (let i = 0; i < imgData.height; i++) {\n  //         mat[i] = new Array(imgData.weight);\n  //     }\n  //     for (let i = 0; i < imgData.data.length; i+=4) {\n  //         const pixelColor = {\n  //             r: imgData.data[i+0],\n  //             g: imgData.data[i+1],\n  //             b: imgData.data[i+2],\n  //             a: imgData.data[i+3]\n  //         }\n  //         const pixelIdx = i/4;\n  //         const x = pixelIdx%imgData.width;\n  //         const y = Math.floor(pixelIdx/imgData.width);\n  //         mat[y][x] = pixelColor\n  //     }\n  //     return mat;\n  // }\n  // Load face models predictions before drawing which happens in the detectFace function\n\n\n  draw() {\n    // This is so that we don't error out before out video loads up\n    if (this.model !== undefined) {\n      this.detectFace();\n      this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height); // console.log(this.face)\n      // debugger\n    } // Logic for error handling when face is too far or too close\n\n\n    if (this.face !== undefined) {\n      if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 < 100 || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 < 175) {\n        console.log(\"Error: Bring your face closer and keep it straight\");\n      } else if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 > 300 || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 > 375) {\n        console.log(\"Error: Back up a bit and keep your head straight\");\n      }\n    } // When filters are clicked, they are revealed here\n    // My attempt to distort the face\n    // const sadFace = true\n    // if (sadFace && this.face !== undefined) {\n    //     for (let i = 0; i < this.face.annotations.lipsLowerOuter.length; i++) {\n    //         // I manipulated the face object from the API but it doesn't correlate to the video or canvas\n    //         // Instead of just subtracting two points, I probably need to do some math to figure out\n    //         // how to distort a section of the face\n    //         this.face.annotations.lipsLowerOuter[i][0] -= 50;\n    //         this.face.annotations.lipsLowerOuter[i][1] -= 50;\n    //         // I could do one of two things:\n    //         // Manipulate the video before I draw the ctx\n    //         // or manipulate the ctx after I drew it\n    //         // Method 2 attempt\n    //         this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height);\n    //         const imgData = this.ctx.getImageData(0,0,this.DIM_width, this.DIM_height)\n    //         console.log(imgData)\n    //         const mat = this.getPixelMatrix(imgData);\n    //         console.log(mat)\n    //         // Cool, now I can manipulate the ctx data points and draw it again\n    //     }\n    // }\n\n\n    const faceMaskDots = true;\n\n    if (faceMaskDots && this.face !== undefined) {\n      // Making blue mask around face\n      this.ctx.strokeStyle = 'rgba(0, 150, 255, 0.5)';\n      this.ctx.beginPath();\n      let startpt = this.face.annotations.silhouette[0];\n      startpt = this.scaleCoord(startpt);\n\n      for (let pt of this.face.annotations.silhouette) {\n        pt = this.scaleCoord(pt);\n        this.ctx.lineTo(...pt);\n      } // This is to close the shape\n\n\n      this.ctx.lineTo(...startpt);\n      this.ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';\n      this.ctx.fill();\n      this.ctx.stroke(); // Making face dots for each facial feature\n\n      for (let pt of this.face.scaledMesh) {\n        this.ctx.beginPath();\n        this.ctx.strokeStyle = \"black\";\n        pt = this.scaleCoord(pt);\n        let x = pt[0];\n        let y = pt[1];\n        this.ctx.arc(x, y, 0.5, 0, 2 * Math.PI);\n        this.ctx.fillStyle = \"black\";\n        this.ctx.fill();\n        this.ctx.stroke();\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsS0FBS0QsVUFBTCxDQUFnQkMsRUFBaEIsQ0FBTDtRQUNBLElBQUlDLENBQUMsR0FBR0QsRUFBRSxDQUFDLENBQUQsQ0FBVjtRQUNBLElBQUlFLENBQUMsR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FBVjtRQUNBLEtBQUtwQyxHQUFMLENBQVN1RCxHQUFULENBQWFsQixDQUFiLEVBQWdCQyxDQUFoQixFQUFtQixHQUFuQixFQUF3QixDQUF4QixFQUEyQixJQUFJa0IsSUFBSSxDQUFDQyxFQUFwQztRQUNBLEtBQUt6RCxHQUFMLENBQVNtRCxTQUFULEdBQXFCLE9BQXJCO1FBQ0EsS0FBS25ELEdBQUwsQ0FBU29ELElBQVQ7UUFDQSxLQUFLcEQsR0FBTCxDQUFTcUQsTUFBVDtNQUNIO0lBQ0o7RUFDSjs7QUFoTE07O0FBb0xYLCtEQUFldkQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL0ZBQ0VNQU4tUmV2YW1wZWQvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB2aWRlbykge1xyXG4gICAgICAgIHRoaXMudmlkZW8gPSB2aWRlb1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMubW9kZSA9IFwiZ2FtZW9uXCI7XHJcbiAgICAgICAgdGhpcy5tb2RlbDtcclxuICAgICAgICB0aGlzLmZhY2U7XHJcbiAgICAgICAgdGhpcy5ESU1fd2lkdGggPSA3MDA7XHJcbiAgICAgICAgdGhpcy5ESU1faGVpZ2h0ID0gNDUwO1xyXG5cclxuICAgICAgICAvLyBDaGVja3MgdG8gc2VlIGlmIGdhbWUgaXMgcGxheWluZyB0byBzZXQgdXAgY2FtZXJhIGFuZCBsb2FkIGZhY2UgbW9kZWxzXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJnYW1lb25cIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBDYW1lcmEoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRmFjZU1vZGVsKCk7XHJcbiAgICAgICAgICAgIC8vIFNldHMgaW50ZXJ2YWwgdG8gbG9vcCB0aGUgZHJhdyBmdW5jdGlvbiAod2hpY2ggbG9zZXMgY29udGV4dClcclxuICAgICAgICAgICAgLy8gc2V0SW50ZXJ2YWwodGhpcy5kcmF3LmJpbmQodGhpcyksIDIwKTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cENhbWVyYSgpIHtcclxuICAgICAgICAvLyBVc2luZyB0aGUgbWVkaWFEZXZpY2VzIEFQSSB0byBncmFiIHRoZSB2aWRlb1xyXG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgICAgdmlkZW86IHt3aWR0aDogdGhpcy5ESU1fd2lkdGgsIGhlaWdodDogdGhpcy5ESU1faGVpZ2h0fSxcclxuICAgICAgICAgICAgYXVkaW86IGZhbHNlLFxyXG4gICAgICAgIH0pLnRoZW4oIHN0cmVhbSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFdoaWNoIHJldHVybnMgdXMgYSBwcm9taXNlIHdoaWNoIHdlIHRoZW4gdGFrZSB0aGUgc3RyZWFtIGFuZCBzZXQgdGhhdCB0byB0aGUgdmlkZW8gc3JjT2JqZWN0XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRGYWNlTW9kZWwoKSB7XHJcbiAgICAgICAgLy8gV2FpdGluZyBmb3IgdGhlIHZpZGVvIHRvIGhhdmUgYSBzdHJlYW0gZnJvbSB0aGUgc2V0dXBDYW1lcmEgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRkYXRhXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgLy8gVGhlbiBsb2FkIHVwIHRoZSBmYWNlIGRldGVjdGlvbiBBUElcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IGF3YWl0IGZhY2VMYW5kbWFya3NEZXRlY3Rpb24ubG9hZChcclxuICAgICAgICAgICAgICAgIGZhY2VMYW5kbWFya3NEZXRlY3Rpb24uU3VwcG9ydGVkUGFja2FnZXMubWVkaWFwaXBlRmFjZW1lc2hcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZXRlY3RGYWNlKCkge1xyXG4gICAgICAgIC8vIEhlcmUgd2UgZ3JhYiB0aGUgbW9kZWwgd2Ugd2FpdGVkIGZyb20gdGhlIEFQSSBmb3IgYW5kIGdyYWIgaXRzIHByZWRpdGlvbnNcclxuICAgICAgICAvLyBmcm9tIGVzdGltYXRlRmFjZXMgZnVuY3Rpb24gcGFzc2luZyBpbiB0aGUgdmlkZW8gZWxlbWVudCBpbiBvcmRlciB0byBkZXRlY3QgdGhvc2UgZmFjZXNcclxuICAgICAgICBjb25zdCBmYWNlUHJlZGljdGlvbnMgPSBhd2FpdCB0aGlzLm1vZGVsLmVzdGltYXRlRmFjZXMoe1xyXG4gICAgICAgICAgICBpbnB1dDogdGhpcy52aWRlb1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCZWxvdyBhcmUgZXJyb3JzIHRvIHJlc3RyaWN0IHVzZXJcclxuICAgICAgICBpZiAoZmFjZVByZWRpY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZhY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IE5vIGZhY2UgZGV0ZWN0ZWRcIilcclxuICAgICAgICB9IGVsc2UgaWYgKGZhY2VQcmVkaWN0aW9ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogVGhpcyBhcHAgaXMgZGVzaWduZWQgZm9yIDEgcGVyc29uIGF0IGEgdGltZVwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZmFjZSBpbnN0YW5jZSB2YXJpYWJsZSB0byB0aGUgZmlyc3QgZmFjZSBwcmVkaWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuZmFjZSA9IGZhY2VQcmVkaWN0aW9uc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KClcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVDb29yZChwdCkge1xyXG4gICAgICAgIGxldCB4ID0gcHRbMF07XHJcbiAgICAgICAgbGV0IHkgPSBwdFsxXTtcclxuICAgICAgICBsZXQgeiA9IHB0WzJdO1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAvLyBsZXQgeCA9IG1hcChwdFswXSwgMCx2aWRlby53aWR0aCwgMCx3aWR0aCk7XHJcbiAgICAgICAgLy8gbGV0IHkgPSBtYXAocHRbMV0sIDAsdmlkZW8uaGVpZ2h0LCAwLGhlaWdodCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIGNyZWF0ZVZlY3Rvcih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRQaXhlbE1hdHJpeChpbWdEYXRhKSB7XHJcbiAgICAvLyAgICAgY29uc3QgbWF0ID0gbmV3IEFycmF5KGltZ0RhdGEuaGVpZ2h0KTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltZ0RhdGEuaGVpZ2h0OyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbWF0W2ldID0gbmV3IEFycmF5KGltZ0RhdGEud2VpZ2h0KTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nRGF0YS5kYXRhLmxlbmd0aDsgaSs9NCkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBwaXhlbENvbG9yID0ge1xyXG4gICAgLy8gICAgICAgICAgICAgcjogaW1nRGF0YS5kYXRhW2krMF0sXHJcbiAgICAvLyAgICAgICAgICAgICBnOiBpbWdEYXRhLmRhdGFbaSsxXSxcclxuICAgIC8vICAgICAgICAgICAgIGI6IGltZ0RhdGEuZGF0YVtpKzJdLFxyXG4gICAgLy8gICAgICAgICAgICAgYTogaW1nRGF0YS5kYXRhW2krM11cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgY29uc3QgcGl4ZWxJZHggPSBpLzQ7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHggPSBwaXhlbElkeCVpbWdEYXRhLndpZHRoO1xyXG4gICAgLy8gICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihwaXhlbElkeC9pbWdEYXRhLndpZHRoKTtcclxuXHJcbiAgICAvLyAgICAgICAgIG1hdFt5XVt4XSA9IHBpeGVsQ29sb3JcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIG1hdDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBMb2FkIGZhY2UgbW9kZWxzIHByZWRpY3Rpb25zIGJlZm9yZSBkcmF3aW5nIHdoaWNoIGhhcHBlbnMgaW4gdGhlIGRldGVjdEZhY2UgZnVuY3Rpb25cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBzbyB0aGF0IHdlIGRvbid0IGVycm9yIG91dCBiZWZvcmUgb3V0IHZpZGVvIGxvYWRzIHVwXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldGVjdEZhY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMudmlkZW8sIDAsIDAsIHRoaXMuRElNX3dpZHRoLCB0aGlzLkRJTV9oZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZhY2UpXHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvZ2ljIGZvciBlcnJvciBoYW5kbGluZyB3aGVuIGZhY2UgaXMgdG9vIGZhciBvciB0b28gY2xvc2VcclxuICAgICAgICBpZiAodGhpcy5mYWNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmFjZS5ib3VuZGluZ0JveC5ib3R0b21SaWdodFswXSAtIHRoaXMuZmFjZS5ib3VuZGluZ0JveC50b3BMZWZ0WzBdIC0gNDAgPCAxMDAgfHwgdGhpcy5mYWNlLmJvdW5kaW5nQm94LmJvdHRvbVJpZ2h0WzFdIC0gdGhpcy5mYWNlLmJvdW5kaW5nQm94LnRvcExlZnRbMV0gKyAxMTAgPCAxNzUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IEJyaW5nIHlvdXIgZmFjZSBjbG9zZXIgYW5kIGtlZXAgaXQgc3RyYWlnaHRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5mYWNlLmJvdW5kaW5nQm94LmJvdHRvbVJpZ2h0WzBdIC0gdGhpcy5mYWNlLmJvdW5kaW5nQm94LnRvcExlZnRbMF0gLSA0MCA+IDMwMCB8fCB0aGlzLmZhY2UuYm91bmRpbmdCb3guYm90dG9tUmlnaHRbMV0gLSB0aGlzLmZhY2UuYm91bmRpbmdCb3gudG9wTGVmdFsxXSArIDExMCA+IDM3NSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogQmFjayB1cCBhIGJpdCBhbmQga2VlcCB5b3VyIGhlYWQgc3RyYWlnaHRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIFdoZW4gZmlsdGVycyBhcmUgY2xpY2tlZCwgdGhleSBhcmUgcmV2ZWFsZWQgaGVyZVxyXG5cclxuICAgICAgICAvLyBNeSBhdHRlbXB0IHRvIGRpc3RvcnQgdGhlIGZhY2VcclxuICAgICAgICAvLyBjb25zdCBzYWRGYWNlID0gdHJ1ZVxyXG4gICAgICAgIC8vIGlmIChzYWRGYWNlICYmIHRoaXMuZmFjZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mYWNlLmFubm90YXRpb25zLmxpcHNMb3dlck91dGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBJIG1hbmlwdWxhdGVkIHRoZSBmYWNlIG9iamVjdCBmcm9tIHRoZSBBUEkgYnV0IGl0IGRvZXNuJ3QgY29ycmVsYXRlIHRvIHRoZSB2aWRlbyBvciBjYW52YXNcclxuICAgICAgICAvLyAgICAgICAgIC8vIEluc3RlYWQgb2YganVzdCBzdWJ0cmFjdGluZyB0d28gcG9pbnRzLCBJIHByb2JhYmx5IG5lZWQgdG8gZG8gc29tZSBtYXRoIHRvIGZpZ3VyZSBvdXRcclxuICAgICAgICAvLyAgICAgICAgIC8vIGhvdyB0byBkaXN0b3J0IGEgc2VjdGlvbiBvZiB0aGUgZmFjZVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5mYWNlLmFubm90YXRpb25zLmxpcHNMb3dlck91dGVyW2ldWzBdIC09IDUwO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5mYWNlLmFubm90YXRpb25zLmxpcHNMb3dlck91dGVyW2ldWzFdIC09IDUwO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gSSBjb3VsZCBkbyBvbmUgb2YgdHdvIHRoaW5nczpcclxuICAgICAgICAvLyAgICAgICAgIC8vIE1hbmlwdWxhdGUgdGhlIHZpZGVvIGJlZm9yZSBJIGRyYXcgdGhlIGN0eFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gb3IgbWFuaXB1bGF0ZSB0aGUgY3R4IGFmdGVyIEkgZHJldyBpdFxyXG5cclxuICAgICAgICAvLyAgICAgICAgIC8vIE1ldGhvZCAyIGF0dGVtcHRcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnZpZGVvLCAwLCAwLCB0aGlzLkRJTV93aWR0aCwgdGhpcy5ESU1faGVpZ2h0KTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGltZ0RhdGEgPSB0aGlzLmN0eC5nZXRJbWFnZURhdGEoMCwwLHRoaXMuRElNX3dpZHRoLCB0aGlzLkRJTV9oZWlnaHQpXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpbWdEYXRhKVxyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbWF0ID0gdGhpcy5nZXRQaXhlbE1hdHJpeChpbWdEYXRhKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG1hdClcclxuICAgICAgICAvLyAgICAgICAgIC8vIENvb2wsIG5vdyBJIGNhbiBtYW5pcHVsYXRlIHRoZSBjdHggZGF0YSBwb2ludHMgYW5kIGRyYXcgaXQgYWdhaW5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmFjZU1hc2tEb3RzID0gdHJ1ZVxyXG4gICAgICAgIGlmIChmYWNlTWFza0RvdHMgJiYgdGhpcy5mYWNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gTWFraW5nIGJsdWUgbWFzayBhcm91bmQgZmFjZVxyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDE1MCwgMjU1LCAwLjUpJztcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydHB0ID0gdGhpcy5mYWNlLmFubm90YXRpb25zLnNpbGhvdWV0dGVbMF07XHJcbiAgICAgICAgICAgIHN0YXJ0cHQgPSB0aGlzLnNjYWxlQ29vcmQoc3RhcnRwdCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHB0IG9mIHRoaXMuZmFjZS5hbm5vdGF0aW9ucy5zaWxob3VldHRlKSB7XHJcbiAgICAgICAgICAgICAgICBwdCA9IHRoaXMuc2NhbGVDb29yZChwdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oLi4ucHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyB0byBjbG9zZSB0aGUgc2hhcGVcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKC4uLnN0YXJ0cHQpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAxNTAsIDI1NSwgMC4zKSc7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBNYWtpbmcgZmFjZSBkb3RzIGZvciBlYWNoIGZhY2lhbCBmZWF0dXJlXHJcbiAgICAgICAgICAgIGZvciAobGV0IHB0IG9mIHRoaXMuZmFjZS5zY2FsZWRNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgcHQgPSB0aGlzLnNjYWxlQ29vcmQocHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBwdFswXTtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gcHRbMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgMC41LCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsInZpZGVvIiwibW9kZSIsIm1vZGVsIiwiZmFjZSIsIkRJTV93aWR0aCIsIkRJTV9oZWlnaHQiLCJzZXR1cENhbWVyYSIsImxvYWRGYWNlTW9kZWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlIiwiYmluZCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsIndpZHRoIiwiaGVpZ2h0IiwiYXVkaW8iLCJ0aGVuIiwic3RyZWFtIiwic3JjT2JqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZhY2VMYW5kbWFya3NEZXRlY3Rpb24iLCJsb2FkIiwiU3VwcG9ydGVkUGFja2FnZXMiLCJtZWRpYXBpcGVGYWNlbWVzaCIsImRldGVjdEZhY2UiLCJmYWNlUHJlZGljdGlvbnMiLCJlc3RpbWF0ZUZhY2VzIiwiaW5wdXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsInNjYWxlQ29vcmQiLCJwdCIsIngiLCJ5IiwieiIsImRyYXdJbWFnZSIsImJvdW5kaW5nQm94IiwiYm90dG9tUmlnaHQiLCJ0b3BMZWZ0IiwiZmFjZU1hc2tEb3RzIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJzdGFydHB0IiwiYW5ub3RhdGlvbnMiLCJzaWxob3VldHRlIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZSIsInNjYWxlZE1lc2giLCJhcmMiLCJNYXRoIiwiUEkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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