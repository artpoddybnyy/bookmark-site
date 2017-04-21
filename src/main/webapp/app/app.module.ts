import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { FormsModule }   from '@angular/forms';
import {routing} from "./route";
import {BookMarkEdit} from "./bookmark/bookmark-edit/bookmark-edit.component";
import {BookMarkComponent} from "./bookmark/bookmark-list/bookmark.component";
import {BookMarkCreate} from "./bookmark/bookmark-create/bookmark-create.component";
import {BookMarkService} from "./bookmark/bookmark.service";
import {BookMarkPopComponent} from "./bookmark/bookmark-edit/bookmrak-edit-popup.component";
import {BookMarkPopupService} from "./bookmark/bookmark-edit-popup.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EventManager} from "ng-jhipster/src/service/event-manager.service";


@NgModule({
  imports: [BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgbModule.forRoot()
  ],
  declarations: [AppComponent,
    BookMarkComponent,
    BookMarkCreate,
    BookMarkEdit,
    BookMarkPopComponent
  ],
  entryComponents: [BookMarkEdit
  ],
  providers: [
    BookMarkService, BookMarkPopupService, EventManager, BookMarkComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
