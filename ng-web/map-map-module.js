(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./node_modules/angular-baidu-maps/esm5/abm.js":
/*!*****************************************************!*\
  !*** ./node_modules/angular-baidu-maps/esm5/abm.js ***!
  \*****************************************************/
/*! exports provided: AbmConfig, AbmComponent, AbmPanoramaComponent, AbmModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbmConfig", function() { return AbmConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbmComponent", function() { return AbmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbmPanoramaComponent", function() { return AbmPanoramaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbmModule", function() { return AbmModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AbmConfig = /** @class */ (function () {
    function AbmConfig() {
    }
    return AbmConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LoaderService = /** @class */ (function () {
    function LoaderService(cog) {
        this._cog = Object.assign(/** @type {?} */ ({
            apiProtocol: 'auto',
            apiVersion: '2.0',
            apiCallback: 'angularBaiduMapsLoader',
            apiHostAndPath: 'api.map.baidu.com/api',
        }), cog);
    }
    /**
     * @return {?}
     */
    LoaderService.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var /** @type {?} */ script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = this._getSrc();
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            (/** @type {?} */ (window))[_this._cog.apiCallback] = function () {
                resolve();
            };
            script.onerror = function (error) {
                reject(error);
            };
        });
        document.body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    /**
     * @return {?}
     */
    LoaderService.prototype._getSrc = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ protocol;
        switch (this._cog.apiProtocol) {
            case 'http':
                protocol = 'http:';
                break;
            case 'https':
                protocol = 'https:';
                break;
            default:
                protocol = '';
                break;
        }
        var /** @type {?} */ queryParams = {
            v: this._cog.apiVersion,
            ak: this._cog.apiKey,
            callback: this._cog.apiCallback,
        };
        var /** @type {?} */ params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            return (!Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0));
        })
            .map(function (k) {
            var /** @type {?} */ i = queryParams[k];
            if (Array.isArray(i))
                return { key: k, value: i.join(',') };
            return { key: k, value: i };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + this._cog.apiHostAndPath + "?" + params;
    };
    LoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LoaderService.ctorParameters = function () { return [
        { type: AbmConfig, },
    ]; };
    return LoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AbmComponent = /** @class */ (function () {
    function AbmComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.map = null;
    }
    /**
     * @return {?}
     */
    AbmComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbmComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    /**
     * @return {?}
     */
    AbmComponent.prototype._initMap = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.map)
            return;
        this.loader
            .load()
            .then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new BMap.Map(_this.el.nativeElement, _this.options);
                }
                catch (/** @type {?} */ ex) {
                    console.warn('地图初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        })
            .catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    /**
     * @return {?}
     */
    AbmComponent.prototype._updateOptions = /**
     * @return {?}
     */
    function () {
        this.options = Object.assign({}, this.COG.mapOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    /**
     * @return {?}
     */
    AbmComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.map) {
            this.map.clearOverlays();
            this.map.clearHotspots();
        }
    };
    /**
     * @return {?}
     */
    AbmComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    AbmComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'abm-map',
                    template: "",
                    styles: [
                        "\n        .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n    ",
                    ],
                    host: {
                        '[class.angular-baidu-maps-container]': 'true',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    AbmComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: AbmConfig, },
        { type: LoaderService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    AbmComponent.propDecorators = {
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AbmComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AbmPanoramaComponent = /** @class */ (function () {
    function AbmPanoramaComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.map = null;
    }
    /**
     * @return {?}
     */
    AbmPanoramaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._initMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbmPanoramaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    /**
     * @return {?}
     */
    AbmPanoramaComponent.prototype._initMap = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.map)
            return;
        this.loader
            .load()
            .then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new BMap.Panorama(_this.el.nativeElement, _this.options);
                }
                catch (/** @type {?} */ ex) {
                    console.warn('全景初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        })
            .catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    /**
     * @return {?}
     */
    AbmPanoramaComponent.prototype._updateOptions = /**
     * @return {?}
     */
    function () {
        this.options = Object.assign({}, this.COG.panoramaOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    /**
     * @return {?}
     */
    AbmPanoramaComponent.prototype.destroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    AbmPanoramaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    AbmPanoramaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'abm-panorama',
                    template: "",
                    styles: [
                        "\n    .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n  ",
                    ],
                    host: {
                        '[class.angular-baidu-maps-container]': 'true',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    AbmPanoramaComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: AbmConfig, },
        { type: LoaderService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    AbmPanoramaComponent.propDecorators = {
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ready": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AbmPanoramaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AbmModule = /** @class */ (function () {
    function AbmModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    AbmModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: AbmModule,
            providers: [
                { provide: AbmConfig, useValue: config }
            ]
        };
    };
    AbmModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    providers: [LoaderService],
                    declarations: [AbmComponent, AbmPanoramaComponent],
                    exports: [AbmComponent, AbmPanoramaComponent]
                },] },
    ];
    return AbmModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=abm.js.map


/***/ }),

/***/ "./src/app/routes/map/map-demo/map-demo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/routes/map/map-demo/map-demo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapdemo\">\n  <div>\n    <p>牧场名称：{{data?.farmName}}</p>\n    <!-- <p>牧场围栏范围预览</p> -->\n    <p>暂无牧场围栏范围，请绘制</p>\n    <button nz-button nzType=\"primary\" (click)=\"save()\">确认范围</button>\n    <button nz-button nzType=\"primary\" (click)=\"update()\">编辑范围</button>\n    <button nz-button nzType=\"primary\" (click)=\"clear()\">重新绘制</button>\n  </div>\n  <div class=\"ponit\">\n    <div id=\"scopeMap\"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/routes/map/map-demo/map-demo.component.less":
/*!*************************************************************!*\
  !*** ./src/app/routes/map/map-demo/map-demo.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapdemo {\n  padding: 20px;\n}\n.ponit {\n  min-height: 800px;\n}\n#scopeMap {\n  height: 600px;\n}\n"

/***/ }),

