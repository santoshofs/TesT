import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { HttpModule, Http } from "@angular/http";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";

import { AppComponent } from './app.component';
import { SanTechComponent } from './san-tech/san-tech.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { UserComponent } from './user/user.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingPortalComponent } from './booking-portal/booking-portal.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

import { DataService } from './data-service/data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SanTechComponent,
    HomeComponent,
    FlightsComponent,
    FlightsListComponent,
    UserComponent,
    BookingHistoryComponent,
    BookingPortalComponent,
    PaymentPortalComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpModule,
    FormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/lang/', '.json'),
      deps: [Http]
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
