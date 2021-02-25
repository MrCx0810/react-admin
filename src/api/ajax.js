/**
 * 请求模块
 */
import axios from "axios";
import {message} from "antd";

const instance = axios.create({
    baseURL: 'http://192.168.5.217:8061',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    timeout: 10000,
})


instance.interceptors.response.use(function (response) {
    if (response.data.code === '200') {
        if (response.data.token) {
            setToken(response.data.token);
        }else {
            return response.data;
        }
    }else if (response.data.code === '500') {
        message.error(response.data.msg)
    }else if (response.data.code === '401') {
        window.location.href = '/login'
    }
    return Promise.reject(response.data)
}, function (error) {
    return Promise.reject(error);
});

export default function ajax(url, data={}, type='GET'){
    if (type ==='GET') {
        return instance.get(url, {params: data})
    }else if (type === 'POST') {
        return instance.post(url, data)
    }
}

export function setToken(token) {
    instance.headers.token = token;
}
