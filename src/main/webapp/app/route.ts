import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookMarkEdit} from "./bookmark/bookmark-edit/bookmark-edit.component";
import {BookMarkComponent} from "./bookmark/bookmark-list/bookmark.component";
import {BookMarkCreate} from "./bookmark/bookmark-create/bookmark-create.component";


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
        //path: 'one-bookmark',
        //
        //children: [
        //    {
        //        path: ':id',
        //        component: BookMarkEdit,
        //    }
        //]
      path: 'one-bookmark/:id',
      component: BookMarkEdit,
      outlet: 'popup'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
