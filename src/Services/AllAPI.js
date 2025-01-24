import { commonAPI } from "./commonApi";
import { serverurl } from "./serverUrl";

export const getMenu = async () => {
    return await commonAPI('get',`${serverurl}/getMenu`, '');
}

export const addMenus = async (reqbody) => {
    return await commonAPI('post',`${serverurl}/addMenu`, reqbody);
}
