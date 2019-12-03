(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["experiment-experiment-module"],{

/***/ "./node_modules/seamscroll/build/seamscroll.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/seamscroll/build/seamscroll.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);n.d(e,"init",function(){return i.a})},function(t,e,n){"use strict";var i=n(2),o=function(t){return new i.a(t)};e.a=o},function(t,e,n){"use strict";var i=n(5),o=n(6);n(3)();var r=n(4),s={step:1,hoverStop:!0,direction:1,singleHeight:0,singleWidth:0,waitTime:1e3},a=function(t){this.options=r({},s,t);var e=this.options.dom;if(!e)throw new Error("you must set a dom");if(e.style.position="relative",e.style.overflow="hidden",this.reqFrame=null,this.singleWaitTime=null,this._top=0,this._left=0,this.isHover=!1,e.innerHTML+=e.innerHTML,this.options.direction>1){var n=e.children,i=n[0],o=n.length;this._width=(i.offsetWidth+this._getInt(i,"margin-left")+this._getInt(i,"margin-right"))*o,e.style.width=this._width+"px"}this._move(),this._bindEvent()};a.prototype={_getInt:function(t,e){return parseInt(Object(o.a)(t,e))},_cancle:function(){cancelAnimationFrame(this.reqFrame||"")},_bindEvent:function(){if(this.options.hoverStop){var t=this,e=this.options.dom;Object(i.a)(e,"mouseenter",function(){t.isHover=!0,t.singleWaitTime&&clearTimeout(t.singleWaitTime),t._cancle()}),Object(i.a)(e,"mouseleave",function(){t.isHover=!1,t._move()})}},_move:function(){if(!this.isHover){this._cancle();var t=this,e=this.options.dom;this.reqFrame=requestAnimationFrame(function(){var n=e.offsetHeight/2,i=t.options.direction;1===i?(Math.abs(t._top)>=n&&(t._top=0),t._top-=t.options.step,e.style.top=t._top+"px"):0===i?(t._top>=0&&(t._top=-1*n),t._top+=t.options.step,e.style.top=t._top+"px"):2===i?(Math.abs(t._left)>=t._width/2&&(t._left=0),t._left-=t.options.step,e.style.left=t._left+"px"):3===i&&(t._left>=0&&(t._left=t._width/2*-1),t._left+=t.options.step,e.style.left=t._left+"px"),t._judgeSingle()})}},_judgeSingle:function(){var t=this,e=this.options.singleHeight,n=this.options.singleWidth;this.singleWaitTime&&clearTimeout(this.singleWaitTime),e?Math.abs(this._top)%e==0?this.singleWaitTime=setTimeout(function(){t._move()},this.options.waitTime):this._move():n&&Math.abs(this._left)%n==0?this.singleWaitTime=setTimeout(function(){t._move()},this.options.waitTime):this._move()}},e.a=a},function(t,e){var n=function(){window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}()};t.exports=n},function(t,e){function n(){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var t=void 0,e=void 0,i=void 0,r=void 0,s=void 0,a=void 0,u=1,c=arguments[0]||{},f=!1,l=arguments.length;if("boolean"==typeof c&&(f=c,c=arguments[1]||{},u++),"object"!==(void 0===c?"undefined":o(c))&&"function"!=typeof c&&(c={}),u===l)return c;for(;u<l;u++)if(null!=(e=arguments[u]))for(t in e)i=c[t],r=e[t],s=Array.isArray(r),f&&r&&("object"===(void 0===r?"undefined":o(r))||s)?(s?(s=!1,a=i&&Array.isArray(i)?i:[]):a=i&&"object"===(void 0===i?"undefined":o(i))?i:{},c[t]=n(f,a,r)):r!==undefined&&(c[t]=r);return c}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":i(t)};t.exports=n},function(t,e,n){"use strict";var i=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n};e.a=i},function(t,e,n){"use strict";var i=function(t,e){return(t.currentStyle?t.currentStyle:window.getComputedStyle(t,null))[e]};e.a=i}])});

/***/ }),

/***/ "./src/app/routes/experiment/demo/demo/demo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/routes/experiment/demo/demo/demo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n  <p><a href=\"https://github.com/chenxuan0000/seamless-scroll/blob/master/document/README.md\" target=\"_blank\">CSS左右滚动</a></p>\n  <div class=\"demo2\">\n    <ul class=\"list2 clearfix\" id=\"demo2\">\n      <li class=\"clearfix\" *ngFor=\"let item of data\">\n        <span>{{item.title}}</span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/experiment/demo/demo/demo.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/routes/experiment/demo/demo/demo.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo {\n  padding: 40px;\n  font-size: 16px;\n}\n.demo p {\n  margin-bottom: 10px;\n}\n.demo p a {\n  text-decoration: none;\n}\n.demo2 {\n  width: 100%;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n}\n.list2 li {\n  float: left;\n  height: 100px;\n  margin-right: 20px;\n  text-align: center;\n  font-size: 20px;\n  color: #ccc;\n  line-height: 100px;\n}\n"

