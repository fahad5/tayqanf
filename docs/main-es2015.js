(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponent", function() { return routingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-account/my-account.component */ "./src/app/my-account/my-account.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");






const routes = [
    // redirect to `first-component`
    {
        path: 'home/:id',
        // resolve: {
        //   Student: StudentResolve
        // },
        // data: {
        children: [
            // {path: '**', redirectTo:'browseVacancies', pathMatch: 'full'},
            {
                path: 'myAccount',
                component: _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__["MyAccountComponent"],
            },
        ]
    },
    { path: '**', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponent = [
    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
    _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__["MyAccountComponent"]
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_page_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/app.service */ "./src/app/home-page/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    ngOnInit() {
        console.log('app');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_home_page_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                providers: [_home_page_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-account/my-account.component */ "./src/app/my-account/my-account.component.ts");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera/camera.component */ "./src/app/camera/camera.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__["NgxImageCompressService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__["MyAccountComponent"],
        _camera_camera_component__WEBPACK_IMPORTED_MODULE_6__["CameraComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"], _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__["MyAccountComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__["MyAccountComponent"],
                    _camera_camera_component__WEBPACK_IMPORTED_MODULE_6__["CameraComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["routingComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ],
                providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__["NgxImageCompressService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/camera/camera.component.ts":
/*!********************************************!*\
  !*** ./src/app/camera/camera.component.ts ***!
  \********************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_page_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-page/app.service */ "./src/app/home-page/app.service.ts");



class CameraComponent {
    //     user: User
    //     formData: any = new FormData();
    //     blob: any = new Blob()
    //     id
    //     newUserForm
    //     @ViewChild("video")
    //     public video: ElementRef;
    //     @ViewChild("canvas")
    //     public canvas: ElementRef;
    //     filesToUpload
    //     captures: Array<any>;
    //     constructor(private appService: AppService) {
    //       this.captures = [];
    //     }
    ngOnInit() {
        console.log("camera");
    }
}
CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(); };
CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_home_page_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], decls: 0, vars: 0, template: function CameraComponent_Template(rf, ctx) { }, styles: [".actionBtn[_ngcontent-%COMP%] {\r\n    font-size: 4em;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\nul.links[_ngcontent-%COMP%]{\r\n    padding-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbkJ0biB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbnVsLmxpbmtze1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './camera.component.html',
                styleUrls: ['./camera.component.css'],
                providers: [_home_page_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home-page/app.service.ts":
/*!******************************************!*\
  !*** ./src/app/home-page/app.service.ts ***!
  \******************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

// import { Organization } from '../shared/organization'



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
class AppService {
    constructor(http) {
        this.http = http;
        this.getUser = 'http://localhost:4200/api/login';
    }
    // getOrganizationService(): Observable<HttpResponse<Organization[]>> {
    //   return this.http.get<Organization[]>(
    //     this.orgsUrl, { observe: 'response' });
    // }
    //   getStudentsService(id): Observable<HttpResponse<Student>> {
    //     console.log(id)
    //     const url=`http://localhost:4200/api/student${id}`
    //     return this.http.get<Student>(
    //     url, { observe: 'response' });
    //   }
    cropbackGroundService(formData) {
        const test = {
            image: formData
        };
        this.http.post('https://clippingmagic.com/api/v1/images?csrfToken=1587604308662-d468b1363548a054b65d51f333d3cae9922b35bb ', test)
            .subscribe(files => console.log('files', files));
    }
    getUserService(id) {
        console.log("service");
        const getUser = `http://localhost:4200/api/${id}`;
        return this.http.get(getUser, { observe: 'response' });
    }
    loginService(user) {
        const newUserUrl = 'http://localhost:4200/api/login';
        return this.http.post(newUserUrl, user, httpOptions);
    }
    uplods(formData) {
        console.log(formData);
        this.http.post('http://localhost:4200/api/uploader', formData)
            .subscribe(files => console.log('files', files));
    }
    newUserService(test) {
        const newUserUrl = 'http://localhost:4200/api/registration';
        return this.http.post(newUserUrl, test, httpOptions);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/home-page/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_account_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my-account/resolve.service */ "./src/app/my-account/resolve.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");









const _c0 = ["video"];
const _c1 = ["canvas"];
class HomePageComponent {
    constructor(appService, router, studentResolve) {
        this.appService = appService;
        this.router = router;
        this.studentResolve = studentResolve;
        this.formData = new FormData();
        this.blob = new Blob();
        this.captures = [];
    }
    ngOnInit() {
        this.createLoginForm();
        console.log("home ");
        this.createForm();
    }
    createForm() {
        this.newUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
        });
    }
    createLoginForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
        });
    }
    uploads(blob) {
        const files = this.filesToUpload;
        this.id = `${Math.random()}`;
        console.log('blob', blob);
        this.formData.append('kkk', blob, this.id);
        const uu = this.formData.getAll('kkk');
        this.appService.uplods(this.formData);
        console.log('form data variable :   ', uu[0]);
    }
    login() {
        this.loginUser = this.loginForm.value;
        console.log(this.loginUser);
        this.appService.loginService(this.loginUser)
            .subscribe(res => {
            console.log(res.username);
            //; private router:Router
            this.studentResolve.dataSource.next(res.username);
            console.log(res.username);
            this.router.navigate(['home', res.username, 'myAccount']);
        });
    }
    submit() {
        this.user = this.newUserForm.value;
        this.user.filename = `${this.id}`;
        console.log(this.user);
        this.appService.newUserService(this.user).subscribe(res => {
            console.log(res, 'kkk');
        });
    }
    ngAfterViewInit() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                console.log(stream);
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            });
        }
    }
    capture() {
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
        this.filesToUpload = this.canvas.nativeElement.toDataURL("image/png");
        function b64toBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], { type: 'image/png' });
        }
        var blob = b64toBlob(this.filesToUpload);
        this.uploads(blob);
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_my_account_resolve_service__WEBPACK_IMPORTED_MODULE_4__["StudentResolve"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], viewQuery: function HomePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])], decls: 58, vars: 3, consts: [[1, "navbar", "navbar-default", "navbar-fixed-top"], [1, "form-inline", "my-2", "my-lg-0", 2, "margin-right", "0", 3, "formGroup", "ngSubmit"], [1, "input-group", "flex-nowrap"], ["type", "text", "formControlName", "username", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", "aria-label", "Username", 1, "form-control", 2, "margin-top", "10px"], ["type", "password", "formControlName", "password", "placeholder", "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A", 1, "form-control", 2, "margin-top", "10px"], ["type", "submit", 1, "btn", 2, "width", "4cm", "margin-top", "8px", "margin-left", "5px", "background-color", "#00AB67", "margin-top", "8px", "color", "#ffffff"], ["src", "\\assets\\img\\absher2.PNG", "alt", "...", 2, "width", "100", "height", "110px", "margin-left", "0cm", "margin-top", "10px"], ["src", "\\assets\\img\\ABSHER.PNG", "alt", "...", 2, "width", "100", "height", "110px", "margin-right", "8cm"], [1, "test"], [1, "test1"], [1, "hr"], [1, "card", 2, "width", "40rem", "margin-left", "20cm", "margin-top", "1cm"], [1, "card-header"], [1, "card-body"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], ["id", "app", 2, "margin-right", "0cm"], ["id", "video", "width", "300", "height", "300", "autoplay", ""], ["video", ""], ["id", "canvas", "width", "640", "height", "480"], ["canvas", ""], ["height", "50", 3, "src"], [3, "formGroup", "ngSubmit"], [1, "input-group-prepend"], ["id", "addon-wrapping  ", 1, "input-group-text", 2, "margin-top", "10px"], ["type", "submit", 1, "btn", 2, "width", "4cm", "background-color", "#00AB67", "margin-top", "8px", "color", "#ffffff"], ["id", "snap", 1, "btn", 2, "width", "4cm", "background-color", "#00AB67", "margin-top", "8px", "margin-left", "0cm", "color", "#ffffff", 3, "click"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomePageComponent_Template_form_ngSubmit_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "video", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "canvas", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomePageComponent_Template_form_ngSubmit_41_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_55_listener() { return ctx.capture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u0627\u0644\u062A\u0642\u0637 \u0635\u0648\u0631\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.captures[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newUserForm);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #F0F0F0;\r\n}\r\n#app[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    margin-top: 60px;\r\n}\r\n#video[_ngcontent-%COMP%] {\r\n    background-color: #000000;\r\n}\r\n#canvas[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    padding: 5px;\r\n}\r\n#Accounts[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n    background-color:white;\r\n    text-align: left;\r\n\r\n}\r\n.aa[_ngcontent-%COMP%]{\r\n    color: black;\r\n    padding-bottom: 20px;\r\n}\r\n#dash[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 100%;\r\n    \r\n    text-align: center;\r\n    \r\n    \r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n}\r\n.feather[_ngcontent-%COMP%] {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100; \r\n  padding: 48px 0 0; \r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}\r\n.sidebar-sticky[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: .5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; \r\n}\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n  .sidebar-sticky[_ngcontent-%COMP%] {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n  }\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #333;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\n  margin-right: 4px;\r\n  color: #999;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n}\r\n.sidebar-heading[_ngcontent-%COMP%] {\r\n  font-size: .75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n[role=\"main\"][_ngcontent-%COMP%] {\r\n  padding-top: 133px; \r\n}\r\n@media (min-width: 768px) {\r\n  [role=\"main\"][_ngcontent-%COMP%] {\r\n    padding-top: 48px; \r\n  }\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  padding-right: 4.2rem;\r\n  padding-left: 4rem;\r\n\r\n  font-size: 1rem;\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n}\r\n.navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  padding: .75rem 1rem;\r\n  border-width: 0;\r\n  border-radius: 0;\r\n}\r\n.form-control-dark[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  border-color: rgba(255, 255, 255, .1);\r\n}\r\n.form-control-dark[_ngcontent-%COMP%]:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n}\r\n.bg-dark[_ngcontent-%COMP%] {\r\n    background-color: rgb(46, 200, 97)!important;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]{\r\n    background-color: #008DC3!important;\r\n    border:  #008DC3!important ;\r\n    \r\n  }\r\n.btn-primary[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 8px 16px 0 #008DC3;\r\n      \r\n  }\r\n#Accounts[_ngcontent-%COMP%]{\r\n  width: 15%;\r\n  background-color:white;\r\n  text-align: left;\r\n\r\n}\r\n.aa[_ngcontent-%COMP%]{\r\n  color: black;\r\n  padding-bottom: 20px;\r\n}\r\n.test[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #00AB67;\r\n  \r\n}\r\n.test1[_ngcontent-%COMP%]{\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n\r\n}\r\n#dash[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n  width: 100%;\r\n  \r\n  text-align: center;\r\n  \r\n  \r\n}\r\n.hr[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n  background-color: #00AB67;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\nfont-size: .875rem;\r\n}\r\n.feather[_ngcontent-%COMP%] {\r\nwidth: 16px;\r\nheight: 16px;\r\nvertical-align: text-bottom;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\nposition: fixed;\r\ntop: 0;\r\nbottom: 0;\r\nleft: 0;\r\nz-index: 100; \r\npadding: 48px 0 0; \r\nbox-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}\r\n.sidebar-sticky[_ngcontent-%COMP%] {\r\nposition: relative;\r\ntop: 0;\r\nheight: calc(100vh - 48px);\r\npadding-top: .5rem;\r\noverflow-x: hidden;\r\noverflow-y: auto; \r\n}\r\n#cardh[_ngcontent-%COMP%]{\r\ncolor: #00AB67;\r\n}\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n.sidebar-sticky[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\nfont-weight: 500;\r\ncolor: #333;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\nmargin-right: 4px;\r\ncolor: #999;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\ncolor: #007bff;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\ncolor: inherit;\r\n}\r\n.sidebar-heading[_ngcontent-%COMP%] {\r\nfont-size: .75rem;\r\ntext-transform: uppercase;\r\n}\r\n\r\n[role=\"main\"][_ngcontent-%COMP%] {\r\npadding-top: 133px; \r\n}\r\n@media (min-width: 768px) {\r\n[role=\"main\"][_ngcontent-%COMP%] {\r\n  padding-top: 48px; \r\n}\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\npadding-top: .75rem;\r\npadding-bottom: .75rem;\r\npadding-right: 4.2rem;\r\npadding-left: 4rem;\r\n\r\nfont-size: 1rem;\r\nbox-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n}\r\n.navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\npadding: .75rem 1rem;\r\nborder-width: 0;\r\nborder-radius: 0;\r\n}\r\n.form-control-dark[_ngcontent-%COMP%] {\r\ncolor: #fff;\r\nbackground-color: rgba(255, 255, 255, 0.1);\r\nborder-color: rgba(255, 255, 255, .1);\r\n}\r\n.form-control-dark[_ngcontent-%COMP%]:focus {\r\nborder-color: transparent;\r\nbox-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n}\r\n.bg-dark[_ngcontent-%COMP%] {\r\n  background-color:#00AB67!important;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]{\r\n  background-color: #008DC3!important;\r\n  border:  #008DC3!important ;\r\n  \r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0 8px 16px 0 #008DC3;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxrQkFBa0I7OztBQUd0QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFO0FBRUY7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWSxFQUFFLHNCQUFzQjtFQUNwQyxpQkFBaUIsRUFBRSxxQkFBcUI7RUFDeEMsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFFLDZEQUE2RDtBQUNqRjtBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUU7QUFFRjtFQUNFLGtCQUFrQixFQUFFLDJCQUEyQjtBQUNqRDtBQUVBO0VBQ0U7SUFDRSxpQkFBaUIsRUFBRSwyQkFBMkI7RUFDaEQ7QUFDRjtBQUVBOztFQUVFO0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLHFDQUFxQztBQUN2QztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRDtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0U7SUFDRSxtQ0FBbUM7SUFDbkMsMkJBQTJCOztFQUU3QjtBQUNBO0lBQ0UsZ0NBQWdDOztFQUVsQztBQUVGO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7O0FBRWxCO0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBR0E7O0VBRUUseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UscUNBQXFDOztBQUV2QztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0VBRVgsa0JBQWtCOzs7QUFHcEI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWiwyQkFBMkI7QUFDM0I7QUFFQTs7Q0FFQztBQUVEO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixTQUFTO0FBQ1QsT0FBTztBQUNQLFlBQVksRUFBRSxzQkFBc0I7QUFDcEMsaUJBQWlCLEVBQUUscUJBQXFCO0FBQ3hDLDRDQUE0QztBQUM1QztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLE1BQU07QUFDTiwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixnQkFBZ0IsRUFBRSw2REFBNkQ7QUFDL0U7QUFJQTtBQUNBLGNBQWM7QUFDZDtBQUVBO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1g7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUVBOztBQUVBLGNBQWM7QUFDZDtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUN6QjtBQUVBOztDQUVDO0FBRUQ7QUFDQSxrQkFBa0IsRUFBRSwyQkFBMkI7QUFDL0M7QUFFQTtBQUNBO0VBQ0UsaUJBQWlCLEVBQUUsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFFQTs7Q0FFQztBQUVEO0FBQ0EsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsa0JBQWtCOztBQUVsQixlQUFlO0FBQ2YsNkNBQTZDO0FBQzdDO0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsV0FBVztBQUNYLDBDQUEwQztBQUMxQyxxQ0FBcUM7QUFDckM7QUFFQTtBQUNBLHlCQUF5QjtBQUN6Qiw4Q0FBOEM7QUFDOUM7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjs7QUFFN0I7QUFDQTtFQUNFLGdDQUFnQzs7QUFFbEMiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbn1cclxuI2FwcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuI3ZpZGVvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuI2NhbnZhcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuI0FjY291bnRze1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxufVxyXG5cclxuLmFhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuI2Rhc2h7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbn1cclxuXHJcbi5mZWF0aGVyIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG59XHJcblxyXG4vKlxyXG4gKiBTaWRlYmFyXHJcbiAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xyXG4gIHBhZGRpbmc6IDQ4cHggMCAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXN0aWNreSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbn1cclxuXHJcbkBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XHJcbiAgLnNpZGViYXItc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBDb250ZW50XHJcbiAqL1xyXG5cclxuW3JvbGU9XCJtYWluXCJdIHtcclxuICBwYWRkaW5nLXRvcDogMTMzcHg7IC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgW3JvbGU9XCJtYWluXCJdIHtcclxuICAgIHBhZGRpbmctdG9wOiA0OHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBOYXZiYXJcclxuICovXHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogNC4ycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcclxuXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxufVxyXG5cclxuLm5hdmJhciAuZm9ybS1jb250cm9sIHtcclxuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1kYXJrIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XHJcbn1cclxuLmJnLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCAyMDAsIDk3KSFpbXBvcnRhbnQ7XHJcbn1cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4REMzIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogICMwMDhEQzMhaW1wb3J0YW50IDtcclxuICAgIFxyXG4gIH1cclxuICAuYnRuLXByaW1hcnk6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgIzAwOERDMztcclxuICAgICAgXHJcbiAgfSBcclxuICBcclxuI0FjY291bnRze1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxufVxyXG5cclxuLmFhe1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbi50ZXN0e1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFCNjc7XHJcbiAgXHJcbn1cclxuLnRlc3Qxe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcblxyXG59XHJcbiNkYXNoe1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgXHJcbn1cclxuLmhye1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUI2NztcclxufVxyXG5ib2R5IHtcclxuZm9udC1zaXplOiAuODc1cmVtO1xyXG59XHJcblxyXG4uZmVhdGhlciB7XHJcbndpZHRoOiAxNnB4O1xyXG5oZWlnaHQ6IDE2cHg7XHJcbnZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxufVxyXG5cclxuLypcclxuKiBTaWRlYmFyXHJcbiovXHJcblxyXG4uc2lkZWJhciB7XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxudG9wOiAwO1xyXG5ib3R0b206IDA7XHJcbmxlZnQ6IDA7XHJcbnotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cclxucGFkZGluZzogNDhweCAwIDA7IC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cclxuYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXN0aWNreSB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiAwO1xyXG5oZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxucGFkZGluZy10b3A6IC41cmVtO1xyXG5vdmVyZmxvdy14OiBoaWRkZW47XHJcbm92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbn1cclxuXHJcblxyXG5cclxuI2NhcmRoe1xyXG5jb2xvcjogIzAwQUI2NztcclxufVxyXG5cclxuQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkpIHtcclxuLnNpZGViYXItc3RpY2t5IHtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsge1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5jb2xvcjogIzMzMztcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcclxubWFyZ2luLXJpZ2h0OiA0cHg7XHJcbmNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcclxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbmNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuZm9udC1zaXplOiAuNzVyZW07XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qXHJcbiogQ29udGVudFxyXG4qL1xyXG5cclxuW3JvbGU9XCJtYWluXCJdIHtcclxucGFkZGluZy10b3A6IDEzM3B4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5bcm9sZT1cIm1haW5cIl0ge1xyXG4gIHBhZGRpbmctdG9wOiA0OHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXHJcbn1cclxufVxyXG5cclxuLypcclxuKiBOYXZiYXJcclxuKi9cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG5wYWRkaW5nLXRvcDogLjc1cmVtO1xyXG5wYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG5wYWRkaW5nLXJpZ2h0OiA0LjJyZW07XHJcbnBhZGRpbmctbGVmdDogNHJlbTtcclxuXHJcbmZvbnQtc2l6ZTogMXJlbTtcclxuYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG5wYWRkaW5nOiAuNzVyZW0gMXJlbTtcclxuYm9yZGVyLXdpZHRoOiAwO1xyXG5ib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wtZGFyayB7XHJcbmNvbG9yOiAjZmZmO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbmJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XHJcbmJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbmJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XHJcbn1cclxuLmJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwQUI2NyFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1wcmltYXJ5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhEQzMhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogICMwMDhEQzMhaW1wb3J0YW50IDtcclxuICBcclxufVxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwICMwMDhEQzM7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css'],
                providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]]
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _my_account_resolve_service__WEBPACK_IMPORTED_MODULE_4__["StudentResolve"] }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["video"]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["canvas"]
        }] }); })();


