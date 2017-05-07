import {Component, OnInit} from "@angular/core";
import {BookMark} from "../bookmark-list/bookmark.module";
import {BookMarkService} from "../bookmark.service";
import {BookMarkComponent} from "../bookmark-list/bookmark.component";
import { Response } from '@angular/http';
import {EventManager} from "ng-jhipster";
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: "create-bookmark",
  templateUrl: "bookmark-create.component.html",
})

export class BookMarkCreate implements OnInit {

  public bookMark = new BookMark;


  constructor(private bookMarkService:BookMarkService,
              private eventManager:EventManager,
              private toastyService:ToastyService) {  }

  ngOnInit() {}

  createBookMark(bookMark:BookMark) {
    return this.bookMarkService
      .createBookMark(bookMark)
      .subscribe(response => this.onAddSuccess(), response => this.onSaveError(response));
  }

  private onSaveError(res: string) {
   this.toastyService.error({
      title: "Warning!",
      msg: res,
      showClose: true,
      timeout: 7000,
      theme: "bootstrap"
    });
  }

  private onAddSuccess() {
    this.eventManager.broadcast({name: 'bookmarkListModification', content: 'OK'});
  }
 }
