import { Component, Input, OnInit } from '@angular/core';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {


  @Input() inputFromAdd: any;
  

}
