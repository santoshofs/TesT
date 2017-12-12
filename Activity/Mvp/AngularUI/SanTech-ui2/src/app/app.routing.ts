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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/santech/home', pathMatch: 'full' },
  {
    path: 'santech', component: SanTechComponent,
    children: [
      { path: '', redirectTo: '/santech/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'flight', component: FlightsComponent,
        children: [
          { path: '', redirectTo: '/santech/flight/search', pathMatch: 'full' },
          { path: 'search', component: SearchComponent },
          { path: 'list', component: FlightsListComponent },
          { path: '**', redirectTo: '/**', pathMatch: 'full' }
        ]
      },
      {
        path: 'user', component: UserComponent,
        children: [
          { path: '', redirectTo: '/santech/user/search', pathMatch: 'full' },
          { path: 'search', component: SearchComponent },
          { path: 'history', component: BookingHistoryComponent },
          { path: '**', redirectTo: '/**', pathMatch: 'full' }
        ]
      },
      { path: '**', redirectTo: '/**', pathMatch: 'full' }
    ]
  },
  { path: 'booking', component: BookingPortalComponent },
  { path: 'payment', component: PaymentPortalComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
