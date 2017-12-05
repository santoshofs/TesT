import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SanTechComponent } from './san-tech/san-tech.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { UserComponent } from './user/user.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingPortalComponent } from './booking-portal/booking-portal.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';

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
    PaymentPortalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: SanTechComponent},
      {path: 'SanTech', component: SanTechComponent,
        children: [
          {path: 'home', component: HomeComponent}
        ]
    },
      {path: 'booking', component: BookingPortalComponent,pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
