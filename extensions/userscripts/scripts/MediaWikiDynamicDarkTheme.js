// ==UserScript==
// @name	   MediaWiki Dynamic Dark Theme
// @author	   pdpt (modded by Mateo)
// @version	   0.0.2
// @icon      	   https://wikipedia.org/favicon.ico
// @match          *://*.wiki*.org/*
// @match          *://wiki.*.org/*
// @match          *://*.wiki/*
// @match          *://*.wiktionary.org/*
// @grant          GM_getResourceText
// @run-at	   document-end
// @resource	   gadget-dark-mode https://en.wikipedia.org/w/index.php?title=MediaWiki:Gadget-dark-mode.css&action=raw&ctype=text/css
// @description    Makes MediaWiki-powered Wikis use a dark theme between 8pm & 6pm toronto time (Includes Wikipedia, Arch Wiki, etc)
// Original        https://greasyfork.org/en/scripts/497963-wikipedia-dark-2024-wikipedia-org
// ==/UserScript==

(function () {
    const theme = GM_getResourceText('gadget-dark-mode');

    const addStyle = function addStyle(s) {
        const style = document.createElement('style');
        style.innerHTML = s;
        document.documentElement.appendChild(style);
    };

    // Get the current time in Toronto
    const torontoTime = new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' });
    const currentHour = new Date(torontoTime).getHours();

    // Check if the current hour is between 20 (8 PM) and 6 (6 AM)
    if (currentHour >= 20 || currentHour < 6) {
        addStyle(theme);
    }
}());

