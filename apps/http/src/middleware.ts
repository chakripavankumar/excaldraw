import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

export function middleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(403).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded !== "object" || !("userId" in decoded)) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    req.userId = Number(decoded.userId); // Store userId as a number
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
}
