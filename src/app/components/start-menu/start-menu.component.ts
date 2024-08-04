import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.sass'],
})
export class StartMenuComponent {
  constructor(
    private ticketService: TicketService,
    private mainService: MainService
  ) {}

  @Output() startGame = new EventEmitter();

  public onStartGame() {
    this.startGame.emit();
    this.mainService.timerOn();
  }

  public selectDifficultyLevel(event: Event) {
    const level = +(event.target as HTMLInputElement).value;
    this.ticketService.difficultyLevel = level;
  }
}
