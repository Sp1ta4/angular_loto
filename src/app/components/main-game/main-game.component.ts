import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { TicketService } from '../../services/ticket.service';
import { ITicketElement } from '../../interfaces/ITicketElement';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.sass'],
})
export class MainGameComponent implements OnInit {
  constructor(private ticketService: TicketService) {}
  public ticket!: (ITicketElement[] | null[])[];
  ngOnInit() {
    this.ticket = this.ticketService.ticket;
    this.ticketService.startNumberGeneration();
  }
}