/***/ }),

/***/ "./src/app/routes/experiment/demo/demo/demo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/experiment/demo/demo/demo.component.ts ***!
  \***************************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/api/api.service */ "./src/app/core/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent(api) {
        this.api = api;
        this.data = [];
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.seamless = __webpack_require__(/*! seamscroll */ "./node_modules/seamscroll/build/seamscroll.min.js");
        this.list();
    };
    DemoComponent.prototype.list = function () {
        for (var index = 0; index < 5; index++) {
            this.data.push({ title: "2019-04-0" + index + " 12:23 \u8BBE\u5907\u7F16\u53F7XXXXXXXXXXXXXX  \u4F4E\u6E29\u62A5\u8B66 " });
        }
    };
    DemoComponent.prototype.start = function () {
        this.seamless.init({
            dom: document.getElementById('demo2'),
            direction: 2,
        });
    };
    DemoComponent.prototype.ngAfterViewInit = function () {
        this.start();
        this.api.isConsole('e', this.data);
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/routes/experiment/demo/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.less */ "./src/app/routes/experiment/demo/demo/demo.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_core_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/routes/experiment/experiment-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/experiment/experiment-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ExperimentRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentRoutingModules", function() { return ExperimentRoutingModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/routes/experiment/warning/warning.component.ts");
/* harmony import */ var _demo_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/demo/demo.component */ "./src/app/routes/experiment/demo/demo/demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'warining', pathMatch: 'full' },
    { path: 'warining', component: _warning_warning_component__WEBPACK_IMPORTED_MODULE_2__["WarningComponent"] },
    { path: 'demo', component: _demo_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"] }
];
var ExperimentRoutingModules = /** @class */ (function () {
    function ExperimentRoutingModules() {
    }
    ExperimentRoutingModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExperimentRoutingModules);
    return ExperimentRoutingModules;
}());



/***/ }),

/***/ "./src/app/routes/experiment/experiment.module.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/experiment/experiment.module.ts ***!
  \********************************************************/
/*! exports provided: ExperimentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentModule", function() { return ExperimentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/routes/experiment/warning/warning.component.ts");
/* harmony import */ var _experiment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experiment-routing.module */ "./src/app/routes/experiment/experiment-routing.module.ts");
/* harmony import */ var _demo_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/demo/demo.component */ "./src/app/routes/experiment/demo/demo/demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExperimentModule = /** @class */ (function () {
    function ExperimentModule() {
    }
    ExperimentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _experiment_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExperimentRoutingModules"]
            ],
            declarations: [_warning_warning_component__WEBPACK_IMPORTED_MODULE_2__["WarningComponent"], _demo_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]]
        })
    ], ExperimentModule);
    return ExperimentModule;
}());



/***/ }),

