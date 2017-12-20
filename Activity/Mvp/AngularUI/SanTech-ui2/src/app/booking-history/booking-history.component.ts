import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-booking-history',
  template: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  tickets: any;
  constructor(private _DataService: DataService) { }

  ngOnInit() {
    this.tickets = this._DataService.getUserTickets();
  }

}
