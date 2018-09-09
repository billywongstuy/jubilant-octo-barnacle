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
import { FormBuilder, Validators } from '@angular/forms';
var CreateProfileComponent = /** @class */ (function () {
    function CreateProfileComponent(QsService, fb) {
        this.QsService = QsService;
        this.fb = fb;
        this.title = 'Create profile here';
        this.createForm();
    }
    CreateProfileComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required]
        });
    };
    CreateProfileComponent.prototype.addFounder = function (name, email) {
        this.QsService.addFounder(name, email);
    };
    CreateProfileComponent.prototype.ngOnInit = function () {
    };
    CreateProfileComponent = __decorate([
        Component({
            selector: 'app-create-profile',
            templateUrl: './create-profile.component.html',
            styleUrls: ['./create-profile.component.css']
        }),
        __metadata("design:paramtypes", [QsService, FormBuilder])
    ], CreateProfileComponent);
    return CreateProfileComponent;
}());
export { CreateProfileComponent };
//# sourceMappingURL=create-profile.component.js.map