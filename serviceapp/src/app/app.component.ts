import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serviceapp';

  books:Book[]=[];
  bookService;


  constructor(){
    this.bookService=new BookService;
  }

  getBooks(){
   this.books= this.bookService.getBooks();
  }
}
