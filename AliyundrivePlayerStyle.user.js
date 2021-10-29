// ==UserScript==
// @name         AliyundrivePlayerStyle
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Aliyundrive Player Style
// @author       JackieZheng
// @match        *://www.aliyundrive.com/drive/folder/*
// @icon         https://gw.alicdn.com/imgextra/i3/O1CN01aj9rdD1GS0E8io11t_!!6000000000620-73-tps-16-16.ico
// @grant    GM_addStyle
// ==/UserScript==

GM_addStyle(".video-previewer,.video-previewer--1vo5c,.header,.header--2Vw8Y{padding: 10px !important;background: #000000;}");
GM_addStyle(".video-player,.video-player--29_72{bottom: 0px !important;left: unset !important; -webkit-transform: unset !important;  transform: unset !important;}");
GM_addStyle(".icon,.icon--d-ejA,.icon--d-ejA[data-render-as=svg] svg,.nav-text,.nav-text--2o_Eh,.filename,.filename--zkxdz,.nav-actions--3xj7P{fill:#aaaaaa61 !important;color:#aaaaaa61;}");
GM_addStyle(".toolbar-wrapper[data-visible=true],.toolbar-wrapper--1NDow[data-visible=true] {opacity: .4 !important;}");
GM_addStyle(".video-player.show,.video-player--29_72.show--Zy5bU {opacity: .4 !important;}");



(function() {
    'use strict';
})()
