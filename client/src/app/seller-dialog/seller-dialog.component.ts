import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Seller} from '../interfaces/seller';

@Component({
	selector: 'app-seller-dialog',
	templateUrl: './seller-dialog.component.html',
	styleUrls: ['./seller-dialog.component.css']
})

export class SellerDialogComponent implements OnInit {

	seller: Seller;

	constructor(public activeModal : NgbActiveModal) {}

	ngOnInit() {}

	onCancel() {
		this.activeModal.dismiss();
	}

	onOk() {
		this.activeModal.close(this.seller);
	}
}