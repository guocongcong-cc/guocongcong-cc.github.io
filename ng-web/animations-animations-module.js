(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animations-animations-module"],{

/***/ "./src/app/routes/animations/animation/about/about.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/routes/animations/animation/about/about.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/animations/animation/about/about.component.html":
/*!************************************************************************!*\
  !*** ./src/app/routes/animations/animation/about/about.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 18px;\">\n  Angular's animations library makes it easy to define and apply animation effects such as page and list transitions.\n</p>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/about/about.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/routes/animations/animation/about/about.component.ts ***!
  \**********************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/routes/animations/animation/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/routes/animations/animation/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/animation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/routes/animations/animation/animation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animations\">\n  <h1>Animation</h1>\n  Toggle All Animations <input type=\"checkbox\" [checked]=\"!animationsDisabled\" (click)=\"toggleAnimations()\" />\n  <nav>\n    <a id=\"home\" routerLink=\"./home\" routerLinkActive=\"active\">Home</a>\n    <a id=\"about\" routerLink=\"./about\" routerLinkActive=\"active\">About</a>\n    <a id=\"open-close\" routerLink=\"./open\" routerLinkActive=\"active\">Open/Close</a>\n    <a id=\"status\" routerLink=\"./status\" routerLinkActive=\"active\">Status Slider</a>\n    <a id=\"toggle\" routerLink=\"./toggle\" routerLinkActive=\"active\">Toggle Animations</a>\n    <a id=\"enter-leave\" routerLink=\"./enter\" routerLinkActive=\"active\">Enter/Leave</a>\n    <a id=\"auto\" routerLink=\"./auto\" routerLinkActive=\"active\">Auto Calculation</a>\n    <a id=\"heroes\" routerLink=\"./filter\" routerLinkActive=\"active\">Filter/Stagger</a>\n    <a id=\"hero-groups\" routerLink=\"./groups\" routerLinkActive=\"active\">Hero Groups</a>\n  </nav>\n  <div class=\"router\" [@routeAnimations]=\"prepareRoute(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/animation.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/routes/animations/animation/animation.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".animations {\n  padding: 40px;\n  font-size: 16px;\n}\n.animations nav {\n  margin-top: 20px;\n}\n.animations a {\n  display: inline-block;\n  color: #1890ff;\n  padding: 8px 12px;\n  margin: 0 10px 0 0;\n  font-size: 16px;\n  border-radius: 3px;\n  border: 1px solid #1890ff;\n  text-decoration: none;\n}\n.animations a:hover {\n  background-color: #1890ff;\n  color: #fff;\n}\n.animations .router {\n  margin-top: 40px;\n}\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/animation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/animations/animation/animation.component.ts ***!
  \********************************************************************/
/*! exports provided: AnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/routes/animations/animation/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimationComponent = /** @class */ (function () {
    function AnimationComponent() {
        this.animationsDisabled = false;
    }
    AnimationComponent.prototype.ngOnInit = function () {
    };
    AnimationComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AnimationComponent.prototype.toggleAnimations = function () {
        this.animationsDisabled = !this.animationsDisabled;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@.disabled'),
        __metadata("design:type", Object)
    ], AnimationComponent.prototype, "animationsDisabled", void 0);
    AnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animation',
            template: __webpack_require__(/*! ./animation.component.html */ "./src/app/routes/animations/animation/animation.component.html"),
            styles: [__webpack_require__(/*! ./animation.component.less */ "./src/app/routes/animations/animation/animation.component.less")],
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AnimationComponent);
    return AnimationComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/animations.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/animations/animation/animations.ts ***!
  \***********************************************************/
/*! exports provided: transAnimation, slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transAnimation", function() { return transAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var transAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}')
]);
// Routable animations
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('HomePage <=> AboutPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%', opacity: 1 }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%', opacity: 0 }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> FilterPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/routes/animations/animation/auto-calu/auto-calu.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/animations/animation/auto-calu/auto-calu.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/animations/animation/auto-calu/auto-calu.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/routes/animations/animation/auto-calu/auto-calu.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 18px;\">\n  auto-calu works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/auto-calu/auto-calu.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/animations/animation/auto-calu/auto-calu.component.ts ***!
  \******************************************************************************/
/*! exports provided: AutoCaluComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCaluComponent", function() { return AutoCaluComponent; });
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

var AutoCaluComponent = /** @class */ (function () {
    function AutoCaluComponent() {
    }
    AutoCaluComponent.prototype.ngOnInit = function () {
    };
    AutoCaluComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-calu',
            template: __webpack_require__(/*! ./auto-calu.component.html */ "./src/app/routes/animations/animation/auto-calu/auto-calu.component.html"),
            styles: [__webpack_require__(/*! ./auto-calu.component.css */ "./src/app/routes/animations/animation/auto-calu/auto-calu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AutoCaluComponent);
    return AutoCaluComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/enter-leave/enter-leave.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/routes/animations/animation/enter-leave/enter-leave.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/animations/animation/enter-leave/enter-leave.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/routes/animations/animation/enter-leave/enter-leave.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;\">\n  <div style=\"background: #ECECEC;padding:30px;\" *ngFor=\"let hero of heroes\" [@flyInOut]=\"'in'\" (click)=\"removeHero(hero.id)\">\n    <nz-card style=\"width:300px;\" [nzBordered]=\"false\" nzTitle=\"Card title\">\n      <span class=\"badge\"> A {{ hero.id }}</span>\n      <span>{{ hero.name }}</span>\n      <p>Touch close</p>\n    </nz-card>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/enter-leave/enter-leave.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/animations/animation/enter-leave/enter-leave.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EnterLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterLeaveComponent", function() { return EnterLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnterLeaveComponent = /** @class */ (function () {
    function EnterLeaveComponent() {
        this.heroes = [
            {
                id: 1,
                name: 'Angular'
            },
            {
                id: 2,
                name: 'JavaScript'
            },
            {
                id: 3,
                name: 'Html'
            },
            {
                id: 4,
                name: 'CSS'
            },
        ];
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EnterLeaveComponent.prototype.ngOnInit = function () {
    };
    EnterLeaveComponent.prototype.removeHero = function (id) {
        this.heroes = this.heroes.filter(function (hero) { return hero.id !== id; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EnterLeaveComponent.prototype, "remove", void 0);
    EnterLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enter-leave',
            template: __webpack_require__(/*! ./enter-leave.component.html */ "./src/app/routes/animations/animation/enter-leave/enter-leave.component.html"),
            styles: [__webpack_require__(/*! ./enter-leave.component.css */ "./src/app/routes/animations/animation/enter-leave/enter-leave.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EnterLeaveComponent);
    return EnterLeaveComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/filter/filter.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/routes/animations/animation/filter/filter.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/animations/animation/filter/filter.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/animations/animation/filter/filter.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"heroes\" [@filterAnimation]=\"heroTotal\">\n  <li *ngFor=\"let hero of heroes\" class=\"hero\">\n    <div class=\"inner\">\n      <span class=\"badge\">{{ hero.id }}</span>\n      <span>{{ hero.name }}</span>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/filter/filter.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/animations/animation/filter/filter.component.ts ***!
  \************************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.animatePage = true;
        this._heroes = [];
        this.heroTotal = -1;
        this.heroes = [
            {
                id: 1,
                name: 'Angular'
            },
            {
                id: 2,
                name: 'JavaScript'
            },
            {
                id: 3,
                name: 'Html'
            },
            {
                id: 4,
                name: 'CSS'
            },
        ];
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.updateCriteria = function (criteria) {
        criteria = criteria ? criteria.trim() : '';
        this._heroes = this.heroes.filter(function (hero) { return hero.name.toLowerCase().includes(criteria.toLowerCase()); });
        var newTotal = this.heroes.length;
        if (this.heroTotal !== newTotal) {
            this.heroTotal = newTotal;
        }
        else if (!criteria) {
            this.heroTotal = -1;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@pageAnimations'),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "animatePage", void 0);
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/routes/animations/animation/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/routes/animations/animation/filter/filter.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('pageAnimations', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.hero, form', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-100px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
                            ])
                        ])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('filterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter, * => 0, * => -1', []),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':increment', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: '0px' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(50, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, width: '*' })),
                            ]),
                        ], { optional: true })
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':decrement', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(50, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: '0px' })),
                            ]),
                        ])
                    ]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/groups/groups.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/routes/animations/animation/groups/groups.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/animations/animation/groups/groups.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/animations/animation/groups/groups.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 18px;\">\n  groups works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/groups/groups.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/animations/animation/groups/groups.component.ts ***!
  \************************************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
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

