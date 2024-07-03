import { Component, Input } from '@angular/core';
import { ITicketElement } from '../../interfaces/ITicketElement';
import { TicketService } from '../../services/ticket.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-ticket-box',
  templateUrl: './ticket-box.component.html',
  styleUrls: ['./ticket-box.component.sass'],
})
export class TicketBoxComponent {
  @Input() box!: ITicketElement[] | null[];
  @Input() index!: number;

  constructor(
    private mainService: MainService,
    private ticketService: TicketService
  ) {}
  private ticket = this.ticketService.ticket;
  public handleClick(number: number, index: number) {
    if (this.checkIsCurrentNumber(number)) {
      const currentBox = this.ticket[index].find(
        (elem: ITicketElement | null) => elem?.number === number
      );
      currentBox.checked = true;
    }
  }

  private checkIsCurrentNumber(number: number) {
    if (this.ticketService.currentNum === number) {
      this.mainService.score += 1000;
      return true;
    }
    return false;
  }
}
