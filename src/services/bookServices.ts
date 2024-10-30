import { BookRepository } from '../repositories/bookRepository';
import { isValidPrice, isValidTitle } from '../helpers/validationHelper';
import { Book } from '../models/bookModel';

export class BookServices {
    private bookRepository: BookRepository;

    constructor() {
        this.bookRepository = new BookRepository();
    }

    async getAllBooks(): Promise<Book[]> {
        return this.bookRepository.getAllBooks();
    }

    async addBook(title: string, author: string, price: number): Promise<Book> {
        if (!isValidTitle(title)) {
            throw new Error('O título deve ter pelo menos 3 caracteres.');
        }

        if (!isValidPrice(price)) {
            throw new Error('Preço deve ser maior que zero.');
        }

        const newBook = await this.bookRepository.addBook(title, author, price);
        return newBook;
    }
}
