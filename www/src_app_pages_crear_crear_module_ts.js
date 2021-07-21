(self["webpackChunkdnd2"] = self["webpackChunkdnd2"] || []).push([["src_app_pages_crear_crear_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal.component */ 385);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover/popover.component */ 762);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent,
            _popover_popover_component__WEBPACK_IMPORTED_MODULE_1__.PopoverComponent,
        ],
        exports: [
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent,
            _popover_popover_component__WEBPACK_IMPORTED_MODULE_1__.PopoverComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 385:
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.component.html */ 1633);
/* harmony import */ var _modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component.scss */ 7058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_models_stats_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/stats.model */ 4266);






let ModalComponent = class ModalComponent {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.atributos = [
            "Str",
            "Dex",
            "Con",
            "Int",
            "Wis",
            "Cha"
        ];
        this.statsDisponibles = {};
        this.posicionStats = {};
        this.statsPersonaje = new src_app_models_stats_model__WEBPACK_IMPORTED_MODULE_2__.Stats();
        this.stats = navParams.get("stats");
        this.personaje = navParams.get("personaje");
        console.log(this.personaje);
        console.log("posicionstats", this.posicionStats);
        for (let stat of this.atributos) {
            this.statsDisponibles[stat] = 0;
        }
        // console.log(this.statsDisponibles)
    }
    ngOnInit() {
    }
    agregarAtributo(evento, atrib, index) {
        // console.log(evento,atrib);
        if (this.posicionStats[index]) {
            // console.log("posicion ocupada por ",this.posicionStats[index]);
            this.statsDisponibles[this.posicionStats[index]] -= 1;
        }
        // console.log(this.posicionStats[index]);
        // console.log(this.statsDisponibles);
        this.statsDisponibles[this.atributos[evento.detail.value]] += 1;
        // console.log("posicionStats",this.statsDisponibles);
        this.posicionStats[index] = this.atributos[evento.detail.value];
        this.statsPersonaje[this.posicionStats[index].toLowerCase()] = atrib;
        // console.log(this.posicionStats);
    }
    modificador(atrib) {
        return Math.abs(Math.floor((atrib - 10) / 2));
    }
    onClick() {
        this.personaje.stats = this.statsPersonaje;
        console.log(this.personaje);
        this.dismiss();
    }
    validar() {
        let keys = Object.keys(this.statsDisponibles);
        for (let valor of keys) {
            if (this.statsDisponibles[valor] !== 1) {
                return true;
            }
        }
        return false;
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams }
];
ModalComponent.propDecorators = {
    personaje: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    stats: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalComponent);



/***/ }),

/***/ 762:
/*!*********************************************************!*\
  !*** ./src/app/components/popover/popover.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverComponent": () => (/* binding */ PopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./popover.component.html */ 1447);
/* harmony import */ var _popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.component.scss */ 2169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let PopoverComponent = class PopoverComponent {
    constructor(popoverCtrl, navParams) {
        this.popoverCtrl = popoverCtrl;
        this.atributos = [
            "Str",
            "Dex",
            "Con",
            "Int",
            "Wis",
            "Cha"
        ];
        this.stats = navParams.get("stats");
        console.log(this.stats);
    }
    calcularModificador(stat) {
        return Math.abs(Math.floor((stat - 10) / 2));
    }
    ngOnInit() { }
    dismiss() {
        this.popoverCtrl.dismiss({
            'dismissed': true
        });
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams }
];
PopoverComponent.propDecorators = {
    stats: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-popover',
        template: _raw_loader_popover_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopoverComponent);



/***/ }),

/***/ 4266:
/*!***************************************!*\
  !*** ./src/app/models/stats.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stats": () => (/* binding */ Stats)
/* harmony export */ });
class Stats {
    constructor() {
    }
}


/***/ }),

/***/ 6319:
/*!*****************************************************!*\
  !*** ./src/app/pages/crear/crear-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearPageRoutingModule": () => (/* binding */ CrearPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _crear_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear.page */ 9800);




const routes = [
    {
        path: '',
        component: _crear_page__WEBPACK_IMPORTED_MODULE_0__.CrearPage
    }
];
let CrearPageRoutingModule = class CrearPageRoutingModule {
};
CrearPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearPageRoutingModule);



/***/ }),

/***/ 5714:
/*!*********************************************!*\
  !*** ./src/app/pages/crear/crear.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearPageModule": () => (/* binding */ CrearPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _crear_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-routing.module */ 6319);
/* harmony import */ var _crear_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear.page */ 9800);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let CrearPageModule = class CrearPageModule {
};
CrearPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _crear_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_crear_page__WEBPACK_IMPORTED_MODULE_1__.CrearPage]
    })
], CrearPageModule);



/***/ }),

/***/ 9800:
/*!*******************************************!*\
  !*** ./src/app/pages/crear/crear.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearPage": () => (/* binding */ CrearPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_crear_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crear.page.html */ 4471);
/* harmony import */ var _crear_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear.page.scss */ 2105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/serv.service */ 5516);
/* harmony import */ var src_app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modal/modal.component */ 385);
/* harmony import */ var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/popover/popover.component */ 762);









