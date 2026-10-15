import { Component } from '@angular/core';

@Component({
  selector: 'app-display-thermostate',
  imports: [RouterOutlet],
  templateUrl: './display-thermostate.component.html',
  styleUrl: './display-thermostate.component.css'
})
export class DisplayThermostateComponent {
  ngOnChanges(changes:SimpleChanges): void {
    if (changes['temperature']) {
      this.alarm = changes['temperature'].currentValue > 30;
}
