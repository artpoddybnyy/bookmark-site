import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import {BookMark} from "./bookmark.module";
import { Observable } from "rxjs/Observable";
import {BookMarkService} from "../bookmark.service";
import { EventManager } from 'ng-jhipster';
import {throttle} from "rxjs/operator/throttle";

@Component({
  selector: "all-bookmarks",
  templateUrl: "bookmark.component.html"
})

export class BookMarkComponent implements OnInit {

  private ids:number[] = [];
  private bookMarks:Array<BookMark>;
  private title:string;
  private isSelected:boolean;
  private isSelectedAll:boolean;

  constructor(private bookMarkService:BookMarkService,
              private route:ActivatedRoute,
              private eventManager:EventManager) {
  }


  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      let title = params['title'];
      if (title != null) {
        this.findAllByTitle(title);
        this.detectChangeInFoundBookMarks(title);
      }
      this.title = title;
    });
    if (this.title == null){
    this.findAll();
    this.detectChangeInBookMarks();
    }
  }

  findAll():any {
    return this.bookMarkService
      .findAll()
      .subscribe(bookMarks => this.bookMarks = bookMarks);
  }

  findAllByTitle(title:string):any {
    return this.bookMarkService
      .findAllByTitle(title)
      .subscribe(bookMarks => this.bookMarks = bookMarks);
  }

  detectChangeInBookMarks() {
    this.eventManager.subscribe('bookmarkListModification', (response) => this.findAll());
  }

  detectChangeInFoundBookMarks(title) {
    this.eventManager.subscribe('bookmarkListModification', (response) => this.findAllByTitle(title));
  }

  deleteBookMarks() {
    this.bookMarkService.deleteBookMark(this.ids)
      .subscribe(response => this.onDeleteSuccess());
    this.ids = [];
    this.isSelectedAll = false;
  }

  private onDeleteSuccess() {
    this.eventManager.broadcast({name: 'bookmarkListModification', content: 'OK'});
  }


  selected(id:number) {
    let number = this.ids.indexOf(id);
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
        let number = this.ids.indexOf(bookMark.id);
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