/***/ "./src/app/routes/map/map-demo/map-demo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/map/map-demo/map-demo.component.ts ***!
  \***********************************************************/
/*! exports provided: MapDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDemoComponent", function() { return MapDemoComponent; });
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

var MapDemoComponent = /** @class */ (function () {
    function MapDemoComponent() {
        this.overlays = [];
        this.PolygonData = [
            { lng: 116.401503, lat: 39.920147 },
            { lng: 116.407432, lat: 39.918791 },
            { lng: 116.405024, lat: 39.915055 },
            { lng: 116.399922, lat: 39.915221 },
            { lng: 116.401503, lat: 39.920147 }
        ];
        this.isPolygon = false;
        this.isPolygonFisrt = false;
        this.styleOptions = {
            // tslint:disable-next-line: comment-format
            strokeColor: '#2E8B57',
            // tslint:disable-next-line: comment-format
            fillColor: '#388E8E',
            // tslint:disable-next-line: comment-format
            strokeWeight: 2,
            strokeOpacity: 0.8,
            fillOpacity: 0.3,
            strokeStyle: 'solid' // 边线的样式，solid或dashed。
        };
    }
    MapDemoComponent.prototype.ngOnInit = function () {
        this.map = new BMap.Map('scopeMap');
        this.start();
    };
    MapDemoComponent.prototype.start = function () {
        var that = this;
        var poi = new BMap.Point(116.404, 39.915);
        that.map.centerAndZoom(poi, 16); // 设置中心点坐标和地图级别
        that.map.enableScrollWheelZoom(); // 启用鼠标滚动对地图放大缩小
        if (that.PolygonData.length) {
            var ponits = [];
            // this.isPolygonFisrt = true;
            this.PolygonData.forEach(function (element) {
                ponits.push(new BMap.Point(element.lng, element.lat));
            });
            that.map.clearOverlays();
            that.Polygon = new BMap.Polygon(ponits, this.styleOptions); //创建多边
            that.map.addOverlay(this.Polygon); //创建多边
        }
        // 回调获得覆盖物信息
        var overlaycomplete = function (e) {
            that.overlaycomplete = e;
            // 将多边形保存到数组
            that.overlays.push(e.overlay);
            // 开启编辑模式
            e.overlay.enableEditing();
        };
        // 实例化鼠标绘制工具
        that.drawingManager = new BMapLib.DrawingManager(this.map, {
            isOpen: false,
            enableDrawingTool: true,
            drawingMode: BMAP_DRAWING_POLYGON,
            drawingToolOptions: {
                anchor: BMAP_ANCHOR_TOP_RIGHT,
                offset: new BMap.Size(5, 5),
                drawingModes: [
                    BMAP_DRAWING_POLYGON,
                ]
            },
            polygonOptions: that.styleOptions,
        });
        // 添加鼠标绘制工具监听事件，用于获取绘制结果
        that.drawingManager.addEventListener('overlaycomplete', overlaycomplete);
    };
    //保存地图
    MapDemoComponent.prototype.save = function () {
        var _this = this;
        var map = this.map;
        var overlays = this.overlays; //获取存放的多边形数组
        var ponits = [];
        if (this.overlays.length) {
            var path = overlays[0].getPath(); //获取第一个多边形
            for (var i = 0; i < path.length; i++) {
                // console.log("坐标为：lng:" + path[i].lng + " lat:" + path[i].lat);
                ponits.push(new BMap.Point(path[i].lng, path[i].lat));
                // 保存数据
                this.PolygonData.push({ lng: path[i].lng, lat: path[i].lat });
            }
            this.Polygon = new BMap.Polygon(ponits, this.styleOptions); //创建多边
            map.addOverlay(this.Polygon); //创建多边
            this.rest();
        }
        if (this.isPolygon) {
            this.PolygonData.length = 0;
            var ponits = [];
            this.Polygon.ia.forEach(function (element) {
                ponits.push(new BMap.Point(element.lng, element.lat));
                // 保存数据
                _this.PolygonData.push({ lng: element.lng, lat: element.lat });
            });
            this.map.clearOverlays();
            this.Polygon = new BMap.Polygon(ponits, this.styleOptions); //创建多边
            map.addOverlay(this.Polygon); //创建多边
            console.log(this.PolygonData);
        }
    };
    /**编辑范围 */
    MapDemoComponent.prototype.update = function () {
        this.Polygon.enableEditing();
        this.isPolygon = true;
    };
    /**清除未保存前的绘制 */
    MapDemoComponent.prototype.rest = function () {
        for (var i = 0; i < this.overlays.length; i++) {
            this.map.removeOverlay(this.overlays[i]);
        }
        this.overlays.length = 0;
    };
    /** 重新绘制*/
    MapDemoComponent.prototype.clear = function () {
        this.PolygonData.length = 0;
        this.map.clearOverlays();
    };
    MapDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-demo',
            template: __webpack_require__(/*! ./map-demo.component.html */ "./src/app/routes/map/map-demo/map-demo.component.html"),
            styles: [__webpack_require__(/*! ./map-demo.component.less */ "./src/app/routes/map/map-demo/map-demo.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MapDemoComponent);
    return MapDemoComponent;
}());



/***/ }),

