import { Component } from '@angular/core';

@Component({
  selector: 'app-ifexample',
  templateUrl: './ifexample.component.html',
  styleUrl: './ifexample.component.css'
})
export class IfexampleComponent {
books: Book[]= [
  {title:' Secret ',genre:" selhelp"},
  {title:' power ',genre:" friction"},
  {title:' The Runner ',genre:" friction"}
]
  show:boolean=true;

  // n1:number=100;
  // n2:number=50;

  // addNumbers(){
  //     console.log(this.n1 + this.n2);
  
  // }


  n1: number = 100;
  n2: number = 50;
  sum: number = 0; // Add this property to store the sum

  // Method to calculate sum and store it in sum property
  calculateSum() {
    this.sum = this.n1 + this.n2;
  }

}

class Book{
  title:string='';
  genre: string =''
}

