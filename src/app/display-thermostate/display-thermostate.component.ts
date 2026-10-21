import { Component, input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-display-thermostate",
  imports: [],
  templateUrl: "./display-thermostate.component.html",
  styleUrl: "./display-thermostate.component.css",
  host: {
    "[class.warning]": "alarm",
  },
})
export class DisplayTemperatureComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["temperature"]) {
      this.alarm = changes["temperature"].currentValue > this.umbral;
    }
  }

  //inputs/outputs
  temperature = input.required<number>();
  umbral = input<number>(25);
  //propiedades
  alarm = false;
}
