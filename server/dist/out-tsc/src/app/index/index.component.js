var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { QsService } from '../qs.service';
import { HttpClient } from '@angular/common/http';
var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, service) {
        this.http = http;
        this.service = service;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getFounders();
    };
    IndexComponent.prototype.getFounders = function () {
        var _this = this;
        this.service.getFounders().substribe(function (res) {
            _this.founders = res;
        });
    };
    IndexComponent = __decorate([
        Component({
            selector: 'app-index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient, QsService])
    ], IndexComponent);
    return IndexComponent;
}());
export { IndexComponent };
//# sourceMappingURL=index.component.js.map