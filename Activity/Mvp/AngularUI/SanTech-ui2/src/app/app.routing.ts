import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanTechComponent } from './san-tech/san-tech.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { SearchComponent } from './search/search.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { UserComponent } from './user/user.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingPortalComponent } from './booking-portal/booking-portal.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/santech/home', pathMatch: 'full' },
  {
    path: 'santech', component: SanTechComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'flight', component: FlightsComponent,
        children: [
          { path: 'search', component: SearchComponent },
          { path: 'list', component: FlightsListComponent }
        ]
      },
      {
        path: 'user', component: UserComponent,
        children: [
          { path: 'search', component: SearchComponent },
          { path: 'history', component: BookingHistoryComponent }
        ]
      }
    ]
  },
  { path: 'booking', component: BookingPortalComponent },
  { path: 'payment', component: PaymentPortalComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
