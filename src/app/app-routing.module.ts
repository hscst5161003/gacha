import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContentListComponent } from './content-list/content-list.component';
import { GachaListComponent } from './gacha-list/gacha-list.component';

const routes: Routes = [
  { path: 'content', component: ContentListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gacha-list', component: GachaListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
