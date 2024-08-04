import { Injectable } from '@angular/core';
import { ITicketElement } from '../interfaces/ITicketElement';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  public difficultyLevel: number = 2;
  public ticket = this.createTicket();
  public currentNum: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public numbersPack: number[];

  constructor() {
    this.numbersPack = this.generateNumberPack();
    this.currentNum.next(this.getNumber());
  }

  public startNumberGeneration() {
    let changeTime: number = 10;
    switch (this.difficultyLevel) {
      case 1:
        changeTime = 10;
        break;
      case 2:
        changeTime = 7;
        break;
      case 3:
        changeTime = 5;
        break;
    }
    setInterval(() => {
      this.currentNum.next(this.getNumber());
    }, 1000 * changeTime);
  }

  private createTicket() {
    return new Ticket();
  }

  private getNumber() {
    return this.ticket.getRandomNumberFromPack(this.numbersPack);
  }

  private generateNumberPack() {
    const pack: number[] = [];
    for (let i = 1; i <= 90; i++) {
      pack.push(i);
    }
    return pack;
  }
}

class Ticket extends Array {
  constructor() {
    super();
    this.fillTicket();
  }

  private arrayOfNumbers = new NumbersArray();

  fillTicket() {
    this.push(this.createRow(), this.createRow(), this.createRow());
  }

  createRow() {
    const row: ITicketElement[] | null[] = [];
    let maxEmpty = 4;
    let numbersCountInRow = 0;
    for (let k = 0; k < 9; k++) {
      const currentColArray = this.arrayOfNumbers[k];
      if (k === 4) {
        if (!this.checkFourPreviousIsNotEmpty(row, k)) {
          if (
            this.checkThreePreviousIsEmpty(row, k) ||
            this.checkRandomChance()
          ) {
            this.fillCurrentBoxAndChangeArray(row, k, currentColArray);
            numbersCountInRow++;
            continue;
          }
        }
        this.leaveBlank(row, k);
        maxEmpty--;
        continue;
      }
      if (numbersCountInRow >= 5) {
        this.leaveBlank(row, k);
        maxEmpty--;
        continue;
      }
      if (numbersCountInRow < 5) {
        if (
          this.checkRandomChance() ||
          maxEmpty === 0 ||
          this.checkThreePreviousIsEmpty(row, k)
        ) {
          this.fillCurrentBoxAndChangeArray(row, k, currentColArray);
          numbersCountInRow++;
        } else {
          this.leaveBlank(row, k);
          maxEmpty--;
        }
      }
    }
    return row;
  }

  checkRandomChance() {
    const randomFilling: boolean = Boolean(Math.round(Math.random()));
    return randomFilling;
  }

  checkThreePreviousIsEmpty(array: ITicketElement[] | null[], index: number) {
    const isThreePreviousEmpty =
      !array[index - 3] && !array[index - 2] && !array[index - 1];
    return isThreePreviousEmpty;
  }

  checkFourPreviousIsNotEmpty(array: ITicketElement[] | null[], index: number) {
    const isFourPreviousIsNotEmpty =
      array[index - 1] &&
      array[index - 3] &&
      array[index - 2] &&
      array[index - 4];
    return isFourPreviousIsNotEmpty ? true : false;
  }

  fillCurrentBoxAndChangeArray(
    array: ITicketElement[] | null[],
    index: number,
    arrayOfColumnNumbers: number[]
  ) {
    const number = this.getRandomNumberFromPack(arrayOfColumnNumbers);
    const numIndex = arrayOfColumnNumbers.findIndex((num) => num === number);
    arrayOfColumnNumbers.splice(numIndex, 1);
    array[index] = { number, checked: false };
    return number;
  }

  leaveBlank(array: ITicketElement[] | null[], index: number) {
    array[index] = null;
  }

  getRandomNumberFromPack(pack: number[]) {
    const randomIndex = Math.floor(Math.random() * pack.length);
    const currentNum = pack[randomIndex];
    pack.splice(randomIndex, 1);
    return currentNum;
  }
}

class NumbersArray extends Array {
  constructor() {
    super();
    this.generateArray();
  }

  private generateArray() {
    for (let i = 0; i < 9; i++) {
      this[i] = [];
      for (let k = 0; k <= 9; k++) {
        const number = k + i * 10;
        number && this[i].push(number);
      }
    }
  }
}
