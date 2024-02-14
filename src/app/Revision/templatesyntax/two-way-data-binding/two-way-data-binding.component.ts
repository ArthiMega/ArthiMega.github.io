import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PowerCalculationPipe } from '../../pipes/power-calculation.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css'],
  imports: [PowerCalculationPipe, FormsModule]
})
export class TwoWayDataBindingComponent {

  @Input() size!: number|string;
  @Output() sizeChange = new EventEmitter<number>();
  power!:number;
  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