let CrearPage = class CrearPage {
    constructor(service, route, modalController, popoverCtrl) {
        this.service = service;
        this.route = route;
        this.modalController = modalController;
        this.popoverCtrl = popoverCtrl;
        this.status = [];
        console.log("Clases:", this.service.clases);
        this.personaje = this.service.obtenerPersonaje(this.route.snapshot.paramMap.get('id'));
        this.setStats();
        console.log(this.status);
        this.personaje.proficiencia = 1 + Math.ceil(this.personaje.level / 4);
        console.log("prof", this.personaje.proficiencia);
    }
    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        if (this.personaje.stats) {
            console.log("cambios");
            this.generarSavings();
        }
    }
    generarSavings() {
        this.personaje.savings.str = this.personaje.stats.str;
        this.personaje.savings.dex = this.personaje.stats.dex;
        this.personaje.savings.con = this.personaje.stats.con;
        this.personaje.savings.int = this.personaje.stats.int;
        this.personaje.savings.wis = this.personaje.stats.wis;
        this.personaje.savings.cha = this.personaje.stats.cha;
    }
    agregarClase() {
        this.personaje.clase = this.class;
        // console.log(this.service.clases.find(resp => resp.nombre === this.class));
    }
    setStats() {
        if (this.personaje.listaStats.length == 0) {
            let total = 0;
            while (total < 70) {
                total = 0;
                this.status = [];
                for (let roll = 0; roll < 6; roll++) {
                    let stat = 0;
                    stat = 0;
                    const rolls = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
                    rolls.forEach(numero => {
                        stat += numero;
                    });
                    stat -= Math.min.apply(null, rolls);
                    this.status.push(stat);
                }
                for (let dado of this.status) {
                    total += dado;
                }
            }
        }
        else {
            this.status = this.personaje.listaStats;
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent,
                cssClass: 'my-custom-class',
                backdropDismiss: false,
                componentProps: {
                    "stats": this.status,
                    "personaje": this.personaje,
                }
            });
            return yield modal.present();
        });
    }
    presentPopover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__.PopoverComponent,
                event: event,
                componentProps: {
                    'stats': this.personaje.stats,
                },
                translucent: true,
            });
            yield popover.present();
        });
    }
    ngOnInit() {
    }
};
CrearPage.ctorParameters = () => [
    { type: src_app_services_serv_service__WEBPACK_IMPORTED_MODULE_2__.ServService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController }
];
CrearPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-crear',
        template: _raw_loader_crear_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crear_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrearPage);



/***/ }),

/***/ 7058:
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 2169:
/*!***********************************************************!*\
  !*** ./src/app/components/popover/popover.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 2105:
/*!*********************************************!*\
  !*** ./src/app/pages/crear/crear.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1633:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent class=\"animate__animated animate__slideInUp\">\n  <ion-toolbar>\n    <ion-title>Distribución de atributos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"animate__animated animate__slideInUp\" class=\"ion-padding\">\n  <ion-list>\n    <!-- <ion-item>\n      <ion-label *ngFor=\"let stat of stats\">{{stat}}</ion-label>\n    </ion-item> -->\n    <ion-item *ngFor=\"let atributo of stats; let ind=index\" >\n      <ion-label>{{atributo}}\n        <ion-label *ngIf=\"atributo>=10\">(+{{modificador(atributo)}})</ion-label>\n        <ion-label *ngIf=\"atributo < 10\">(-{{modificador(atributo)}})</ion-label>\n      </ion-label>\n      <ion-select placeholder=\"Asignar atributo\" interface=\"action-sheet\" (ionChange)=\"agregarAtributo($event, atributo, ind)\">\n        <ion-select-option *ngFor=\"let stat of atributos; let i=index\" [value]=\"i\">{{stat}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n  </ion-list>\n\n  <ion-button [disabled]=\"validar()\" color=\"secondary\" expand=\"block\" (click)=\"onClick()\">\n    <ion-icon name=\"save\"></ion-icon>\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ 1447:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let stat of atributos\">\n      <ion-label position=\"stacked\" slot=\"start\">{{stat}}\n      </ion-label>\n      <ion-label slot=\"end\" position=\"stacked\" *ngIf =\"this.stats\">{{this.stats[stat.toLowerCase()]}}\n        <h2 *ngIf=\"this.stats[stat.toLowerCase()] >=10\">(+{{calcularModificador(this.stats[stat.toLowerCase()])}})</h2>\n        <h2 *ngIf=\"this.stats[stat.toLowerCase()] < 10\">(-{{calcularModificador(this.stats[stat.toLowerCase()])}})</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 4471:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crear/crear.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n    <ion-title>{{personaje.nombre}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid fixed>\n    <ion-list>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label>\n              Clase:\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-item>\n            <ion-select placeholder=\"Seleccionar Clase\" [(ngModel)] = \"class\" (ionChange)=\"agregarClase()\">\n              <ion-select-option value=\"{{clase.nombre}}\" *ngFor=\"let clase of service.clases\">{{clase.nombre}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-item>\n            <ion-label>\n              <p>\n                Level:\n              </p>\n              <h2>\n                {{personaje.level}}\n              </h2>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-item>\n            <ion-label>\n              <p>\n                Profiencia:\n              </p>\n              <h2>+{{personaje.proficiencia}}</h2>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <ion-item>\n            <ion-label>\n              <p>Atributos:</p>\n              <h2><strong *ngFor=\"let stat of status\">{{stat}} </strong></h2>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item>\n            <ion-button (click)=\"presentModal()\" color=\"primary\" size=\"small\" >Asignar</ion-button>\n          </ion-item>\n          \n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"personaje.stats\">\n          <ion-col size=\"12\">\n            <ion-button  (click)=\"presentPopover()\" expand=\"block\" fill=\"outline\" shape=\"round\" color=\"secondary\">\n              Stats\n            </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">\n                <p>Skills</p>\n                <ion-list>\n                  <ion-item *ngFor=\"let i of [1,2,3,4]\">\n                    <ion-label position=\"stacked\">\n                      <h2>Hawaii</h2>\n                    </ion-label>\n                  </ion-item>\n                </ion-list>\n              </ion-label>\n            </ion-item>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"fixed\">\n              <p>Saving Throws</p>\n              <ion-list>\n                <ion-item>\n                  <ion-label>Input</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Input</ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_crear_crear_module_ts.js.map