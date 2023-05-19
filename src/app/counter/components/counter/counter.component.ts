import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `

<p>
  Bienvenidos a angular {{counter}}
<br>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
</p>


  `,

})
export class CounterComponent{
  constructor() {
  }

  public counter: number = 10;

  increaseBy( value: number ):void{
      this.counter += value;
  }

  reset(): void{
    this.counter = 10;
  }
}

