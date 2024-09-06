export class Book {
    bookId: number;
    title: string;
    price: number;
  
    constructor(bookId: number, title: string, price: number) {
      this.bookId = bookId;
      this.title = title;
      this.price = price; // Corrected assignment here
    }
  }
  