// ==UserScript==
// @name         Auto Log
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Haibara
// @match        https://ntp.msn.cn/edge/ntp?locale=zh-CN&title=%E6%96%B0%E5%BB%BA%E6%A0%87%E7%AD%BE%E9%A1%B5&dsp=0&sp=%E5%BF%85%E5%BA%94
// @icon         https://www.google.com/s2/favicons?sz=64&domain=msn.cn
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(!document.querySelector("#ls_username"))//已经登录
    {
        return ;
    }
    else{

        document.querySelector("#ls_username").value = '普朗克小猫'; //your username
        document.querySelector("#ls_password").value = '5201314liang.'; //your password
        document.querySelector("ls_cookietime").checked = true; //Auto Login
        document.querySelector(".fastlg_l button").click(); //class use "."


    }
    
})();