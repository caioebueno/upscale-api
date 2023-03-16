import TRequest from "../../types/request";
import { Request } from 'express';
declare const parseRequest: (req: Request) => TRequest;
export default parseRequest;
