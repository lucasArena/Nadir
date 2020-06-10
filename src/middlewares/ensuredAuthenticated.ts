import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from 'shared/errors/AppError';
import authConfig from '../config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensuredAuthenticated(
  request: Request,
  _: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token not provided', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.secret);
    const { sub } = decoded as ITokenPayload;
    request.user = { id: sub };
    return next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
