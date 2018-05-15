import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule,
         MatIconModule, MatListModule, MatTabsModule, MatGridListModule,
         MatDialogModule, } from '@angular/material';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ContentListComponent } from './content-list/content-list.component';
import { GachaListComponent } from './gacha-list/gacha-list.component';
import { ContentDialogComponent } from './content-dialog/content-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    SidenavComponent,
    ContentListComponent,
    GachaListComponent,
    ContentDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
