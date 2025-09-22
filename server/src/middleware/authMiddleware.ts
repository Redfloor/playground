import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthContext {
  isAuthenticated: boolean;
  user?: {
    id: number;
    username: string;
  };
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    req.authContext = { isAuthenticated: false };
    return next();
  }
  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'devsecret') as any;
    req.authContext = {
      isAuthenticated: true,
      user: {
        id: decoded.id,
        username: decoded.username
      }
    };
  } catch {
    req.authContext = { isAuthenticated: false };
  }
  next();
};

declare global {
  namespace Express {
    interface Request {
      authContext: AuthContext;
    }
  }
}

