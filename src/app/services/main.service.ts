import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public score: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public timer: BehaviorSubject<string> = new BehaviorSubject<string>('00:00');
  private time = 900;

  public timerOn() {
    const interval = setInterval(() => {
      this.timer.next(this.updateTimer());
      this.time <= 0 && clearInterval(interval);
    }, 1000);
  }

  private updateTimer() {
    const minutes = Math.floor(this.time / 60);
    let seconds: string | number = this.time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    this.time--;
    return `${minutes}:${seconds}`;
  }
}
