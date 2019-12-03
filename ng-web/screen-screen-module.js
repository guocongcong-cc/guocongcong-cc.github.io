(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screen-screen-module"],{

/***/ "./src/app/routes/screen/full/full.component.html":
/*!********************************************************!*\
  !*** ./src/app/routes/screen/full/full.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  full works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/screen/full/full.component.less":
/*!********************************************************!*\
  !*** ./src/app/routes/screen/full/full.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/screen/full/full.component.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/screen/full/full.component.ts ***!
  \******************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullComponent = /** @class */ (function () {
    function FullComponent() {
    }
    FullComponent.prototype.ngOnInit = function () {
    };
    FullComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full',
            template: __webpack_require__(/*! ./full.component.html */ "./src/app/routes/screen/full/full.component.html"),
            styles: [__webpack_require__(/*! ./full.component.less */ "./src/app/routes/screen/full/full.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "./src/app/routes/screen/screen-routing.modules.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/screen/screen-routing.modules.ts ***!
  \*********************************************************/
/*! exports provided: ScreenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenRoutingModule", function() { return ScreenRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full/full.component */ "./src/app/routes/screen/full/full.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'full', pathMatch: 'full' },
    { path: 'full', component: _full_full_component__WEBPACK_IMPORTED_MODULE_2__["FullComponent"] }
];
var ScreenRoutingModule = /** @class */ (function () {
    function ScreenRoutingModule() {
    }
    ScreenRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ScreenRoutingModule);
    return ScreenRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/screen/screen.module.ts":
/*!************************************************!*\
  !*** ./src/app/routes/screen/screen.module.ts ***!
  \************************************************/
/*! exports provided: ScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenModule", function() { return ScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _full_full_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full/full.component */ "./src/app/routes/screen/full/full.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _screen_routing_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen-routing.modules */ "./src/app/routes/screen/screen-routing.modules.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ScreenModule = /** @class */ (function () {
    function ScreenModule() {
    }
    ScreenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _screen_routing_modules__WEBPACK_IMPORTED_MODULE_3__["ScreenRoutingModule"]
            ],
            declarations: [
                _full_full_component__WEBPACK_IMPORTED_MODULE_1__["FullComponent"]
            ]
        })
    ], ScreenModule);
    return ScreenModule;
}());



/***/ })

}]);
//# sourceMappingURL=screen-screen-module.js.map