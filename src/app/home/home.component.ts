import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}
    
  gotoadd(pageName:string):void{
      console.log("something on console");
      this.router.navigate([`${pageName}`]);
      console.log("something on console");


    }


  gotoview(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  



  




}
