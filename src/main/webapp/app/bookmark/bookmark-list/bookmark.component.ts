import {Component, OnInit} from "@angular/core";
import {BookMark} from "./bookmark.module";
import { Observable } from "rxjs/Observable";
import {BookMarkService} from "../bookmark.service";
import {BookMarkEdit} from "../bookmark-edit/bookmark-edit.component";

@Component({
  selector: "all-bookmarks",
  templateUrl: "bookmark.component.html"
})

export class BookMarkComponent implements OnInit {

  private ids:number[] = [];
  private bookMarks:Array<BookMark>;

  constructor(private bookMarkService:BookMarkService) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll():any {
    return this.bookMarkService
      .findAll()
      .subscribe(bookMarks => this.bookMarks = bookMarks);
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
  }

  updateData(ane: boolean) {
   if (ane)this.findAll();
  }

}
