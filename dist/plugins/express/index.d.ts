import { NextFunction, Request, Response } from 'express';
declare const verifyExpressInformation: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default verifyExpressInformation;
