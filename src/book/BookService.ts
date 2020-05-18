import { getCustomRepository } from 'typeorm';
import { BookRepository } from './BookRepository';
import { Book } from './Book';

class BookService {
	private repository: BookRepository;

	constructor() {
		this.repository = getCustomRepository(BookRepository);
	}

	async create(book: Book): Promise<Book> {
		return await this.repository.save(book);
	}

	async update(id: number, book: Book): Promise<Book> {
		const foundBook = await this.findOne(id);

		if (!foundBook)
			throw new Error('Book not found');

		await this.repository.update(id, book);

		return book;
	}

	async findOne(id: number): Promise<Book | undefined> {
		return await this.repository.findOne(id);
	}

	async findAll(): Promise<Book[]> {
		return await this.repository.find();
	}

	async remove(id: number): Promise<void> {
		await this.repository.delete(id);
	}
}

export default BookService;
