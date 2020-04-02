import md5 from 'blueimp-md5';
import axios from 'axios';
import { DeviceConfigs } from "../configs";

export const domain = "https://api.xxxx.com/";

export const request = axios.create({
  baseURL: "",
  timeout: 15000
});

// 请求拦截器
request.interceptors.request.use((config) => {
  const _config = config;
  if (_config.url.indexOf("http") == -1) {
    _config.data.set("device_model", DeviceConfigs.deviceModel);
    _config.data.set("device_unique_id", DeviceConfigs.deviceUniqueId);
    _config.data.set("hot_update_version", 0);
    _config.data.set("device_system", DeviceConfigs.platform);
    _config.data.set("app_version", DeviceConfigs.appVersion);
  }
  return _config;
});

// 添加响应拦截器
request.interceptors.response.use((response) => {
  // 对响应数据做点什么
  if (response.config.url.indexOf(domain) > -1) {
    const _response = response.data || {};
    return _response;
  }
  return response.data || {};
}, (error) => {
  // 对响应错误做点什么
  if (error.request) {
    const { status, responseText } = error.request;
    // switch (status) {
    //   case 0:
    //     toast(responseText || `网络请求错误，状态码：${status}`);
    //     break;
    //   case 404:
    //     toast(`不存在该请求，状态码：${status}`);
    //     break;
    //   case 408:
    //     toast(`请求超时，状态码：${status}`);
    //     break;
    //   case 500:
    //     toast(`服务器内部错误，状态码：${status}`);
    //     break;
    //   case 509:
    //     toast(`服务器达到带宽限制，状态码：${status}`);
    //     break;
    //   case 598:
    //     toast(`网络读取超时，状态码：${status}`);
    //     break;
    //   case 599:
    //     toast(`网络连接超时，状态码：${status}`);
    //     break;
    // };
  }
  return error.response && error.response.data ? error.response.data : {};
});