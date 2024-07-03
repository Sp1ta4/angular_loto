import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.sass'],
})
export class StartMenuComponent {
  constructor(private ticketService: TicketService) {}

  @Output() startGame = new EventEmitter();

  public onStartGame() {
    this.startGame.emit();
  }

  public selectDifficultyLevel(event: Event) {
    const level = +(event.target as HTMLInputElement).value;
    this.ticketService.difficultyLevel = level;
  }
}
