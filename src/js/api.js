/**
 * @file: Describe the file
 * @Author: suedar
 * @Date: 2019-01-29 16:04:57
 * @Last Modified by: suedar
 * @Last Modified time: 2019-01-31 13:48:48
 */

// 可能需要增加header信息
import axios from 'axios';

let server = '';

if (process.env.NODE_ENV === 'production') {
    // 部署服务调用正式地址
    // server = window.location.protocol + '//' + location.host + '/api'

} else {
    // 开发测试地址
    server = 'http://localhost:63342/php/';
}

export const getInitData = axios.get(server + 'getInitData.php');


// export {
//     server
// }