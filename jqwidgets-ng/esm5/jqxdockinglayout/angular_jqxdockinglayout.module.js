import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxribbon';
import '../jqwidgets/jqxlayout';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxdockinglayout';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxDockingLayoutComponent } from './angular_jqxdockinglayout';
var jqxDockingLayoutModule = /** @class */ (function () {
    function jqxDockingLayoutModule() {
    }
    jqxDockingLayoutModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxDockingLayoutComponent],
            exports: [jqxDockingLayoutComponent]
        })
    ], jqxDockingLayoutModule);
    return jqxDockingLayoutModule;
}());
export { jqxDockingLayoutModule };
