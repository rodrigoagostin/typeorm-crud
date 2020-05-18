import { Repository, EntityRepository } from 'typeorm';
import { Book } from './Book';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
}
