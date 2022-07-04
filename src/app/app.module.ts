import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatToolbarModule} from'@angular/material/toolbar';
import{MatSidenavModule} from'@angular/material/sidenav';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import{MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { OrdersModule } from './orders/orders.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule ,
    OrdersModule,
    SiteFrameworkModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