/***/ "./src/app/routes/experiment/warning/warning.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/experiment/warning/warning.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"warning\">\n  <div class=\"warining-header\">\n    <div class=\"warining-header-Slogan\">\n      设备监控报警中心(功能未开启)\n    </div>\n    <a [routerLink]=\"['/default/index/info']\">主页</a>\n  </div>\n  <div id=\"main\">\n    <div style=\"display: flex\">\n      <input nz-input placeholder=\"模拟报警条数\" [(ngModel)]=\"value\">\n      <button nz-button nzType=\"primary\" (click)=\"send()\">发送</button>\n    </div>\n    <div class=\"warning-row\">\n      <div class=\"warning-row-item\" *ngIf=\"data.length >= 1\">\n        <div class=\"warning-row-item-header\">\n          <label>{{data[0]?.time}}</label>\n          <p (click)=\"close(0)\">\n            <i nz-icon type=\"close\" theme=\"outline\" style=\"font-size: 20px\"></i>\n          </p>\n        </div>\n        <div class=\"warning-row-item-info\">\n          {{data[0]?.message}}\n        </div>\n      </div>\n      <div class=\"warning-row-item\" *ngIf=\"data.length >= 2\">\n        <div class=\"warning-row-item-header\">\n          <label>{{data[1]?.time}}</label>\n          <p (click)=\"close(1)\">\n            <i nz-icon type=\"close\" theme=\"outline\" style=\"font-size: 20px\"></i>\n          </p>\n        </div>\n        <div class=\"warning-row-item-info\">\n          {{data[1]?.message}}\n        </div>\n      </div>\n    </div>\n    <div class=\"warning-row\">\n      <div class=\"warning-row-item\" *ngIf=\"data.length >= 3\">\n        <div class=\"warning-row-item-header\">\n          <label>{{data[2]?.time}}</label>\n          <p (click)=\"close(2)\">\n            <i nz-icon type=\"close\" theme=\"outline\" style=\"font-size: 20px\"></i>\n          </p>\n        </div>\n        <div class=\"warning-row-item-info\">\n          {{data[2]?.message}}\n        </div>\n      </div>\n      <div class=\"warning-row-item\" *ngIf=\"data.length >= 4\">\n        <div class=\"warning-row-item-header\">\n          <label>{{data[3]?.time}}</label>\n          <p (click)=\"close(3)\">\n            <i nz-icon type=\"close\" theme=\"outline\" style=\"font-size: 20px\"></i>\n          </p>\n        </div>\n        <div class=\"warning-row-item-info\">\n          {{data[3]?.message}}\n        </div>\n      </div>\n      <div class=\"warning-row-item\" *ngIf=\"data.length >= 5\">\n        <div class=\"warning-row-item-header\">\n          <label>{{data[4]?.time}}</label>\n          <p (click)=\"close(4)\">\n            <i nz-icon type=\"close\" theme=\"outline\" style=\"font-size: 20px\"></i>\n          </p>\n        </div>\n        <div class=\"warning-row-item-info\">\n          {{data[4]?.message}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/experiment/warning/warning.component.less":
/*!******************************************************************!*\
  !*** ./src/app/routes/experiment/warning/warning.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#warning {\n  background: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);\n}\n#warning .warining-header {\n  height: 50px;\n  width: 100%;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n  font-size: 20px;\n  letter-spacing: 4px;\n}\n#warning .warining-header a {\n  color: #fff;\n  outline: none;\n  cursor: pointer;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n#warning #main {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n}\n#warning #main .warning-row {\n  display: flex;\n}\n#warning #main .warning-row .warning-row-item {\n  width: 400px;\n  height: 300px;\n  background: rgba(255, 255, 255, 0.1);\n  margin-right: 50px;\n}\n#warning #main .warning-row .warning-row-item .warning-row-item-header {\n  width: 100%;\n  height: 50px;\n  color: #fff;\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n#warning #main .warning-row .warning-row-item .warning-row-item-header p {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  margin: 0 10px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#warning #main .warning-row .warning-row-item .warning-row-item-header p:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n#warning #main .warning-row .warning-row-item .warning-row-item-header label {\n  margin-left: 20px;\n}\n#warning #main .warning-row .warning-row-item-info {\n  color: #fff;\n  padding: 0 20px 20px 20px;\n}\n"

/***/ }),

/***/ "./src/app/routes/experiment/warning/warning.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/experiment/warning/warning.component.ts ***!
  \****************************************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarningComponent = /** @class */ (function () {
    function WarningComponent(notification) {
        this.notification = notification;
        this.data = [];
    }
    WarningComponent.prototype.ngOnInit = function () {
        this.start();
        // this.webSocket();
        // this.connectWs();
    };
    WarningComponent.prototype.send = function () {
        this.ws.send(this.value);
    };
    WarningComponent.prototype.connectWs = function () {
        console.log('开启服务');
        if (this.ws != null) {
            this.ws.close();
        }
        // this.ws = new WebSocket('ws://localhost:9998/echo');
        var url = 'ws://192.168.1.89:1300/ws/smokeWebSocketServer/ec194e2d6a924820a80fa11cf6728d82/824f9d03649347998a2fa42797449850';
        this.ws = new WebSocket(url);
        var that = this;
        this.ws.onopen = function (event) {
            // socket 开启后执行，可以向后端传递信息
            // alert('数据发送中...');
        };
        this.ws.onmessage = function (event) {
            console.log('event', event.data);
            for (var i = 0; i < Number(event.data); i++) {
                if (that.data.length < 5) {
                    that.data.push({
                        time: '2019-1-16 10:09',
                        message: Math.random()
                    });
                }
            }
            console.log('data', that.data);
        };
        this.ws.onerror = function (event) {
            // socket error信息
        };
        this.ws.onclose = function (event) {
            // socket 关闭后执行
            alert('连接已关闭...');
        };
    };
    WarningComponent.prototype.start = function () {
        var warning = document.getElementById('warning');
        var main = document.getElementById('main');
        warning.style.width = window.innerWidth + 'px';
        warning.style.height = window.innerHeight + 'px';
        main.style.height = (window.innerHeight - 50) + 'px';
        warning.style.width = window.innerWidth + 'px';
    };
    WarningComponent.prototype.close = function (num) {
        this.data.splice(num, 1);
    };
    WarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warning',
            template: __webpack_require__(/*! ./warning.component.html */ "./src/app/routes/experiment/warning/warning.component.html"),
            styles: [__webpack_require__(/*! ./warning.component.less */ "./src/app/routes/experiment/warning/warning.component.less")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzNotificationService"]])
    ], WarningComponent);
    return WarningComponent;
}());



/***/ })

}]);
//# sourceMappingURL=experiment-experiment-module.js.map