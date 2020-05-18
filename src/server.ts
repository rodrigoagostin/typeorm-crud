import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { createConnection } from 'typeorm';

import books from './book';

(async () => {
  try {
    const connection = await createConnection();
    await connection.synchronize();

    const app = express();
    app.use(helmet());
    app.use(cors());
    app.use(bodyParser.json());

    app.use('/books', books);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (e) {
    console.log('general server error', e);
    process.exit(0);
  }
})();
