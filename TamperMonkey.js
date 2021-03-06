// ==UserScript==

// @name         Ultimate-GrepBot
// @author       AD
// @description  The Ultimate Bot for Grepolis

// @include      http://*.grepolis.com/game/*
// @include      https://*.grepolis.com/game/*
// @exclude      view-source://*
// @exclude      https://classic.grepolis.com/game/*

// @version      v5.1
// @grant        none

// ==/UserScript==
(function () {
    const
        script = document.createElement('script'),
        link = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];

    script.type = 'text/javascript';
    link.type = 'text/css';
    link.rel = 'stylesheet';

    script.src = 'https://cdn.jsdelivr.net/gh/AdrienRoux/Ultimate-GrepBot/GrepBot.js';
    link.href = 'https://cdn.jsdelivr.net/gh/AdrienRoux/Ultimate-GrepBot/GrepBotStyle.css';

    head.appendChild(script);
    head.appendChild(link);

    head.setAttribute('xhttps', 1);
})();
