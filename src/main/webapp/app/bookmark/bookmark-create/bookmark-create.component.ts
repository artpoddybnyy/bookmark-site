import {Component, OnInit} from "@angular/core";
import {BookMark} from "../bookmark-list/bookmark.module";
import {BookMarkService} from "../bookmark.service";
import {BookMarkComponent} from "../bookmark-list/bookmark.component";

@Component({
  selector: "create-bookmark",
    templateUrl: "bookmark-create.component.html"


})

export class BookMarkCreate implements OnInit{

  public bookMark = new BookMark;

    constructor(private bookMarkService: BookMarkService,
                private bookMarkComponent: BookMarkComponent) {
    }

    ngOnInit() {}


    createBookMark(bookMark: BookMark) {
        return this.bookMarkService
            .create(bookMark)
            .subscribe(bookMark => this.bookMark = bookMark,
                data => {
                  this.bookMarkComponent.findAll();
                  bookMark.link = null;
                  return true;
                });

    }
}
