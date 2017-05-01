import {Component, OnInit} from "@angular/core";
import {BookMark} from "./bookmark.module";
import { Observable } from "rxjs/Observable";
import {BookMarkService} from "../bookmark.service";
import { EventManager } from 'ng-jhipster';

@Component({
  selector: "all-bookmarks",
  templateUrl: "bookmark.component.html"
})

export class BookMarkComponent implements OnInit {

  private ids:number[] = [];
  private bookMarks:Array<BookMark>;

  private isSelected:boolean;
  private isSelectedAll:boolean;

  constructor(private bookMarkService:BookMarkService,
              private eventManager:EventManager) {
  }

  ngOnInit() {
    this.findAll();
    this.detectChangeInBookMark();
  }

  findAll():any {
    return this.bookMarkService
      .findAll()
      .subscribe(bookMarks => this.bookMarks = bookMarks);
  }

  detectChangeInBookMark() {
    this.eventManager.subscribe('bookmarkListModification', (response) => this.findAll());
  }

  deleteBookMarks() {
    this.bookMarkService.delete(this.ids)
      .subscribe(ids => this.ids = ids,
        data => {
          this.findAll();
          return true;
        });
    this.ids = [];
    this.isSelectedAll = false;
  }

  selected(id:number) {
    var number = this.ids.indexOf(id);
    if (number > -1) {
      this.ids.splice(number, 1)
    } else {
      this.ids.push(id)
    }
    this.isSelectedAll = false;
  }

  exist(id:number) {
    return this.ids.indexOf(id) > -1;
  }

  selectAllCheckbox() {
    if (!this.isSelectedAll) {

      this.bookMarks.forEach(bookMark => {
        var number = this.ids.indexOf(bookMark.id);
        if (number >= 0) {
          return true;
        } else {
          this.ids.push(bookMark.id);
        }
      })
    } else {
      this.ids = [];
    }
    this.isSelected = true;
  }
}

