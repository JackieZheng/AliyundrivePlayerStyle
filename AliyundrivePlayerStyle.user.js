// ==UserScript==
// @name         AliyundrivePlayerStyle
// @version      0.9
// @description  Aliyundrive Player Style
// @author       JackieZheng
// @match        *://www.aliyundrive.com/drive/*
// @icon         https://gw.alicdn.com/imgextra/i3/O1CN01aj9rdD1GS0E8io11t_!!6000000000620-73-tps-16-16.ico
// @namespace    https://greasyfork.org/en/scripts/434611
// @supportURL   https://github.com/JackieZheng/AliyundrivePlayerStyle/issues
// @grant    GM_addStyle
// ==/UserScript==

GM_addStyle(".video-previewer,.video-previewer--1vo5c,.header,.header--2Vw8Y{padding: 10px !important;background: #000000;}");
GM_addStyle(".video-player,.video-player--29_72{bottom: 0px !important;left: unset !important; -webkit-transform: unset !important;  transform: unset !important;}");
GM_addStyle(".icon,.icon--d-ejA,.icon--d-ejA[data-render-as=svg] svg,.nav-text,.nav-text--2o_Eh,.filename,.filename--zkxdz,.nav-actions--3xj7P{fill:#aaaaaa61 !important;color:#aaaaaa61;}");
GM_addStyle(".toolbar-wrapper[data-visible=true],.toolbar-wrapper--1NDow[data-visible=true] {opacity: .4 !important;height: 50px;overflow: hidden;}");
GM_addStyle(".video-player.show,.video-player--29_72.show--Zy5bU {opacity: .4 !important;width: 100%;}");
GM_addStyle(".toolbar-wrapper[data-visible=true]:hover,.toolbar-wrapper--1NDow[data-visible=true]:hover {opacity: 1 !important;height: auto;}");
GM_addStyle("video{top:60px !important;height:calc( 100% - 60px ) !important;}");
GM_addStyle(".video-stage.video,.video-stage.thumbnail,.video-stage--3LCB4.video--26SLZ,.video-stage--3LCB4.thumbnail--2T1JI{top:60px !important;height:calc( 100% - 60px ) !important;}");
GM_addStyle(".drawer-item,.drawer-item--2cNtQ,.drawer-item[data-is-current=true],.drawer-item--2cNtQ[data-is-current=true]{justify-content: center !important;}");


(function() {
    'use strict';
    setTimeout(getTitle, 2000 );
    window.addEventListener("hashchange", getTitle);
    document.body.addEventListener('click',getTitle, false);
    document.body.addEventListener('mousemove',getTitle, false);
    function getTitle(){
        var divLength=document.querySelectorAll("div[class^=breadcrumb-item-link]").length;
        if(divLength>0)
        {
            document.title=document.querySelectorAll("div[class^=breadcrumb-item-link]")[divLength-1].textContent;
        }
    }

})()
