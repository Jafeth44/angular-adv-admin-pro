import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrl: './incrementador.component.css',
})
export class IncrementadorComponent {
  @Input()
  public progress: number = 0;

  @Input()
  public btnClass: string = 'btn btn-primary';

  @Output()
  public progressOutlet = new EventEmitter<number>();

  public hanldeInputChange(value: string): void {
    const newValue = parseInt(value);
    if (!newValue) return;
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    }
    this.progress = newValue;
    this.progressOutlet.emit(this.progress);
  }

  public changeProgress(value: number): number {
    if (this.progress + value >= 100) {
      this.progressOutlet.emit(100);
      return (this.progress = 100);
    }
    if (this.progress + value <= 0) {
      this.progressOutlet.emit(0);
      return (this.progress = 0);
    }
    this.progressOutlet.emit((this.progress += value));
    return (this.progress += value);
  }
}
