import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const role = req.headers['x-user-role']; 
  if (role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }

  next();
};
