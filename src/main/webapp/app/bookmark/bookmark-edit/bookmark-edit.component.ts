import {Component, OnInit, Output,EventEmitter} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from 'ng-jhipster';
import {BookMark} from "../bookmark-list/bookmark.module";
import "../bookmark-list/bookmark.component.html";
import {BookMarkService} from "../bookmark.service";
import {BookMarkPopupService} from "../bookmark-edit-popup.service";
import {BookMarkComponent} from "../bookmark-list/bookmark.component";


@Component({
  selector: "edit-bookmark",
  templateUrl: "bookmark-edit.component.html",
})
export class BookMarkEdit implements OnInit {

  bookMark:BookMark;


  constructor(private bookMarkService:BookMarkService,
              public activeModal:NgbActiveModal,
              private eventManager:EventManager) {
  }

  ngOnInit() {

  }

  //updateBookMark() {
  //  return this.bookMarkService.updateBookMark(this.bookMark)
  //    .subscribe(bookMark => this.bookMark = bookMark,
  //      data => {
  //        //this.router.navigateByUrl('all-bookmarks');
  //        this.clear();
  //
  //        return true;
  //      });
  //}

  updateBookMark() {
      this.bookMarkService.updateBookMark(this.bookMark)
      .subscribe(bookMark => this.bookMark = bookMark,
        data => {
this.onSaveSuccess(); return true;
          //this.clear();
        });
      }

  private onSaveSuccess() {
    this.eventManager.broadcast({name: 'bookmarkListModification', content: 'OK' });
    this.activeModal.dismiss('cancel');
  }


  clear() {
    this.activeModal.dismiss('cancel');
  }
}



