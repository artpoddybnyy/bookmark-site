import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { FormsModule }   from '@angular/forms';
import {routing} from "./route";
import {BookMarkEdit} from "./bookmark/bookmark-edit/bookmark-edit.component";
import {BookMarkComponent} from "./bookmark/bookmark-list/bookmark.component";
import {BookMarkCreate} from "./bookmark/bookmark-create/bookmark-create.component";


@NgModule({
    imports: [BrowserModule,  HttpModule, FormsModule, routing],
    declarations: [AppComponent,
        BookMarkComponent,
        BookMarkCreate,
        BookMarkEdit],
      bootstrap: [AppComponent]

})
export class AppModule { }
