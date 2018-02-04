import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShuffleComponent } from './shuffle/shuffle.component';
import { InsertComponent } from './insert/insert.component';
import { ManageComponent } from './manage/manage.component';

const appRoutes: Routes = [
  { path: 'shuffle', component: ShuffleComponent, data: { title: 'Shuffle Page' } },
  { path: 'manage', component: ManageComponent, data: { title: 'Manage Page' } },
  { path: 'insert', component: InsertComponent, data: { title: 'Insert Page' } },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: false }) ], // <-- Tracing is debugging purposes only
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

