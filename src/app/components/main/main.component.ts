import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

const leaveTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '1.5s ease-out',
    style({
      opacity: 0,
    })
  ),
]);
const startTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '2.4s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

const fadeOut = trigger('menuFadeOut', [leaveTransition]);
const fadeIn = trigger('ticketFadeIn', [startTransition]);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  animations: [fadeOut, fadeIn],
})
export class MainComponent {
  public isGameStarted = false;

  public startGame() {
    this.isGameStarted = true;
  }
}
