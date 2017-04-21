import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookMarkEdit} from "./bookmark/bookmark-edit/bookmark-edit.component";
import {BookMarkComponent} from "./bookmark/bookmark-list/bookmark.component";
import {BookMarkCreate} from "./bookmark/bookmark-create/bookmark-create.component";
import {BookMarkPopComponent} from "./bookmark/bookmark-edit/bookmrak-edit-popup.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/all-bookmarks',
        pathMatch: 'full'
    },
    {
        path: 'all-bookmarks',
        component: BookMarkComponent
    },
    {
        path: 'create-bookmark',
        component: BookMarkCreate
    },
    {
      path: 'one-bookmark/:id',
      component: BookMarkPopComponent,
      outlet: 'popup'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
