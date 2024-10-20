import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DiceComponent} from './components/dice/dice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
