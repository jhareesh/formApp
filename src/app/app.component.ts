import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';


  //defing an variables to assign to ngmodel 
  name1:any
  phone1:any
  email1:any
  //definig an function to give in (ngSubmit)="fun(userform.value)" for the form
  fun(data:any)
  {
    console.log(data)
    console.log(this.name1)
    console.log(this.phone1)
    console.log(this.email1)
    //displays the results in the console
  }
}