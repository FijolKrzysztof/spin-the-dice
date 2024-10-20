import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  standalone: true,
})
export class DiceComponent {

  @ViewChild('cube', {static: true})
  cubeElement!: ElementRef<HTMLDivElement>;

  rollDice() {
    const xRand = this.getRandomInt(0, 360);
    const yRand = this.getRandomInt(0, 360);
    this.cubeElement.nativeElement.style.transform = `translateZ(-100px) rotateX(${xRand}deg) rotateY(${yRand}deg)`;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