/***/ }),

/***/ "./src/app/my-account/my-account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-account/my-account.component.ts ***!
  \****************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_page_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-page/app.service */ "./src/app/home-page/app.service.ts");
/* harmony import */ var _my_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-account.service */ "./src/app/my-account/my-account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








const _c0 = ["video"];
const _c1 = ["canvas"];
class MyAccountComponent {
    constructor(appService, myAccountService, route, imageCompress) {
        this.appService = appService;
        this.myAccountService = myAccountService;
        this.route = route;
        this.imageCompress = imageCompress;
        this.formData = new FormData();
        this.blob = new Blob();
        this.captures = [];
    }
    ngOnInit() {
        console.log('etst');
        this.appService.getUserService(this.route.snapshot.parent.params.id)
            .subscribe(res => {
            console.log(res);
            this.holder = res.body;
            this.username = this.holder.username;
            this.photo = this.holder.photo;
        });
        console.log(this.route.snapshot.parent.params.id);
    }
    camera() {
        console.log('tes');
        this.myAccountService.openCam(this.route.snapshot.parent.params.id)
            .subscribe(res => {
            console.log('ress', res);
        });
    }
}
MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) { return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_page_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_my_account_service__WEBPACK_IMPORTED_MODULE_2__["MyAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_image_compress__WEBPACK_IMPORTED_MODULE_4__["NgxImageCompressService"])); };
MyAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyAccountComponent, selectors: [["app-my-account"]], viewQuery: function MyAccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_home_page_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], decls: 48, vars: 2, consts: [[1, "navbar", "navbar-default", "navbar-fixed-top"], ["src", "\\assets\\img\\absher2.PNG", "alt", "...", 2, "width", "100", "height", "110px", "margin-left", "8cm", "margin-top", "10px"], [1, "card", 2, "width", "5cm", "height", "3cm", "margin-left", "1cm", "margin-top", "10px"], [1, "card-header", 2, "width", "5cm", "height", "10px", "background-color", "#00AB67"], [1, "card-body"], [2, "margin-right", "100%", "margin-left", "80%"], ["alt", "...", 2, "width", "40px", "height", "40px", "margin-right", "15cm", "margin-right", "0cm", "border-radius", "50%", 3, "src"], [1, "blockquote", "mb-0"], [2, "margin-top", "-50px"], [2, "margin-left", "-10px"], ["src", "\\assets\\img\\ABSHER.PNG", "alt", "...", 2, "width", "100", "height", "110px", "margin-right", "8cm"], [1, "test"], [1, "test1"], [1, "hr"], [1, "card", 2, "width", "28cm", "margin-left", "16cm", "margin-top", "10px"], [1, "card-header"], [2, "margin-left", "20cm"], ["src", "\\assets\\img\\ahwal.PNG", "alt", "...", 2, "width", "100", "height", "110px", "margin-left", "12cm"], [2, "margin-left", "20cm", "margin-top", "1cm"], [1, "btn", 2, "width", "9cm", "margin-left", "9cm", "margin-top", "1cm", "background-color", "#00AB67", "color", "#ffffff", 3, "click"]], template: function MyAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "blockquote", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 12345678 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u0627\u0647\u0644\u0627 \u0628\u0643\u0645 \u0641\u064A \u062E\u062F\u0645\u0629 \u062A\u062C\u062F\u064A\u062F \u0627\u0644\u0627\u062D\u0648\u0627\u0644 \u0639\u0646 \u0628\u0639\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_44_listener() { return ctx.camera(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0627\u0644\u062A\u0642\u0627\u0637 \u0635\u0648\u0631\u0647 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "\\assets\\img\\", ctx.photo, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["#Accounts[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n    background-color:white;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.aa[_ngcontent-%COMP%]{\r\n    color: black;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.test[_ngcontent-%COMP%]{\r\n    \r\n    background-color: #00AB67;\r\n    \r\n}\r\n\r\n.test1[_ngcontent-%COMP%]{\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n\r\n}\r\n\r\n#dash[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 100%;\r\n    \r\n    text-align: center;\r\n    \r\n    \r\n}\r\n\r\n.hr[_ngcontent-%COMP%]{\r\n    margin-top: 0;\r\n    background-color: #00AB67;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n}\r\n\r\n.feather[_ngcontent-%COMP%] {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100; \r\n  padding: 48px 0 0; \r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}\r\n\r\n.sidebar-sticky[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: .5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; \r\n}\r\n\r\n#cardh[_ngcontent-%COMP%]{\r\n  color: #00AB67;\r\n}\r\n\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n  .sidebar-sticky[_ngcontent-%COMP%] {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n  }\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #333;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\n  margin-right: 4px;\r\n  color: #999;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n}\r\n\r\n.sidebar-heading[_ngcontent-%COMP%] {\r\n  font-size: .75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n\r\n\r\n[role=\"main\"][_ngcontent-%COMP%] {\r\n  padding-top: 133px; \r\n}\r\n\r\n@media (min-width: 768px) {\r\n  [role=\"main\"][_ngcontent-%COMP%] {\r\n    padding-top: 48px; \r\n  }\r\n}\r\n\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  padding-right: 4.2rem;\r\n  padding-left: 4rem;\r\n\r\n  font-size: 1rem;\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  padding: .75rem 1rem;\r\n  border-width: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.form-control-dark[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  border-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\n.form-control-dark[_ngcontent-%COMP%]:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n}\r\n\r\n.bg-dark[_ngcontent-%COMP%] {\r\n    background-color:#00AB67!important;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]{\r\n    background-color: #008DC3!important;\r\n    border:  #008DC3!important ;\r\n    \r\n  }\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 8px 16px 0 #008DC3;\r\n      \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFHQTs7SUFFSSx5QkFBeUI7O0FBRTdCOztBQUNBO0lBQ0kscUNBQXFDOztBQUV6Qzs7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXOztJQUVYLGtCQUFrQjs7O0FBR3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVksRUFBRSxzQkFBc0I7RUFDcEMsaUJBQWlCLEVBQUUscUJBQXFCO0VBQ3hDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUUsNkRBQTZEO0FBQ2pGOztBQUlBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0FBQ2pEOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUIsRUFBRSwyQkFBMkI7RUFDaEQ7QUFDRjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOENBQThDO0FBQ2hEOztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLDJCQUEyQjs7RUFFN0I7O0FBQ0E7SUFDRSxnQ0FBZ0M7O0VBRWxDIiwiZmlsZSI6InNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI0FjY291bnRze1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxufVxyXG5cclxuLmFhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4udGVzdHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUI2NztcclxuICAgIFxyXG59XHJcbi50ZXN0MXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcblxyXG59XHJcbiNkYXNoe1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmhye1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFCNjc7XHJcbn1cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG59XHJcblxyXG4uZmVhdGhlciB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxufVxyXG5cclxuLypcclxuICogU2lkZWJhclxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cclxuICBwYWRkaW5nOiA0OHB4IDAgMDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xyXG59XHJcblxyXG4uc2lkZWJhci1zdGlja3kge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XHJcbiAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xyXG59XHJcbiBcclxuXHJcblxyXG4jY2FyZGh7XHJcbiAgY29sb3I6ICMwMEFCNjc7XHJcbn1cclxuXHJcbkBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XHJcbiAgLnNpZGViYXItc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBDb250ZW50XHJcbiAqL1xyXG5cclxuW3JvbGU9XCJtYWluXCJdIHtcclxuICBwYWRkaW5nLXRvcDogMTMzcHg7IC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgW3JvbGU9XCJtYWluXCJdIHtcclxuICAgIHBhZGRpbmctdG9wOiA0OHB4OyAvKiBTcGFjZSBmb3IgZml4ZWQgbmF2YmFyICovXHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBOYXZiYXJcclxuICovXHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogNC4ycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcclxuXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxufVxyXG5cclxuLm5hdmJhciAuZm9ybS1jb250cm9sIHtcclxuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1jb250cm9sLWRhcmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcclxufVxyXG4uYmctZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMEFCNjchaW1wb3J0YW50O1xyXG59XHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOERDMyFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICAjMDA4REMzIWltcG9ydGFudCA7XHJcbiAgICBcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwICMwMDhEQzM7XHJcbiAgICAgIFxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-account',
                templateUrl: './my-account.component.html',
                styleUrls: ['./my-account.component.css'],
                providers: [_home_page_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]]
            }]
    }], function () { return [{ type: _home_page_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _my_account_service__WEBPACK_IMPORTED_MODULE_2__["MyAccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_4__["NgxImageCompressService"] }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["video"]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["canvas"]
        }] }); })();


