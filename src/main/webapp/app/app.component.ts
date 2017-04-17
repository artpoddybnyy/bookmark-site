import { Component } from "@angular/core";
import {BookMarkService} from "./bookmark/bookmark.service";


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [BookMarkService]

})

export class AppComponent {}
