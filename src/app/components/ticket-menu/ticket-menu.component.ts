import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-ticket-menu',
  templateUrl: './ticket-menu.component.html',
  styleUrl: './ticket-menu.component.sass',
})
export class TicketMenuComponent implements OnInit {
  constructor(
    private ticketService: TicketService,
    private mainService: MainService
  ) {}
  public currentNum!: number;
  public score!: number;
  public scorePercent!: number;
  public timer!: string;
  ngOnInit() {
    this.ticketService.currentNum.subscribe(
      (value) => (this.currentNum = value)
    );
    this.mainService.score.subscribe((value) => {
      this.score = value;
      this.scorePercent = (this.score * 100) / 15000;
    });
    this.mainService.timer.subscribe((value) => (this.timer = value));
  }
}
