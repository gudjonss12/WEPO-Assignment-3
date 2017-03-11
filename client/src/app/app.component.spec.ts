/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {NgbModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SellersService} from './sellers.service';

describe('AppComponent', () => {
	const MockService = {
		getSeller() {
			return true;
		}
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				ProductCardComponent
			],
			providers: [{
				provide: SellersService,
				useValue: MockService,
			}, {
				provide: NgbModal,
				usevalue: NgbModal
			}]
		});
		TestBed.compileComponents();
	});

	xit('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
