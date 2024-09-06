import { Component, OnChanges, Input, Injectable, Inject } from '@angular/core';

@Component({
  selector: 'app-myhello',
  templateUrl: './myhello.component.html',
  styleUrl: './myhello.component.css'
})
export class MyhelloComponent implements OnChanges{
     name=" alok"
     empId = '123'
     eName='Titan'
     counter:number=0

     ngOnInit(){
         this.counter++;
         console.log('onInit()')
     }
     ngOnChanges(changes : any){
      if (changes.name)
        this.counter++;
     }

     
}