var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/routes/animations/animation/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/routes/animations/animation/groups/groups.component.css")],
            animations: []
        }),
        __metadata("design:paramtypes", [])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/home/home.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/routes/animations/animation/home/home.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/animations/animation/home/home.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/routes/animations/animation/home/home.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 18px;\">\n  Welcome to Animations in Angular!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/home/home.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/animations/animation/home/home.component.ts ***!
  \********************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/routes/animations/animation/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/routes/animations/animation/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/open-close/open-close.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/animations/animation/open-close/open-close.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav style=\"margin-bottom:20px\">\n  <button nz-button nzType=\"primary\" (click)=\"toggle()\">Toggle Open/Close</button>\n</nav>\n\n<div [@openClose]=\"isOpen ? 'open' : 'closed'\">\n  <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/open-close/open-close.component.less":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/animations/animation/open-close/open-close.component.less ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/animations/animation/open-close/open-close.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/routes/animations/animation/open-close/open-close.component.ts ***!
  \********************************************************************************/
/*! exports provided: OpenCloseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseComponent", function() { return OpenCloseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenCloseComponent = /** @class */ (function () {
    function OpenCloseComponent() {
        this.isOpen = true;
    }
    OpenCloseComponent.prototype.ngOnInit = function () {
    };
    OpenCloseComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    OpenCloseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-close',
            template: __webpack_require__(/*! ./open-close.component.html */ "./src/app/routes/animations/animation/open-close/open-close.component.html"),
            styles: [__webpack_require__(/*! ./open-close.component.less */ "./src/app/routes/animations/animation/open-close/open-close.component.less")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '200px',
                        opacity: 1,
                        backgroundColor: 'yellow'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '100px',
                        opacity: 0.5,
                        backgroundColor: 'green'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open <=> closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '*' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], OpenCloseComponent);
    return OpenCloseComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/status/status.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/animations/animation/status/status.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav style=\"margin-bottom:20px\">\n  <button nz-button nzType=\"primary\" (click)=\"toggle()\">Toggle Open/Close</button>\n</nav>\n\n<div [@slideStatus]=\"status\" class=\"box\">\n  {{ status == 'active' ? 'Active' : 'Inactive' }}\n</div>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/status/status.component.less":
/*!**************************************************************************!*\
  !*** ./src/app/routes/animations/animation/status/status.component.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n.box {\n  width: 300px;\n  border: 5px solid black;\n  display: block;\n  line-height: 300px;\n  text-align: center;\n  font-size: 50px;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/status/status.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/animations/animation/status/status.component.ts ***!
  \************************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
        this.status = 'inactive';
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent.prototype.toggle = function () {
        if (this.status === 'active') {
            this.status = 'inactive';
        }
        else {
            this.status = 'active';
        }
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/routes/animations/animation/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.less */ "./src/app/routes/animations/animation/status/status.component.less")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideStatus', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'blue' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'orange' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'blue', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'red', offset: 0.8 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'orange', offset: 1.0 })
                        ])),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => inactive', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'orange', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'red', offset: 0.2 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'blue', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'blue' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'red' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'orange' })
                        ]))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animation/toggle/toggle.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/routes/animations/animation/toggle/toggle.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/animations/animation/toggle/toggle.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/animations/animation/toggle/toggle.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 18px;\">\n  toggle works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/animations/animation/toggle/toggle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/animations/animation/toggle/toggle.component.ts ***!
  \************************************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
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

