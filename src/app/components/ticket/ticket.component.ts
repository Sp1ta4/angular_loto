import { Component, Input, OnInit } from '@angular/core';
import { ITicketElement } from '../../interfaces/ITicketElement';
import { TicketService } from '../../services/ticket.service';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass'],
})
export class TicketComponent implements OnInit {
  @Input() ticket!: (ITicketElement | null)[][];
  public currentNum!: number;

  constructor(
    private mainService: MainService,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.ticketService.currentNum.subscribe(
      (value) => (this.currentNum = value)
    );
  }

  public handleClick(number: number, index: number) {
    console.log(11);

    if (this.checkIsCurrentNumber(number)) {
      const currentBox = this.ticket[index].find(
        (elem: ITicketElement | null) => elem?.number === number
      );
      currentBox!.checked = true;
    }
  }

  private checkIsCurrentNumber(number: number) {
    if (this.currentNum === number) {
      this.mainService.score.next(this.mainService.score.value + 1000);
      return true;
    }
    return false;
  }
}
