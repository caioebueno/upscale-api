import TValidation from '../types/validation';
declare const findRoutePath: (unparsedPath: string, method: string) => Promise<{
    path: string;
    validations: TValidation[];
} | null>;
export default findRoutePath;
