import { Component } from '@angular/core';

@Component({
  selector: 'app-control-temperature',
  imports: [],
  templateUrl: './control-temperature.component.html',
  styleUrl: './control-temperature.component.css'
})
export class ControlTemperatureComponent {
  tempUpdate?: number;
  temperature = input.required<number>();
  temperatureOutput = output<number>();

  onClickIncTemp(){
    this.tempUpdate = (this.tempUpdate || 0) + 1;
    this.temperatureOutput.emit(this.tempUpdate);
  }

  onClickDecTemp(){
    this.tempUpdate = (this.tempUpdate || 0) - 1;
    this.temperatureOutput.emit(this.tempUpdate);
  }

  onInput(event: Event){
    let inputElement = event.target as HTMLInputElement;

    try{
      let umbral = Number(inputElement.value);
      console.log()
      this.umbralOutput.emit(umbral);
    } catch(error){
      inputElement.value = this.temperature().toString();
    }
}