/***/ "./src/app/routes/map/map-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/map/map-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function() { return MapRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marker_marker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marker/marker.component */ "./src/app/routes/map/marker/marker.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/routes/map/start/start.component.ts");
/* harmony import */ var _map_demo_map_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-demo/map-demo.component */ "./src/app/routes/map/map-demo/map-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'marker', pathMatch: 'full' },
    {
        path: 'marker', component: _marker_marker_component__WEBPACK_IMPORTED_MODULE_2__["MarkerComponent"]
    },
    {
        path: 'start', component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"]
    },
    {
        path: 'demo', component: _map_demo_map_demo_component__WEBPACK_IMPORTED_MODULE_4__["MapDemoComponent"]
    }
];
var MapRoutingModule = /** @class */ (function () {
    function MapRoutingModule() {
    }
    MapRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MapRoutingModule);
    return MapRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/map/map.module.ts":
/*!******************************************!*\
  !*** ./src/app/routes/map/map.module.ts ***!
  \******************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marker_marker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marker/marker.component */ "./src/app/routes/map/marker/marker.component.ts");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/routes/map/map-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start/start.component */ "./src/app/routes/map/start/start.component.ts");
/* harmony import */ var angular_baidu_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-baidu-maps */ "./node_modules/angular-baidu-maps/esm5/abm.js");
/* harmony import */ var _map_demo_map_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-demo/map-demo.component */ "./src/app/routes/map/map-demo/map-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _map_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapRoutingModule"],
                angular_baidu_maps__WEBPACK_IMPORTED_MODULE_5__["AbmModule"].forRoot({
                    apiKey: 'D7f130ce4be999b80a56cfd12ab06a7a'
                })
            ],
            declarations: [
                _marker_marker_component__WEBPACK_IMPORTED_MODULE_1__["MarkerComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"],
                _map_demo_map_demo_component__WEBPACK_IMPORTED_MODULE_6__["MapDemoComponent"]
            ]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/routes/map/marker/marker.component.css":
