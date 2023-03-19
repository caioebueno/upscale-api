import { TParams } from "../../types/request";
type TExtractRouteParamsData = {
    pathTemplate: string;
    path: string;
};
declare const extractRouteParams: (data: TExtractRouteParamsData) => TParams;
export default extractRouteParams;
