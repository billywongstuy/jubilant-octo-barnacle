import { TestBed } from '@angular/core/testing';
import { QsService } from './qs.service';
describe('QsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(QsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=qs.service.spec.js.map