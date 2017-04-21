import {Component, OnInit, OnDestroy} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {BookMark} from "../bookmark-list/bookmark.module";
import {BookMarkService} from "../bookmark.service";
import {BookMarkPopupService} from "../bookmark-edit-popup.service";
import {BookMarkEdit} from "./bookmark-edit.component";

@Component({
  selector: 'bookmark-popup',
  template: ''
})
export class BookMarkPopComponent implements OnInit, OnDestroy {

  modalRef: NgbModalRef;
  routeSub: any;

  constructor (
    private route: ActivatedRoute,
    private bookMarkPopupService: BookMarkPopupService) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      if ( params['id'] ) {
        this.modalRef = this.bookMarkPopupService.open(BookMarkEdit, params['id']);
      }else {
        //this.modalRef = this.bookMarkPopupService.open(BookMarkEdit);
      }
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
