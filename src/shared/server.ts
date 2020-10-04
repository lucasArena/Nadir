import 'reflect-metadata';
import cors from 'cors';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from '../routes';
import AppError from './errors/AppError';

import './database';
import './container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.status).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
      description: error.message,
    });
  },
);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
