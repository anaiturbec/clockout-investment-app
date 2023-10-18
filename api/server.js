import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { StockAggregates } from './routes/stocks.js';
import cors from 'cors';

async function initServer() {
  try {
    const app = express();
    app.use(cors({ origin: true, credentials: true }));
    dotenv.config({ path: './variables.env' });

    const PORT = Number(process.env.PORT);

    app.use(bodyParser.json());
    app.use('/stocks', StockAggregates);

    app.listen({ port: PORT }, () =>
      console.log(`Server started on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

initServer();
