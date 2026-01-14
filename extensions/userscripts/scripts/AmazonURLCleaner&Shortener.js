// ==UserScript==
// @name           Amazon URL Cleaner & Shortener
// @version        1.0.0
// @description    Combines two scripts: shortens product URLs to their canonical form and cleans tracking parameters from all links on the page.
// @author         Mateo
// @include        *.amazon.*/*
// @icon           https://www.amazon.com/favicon.ico
// @run-at         document-start
// @noframes
// @grant          GM_registerMenuCommand
// @grant          GM_getValue
// @grant          GM_setValue
// ==/UserScript==

(() => {
    'use strict';

    const doc = document;
    const pageHost = window.location.hostname;

    const commonParams = [
        'spm', 'mkt', 'src', 'from', 'source', 'alias', 'utm_id', 'utm_content',
        'utm_source', 'utm_medium', 'utm_sources', 'utm_term', 'utm_campaign',
        'utm_referrer', 'utm_keyword', 'ref', 'feature'
    ];
    const amaznParams = [
        'content-id', 'qid', 'crid', 'isAmazonFulfilled', 'sbo', 'plattr',
        'sprefix', 'ld', '_encoding', 'ie', 'ds'
    ];
    const amznParamsReg = new RegExp('_ref|^(utm_|ref|pd_rd_|pf_rd_|track|sc_)', 'i');
    const siteParams = commonParams.concat(amaznParams);


    function getAsin() {
        const asinId = doc.getElementById('ASIN');
        if (asinId && asinId.value && asinId.value.length === 10) {
            return asinId.value;
        }

        const links = doc.getElementsByTagName('link');
        for (let i = 0; i < links.length; i++) {
            if (links[i].rel === 'canonical') {
                const canonical = links[i].href;
                const match = canonical.match(/\/dp\/([A-Z0-9]{10})/);
                if (match && match[1]) {
                    return match[1];
                }
            }
        }
        return undefined;
    }

    function shortenProductUrl() {
        const asin = getAsin();
        if (asin) {
            const newPath = '/dp/' + asin + '/';
            if (window.location.pathname !== newPath || window.location.search !== '') {
                history.replaceState(null, '', newPath);
            }
        }
    }

    function cleanCurrentUrlParams() {
        if (window.location.search === '') return;

        const url = new URL(window.location.href);
        const params = url.searchParams;
        let paramsChanged = false;

        for (const k of Array.from(params.keys())) {
            if (siteParams.includes(k) || amznParamsReg.test(k)) {
                params.delete(k);
                paramsChanged = true;
            }
        }

        if (paramsChanged && url.href !== window.location.href) {
            window.history.replaceState({}, '', url.href);
        }
    }

    function cleanPageLinks() {
        const links = doc.querySelectorAll('a[href], area[href]');
        for (const link of links) {
            if (!link.hostname.includes('amazon.')) continue;

            try {
                const url = new URL(link.href);
                const params = url.searchParams;
                let paramsChanged = false;

                for (const k of Array.from(params.keys())) {
                    if (siteParams.includes(k) || amznParamsReg.test(k)) {
                        params.delete(k);
                        paramsChanged = true;
                    }
                }

                if (url.pathname.includes('/ref=')) {
                    url.pathname = url.pathname.substring(0, url.pathname.indexOf('/ref='));
                    paramsChanged = true;
                }

                if (paramsChanged && link.href !== url.href) {
                    link.href = url.href;
                }
            } catch (e) {
            }
        }
    }

    function runAllCleaning() {
        shortenProductUrl();
        cleanCurrentUrlParams();
        cleanPageLinks();
    }

    (() => {
        let oldPushState = history.pushState;
        history.pushState = function pushState(...args) {
            let ret = oldPushState.apply(this, args);
            window.dispatchEvent(new Event('urlchange'));
            return ret;
        };
        let oldReplaceState = history.replaceState;
        history.replaceState = function replaceState(...args) {
            let ret = oldReplaceState.apply(this, args);
            window.dispatchEvent(new Event('urlchange'));
            return ret;
        };
        window.addEventListener('popstate', () => {
            window.dispatchEvent(new Event('urlchange'));
        });
    })();

    function setupBuyboxObserver() {
        const buyboxParent = doc.getElementById('desktop_buybox');
        if (buyboxParent) {
            const mo = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    for (const node of mutation.addedNodes) {
                        if (node.id === "buybox") {
                            shortenProductUrl();
                            return;
                        }
                    }
                }
            });
            mo.observe(buyboxParent, { childList: true, subtree: true });
        }
    }

    function addCustomParam(inputParam) {
        if (/^[a-zA-Z0-9()[\]{}<>_-]*$/.test(inputParam)) {
            let list = GM_getValue(pageHost) || [];
            if (inputParam && !list.includes(inputParam)) {
                list.push(inputParam);
                GM_setValue(pageHost, list);
                if (!siteParams.includes(inputParam)) {
                    siteParams.push(inputParam);
                }
            }
        } else {
            alert('Invalid parameter format');
        }
    }

    function getCustomParams() {
        return GM_getValue(pageHost) || [];
    }

    function removeCustomAddedParam(inputParam) {
        let list = GM_getValue(pageHost) || [];
        if (list.includes(inputParam)) {
            list = list.filter((item) => item !== inputParam);
            GM_setValue(pageHost, list);
            alert(`Parameter "${inputParam}" removed.`);
        } else {
            alert('No such parameter found in your custom list.');
        }
    }

    function initialize() {
        const customParams = getCustomParams();
        customParams.forEach(p => {
            if (!siteParams.includes(p)) siteParams.push(p);
        });

        runAllCleaning();

        let timeout;
        const debouncedClean = () => {
            clearTimeout(timeout);
            timeout = setTimeout(runAllCleaning, 150);
        };

        window.addEventListener('urlchange', debouncedClean);

        const observer = new MutationObserver(debouncedClean);
        observer.observe(doc.body || doc.documentElement, { childList: true, subtree: true });

        setupBuyboxObserver();
    }

    if (doc.readyState === 'loading') {
        doc.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }

})();

