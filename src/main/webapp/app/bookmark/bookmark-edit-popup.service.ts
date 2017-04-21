import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import {BookMarkService} from "./bookmark.service";
import {BookMark} from "./bookmark-list/bookmark.module";

@Injectable()
export class BookMarkPopupService {
  private isOpen = false;

  constructor(private modalService:NgbModal,
              private router:Router,
              private bookMarkService:BookMarkService) {
  }

  open(component:Component, id?:number):NgbModalRef {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;

    if (id) {
    this.bookMarkService.findOne(id).subscribe(bookmark => this.bookmarkModalRef(component, bookmark));
    } else {
      return this.bookmarkModalRef(component, new BookMark());
    }
  }

  bookmarkModalRef(component:Component, bookMark:BookMark):NgbModalRef {
    let modalRef = this.modalService.open(component, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.bookMark = bookMark;
    modalRef.result.then(result => {
      this.router.navigate([{outlets: {popup: null}}], {replaceUrl: true});
      this.isOpen = false;
    }, (reason) => {
      this.router.navigate([{outlets: {popup: null}}], {replaceUrl: true});
      this.isOpen = false;
    });
    return modalRef;
  }
}
