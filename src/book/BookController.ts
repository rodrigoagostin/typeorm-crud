import { Request, Response } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import BookService from './BookService';

class BookController {
	static async create(req: Request, res: Response) {
		try {
			const book = await new BookService().create(req.body);
			res.status(OK).json(book);
		} catch (e) {
			console.log('error to create book', e);
			res.status(BAD_REQUEST).json({ error: e.message });
		}
	}

	static async update(req: Request, res: Response) {
		try {
			const id: number = parseInt(req.params.id);
			const book = await new BookService().update(id, req.body);
			res.status(OK).json(book);
		} catch (e) {
			console.log('error to update book', e);
			res.status(BAD_REQUEST).json({ error: e.message });
		}
	}

	static async findOne(req: Request, res: Response) {
		try {
			const id: number = parseInt(req.params.id);
			const book = await new BookService().findOne(id);
			res.status(OK).json(book);
		} catch (e) {
			console.log('error to find one book', e);
			res.status(BAD_REQUEST).json({ error: e.message });
		}
	}

	static async findAll(req: Request, res: Response) {
		try {
			const books = await new BookService().findAll();
			res.status(OK).json(books);
		} catch (e) {
			console.log('error to find all books', e);
			res.status(BAD_REQUEST).json({ error: e.message });
		}
	}

	static async remove(req: Request, res: Response) {
		try {
			const id: number = parseInt(req.params.id);
			await new BookService().remove(id);
			res.status(OK).end();
		} catch (e) {
			console.log('error to remove book', e);
			res.status(BAD_REQUEST).json({ error: e.message });
		}
	}
}

export default BookController;
