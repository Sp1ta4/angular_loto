import { Component, Input, OnInit } from '@angular/core';
import { ITicketElement } from '../../interfaces/ITicketElement';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass'],
})
export class TicketComponent implements OnInit {
  @Input() ticket!: (ITicketElement[] | null[])[];
  constructor() {}

  ngOnInit() {
    console.log(this.ticket, 23331);
  }
}
