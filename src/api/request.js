/**
 * 模块请求函数
 */
import ajax from "./ajax";

export const login = (values) =>  ajax('/admin/adminLogin', values, 'POST');
export const loginOut = () =>  ajax('/loginOut', {}, 'GET');