/*!********************************************************!*\
  !*** ./src/app/routes/map/marker/marker.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/map/marker/marker.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/map/marker/marker.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<abm-map #map [options]=\"options\" (ready)=\"onReady($event)\" [ngStyle]=\"{'height': resize}\"></abm-map>"

/***/ }),

/***/ "./src/app/routes/map/marker/marker.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/map/marker/marker.component.ts ***!
  \*******************************************************/
/*! exports provided: MarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerComponent", function() { return MarkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_baidu_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-baidu-maps */ "./node_modules/angular-baidu-maps/esm5/abm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerComponent = /** @class */ (function () {
    function MarkerComponent() {
        this.resize = (document.body.clientHeight - 181) + 'px';
        this.options = {};
        this.status = '';
        this.points = [
            { 'lng': 121.388495, 'lat': 31.171609, 'type': 1 },
            { 'lng': 121.459785, 'lat': 31.173834, 'type': 2 },
            { 'lng': 121.423853, 'lat': 31.167036, 'type': 3 },
            { 'lng': 121.426584, 'lat': 31.18335, 'type': 4 },
            { 'lng': 121.409192, 'lat': 31.173339, 'type': 1 },
            { 'lng': 121.436788, 'lat': 31.167901, 'type': 4 },
            { 'lng': 121.404737, 'lat': 31.161969, 'type': 4 },
            { 'lng': 121.389358, 'lat': 31.182855, 'type': 2 }
        ];
    }
    MarkerComponent.prototype.ngOnInit = function () {
    };
    MarkerComponent.prototype.onReady = function (map) {
        var _this = this;
        this._map = map;
        map.centerAndZoom(new BMap.Point(121.409992, 31.178243), 15);
        map.setCurrentCity('上海');
        map.enableScrollWheelZoom(true);
        this.status = '加载完成';
        // 添加监听事件
        map.addEventListener('tilesloaded', function () {
            _this.status = '地图加载完毕';
        });
        this.addMarker(this.points);
        map.addEventListener('click', this._click.bind(this));
        map.setMapStyle({
            styleJson: [
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#031628'
                    }
                },
                {
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000102'
                    }
                },
                {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#0b3d51'
                    }
                },
                {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#08304b'
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                        'lightness': -70
                    }
                },
                {
                    'featureType': 'building',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#857f7f'
                    }
                },
                {
                    'featureType': 'all',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#022338'
                    }
                },
                {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#062032'
                    }
                },
                {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#465b6c'
                    }
                },
                {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#022338'
                    }
                },
                {
                    'featureType': 'label',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#022338',
                        'visibility': 'off'
                    }
                }
            ]
        });
    };
    MarkerComponent.prototype.addMarker = function (points) {
        var _this = this;
        var _loop_1 = function (i, pointsLen) {
            var point = new BMap.Point(points[i].lng, points[i].lat); // 将标注点转化成地图上的点
            var myIcon = '';
            if (points[i].type === 1) {
                myIcon = new BMap.Icon('https://t1.picb.cc/uploads/2018/09/27/JhHxka.png', new BMap.Size(40, 45));
            }
            if (points[i].type === 2) {
                myIcon = new BMap.Icon('https://t1.picb.cc/uploads/2018/09/27/JhHTru.png', new BMap.Size(40, 45));
            }
            if (points[i].type === 3) {
                myIcon = new BMap.Icon('https://t1.picb.cc/uploads/2018/09/27/JhH90D.png', new BMap.Size(40, 45));
            }
            if (points[i].type === 4) {
                myIcon = new BMap.Icon('https://t1.picb.cc/uploads/2018/09/27/JhHLov.png', new BMap.Size(40, 45));
            }
            var marker = new BMap.Marker(point, { icon: myIcon }); // 将点转化成标注点
            this_1._map.addOverlay(marker); // 将标注点添加到地图上
            // 添加监听事件
            (function () {
                var thePoint = points[i];
                marker.addEventListener('onmouseover', function () {
                    _this.infoWindow(this, thePoint);
                });
            })();
        };
        var this_1 = this;
        // 循环建立标注点
        for (var i = 0, pointsLen = points.length; i < pointsLen; i++) {
            _loop_1(i, pointsLen);
        }
    };
    MarkerComponent.prototype.infoWindow = function (thisMarker, point) {
        // 获取点的信息
        var sContent = '<div style="width:690px;height:400px;font-size:12px;">'
            + '<h2 style="text-align:center">点位详细信息</h2>'
            + '<div style="width:200px;height:200px;margin:30px auto 0 auto">'
            + '<img src="https://avatars3.githubusercontent.com/u/21211456?s=460&v=4" style="width:100%;height:100%">'
            + '</div>'
            + '<div  style="height:266px;display:flex;justify-content: center;">'
            + '<div style="height:400px;width:158px;padding-top:42px">'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">作者</a>'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">纬度</a>'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">经度</a>'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">系统</a>'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#1f871f">位置</a>'
            + '</div>'
            + '<div style="height:400px;width:158px;padding-top:42px">'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + '星河' + '</a>'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + point.lat + '</a>'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + point.lng + '</a>'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + '视频银行后台管理系统' + '</a>'
            + '<a style="display:flex;flex-direction:column;height:30px;align-items:center;font-weight:bolder;line-height:30px;border:1px solid #666666;color:#777777">' + '中国·上海' + '</a>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>';
        var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
        thisMarker.openInfoWindow(infoWindow); // 图片加载完后重绘infoWindow
    };
    MarkerComponent.prototype._click = function (e) {
        this.status = e.point.lng + ", " + e.point.lat + ", " + +new Date();
    };
    MarkerComponent.prototype.ngOnDestroy = function () {
        this._map.removeEventListener('click', this._click.bind(this));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", angular_baidu_maps__WEBPACK_IMPORTED_MODULE_1__["AbmComponent"])
    ], MarkerComponent.prototype, "mapComp", void 0);
    MarkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marker',
            template: __webpack_require__(/*! ./marker.component.html */ "./src/app/routes/map/marker/marker.component.html"),
            styles: [__webpack_require__(/*! ./marker.component.css */ "./src/app/routes/map/marker/marker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarkerComponent);
    return MarkerComponent;
}());



