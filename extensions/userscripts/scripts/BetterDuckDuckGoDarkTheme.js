// ==UserScript==
// @name          Better DuckDuckGo Dark Theme
// @description   Removes misc bloat, better dark theme by default
// @author        Mateo Grgic
// @version       0.1
// @match         *://*.duckduckgo.com/*
// @run-at        document-start
// @icon          https://duckduckgo.com/favicon.ico
// ==/UserScript==

var date = new Date();
date.setTime(date.getTime()+(100*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
document.cookie = "ae=d"+expires+"; path=/";
document.cookie = "psb=-1"+expires+"; path=/";
document.cookie = "kbj=1"+expires+"; path=/";
document.cookie = "aj=m"+expires+"; path=/";
document.cookie = "aq=-1"+expires+"; path=/";
document.cookie = "ao=-1"+expires+"; path=/";
document.cookie = "au=-1"+expires+"; path=/";
document.cookie = "ax=-1"+expires+"; path=/";
document.cookie = "ak=-1"+expires+"; path=/";
document.cookie = "1=-1"+expires+"; path=/";
document.cookie = "kac=-1"+expires+"; path=/";
document.cookie = "z=-1"+expires+"; path=/";
document.cookie = "be=0"+expires+"; path=/";
document.cookie = "bg=-1"+expires+"; path=/";
document.cookie = "bj=1"+expires+"; path=/";
document.cookie = "ap=-1"+expires+"; path=/";
