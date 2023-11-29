import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {



  Expense_data: any = [];
  Date: any = [];
  Category: any =[];
  Description: any =[];

  remove(data: any, date_value:any , category_value: any){
    this.Expense_data.pop();
    this.Date.pop();
    this.Category.pop();
    this.Description.pop();
    

  }

  edit(data: any, date_value:any , category_value: any ){

    let x = prompt("enter amount: ")
    this.Expense_data[0].value = x;


  }



  onclick(data: any, date_value:any , category_value: any , Description: any){

    console.log(data);
    this.Expense_data.push(data.value);
    


    this.Date.push(date_value.value);

    this.Category.push(category_value.value);


    this.Description.push(Description.value);






    // console.log(document.getElementsByClassName('x').length);
    
    // console.log(this.Expense_data);
    // console.log(this.Expense_data);
  }


  // console.log(Expense_data);
  





  







}
