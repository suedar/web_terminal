/*
 * @file: Describe the file
 * @Author: suedar
 * @Date: 2019-01-29 16:06:53
 * @Last Modified by: suedar
 * @Last Modified time: 2019-01-31 13:49:14
 */
import * as api from './api';
import * as fn from './fn';

const $ = require('jQuery');
const _ = require('underscore');

// $.wait = function(duration, completeCallback, target) {
//     $target = $(target || '<queue />');
//     return $target.delay(duration).queue(function(next){completeCallback && completeCallback.call($target); next();});
//     }
// $.fn.wait = function(duration, callBack) {
//     return $.wait.call(this, duration, completeCallback, this);
//     setTimeout(callBack, duration);
// };

// after load
$(function(){
    let frontData = '';

    new Promise((resolve, reject) => {
        resolve(api.getInitData);
    }).then((res) => {
        let initData = res.data;
        // TODO: delay行为 逐行显示
        let content = $($("#content")[0]);
        let frozenFront = `${initData.hostname}&nbsp;:&nbsp;~&nbsp; ${initData.username}$ `;
        frontData = `<span class="blue">${initData.hostname}</span>&nbsp;:&nbsp;~&nbsp; <span class="yellow">${initData.username}$</span> `;
        content.append(`Last login: ${initData.lastDate}`)
            .append("<p>～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～</p>")
            .append("<p>～～～～～～～～～～～～hello～～～～～～ヽ(●´∀`●)ﾉ～～～～～～～～～～～～～</p>")
            .append(`<p>～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～</p>`)
            .append("<p>～～～～～～～～～～～～welcome to web_terminal～～～～～～～～～～～～</p>")
            .append("<p>～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～</p>")
            .append(`<p class='input'><span class="frontName">${frontData}</span>&nbsp;<span class="insert"></span><span class="code">&nbsp;</span></p>`);

        fn.flash($($('.code')[0]));
        fn.initKeyBoard(frozenFront, $($('.insert')[0]));
    })
});
