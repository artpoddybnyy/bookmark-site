import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import {BookMark} from "../bookmark-list/bookmark.module";
import "../bookmark-list/bookmark.component.html";
import {BookMarkService} from "../bookmark.service";


@Component({
  selector: "edit-bookmark",
    templateUrl: "bookmark-edit.component.html",

})

export class BookMarkEdit implements OnInit{

   private bookMark: BookMark;

    constructor(private bookMarkService: BookMarkService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.findOne(id);
    }


    findOne(id : number):BookMark {
        return this.bookMarkService
            .findOne(id)
            .subscribe(bookMark => this.bookMark = bookMark);
    }

    updateBookMark(){
        return this.bookMarkService.
        updateBookMark(this.bookMark)
            .subscribe(bookMark => this.bookMark = bookMark,
                data => {this.router.navigateByUrl('all-bookmarks');return true});


    }

}