/***/ }),

/***/ "./src/app/routes/map/start/start.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/map/start/start.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<abm-map #map [options]=\"options\" (ready)=\"onReady($event)\" [ngStyle]=\"{'height': resize}\"></abm-map>"

/***/ }),

/***/ "./src/app/routes/map/start/start.component.less":
/*!*******************************************************!*\
  !*** ./src/app/routes/map/start/start.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/routes/map/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/map/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_baidu_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-baidu-maps */ "./node_modules/angular-baidu-maps/esm5/abm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartComponent = /** @class */ (function () {
    function StartComponent() {
        this.resize = (document.body.clientHeight - 181) + 'px';
        this.options = {};
        this.status = '';
    }
    StartComponent.prototype.onReady = function (map) {
        var _this = this;
        this._map = map;
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity('北京');
        map.enableScrollWheelZoom(true);
        this.status = '加载完成';
        // 添加监听事件
        map.addEventListener('tilesloaded', function () {
            _this.status = '地图加载完毕';
        });
        map.addEventListener('click', this._click.bind(this));
    };
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent.prototype._click = function (e) {
        this.status = e.point.lng + ", " + e.point.lat + ", " + +new Date();
    };
    // 卫星
    StartComponent.prototype.onReadySatellite = function (map) {
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.setMapType(BMAP_SATELLITE_MAP);
        this.mapSatellite = map;
    };
    StartComponent.prototype.ngOnDestroy = function () {
        this._map.removeEventListener('click', this._click.bind(this));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", angular_baidu_maps__WEBPACK_IMPORTED_MODULE_1__["AbmComponent"])
    ], StartComponent.prototype, "mapComp", void 0);
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/routes/map/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.less */ "./src/app/routes/map/start/start.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map