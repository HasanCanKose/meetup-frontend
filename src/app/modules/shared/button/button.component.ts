import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() buttonClick = new EventEmitter<void>();
  @Input() disabled;

  constructor() { }

  onClick(){
    if(this.disabled){
      return;
    }
    this.buttonClick.emit()
  }

  ngOnInit(): void {
  }

}
