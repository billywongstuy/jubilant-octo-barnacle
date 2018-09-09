var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var QsService = /** @class */ (function () {
    function QsService(http) {
        this.http = http;
    }
    QsService.prototype.addFounder = function (name, email) {
        var uri = 'http://localhost:4000/founder/add';
        var obj = {
            name: name,
            email: email
        };
        this.http.post(uri, obj).subscribe(function (res) { return console.log('Done'); });
    };
    QsService.prototype.getFounders = function () {
        var uri = 'http://localhost:4000/founder/add';
        return this.http.get(uri).map(function (res) { return res; });
    };
    QsService.prototype.editFounder = function (id) {
        var uri = 'http://localhost:4000/founders/edit-profile' + id;
        return this.http.get(uri).map(function (res) { return res; });
    };
    QsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], QsService);
    return QsService;
}());
export { QsService };
//# sourceMappingURL=qs.service.js.map