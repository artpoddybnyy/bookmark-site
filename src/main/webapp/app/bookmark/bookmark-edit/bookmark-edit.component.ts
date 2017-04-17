import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

import {BookMark} from "../bookmark-list/bookmark.module";
import "../bookmark-list/bookmark.component.html";
import {BookMarkService} from "../bookmark.service";
import {DialogService, DialogComponent} from "ng2-bootstrap-modal/index";


@Component({
  selector: "edit-bookmark",
  templateUrl: "bookmark-edit.component.html",

})

export class BookMarkEdit extends DialogComponent<BookMark, boolean> implements OnInit {

  private bookMark: BookMark;


  constructor(private bookMarkService:BookMarkService,
              private route:ActivatedRoute,
              private router:Router,
            dialogService: DialogService) {
    super(dialogService);}



  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.findOne(id);
    //this.showConfirm(id);
  }


  findOne(id:number):BookMark {
    return this.bookMarkService
      .findOne(id)
      .subscribe(bookMark => this.bookMark = bookMark);
  }

  updateBookMark() {
    return this.bookMarkService.updateBookMark(this.bookMark)
      .subscribe(bookMark => this.bookMark = bookMark,
        data => {
          this.router.navigateByUrl('all-bookmarks');
          return true
        });

  }


  showConfirm(id: number) {
    let disposable = this.dialogService.addDialog(BookMarkEdit,  this.findOne(id))
      .subscribe((isConfirmed)=> {

        if (isConfirmed) {
          alert('accepted');
        }
        else {
          alert('declined');
        }
      });
  }
}
