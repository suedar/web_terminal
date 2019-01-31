/**
 * @file: Describe the file
 * @Author: suedar
 * @Date: 2019-01-30 16:38:36
 * @Last Modified by: suedar
 * @Last Modified time: 2019-01-31 13:49:02
 */

const $ = require('jQuery');
/**
 * 光标闪啊闪
 * @param {*} obj
 */
export function flash (obj) {
    if (obj) {
        setInterval(() => {
            obj.toggleClass('dark');
        },1000)
    }
}

/**
 * 键盘初始化 考虑一下要不要节流
 * @param {*} frozenFront
 * @param {*} insertDom
 */
export function initKeyBoard(frozenFront, insertDom) {
    $(document).keyup((event) => {
        let key = event.key;
        let keyCode = event.keyCode;
        let word = insertDom.text();

        if (keyCode >= 65 && keyCode <= 90 // 数字
            || keyCode >= 48 && keyCode <= 57 // 字母
            || keyCode >= 96 && keyCode <= 107 // 数字键上的数字
            || keyCode >= 109 && keyCode <= 111 // 数字键上的符号
            || keyCode >= 186 && keyCode <= 222) { // 符号
                insertDom.append(key);
            }
        else if (keyCode === 8) { // 删除
            insertDom.text(word.slice(0, -1));
        }
        else if (keyCode === 108 && keyCode === 13) { // enter
            
        }
    })
}
