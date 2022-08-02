import { Component, Input, OnInit } from '@angular/core';
import { Cats } from '../app.component';
import { Control } from '../control.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  selected:string="all";
  size:string="10";
  @Input() breed!:Cats[];
  constructor(private readonly Control: Control) { }

  ngOnInit(): void {
  }

  changeBreed(event:any){
    this.Control.changeBreed(event.value);
  }

  changeLimit(event:any){
    this.Control.changeCounter(event.value);
  }
}
