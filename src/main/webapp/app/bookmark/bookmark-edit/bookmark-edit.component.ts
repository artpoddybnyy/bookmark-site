import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager } from 'ng-jhipster';
import {BookMark} from "../bookmark-list/bookmark.module";
import {BookMarkService} from "../bookmark.service";
import {BookMarkPopupService} from "../bookmark-edit-popup.service";
import {BookMarkComponent} from "../bookmark-list/bookmark.component";


@Component({
  selector: "edit-bookmark",
  templateUrl: "bookmark-edit.component.html",
})
export class BookMarkEdit implements OnInit {

 private bookMark:BookMark;

  constructor(private bookMarkService:BookMarkService,
              public activeModal:NgbActiveModal,
              private eventManager:EventManager) {
  }

  ngOnInit() {
  }


  updateBookMark() {
    this.bookMarkService.updateBookMark(this.bookMark)
      .subscribe(response => this.onSaveSuccess());
  }

  private onSaveSuccess() {
    this.eventManager.broadcast({name: 'bookmarkListModification', content: 'OK'});
    this.activeModal.dismiss('cancel');
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }
}



