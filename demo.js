// ==UserScript==
// @name         Auto Log
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Haibara
// @match        https://www.firebbs.cn/index.php
// @match        https://www.armbbs.cn/forum.php
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
        document.querySelector("#ls_cookietime").checked = true; //Auto Login
        document.querySelector(".fastlg_l button").click(); //class use "."

    }
    
})();