var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
    }
    ToggleComponent.prototype.ngOnInit = function () {
    };
    ToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggle',
            template: __webpack_require__(/*! ./toggle.component.html */ "./src/app/routes/animations/animation/toggle/toggle.component.html"),
            styles: [__webpack_require__(/*! ./toggle.component.css */ "./src/app/routes/animations/animation/toggle/toggle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "./src/app/routes/animations/animations-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/animations/animations-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AnimationsRoutingModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsRoutingModules", function() { return AnimationsRoutingModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation/animation.component */ "./src/app/routes/animations/animation/animation.component.ts");
/* harmony import */ var _animation_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation/home/home.component */ "./src/app/routes/animations/animation/home/home.component.ts");
/* harmony import */ var _animation_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation/about/about.component */ "./src/app/routes/animations/animation/about/about.component.ts");
/* harmony import */ var _animation_auto_calu_auto_calu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation/auto-calu/auto-calu.component */ "./src/app/routes/animations/animation/auto-calu/auto-calu.component.ts");
/* harmony import */ var _animation_enter_leave_enter_leave_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation/enter-leave/enter-leave.component */ "./src/app/routes/animations/animation/enter-leave/enter-leave.component.ts");
/* harmony import */ var _animation_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation/filter/filter.component */ "./src/app/routes/animations/animation/filter/filter.component.ts");
/* harmony import */ var _animation_groups_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation/groups/groups.component */ "./src/app/routes/animations/animation/groups/groups.component.ts");
/* harmony import */ var _animation_open_close_open_close_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation/open-close/open-close.component */ "./src/app/routes/animations/animation/open-close/open-close.component.ts");
/* harmony import */ var _animation_status_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animation/status/status.component */ "./src/app/routes/animations/animation/status/status.component.ts");
/* harmony import */ var _animation_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./animation/toggle/toggle.component */ "./src/app/routes/animations/animation/toggle/toggle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'animation', pathMatch: 'full' },
    {
        path: 'animation', component: _animation_animation_component__WEBPACK_IMPORTED_MODULE_2__["AnimationComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _animation_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: 'HomePage' } },
            { path: 'about', component: _animation_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { animation: 'AboutPage' } },
            { path: 'auto', component: _animation_auto_calu_auto_calu_component__WEBPACK_IMPORTED_MODULE_5__["AutoCaluComponent"] },
            { path: 'enter', component: _animation_enter_leave_enter_leave_component__WEBPACK_IMPORTED_MODULE_6__["EnterLeaveComponent"] },
            { path: 'filter', component: _animation_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"], data: { animation: 'FilterPage' } },
            { path: 'groups', component: _animation_groups_groups_component__WEBPACK_IMPORTED_MODULE_8__["GroupsComponent"] },
            { path: 'open', component: _animation_open_close_open_close_component__WEBPACK_IMPORTED_MODULE_9__["OpenCloseComponent"] },
            { path: 'status', component: _animation_status_status_component__WEBPACK_IMPORTED_MODULE_10__["StatusComponent"] },
            { path: 'toggle', component: _animation_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_11__["ToggleComponent"] }
        ]
    },
];
var AnimationsRoutingModules = /** @class */ (function () {
    function AnimationsRoutingModules() {
    }
    AnimationsRoutingModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AnimationsRoutingModules);
    return AnimationsRoutingModules;
}());



