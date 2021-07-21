(self["webpackChunkdnd2"] = self["webpackChunkdnd2"] || []).push([["src_app_pages_tab1_tab1_module_ts"],{

/***/ 7390:
/*!*******************************************!*\
  !*** ./src/app/models/personaje.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Personaje": () => (/* binding */ Personaje)
/* harmony export */ });
class Personaje {
    constructor(nombre) {
        this.id = new Date().getTime();
        this.nombre = nombre;
    }
}


/***/ }),

/***/ 8203:
/*!***************************************************!*\
  !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 4029);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    },
    {
        path: 'crear/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_crear_crear_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../crear/crear.module */ 5714)).then(m => m.CrearPageModule)
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 6789:
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 4029);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8203);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 4029:
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 2800);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 2306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/serv.service */ 5516);







let Tab1Page = class Tab1Page {
    constructor(service, router, alertCtrl, toastCtrl) {
        this.service = service;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    crearPersonaje() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Nuevo Personaje',
                inputs: [
                    {
                        name: 'nombre',
                        type: 'text',
                        placeholder: 'Nombre del personaje',
                    },
                    {
                        name: 'level',
                        type: 'number',
                        placeholder: 'Level'
                    },
                    {
                        name: 'stats',
                        type: 'text',
                        placeholder: '10 10 10 10 10 10 (Opcional)'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Crear',
                        handler: (data) => {
                            if (data.nombre.length === 0) {
                                this.presentToast("Error al crear el personaje: Ingrese nombre.");
                                return;
                            }
                            if (!data.level) {
                                this.presentToast("Error al crear el personaje: Ingrese el nivel.");
                                return;
                            }
                            else {
                                if (data.stats.split(" ").length == 6 || data.stats == []) {
                                    const id = this.service.crearPersonaje(data);
                                    this.router.navigateByUrl(`/tabs/tab1/crear/${id}`);
                                }
                                else {
                                    this.presentToast("Error al crear el personaje: Ingrese todos los atributos o deje el campo en blanco.");
                                    return;
                                }
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(msje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msje,
                duration: 3000
            });
            toast.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: src_app_services_serv_service__WEBPACK_IMPORTED_MODULE_2__.ServService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 5516:
/*!******************************************!*\
  !*** ./src/app/services/serv.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServService": () => (/* binding */ ServService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _models_personaje_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/personaje.model */ 7390);



let ServService = class ServService {
    constructor() {
        this.personajes = [];
        fetch("/assets/clases.json")
            .then(resp => resp.text())
            .then(text => this.clases = (JSON.parse(text).clase));
        this.cargarStorage();
    }
    crearPersonaje(data) {
        const nuevoPj = new _models_personaje_model__WEBPACK_IMPORTED_MODULE_0__.Personaje(data.nombre);
        nuevoPj.level = data.level;
        let stats = [];
        if (data.stats != "") {
            stats = data.stats.split(" ");
        }
        nuevoPj.listaStats = stats;
        this.personajes.push(nuevoPj);
        this.guardarStorage();
        return nuevoPj.id;
    }
    obtenerPersonaje(id) {
        id = Number(id);
        return this.personajes.find(resp => resp.id === id);
    }
    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.personajes));
    }
    cargarStorage() {
        if (localStorage.getItem('data')) {
            this.personajes = JSON.parse(localStorage.getItem('data'));
        }
    }
};
ServService.ctorParameters = () => [];
ServService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ServService);



/***/ }),

/***/ 2306:
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2800:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Personajes\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item *ngFor=\"let personaje of service.personajes\">\n      <ion-avatar slot=\"start\" *ngIf=\"personaje.clase\">\n        <ion-img src=\"assets\\avatar\\{{personaje.clase}}.png\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>\n          {{personaje.nombre}}\n      </h2>\n        <p>Level: {{personaje.level}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"secondary\" (click)=\"crearPersonaje()\">\n      <ion-icon name=\"add\" ></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tab1_tab1_module_ts.js.map