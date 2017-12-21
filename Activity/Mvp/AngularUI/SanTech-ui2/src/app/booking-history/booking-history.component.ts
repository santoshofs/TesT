import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  @Input() tickets: any;
  constructor(private _DataService: DataService) { }

  ngOnInit() {
    // this.tickets = this._DataService.getUserTickets();
  }
  ngOnChanges() {
    this.tickets = this._DataService.getUserTickets();
  }

}