/***/ }),

/***/ "./src/app/routes/animations/animations.module.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/animations/animations.module.ts ***!
  \********************************************************/
/*! exports provided: AnimationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsModule", function() { return AnimationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/animation.component */ "./src/app/routes/animations/animation/animation.component.ts");
/* harmony import */ var _animations_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations-routing.module */ "./src/app/routes/animations/animations-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _animation_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation/home/home.component */ "./src/app/routes/animations/animation/home/home.component.ts");
/* harmony import */ var _animation_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation/about/about.component */ "./src/app/routes/animations/animation/about/about.component.ts");
/* harmony import */ var _animation_open_close_open_close_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation/open-close/open-close.component */ "./src/app/routes/animations/animation/open-close/open-close.component.ts");
/* harmony import */ var _animation_status_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation/status/status.component */ "./src/app/routes/animations/animation/status/status.component.ts");
/* harmony import */ var _animation_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation/toggle/toggle.component */ "./src/app/routes/animations/animation/toggle/toggle.component.ts");
/* harmony import */ var _animation_enter_leave_enter_leave_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation/enter-leave/enter-leave.component */ "./src/app/routes/animations/animation/enter-leave/enter-leave.component.ts");
/* harmony import */ var _animation_auto_calu_auto_calu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animation/auto-calu/auto-calu.component */ "./src/app/routes/animations/animation/auto-calu/auto-calu.component.ts");
/* harmony import */ var _animation_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./animation/filter/filter.component */ "./src/app/routes/animations/animation/filter/filter.component.ts");
/* harmony import */ var _animation_groups_groups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./animation/groups/groups.component */ "./src/app/routes/animations/animation/groups/groups.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AnimationsModule = /** @class */ (function () {
    function AnimationsModule() {
    }
    AnimationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _animations_routing_module__WEBPACK_IMPORTED_MODULE_2__["AnimationsRoutingModules"],
            ],
            declarations: [
                _animation_animation_component__WEBPACK_IMPORTED_MODULE_1__["AnimationComponent"],
                _animation_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _animation_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _animation_open_close_open_close_component__WEBPACK_IMPORTED_MODULE_6__["OpenCloseComponent"],
                _animation_status_status_component__WEBPACK_IMPORTED_MODULE_7__["StatusComponent"],
                _animation_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_8__["ToggleComponent"],
                _animation_enter_leave_enter_leave_component__WEBPACK_IMPORTED_MODULE_9__["EnterLeaveComponent"],
                _animation_auto_calu_auto_calu_component__WEBPACK_IMPORTED_MODULE_10__["AutoCaluComponent"],
                _animation_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"],
                _animation_groups_groups_component__WEBPACK_IMPORTED_MODULE_12__["GroupsComponent"]
            ]
        })
    ], AnimationsModule);
    return AnimationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=animations-animations-module.js.map