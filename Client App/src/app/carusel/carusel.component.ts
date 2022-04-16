import { Component, Input, OnInit } from '@angular/core';
import { Carusel } from '../models';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {

  constructor() { }
  @Input() images:Carusel[] = [];
  @Input() title:string = '';
  @Input() type:'landscape'|'portrait' = 'portrait';
  ngOnInit(): void {
  }

}
