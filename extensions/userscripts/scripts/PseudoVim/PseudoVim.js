// ==UserScript==
// @name           PseudoVim
// @description    Scrolling (h/j/k/l), half-page jumping (u/d), go to top/bottom (gg/G), and open current text box in actual Ghostty Vim (control + i).
// @icon           https://www.vim.org/images/vimlogo.svg
// @author         Mateo Grgic
// @version        0.05
// @match          *://*/*
// @namespace      Violentmonkey Scripts
// @grant          GM_xmlhttpRequest
// @connect        localhost
// @license        MIT
// ==/UserScript==

(function() {
    'use strict';

    const VIM_TOKEN = "YOUR KEY HERE";

    const VERTICAL_STEP = 80;
    const HORIZONTAL_STEP = 60;
    let lastKey = "";

    const isTyping = () => {
        const el = document.activeElement;
        return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable;
    };

    window.addEventListener('keydown', function(e) {
        const active = document.activeElement;
        const typing = isTyping();

        if (e.ctrlKey && e.key === 'i') {
            if (typing) {
                e.preventDefault();
                e.stopPropagation();

                const textToSend = active.isContentEditable ? active.innerText : active.value;

                GM_xmlhttpRequest({
                    method: "POST",
                    url: "http://localhost:10992",
                    data: textToSend,
                    timeout: 0,
                    headers: {
                        "Content-Type": "text/plain",
                        "X-Vim-Token": VIM_TOKEN
                    },
                    onload: function(response) {
                        if (response.status === 200) {
                            if (active.isContentEditable) {
                                active.innerText = response.responseText;
                            } else {
                                active.value = response.responseText;
                            }
                            active.dispatchEvent(new Event('input', { bubbles: true }));
                            active.dispatchEvent(new Event('change', { bubbles: true }));
                        } else {
                            alert("Security Error: " + response.responseText);
                        }
                    },
                    onerror: function() {
                        alert("Error: Python bridge not found.");
                    }
                });
            }
            return;
        }

        if (typing || e.ctrlKey || e.altKey || e.metaKey) return;
        const halfPage = window.innerHeight / 2;
        switch (e.key) {
            case 'j': window.scrollBy({ top: VERTICAL_STEP }); break;
            case 'k': window.scrollBy({ top: -VERTICAL_STEP }); break;
            case 'h': window.scrollBy({ left: -HORIZONTAL_STEP }); break;
            case 'l': window.scrollBy({ left: HORIZONTAL_STEP }); break;
            case 'd': window.scrollBy({ top: halfPage }); break;
            case 'u': window.scrollBy({ top: -halfPage }); break;
            case 'G': window.scrollTo({ top: document.documentElement.scrollHeight }); break;
            case 'g':
                if (lastKey === 'g') { window.scrollTo({ top: 0 }); lastKey = ""; }
                else { lastKey = 'g'; setTimeout(() => { lastKey = ""; }, 500); }
                break;
        }
    }, true);
})();
