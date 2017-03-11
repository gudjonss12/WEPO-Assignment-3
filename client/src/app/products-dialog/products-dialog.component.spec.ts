/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductsDialogComponent } from './products-dialog.component';

describe('ProductsDialogComponent', () => {
	let component: ProductsDialogComponent;
	let fixture: ComponentFixture<ProductsDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProductsDialogComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductsDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	xit('should create', () => {
		expect(component).toBeTruthy();
	});
});
