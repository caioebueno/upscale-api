import TRequest from '../../types/request';
import { Request } from 'express';
declare const parseRequest: (req: Request) => Promise<TRequest | null>;
export default parseRequest;
