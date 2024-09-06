import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks(): Book[] {
    let books: Book[] = [
      new Book(180, 'The Secret', 600),
      new Book(101, 'The Power', 499),
      new Book(102, 'The Complete Java Reference', 799),
      new Book(183, 'The Good Samaritan', 300)
    ];

    return books; // Return the array of books
  }
}
