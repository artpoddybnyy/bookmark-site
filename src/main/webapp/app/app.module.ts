import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import {routing} from "./route";
import {BookMarkEdit} from "./bookmark/bookmark-edit/bookmark-edit.component";
import {BookMarkComponent} from "./bookmark/bookmark-list/bookmark.component";
import {BookMarkCreate} from "./bookmark/bookmark-create/bookmark-create.component";
import {BookMarkService} from "./bookmark/bookmark.service";
import {BookMarkPopComponent} from "./bookmark/bookmark-edit/bookmrak-edit-popup.component";
import {BookMarkPopupService} from "./bookmark/bookmark-edit-popup.service";
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {EventManager} from "ng-jhipster";
import {NgPipesModule} from "ngx-pipes";
import {ReversePipe} from "ngx-pipes/src/app/pipes/array/reverse";
import {ToastyModule} from "ng2-toasty";
import {TimeAgoPipe} from "time-ago-pipe/time-ago-pipe";

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgbModule.forRoot(),
    NgPipesModule,
    ToastyModule.forRoot()
  ],

  declarations: [AppComponent,
    BookMarkComponent,
    BookMarkCreate,
    BookMarkEdit,
    BookMarkPopComponent,
    TimeAgoPipe
  ],
  entryComponents: [BookMarkEdit
  ],
  providers: [ NgbActiveModal,
    BookMarkService,
    BookMarkPopupService,
    EventManager,
    BookMarkComponent,
    ReversePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