/***/ }),

/***/ "./src/app/my-account/my-account.service.ts":
/*!**************************************************!*\
  !*** ./src/app/my-account/my-account.service.ts ***!
  \**************************************************/
/*! exports provided: MyAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountService", function() { return MyAccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

// import { Organization } from '../shared/organization'



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
class MyAccountService {
    constructor(http) {
        this.http = http;
        this.getUser = 'http://localhost:4200/api/Login';
    }
    getUserService(id) {
        console.log("service");
        const getUser = `http://localhost:4200/api/Login/${id}`;
        return this.http.get(getUser, { observe: 'response' });
    }
    openCam(id) {
        console.log("service");
        const camUrl = `http://localhost:4200/api/recog/${id}`;
        return this.http.get(camUrl, { observe: 'response' });
    }
    uplods(formData) {
        console.log(formData);
        this.http.post('http://localhost:4200/api/uploader', formData)
            .subscribe(files => console.log('files', files));
    }
    newUserService(test) {
        const newUserUrl = 'http://localhost:4200/api/registration';
        return this.http.post(newUserUrl, test, httpOptions);
    }
}
MyAccountService.ɵfac = function MyAccountService_Factory(t) { return new (t || MyAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MyAccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyAccountService, factory: MyAccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/my-account/resolve.service.ts":
/*!***********************************************!*\
  !*** ./src/app/my-account/resolve.service.ts ***!
  \***********************************************/
/*! exports provided: StudentResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentResolve", function() { return StudentResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-account.service */ "./src/app/my-account/my-account.service.ts");





class StudentResolve {
    constructor(route, myAccountService, router) {
        this.myAccountService = myAccountService;
        this.router = router;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    resolve(route, state) {
        console.log("state", state.url);
        console.log("idd :::", route.params['id']);
        return this.myAccountService.getUserService(route.params['id']);
    }
}
StudentResolve.ɵfac = function StudentResolve_Factory(t) { return new (t || StudentResolve)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_my_account_service__WEBPACK_IMPORTED_MODULE_3__["MyAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StudentResolve.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentResolve, factory: StudentResolve.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentResolve, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _my_account_service__WEBPACK_IMPORTED_MODULE_3__["MyAccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fahadalajmi/Documents/hakathon/homathon-1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map