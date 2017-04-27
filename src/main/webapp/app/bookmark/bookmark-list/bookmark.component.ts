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
  private bookMark :BookMark;

  private isSelected: boolean = false;


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
  }

  selected(id:number) {
    if (this.ids.find(x=>x == id)) {
      this.ids.splice(this.ids.indexOf(id), 1)
    } else {
      this.ids.push(id);
    }
    console.log(this.ids)
  }

  selectAllCheckbox() {
    if (this.isSelected) {
      this.isSelected = false;
      for (var i = 0; i < this.bookMarks.length; i++) {
        var bookMark = this.bookMarks[i];
        this.selected(bookMark.id)

      }
    }else

      for (var i = 0; i < this.bookMarks.length; i++) {
        var bookMark = this.bookMarks[i];
        this.selected(bookMark.id)
        this.isSelected = true;
      }
  }



}
