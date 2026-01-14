// ==UserScript==
// @name          Better Redlib Dark Theme
// @description   Make the theme Redlib theme nicer
// @author        Mateo Grgic
// @version       0.4
// @match         *://redlib.cow.rip/*
// @match         *://redlib.catsarch.com/*
// @match         *://redlib.perennialte.ch/*
// @match         *://red.artemislena.eu/*
// @match         *://redlib.privacyredirect.com/*
// @match         *://redlib.nadeko.net/*
// @match         *://redlib.4o1x5.dev/*
// @match         *://redlib.frontendfriendly.xyz/*
// @match         *://redlib.reallyaweso.me/*
// @match         *://reddit.adminforge.de/*
// @match         *://reddit.rtrace.io/*
// @match         *://lr.ptr.moe/*
// @match         *://redlib.orangenet.cc/*
// @run-at        document-start
// @icon          https://raw.githubusercontent.com/redlib-org/redlib/refs/heads/main/static/apple-touch-icon.png
// ==/UserScript==

var date = new Date();
date.setTime(date.getTime() + (100 * 24 * 60 * 60 * 1000));
var expires = "; expires=" + date.toGMTString();
var attributes = expires + "; path=/" + "; SameSite=Lax" + "; Secure";
var themeCookies = [
    "autoplay_videos=off",
    "blur_nsfw=off",
    "blur_spoiler=off",
    "show_nsfw=on",
    "theme=icebergDark",
    "video_quality=medium"];
var currentCookies = document.cookie;
var isDarkThemeSet = currentCookies.indexOf("theme=icebergDark") !== -1;
var hasBeenRefreshed = currentCookies.indexOf("rl_theme_set=1") !== -1;
if (!isDarkThemeSet || !hasBeenRefreshed) {
    themeCookies.forEach(cookieValue => {
        document.cookie = cookieValue + attributes;});
    var tempDate = new Date();
    tempDate.setTime(tempDate.getTime() + (5 * 60 * 1000));
    var tempExpires = "; expires=" + tempDate.toGMTString();
    document.cookie = "rl_theme_set=1" + tempExpires + "; path=/; SameSite=Lax; Secure";
    window.location.reload();}

