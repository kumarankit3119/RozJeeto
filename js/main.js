! function e(t, a, n) {
    function o(i, r) {
        if (!a[i]) {
            if (!t[i]) {
                var s = "function" == typeof require && require;
                if (!r && s) return s(i, !0);
                if (c) return c(i, !0);
                var l = new Error("Cannot find module '" + i + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var p = a[i] = {
                exports: {}
            };
            t[i][0].call(p.exports, (function(e) {
                return o(t[i][1][e] || e)
            }), p, p.exports, e, t, a, n)
        }
        return a[i].exports
    }
    for (var c = "function" == typeof require && require, i = 0; i < n.length; i++) o(n[i]);
    return o
}({
    1: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
                value: !0
            }),
            function(e) {
                for (var t in e) a.hasOwnProperty(t) || (a[t] = e[t])
            }(e("./supported-locales.enum"))
    }, {
        "./supported-locales.enum": 2
    }],
    2: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
                value: !0
            }),
            function(e) {
                e.ENGLISH = "en", e.JAPANESE = "ja", e.KOREAN = "ko", e.CHINESE = "tw", e.VIETNAMESE = "vi", e.TURKISH = "tr", e.THAI = "th", e.RUSSIAN = "ru", e.PORTUGUESE = "pt-br", e.POLISH = "pl", e.ITALIAN = "it", e.FRENCH = "fr", e.SPANISH = "es", e.GERMAN = "de", e.ARABIC = "ar", e.CZECH = "cs", e.DUTCH = "nl", e.INDONESIAN = "id", e.MALAY = "ms"
            }(a.SupportedLocalesEnum || (a.SupportedLocalesEnum = {}))
    }, {}],
    3: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.environment = {
            name: "ENGG",
            appURL: "https://engg.game.tv",
            apiBaseURL: "/api-web/public/v1",
            tournamentsApiHost: "https://tournaments-dot-game-tv-engg.appspot.com/",
            tournamentTrackApiHost: "https://tournaments-dot-game-tv-engg.appspot.com",
            userProfileApiHost: "http://profiles.game-tv-prod.appspot.com",
            genrateSiteMap: !0,
            sitemapCdnUrl: "https://cdn.game.tv/game-tv-content/sitemap_engg",
            sitemapBucket: "gametv-website-sitemap-engg",
            gcloudStorageKey: "src/credentials/game-tv-engg.json",
            leaguesCDNPath: "https://cdn.game.tv/response-json",
            sponsorshipURL: "https://engg-sponsorship.game.tv/"
        }
    }, {}],
    4: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.environment = {
            name: "LOCAL",
            appURL: "https://www.game.tv",
            apiBaseURL: "/api-web/public/v1",
            tournamentsApiHost: "https://tournaments-dot-game-tv-prod.appspot.com",
            tournamentTrackApiHost: "https://tournaments-dot-game-tv-prod.appspot.com",
            userProfileApiHost: "http://profiles.game-tv-prod.appspot.com",
            genrateSiteMap: !0,
            sitemapBucket: "gametv-website-sitemap-local",
            gcloudStorageKey: "src/credentials/game-tv-engg.json",
            leaguesCDNPath: "https://cdn.game.tv/response-json",
            sponsorshipURL: "https://engg-sponsorship.game.tv/"
        }
    }, {}],
    5: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.environment = {
            name: "PROD",
            appURL: "https://www.game.tv",
            apiBaseURL: "/api-web/public/v1",
            tournamentsApiHost: "https://tournaments-dot-game-tv-prod.appspot.com",
            tournamentTrackApiHost: "https://tournaments-dot-game-tv-prod.appspot.com",
            userProfileApiHost: "http://profiles.game-tv-prod.appspot.com",
            genrateSiteMap: !1,
            sitemapCdnUrl: "https://cdn.game.tv/game-tv-content/sitemap_prod",
            sitemapBucket: "gametv-website-sitemap-prod",
            gcloudStorageKey: "src/credentials/game-tv-prod.json",
            leaguesCDNPath: "https://cdn.game.tv/response-json",
            alertRecipients: ["website-engg@bluestacks.com"],
            sponsorshipURL: "https://sponsorship.game.tv/"
        }
    }, {}],
    6: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.environment = {
            name: "QA",
            appURL: "https://qa-lt.game.tv",
            apiBaseURL: "/api-web/public/v1",
            tournamentsApiHost: "https://tournaments-qa-dot-game-tv-engg.appspot.com",
            tournamentTrackApiHost: "https://tournaments-qa-dot-game-tv-engg.appspot.com",
            userProfileApiHost: "http://profiles.game-tv-prod.appspot.com",
            genrateSiteMap: !0,
            sitemapCdnUrl: "https://cdn.game.tv/game-tv-content/sitemap_qa",
            sitemapBucket: "gametv-website-sitemap-qa",
            gcloudStorageKey: "src/credentials/game-tv-engg.json",
            leaguesCDNPath: "https://cdn.game.tv/qa/response-json",
            sponsorshipURL: "https://engg-sponsorship.game.tv/"
        }
    }, {}],
    7: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.environment = {
            name: "QA2",
            appURL: "https://qa2-nrp.game.tv",
            apiBaseURL: "/api-web/public/v1",
            tournamentsApiHost: "https://tournaments-qa2-dot-game-tv-engg.appspot.com",
            tournamentTrackApiHost: "https://tournaments-dot-game-tv-engg.appspot.com",
            userProfileApiHost: "http://profiles.game-tv-prod.appspot.com",
            genrateSiteMap: !0,
            sitemapCdnUrl: "https://cdn.game.tv/game-tv-content/sitemap_qa2",
            sitemapBucket: "gametv-website-sitemap-qa2",
            gcloudStorageKey: "src/credentials/game-tv-engg.json",
            leaguesCDNPath: "https://cdn.game.tv/qa/response-json",
            sponsorshipURL: "https://engg-sponsorship.game.tv/"
        }
    }, {}],
    8: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.environment = {
            name: "STAGING",
            appURL: "https://staging.game.tv",
            apiBaseURL: "/api-web/public/v1",
            tournamentsApiHost: "https://tournaments-dot-game-tv-prod.appspot.com",
            tournamentTrackApiHost: "https://tournaments-dot-game-tv-engg.appspot.com",
            userProfileApiHost: "http://profiles.game-tv-prod.appspot.com",
            genrateSiteMap: !1,
            sitemapCdnUrl: "https://cdn.game.tv/game-tv-content/sitemap_staging",
            sitemapBucket: "gametv-website-sitemap-staging",
            gcloudStorageKey: "src/credentials/game-tv-engg.json",
            leaguesCDNPath: "https://cdn.game.tv/staging/response-json",
            sponsorshipURL: "https://sponsorship.game.tv/"
        }
    }, {}],
    9: [function(e, t, a) {
        (function(t) {
            "use strict";
            let n;
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), n = "production" === t.env.ENVIRONMENT ? e("./environments.production") : "staging" === t.env.ENVIRONMENT ? e("./environments.staging") : "qa" === t.env.ENVIRONMENT ? e("./environments.qa") : "qa2" === t.env.ENVIRONMENT ? e("./environments.qa2") : "engg" === t.env.ENVIRONMENT ? e("./environments.engg") : e("./environments.local"), a.environments = n.environment
        }).call(this, e("_process"))
    }, {
        "./environments.engg": 3,
        "./environments.local": 4,
        "./environments.production": 5,
        "./environments.qa": 6,
        "./environments.qa2": 7,
        "./environments.staging": 8,
        _process: 77
    }],
    10: [function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const o = n(e("moment-timezone")),
            c = e("./../../../environments"),
            i = e("./constants"),
            r = c.environments.apiBaseURL;
        a.ApiService = class {
            constructor(e) {
                this.http = e
            }
            static async searchGame(e, t = 10, a = "en") {
                const n = await fetch(`${r}/games?q=${e.toLowerCase()}&limit=${t}&page=1&locale=${a}`);
                if (n.ok) {
                    return (await n.json()).data
                }
            }
            static async fetchData(e) {
                const {
                    limit: t,
                    slug: a,
                    geo: n,
                    status: c,
                    lang: i,
                    locale: s,
                    cursor: l,
                    game_id: p,
                    isCountRequired: m = !1,
                    page: d = 1,
                    isGamePage: u = !1
                } = e, M = r + "/tournaments", g = await fetch(`${M}?limit=${t}&geo=${n}&status=${c}&lang=${i}&locale=${s}&cursor=${l}&game_id=${p}&is_count_required=${m}&page=${d}&isGamePage=${u}`);
                if (g.ok) {
                    const e = await g.json();
                    return e && e.data && e.data.forEach(e => {
                        e.registrationEndDate = e.registrationEndDate ? o.default.unix(e.registrationEndDate).format() : "", e.registrationStartDate = e.registrationStartDate ? o.default.unix(e.registrationStartDate).format() : "", e.tournamentEndDate = e.tournamentEndDate ? o.default.unix(e.tournamentEndDate).format() : "", e.tournamentStartDate = e.tournamentStartDate ? o.default.unix(e.tournamentStartDate).format() : ""
                    }), e
                }
            }
            static getTimeZoneAbbr() {
                const e = o.default.tz.guess();
                let t = null;
                if (i.timeZoneObj[e]) t = i.timeZoneObj[e].abbr;
                else {
                    const a = (new Date).getTimezoneOffset();
                    t = o.default.tz.zone(e).abbr(a)
                }
                return t
            }
            static numberWithCommas(e) {
                if (e) return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            static getTournamentUrl(e, t) {
                let a = "";
                if (e) {
                    const t = e.split("/");
                    a = t[t.length - 1]
                }
                return t && "app" === t && (a = "app/" + a), a
            }
            static countryNameMap(e) {
                return i.countryMap[e] ? i.countryMap[e] : "Other"
            }
            static checkCountryExists(e) {
                let t = "",
                    a = "OT";
                return e && (t = e.slice(0, 2), a = i.countryMap[t] ? t.toUpperCase() : "OT"), a
            }
            static dateFormatWithTimeZone(e, t, a) {
                return a = a || "utc", o.default.tz(e, a).format(t)
            }
            static checkForRegistrationDate(e, t, a, n) {
                return a = a || "utc", o.default().unix() >= e ? n.fn(this) : n.inverse(this)
            }
            static checkRegDate(e, t, a) {
                a = a || "utc";
                o.default.tz(e, a).format(t);
                return (new Date).getTime() > new Date(e).getTime()
            }
            static getTimeZone(e) {
                let t = null;
                return t = i.timeZoneObj[e] ? i.timeZoneObj[e].abbr : o.default.tz(e).zoneAbbr() || "UTC", t
            }
            static async postEmailQuery(e) {
                const t = await fetch(r + "/contacts-developer", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: e
                    })
                });
                if (t.ok) {
                    return await t.json()
                }
            }
        }
    }, {
        "./../../../environments": 9,
        "./constants": 12,
        "moment-timezone": 74
    }],
    11: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../../enums"),
            o = e("./api-service");
        a.default = class {
            constructor(e) {
                this.countKeypress = 0, this.locationOfSearch = e || "", this.activeCls = "active", this.searchText = "", this.searchGameLink = "", this.suggestionListExist = !1, this.locale = n.SupportedLocalesEnum.ENGLISH, this.searchGame = this.searchGame.bind(this), this.removeSuggestionList = this.removeSuggestionList.bind(this), this.closeIconClickHandler = this.closeIconClickHandler.bind(this), this.init()
            }
            resetCounter(e) {
                this.countKeypress = e ? 1 : 0
            }
            moveCursorToEnd(e) {
                if ("number" == typeof e.selectionStart) e.selectionStart = e.selectionEnd = e.value.length;
                else if (void 0 !== e.createTextRange) {
                    e.focus();
                    const t = e.createTextRange();
                    t.collapse(!1), t.select()
                }
            }
            updateSearchText() {
                const e = `.js-search-${this.locationOfSearch} .js-search-box`;
                document.querySelector(e).value = this.searchText
            }
            searchGame(e) {
                const t = document.getElementsByTagName("html")[0].getAttribute("lang") || n.SupportedLocalesEnum.ENGLISH;
                let a = "";
                if (this.suggestionListExist) {
                    if (this.searchGameLink) a = this.searchGameLink;
                    else {
                        const e = `.js-search-${this.locationOfSearch} .js-search-box`;
                        a = `/${t}/${document.querySelector(e).value}`
                    }
                    a && (window.location.href = a)
                }
            }
            firstSuggestion() {
                const e = `.js-search-${this.locationOfSearch} .js-search-suggestion-list li`,
                    t = document.querySelectorAll(e);
                if (t && t.length) {
                    t[0].classList.add(this.activeCls);
                    const e = t[0].querySelector("a");
                    e && (this.searchText = e.innerText, this.searchGameLink = e.pathname, this.countKeypress++)
                }
            }
            addSearchResult(e) {
                const t = new DocumentFragment;
                let a = 0;
                if (e && e.length)
                    for (const o of e) {
                        const e = document.createElement("li"),
                            c = document.createElement("a");
                        e.setAttribute("id", "suggestion_" + a++);
                        let i = `/${this.locale.replace(/"/g,"")}/find-tournaments/${o.slug}`;
                        this.locale === n.SupportedLocalesEnum.ENGLISH && (i = "/find-tournaments/" + o.slug), c.setAttribute("href", i), c.appendChild(document.createTextNode(o.name)), e.appendChild(c), t.appendChild(e)
                    } else {
                        const e = document.createElement("li");
                        e.setAttribute("class", "no-result-found-item"), e.setAttribute("id", "suggestion_0"), e.appendChild(document.createTextNode("Game not found! Please search another game.")), t.appendChild(e)
                    }
                return t
            }
            removeSuggestionList() {
                let e = `.js-search-${this.locationOfSearch} .autocomplete-suggestions`;
                const t = document.querySelectorAll(e);
                t && t.length && t.forEach(t => {
                    if (t && t.classList.contains("open")) {
                        t.classList.remove("open"), e = ".suggestion-list";
                        const a = document.querySelector(e);
                        a.innerHTML = "";
                        let n = a.lastElementChild;
                        if (n)
                            for (; n;) a.removeChild(n), n = a.lastElementChild
                    }
                }), this.showCloseIconHeader(!1)
            }
            showCloseIconHeader(e) {
                const t = document.querySelector(".js-search-header");
                if (t && t.classList.contains("open") && window.screen.availWidth < 1025) {
                    const t = document.querySelector(".js-search-header .btn-close"),
                        a = document.querySelector(".js-search-header .btn-search");
                    e ? (t.classList.remove("hide"), a.classList.add("hide")) : (t.classList.add("hide"), a.classList.remove("hide"))
                }
            }
            closeIconClickHandler() {
                this.removeSuggestionList(), this.showCloseIconHeader(!1);
                const e = document.querySelector(".js-search-header .js-search-box");
                e && (e.value = "")
            }
            attachSearchEvents() {
                let e = `.js-search-${this.locationOfSearch} .js-search-box`;
                const t = `.js-search-${this.locationOfSearch} .js-search-suggestion-list`,
                    a = document.querySelector(e),
                    n = document.querySelector(t);
                if (a) {
                    a.addEventListener("input", async t => {
                        const a = t.target.value;
                        if (t.stopPropagation(), t.stopImmediatePropagation(), a || this.resetCounter(!1), a.length < 3) this.removeSuggestionList();
                        else {
                            const t = await o.ApiService.searchGame(a, 10, this.locale);
                            e = `.js-search-${this.locationOfSearch} .js-search-box`;
                            const n = document.querySelector(e);
                            if (this.suggestionListExist = !(!t || !t.length), n.value) {
                                e = `.js-search-${this.locationOfSearch} .autocomplete-suggestions .suggestion-list`, document.querySelector(e).innerHTML = "", e = `.js-search-${this.locationOfSearch} .autocomplete-suggestions`;
                                const a = document.querySelector(e);
                                a.classList.add("open"), e = `.js-search-${this.locationOfSearch} .suggestion-list`;
                                const n = document.querySelector(e),
                                    o = this.addSearchResult(t);
                                t && 0 === t.length && (a.classList.add("no-result-found"), this.showCloseIconHeader(!1)), n.appendChild(o), this.showCloseIconHeader(!0), this.firstSuggestion()
                            } else this.removeSuggestionList()
                        }
                    }), a.addEventListener("blur", e => {
                        this.resetCounter(!1)
                    }), a.addEventListener("keydown", e => {
                        const t = e.keyCode || e.which;
                        e.stopPropagation();
                        const a = `.js-search-${this.locationOfSearch} .js-search-suggestion-list li`,
                            n = document.querySelectorAll(a),
                            o = n ? n.length : 0;
                        if (n && n.length && (38 === t || 40 === t)) {
                            38 === t ? (e.preventDefault(), this.countKeypress--, this.countKeypress <= 0 && (this.countKeypress = o)) : (this.countKeypress++, this.countKeypress - 1 === o && this.resetCounter(!0)), n.forEach(e => {
                                e.classList.remove(this.activeCls)
                            }), n[this.countKeypress - 1].classList.add(this.activeCls);
                            const a = n[this.countKeypress - 1].querySelector("a");
                            a && (this.searchText = a.innerText, this.searchGameLink = a.pathname, this.updateSearchText());
                            const c = document.querySelector(`.js-search-${this.locationOfSearch} .js-search-suggestion-list`),
                                i = document.querySelector(`.js-search-${this.locationOfSearch} .js-search-suggestion-list li.active`);
                            c && i && (c.scrollTop = 0, c.scrollTop = i.offsetTop - c.offsetHeight + 15)
                        } else this.removeSuggestionList();
                        13 === t && this.searchGame(e)
                    });
                    const t = `.js-search-${this.locationOfSearch} .btn-search`;
                    document.querySelector(t) && document.querySelector(t).addEventListener("click", this.searchGame), document.addEventListener("click", this.removeSuggestionList)
                }
                t && n.addEventListener("mouseover", e => {
                    const t = e.target;
                    if (t && "A" === t.nodeName) {
                        this.resetCounter(!1);
                        const e = `.js-search-${this.locationOfSearch} .js-search-suggestion-list li`;
                        if (document.querySelectorAll(e).forEach(e => {
                                e.classList.remove(this.activeCls)
                            }), t.closest("li")) {
                            t.closest("li").classList.add("active");
                            const e = Array.prototype.slice.call(document.querySelector(`.js-search-${this.locationOfSearch} .js-search-suggestion-list`).children).indexOf(t.closest("li"));
                            this.searchText = t.innerText, this.searchGameLink = t.pathname, this.countKeypress = e + 1
                        }
                    }
                });
                const c = document.querySelector(".js-search-header .btn-close");
                c && c.addEventListener("click", this.closeIconClickHandler);
                const i = `.js-search-${this.locationOfSearch} .search-form`,
                    r = document.querySelector(i);
                r && r.addEventListener("click", e => {
                    e.stopImmediatePropagation(), e.stopPropagation()
                })
            }
            init() {
                this.locale = document.getElementsByTagName("html")[0].getAttribute("lang") || n.SupportedLocalesEnum.ENGLISH, this.attachSearchEvents()
            }
        }
    }, {
        "./../../../enums": 1,
        "./api-service": 10
    }],
    12: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.countryMap = {
            br: "Brazil",
            ca: "Canada",
            id: "Indonesia",
            fr: "France",
            de: "Germany",
            in: "India",
            it: "Italy",
            jp: "Japan",
            kr: "Korea",
            pl: "Poland",
            ru: "Russia",
            es: "Spain",
            se: "Sweden",
            tw: "Taiwan",
            th: "Thailand",
            tr: "Turkey",
            us: "USA",
            gb: "United Kingdom",
            vn: "Vietnam",
            ot: "Others",
            others: "Others"
        }, a.timeZoneObj = {
            "Etc/GMT+12": {
                value: "Dateline Standard Time",
                abbr: "DST"
            },
            "Etc/GMT+11": {
                value: "UTC-11",
                abbr: "U"
            },
            "Pacific/Midway": {
                value: "UTC-11",
                abbr: "U"
            },
            "Pacific/Niue": {
                value: "UTC-11",
                abbr: "U"
            },
            "Pacific/Pago_Pago": {
                value: "UTC-11",
                abbr: "U"
            },
            "Etc/GMT+10": {
                value: "Hawaiian Standard Time",
                abbr: "HST"
            },
            "Pacific/Honolulu": {
                value: "Hawaiian Standard Time",
                abbr: "HST"
            },
            "Pacific/Johnston": {
                value: "Hawaiian Standard Time",
                abbr: "HST"
            },
            "Pacific/Rarotonga": {
                value: "Hawaiian Standard Time",
                abbr: "HST"
            },
            "Pacific/Tahiti": {
                value: "Hawaiian Standard Time",
                abbr: "HST"
            },
            "America/Anchorage": {
                value: "Alaskan Standard Time",
                abbr: "AKDT"
            },
            "America/Juneau": {
                value: "Alaskan Standard Time",
                abbr: "AKDT"
            },
            "America/Nome": {
                value: "Alaskan Standard Time",
                abbr: "AKDT"
            },
            "America/Sitka": {
                value: "Alaskan Standard Time",
                abbr: "AKDT"
            },
            "America/Yakutat": {
                value: "Alaskan Standard Time",
                abbr: "AKDT"
            },
            "America/Santa_Isabel": {
                value: "Pacific Standard Time (Mexico)",
                abbr: "PDT"
            },
            "America/Dawson": {
                value: "Pacific Standard Time",
                abbr: "PST"
            },
            "America/Los_Angeles": {
                value: "Pacific Standard Time",
                abbr: "PST"
            },
            "America/Tijuana": {
                value: "Pacific Standard Time",
                abbr: "PST"
            },
            "America/Vancouver": {
                value: "Pacific Standard Time",
                abbr: "PST"
            },
            "America/Whitehorse": {
                value: "Pacific Standard Time",
                abbr: "PST"
            },
            "America/Creston": {
                value: "US Mountain Standard Time",
                abbr: "UMST"
            },
            "America/Dawson_Creek": {
                value: "US Mountain Standard Time",
                abbr: "UMST"
            },
            "America/Hermosillo": {
                value: "US Mountain Standard Time",
                abbr: "UMST"
            },
            "America/Phoenix": {
                value: "US Mountain Standard Time",
                abbr: "UMST"
            },
            "Etc/GMT+7": {
                value: "US Mountain Standard Time",
                abbr: "UMST"
            },
            "America/Chihuahua": {
                value: "Mountain Standard Time (Mexico)",
                abbr: "MDT"
            },
            "America/Mazatlan": {
                value: "Mountain Standard Time (Mexico)",
                abbr: "MDT"
            },
            "America/Boise": {
                value: "Mountain Standard Time",
                abbr: "MDT"
            },
            "America/Cambridge_Bay": {
                value: "Mountain Standard Time",
                abbr: "MDT"
            },
            "America/Denver": {
                value: "Mountain Standard Time",
                abbr: "MDT"
            },
            "America/Edmonton": {
                value: "Mountain Standard Time",
                abbr: "MDT"
            },
            "America/Inuvik": {
                value: "Mountain Standard Time",
                abbr: "MDT"
            },
            "America/Ojinaga": {
                value: "Mountain Standard Time",
                abbr: "MDT"
            },
            "America/Yellowknife": {
                value: "Mountain Standard Time",
                abbr: "MDT"
            },
            "America/Belize": {
                value: "Central America Standard Time",
                abbr: "CAST"
            },
            "America/Costa_Rica": {
                value: "Central America Standard Time",
                abbr: "CAST"
            },
            "America/El_Salvador": {
                value: "Central America Standard Time",
                abbr: "CAST"
            },
            "America/Guatemala": {
                value: "Central America Standard Time",
                abbr: "CAST"
            },
            "America/Managua": {
                value: "Central America Standard Time",
                abbr: "CAST"
            },
            "America/Tegucigalpa": {
                value: "Central America Standard Time",
                abbr: "CAST"
            },
            "Etc/GMT+6": {
                value: "Central America Standard Time",
                abbr: "CAST"
            },
            "Pacific/Galapagos": {
                value: "Central America Standard Time",
                abbr: "CAST"
            },
            "America/Chicago": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Indiana/Knox": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Indiana/Tell_City": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Matamoros": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Menominee": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/North_Dakota/Beulah": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/North_Dakota/Center": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/North_Dakota/New_Salem": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Rainy_River": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Rankin_Inlet": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Resolute": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Winnipeg": {
                value: "Central Standard Time",
                abbr: "CDT"
            },
            "America/Bahia_Banderas": {
                value: "Central Standard Time (Mexico)",
                abbr: "CDT"
            },
            "America/Cancun": {
                value: "Central Standard Time (Mexico)",
                abbr: "CDT"
            },
            "America/Merida": {
                value: "Central Standard Time (Mexico)",
                abbr: "CDT"
            },
            "America/Mexico_City": {
                value: "Central Standard Time (Mexico)",
                abbr: "CDT"
            },
            "America/Monterrey": {
                value: "Central Standard Time (Mexico)",
                abbr: "CDT"
            },
            "America/Regina": {
                value: "Canada Central Standard Time",
                abbr: "CCST"
            },
            "America/Swift_Current": {
                value: "Canada Central Standard Time",
                abbr: "CCST"
            },
            "America/Bogota": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Cayman": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Coral_Harbour": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Eirunepe": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Guayaquil": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Jamaica": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Lima": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Panama": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Rio_Branco": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "Etc/GMT+5": {
                value: "SA Pacific Standard Time",
                abbr: "SPST"
            },
            "America/Detroit": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Havana": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Indiana/Petersburg": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Indiana/Vincennes": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Indiana/Winamac": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Iqaluit": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Kentucky/Monticello": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Louisville": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Montreal": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Nassau": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/New_York": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Nipigon": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Pangnirtung": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Port-au-Prince": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Thunder_Bay": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Toronto": {
                value: "Eastern Standard Time",
                abbr: "EDT"
            },
            "America/Indiana/Marengo": {
                value: "US Eastern Standard Time",
                abbr: "UEDT"
            },
            "America/Indiana/Vevay": {
                value: "US Eastern Standard Time",
                abbr: "UEDT"
            },
            "America/Indianapolis": {
                value: "US Eastern Standard Time",
                abbr: "UEDT"
            },
            "America/Caracas": {
                value: "Venezuela Standard Time",
                abbr: "VST"
            },
            "America/Asuncion": {
                value: "Paraguay Standard Time",
                abbr: "PYT"
            },
            "America/Glace_Bay": {
                value: "Atlantic Standard Time",
                abbr: "ADT"
            },
            "America/Goose_Bay": {
                value: "Atlantic Standard Time",
                abbr: "ADT"
            },
            "America/Halifax": {
                value: "Atlantic Standard Time",
                abbr: "ADT"
            },
            "America/Moncton": {
                value: "Atlantic Standard Time",
                abbr: "ADT"
            },
            "America/Thule": {
                value: "Atlantic Standard Time",
                abbr: "ADT"
            },
            "Atlantic/Bermuda": {
                value: "Atlantic Standard Time",
                abbr: "ADT"
            },
            "America/Campo_Grande": {
                value: "Central Brazilian Standard Time",
                abbr: "CBST"
            },
            "America/Cuiaba": {
                value: "Central Brazilian Standard Time",
                abbr: "CBST"
            },
            "America/Anguilla": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Antigua": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Aruba": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Barbados": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Blanc-Sablon": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Boa_Vista": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Curacao": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Dominica": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Grand_Turk": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Grenada": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Guadeloupe": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Guyana": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Kralendijk": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/La_Paz": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Lower_Princes": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Manaus": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Marigot": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Martinique": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Montserrat": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Port_of_Spain": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Porto_Velho": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Puerto_Rico": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Santo_Domingo": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/St_Barthelemy": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/St_Kitts": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/St_Lucia": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/St_Thomas": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/St_Vincent": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Tortola": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "Etc/GMT+4": {
                value: "SA Western Standard Time",
                abbr: "SWST"
            },
            "America/Santiago": {
                value: "Pacific SA Standard Time",
                abbr: "PSST"
            },
            "Antarctica/Palmer": {
                value: "Pacific SA Standard Time",
                abbr: "PSST"
            },
            "America/St_Johns": {
                value: "Newfoundland Standard Time",
                abbr: "NDT"
            },
            "America/Sao_Paulo": {
                value: "E. South America Standard Time",
                abbr: "ESAST"
            },
            "America/Argentina/La_Rioja": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Argentina/Rio_Gallegos": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Argentina/Salta": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Argentina/San_Juan": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Argentina/San_Luis": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Argentina/Tucuman": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Argentina/Ushuaia": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Buenos_Aires": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Catamarca": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Cordoba": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Jujuy": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Mendoza": {
                value: "Argentina Standard Time",
                abbr: "AST"
            },
            "America/Araguaina": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "America/Belem": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "America/Cayenne": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "America/Fortaleza": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "America/Maceio": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "America/Paramaribo": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "America/Recife": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "America/Santarem": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "Antarctica/Rothera": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "Atlantic/Stanley": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "Etc/GMT+3": {
                value: "SA Eastern Standard Time",
                abbr: "SEST"
            },
            "America/Godthab": {
                value: "Greenland Standard Time",
                abbr: "GDT"
            },
            "America/Montevideo": {
                value: "Montevideo Standard Time",
                abbr: "MST"
            },
            "America/Bahia": {
                value: "Bahia Standard Time",
                abbr: "BST"
            },
            "America/Noronha": {
                value: "UTC-02",
                abbr: "U"
            },
            "Atlantic/South_Georgia": {
                value: "UTC-02",
                abbr: "U"
            },
            "Etc/GMT+2": {
                value: "UTC-02",
                abbr: "U"
            },
            "America/Scoresbysund": {
                value: "Azores Standard Time",
                abbr: "ADT"
            },
            "Atlantic/Azores": {
                value: "Azores Standard Time",
                abbr: "ADT"
            },
            "Atlantic/Cape_Verde": {
                value: "Cape Verde Standard Time",
                abbr: "CVST"
            },
            "Etc/GMT+1": {
                value: "Cape Verde Standard Time",
                abbr: "CVST"
            },
            "Africa/Casablanca": {
                value: "Morocco Standard Time",
                abbr: "MDT"
            },
            "Africa/El_Aaiun": {
                value: "Morocco Standard Time",
                abbr: "MDT"
            },
            "America/Danmarkshavn": {
                value: "UTC",
                abbr: "UTC"
            },
            "Etc/GMT": {
                value: "UTC",
                abbr: "UTC"
            },
            "Europe/Isle_of_Man": {
                value: "GMT Standard Time",
                abbr: "GMT"
            },
            "Europe/Guernsey": {
                value: "GMT Standard Time",
                abbr: "GMT"
            },
            "Europe/Jersey": {
                value: "GMT Standard Time",
                abbr: "GMT"
            },
            "Europe/London": {
                value: "GMT Standard Time",
                abbr: "GMT"
            },
            "Atlantic/Canary": {
                value: "GMT Standard Time",
                abbr: "GDT"
            },
            "Atlantic/Faeroe": {
                value: "GMT Standard Time",
                abbr: "GDT"
            },
            "Atlantic/Madeira": {
                value: "GMT Standard Time",
                abbr: "GDT"
            },
            "Europe/Dublin": {
                value: "GMT Standard Time",
                abbr: "GDT"
            },
            "Europe/Lisbon": {
                value: "GMT Standard Time",
                abbr: "GDT"
            },
            "Africa/Abidjan": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Accra": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Bamako": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Banjul": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Bissau": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Conakry": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Dakar": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Freetown": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Lome": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Monrovia": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Nouakchott": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Ouagadougou": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Africa/Sao_Tome": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Atlantic/Reykjavik": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Atlantic/St_Helena": {
                value: "Greenwich Standard Time",
                abbr: "GST"
            },
            "Arctic/Longyearbyen": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Amsterdam": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Andorra": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Berlin": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Busingen": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Gibraltar": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Luxembourg": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Malta": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Monaco": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Oslo": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Rome": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/San_Marino": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Stockholm": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Vaduz": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Vatican": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Vienna": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Zurich": {
                value: "W. Europe Standard Time",
                abbr: "WEDT"
            },
            "Europe/Belgrade": {
                value: "Central Europe Standard Time",
                abbr: "CEDT"
            },
            "Europe/Bratislava": {
                value: "Central Europe Standard Time",
                abbr: "CEDT"
            },
            "Europe/Budapest": {
                value: "Central Europe Standard Time",
                abbr: "CEDT"
            },
            "Europe/Ljubljana": {
                value: "Central Europe Standard Time",
                abbr: "CEDT"
            },
            "Europe/Podgorica": {
                value: "Central Europe Standard Time",
                abbr: "CEDT"
            },
            "Europe/Prague": {
                value: "Central Europe Standard Time",
                abbr: "CEDT"
            },
            "Europe/Tirane": {
                value: "Central Europe Standard Time",
                abbr: "CEDT"
            },
            "Africa/Ceuta": {
                value: "Romance Standard Time",
                abbr: "RDT"
            },
            "Europe/Brussels": {
                value: "Romance Standard Time",
                abbr: "RDT"
            },
            "Europe/Copenhagen": {
                value: "Romance Standard Time",
                abbr: "RDT"
            },
            "Europe/Madrid": {
                value: "Romance Standard Time",
                abbr: "RDT"
            },
            "Europe/Paris": {
                value: "Romance Standard Time",
                abbr: "RDT"
            },
            "Europe/Sarajevo": {
                value: "Central European Standard Time",
                abbr: "CEDT"
            },
            "Europe/Skopje": {
                value: "Central European Standard Time",
                abbr: "CEDT"
            },
            "Europe/Warsaw": {
                value: "Central European Standard Time",
                abbr: "CEDT"
            },
            "Europe/Zagreb": {
                value: "Central European Standard Time",
                abbr: "CEDT"
            },
            "Africa/Algiers": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Bangui": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Brazzaville": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Douala": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Kinshasa": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Lagos": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Libreville": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Luanda": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Malabo": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Ndjamena": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Niamey": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Porto-Novo": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Tunis": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Etc/GMT-1": {
                value: "W. Central Africa Standard Time",
                abbr: "WCAST"
            },
            "Africa/Windhoek": {
                value: "Namibia Standard Time",
                abbr: "NST"
            },
            "Asia/Nicosia": {
                value: "GTB Standard Time",
                abbr: "GDT"
            },
            "Europe/Athens": {
                value: "GTB Standard Time",
                abbr: "GDT"
            },
            "Europe/Bucharest": {
                value: "GTB Standard Time",
                abbr: "GDT"
            },
            "Europe/Chisinau": {
                value: "GTB Standard Time",
                abbr: "GDT"
            },
            "Asia/Beirut": {
                value: "Middle East Standard Time",
                abbr: "MEDT"
            },
            "Africa/Cairo": {
                value: "Egypt Standard Time",
                abbr: "EST"
            },
            "Asia/Damascus": {
                value: "Syria Standard Time",
                abbr: "SDT"
            },
            "Europe/Helsinki": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Kiev": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Mariehamn": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Nicosia": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Riga": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Sofia": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Tallinn": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Uzhgorod": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Vilnius": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Europe/Zaporozhye": {
                value: "E. Europe Standard Time",
                abbr: "EEDT"
            },
            "Africa/Blantyre": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Bujumbura": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Gaborone": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Harare": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Johannesburg": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Kigali": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Lubumbashi": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Lusaka": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Maputo": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Maseru": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Africa/Mbabane": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Etc/GMT-2": {
                value: "South Africa Standard Time",
                abbr: "SAST"
            },
            "Europe/Istanbul": {
                value: "Turkey Standard Time",
                abbr: "TDT"
            },
            "Asia/Jerusalem": {
                value: "Israel Standard Time",
                abbr: "JDT"
            },
            "Africa/Tripoli": {
                value: "Libya Standard Time",
                abbr: "LST"
            },
            "Asia/Amman": {
                value: "Jordan Standard Time",
                abbr: "JST"
            },
            "Asia/Baghdad": {
                value: "Arabic Standard Time",
                abbr: "AST"
            },
            "Europe/Kaliningrad": {
                value: "Kaliningrad Standard Time",
                abbr: "KST"
            },
            "Europe/Minsk": {
                value: "Kaliningrad Standard Time",
                abbr: "KST"
            },
            "Asia/Aden": {
                value: "Arab Standard Time",
                abbr: "AST"
            },
            "Asia/Bahrain": {
                value: "Arab Standard Time",
                abbr: "AST"
            },
            "Asia/Kuwait": {
                value: "Arab Standard Time",
                abbr: "AST"
            },
            "Asia/Qatar": {
                value: "Arab Standard Time",
                abbr: "AST"
            },
            "Asia/Riyadh": {
                value: "Arab Standard Time",
                abbr: "AST"
            },
            "Africa/Addis_Ababa": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Africa/Asmera": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Africa/Dar_es_Salaam": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Africa/Djibouti": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Africa/Juba": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Africa/Kampala": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Africa/Khartoum": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Africa/Mogadishu": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Africa/Nairobi": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Antarctica/Syowa": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Etc/GMT-3": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Indian/Antananarivo": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Indian/Comoro": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Indian/Mayotte": {
                value: "E. Africa Standard Time",
                abbr: "EAST"
            },
            "Europe/Kirov": {
                value: "Moscow Standard Time",
                abbr: "MSK"
            },
            "Europe/Moscow": {
                value: "Moscow Standard Time",
                abbr: "MSK"
            },
            "Europe/Simferopol": {
                value: "Moscow Standard Time",
                abbr: "MSK"
            },
            "Europe/Volgograd": {
                value: "Moscow Standard Time",
                abbr: "MSK"
            },
            "Europe/Astrakhan": {
                value: "Samara Time",
                abbr: "SAMT"
            },
            "Europe/Samara": {
                value: "Samara Time",
                abbr: "SAMT"
            },
            "Europe/Ulyanovsk": {
                value: "Samara Time",
                abbr: "SAMT"
            },
            "Asia/Tehran": {
                value: "Iran Standard Time",
                abbr: "IDT"
            },
            "Asia/Dubai": {
                value: "Arabian Standard Time",
                abbr: "AST"
            },
            "Asia/Muscat": {
                value: "Arabian Standard Time",
                abbr: "AST"
            },
            "Etc/GMT-4": {
                value: "Arabian Standard Time",
                abbr: "AST"
            },
            "Asia/Baku": {
                value: "Azerbaijan Standard Time",
                abbr: "ADT"
            },
            "Indian/Mahe": {
                value: "Mauritius Standard Time",
                abbr: "MST"
            },
            "Indian/Mauritius": {
                value: "Mauritius Standard Time",
                abbr: "MST"
            },
            "Indian/Reunion": {
                value: "Mauritius Standard Time",
                abbr: "MST"
            },
            "Asia/Tbilisi": {
                value: "Georgian Standard Time",
                abbr: "GET"
            },
            "Asia/Yerevan": {
                value: "Caucasus Standard Time",
                abbr: "CST"
            },
            "Asia/Kabul": {
                value: "Afghanistan Standard Time",
                abbr: "AST"
            },
            "Antarctica/Mawson": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Asia/Aqtau": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Asia/Aqtobe": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Asia/Ashgabat": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Asia/Dushanbe": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Asia/Oral": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Asia/Samarkand": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Asia/Tashkent": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Etc/GMT-5": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Indian/Kerguelen": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Indian/Maldives": {
                value: "West Asia Standard Time",
                abbr: "WAST"
            },
            "Asia/Yekaterinburg": {
                value: "Yekaterinburg Time",
                abbr: "YEKT"
            },
            "Asia/Karachi": {
                value: "Pakistan Standard Time",
                abbr: "PKT"
            },
            "Asia/Kolkata": {
                value: "India Standard Time",
                abbr: "IST"
            },
            "Asia/Colombo": {
                value: "Sri Lanka Standard Time",
                abbr: "SLST"
            },
            "Asia/Kathmandu": {
                value: "Nepal Standard Time",
                abbr: "NST"
            },
            "Antarctica/Vostok": {
                value: "Central Asia Standard Time",
                abbr: "CAST"
            },
            "Asia/Almaty": {
                value: "Central Asia Standard Time",
                abbr: "CAST"
            },
            "Asia/Bishkek": {
                value: "Central Asia Standard Time",
                abbr: "CAST"
            },
            "Asia/Qyzylorda": {
                value: "Central Asia Standard Time",
                abbr: "CAST"
            },
            "Asia/Urumqi": {
                value: "Central Asia Standard Time",
                abbr: "CAST"
            },
            "Etc/GMT-6": {
                value: "Central Asia Standard Time",
                abbr: "CAST"
            },
            "Indian/Chagos": {
                value: "Central Asia Standard Time",
                abbr: "CAST"
            },
            "Asia/Dhaka": {
                value: "Bangladesh Standard Time",
                abbr: "BST"
            },
            "Asia/Thimphu": {
                value: "Bangladesh Standard Time",
                abbr: "BST"
            },
            "Asia/Rangoon": {
                value: "Myanmar Standard Time",
                abbr: "MST"
            },
            "Indian/Cocos": {
                value: "Myanmar Standard Time",
                abbr: "MST"
            },
            "Antarctica/Davis": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Asia/Bangkok": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Asia/Hovd": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Asia/Jakarta": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Asia/Phnom_Penh": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Asia/Pontianak": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Asia/Saigon": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Asia/Vientiane": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Etc/GMT-7": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Indian/Christmas": {
                value: "SE Asia Standard Time",
                abbr: "SAST"
            },
            "Asia/Novokuznetsk": {
                value: "N. Central Asia Standard Time",
                abbr: "NCAST"
            },
            "Asia/Novosibirsk": {
                value: "N. Central Asia Standard Time",
                abbr: "NCAST"
            },
            "Asia/Omsk": {
                value: "N. Central Asia Standard Time",
                abbr: "NCAST"
            },
            "Asia/Hong_Kong": {
                value: "China Standard Time",
                abbr: "CST"
            },
            "Asia/Macau": {
                value: "China Standard Time",
                abbr: "CST"
            },
            "Asia/Shanghai": {
                value: "China Standard Time",
                abbr: "CST"
            },
            "Asia/Krasnoyarsk": {
                value: "North Asia Standard Time",
                abbr: "NAST"
            },
            "Asia/Brunei": {
                value: "Singapore Standard Time",
                abbr: "MPST"
            },
            "Asia/Kuala_Lumpur": {
                value: "Singapore Standard Time",
                abbr: "MPST"
            },
            "Asia/Kuching": {
                value: "Singapore Standard Time",
                abbr: "MPST"
            },
            "Asia/Makassar": {
                value: "Singapore Standard Time",
                abbr: "MPST"
            },
            "Asia/Manila": {
                value: "Singapore Standard Time",
                abbr: "MPST"
            },
            "Asia/Singapore": {
                value: "Singapore Standard Time",
                abbr: "MPST"
            },
            "Etc/GMT-8": {
                value: "Singapore Standard Time",
                abbr: "MPST"
            },
            "Antarctica/Casey": {
                value: "W. Australia Standard Time",
                abbr: "WAST"
            },
            "Australia/Perth": {
                value: "W. Australia Standard Time",
                abbr: "WAST"
            },
            "Asia/Taipei": {
                value: "Taipei Standard Time",
                abbr: "TST"
            },
            "Asia/Choibalsan": {
                value: "Ulaanbaatar Standard Time",
                abbr: "UST"
            },
            "Asia/Ulaanbaatar": {
                value: "Ulaanbaatar Standard Time",
                abbr: "UST"
            },
            "Asia/Irkutsk": {
                value: "North Asia East Standard Time",
                abbr: "NAEST"
            },
            "Asia/Dili": {
                value: "Japan Standard Time",
                abbr: "JST"
            },
            "Asia/Jayapura": {
                value: "Japan Standard Time",
                abbr: "JST"
            },
            "Asia/Tokyo": {
                value: "Japan Standard Time",
                abbr: "JST"
            },
            "Etc/GMT-9": {
                value: "Japan Standard Time",
                abbr: "JST"
            },
            "Pacific/Palau": {
                value: "Japan Standard Time",
                abbr: "JST"
            },
            "Asia/Pyongyang": {
                value: "Korea Standard Time",
                abbr: "KST"
            },
            "Asia/Seoul": {
                value: "Korea Standard Time",
                abbr: "KST"
            },
            "Australia/Adelaide": {
                value: "Cen. Australia Standard Time",
                abbr: "CAST"
            },
            "Australia/Broken_Hill": {
                value: "Cen. Australia Standard Time",
                abbr: "CAST"
            },
            "Australia/Darwin": {
                value: "AUS Central Standard Time",
                abbr: "ACST"
            },
            "Australia/Brisbane": {
                value: "E. Australia Standard Time",
                abbr: "EAST"
            },
            "Australia/Lindeman": {
                value: "E. Australia Standard Time",
                abbr: "EAST"
            },
            "Australia/Melbourne": {
                value: "AUS Eastern Standard Time",
                abbr: "AEST"
            },
            "Australia/Sydney": {
                value: "AUS Eastern Standard Time",
                abbr: "AEST"
            },
            "Antarctica/DumontDUrville": {
                value: "West Pacific Standard Time",
                abbr: "WPST"
            },
            "Etc/GMT-10": {
                value: "West Pacific Standard Time",
                abbr: "WPST"
            },
            "Pacific/Guam": {
                value: "West Pacific Standard Time",
                abbr: "WPST"
            },
            "Pacific/Port_Moresby": {
                value: "West Pacific Standard Time",
                abbr: "WPST"
            },
            "Pacific/Saipan": {
                value: "West Pacific Standard Time",
                abbr: "WPST"
            },
            "Pacific/Truk": {
                value: "West Pacific Standard Time",
                abbr: "WPST"
            },
            "Australia/Currie": {
                value: "Tasmania Standard Time",
                abbr: "TST"
            },
            "Australia/Hobart": {
                value: "Tasmania Standard Time",
                abbr: "TST"
            },
            "Asia/Chita": {
                value: "Yakutsk Standard Time",
                abbr: "YST"
            },
            "Asia/Khandyga": {
                value: "Yakutsk Standard Time",
                abbr: "YST"
            },
            "Asia/Yakutsk": {
                value: "Yakutsk Standard Time",
                abbr: "YST"
            },
            "Antarctica/Macquarie": {
                value: "Central Pacific Standard Time",
                abbr: "CPST"
            },
            "Etc/GMT-11": {
                value: "Central Pacific Standard Time",
                abbr: "CPST"
            },
            "Pacific/Efate": {
                value: "Central Pacific Standard Time",
                abbr: "CPST"
            },
            "Pacific/Guadalcanal": {
                value: "Central Pacific Standard Time",
                abbr: "CPST"
            },
            "Pacific/Kosrae": {
                value: "Central Pacific Standard Time",
                abbr: "CPST"
            },
            "Pacific/Noumea": {
                value: "Central Pacific Standard Time",
                abbr: "CPST"
            },
            "Pacific/Ponape": {
                value: "Central Pacific Standard Time",
                abbr: "CPST"
            },
            "Asia/Sakhalin": {
                value: "Vladivostok Standard Time",
                abbr: "VST"
            },
            "Asia/Ust-Nera": {
                value: "Vladivostok Standard Time",
                abbr: "VST"
            },
            "Asia/Vladivostok": {
                value: "Vladivostok Standard Time",
                abbr: "VST"
            },
            "Antarctica/McMurdo": {
                value: "New Zealand Standard Time",
                abbr: "NZST"
            },
            "Pacific/Auckland": {
                value: "New Zealand Standard Time",
                abbr: "NZST"
            },
            "Etc/GMT-12": {
                value: "UTC+12",
                abbr: "U"
            },
            "Pacific/Funafuti": {
                value: "UTC+12",
                abbr: "U"
            },
            "Pacific/Kwajalein": {
                value: "UTC+12",
                abbr: "U"
            },
            "Pacific/Majuro": {
                value: "UTC+12",
                abbr: "U"
            },
            "Pacific/Nauru": {
                value: "UTC+12",
                abbr: "U"
            },
            "Pacific/Tarawa": {
                value: "UTC+12",
                abbr: "U"
            },
            "Pacific/Wake": {
                value: "UTC+12",
                abbr: "U"
            },
            "Pacific/Wallis": {
                value: "UTC+12",
                abbr: "U"
            },
            "Pacific/Fiji": {
                value: "Fiji Standard Time",
                abbr: "FST"
            },
            "Asia/Anadyr": {
                value: "Magadan Standard Time",
                abbr: "MST"
            },
            "Asia/Kamchatka": {
                value: "Magadan Standard Time",
                abbr: "MST"
            },
            "Asia/Magadan": {
                value: "Magadan Standard Time",
                abbr: "MST"
            },
            "Asia/Srednekolymsk": {
                value: "Magadan Standard Time",
                abbr: "MST"
            },
            "Etc/GMT-13": {
                value: "Tonga Standard Time",
                abbr: "TST"
            },
            "Pacific/Enderbury": {
                value: "Tonga Standard Time",
                abbr: "TST"
            },
            "Pacific/Fakaofo": {
                value: "Tonga Standard Time",
                abbr: "TST"
            },
            "Pacific/Tongatapu": {
                value: "Tonga Standard Time",
                abbr: "TST"
            },
            "Pacific/Apia": {
                value: "Samoa Standard Time",
                abbr: "SST"
            }
        }
    }, {}],
    13: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.forEach = function(e, t) {
            Array.prototype.forEach.call(e, t)
        }
    }, {}],
    14: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        a.HowToJoinSection = class {
            static bindEvents() {
                const e = document.querySelectorAll(".step-item");
                e && e.length && e.forEach(e => {
                    e.addEventListener("click", () => {
                        const t = e.closest(".steps-list").querySelector(".active");
                        if (!e.classList.contains("active")) {
                            t.classList.remove("active");
                            const a = e.closest("li").querySelector(".step-image img").getAttribute("data-src");
                            e.closest(".steps-desc").querySelector(".steps-image-section img").setAttribute("src", a), e.classList.add("active")
                        }
                    })
                })
            }
        }
    }, {}],
    15: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./helpers");
        a.default = function() {
            const e = e => {
                    let a = e.getAttribute("data-src");
                    if (!a) return;
                    const n = new Image;
                    n.src = a, n.onload = t => {
                        e.setAttribute("src", a), e.addEventListener("load", (function() {
                            e && (e.classList.add("loadded"), e.classList.add("unblur"), e.classList.remove("lazy"))
                        }), !1)
                    }, n.onerror = o => {
                        const c = e.getAttribute("data-default");
                        if (c) {
                            const a = e.parentNode;
                            a && (a.classList.add("default-ele"), e.classList.remove("lazy"), e.classList.add("loadded"), e.classList.add("unblur"), a.setAttribute("data-icon", t(c)))
                        }
                        const i = e.getAttribute("data-fallback");
                        i && n.src !== i && (n.src = a = i)
                    }
                },
                t = e => {
                    const t = e.split(" ");
                    let a = "";
                    for (let e = 0; e < t.length; e++) t[e].length > 0 && "" !== t[e] && (a += t[e][0]);
                    return a
                },
                a = document.querySelectorAll(".lazy");
            if ("IntersectionObserver" in window) {
                const t = new IntersectionObserver(a => {
                    n.forEach(a, a => {
                        a.intersectionRatio > 0 && (t.unobserve(a.target), e(a.target))
                    })
                }, {
                    rootMargin: "50px 0px",
                    threshold: .1
                });
                n.forEach(a, e => t.observe(e))
            } else n.forEach(a, t => e(t))
        }
    }, {
        "./helpers": 13
    }],
    16: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./utils");
        a.MediaController = class {
            static bindScrollEvents() {
                const e = document.querySelectorAll("figure video");
                if (window.innerWidth < 768) window.addEventListener("scroll", () => {
                    for (const t of e) {
                        const e = t.currentTime > 0 && !t.paused && !t.ended;
                        n.Utils.isElementInViewport(t) && !e && (t.click(), t.play())
                    }
                });
                else
                    for (const t of e) t.addEventListener("mouseover", () => t.play()), t.closest("li") && t.closest("li").addEventListener("mouseover", () => t.play())
            }
        }
    }, {
        "./utils": 20
    }],
    17: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = function() {
            document.querySelectorAll(".menu-links > li a").forEach(e => {
                if (e.href === location.href) return e.classList.add("active")
            })
        }
    }, {}],
    18: [function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const o = e("../common/api-service"),
            c = e("./utils"),
            i = e("./../../../enums"),
            r = e("./../../../locales/home"),
            s = e("./../../../locales/game-details"),
            l = n(e("moment-timezone"));
        const p = new class {
            constructor() {
                if (this.url = window.location.href, this.pageNum = 2, this.nextCursor = "", this.limit = 12, this.locale = document.getElementsByTagName("html")[0].getAttribute("lang") || i.SupportedLocalesEnum.ENGLISH, this.url.includes("page")) {
                    const e = document.querySelector(".main-container");
                    this.pageNum = parseInt(e.dataset.page, 10) + 1
                }
                this.loadMoreData = this.loadMoreData.bind(this), this.saveFilter = this.saveFilter.bind(this), this.emptyStateViewAll = this.emptyStateViewAll.bind(this)
            }
            toggleDropDown(e) {
                const t = e.closest(".filter-item").querySelector(".filter-list");
                if (t.classList.contains("show-list")) t.classList.remove("show-list");
                else {
                    document.querySelectorAll(".filter-list").forEach(e => {
                        e.classList.contains("show-list") && e.classList.remove("show-list")
                    }), t.classList.add("show-list")
                }
            }
            closeAllDropdown() {
                document.querySelectorAll(".filter-list").forEach(e => {
                    e.classList.contains("show-list") && e.classList.remove("show-list")
                })
            }
            resetUrl() {
                const e = document.querySelector(".main-container").dataset.slug;
                let t = "/";
                const a = window.location.origin,
                    n = window.location.href.split(window.location.host)[1].split("/")[1];
                this.locale === n && (t = `${t}${this.locale}/`), e && (t = `${t}find-tournaments/${e}`), window.history.pushState(a, "reset url", t);
                const o = document.querySelector(".main-container");
                this.pageNum = 2, o.dataset.page = "1", o.dataset.cursor = this.nextCursor
            }
            toggleEmptyState(e = !1) {
                const t = document.querySelector(".empty-state"),
                    a = document.querySelector(".game-info-details");
                e ? (this.nextCursor = "", this.resetUrl(), t.classList.add("show"), a.classList.remove("show")) : (t.classList.remove("show"), a.classList.add("show"))
            }
            updatePageNumberInUrl(e) {
                const t = document.querySelector(".main-container"),
                    a = t.dataset.slug,
                    n = t.dataset.cursor;
                let o = "";
                const c = window.location.origin,
                    i = window.location.href.split(window.location.host)[1].split("/")[1];
                this.locale === i && (o = "/" + this.locale), a && (o = `${o}/find-tournaments/${a}`), o = `${o}?page=${e}&cursor=${n}`, window.history.pushState(c, "update url", o);
                const r = document.querySelector(".main-container");
                r.dataset.page = "" + e, r.dataset.cursor = this.nextCursor
            }
            updateView(e, t = !1) {
                const {
                    data: a,
                    metaData: n
                } = e, {
                    count: p,
                    isLastBatch: m
                } = n;
                if (t) {
                    const e = document.querySelector(".count-tournaments"),
                        t = p > 0 ? o.ApiService.numberWithCommas(p) : "";
                    e.innerText = t
                }
                const d = document.createDocumentFragment(),
                    u = document.querySelector("ul.tournaments-list");
                if (t) {
                    let e = u.lastElementChild;
                    for (; e;) u.removeChild(e), e = u.lastElementChild
                }
                if (p || a && a.length) this.toggleEmptyState(!1), a.forEach(e => {
                    const {
                        adminLocale: t,
                        esportsUrl: a,
                        gameFormat: n,
                        media: p,
                        game: m,
                        name: u,
                        platform: M,
                        tournamentStartDate: g,
                        primaryPkg: b,
                        geo: A,
                        registrationEndDate: h
                    } = e, z = "" + this.locale.replace(/"/g, "");
                    let f = "";
                    f = z === i.SupportedLocalesEnum.ENGLISH ? "/tournaments" : `/${z}/tournaments`;
                    const T = `${f}/${o.ApiService.getTournamentUrl(a,M)}`,
                        v = document.createElement("li");
                    v.className = "tournament-item hvr-float-shadow";
                    const L = document.createElement("div");
                    L.className = "game-wrapper";
                    const S = document.createElement("a");
                    if (m) {
                        let e = `/${this.locale.replace(/"/g,"")}/find-tournaments/${m.slug}`;
                        this.locale === i.SupportedLocalesEnum.ENGLISH && (e = "/find-tournaments/" + m.slug), S.href = m && "" + e
                    }
                    m.slug || S.setAttribute("class", "disabled");
                    const O = document.createElement("div");
                    O.className = "game-icon";
                    const N = document.createElement("img");
                    m && m.media && m.media.default && m.media.default.logoUrl && (N.src = m.media.default.logoUrl), N.className = "img-responsive", N.alt = m && m.name, O.append(N);
                    const q = document.createElement("span");
                    q.innerText = m && m.name, q.className = "game-name", S.append(O), S.append(q);
                    const W = document.createElement("div");
                    W.className = "country-flag";
                    const y = document.createElement("img");
                    y.className = "country-icon";
                    const w = o.ApiService.checkCountryExists(A);
                    y.src = `https://cdn.game.tv/locales/${w}.png`, y.alt = "country flag";
                    const E = document.createElement("p");
                    E.className = "country-name", E.innerText = c.Utils.sliceString(t, 0, 2), W.append(y), W.append(E), L.append(S), L.append(W);
                    const B = document.createElement("div");
                    B.className = "game-banner-wrapper";
                    const k = document.createElement("a");
                    k.dataset.eventname = "join_tournament_clicked", k.dataset.gameid = m.gameId, k.href = T, k.className = "btn-track-join-now game-banner";
                    const X = document.createElement("figure");
                    X.className = "tournament-image";
                    const C = document.createElement("img");
                    if (C.src = m.media.default.iconUrl, C.alt = u, C.classList.add("icon-image"), m.media.default.cardImageUrl) {
                        X.classList.add("banner-wrapper");
                        const e = document.createElement("img");
                        e.classList.add("banner-image"), e.src = m.media.default.cardImageUrl, e.alt = u, X.appendChild(e)
                    }
                    X.appendChild(C);
                    const _ = document.createElement("div");
                    _.className = "bg-gradient", k.appendChild(X), k.appendChild(_), B.appendChild(k);
                    const j = document.createElement("div");
                    j.className = "tournament-details";
                    const I = document.createElement("a");
                    I.dataset.eventname = "join_tournament_clicked", I.dataset.gameid = m.gameId, I.href = T, I.className = "btn-track-join-now";
                    const D = document.createElement("div");
                    D.className = "platform-details";
                    const P = document.createElement("p");
                    P.className = "platform";
                    let U = r.HomeLocales[this.locale];
                    document.querySelector(".main-container").dataset.slug && (U = s.GameDetailsLocales[this.locale]), P.innerText = U.platformStr;
                    const R = document.createElement("span");
                    R.className = "platform-icon " + M;
                    const G = document.createElement("p");
                    G.className = "discord-title", G.innerText = M;
                    const H = document.createElement("p");
                    if (H.className = "versus", n.length > 10) {
                        const e = `\n          <div class="tooltip">\n              <span class="shortened-text">${n}</span>\n              <span class="tooltiptext">${n}</span>\n          </div>`;
                        H.innerHTML = e
                    } else H.innerText = n;
                    D.appendChild(P), D.appendChild(R), D.appendChild(G), D.appendChild(H);
                    const x = document.createElement("h3");
                    x.className = "game-title", x.innerText = u;
                    const F = document.createElement("div");
                    F.className = "joining-info";
                    const V = document.createElement("div");
                    V.className = "joining-info-content";
                    const K = document.createElement("p");
                    K.className = "join-date";
                    const Y = o.ApiService.dateFormatWithTimeZone(g, "D MMM YYYY", l.default.tz.guess());
                    K.innerText = Y;
                    const J = document.createElement("p");
                    if (J.className = "join-time", J.innerText = `${o.ApiService.dateFormatWithTimeZone(g,"H:mm",l.default.tz.guess())} ${o.ApiService.getTimeZoneAbbr()}`, V.appendChild(K), V.appendChild(J), F.appendChild(V), !o.ApiService.checkRegDate(h, "D MMM YYYY", l.default.tz.guess())) {
                        const e = document.createElement("span");
                        e.className = "join-now", e.innerText = U.joinHeading, F.appendChild(e)
                    }
                    I.appendChild(D), I.appendChild(x), I.appendChild(F), j.appendChild(I), v.appendChild(L), v.appendChild(B), v.appendChild(j), d.appendChild(v)
                }), u.append(d);
                else {
                    const e = document.querySelectorAll(".tournaments-list li").length;
                    (!(m || p || e) || m && !e) && this.toggleEmptyState(!0)
                }
                const M = document.querySelector(".view-more");
                let g = M.href.split("?page=")[0];
                this.nextCursor && (g = `${g}?page=${this.pageNum}&cursor=${this.nextCursor}`), M.href = g;
                const b = this.pageNum - 1;
                let A = null;
                A = p && this.limit && b ? p === this.limit * b : m, A && M ? (M.classList.remove("show"), M.classList.add("hide")) : (M.classList.add("show"), M.classList.remove("hide"))
            }
            addFilterSearchEvent() {
                document.querySelectorAll(".select-btn").forEach(e => {
                    e.addEventListener("click", e => {
                        e.stopPropagation();
                        const t = e.target;
                        document.querySelector(".main-container").setAttribute("data-cursor", ""), this.nextCursor = "", this.toggleDropDown(t), this.pageNum = 2
                    })
                }), document.querySelectorAll(".filter-list").forEach(e => {
                    e.addEventListener("click", async e => {
                        e.stopPropagation();
                        const t = e.target;
                        this.toggleDropDown(t);
                        const a = t.closest("li"),
                            n = t.closest(".filter-item");
                        let c = t.innerText;
                        const i = n.querySelector("button");
                        if (i.dataset.geo) {
                            i.dataset.geo = a.dataset.geo, c = `<span class="selected-flag country-f-flag" style="background-image:url(https://cdn.game.tv/locales/${"all"===a.dataset.geo?"MAP":a.dataset.geo.toUpperCase()}.png);"></span> ${c}`
                        } else i.dataset.status ? i.dataset.status = a.dataset.status : i.dataset.lang && (i.dataset.lang = a.dataset.lang);
                        i.innerHTML = c;
                        const r = document.querySelector(".country-specific-btn"),
                            s = document.querySelector(".tournament-specific-btn"),
                            l = document.querySelector(".locale-specific-btn"),
                            p = r.dataset.geo.trim(),
                            m = s.dataset.status.trim(),
                            d = l.dataset.lang.trim(),
                            u = document.querySelector(".main-container"),
                            M = u.dataset.slug;
                        let g = "",
                            b = !1;
                        M && (g = u.dataset.gameid, b = !0);
                        const A = {
                                limit: 12,
                                slug: M,
                                geo: p,
                                status: m,
                                lang: d,
                                locale: this.locale,
                                cursor: "",
                                game_id: g,
                                isCountRequired: !0,
                                isGamePage: b
                            },
                            h = await o.ApiService.fetchData(A);
                        if (Object.keys(h).length > 0) {
                            this.nextCursor = h.metaData.cursor, !M && h && h.data && h.data.forEach(e => {
                                e.game.media.default.cardImageUrl || (e.game.media.default.cardImageUrl = e.game.media.default.bannerUrl)
                            }), this.resetUrl(), this.updateView(h, !0);
                            const e = document.querySelector(".no-next-page");
                            e.classList.contains("show") && (e.classList.remove("show"), e.classList.add("hide"))
                        }
                    })
                }), document.addEventListener("click", this.closeAllDropdown)
            }
            openTab(e) {
                let t, a;
                const n = e.target && e.target.dataset.tab;
                t = document.getElementsByClassName("tabcontent");
                for (const e of t) e.style.display = "none";
                a = document.getElementsByClassName("tablinks");
                for (const e of a) e.classList.contains("active") && e.classList.remove("active");
                document.getElementById(n).style.display = "block", e.currentTarget.classList.add("active")
            }
            showMobileFilterMenu() {
                const e = document.querySelector(".filters");
                e.classList.contains("show-filter") || e.classList.add("show-filter"), document.body.classList.add("active-overlay")
            }
            closeMobileFilterMenu() {
                document.body.classList.remove("active-overlay"), document.querySelector(".filters").classList.remove("show-filter")
            }
            selectMenuItem(e) {
                const t = e.target.closest("li"),
                    a = "selected-filter-" + (t.dataset.geo ? "geo" : t.dataset.status ? "status" : "lang");
                e.target.closest("ul").querySelectorAll("[class*=selected-filter-]").forEach(e => {
                    e.classList.remove(a)
                }), t.classList.contains(a) ? t.classList.remove(a) : t.classList.add(a)
            }
            scrollToTournamentSection() {
                const e = document.querySelector("section.tournaments");
                window.scrollTo({
                    top: e.offsetTop,
                    behavior: "smooth"
                })
            }
            async saveFilter() {
                const e = document.querySelectorAll("[class*=selected-filter-]");
                let t = "",
                    a = "",
                    n = "";
                e.forEach(e => {
                    const o = e.classList;
                    o.contains("selected-filter-geo") ? t = e.dataset.geo.trim() : o.contains("selected-filter-status") ? a = e.dataset.status.trim() : o.contains("selected-filter-lang") && (n = e.dataset.lang.trim())
                });
                const c = document.querySelector(".tournaments");
                window.scrollTo({
                    top: c.offsetTop,
                    behavior: "smooth"
                });
                const i = document.querySelector(".main-container"),
                    r = i.dataset.slug;
                let s = "",
                    l = !1;
                r && (s = i.dataset.gameid, l = !0);
                const p = {
                        limit: 12,
                        slug: r,
                        geo: t,
                        status: a,
                        lang: n,
                        locale: this.locale,
                        cursor: "",
                        game_id: s,
                        isCountRequired: !0,
                        isGamePage: l
                    },
                    m = await o.ApiService.fetchData(p);
                if (Object.keys(m).length > 0) {
                    this.resetUrl(), !r && m && m.data && m.data.forEach(e => {
                        e.game.media.default.cardImageUrl || (e.game.media.default.cardImageUrl = e.game.media.default.bannerUrl)
                    }), this.updateView(m, !0), this.closeMobileFilterMenu(), this.scrollToTournamentSection(), this.nextCursor = m.metaData.cursor;
                    const e = document.querySelector(".no-next-page");
                    e.classList.contains("show") && (e.classList.remove("show"), e.classList.add("hide"))
                }
            }
            resetMobileFilter() {
                document.querySelectorAll("[class*=selected-filter-]").forEach(e => {
                    const t = e.classList;
                    t.contains("selected-filter-geo") ? t.remove("selected-filter-geo") : t.contains("selected-filter-status") ? t.remove("selected-filter-status") : t.contains("selected-filter-lang") && t.remove("selected-filter-lang")
                })
            }
            addTabEventMobile() {
                document.querySelector(".filter-icon").addEventListener("click", this.showMobileFilterMenu), document.querySelectorAll(".tab button").forEach(e => {
                    e.addEventListener("click", this.openTab)
                }), document.querySelector(".close-filter").addEventListener("click", this.closeMobileFilterMenu);
                const e = document.getElementsByClassName("filter-list");
                for (const t of e) t.addEventListener("click", this.selectMenuItem);
                document.querySelector(".filter-save").addEventListener("click", this.saveFilter), document.querySelector(".filter-reset").addEventListener("click", this.resetMobileFilter)
            }
            async loadMoreData(e) {
                e.preventDefault();
                let t = "",
                    a = "",
                    n = "";
                if (window.innerWidth > 1025) {
                    const e = document.querySelector(".country-specific-btn"),
                        o = document.querySelector(".tournament-specific-btn"),
                        c = document.querySelector(".locale-specific-btn");
                    t = e.dataset.geo.trim(), a = o.dataset.status.trim(), n = c.dataset.lang.trim()
                } else {
                    document.querySelectorAll("[class*=selected-filter-]").forEach(e => {
                        const o = e.classList;
                        o.contains("selected-filter-geo") ? t = e.dataset.geo.trim() : o.contains("selected-filter-status") ? a = e.dataset.status.trim() : o.contains("selected-filter-lang") && (n = e.dataset.lang.trim())
                    })
                }
                document.querySelector(".loader").classList.remove("hide"), document.querySelector(".loader").classList.add("show"), e.target.classList.add("hide");
                const c = document.querySelector(".main-container"),
                    i = c.dataset.slug;
                let r = "",
                    s = !1;
                i && (r = c.dataset.gameid, s = !0);
                const l = c.dataset.cursor ? c.dataset.cursor : "",
                    p = {
                        limit: 12,
                        slug: i,
                        geo: t,
                        status: a,
                        lang: n,
                        locale: this.locale,
                        cursor: l,
                        game_id: r,
                        isCountRequired: !1,
                        page: this.pageNum,
                        isGamePage: s
                    },
                    m = await o.ApiService.fetchData(p);
                if (Object.keys(m).length > 0 && m.data && m.data.length > 0) {
                    this.nextCursor = m.metaData.cursor;
                    const t = document.querySelector(".view-more");
                    let a = t.href.split("?page=")[0];
                    this.nextCursor && (a = `${a}?page=${this.pageNum+1}&cursor=${this.nextCursor}`), t.href = a, document.querySelector(".loader").classList.remove("show"), document.querySelector(".loader").classList.add("hide"), e.target.classList.remove("hide"), this.pageNum++, !i && m && m.data && m.data.forEach(e => {
                        e.game.media.default.cardImageUrl || (e.game.media.default.cardImageUrl = e.game.media.default.bannerUrl)
                    }), this.updatePageNumberInUrl(this.pageNum - 1), this.updateView(m, !1)
                } else {
                    const e = document.querySelector(".no-next-page"),
                        t = m && m.metaData && m.metaData.isLastBatch,
                        a = document.querySelector(".loader");
                    a.classList.remove("show"), a.classList.add("hide"), t || null === t ? (e.classList.remove("hide"), e.classList.add("show")) : (e.classList.remove("show"), e.classList.add("hide"))
                }
            }
            pagination() {
                const e = document.querySelector(".view-more .view");
                e && e.addEventListener("click", this.loadMoreData)
            }
            addTimeZoneAbbr() {
                const e = document.querySelectorAll(".add-timezoneAbbr"),
                    t = o.ApiService.getTimeZoneAbbr();
                e.forEach(e => {
                    e.innerText = t
                })
            }
            updateTimeAndTimeZone() {
                const e = document.querySelectorAll(".joining-info"),
                    t = o.ApiService.getTimeZoneAbbr(),
                    a = l.default.tz.guess();
                e.forEach(e => {
                    const n = e.dataset.date;
                    if (n) {
                        const c = o.ApiService.dateFormatWithTimeZone(n, "D MMM YYYY", a),
                            i = o.ApiService.dateFormatWithTimeZone(n, "H:mm", a);
                        e.querySelector(".join-date").innerHTML = c, e.querySelector(".join-time").innerHTML = `${i} <span class="add-timezoneAbbr">${t}</span>`
                    }
                })
            }
            async emptyStateViewAll(e) {
                e.preventDefault();
                const t = document.querySelector(".main-container"),
                    a = t.dataset.slug;
                let n = "",
                    c = !1;
                a && (n = t.dataset.gameid, c = !0);
                const i = {
                        limit: 12,
                        slug: a,
                        geo: "all",
                        status: "all",
                        lang: "all",
                        locale: this.locale,
                        cursor: "",
                        game_id: n,
                        isCountRequired: !0,
                        isGamePage: c
                    },
                    r = await o.ApiService.fetchData(i);
                if (Object.keys(r).length > 0)
                    if (r.metaData && r.metaData.count) {
                        this.nextCursor = r.metaData.cursor, !a && r && r.data && r.data.forEach(e => {
                            e.game.media.default.cardImageUrl || (e.game.media.default.cardImageUrl = e.game.media.default.bannerUrl)
                        }), this.resetUrl(), this.updateView(r, !0);
                        const e = document.querySelector(".no-next-page");
                        if (e.classList.contains("show") && (e.classList.remove("show"), e.classList.add("hide")), window.screen.width < 768) this.resetMobileFilter(), document.querySelector(".geo-list li[data-geo=all]").classList.add("selected-filter-geo"), document.querySelector(".status-list li[data-status=all]").classList.add("selected-filter-status"), document.querySelector(".lang-list li[data-lang=all]").classList.add("selected-filter-lang");
                        else {
                            const e = document.querySelector(".country-list li[data-geo=all]").innerHTML,
                                t = document.querySelector(".tournament-filter-list li[data-status=all]").innerHTML,
                                a = document.querySelector(".locale-list li[data-lang=all]").innerHTML,
                                n = document.querySelector(".country-specific-btn");
                            n.innerHTML = e, n.dataset.geo = "all";
                            const o = document.querySelector(".tournament-specific-btn");
                            o.innerHTML = t, o.dataset.status = "all";
                            const c = document.querySelector(".locale-specific-btn");
                            c.innerHTML = a, c.dataset.lang = "all"
                        }
                    } else {
                        let e = "/";
                        "en" !== this.locale && (e = "/" + this.locale), window.location.href = e
                    }
            }
            init() {
                window.screen.width < 768 ? this.addTabEventMobile() : this.addFilterSearchEvent(), this.updateTimeAndTimeZone(), this.pagination(), document.querySelector(".no-available-data") && document.querySelector(".no-available-data").addEventListener("click", this.emptyStateViewAll)
            }
        };
        a.default = p
    }, {
        "../common/api-service": 10,
        "./../../../enums": 1,
        "./../../../locales/game-details": 27,
        "./../../../locales/home": 45,
        "./utils": 20,
        "moment-timezone": 74
    }],
    19: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = new class {
            constructor() {
                this.modifyTournamentLink = this.modifyTournamentLink.bind(this), this.btnClickHandler = this.btnClickHandler.bind(this)
            }
            pageLoadEvent() {
                const e = decodeURIComponent(window.location.href.split(window.location.origin)[1]);
                let t = "",
                    a = "",
                    n = "",
                    o = "",
                    c = "",
                    i = "",
                    r = "";
                if (window.localStorage.getItem("web_user_id") ? r = window.localStorage.getItem("web_user_id") : (r = this.generateUserId(), r = this.removeStringQuotes(r), window.localStorage.setItem("web_user_id", r)), e) {
                    const e = new URLSearchParams(window.location.search);
                    e && (e.get("utm_campaign") || e.get("utm_medium") || e.get("utm_source") || e.get("utm_keyword") || e.get("gcl_id") || e.get("fb_id")) ? (t = e.get("utm_campaign"), a = e.get("utm_medium"), n = e.get("utm_source"), o = e.get("utm_keyword"), c = e.get("gcl_id"), i = e.get("fb_id")) : (t = window.sessionStorage.getItem("utm_campaign"), a = window.sessionStorage.getItem("utm_medium"), n = window.sessionStorage.getItem("utm_source"), o = window.sessionStorage.getItem("utm_keyword"), c = window.sessionStorage.getItem("gcl_id"), i = window.sessionStorage.getItem("fb_id"));
                    let s = "";
                    const l = {};
                    (t || a || n || o || c || i) && (s += t ? `utm_campaign=${t}&` : "", s += a ? `utm_medium=${a}&` : "", s += n ? `utm_source=${n}&` : "", s += o ? `utm_keyword=${o}&` : "", s += c ? `gcl_id=${c}&` : "", s += i ? `fb_id=${i}&` : "", t && (l.utmCampaign = t), a && (l.utmMedium = a), n && (l.utmSource = n), o && (l.utmKeyword = o), c && (l.gclId = c), i && (l.fbId = i)), l.webUserId = r, s += r ? "web_user_id=" + r : "";
                    let p = "https://tournaments-dot-game-tv-engg.appspot.com";
                    "production" === window.enviroment && (p = "https://tournaments-dot-game-tv-prod.appspot.com"), fetch(`${p}/tournament/api/ad_stats?${s}`, {
                        method: "POST"
                    }).then(e => {}).catch(e => {}), window.dataLayer = window.dataLayer || [], window.dataLayer.push(l)
                }
            }
            generateUserId() {
                let e = (new Date).getTime();
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, t => {
                    const a = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ("x" === t ? a : 3 & a | 8).toString(16)
                })
            }
            removeStringQuotes(e) {
                return e ? e.replace(/['"]+/g, "") : e
            }
            initialiseUserData() {
                const e = decodeURIComponent(window.location.href.split(window.location.origin)[1]);
                let t = "";
                if (window.localStorage.getItem("web_user_id") ? t = window.localStorage.getItem("web_user_id") : (t = this.generateUserId(), t = this.removeStringQuotes(t), window.localStorage.setItem("web_user_id", t)), e && e.includes("?")) {
                    let e = "",
                        t = "",
                        a = "",
                        n = "",
                        o = "",
                        c = "";
                    const i = new URLSearchParams(window.location.search);
                    e = i.get("utm_campaign"), t = i.get("utm_medium"), a = i.get("utm_source"), n = i.get("utm_keyword"), o = i.get("gcl_id"), c = i.get("fb_id"), e = this.removeStringQuotes(e), t = this.removeStringQuotes(t), a = this.removeStringQuotes(a), n = this.removeStringQuotes(n), o = this.removeStringQuotes(o), c = this.removeStringQuotes(c), e && window.sessionStorage.setItem("utm_campaign", e), t && window.sessionStorage.setItem("utm_medium", t), a && window.sessionStorage.setItem("utm_source", a), n && window.sessionStorage.setItem("utm_keyword", n), o && window.sessionStorage.setItem("gcl_id", o), c && window.sessionStorage.setItem("fb_id", c)
                }
            }
            getUserTrackInfo(e) {
                let t = "",
                    a = "",
                    n = "",
                    o = "",
                    c = "",
                    i = "",
                    r = "";
                t = window.sessionStorage.getItem("utm_campaign"), a = window.sessionStorage.getItem("utm_medium"), n = window.sessionStorage.getItem("utm_source"), o = window.sessionStorage.getItem("utm_keyword"), c = window.sessionStorage.getItem("gcl_id"), i = window.sessionStorage.getItem("fb_id"), r = window.localStorage.getItem("web_user_id");
                let s = "";
                return s += e ? "?" : "", !!(t || a || n || o || c || i) ? (s += t ? `utm_campaign=${t}&` : "", s += a ? `utm_medium=${a}&` : "", s += n ? `utm_source=${n}&` : "", s += o ? `utm_keyword=${o}&` : "", s += c ? `gcl_id=${c}&` : "", s += i ? `fb_id=${i}&` : "", s += r ? "web_user_id=" + r : "") : s += r ? "web_user_id=" + r : "", e && (s = encodeURIComponent(s)), s
            }
            btnClickHandler(e) {
                const t = e.target,
                    a = t.dataset && t.dataset.eventname,
                    n = t.dataset && t.dataset.gameid;
                this.sendDataLayerEvent(a, n)
            }
            sendDataLayerEvent(e, t = null) {
                window.dataLayer = window.dataLayer || [], e && t ? window.dataLayer.push({
                    event: e,
                    eventLabel: t
                }) : t || window.dataLayer.push({
                    event: e
                })
            }
            getJsonFromUrl(e) {
                e || (e = location.href);
                const t = e.indexOf("?");
                let a = e.indexOf("#");
                if (-1 === a && -1 === t) return {}; - 1 === a && (a = e.length);
                const n = -1 === t || a === t + 1 ? e.substring(a) : e.substring(t + 1, a),
                    o = {};
                return n.split("&").forEach(e => {
                    if (!e) return;
                    const t = (e = e.split("+").join(" ")).indexOf("=");
                    let a = t > -1 ? e.substr(0, t) : e;
                    const n = t > -1 ? decodeURIComponent(e.substr(t + 1)) : "",
                        c = a.indexOf("[");
                    if (-1 === c) o[decodeURIComponent(a)] = n;
                    else {
                        const e = a.indexOf("]", c),
                            t = decodeURIComponent(a.substring(c + 1, e));
                        a = decodeURIComponent(a.substring(0, c)), o[a] || (o[a] = []), t ? o[a][t] = n : o[a].push(n)
                    }
                }), o
            }
            modifyLink(e) {
                let t = e && e.href;
                t = decodeURIComponent(t);
                const a = e.classList.contains("btn-track-invite"),
                    n = this.getUserTrackInfo(a);
                if (t && n)
                    if (a) {
                        const e = this.getJsonFromUrl(t),
                            a = e.partner;
                        let o = e.redirect_url;
                        o += n, t = t.split("?")[0], t = `${t}?partner=${a}&redirect_url=${o}`
                    } else t += t.includes("?") ? "&" : "?", t += n;
                e.href = t
            }
            modifyTournamentLink(e) {
                const t = e.target,
                    a = t.closest("a");
                if (a) {
                    e.preventDefault();
                    a.dataset.gameName;
                    let n = a.href;
                    const o = t.classList.contains("btn-track-invite"),
                        c = this.getUserTrackInfo(o);
                    if (c)
                        if (o) {
                            const e = this.getJsonFromUrl(n),
                                t = e.partner;
                            let a = e.redirect_url;
                            a += c, n = n.split("?")[0], n = `${n}?partner=${t}&redirect_url=${a}`
                        } else n += n.includes("?") ? "&" : "?", n += c;
                    const i = a.dataset && a.dataset.eventname,
                        r = a.dataset && a.dataset.gameid;
                    this.sendDataLayerEvent(i, r), window.location.href = n
                }
            }
            attachUserTrackEvents() {
                const e = document.getElementsByClassName("btn-track");
                if (e && e.length)
                    for (const t of e) this.modifyLink(t), t.addEventListener("click", this.btnClickHandler);
                const t = document.getElementsByClassName("btn-track-invite");
                if (t && t.length)
                    for (const e of t) this.modifyLink(e), e.addEventListener("click", this.btnClickHandler);
                const a = document.getElementsByClassName("tournaments-list")[0];
                a && a.addEventListener("click", this.modifyTournamentLink)
            }
            setObserverForTournamentFilter() {
                const e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                    t = document.querySelector(".tournaments-list");
                if (t) {
                    const a = {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    };
                    new e(e => {
                        e.forEach(e => {
                            "childList" === e.type && e.target && e.addedNodes
                        })
                    }).observe(t, a)
                }
            }
            init() {
                this.initialiseUserData(), this.attachUserTrackEvents(), this.pageLoadEvent()
            }
        };
        a.default = n
    }, {}],
    20: [function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const o = e("./api-service"),
            c = n(e("moment-timezone")),
            i = n(e("./autocomplete")),
            r = n(e("./user-tracking")),
            s = n(e("./lazyLoad")),
            l = n(e("./set-header-active-link"));
        class p {
            static init() {
                s.default(), p.setUserTimeZoneCookie(), p.setHeaderActiveLink(), p.bindClickEvent();
                new i.default("header");
                return p.bindScrollEvents(), p.getOperatingSystem(), r.default.init(), p.tooltipMobile(), p
            }
            static tooltipMobile() {
                if (window.innerWidth < 1025) {
                    const e = document.querySelectorAll(".tooltip");
                    e && e.length && e.forEach(e => {
                        e.addEventListener("click", e => {
                            const t = e.target.closest(".tooltip");
                            e.stopPropagation(), e.preventDefault(), t.classList.contains("active") ? t.classList.remove("active") : t.classList.add("active")
                        }, !1)
                    })
                }
            }
            static getYoutubeId(e) {
                const t = e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
                return !!t && (t && 11 === t[2].length ? t[2] : null)
            }
            static getTwitchId(e) {
                if (e) {
                    const t = /^.*(twitch.tv\/|v\/|u\/\w\/)([^#&?]*).*/,
                        a = e.match(t);
                    if (a) return a ? a[2] : null
                }
                return !1
            }
            static getVimeoId(e) {
                if (e) {
                    const t = /^.*(vimeo.com\/|v\/|u\/\w\/)([^#&?]*).*/,
                        a = e.match(t);
                    if (a) return a ? a[2] : null
                }
                return !1
            }
            static getNimoId(e) {
                if (e) {
                    const t = e.split("/")[e.split("/").length - 1];
                    if (t) return t
                }
                return !1
            }
            static playTournamentVideo() {
                const e = document.getElementById("playIcon"),
                    t = document.getElementById("tournamentVideo");
                t && (t.addEventListener("ended", e => {
                    const t = e.target;
                    document.getElementById("playIcon").classList.remove("hide"), t.controls = !1
                }), t.addEventListener("pause", e => {
                    const t = e.target;
                    document.getElementById("playIcon").classList.remove("hide"), t.controls = !1
                })), e && e.addEventListener("click", e => {
                    const t = document.getElementById("tournamentVideo"),
                        a = e.target;
                    t.play(), t.controls = !0, a.classList.add("hide")
                })
            }
            static getCookieValue(e) {
                const t = document.cookie.match(`(^|[^;]+)\\s*${e}\\s*=\\s*([^;]+)`);
                return t && t.pop()
            }
            static sliceString(e, t, a) {
                return e.slice(t, a)
            }
            static getOperatingSystem() {
                let e = "unknown-os"; - 1 !== navigator.appVersion.indexOf("Win") && (e = "windows-os"), -1 !== navigator.appVersion.indexOf("Mac") && (e = "mac-os"), -1 !== navigator.appVersion.indexOf("X11") && (e = "unix"), -1 !== navigator.appVersion.indexOf("Linux") && (e = "linux"), document.querySelector("body").classList.add(e)
            }
            static bindClickEvent() {
                if (document.querySelectorAll(".nav-search-block").forEach(e => {
                        e.addEventListener("click", e => {
                            const t = document.querySelector(".header-search-form-wrapper"),
                                a = document.querySelector(".mobile-backdrop"),
                                n = document.querySelector(".header-search-form-wrapper .js-search-box");
                            t.classList.toggle("open"), a.classList.toggle("open"), window.screen.availWidth < 1025 && document.body.classList.add("active-overlay"), n.value = "", n.focus()
                        })
                    }), window.screen.availWidth < 1025) {
                    document.querySelector(".mobile-backdrop").addEventListener("click", e => {
                        const t = e.target;
                        t.classList.contains("open") && (t.classList.remove("open"), window.screen.availWidth < 1025 && document.body.classList.add("active-overlay"));
                        const a = document.querySelector(".header-search-form-wrapper.js-search-header");
                        a.classList.contains("open") && a.classList.remove("open")
                    }), document.querySelector(".js-search-header .left-arrow").addEventListener("click", e => {
                        const t = document.querySelector(".mobile-backdrop");
                        t.classList.contains("open") && (t.classList.remove("open"), document.body.classList.remove("active-overlay"));
                        const a = document.querySelector(".header-search-form-wrapper.js-search-header");
                        a.classList.contains("open") && a.classList.remove("open")
                    })
                }
            }
            static findTopLeftPosition(e) {
                const t = document.querySelector(".nav-search-block").getBoundingClientRect();
                return {
                    top: t.top + window.scrollY,
                    left: t.left + window.scrollX
                }
            }
            static setHeaderActiveLink() {
                l.default()
            }
            static formatAMPM(e) {
                const t = e.getHours(),
                    a = e.getMinutes(),
                    n = t >= 12 ? "pm" : "am";
                return `${(t%12?t:12).toString()}:${(a<10?"0"+a:a).toString()}:${n}`
            }
            static numberWithCommas(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            static toggleMenu() {
                document.getElementById("menu_links").classList.toggle("active-menu"), document.getElementById("menu_icon").classList.toggle("active-menu"), window.screen.availWidth < 1025 && document.body.classList.toggle("active-overlay")
            }
            static setCookieLocale(e) {
                document.cookie = `locale=${e};path=/`
            }
            static toggleLangSelector() {
                document.querySelector(".language-selector-btn").classList.toggle("open-selector"), document.querySelector(".language-selector-list").classList.toggle("open-selector")
            }
            static toggleHost() {
                document.querySelector(".language-selector-btn").classList.toggle("open-selector"), document.querySelector(".language-selector-list").classList.toggle("open-selector")
            }
            static closeMenu() {
                document.getElementById("menu_list").classList.remove("open"), document.querySelector(".nav-icon").classList.remove("hide"), document.querySelector(".menu-close").classList.add("hide")
            }
            static isElementInViewport(e) {
                const t = e.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }
            static toggleClass(e, t) {
                e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
            }
            static formatDate(e, t) {
                let a = c.default(e).format(t);
                return a = parseInt(a) < 10 ? "0" + a : a, a
            }
            static bindScrollEvents() {
                window.addEventListener("scroll", () => {
                    const e = document.querySelector(".header-section");
                    e && window.scrollY > 100 ? e.classList.add("sticky-header") : e.classList.remove("sticky-header")
                })
            }
            static sortFilterData(e) {
                const {
                    availableFilters: t
                } = e.metaData, {
                    geo: a,
                    lang: n
                } = t;
                a.sort();
                let o = a.includes("others"),
                    c = -1;
                return o && (c = a.indexOf("others"), a.splice(c, 1), a.push("others")), n.sort(), o = n.includes("others"), o && (c = n.indexOf("others"), n.splice(c, 1), n.push("others")), e.metaData.availableFilters.geo = a, e.metaData.availableFilters.lang = n, e
            }
            static setUserTimeZoneCookie() {
                const e = c.default.tz.guess();
                document.cookie = `timeZone=${e};path=/`
            }
            static updateTournamnetsTimeAndTimeZone() {
                const e = document.querySelector(".time-wrapper").dataset.date;
                if (e) {
                    const t = o.ApiService.getTimeZoneAbbr(),
                        a = c.default.tz.guess(),
                        n = o.ApiService.dateFormatWithTimeZone(e, "D MMM YYYY", a),
                        i = o.ApiService.dateFormatWithTimeZone(e, "H:mm", a);
                    document.querySelector(".time-wrapper").innerHTML = `<span class='date'>${n}</span><span class='time'>${i} ${t}</span>`
                }
            }
            static convertStrToAnchorTag(e) {
                let t = -1,
                    a = "",
                    n = "";
                return e.includes("http") && (t = e.indexOf("http"), a = e.slice(t).split(" ")[0], n = `<a href="${a}" target="_blank">${a}</a>`, e = e.replace("" + a, n)), e
            }
        }
        a.Utils = p
    }, {
        "./api-service": 10,
        "./autocomplete": 11,
        "./lazyLoad": 15,
        "./set-header-active-link": 17,
        "./user-tracking": 19,
        "moment-timezone": 74
    }],
    21: [function(e, t, a) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const o = e("../common/utils"),
            c = e("../common/media-controller"),
            i = e("../common/how-to-join"),
            r = n(e("../common/tournament-filters"));
        c.MediaController.bindScrollEvents(), window.Utils = o.Utils.init() || {}, i.HowToJoinSection.bindEvents(), r.default.init()
    }, {
        "../common/how-to-join": 14,
        "../common/media-controller": 16,
        "../common/tournament-filters": 18,
        "../common/utils": 20
    }],
    22: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/ar.locales"),
            c = n.SupportedLocalesEnum.ARABIC;
        a.GameDetailsLocalesArabic = {
            metadata: {
                title: "انضم إلى {{gameName}} الرياضة البطولات | Game.tv",
                description: "انضم إلى دورات {{gameName}} اليومية التي تعمل داخل الملايين من مجتمعات الألعاب حول العالم."
            },
            gameDetail: "ابحث عن دورات الرياضات الإلكترونية {{gameName}} التي يديرها المجتمع والتي تحدث عبر مئات المجتمعات حول العالم. انقر على \"انضمام' للدخول إلى البطولة {{gameName}}.",
            gameInfo: {
                title: "ألا ترى دورة تحبها؟",
                content: "إنشاء الخاصة بك",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: " لا توجد دورات قادمة متوفرة الآن!",
                noTournamentsContent: "عرض جميع البطولات المتاحة",
                noTournamentsLink: "العيش أو الماضي"
            },
            tournamentTitle: "البطولات",
            platformStr: "برنامج",
            discord: "DISCORD",
            vs: "ضد",
            joinHeading: "انضم",
            viewMore: "عرض المزيد",
            tournamentTypes: {
                heading: "{{gameName}} أنواع الدورات",
                blocks: [{
                    content: "Classic Tournament (نمط الردهة) - Solo و Duo و Squad - 100 لاعب كحد أقصى",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangle Quick Match (أسلوب اللوبي) - منفرد - 28 لاعبًا",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Team Deathmatch (نمط اللوبي) - 2 فرق - 8 لاعبين كحد أقصى",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "وضع العدوى (نمط اللوبي) - 12 لاعب",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "أنواع الجوائز لبطولات {{gameName}}",
                description: "الجوائز لهذه البطولات هي المضيف بالكامل وقد يقوم بعض المضيفين بإدارة البطولات للمتعة فقط ، دون أي جوائز. يمكنك العثور على الجوائز المدرجة في صفحة البطولة. في ما يلي بعض الجوائز التي منحها مضيفو الجوائز لمختلف دورات {{gameName}}.",
                blocks: [{
                    content: "المكافآت النقدية",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "رموز محفظة Steam",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "بطاقات الهدايا - Google play و Amazon و Steam وغيرها",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "رموز الاشتراك - Netflix و Apple Music و Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "و أكثر من ذلك بكثير",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "كيفية الانضمام إلى {{gameName}} البطولة",
                blocks: o.HowToJoinArabic.blocks
            },
            startTournament: {
                heading: "كيف تبدأ دورة {{gameName}}",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "خطوات",
                    stepsContent: [{
                        stepItem: "قم <a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>بدعوة برنامج Tourney</a> في خادم الفتنة ، سجّل الدخول وانقر على \"تفويض\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: 'من القائمة الرئيسية على اليسار ، انقر فوق الزر "إنشاء بطولة"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: 'اختر من بين مجموعة متنوعة من ألعاب الدورات - تخصيص تفاصيل الدورة من خلال النقر على زر "تخصيص" أو انقر على "نشر الآن" لاستخدام قوالب الدورات المحددة مسبقًا',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "ضمن تخصيص الدورة ، أضف وصفًا مخصصًا للبطولة وقواعدها وجوائزها وفقًا لمتطلباتك",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "بمجرد النشر ، سيقوم الروبوت تلقائيًا بإنشاء # # معلومات البطولة و # دورات البطولة - اللوبي في خادم الفتنة الخاص بك ؛ اكتب! قم بالتسجيل في القناة النصية # Tournament-lobby للمشاركة والتحقق من نجاح إنشاء الدورة {{gameName}}.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "تطبيق الويب Game.tv",
                    stepsHeading: "خطوات",
                    stepsContent: [{
                        stepItem: "انتقل إلى <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>تطبيق الويب</a> ، وانقر على \"تسجيل الدخول باستخدام Twitter / Discord\" وانقر فوق \"تفويض\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: 'انقر على أيقونة "+" في شريط التحكم أسفل الشاشة',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: 'من القائمة الرئيسية على اليسار ، انقر فوق الزر "إنشاء بطولة"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: 'اختر من بين مجموعة واسعة من ألعاب البطولة. يمكنك إما تخصيص تفاصيل الدورة من خلال النقر على زر "تخصيص" أو النقر على "نشر الآن" لاستخدام قوالب الدورات المحددة مسبقًا',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "بمجرد النشر ، سيتم إدراج دورة {{gameName}} في <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>الصفحة الرئيسية</a> لتطبيق تطبيق Game.tv على الويب",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "بناء المجتمع ، وإنشاء وإدارة البطولات الخاصة بك",
                content: "كن مضيفًا على game.tv وأنشئ مجتمعك. قم بتشغيل البطولات والبطولات على نفس المنصة."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/ar.locales": 58
    }],
    23: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/de.locales"),
            c = n.SupportedLocalesEnum.GERMAN;
        a.GameDetailsLocalesGerman = {
            metadata: {
                title: "Mach bei {{gameName}} Esports-Turnieren mit | Game.tv",
                description: "Nimm an täglichen {{gameName}} Turnieren teil, die in Millionen von Gaming-Communities weltweit stattfinden."
            },
            gameDetail: "Finde von der Community durchgeführte {{gameName}} Esport-Turniere, die in Hunderten von Communities weltweit stattfinden. Klicke auf 'Beitreten', um am {{gameName}}-Turnier teilzunehmen.",
            gameInfo: {
                title: "Du siehst kein Turnier, das dir gefällt?",
                content: "Erstelle dein eigenes",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "Hoppla! Derzeit sind keine anstehenden Turniere verfügbar!",
                noTournamentsContent: "Alle verfügbaren Turniere anzeigen",
                noTournamentsLink: "Aktuelle oder vergangene"
            },
            tournamentTitle: "Turniere",
            platformStr: "PLATTFORM",
            discord: "DISCORD",
            vs: "GEGEN",
            joinHeading: "BEITRETEN",
            viewMore: "mehr anzeigen",
            tournamentTypes: {
                heading: "{{gameName}} Turniertypen",
                blocks: [{
                    content: "Klassisches Turnier (Lobby-Stil) - Solo, Duo und Squad - 100 Spieler max",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangel Quick-Match (Lobby-Stil) - Solo - 28 Spieler",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Team Deathmatch (Lobby-Stil) - 2 Squads - 8 Spieler max",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Infection-Modus (Lobby-Stil) - 12 Spieler",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "Arten von Preisen für {{gameName}} Turniere",
                description: "Die Preise für diese Turniere sind ausschließlich dem Veranstalter überlassen, und einige Veranstalter können Turniere nur zum Spaß und ohne Preise veranstalten. Die Preise findest du auf der Turnierseite. Hier sind einige Preise, die Gastgeber für verschiedene {{gameName}} Turniere vergeben haben.",
                blocks: [{
                    content: "Geldprämien",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Steam Wallet Codes",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Geschenkkarten - Google Play, Amazon, Steam und andere",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Abonnement-Codes - Netflix, Apple Music und Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "Und viele mehr",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "Wie nehme ich an einem {{gameName}} Turnier teil?",
                blocks: o.HowToJoinGerman.blocks
            },
            startTournament: {
                heading: "Wie starte ich ein {{gameName}} Turnier?",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Schritte",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Lade den Tourney</a>bot zu deinem Discord-Server ein, melde dich an und klicke auf \"Autorisieren\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: 'Klicke im Hauptmenü links auf die Schaltfläche "Turnier erstellen"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: 'Wähle aus der Vielzahl von Turnierspielen - Passe die Turnierdetails an, indem du auf "Anpassen" oder auf "Jetzt veröffentlichen" klickst, um die vordefinierten Turniervorlagen zu verwenden',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: 'Füge unter "Turnier anpassen" eine benutzerdefinierte Turnierbeschreibung, Regeln und Preise gemäß deinen Anforderungen hinzu',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Nach der Veröffentlichung erstellt der Bot automatisch die Kanäle #tournament-info und #tournament-lobby auf deinem Discord-Server. Tippe !register im #tournament-lobby Textkanal, um teilzunehmen und zu überprüfen, ob das {{gameName}} - Turnier erfolgreich erstellt wurde.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Game.tv-Web-App",
                    stepsHeading: "Schritte",
                    stepsContent: [{
                        stepItem: "Besuche <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web-App</a>, klicke auf \"Mit Twitter/Discord anmelden\" und dann auf \"Autorisieren\".",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: 'Klicke auf das "+" Symbol in der Steuerleiste am unteren Bildschirmrand',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: 'Klicke im Hauptmenü links auf die Schaltfläche "Turnier erstellen"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: 'Wähle aus einer Vielzahl Turnierspiele. Du kannst entweder die Turnierdetails anpassen, indem du auf "Anpassen", oder auf "Jetzt veröffentlichen" klickst, um die vordefinierten Turniervorlagen zu verwenden',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "Nach der Veröffentlichung wird dein {{gameName}} Turnier auf Game.tv-Web-App aufgeführt <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>Homepage</a>",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Community aufbauen, eigene Ligen gründen und betreiben",
                content: "Werde Host auf game.tv, führe Ligen und Turniere durch und gründe deine Community."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/de.locales": 59
    }],
    24: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../how-to-join/en.locales");
        a.GameDetailsLocalesEnglish = {
            metadata: {
                title: "Join {{gameName}} Esports Tournaments | Game.tv",
                description: "Join daily {{gameName}} tournaments happening in millions of gaming communities worldwide."
            },
            gameDetail: "Find community-run {{gameName}} esports tournaments happening in {{communityCount}} communities worldwide. Click ‘Join’ to enter the {{gameName}} tournament.",
            gameInfo: {
                title: "Don’t see a tournament you like?",
                content: "Create your own",
                linkUrl: "/create-a-tournament",
                noTournamentsTitle: "Sorry, no upcoming Tournaments available right now.",
                noTournamentsContent: "View all available tournaments",
                noTournamentsLink: "Live or Past"
            },
            tournamentTitle: "Tournaments",
            platformStr: "PLATFORM",
            discord: "DISCORD",
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            vs: "VS",
            joinHeading: "JOIN",
            viewMore: "View more",
            tournamentTypes: {
                heading: "{{gameName}} Tournament Types",
                blocks: [{
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png",
                    imageAlt: "",
                    content: "Classic Tournament (lobby style) - Solo, Duo and Squad- 100 players max"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png",
                    imageAlt: "",
                    content: "Erangle Quick Match (lobby style) - Solo - 28 players"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png",
                    imageAlt: "",
                    content: "Team Deathmatch (lobby style) - 2 Squads - 8 players max"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png",
                    imageAlt: "",
                    content: "Infection Mode (lobby style) - 12 players"
                }]
            },
            prizeTypes: {
                heading: "Types of Prizes for {{gameName}} Tournaments",
                description: "The prizes for these tournaments are entirely up the host. Some hosts may run tournaments without any prizes, just for fun. You can find the prizes listed on the tournament page. Here are some prizes hosts have given away for various {{gameName}} tournaments.",
                blocks: [{
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png",
                    imageAlt: "",
                    content: "Cash rewards"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png",
                    imageAlt: "",
                    content: "Steam wallet codes"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png",
                    imageAlt: "",
                    content: "Gift cards - Google play, Amazon, Steam and others"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png",
                    imageAlt: "",
                    content: "Subscription codes - Netflix, Apple Music and Spotify"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png",
                    imageAlt: "",
                    content: "And many more"
                }]
            },
            joinTournament: {
                heading: "How to Join a {{gameName}} Tournament",
                blocks: n.HowToJoinEnglish.blocks
            },
            startTournament: {
                heading: "How to Start a {{gameName}} Tournament",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Steps",
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg",
                    stepsContent: [{
                        stepItem: '<a href="https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner" class="click-here btn-track-invite" data-eventname="invite_tourney_clicked">Invite the Tourney</a> bot in your discord server, sign in and click “Authorize”',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "From the main menu on the left, click on the “Create Tournament” button",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: "Choose from the vast variety of tournament games - Customize the tournament details by clicking on “customize” button or click on “Publish Now” to use the predefined tournament templates",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "Under customize tournament, add custom Tournament description, rules and prizes as per your requirements",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Once published, the bot will automatically create the #tournament-info and #tournament-lobby channels in your discord server; type !register in the #tournament-lobby text channel to participate and check if the {{gameName}} tournament creation was successful.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }]
                }, {
                    gamePlatform: "Game.tv web app",
                    stepsHeading: "Steps",
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg",
                    stepsContent: [{
                        stepItem: 'Visit <a href="/pwauser" class="click-here btn-track" data-eventname="launch_app_clicked">Web App</a>, click “Sign in with Twitter/Discord” and click “Authorize”',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: "Click on the “+” icon in the control bar at the bottom of your screen",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "From the main menu on the left, click on the “Create Tournament” button",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: "Choose from the vast variety of tournament games. You can either customize the tournament details by clicking on “customize” button or click on “Publish Now” to use the predefined tournament templates",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: 'Once published, your {{gameName}} tournament will be listed on Game.tv Web App <a class="click-here btn-track"  data-eventname="launch_app_clicked" href="/pwauser">Home Page</a>',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }]
                }]
            },
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Build community, create & run your own leagues",
                content: "Become a host on game.tv and create your community. Run leagues, tournaments all on the same platform."
            }
        }
    }, {
        "./../how-to-join/en.locales": 60
    }],
    25: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/es.locales"),
            c = n.SupportedLocalesEnum.SPANISH;
        a.GameDetailsLocalesSpanish = {
            metadata: {
                title: "Únase a Torneos Esports de {{gameName}} | Game.tv",
                description: "Únase a los torneos diarios de {{gameName}} que se ejecutan dentro de millones de comunidades de juego en todo el mundo."
            },
            gameDetail: "Encuentra torneos de esports de {{gameName}} administrados por la comunidad que se llevan a cabo en cientos de comunidades en todo el mundo. Haga clic en ‘Unirse’ para participar en el torneo de {{gameName}}.",
            gameInfo: {
                title: "¿No ves un torneo que te gusta?",
                content: "Crea tu propio",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "¡Uy! ¡No hay próximos torneos disponibles en este momento!",
                noTournamentsContent: "Ver todos los torneos disponibles",
                noTournamentsLink: "En vivo o anteriores"
            },
            tournamentTitle: "Torneos",
            platformStr: "PLATAFORMA",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "UNIRSE",
            viewMore: "Ver más",
            tournamentTypes: {
                heading: "{{gameName}} Tipos de torneos",
                blocks: [{
                    content: "Torneo clásico (estilo lobby) - Solo, Dúo y Escuadrón - 100 jugadores como máximo",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangel Partida Rápida (estilo lobby) - Solo - 28 jugadores",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Team Deathmatch (estilo lobby) - 2 Escuadrones - 8 jugadores máximo",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Modo de infección (estilo lobby) - 12 jugadores",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "Tipos de premios para torneos de {{gameName}}",
                description: "Los premios para estos torneos son totalmente del anfitrión y algunos anfitriones pueden realizar torneos solo por diversión, sin ningún premio. Puedes encontrar los premios que figuran en la página del torneo. Aquí hay algunos premios que los anfitriones han regalado para varios torneos de {{gameName}}.",
                blocks: [{
                    content: "Recompensas en efectivo",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Códigos de billetera de Steam",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Tarjetas de regalo - Google play, Amazon, Steam y otros",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Códigos de suscripción - Netflix, Apple Music y Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "Y muchos más",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "Cómo unirse a un torneo de {{gameName}}",
                blocks: o.HowToJoinSpanish.blocks
            },
            startTournament: {
                heading: "Cómo comenzar un torneo de {{gameName}}",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Pasos",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Invite el Tourney</a> bot en su servidor discord, inicie sesión y haga clic en \"Autorizar\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: 'Desde el menú principal a la izquierda, haz clic en el botón "Crear torneo"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: 'Elija entre la gran variedad de juegos de torneos: personalice los detalles del torneo haciendo clic en el botón "personalizar" o haga clic en "Publicar ahora" para usar las plantillas de torneo predefinidas',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "En personalizar torneo, agregue una descripción personalizada del torneo, reglas y premios según sus requisitos",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Una vez publicado, el bot creará automáticamente los canales #tournament-info y #tournament-lobby en su servidor de discord; escribe !register en el canal de texto #tournament-lobby para participar y verificar si la creación del torneo {{gameName}} fue exitosa.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Game.tv web app",
                    stepsHeading: "Pasos",
                    stepsContent: [{
                        stepItem: "Vaya a <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a>, haga clic en \"Iniciar sesión con Twitter/Discord\" y haga clic en \"Autorizar\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: 'Haga clic en el icono "+" en la barra de control en la parte inferior de su pantalla',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: 'Desde el menú principal a la izquierda, haz clic en el botón "Crear torneo"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: 'Elige entre la gran variedad de juegos de torneos. Puedes personalizar los detalles del torneo haciendo clic en el botón "personalizar" o haciendo clic en "Publicar ahora" para usar las plantillas de torneo predefinidas',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "Una vez publicado, su torneo de {{gameName}} se incluirá en la <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>página de inicio</a> de Game.tv Web App",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Construye comunidad, crea y ejecuta tus propias ligas",
                content: "Conviértete en anfitrión en game.tv, organiza ligas, torneos y crea tu comunidad."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/es.locales": 61
    }],
    26: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/fr.locales"),
            c = n.SupportedLocalesEnum.FRENCH;
        a.GameDetailsLocalesFrench = {
            metadata: {
                title: "Rejoignez les Tournois Esports {{gameName}} |Game.tv",
                description: "Rejoignez les tournois {{gameName}} quotidiens organisés par des millions de communautés gaming dans le monde. "
            },
            gameDetail: "rouvez des tournois esport {{gameName}} organisés par la communauté dans des centaines de communautés à travers le monde. Cliquez sur 'Rejoindre' pour participer au tournoi {{gameName}}.",
            gameInfo: {
                title: "Vous ne voyez pas de tournoi auquel vous aimeriez participer?",
                content: "Créez le votre",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "Oups! Aucun tournoi à venir n'est disponible pour le moment!",
                noTournamentsContent: "Voir tous les tournois disponibles",
                noTournamentsLink: "En ligne ou Passé"
            },
            tournamentTitle: "Tournois",
            platformStr: "PLATEFORME",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "REJOINDRE",
            viewMore: "Afficher plus",
            tournamentTypes: {
                heading: "{{gameName}} Types de tournois",
                blocks: [{
                    content: "Tournoi classique (style lobby) - Solo, Duo et Squad - 100 joueurs maximum",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Match Rapide sur Erangel (style lobby) - Solo - 28 joueurs",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Match à mort par équipe (style lobby) - 2 équipes - 8 joueurs maximum",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Mode infection (style lobby) - 12 joueurs",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "Types de prix pour les tournois {{gameName}}",
                description: "Les prix pour ces tournois sont entièrement à la charge de l'hôte et certains hôtes peuvent organiser des tournois juste pour le plaisir, sans qu'il n'y ait de prix. Vous pouvez trouver les prix indiqués sur la page du tournoi. Voici quelques prix que les hôtes ont donnés pour divers tournois {{gameName}}.",
                blocks: [{
                    content: "Récompenses en cash",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Codes de portefeuille Steam",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Cartes cadeaux - Google play, Amazon, Steam et autres",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Codes d'abonnement - Netflix, Apple Music et Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "Et plus encore",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "Comment rejoindre un tournoi {{gameName}}",
                blocks: o.HowToJoinFrench.blocks
            },
            startTournament: {
                heading: "Comment démarrer un tournoi {{gameName}}",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Étapes",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Invitez le bot Tourney</a> sur votre serveur Discord, connectez-vous et cliquez sur «Autoriser»",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "Dans le menu principal à gauche, cliquez sur le bouton «Créer un tournoi»",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: 'Choisissez parmi la grande variété de jeux de tournoi - Personnalisez les détails du tournoi en cliquant sur le bouton "personnaliser" ou cliquez sur "Publier maintenant" pour utiliser les modèles de tournoi prédéfinis',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "Sous personnaliser le tournoi, ajoutez une description, des règles et des prix personnalisés selon vos besoins",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Une fois publié, le bot créera automatiquement les salons #tournament-info et #tournament-lobby sur votre serveur Discord; inscrivez-vous dans le salon textuel #tournament-lobby pour participer et vérifier si la création du tournoi {{gameName}} a réussi.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Application Web Game.tv",
                    stepsHeading: "Étapes",
                    stepsContent: [{
                        stepItem: "Visitez <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>App Web</a> , cliquez sur «Connectez-vous avec Twitter / Discord» et cliquez sur «Autoriser»",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: "Cliquez sur l'icône «+» dans la barre de contrôle en bas de votre écran",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "Dans le menu principal à gauche, cliquez sur le bouton «Créer un tournoi»",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: 'Choisissez parmi une grande variété de jeux de tournoi. Vous pouvez soit personnaliser les détails du tournoi en cliquant sur le bouton "personnaliser" ou cliquer sur "Publier maintenant" pour utiliser les modèles de tournoi prédéfinis',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "Une fois publié, votre tournoi {{gameName}} sera répertorié sur la <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>page d'accueil</a> de l'application Web Game.tv",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Construisez une communauté, créez et gérez vos propres ligues",
                content: "Devenez hôte sur game.tv, dirigez des ligues, des tournois et créez votre communauté."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/fr.locales": 62
    }],
    27: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./en.locales"),
            o = e("./ja.locales"),
            c = e("./ar.locales"),
            i = e("./de.locales"),
            r = e("./es.locales"),
            s = e("./fr.locales"),
            l = e("./it.locales"),
            p = e("./ko.locales"),
            m = e("./pl.locales"),
            d = e("./pt-br.locales"),
            u = e("./ru.locales"),
            M = e("./th.locales"),
            g = e("./tr.locales"),
            b = e("./tw.locales"),
            A = e("./vi.locales");
        a.GameDetailsLocales = {
            en: n.GameDetailsLocalesEnglish,
            ar: c.GameDetailsLocalesArabic,
            cs: n.GameDetailsLocalesEnglish,
            de: i.GameDetailsLocalesGerman,
            es: r.GameDetailsLocalesSpanish,
            fr: s.GameDetailsLocalesFrench,
            id: n.GameDetailsLocalesEnglish,
            it: l.GameDetailsLocalesItalian,
            ja: o.GameDetailsLocalesJapanese,
            ko: p.GameDetailsLocalesKorean,
            ms: n.GameDetailsLocalesEnglish,
            nl: n.GameDetailsLocalesEnglish,
            "pt-br": d.GameDetailsLocalesPortuguese,
            pl: m.GameDetailsLocalesPolish,
            ru: u.GameDetailsLocalesRussian,
            tr: g.GameDetailsLocalesTurkish,
            th: M.GameDetailsLocalesThai,
            tw: b.GameDetailsLocalesChinese,
            vi: A.GameDetailsLocalesVietnamese
        }
    }, {
        "./ar.locales": 22,
        "./de.locales": 23,
        "./en.locales": 24,
        "./es.locales": 25,
        "./fr.locales": 26,
        "./it.locales": 28,
        "./ja.locales": 29,
        "./ko.locales": 30,
        "./pl.locales": 31,
        "./pt-br.locales": 32,
        "./ru.locales": 33,
        "./th.locales": 34,
        "./tr.locales": 35,
        "./tw.locales": 36,
        "./vi.locales": 37
    }],
    28: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/it.locales"),
            c = n.SupportedLocalesEnum.ITALIAN;
        a.GameDetailsLocalesItalian = {
            metadata: {
                title: "Partecipa a {{gameName}} Tornei Esport | Game.tv",
                description: "Find community-run {{gameName}} esports tournaments happening across hundreds of communities worldwide. Click ‘Join’ to enter the {{gameName}} tournament."
            },
            gameDetail: 'Trova Tornei Esport di {{gameName}} gestiti dalla community nelle {{communityCount}} community di tutto il mondo. Fai clic su "Partecipa" per partecipare al torneo {{gameName}}.',
            gameInfo: {
                title: "Non vedi un torneo che ti piace?",
                content: "Crea il tuo",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "Oops! Al momento non ci sono tornei in arrivo!",
                noTournamentsContent: "Visualizza tutti i tornei disponibili",
                noTournamentsLink: "Dal vivo o terminati"
            },
            tournamentTitle: "Tornei",
            platformStr: "PIATTAFORMA",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "ENTRA",
            viewMore: "Vedi di più",
            tournamentTypes: {
                heading: "{{gameName}} Tipi di tornei",
                blocks: [{
                    content: "Torneo classico (stile lobby) - Solo, Duo e Squad - 100 giocatori max",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangle Quick Match (stile lobby) - Solo - 28 giocatori",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Deathmatch a squadre (stile lobby) - 2 squadre - 8 giocatori max",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Modalità infezione (stile lobby) - 12 giocatori",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "Tipi di premi per i tornei {{gameName}}",
                description: "I premi per questi tornei sono interamente a carico dell'host e alcuni host possono organizzare tornei solo per divertimento, senza alcun premio. Puoi trovare i premi elencati nella pagina del torneo. Ecco alcuni premi che gli host hanno regalato per vari tornei {{gameName}}.",
                blocks: [{
                    content: "Premi in denaro",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Codici del portafoglio Steam",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Carte regalo: Google Play, Amazon, Steam e altri",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Codici di abbonamento: Netflix, Apple Music e Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "E molti altri",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "Come partecipare a un torneo {{gameName}}",
                blocks: o.HowToJoinItalian.blocks
            },
            startTournament: {
                heading: "Come iniziare un torneo {{gameName}}",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Step",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Invita il bot Tourney</a> nel tuo server Discord, accedi e fai clic su \"Autorizza\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: 'Dal menu principale a sinistra, fai clic sul pulsante "Crea torneo"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: 'Scegli tra la vasta gamma di giochi del torneo - Personalizza i dettagli del torneo facendo clic sul pulsante "personalizza" o fai clic su "Pubblica ora" per utilizzare i modelli di torneo predefiniti',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "Sotto personalizza torneo, aggiungi la descrizione del torneo personalizzata, le regole e i premi secondo le tue esigenze",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Una volta pubblicato, il bot creerà automaticamente i canali #tournament-info e #tournament-lobby nel tuo server Discord; digita !register nel canale di testo # torneo-lobby per partecipare e controlla se la creazione del torneo {{gameName}} è andata a buon fine.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "App Web Game.tv",
                    stepsHeading: "Passi",
                    stepsContent: [{
                        stepItem: "Visitare <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>App Web</a>, fai clic su \"Accedi con Twitter / Discord\" e fai clic su \"Autorizza\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: 'Fai clic sull\'icona "+" nella barra di controllo nella parte inferiore dello schermo',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: 'Dal menu principale a sinistra, fai clic sul pulsante "Crea torneo"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: 'Scegli tra la vasta gamma di giochi da torneo. Puoi personalizzare i dettagli del torneo facendo clic sul pulsante "personalizza" o facendo clic su "Pubblica ora" per utilizzare i modelli di torneo predefiniti',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "Una volta pubblicato, il tuo torneo {{gameName}} verrà elencato sull'app Web Game.tv<a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>home page</a>",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Costruisci una community, crea e gestisci i tuoi campionati",
                content: "Diventa un host su game.tv e crea la tua community. Gestitsci campionati, tornei, tutto sulla stessa piattaforma."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/it.locales": 63
    }],
    29: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/ja.locales"),
            c = n.SupportedLocalesEnum.JAPANESE;
        a.GameDetailsLocalesJapanese = {
            metadata: {
                title: "{{gameName}}のeスポーツトーナメント（Game.tv）に参加しよう。",
                description: "世界中の無数のゲーミングコミュニティにおいて毎日開催されている{{gameName}}のトーナメントに参加しよう。"
            },
            gameDetail: "{{communityCount}}の各国のコミュニティが開催している{{gameName}}のeスポーツトーナメントを見つけよう。「エントリー」をクリックして{{gameName}}のトーナメントに参加しよう！",
            gameInfo: {
                title: "お探しのトーナメントがありませんか？",
                content: "自分のトーナメントを作ろう！",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "現在エントリー可能なトーナメントはありません。",
                noTournamentsContent: "エントリー可能なトーナメントをすべて表示",
                noTournamentsLink: "現在開催中、または過去のトーナメント"
            },
            tournamentTitle: "トーナメント",
            platformStr: "プラットフォーム",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "参加する",
            viewMore: "さらに表示",
            tournamentTypes: {
                heading: "{{gameName}}のトーナメント形式",
                blocks: [{
                    content: "クラシックトーナメント（ルーム形式）- ソロ、デュオ、チーム - 最大100人",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangelクイックマッチ（ルーム形式）- ソロ - 28人",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "チームデスマッチ（ルーム形式）- 2チーム - 最大8人",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Infection（感染）モード（ルーム形式）- 12人",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "{{gameName}}のトーナメントの賞品形式",
                description: "トーナメントの賞品は完全に主催者依存となっており、主催者は賞品なしのカジュアルなトーナメントを開催することも可能です。賞品のリストはトーナメントページにて確認できます。こちらは多数の{{gameName}}のトーナメントで提供される賞品になります。",
                blocks: [{
                    content: "賞金",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Steam ウォレットコード",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "ギフトカード - Google Play、Amazon、Steamなど",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "サービス利用コード - Netflix、Apple Music、Spotifyなど",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "他にも様々な種類の賞品があります。",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "{{gameName}}のトーナメントへのエントリー方法",
                blocks: o.HowToJoinJapanese.blocks
            },
            startTournament: {
                heading: "{{gameName}}のトーナメントを開始する方法",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "手順",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Tourney</a>ボットをDiscordサーバーに招いて、サインインして「認証」を押します。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "左側のメインメニューから「トーナメントの作成」ボタンを押します。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: "トーナメントを開催するゲームをテンプレートリストより選択して「このテンプレートを選択」ボタンを押し、トーナメント内容を編集します。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "トーナメント編集ページにて、トーナメントの詳細説明、ルール、賞品、条件などといった様々な項目を記載することができます。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "トーナメント投稿後、#tournament-infoと#tournament-lobbyチャンネルがボットによってDiscordサーバー上に作成されます。#tournament-lobbyチャンネルにて「!register」と入力してエントリーして{{gameName}}のトーナメント作成が正常に行われたことを確認します。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Game.tvウェブアプリ",
                    stepsHeading: "手順",
                    stepsContent: [{
                        stepItem: "<a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>ウェブアプリ</a>へアクセスして、TwitterまたはDiscordを選択して「サインイン」を押します。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: "画面下部にある「+」のアイコンを押します。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "左側のメインメニューから「トーナメントの作成」ボタンを押します。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: "トーナメントを開催するゲームをテンプレートリストより選択して「このテンプレートを選択」ボタンを押し、トーナメント内容を編集します。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "トーナメント投稿後、{{gameName}}のトーナメントはGame.tvウェブアプリの<a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>ホーム画面</a>に一覧表示されます。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "すべての地域",
                tournamentText: "すべての大会",
                langText: "すべての言語"
            },
            appIntroSection: {
                heading: "大会を開催＆運営して、<br/> コミュニティを盛り上げよう！",
                content: "Game.tvを使って大会を開催しよう！大会の作成から運営まで、ワンストップでの円滑なオペレーションが可能です！"
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/ja.locales": 64
    }],
    30: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/ko.locales"),
            c = n.SupportedLocalesEnum.KOREAN;
        a.GameDetailsLocalesKorean = {
            metadata: {
                title: "{{gameName}} E스포츠 토너먼트에 참여하세요 | Game.tv",
                description: "전 세계 수백만 게임 커뮤니티 내에서 매일 열리는 {{gameName}} 토너먼트에 참여해보세요."
            },
            gameDetail: "전 세계의 수백 개 커뮤니티에서 열리는 {{gameName}} e 스포츠 토너먼트를 찾아보세요. {{gameName}} 토너먼트에 참가하려면 '가입'을 클릭하세요.",
            gameInfo: {
                title: "원하는 토너먼트가 없나요?",
                content: "직접 토너먼트를 만들 수도 있습니다.",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "죄송합니다! 현재 예정된 토너먼트가 없습니다!",
                noTournamentsContent: "사용 가능한 모든 토너먼트보기",
                noTournamentsLink: "라이브 또는 이전 경기"
            },
            tournamentTitle: "토너먼트",
            platformStr: "플랫폼",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "참여하기",
            viewMore: "더보기",
            tournamentTypes: {
                heading: "{{gameName}} 토너먼트 타입",
                blocks: [{
                    content: "기본 토너먼트 (로비 스타일) - 솔로, 듀오 및 스쿼드- 최대 100 명",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "퀵 매치 (로비 스타일) - 솔로 - 28 플레이어",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "팀 데스 매치 (로비 스타일) - 2 스쿼드 - 최대 8 명",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "감염 모드 (로비 스타일) - 12 명",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "{{gameName}} 토너먼트의 상품 유형",
                description: "이 토너먼트의 상금은 전적으로 주최측이 제공하며 일부 호스트는 상금없이 재미를 위해 토너먼트를 운영 할 수 있습니다. 토너먼트 페이지에서 상금을 확인할 수 있습니다. 다음은 다양한 {{gameName}} 토너먼트에서 주최자가 제공 한 상금입니다.",
                blocks: [{
                    content: "현금성 상품",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "스팀 코드",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "기프트 카드 - 구글 플레이, 아마존, 스팀 등등",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "구독 콛 - 넷플릭스, 애플 뮤직, 스포티파이",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "그리고 등등",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "어떻게 {{gameName}} 토너먼트에 참여하나요",
                blocks: o.HowToJoinKorean.blocks
            },
            startTournament: {
                heading: "{{gameName}} 토너먼트를 시작하는 방법",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "방법",
                    stepsContent: [{
                        stepItem: "Discord 서버에서<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Tourney 봇을 초대하고</a>로그인 한 후 \"승인\"을 클릭하십시오.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: '왼쪽의 메인 메뉴에서 "토너먼트 만들기"버튼을 클릭하십시오',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: '다양한 토너먼트 게임 중에서 선택하십시오- "사용자 정의" 버튼을 클릭하여 토너먼트 세부 정보를 사용자 정의하거나 "지금 게시"를 클릭하여 사전 에 만들어진 토너먼트 템플릿을 사용하십시오',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "토너먼트 사용자 정의에서 요구 사항에 따라 사용자 정의 토너먼트 설명, 규칙 및 상금을 추가하십시오.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "봇은 일단 게시되면 Discord 서버에 # tournament-info 및 # tournament-lobby 채널을 자동으로 생성합니다. # tournament-lobby 텍스트 채널에 !register를 입력하여 {{gameName}} 토너먼트 생성에 성공했는지 확인하십시오.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Game.tv 웹앱",
                    stepsHeading: "단계",
                    stepsContent: [{
                        stepItem: "<a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>웹앱</a>,을 방문하고 \"Twitter / Discord로 로그인\"을 클릭 한 다음 \"승인\"을 클릭하십시오.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: '화면 하단의 제어바에서 "+"아이콘을 클릭하십시오',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: '왼쪽의 메인 메뉴에서 "토너먼트 만들기"버튼을 클릭하십시오',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: '다양한 토너먼트 게임 중에서 선택하십시오. 미리 정의 된 토너먼트 템플릿을 사용하려면 "지금 게시"를 클릭하여 토너먼트를 공지하고,  "사용자 정의"버튼을 클릭하여 토너먼트 세부 정보를 사용자 수정 할 수 있습니다.',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "{{gameName}} 토너먼트가 게시되면 Game.tv 웹 앱<a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'> 홈페이지</a>에 표시됩니다",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "커뮤니티 구축, 나만의 리그 생성 및 운영",
                content: "game.tv의 호스트가되어 커뮤니티를 만드세요. 동일한 플랫폼에서 리그, 토너먼트를 모두 운영해보세요."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/ko.locales": 65
    }],
    31: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/pl.locales"),
            c = n.SupportedLocalesEnum.POLISH;
        a.GameDetailsLocalesPolish = {
            metadata: {
                title: "Dołącz do {{gameName}} turniejów e-sportowych | Game.tv",
                description: "Dołącz do codziennych turniejów {{gameName}} w milionach społeczności graczy na całym świecie."
            },
            gameDetail: "Znajdź organizowane przez społeczność turnieje e-sportowe {{gameName}} w {{communityCount}} społecznościach na całym świecie. Kliknij „Dołącz”, aby wziąć udział w turnieju {{gameName}}.",
            gameInfo: {
                title: "Nie widzisz turnieju, który lubisz?",
                content: "Stwórz swój własny",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "Ups! W tej chwili nie ma żadnych nadchodzących turniejów!",
                noTournamentsContent: "Zobacz wszystkie dostępne turnieje",
                noTournamentsLink: "Na żywo"
            },
            tournamentTitle: "Turnieje",
            platformStr: "PLATFORMA",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "DOŁĄCZ",
            viewMore: "Zobacz więcej",
            tournamentTypes: {
                heading: "{{gameName}} Typy turniejów",
                blocks: [{
                    content: "Turniej klasyczny (w stylu lobby) - solo, duet i skład - maks. 100 graczy",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangle Quick Match (w stylu lobby) - Solo - 28 graczy",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Team Deathmatch (w stylu lobby) - 2 drużyny - maks. 8 graczy",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Tryb infekcji (w stylu lobby) - 12 graczy",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "Rodzaje nagród w turniejach {{gameName}}",
                description: "Nagrody za te turnieje są całkowicie zależne od gospodarza, a niektórzy gospodarze mogą organizować turnieje dla zabawy, bez żadnych nagród. Nagrody można znaleźć na stronie turnieju. Oto niektóre nagrody, które gospodarze rozdali na różne turnieje {{gameName}}.",
                blocks: [{
                    content: "Nagrody pieniężne",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Kody Steam",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Karty upominkowe - Google Play, Amazon, Steam i inne",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Kody subskrypcji - Netflix, Apple Music i Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "I wiele więcej",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "Jak dołączyć do turnieju {{gameName}}",
                blocks: o.HowToJoinPolish.blocks
            },
            startTournament: {
                heading: "Jak rozpocząć turniej {{gameName}}",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Krok po kroku",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Zaproś naszego bota</a> do swojego discorda, zarejestruj się i kliknij \"Autoryzuj\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "W menu głównym po lewej stronie kliknij przycisk „Utwórz turniej”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: "Wybierz spośród szerokiej gamy gier turniejowych - Dostosuj szczegóły turnieju, klikając przycisk „Dostosuj” lub „Opublikuj teraz”, aby użyć wstępnie zdefiniowanych szablonów turniejów",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: 'W obszarze "Dostosuj turniej" dodaj niestandardowy opis turnieju, zasady i nagrody zgodnie ze swoimi wymaganiami',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Po opublikowaniu bot automatycznie utworzy kanały #tournament-info i #tournament-lobby  na twoim serwerze discord; wpisz  !register na kanale #tournament-lobby ,aby wziąć udział w turnieju i sprawdzić czy  {{gameName}} turniej został stworzony pomyślnie",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Aplikacja internetowa Game.tv",
                    stepsHeading: "Krok po kroku",
                    stepsContent: [{
                        stepItem: "Odwiedź <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a>, kliknij \"zaloguj się przez Twittera lub Discorda\" i następnie kliknij \"Autoryzuj\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: 'Kliknij ikonę "+” na pasku sterowania u dołu ekranu',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "W menu głównym po lewej stronie kliknij przycisk „Utwórz turniej”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: "Wybierz spośród szerokiej gamy gier turniejowych. Możesz dostosować szczegóły turnieju, klikając przycisk „Dostosuj” lub „Opublikuj teraz”, aby użyć wstępnie zdefiniowanych szablonów turnieju",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "Kiedy uda Ci się opublikować swój turniej  {{gameName}} .Turniej zostanie wpisany na naszej <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>stronie głównej</a>",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Buduj społeczność, twórz i prowadź własne ligi",
                content: "Zostań gospodarzem game.tv i stwórz swoją społeczność. Prowadź ligi, turnieje na tej samej platformie."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/pl.locales": 66
    }],
    32: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/pt-br.locales");
        n.SupportedLocalesEnum.PORTUGUESE;
        a.GameDetailsLocalesPortuguese = {
            metadata: {
                title: "Participe de Torneios de eSports de {{gameName}} | Game.tv",
                description: "Junte-se a torneios diários de {{gameName}} ocorrendo em milhões de comunidades de jogos no mundo todo."
            },
            gameDetail: "Encontre torneios de esports de {{gameName}} administrados pela comunidade que acontecem em {{communityCount}}  comunidades de em no mundo inteiro. Clique em `Entrar` para entrar no torneio {{gameName}}.",
            gameInfo: {
                title: "Você não vê um torneio que você gosta?",
                content: "Crie seu próprio",
                linkUrl: "/create-a-tournament",
                noTournamentsTitle: "Ups! Não há Torneios próximos disponíveis no momento!",
                noTournamentsContent: "Ver todos os torneios disponíveis",
                noTournamentsLink: "Ao Vivo ou Passado"
            },
            tournamentTitle: "Torneios",
            platformStr: "PLATAFORMA ",
            discord: "DISCORD",
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            vs: "VS",
            joinHeading: "ENTRAR",
            viewMore: "Veja mais",
            tournamentTypes: {
                heading: "Tipos de Torneio para {{gameName}}",
                blocks: [{
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png",
                    imageAlt: "",
                    content: "Torneio Clássico (estilo lobby) - Solo, Duo e Seleção - 100 jogadores no máximo"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png",
                    imageAlt: "",
                    content: "Partida Rápida Erangle (estilo lobby) - Solo - 28 jogadores"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png",
                    imageAlt: "",
                    content: "Mata-mata em Equipe (estilo lobby) - 2 Esquadrões - 8 jogadores no máximo"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png",
                    imageAlt: "",
                    content: "Modo de Infecção (estilo lobby) - 12 jogadores"
                }]
            },
            prizeTypes: {
                heading: "Tipos de Prêmios para Torneios de {{gameName}}",
                description: "Os prêmios para esses torneios são inteiramente dependentes do anfitrião e alguns podem organizar torneios apenas por diversão, sem nenhum prêmio. Você pode encontrar os prêmios listados na página do torneio. Aqui estão alguns prêmios que anfitriões deram em vários torneios de {{gameName}}.",
                blocks: [{
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png",
                    imageAlt: "",
                    content: "Recompensas em Dinheiro"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png",
                    imageAlt: "",
                    content: "Códigos de carteira Steam"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png",
                    imageAlt: "",
                    content: "Catões-presente - Google play, Amazon, Steam e outros"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png",
                    imageAlt: "",
                    content: "Códigos de assinatura - Netflix, Apple Music e Spotify"
                }, {
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png",
                    imageAlt: "",
                    content: "E muitos mais"
                }]
            },
            joinTournament: {
                heading: "Como Entrar em um Torneio de {{gameName}}",
                blocks: o.HowToJoinPortuguese.blocks
            },
            startTournament: {
                heading: "Como Iniciar um Torneio de {{gameName}}",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Etapas",
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg",
                    stepsContent: [{
                        stepItem: '<a href="https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner" class="click-here btn-track-invite" data-eventname="invite_tourney_clicked">Convide o bot de Torneio</a> para o seu servidor de Discord, faça login e clique em “Autorizar”',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "No menu principal à esquerda, clique no botão “Criar Torneio”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: "Escolha entre uma grande variedade de jogos de torneio - Personalize os detalhes do torneio clicando no botão “personalizar” ou clique em “Publicar Agora” para usar os modelos de torneio predefinidos",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "Em torneio personalizado, adicione a descrição própria do Torneio, regras e prêmios de acordo com seus requisitos",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Uma vez publicado, o bot criará automaticamente os canais #tournament-info e #tournament-lobby no seu servidor do discord; digite !register no canal #tournament-lobby para participar e verificar se a criação do torneio de {{gameName}} foi bem-sucedida.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }]
                }, {
                    gamePlatform: "App da web Game.tv",
                    stepsHeading: "Etapas",
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg",
                    stepsContent: [{
                        stepItem: 'Visite o <a href="/pwauser" class="click-here btn-track" data-eventname="launch_app_clicked">Web App</a>, clique em “Entrar com Twitter/Discord” e clique em “Autorizar”',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: "Clique o botão “+” na barra de controle na parte inferior da tela",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "No menu principal à esquerda, clique no botão “Criar Torneio”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: "Escolha da vasta gama de jogos de torneio. Você pode personalizar os detalhes do torneio clicando no botão “personalizar” ou clicar em “Publicar Agora” para usar os modelos de torneio predefinidos",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: 'Depois de publicado, seu torneio de {{gameName}} será listado na <a class="click-here btn-track"  data-eventname="launch_app_clicked" href="/pwauser">página inicial</a> da Game.tv Web App',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }]
                }]
            },
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Fortaleça a sua comunidade, crie e administre suas próprias ligas",
                content: "Torne-se um organizador na game.tv, execute ligas, torneios e crie sua comunidade."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/pt-br.locales": 67
    }],
    33: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/ru.locales"),
            c = n.SupportedLocalesEnum.RUSSIAN;
        a.GameDetailsLocalesRussian = {
            metadata: {
                title: "Участвуйте в киберспортивных турнирах {{gameName}} | Game.tv",
                description: "Присоединяйтесь к ежедневным турнирам {{gameName}}, которые проводятся в миллионах игровых сообществ по всему миру."
            },
            gameDetail: 'Найдите киберспортивные турниры по {{gameName}}, проходящие в сотнях сообществ по всему миру. Нажмите на "Присоединиться", чтобы принять участие в турнире по {{gameName}}.',
            gameInfo: {
                title: "Не можете найти турнир по нраву?",
                content: "Создайте свой",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "К сожалению, на данный момент нет предстоящих турниров.",
                noTournamentsContent: "Посмотреть все доступные турниры",
                noTournamentsLink: "В прямом эфире или прошедший"
            },
            tournamentTitle: "Турниры",
            platformStr: "ПЛАТФОРМА",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "ПРИСОЕДИНИТЬСЯ",
            viewMore: "Еще",
            tournamentTypes: {
                heading: "Типы турниров {{gameName}}",
                blocks: [{
                    content: "Классический турнир (лобби) — Соло, Парный, Отряд — максимум 100 игроков",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Быстрый матч в Эрангель (лобби) — Соло — 28 игроков",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Командная битва насмерть (лобби) — 2 Отряда — максимум 8 игроков",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Режим 'Заражение' (лобби) — 12 игроков",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "Типы призов для турниров {{gameName}}",
                description: "Призы для этих турниров полностью принадлежат организаторам. Некоторые из них могут проводить соревнования без призов. Перечень наград находится на странице турнира. Это примеры призов, которые были розданы на различных турнирах {{gameName}}.",
                blocks: [{
                    content: "Денежные вознаграждения",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Коды кошелька Steam",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Подарочные карты — Google Play, Amazon, Steam и другие",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Коды подписки — Netflix, Apple Music и Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "И многие другие",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "Как принять участие в турнире {{gameName}}?",
                blocks: o.HowToJoinRussian.blocks
            },
            startTournament: {
                heading: "Как организовать турнир {{gameName}}?",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Инструкции",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Пригласите бота Tourney</a> на свой сервер Discord, залогиньтесь и нажмите на кнопку авторизации",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "В левой части главного меню нажмите на кнопку 'Создать турнир'",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: "Выбирайте из огромного разнообразия турниров. Настройте турнир, нажав на кнопку персонализации или на 'Опубликовать сейчас', чтобы воспользоваться готовыми шаблонами турниров",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "Также добавьте описание турнира, правила проведения и возможные призы",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "После публикации турнира бот автоматически создаст каналы #tournament-info и #tournament-lobby на вашем сервере Discord; наберите команду !register на текстовом канале #tournament-lobby, чтобы принять участие в нем, и проверьте, успешно ли был создан турнир по игре {{gameName}}.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Веб-приложение Game.tv",
                    stepsHeading: "Инструкции",
                    stepsContent: [{
                        stepItem: "Перейдите в <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>веб-приложение</a> и войдите через аккаунт Discord или Twitter",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: "Кликните на значок “+”, на панели управления в нижней части экрана",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "В левой части главного меню нажмите на кнопку 'Создать турнир'",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: "Выбирайте из огромного разнообразия турниров. Настройте турнир, нажав на кнопку персонализации или на 'Опубликовать сейчас', чтобы воспользоваться готовыми шаблонами турниров",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "После публикации ваш турнир {{gameName}} будет отображен на <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>главной странице</a> веб-приложения Game.tv",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Выстраивайте сильное сообщество, создавайте лиги и управляйте ими",
                content: "Станьте организатором на game.tv, управляйте лигами, турнирами и создавайте свое сообщество."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/ru.locales": 68
    }],
    34: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/th.locales"),
            c = n.SupportedLocalesEnum.THAI;
        a.GameDetailsLocalesThai = {
            metadata: {
                title: "เข้าร่วม {{gameName}} Esports Tournaments | Game.tv",
                description: "เข้าร่วม {{gameName}} ทัวร์นาเมนต์รายวันที่จัดแข่งขันในคอมมูนิตี้ทั่วโลก"
            },
            gameDetail: "ค้นหาคอมมูนิตี้ที่จัดแข่ง {{gameName}} จากคอมมูนิตี้อีสปอร์ตจากทั่วโลก คลิก ‘Join’ เพื่อเข้าร่วมการแข่งขัน {{gameName}}",
            gameInfo: {
                title: "ไม่พบทัวร์นาเมนต์ที่คุณค้นหา",
                content: "สร้างของคุณ",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "อุ๊บส์! ไม่มีทัวร์นาเมนต์ที่เล่นได้ในขณะนี้!",
                noTournamentsContent: "ดูทุกทัวร์นาเมนต์ที่เล่นได้",
                noTournamentsLink: "สด หรือ สิ้นสุดแล้ว"
            },
            tournamentTitle: "ทัวร์นาเมนต์",
            platformStr: "แพลทฟอร์ม",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "เข้าร่วม",
            viewMore: "ดูเพิ่ม",
            tournamentTypes: {
                heading: "{{gameName}} ประเภทการแข่งขัน",
                blocks: [{
                    content: "Classic Tournament (lobby style) - Solo, Duo และ Squad- สูงสุด 100 players",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangle Quick Match (lobby style) - Solo - 28 players",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Team Deathmatch (lobby style) - 2 Squads - 8 players max",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Infection Mode (lobby style) - 12 players",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "ประเภทรางวัลของเกม {{gameName}}",
                description: "รางวัลของแต่ละการแข่งขันขึ้นอยู่กับผู้จัดการแข่งขัน บางการแข่งขันอาจจัดขึ้นเพื่อความสนุกสนานเท่านั้นโดยไม่มีรางวัลใดๆ คุณสามารถดูรายการรางวัลในหน้าทัวร์นาเมนต์ นี่คือตัวอย่างรางวัลที่เราแจกในทัวร์นาเมนต์ของเกม {{gameName}}",
                blocks: [{
                    content: "รางวัลเงินสด",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Steam wallet codes",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Gift cards - Google play, Amazon, Steam และอื่นๆ",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Subscription codes - Netflix, Apple Music และ Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "และอื่นๆอีกมากมาย",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "วิธีเข้าร่วมทัวร์นาเมนต์ของ {{gameName}} ",
                blocks: o.HowToJoinThai.blocks
            },
            startTournament: {
                heading: "วิธีจัดการแข่งขันทัวร์นาเมนต์ {{gameName}}",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Steps",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Invite the Tourney</a> เข้าสู่เซิร์ฟเวอร์ Discord ของคุณลงชื่อเข้าใช้และเลือก “Authorize”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "จากเมนูหลักด้านซ้ายมือ คลิกที่ปุ่ม “Create Tournament”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: "เลือกสร้างทัวร์นาเมนต์เกมที่ต้องการ เลือกปรับแต่งทัวร์นาเมนต์ที่ปุ่ม customize หรือคลิก Publish Now เพื่อเริ่มเปิดรับสมัครโดยใช้เทมเพลตการแข่งขันที่มีให้",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "ในการปรับแต่งทัวร์นาเมนต์ สามารถกรอกข้อมูลทัวร์นาเมนต์ กฏและรางวัลได้ตามต้องการ",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "เมื่อเปิดใช้งานทัวร์นาเมนต์ บอทจะสร้าง #tournament-info และ #tournament-lobby channels ใน Discord ของคุณโดยอัตโนมัติ พิมพ์  !register ใน #tournament-lobby text channel เพื่อสมัครเข้าร่วม และดูข้อมูลของทัวร์นาเมนต์ {{gameName}} ที่สร้างว่าสมบูรณ์หรือไม่",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Game.tv web app",
                    stepsHeading: "Steps",
                    stepsContent: [{
                        stepItem: "ไปที่ <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> แล้วลงชื่อเข้าใช้ผ่าน Discord หรือ Twitter account และเลือก “Authorize”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: "คลิก + ในคอนโทรลบาร์ด้านล่างจอ",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "จากเมนูหลักด้านซ้ายมือ คลิกที่ปุ่ม “Create Tournament”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: "เลือกสร้างทัวร์นาเมนต์เกมที่ต้องการ เลือกปรับแต่งทัวร์นาเมนต์ที่ปุ่ม customize หรือคลิก Publish Now เพื่อเริ่มเปิดรับสมัครโดยใช้เทมเพลตการแข่งขันที่มีให้",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "เมื่อเปิดใใช้งานทัวร์นาเมนต์ {{gameName}} จะแสดงในรายการทัวร์นาเมนต์ของ Game.tv Web App <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>home page</a>",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "สร้างคอมมูนิตี้ จัดการแข่งขันลีกของคุณเอง",
                content: "มาร่วมเป็นผู้จัดการแข่งขัน ของ game.tv สร้างคอมมูนิตี้ จัดแข่งลีก และทัวร์นาเมนต์ต่างๆด้วยแพลทฟอร์มเดียว"
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/th.locales": 69
    }],
    35: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/tr.locales"),
            c = n.SupportedLocalesEnum.TURKISH;
        a.GameDetailsLocalesTurkish = {
            metadata: {
                title: "{{gameName}} Esports Turnuvalarına Katılın | Game.tv",
                description: "Dünya çapında her gün milyonlarca kez oynanan günlük {{gameName}} turnuvalarına katılın."
            },
            gameDetail: "{{gameName}} topluluğunu dünya çapında {{communityCount}} ayrı sunucuda gerçekleşen turnuvalarla sunar. {{gameName}} turnuvasına katılmak için ‘Join’ (Katıl) ’ı tıklayın.",
            gameInfo: {
                title: "Beğendiğiniz bir turnuva görmüyor musunuz?",
                content: "Kendi turnuvanızı oluşturun",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "Hata! Yaklaşan bir Turnuva mevcut değil!",
                noTournamentsContent: "Mevcut turnuvaları görüntüleyin",
                noTournamentsLink: "Canlı ya da Geçmiş"
            },
            tournamentTitle: "Turnuva",
            platformStr: "PLATFORM",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "KATIL",
            viewMore: "Daha Fazla",
            tournamentTypes: {
                heading: "{{gameName}} Turnuva Türleri",
                blocks: [{
                    content: "Klasik Turnuva (lobi stili) - Solo, İkili ve Takım - max 100 oyuncu",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangle Hızlı Maç (lobi stili) - Solo - 28 oyuncu",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Takımlı Ölüm Maçı (lobi stili) - 2'li Ekip - En fazla 8 oyuncu",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Infection Modu (lobi stili) - 12 oyuncu",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "{{gameName}} Turnuvaları İçin Ödül Türleri",
                description: "Bu turnuvaların sahipleri herhangi bir ödül vermeksizin sadece eğlence amaçlı turnuvalar düzenleyebilmektedir. Turnuva sayfasında listelenen ödülleri bulabilirsiniz. İşte bazı {{gameName}} turnuvalarına ev sahipliği yapan ödüller.",
                blocks: [{
                    content: "Nakit Ödüller",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Steam Cüzdan Kodları",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Hediye Kartları - Google Play, Amazon, Steam ve diğerleri",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Abonelik Kodları - Netflix, Apple Music ve Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "ve çok daha fazlası",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "{{gameName}} Turnuvasına Nasıl Katılırım?",
                blocks: o.HowToJoinTurkish.blocks
            },
            startTournament: {
                heading: "{{gameName}} Turnuvasını Nasıl Başlatırım?",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Adımlar",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Tourney Bot'u Davet Et</a>'e tıklayıp Discord sunucunuza davet edin, oturum açın ve “Yetkilendir” e tıklayın.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "Soldaki ana menüden “Turnuva Oluştur” düğmesine tıklayın.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: "Çok çeşitli turnuva oyunları arasından seçim yapın - Önceden tanımlanmış turnuva şablonlarını kullanmak için “özelleştir” düğmesine tıklayarak veya “Şimdi Yayınla” düğmesine tıklayarak turnuva ayrıntılarını özelleştirin.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "Turnuvayı kişiselleştir bölümünün altında, gereksinimlerinize göre özel Turnuva açıklaması, kuralları ve ödülleri ekleyin.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Bir kere yayınlandığında, bot otomatik olarak #tournament-info ve #turnuva-lobisi kanallarını Discord sunucunuzda oluşturacaktır; doğrulama için turnuva lobi kanalına !register yazınız ve {{gameName}} turnuva oluşturma işleminin başarılı olup olmadığını kontrol ediniz.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Game.tv web app",
                    stepsHeading: "Adımlar",
                    stepsContent: [{
                        stepItem: "<a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a>'i ziyaret edin, \"Twitter/Discord hesabınızla giriş yap\"ı ve \"Yetkilendir\" i tıklayın.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: "Ekranınızın altındaki kontrol çubuğundaki “+” simgesine tıklayın",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "Soldaki ana menüden “Turnuva Oluştur” düğmesine tıklayın.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: "Çeşitli turnuva oyunları arasından seçim yapın. Önceden tanımlanmış turnuva şablonlarını kullanmak için “özelleştir” düğmesine tıklayarak veya “Şimdi Yayınla” düğmesine tıklayarak turnuva ayrıntılarını kişiselleştirebilirsiniz.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "Yayınlandıktan sonra, {{gameName}} turnuvanız Game.tv Web App <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>Anasayfa</a> bölümünde yer alır.",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "Tüm Bölgeler",
                tournamentText: "Tüm Turnuvalar",
                langText: "Tüm Diller"
            },
            appIntroSection: {
                heading: "Topluluk oluşturun, kendi liglerinizi oluşturun ve yönetin",
                content: "Game.tv&#39;de ev sahibi olun ve topluluğunuzu oluşturun. Ligleri, turnuvaları aynı platformda çalıştırın."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/tr.locales": 70
    }],
    36: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/tw.locales"),
            c = n.SupportedLocalesEnum.CHINESE;
        a.GameDetailsLocalesChinese = {
            metadata: {
                title: "加入{{gameName}} 競賽| Game.tv",
                description: "加入每天在全球數百萬遊戲社群中運行的{{gameName}}錦標賽。"
            },
            gameDetail: "查看由社區經營的{{gameName}}電競錦標賽，該競賽在全球數百個社區中進行。 點擊“加入”以參加{{gameName}}錦標賽。",
            gameInfo: {
                title: "找不到您喜歡的比賽嗎？",
                content: "自行創建",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "糟糕！ 現在沒有即將舉行的錦標賽！",
                noTournamentsContent: "查看所有可用的比賽",
                noTournamentsLink: "直播中或是過往影片"
            },
            tournamentTitle: "錦標賽",
            platformStr: "平台",
            discord: "DISCORD",
            vs: "與",
            joinHeading: "加入",
            viewMore: "查看更多",
            tournamentTypes: {
                heading: "{{gameName}} 錦標賽類型",
                blocks: [{
                    content: "經典錦標賽（大廳風格）-單人、雙人和團隊 - 最多100名玩家",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "特殊快攻（大廳風格）-單人-28位玩家",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "團隊死亡競賽（大廳風格）-2個小隊-最多8名玩家",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "感染模式（大廳風格）-12位玩家",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "{{gameName}} 錦標賽的獎勵類型",
                description: "這些比賽的獎品完全由主辦人承擔，有些主辦人可能只是為了娛樂而舉辦比賽，而沒有任何獎金，您可以在比賽頁面上找到獎品，以下是主辦人為各種{{gameName}}比賽而贈送的獎品。",
                blocks: [{
                    content: "現金獎勵",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Steam錢包代碼",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "禮品卡-Google Play、亞馬遜、Steam...等等或者其它的",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "訂閱代碼-Netflix、Apple Music以及Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "還有更多",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "如何參加 {{gameName}} 錦標賽",
                blocks: o.HowToJoinChinese.blocks
            },
            startTournament: {
                heading: "如何開始{{gameName}}錦標賽",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "步驟",
                    stepsContent: [{
                        stepItem: "在您的Discord伺服器中<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here invite-btn btn-track-invite' data-eventname='invite_tourney_clicked'>邀請Tourney</a>機器人，登入並點擊“授權”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: "在左側的主選單中，點擊“創建比賽”按鈕",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: "從各式各樣的錦標賽遊戲中進行選擇 - 點擊“自定義”按鈕來自定義錦標賽詳細資訊，或點擊“立即發布”以使用預設的錦標賽套版",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "在自定義比賽下，根據您的要求新增自定義比賽說明、規則和獎品",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "發布後，機器人將會在您的discord伺服器中自動創建＃tournament-info和＃tournament-lobby頻道，請在＃tournament-lobby文字頻道中輸入!register參加，並檢查{{gameName}}錦標賽創建是否成功。",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Game.tv web app",
                    stepsHeading: "步驟",
                    stepsContent: [{
                        stepItem: "訪問Web應用，點擊“使用Twitter / Discord登入”，然後點擊“授權”",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: "點擊螢幕底部控制欄中的“ +”圖標",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: "在左側的主選單中，點擊“創建比賽”按鈕",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: "從各式各樣的錦標賽遊戲中選擇。 您可以透過點擊“自定義”按鈕來自定義錦標賽詳細資訊，也可以點擊“立即發布”以使用預定義的錦標賽套版",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "發布後，您的{{gameName}}錦標賽將列在Game.tv Web App<a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>主頁</a>上",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "建立社區，創建和經營自己的聯賽",
                content: "成為game.tv的主辦人並創建您的社區。在同一個平台上開啟聯賽或錦標賽。"
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/tw.locales": 71
    }],
    37: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums"),
            o = e("./../how-to-join/vi.locales"),
            c = n.SupportedLocalesEnum.VIETNAMESE;
        a.GameDetailsLocalesVietnamese = {
            metadata: {
                title: "Tham gia giải đấu esports {{gameName}} | Game.tv",
                description: "Tham gia các giải đấu {{gameName}} mỗi ngày được chạy trong hàng triệu cộng đồng trên toàn thế giới"
            },
            gameDetail: "Tìm các cộng đồng có các giải đấu esports {{gameName}} diễn ra trên toàn cầu {{communityCount}}. Nhấn 'Tham Gia' để thi đấu tại giải {{gameName}}",
            gameInfo: {
                title: "Không tìm thấy giải đấu bạn thích?",
                content: "Tạo cho riêng bạn",
                linkUrl: `/${c}/create-a-tournament`,
                noTournamentsTitle: "Ôi! Không có giải đấu nào sẵn có ngay lúc này!",
                noTournamentsContent: "Xem các giải đấu sẵn có",
                noTournamentsLink: "Trực tiếp hoặc đã diễn ra"
            },
            tournamentTitle: "Giải đấu",
            platformStr: "NỀN TẢNG",
            discord: "DISCORD",
            vs: "VS",
            joinHeading: "THAM GIA",
            viewMore: "Xem nhiều hơn",
            tournamentTypes: {
                heading: "{{gameName}} Các loại giải đấu",
                blocks: [{
                    content: "Giải đấu cổ điển (phòng chờ) - Solo, Duo và Squad- tối đa 100 người chơi",
                    imageUrl: "https://cdn.game.tv/tournaments/group-26.png"
                }, {
                    content: "Erangle Quick Match (phòng chờ) - Solo - 28 người chơi",
                    imageUrl: "https://cdn.game.tv/tournaments/group-27.png"
                }, {
                    content: "Team Deathmatch (phòng chờ) - 2 Squads - 8 người chơi",
                    imageUrl: "https://cdn.game.tv/tournaments/group-28.png"
                }, {
                    content: "Infection Mode (phòng chờ) - 12 người chơi",
                    imageUrl: "https://cdn.game.tv/tournaments/group-29.png"
                }]
            },
            prizeTypes: {
                heading: "Nhập quà thưởng cho giải đấu {{gameName}}",
                description: "Các giải thưởng cho các giải đấu này hoàn toàn thuộc về nhà tổ chức và họ có thể vận hành các giải đấu chỉ để giải trí mà không có bất kỳ giải thưởng nào. Bạn có thể tìm thấy các giải thưởng được liệt kê trên trang giải đấu. Dưới đây là một số giải thưởng mà nhà tổ chức đã tặng cho các giải đấu {{gameName}} khác nhau.",
                blocks: [{
                    content: "Thưởng tiền mặt",
                    imageUrl: "https://cdn.game.tv/tournaments/group-13.png"
                }, {
                    content: "Mã Steam wallet",
                    imageUrl: "https://cdn.game.tv/tournaments/group-24.png"
                }, {
                    content: "Thẻ quà tặng - Google play, Amazon, Steam...",
                    imageUrl: "https://cdn.game.tv/tournaments/group-23.png"
                }, {
                    content: "Mã nạp Netflix, Apple Music và Spotify",
                    imageUrl: "https://cdn.game.tv/tournaments/group-22.png"
                }, {
                    content: "Và nhiều hơn thế",
                    imageUrl: "https://cdn.game.tv/tournaments/group-20.png"
                }]
            },
            joinTournament: {
                heading: "Làm thế nào để tham gia giài đấu {{gameName}}",
                blocks: o.HowToJoinVietnamese.blocks
            },
            startTournament: {
                heading: "Cách bắt đầu một giải đấu {{gameName}}",
                blocks: [{
                    gamePlatform: "Discord",
                    stepsHeading: "Steps",
                    stepsContent: [{
                        stepItem: "<a href='https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner' class='click-here btn-track-invite' data-eventname='invite_tourney_clicked'>Mời Tourney</a> tham gia máy chủ Discord của bạn, đăng nhập và nhấp vào \"Ủy Quyền\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                    }, {
                        stepItem: 'Từ menu chính bên trái, nhấp vào nút "Tạo Giải đấu"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/3.jpg"
                    }, {
                        stepItem: 'Chọn trong số nhiều giải đấu khác nhau  - Bạn có thể tùy chỉnh chi tiết giải đấu bằng cách nhấp vào "tùy chỉnh" hoặc "thông báo" khi dùng các mẫu có sẵn',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/4.jpg"
                    }, {
                        stepItem: "Tại phần tùy chỉnh giải đấu, bạn có thể thêm vào nội dung, quy định và phần thưởng như mong muốn",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/5.jpg"
                    }, {
                        stepItem: "Khi đã thông báo. bot sẽ tự động tạo kênh #tournament-info và #tournament-lobby trong máy chủ discord của bạn, gõ !register trong kênh #tournament-lobby để tham gia giải đấu {{gameName}} ",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/discord/6.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/discord/1.jpg"
                }, {
                    gamePlatform: "Ứng dụng web Game.tv",
                    stepsHeading: "Các bước",
                    stepsContent: [{
                        stepItem: "Truy cập <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> nhấn vào \"đăng nhập bằng tài khoản Discord hoặc Twitter\" và nhấn \"Xác Thực\"",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                    }, {
                        stepItem: 'Đăng nhập và nhấn vào dấu "+" trong thanh điều khiển bên dưới màn hình',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png"
                    }, {
                        stepItem: 'Từ menu chính bên trái, nhấp vào nút "Tạo Giải đấu"',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg"
                    }, {
                        stepItem: 'Chọn trong số nhiều giải đấu khác nhau  - Bạn có thể tùy chỉnh chi tiết giải đấu bằng cách nhấp vào "tùy chỉnh" hoặc "thông báo" khi dùng các mẫu có sẵn',
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg"
                    }, {
                        stepItem: "Khi đã thông báo, giải đấu {{gameName}} của bạn sẽ có trên danh sách của <a class='click-here btn-track' data-eventname='launch_app_clicked' href='/pwauser'>home page</a> ứng dụng web Game.tv",
                        imgUrl: "https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg"
                    }],
                    firstImage: "https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg"
                }]
            },
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + c,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Xây dựng cộng đồng, tạo và điều hành các giải đấu của riêng bạn",
                content: "Trở thành người quản lý trên game.tv và tạo cộng đồng của bạn. Tổ chức các giải đấu trên cùng một nền tảng."
            }
        }
    }, {
        "./../../enums": 1,
        "./../how-to-join/vi.locales": 72
    }],
    38: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.ARABIC;
        a.HomeLocaleArabic = {
            metadata: {
                title: "Game.tv - العب أو استضافة بطولات Esports للأجهزة المحمولة التي يديرها الذكاء الاصطناعي",
                description: "انضم إلى أكبر منصة Mobile Esports وشارك في آلاف بطولات ألعاب الهاتف المحمول في أي مجتمع ألعاب مع روبوت البطولة ، Tourney."
            },
            heading: "الرياضات الإلكترونية للجماعات والعشائر والنقابات.",
            content: "",
            searchForm: {
                formPlaceholder: "لعبة البحث على سبيل المثال. Pubg",
                searchInfo: "عرض البطولات لـ",
                noresult: "اللعبة لم يتم العثور على! يرجى البحث لعبة أخرى."
            },
            gameInfo: {
                title: "ألا ترى دورة تحبها؟",
                content: "إنشاء الخاصة بك",
                noTournamentsTitle: " لا توجد دورات قادمة متوفرة الآن!",
                noTournamentsContent: "عرض جميع البطولات المتاحة",
                noTournamentsLink: "العيش أو الماضي",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "أفضل الألعاب"
            },
            tournamentTitle: "البطولات",
            platformStr: "برنامج",
            joinHeading: "انضم",
            viewMore: "عرض المزيد",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "الألعاب المتاحة",
                content: "تمت الإضافة أسبوعيًا",
                viewMoreGames: "عرض المزيد",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "دعوة Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "بناء المجتمع ، وإنشاء وإدارة البطولات الخاصة بك",
                content: "كن مضيفًا على game.tv وأنشئ مجتمعك. قم بتشغيل البطولات والبطولات على نفس المنصة."
            }
        }
    }, {
        "./../../enums": 1
    }],
    39: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.CZECH;
        a.HomeLocaleCzech = {
            metadata: {
                title: "Tourney - Esports Discord Bot Powered by AI",
                description: "Join the largest Mobile Esports Platform and participate in thousands of mobile game tournaments in any game community with our tournament bot, Tourney."
            },
            heading: "mobile esports for <br/> communities, clans and guilds",
            content: "",
            searchForm: {
                formPlaceholder: "Search game eg. Pubg",
                searchInfo: "View tournaments for",
                noresult: "Game not found! Please search another game."
            },
            gameInfo: {
                title: "Don’t see a tournament you like?",
                content: "Create your own",
                linkUrl: "/create-a-tournament",
                noTournamentsTitle: "Oops! There’s no upcoming Tournaments available right now!",
                noTournamentsContent: "View all available tournaments",
                noTournamentsLink: "Live or Past"
            },
            topGameSection: {
                title: "Top Games"
            },
            tournamentTitle: "Tournaments",
            platformStr: "PLATFORM",
            gamePageUrl: "/",
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            joinHeading: "JOIN",
            viewMore: "View more",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Available Games",
                content: "More Added Weekly",
                viewMoreGames: "View More",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Invite Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Build community, create & run your own leagues",
                content: "Become a host on game.tv and create your community. Run leagues, tournaments all on the same platform."
            }
        }
    }, {
        "./../../enums": 1
    }],
    40: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.GERMAN;
        a.HomeLocaleGerman = {
            metadata: {
                title: "Game.tv - Spiele oder veranstalte Mobile-Esports-Turniere, die von einer KI durchgeführt werden",
                description: "Trete der größten Mobile-eSports-Plattform bei und nimm mit unserem Turnier-Bot Tourney an Tausenden von Mobile-Game-Turnieren in jeder Community teil."
            },
            heading: "Mobile eSports für<br> Communities, Clans und Gilden",
            content: "",
            searchForm: {
                formPlaceholder: "Suche Spiel z. B. Pubg",
                searchInfo: "Turniere anzeigen für",
                noresult: "Spiel nicht gefunden! Bitte suche ein anderes Spiel."
            },
            gameInfo: {
                title: "Du siehst kein Turnier, das dir gefällt?",
                content: "Erstelle dein eigenes",
                noTournamentsTitle: "Hoppla! Derzeit sind keine anstehenden Turniere verfügbar!",
                noTournamentsContent: "Alle verfügbaren Turniere anzeigen",
                noTournamentsLink: "Aktuelle oder vergangene",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "Top Spiele"
            },
            tournamentTitle: "Turniere",
            platformStr: "PLATTFORM",
            joinHeading: "BEITRETEN",
            viewMore: "Mehr anzeigen",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Verfügbare Spiele",
                content: "Weitere wöchentlich hinzugefügt",
                viewMoreGames: "Mehr ansehen",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Tourney einladen",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Community aufbauen, eigene Ligen gründen und betreiben",
                content: "Werde Host auf game.tv, führe Ligen und Turniere durch und gründe deine Community."
            }
        }
    }, {
        "./../../enums": 1
    }],
    41: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HomeLocaleEnglish = {
            metadata: {
                title: "Game.tv - Play or Host Mobile Esports Tournaments Run by AI",
                description: "Join the largest Mobile Esports Platform and participate in thousands of mobile game tournaments in any game community with our tournament bot, Tourney."
            },
            heading: "mobile esports for <br/> communities, clans and guilds",
            content: "",
            searchForm: {
                formPlaceholder: "Search game eg. Pubg",
                searchInfo: "View tournaments for",
                noresult: "Game not found! Please search another game."
            },
            gameInfo: {
                title: "Don’t see a tournament you like?",
                content: "Create your own",
                linkUrl: "/create-a-tournament",
                noTournamentsTitle: "Oops! There’s no upcoming Tournaments available right now!",
                noTournamentsContent: "View all available tournaments",
                noTournamentsLink: "Live or Past"
            },
            topGameSection: {
                title: "Top Games"
            },
            tournamentTitle: "Tournaments",
            platformStr: "PLATFORM",
            gamePageUrl: "",
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            joinHeading: "JOIN",
            viewMore: "View more",
            locales: "",
            availableGamesSection: {
                heading: "Available Games",
                content: "More Added Weekly",
                viewMoreGames: "View More",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Invite Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "",
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Build community, create & run your own leagues",
                content: "Become a host on game.tv and create your community. Run leagues, tournaments all on the same platform."
            }
        }
    }, {}],
    42: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.SPANISH;
        a.HomeLocaleSpanish = {
            metadata: {
                title: "Game.tv - Juega o aloja torneos de Esports móviles ejecutados por IA",
                description: "Únete a la plataforma de Mobile Esports más grande y participa en miles de torneos de juegos móviles en cualquier comunidad de juegos con nuestro bot de torneos, Tourney."
            },
            heading: "Mobile esports para<br> comunidades, clanes y gremios.",
            content: "",
            searchForm: {
                formPlaceholder: "Buscar juego, ej. Pubg",
                searchInfo: "Ver torneos para",
                noresult: "¡Juego no encontrado! Por favor busca otro juego."
            },
            gameInfo: {
                title: "¿No ves un torneo que te gusta?",
                content: "Crea tu propio",
                noTournamentsTitle: "¡Uy! ¡No hay próximos torneos disponibles en este momento!",
                noTournamentsContent: "Ver todos los torneos disponibles",
                noTournamentsLink: "En vivo o anteriores",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "Los mejores juegos"
            },
            tournamentTitle: "Torneos",
            platformStr: "PLATAFORMA",
            joinHeading: "UNIRSE",
            viewMore: "Ver más",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Juegos disponibles",
                content: "Más añadido semanalmente",
                viewMoreGames: "Ver más",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Invita a Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Construye comunidad, crea y ejecuta tus propias ligas",
                content: "Conviértete en anfitrión en game.tv, organiza ligas, torneos y crea tu comunidad."
            }
        }
    }, {
        "./../../enums": 1
    }],
    43: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.FRENCH;
        a.HomeLocaleFrench = {
            metadata: {
                title: "Game.tv - Jouer ou Héberger des Tournois Esports Mobiles Organisés par une IA",
                description: "Rejoignez la plus grande plateforme d'Esports Mobile et participez à des milliers de tournois sur des jeux mobiles dans n'importe quelle communauté avec notre bot de tournoi, Tourney."
            },
            heading: "Esports Mobiles pour les<br> communautés, les clans et les guildes.",
            content: "",
            searchForm: {
                formPlaceholder: "Chercher le jeu Pubg par exemple",
                searchInfo: "Voir les tournois pour",
                noresult: "Jeu non trouvé! Veuillez rechercher un autre jeu."
            },
            gameInfo: {
                title: "Vous ne voyez pas de tournoi auquel vous aimeriez participer?",
                content: "Créez le votre",
                noTournamentsTitle: "Oups! Aucun tournoi à venir n'est disponible pour le moment!",
                noTournamentsContent: "Voir tous les tournois disponibles",
                noTournamentsLink: "En ligne ou Passé",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "Top Games"
            },
            tournamentTitle: "Tournois",
            platformStr: "PLATEFORME",
            joinHeading: "REJOINDRE",
            viewMore: "Afficher plus",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Jeux disponibles",
                content: "Plus d'ajout chaque semaine",
                viewMoreGames: "Voir plus",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Inviter Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Construisez une communauté, créez et gérez vos propres ligues",
                content: "Devenez hôte sur game.tv, dirigez des ligues, des tournois et créez votre communauté."
            }
        }
    }, {
        "./../../enums": 1
    }],
    44: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.INDONESIAN;
        a.HomeLocaleIndonesian = {
            metadata: {
                title: "Tourney - Esports Discord Bot Powered by AI",
                description: "Join the largest Mobile Esports Platform and participate in thousands of mobile game tournaments in any game community with our tournament bot, Tourney."
            },
            heading: "mobile esports for <br/> communities, clans and guilds",
            content: "",
            searchForm: {
                formPlaceholder: "Search game eg. Pubg",
                searchInfo: "View tournaments for",
                noresult: "Game not found! Please search another game."
            },
            gameInfo: {
                title: "Don’t see a tournament you like?",
                content: "Create your own",
                linkUrl: "/create-a-tournament",
                noTournamentsTitle: "Oops! There’s no upcoming Tournaments available right now!",
                noTournamentsContent: "View all available tournaments",
                noTournamentsLink: "Live or Past"
            },
            topGameSection: {
                title: "Top Games"
            },
            tournamentTitle: "Tournaments",
            platformStr: "PLATFORM",
            gamePageUrl: "/",
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            joinHeading: "JOIN",
            viewMore: "View more",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Available Games",
                content: "More Added Weekly",
                viewMoreGames: "View More",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Invite Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: `/${n}/`,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Bangun komunitas, buat & jalankan liga kamu sendiri",
                content: "Menjadi host di game.tv dan bentuk komunitas kalian. Jalankan liga, semua turnamen di platform yang sama."
            }
        }
    }, {
        "./../../enums": 1
    }],
    45: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./en.locales"),
            o = e("./ja.locales"),
            c = e("./ko.locales"),
            i = e("./ar.locales"),
            r = e("./es.locales"),
            s = e("./pt-br.locales"),
            l = e("./th.locales"),
            p = e("./de.locales"),
            m = e("./fr.locales"),
            d = e("./pl.locales"),
            u = e("./ru.locales"),
            M = e("./tr.locales"),
            g = e("./tw.locales"),
            b = e("./cs.locales"),
            A = e("./id.locales"),
            h = e("./it.locales"),
            z = e("./ms.locales"),
            f = e("./nl.locales"),
            T = e("./vi.locales");
        a.HomeLocales = {
            en: n.HomeLocaleEnglish,
            ar: i.HomeLocaleArabic,
            cs: b.HomeLocaleCzech,
            de: p.HomeLocaleGerman,
            es: r.HomeLocaleSpanish,
            fr: m.HomeLocaleFrench,
            id: A.HomeLocaleIndonesian,
            it: h.HomeLocaleItalian,
            ja: o.HomeLocaleJapanese,
            ko: c.HomeLocaleKoream,
            ms: z.HomeLocaleMalay,
            nl: f.HomeLocaleDutch,
            "pt-br": s.HomeLocalePortuguese,
            pl: d.HomeLocalePolish,
            ru: u.HomeLocaleRussian,
            tr: M.HomeLocaleTurkish,
            th: l.HomeLocaleThai,
            tw: g.HomeLocaleChinese,
            vi: T.HomeLocaleVietnamese
        }
    }, {
        "./ar.locales": 38,
        "./cs.locales": 39,
        "./de.locales": 40,
        "./en.locales": 41,
        "./es.locales": 42,
        "./fr.locales": 43,
        "./id.locales": 44,
        "./it.locales": 46,
        "./ja.locales": 47,
        "./ko.locales": 48,
        "./ms.locales": 49,
        "./nl.locales": 50,
        "./pl.locales": 51,
        "./pt-br.locales": 52,
        "./ru.locales": 53,
        "./th.locales": 54,
        "./tr.locales": 55,
        "./tw.locales": 56,
        "./vi.locales": 57
    }],
    46: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.ITALIAN;
        a.HomeLocaleItalian = {
            metadata: {
                title: "Game.tv - Play or Host Mobile Esports Tournaments Run by AI",
                description: "Unisciti alla più grande piattaforma di sport mobile e partecipa a migliaia di tornei in qualsiasi comunità con il nostro bot, Tourney."
            },
            heading: "Esport mobile per<br> community, clan e gilde.",
            content: "",
            searchForm: {
                formPlaceholder: "Cerca gioco ad es. Pubg",
                searchInfo: "Visualizza i tornei per",
                noresult: "Gioco non trovato! Cerca un altro gioco."
            },
            gameInfo: {
                title: "Non vedi un torneo che ti piace?",
                content: "Crea il tuo",
                noTournamentsTitle: "Oops! Al momento non ci sono tornei in arrivo!",
                noTournamentsContent: "Visualizza tutti i tornei disponibili",
                noTournamentsLink: "Dal vivo o conclusi",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "I migliori giochi"
            },
            tournamentTitle: "Tornei",
            platformStr: "PIATTAFORMA",
            joinHeading: "ENTRA",
            viewMore: "Vedi di più",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Giochi disponibili",
                content: "Più settimanali aggiunti",
                viewMoreGames: "Vedi di più",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Invita il torneo",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Costruisci una community, crea e gestisci i tuoi campionati",
                content: "Diventa un host su game.tv e crea la tua community. Gestitsci campionati, tornei, tutto sulla stessa piattaforma."
            }
        }
    }, {
        "./../../enums": 1
    }],
    47: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.JAPANESE;
        a.HomeLocaleJapanese = {
            metadata: {
                title: "Game.tv - AIによるモバイルeスポーツトーナメントをプレイ＆開催",
                description: "高機能トーナメントボット Tourneyを搭載した最大規模のモバイルeスポーツプラットフォームを使って、様々なモバイルゲームコミュニティが開催する大会に参加しよう。"
            },
            heading: "コミュニティ大会のための <br/> モバイルeスポーツプラットフォーム",
            content: "",
            searchForm: {
                formPlaceholder: "PUBG MOBILEの類似ゲームを検索",
                searchInfo: "該当ゲームのトーナメントを表示",
                noresult: "ゲームが見つかりません。他のゲームを選択してください。"
            },
            gameInfo: {
                title: "ご希望のトーナメントがありませんか？",
                content: "自分のトーナメントを作成する。",
                noTournamentsTitle: "現在エントリー可能なトーナメントはありません。",
                noTournamentsContent: "エントリー可能なトーナメントをすべて表示",
                noTournamentsLink: "現在開催中、または過去のトーナメント",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "人気のゲーム"
            },
            tournamentTitle: "トーナメント",
            platformStr: "プラットフォーム",
            joinHeading: "参加する",
            viewMore: "さらに表示",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "ゲーム一覧",
                content: "（今後も追加）",
                viewMoreGames: "もっと見る",
                appLaunchButtons: [{
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Tourneyを追加",
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "すべての地域",
                tournamentText: "すべての大会",
                langText: "すべての言語"
            },
            appIntroSection: {
                heading: "大会を開催＆運営して、<br/> コミュニティを盛り上げよう！",
                content: "Game.tvを使って大会を開催しよう！大会の作成から運営まで、ワンストップでの円滑なオペレーションが可能です！"
            }
        }
    }, {
        "./../../enums": 1
    }],
    48: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.KOREAN;
        a.HomeLocaleKoream = {
            metadata: {
                title: "Game.tv - AI 모바일 E스포츠 토너먼트 플렛폼: 플레이 or 운영",
                description: "토너먼트 봇인 Tourney와 함께 가장 큰 모바일 E스포츠 플랫폼에 가입하고 어떠한 게임 커뮤니티에서든 수천 개의 모바일 게임 토너먼트에 참여해보세요."
            },
            heading: "커뮤니티, 클랜 및 길드를위한 모바일 e스포츠.",
            content: "",
            searchForm: {
                formPlaceholder: "게임 검색 예: 펍지",
                searchInfo: "토너먼트 보기",
                noresult: "게이믈 찾을 수 없습니다! 다른 게임을 검색해 보세요."
            },
            gameInfo: {
                title: "원하는 토너먼트가 없나요?",
                content: "직접 토너먼트를 만들어 보세요",
                noTournamentsTitle: "죄송합니다! 현재 예정된 토너먼트가 없습니다!",
                noTournamentsContent: "참여 가능한 모든 토너먼트보기",
                noTournamentsLink: "진행중인 또는 이전 경기",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "상위 게임들"
            },
            tournamentTitle: "토너먼트",
            platformStr: "플랫폼",
            joinHeading: "참여하기",
            viewMore: "더보기",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "이용 가능한 게임",
                content: "매주 업데이트됨",
                viewMoreGames: "자세히 보기",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Tourney 초대",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "커뮤니티 구축, 나만의 리그 생성 및 운영",
                content: "game.tv의 호스트가되어 커뮤니티를 만드세요. 동일한 플랫폼에서 리그, 토너먼트를 모두 운영해보세요."
            }
        }
    }, {
        "./../../enums": 1
    }],
    49: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.MALAY;
        a.HomeLocaleMalay = {
            metadata: {
                title: "Tourney - Esports Discord Bot Powered by AI",
                description: "Join the largest Mobile Esports Platform and participate in thousands of mobile game tournaments in any game community with our tournament bot, Tourney."
            },
            heading: "mobile esports for <br/> communities, clans and guilds",
            content: "",
            searchForm: {
                formPlaceholder: "Search game eg. Pubg",
                searchInfo: "View tournaments for",
                noresult: "Game not found! Please search another game."
            },
            gameInfo: {
                title: "Don’t see a tournament you like?",
                content: "Create your own",
                linkUrl: "/create-a-tournament",
                noTournamentsTitle: "Oops! There’s no upcoming Tournaments available right now!",
                noTournamentsContent: "View all available tournaments",
                noTournamentsLink: "Live or Past"
            },
            topGameSection: {
                title: "Top Games"
            },
            tournamentTitle: "Tournaments",
            platformStr: "PLATFORM",
            gamePageUrl: "/",
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            joinHeading: "JOIN",
            viewMore: "View more",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Available Games",
                content: "More Added Weekly",
                viewMoreGames: "View More",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Invite Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Build community, create & run your own leagues",
                content: "Become a host on game.tv and create your community. Run leagues, tournaments all on the same platform."
            }
        }
    }, {
        "./../../enums": 1
    }],
    50: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.DUTCH;
        a.HomeLocaleDutch = {
            metadata: {
                title: "Tourney - Esports Discord Bot Powered by AI",
                description: "Join the largest Mobile Esports Platform and participate in thousands of mobile game tournaments in any game community with our tournament bot, Tourney."
            },
            heading: "mobile esports for <br/> communities, clans and guilds",
            content: "",
            searchForm: {
                formPlaceholder: "Search game eg. Pubg",
                searchInfo: "View tournaments for",
                noresult: "Game not found! Please search another game."
            },
            gameInfo: {
                title: "Don’t see a tournament you like?",
                content: "Create your own",
                linkUrl: "/create-a-tournament",
                noTournamentsTitle: "Oops! There’s no upcoming Tournaments available right now!",
                noTournamentsContent: "View all available tournaments",
                noTournamentsLink: "Live or Past"
            },
            topGameSection: {
                title: "Top Games"
            },
            tournamentTitle: "Tournaments",
            platformStr: "PLATFORM",
            gamePageUrl: "/",
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            joinHeading: "JOIN",
            viewMore: "View more",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Available Games",
                content: "More Added Weekly",
                viewMoreGames: "View More",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Invite Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Build community, create & run your own leagues",
                content: "Become a host on game.tv and create your community. Run leagues, tournaments all on the same platform."
            }
        }
    }, {
        "./../../enums": 1
    }],
    51: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.POLISH;
        a.HomeLocalePolish = {
            metadata: {
                title: "Game.tv - Graj lub Organizuj Mobilne E-SPORTOWE turnieje prowadzone przez AI",
                description: "Dołącz do największej platformy mobilnej E-sportowej  i weź udział w tysiącach turniejów gier mobilnych w dowolnej społeczności gamingowej dzięki naszemu botowi turniejowemu Tourney."
            },
            heading: "Mobilny e-sport dla społeczności gamingowych, klany oraz gildie.",
            content: "",
            searchForm: {
                formPlaceholder: "Wyszukaj grę np. Pubg",
                searchInfo: "Wyświetl turnieje dla",
                noresult: "Gra nie znaleziona! Wyszukaj inną grę."
            },
            gameInfo: {
                title: "Nie widzisz turnieju, w którym byś chciał wziąć udział?",
                content: "Stwórz swój własny!",
                noTournamentsTitle: "Ups! W tej chwili nie ma żadnych nadchodzących turniejów!",
                noTournamentsContent: "Wyświetl wszystkie dostępne turnieje",
                noTournamentsLink: "Na żywo",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "Top Gry"
            },
            tournamentTitle: "Turnieje",
            platformStr: "PLATFORMA",
            joinHeading: "DOŁĄCZ",
            viewMore: "Zobacz więcej",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Dostępne Gry",
                content: "Więcej gier dodawanych tygodniowo",
                viewMoreGames: "Zobacz więcej",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Zaproś Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Buduj społeczność, twórz i prowadź własne ligi",
                content: "Zostań gospodarzem game.tv i stwórz swoją społeczność. Prowadź ligi, turnieje na tej samej platformie."
            }
        }
    }, {
        "./../../enums": 1
    }],
    52: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.PORTUGUESE;
        a.HomeLocalePortuguese = {
            metadata: {
                title: "Game.tv - Jogue ou Crie Torneios de E-sports Mobile executados por IA",
                description: "Faça parte da maior Plataforma de Esports Mobile e participe de milhares de torneios para jogos mobile em qualquer comunidade de jogos com o nosso bot de torneios, o Tourney."
            },
            heading: "Mobile Esports para<br> comunidades, clãs e guildas. ",
            content: "",
            searchForm: {
                formPlaceholder: "Pesquisar jogo por exemplo. Pubg",
                searchInfo: "Ver torneios para ",
                noresult: "Jogo não encontrado! Por favor, procure outro jogo."
            },
            gameInfo: {
                title: "Você não vê um torneio que você gosta?",
                content: "Crie o seu próprio ",
                noTournamentsTitle: "Oops! Não há torneios disponíveis no momento!",
                noTournamentsContent: "Ver todos os torneios disponíveis",
                noTournamentsLink: "Ao Vivo ou Passados ",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "Top Jogos "
            },
            tournamentTitle: "Torneios",
            platformStr: "PLATAFORMA ",
            joinHeading: "JUNTAR-SE",
            viewMore: "Ver Mais",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Jogos Disponíveis ",
                content: "Mais Adicionados Semanalmente ",
                viewMoreGames: "Ver Mais",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Convidar o Tourney ",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Fortaleça a sua comunidade, crie e administre suas próprias ligas",
                content: "Torne-se um organizador na game.tv, execute ligas, torneios e crie sua comunidade."
            }
        }
    }, {
        "./../../enums": 1
    }],
    53: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.RUSSIAN;
        a.HomeLocaleRussian = {
            metadata: {
                title: "Game.tv — принимайте участие в мобильных киберспортивных турнирах или проводите собственные мероприятия под управлением ИИ",
                description: "Присоединяйтесь к крупнейшей киберспортивной платформе и участвуйте в турнирах по мобильным играм в любом сообществе при поддержке турнирного бота Tourney."
            },
            heading: "Мобильный киберспорт для<br> сообществ, кланов и гильдий.",
            content: "",
            searchForm: {
                formPlaceholder: "Найти игру, например, Pubg",
                searchInfo: "Посмотреть турниры для",
                noresult: "Игра не найдена. Пожалуйста, попробуйте найти другую."
            },
            gameInfo: {
                title: "Не можете найти турнир по нраву?",
                content: "Создайте свой",
                noTournamentsTitle: "К сожалению, на данный момент нет предстоящих турниров.",
                noTournamentsContent: "Посмотреть все доступные турниры",
                noTournamentsLink: "В прямом эфире или прошедшие",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "Популярные игры"
            },
            tournamentTitle: "Турниры",
            platformStr: "ПЛАТФОРМА",
            joinHeading: "ПРИСОЕДИНИТЬСЯ",
            viewMore: "Еще",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Доступные игры",
                content: "Новые игры появляются каждую неделю",
                viewMoreGames: "Еще",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Пригласить Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Выстраивайте сильное сообщество, создавайте лиги и управляйте ими",
                content: "Станьте организатором на game.tv, управляйте лигами, турнирами и создавайте свое сообщество."
            }
        }
    }, {
        "./../../enums": 1
    }],
    54: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.THAI;
        a.HomeLocaleThai = {
            metadata: {
                title: "Game.tv - เล่นและจัดการแข่งขัน Mobile Esports Tournaments ด้วย AI",
                description: "ร่วมเป็นส่วนหนึ่งของ Mobile Esports Platform ที่ใหญ่ที่สุด เข้าร่วมแข่งขันเกมมือถือนับพันทัวร์นาเมนต์ ด้วย tournament bot ของเรา Tourney"
            },
            heading: "Mobile esports สำหรับ<br> communities, clans และ guilds.",
            content: "",
            searchForm: {
                formPlaceholder: "ค้นหาเกม eg. Pubg",
                searchInfo: "ดูทัวร์นาเมนต์สำหรับ",
                noresult: "ไม่พบเกม กรุณาค้นหาเกมอื่น"
            },
            gameInfo: {
                title: "ไม่พบทัวร์นาเมนต์ที่ชอบ",
                content: "สร้างของคุณ",
                noTournamentsTitle: "อุ๊บส์! ไม่มีทัวร์นาเมนต์ที่เล่นได้ในขณะนี้!",
                noTournamentsContent: "ดูทุกทัวร์นาเมนต์ที่เล่นได้",
                noTournamentsLink: "สด หรือ สิ้นสุดแล้ว",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "Top Games"
            },
            tournamentTitle: "Tournaments",
            platformStr: "PLATFORM",
            joinHeading: "เข้าร่วม",
            viewMore: "ดูเพิ่ม",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "เกมที่รองรับ",
                content: "เพิ่มขึ้นทุกสัปดาห์",
                viewMoreGames: "ดูเพิ่ม",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Invite Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "สร้างคอมมูนิตี้ จัดการแข่งขันลีกของคุณเอง",
                content: "มาร่วมเป็นผู้จัดการแข่งขัน ของ game.tv สร้างคอมมูนิตี้ จัดแข่งลีก และทัวร์นาเมนต์ต่างๆด้วยแพลทฟอร์มเดียว"
            }
        }
    }, {
        "./../../enums": 1
    }],
    55: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.TURKISH;
        a.HomeLocaleTurkish = {
            metadata: {
                title: "Game.tv -AI Tarafından Yönetilen Mobil E-Spor Turnuvaların'da Oyna ya da onları Host Et",
                description: "En büyük Mobil Esports Platformuna katılın ve turnuva botumuz Tourney ile herhangi bir oyun topluluğunda binlerce mobil oyun turnuvasına katılın."
            },
            heading: "Tüm Topluluğunuz için Mobil E-Spor",
            content: "",
            searchForm: {
                formPlaceholder: "Oyun Arama örn. Pubg",
                searchInfo: "Turnuvaları göster",
                noresult: "Oyun bulunamadı! Lütfen başka bir oyun arayın."
            },
            gameInfo: {
                title: "Beğendiğiniz bir turnuva görmüyor musunuz?",
                content: "Kendinize özel oluşturun",
                noTournamentsTitle: "Hata! Şu anda yaklaşmakta olan bir Turnuva bulunmuyor.",
                noTournamentsContent: "Mevcut tüm turnuvaları görüntüleyin",
                noTournamentsLink: "Canlı ya da Geçmiş",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "En İyi Oyunlar"
            },
            tournamentTitle: "Turnuva",
            platformStr: "PLATFORM",
            joinHeading: "KATIL",
            viewMore: "Daha fazla göster",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Turnuva Düzenleyebileceğiniz Oyunlar",
                content: "Haftalık Olarak Eklenir",
                viewMoreGames: "Daha Fazla Göster",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Discord Sunucunuza Ekleyin",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "Tüm Bölgeler",
                tournamentText: "Tüm Turnuvalar",
                langText: "Tüm Diller"
            },
            appIntroSection: {
                heading: "Topluluk oluşturun, kendi liglerinizi oluşturun ve yönetin",
                content: "Game.tv&#39;de ev sahibi olun ve topluluğunuzu oluşturun. Ligleri, turnuvaları aynı platformda çalıştırın."
            }
        }
    }, {
        "./../../enums": 1
    }],
    56: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.CHINESE;
        a.HomeLocaleChinese = {
            metadata: {
                title: "Game.tv-暢玩或主導由人工智慧AI所舉辦的手遊電競賽事",
                description: "加入最大的手機電競平台，並使用我們的賽事機器人Tourney參加任何遊戲社群中的數千次手機電競賽事。"
            },
            heading: "專屬於玩家社群、戰隊以及公會的手遊電競。",
            content: "",
            searchForm: {
                formPlaceholder: "搜尋遊戲，例如：PubG",
                searchInfo: "查看比賽",
                noresult: "找不到遊戲！ 請搜尋其他遊戲。"
            },
            gameInfo: {
                title: "找不到您喜歡的比賽嗎？",
                content: "自行創建",
                noTournamentsTitle: "糟糕！ 現在沒有即將舉行的錦標賽！",
                noTournamentsContent: "查看所有可用的比賽",
                noTournamentsLink: "直播中或是過往影片",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "熱門遊戲"
            },
            tournamentTitle: "錦標賽",
            platformStr: "平台",
            joinHeading: "加入",
            viewMore: "查看更多",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "可用遊戲",
                content: "每週新增更多",
                viewMoreGames: "查看更多",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "邀請 Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "建立社區，創建和經營自己的聯賽",
                content: "成為game.tv的主辦人並創建您的社區。在同一個平台上開啟聯賽或錦標賽。"
            }
        }
    }, {
        "./../../enums": 1
    }],
    57: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const n = e("./../../enums").SupportedLocalesEnum.VIETNAMESE;
        a.HomeLocaleVietnamese = {
            metadata: {
                title: "Game.tv - Chơi hoặc tổ chức các giải đấu Esports di động - vận hành bằng AI",
                description: "Tham gia nền tảng Thể Thao Điện Tử Di Động lớn nhất và thi đấu với hàng ngàn giải đấu game di động trong bất kỳ cộng đồng nào với bot giải đấu, Tourney"
            },
            heading: "Thể thao di động cho các cộng đồng, nhóm và bang hội",
            content: "",
            searchForm: {
                formPlaceholder: "Tìm game, ví dụ: PUBG",
                searchInfo: "Xem các giải đấu",
                noresult: "Không tìm thấy trò chơi! Vui lòng tìm trò chơi khác."
            },
            gameInfo: {
                title: "Không tìm thấy giải đấu bạn thích?",
                content: "Tạo cho riêng bạn",
                noTournamentsTitle: "Ôi! Không có giải đấu nào sẵn có ngay lúc này!",
                noTournamentsContent: "Xem các giải đấu sẵn có",
                noTournamentsLink: "Trực tiếp hoặc đã diễn ra",
                linkUrl: `/${n}/create-a-tournament`
            },
            topGameSection: {
                title: "Top Trò chơi"
            },
            tournamentTitle: "Giải đấu",
            platformStr: "NỀN TẢNG",
            joinHeading: "THAM GIA",
            viewMore: "Xem nhiều hơn",
            gamePageUrl: "/" + n,
            filterIcon: "https://cdn.game.tv/tournaments/filter.png",
            discordIcon: "https://cdn.game.tv/tournaments/discord.png",
            locales: "/" + n,
            availableGamesSection: {
                heading: "Available Games",
                content: "More Added Weekly",
                viewMoreGames: "View More",
                appLaunchButtons: [{
                    logoUrl: "https://cdn.game.tv/discord_logo_white.png",
                    link: "https://www.game.tv/oauthv3/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner",
                    name: "Mời Tourney",
                    extraClasses: "btn-track-invite",
                    eventName: "invite_tourney_clicked"
                }]
            },
            gamelink: "/" + n,
            tournamentFilter: {
                regionText: "All  Regions",
                tournamentText: "All Tournaments",
                langText: "All Languages"
            },
            appIntroSection: {
                heading: "Xây dựng cộng đồng, tạo và điều hành các giải đấu của riêng bạn",
                content: "Trở thành người quản lý trên game.tv và tạo cộng đồng của bạn. Tổ chức các giải đấu trên cùng một nền tảng."
            }
        }
    }, {
        "./../../enums": 1
    }],
    58: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinArabic = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "خطوات",
                stepsContent: [{
                    stepItem: "انتقل إلى tournament-info# النص معلومات المسابقة في Discord لمعرفة تفاصيل البطولة",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "انقر على tournament-lobby# في الجزء السفلي من tournament-info channel#",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "للمشاركة في البطولة ، اكتب! قم بالتسجيل في tournament-lobby#",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "سوف يقوم Tourney  بإرسال رسالة مباشرة إليك ؛ اكتب joinsolo! & lt!؛ اسم المستخدم الخاص بك في اللعبة> في رسالة مباشرة",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "لقد قمت بالتسجيل بنجاح في {{howToJoinTitle}} البطولة.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "تطبيق الويب Game.tv",
                type: "web",
                stepsHeading: "خطوات",
                stepsContent: [{
                    stepItem: "انتقل إلى <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>تطبيق الويب</a> وتسجيل الدخول باستخدام حساب Discord أو Twitter",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "ضمن علامة تبويب تقويم الدورة ، يمكنك العثور على قائمة البطولات القادمة {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "انقر على البطولة التي تريد الانضمام إليها ؛ سترى زر التسجيل في نهاية الصفحة",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: 'أدخل اسم داخل اللعبة الخاص بك وانقر فوق الزر "تسجيل" في نهاية الصفحة',
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "اكتمل التسجيل الآن.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "قم بتنزيل تطبيق game.tv من متجر التطبيقات أو متجر التطبيقات",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "تسجيل الدخول في التطبيق برقم الجوال وإدخال OTP",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "انقر على البطولة لعرض تفاصيلها ، ثم انقر فوق تسجيل واتبع التعليمات التي تظهر على الشاشة",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "لقد سجلت بنجاح في البطولة",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    59: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinGerman = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Schritte",
                stepsContent: [{
                    stepItem: "Gehe zum #tournament-info Textkanal in Discord, um mehr über Turnierdetails zu erfahren",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Klicke unten im #tournament-info Kanal auf #tournament-lobby",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "Um am Turnier teilzunehmen, gib !register im #tournament-lobby Kanal ein",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney-Bot sendet dir eine Direktnachricht. Gib !joinsolo &lt;deinen Benutzernamen im Spiel> in der DM ein",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "Du hast dich erfolgreich für das {{howToJoinTitle}} Turnier angemeldet.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Game.tv-Web-App",
                type: "web",
                stepsHeading: "Schritte",
                stepsContent: [{
                    stepItem: "Gehe zu<a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web-App</a>und melde dich mit deinem Discord- oder Twitter-Konto an",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Auf der Registerkarte Turnierkalender findest du die Liste der anstehenden {{howToJoinTitle}} Turniere.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Klicke auf das Turnier, an dem du teilnehmen möchtest. Du siehst die Schaltfläche Registrieren am unteren Ende der Seite",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Gib deinen IGN (IN-GAME NAME) ein und klicke auf die Schaltfläche Registrieren am unteren Ende der Seite",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "Die Registrierung ist jetzt abgeschlossen.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Lade die game.tv App aus dem App-Store oder Play-Store herunter",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Melde dich mit Handynummer und einmaligem PIN-Code an",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Tippe auf ein Turnier, um Details anzuzeigen, tippe auf Registrieren und folge den Anweisungen auf dem Bildschirm",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "Du hast dich erfolgreich für dein Turnier registriert",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    60: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinEnglish = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg",
                stepsContent: [{
                    stepItem: "Go to the #tournament-info text channel in Discord to know about tournament details",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Click on #tournament-lobby at the bottom of #tournament-info channel",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "To participate in the tournament, type !register in #tournament-lobby channel",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney bot will send you a Direct Message; type !joinsolo &lt;your in-game username> in DM",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "You have successfully registered for the {{howToJoinTitle}} tournament.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }]
            }, {
                gamePlatform: "Game.tv web app",
                type: "web",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg",
                stepsContent: [{
                    stepItem: "Go to <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> and sign in with your Discord or Twitter account",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Under the Tournament Calendar tab, you can find the list of upcoming {{howToJoinTitle}} tournaments.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Click on the tournament you want to join; you will see a Register button at the bottom end of the page",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Enter your IGN (IN-GAME NAME) and click on the Register button at the bottom end of the page",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "The registration is now complete.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }]
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Download the game.tv app from App store or Play store",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Login in App with mobile number & entering the OTP",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Click on tournament to view its details then click register & follow the onscreen instructions",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "You’ve successfully registered for your tournament",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    61: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinSpanish = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Pasos",
                stepsContent: [{
                    stepItem: "Ve al canal de texto #tournament-info en Discord para conocer los detalles del torneo.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Haz clic en el #tournament-lobby en la parte inferior del #tournament-info del torneo",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "Para participar en el torneo, escriba !register en el canal #tournament-lobby",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney bot te enviará un mensaje directo; escribe !joinsolo <tu nombre de usuario en el juego> en MD",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "Te has registrado con éxito en el torneo {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Game.tv web app",
                type: "web",
                stepsHeading: "Pasos",
                stepsContent: [{
                    stepItem: "Vaya a <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> e inicie sesión con su cuenta de Discord o Twitter",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "En la pestaña Calendario de torneos, puedes encontrar la lista de los próximos torneos de {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Haz clic en el torneo al que deseas unirte; verá un botón Registrarse en la parte inferior de la página",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Ingrese su IGN (NOMBRE EN EL JUEGO) y haga clic en el botón Registrarse en la parte inferior de la página",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "El registro ya está completo.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Descargue la aplicación game.tv de App store o Play store",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Inicie sesión con un número de teléfono móvil y un código PIN único",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Toca el torneo para ver los detalles, toca Registrarse y sigue las instrucciones en pantalla",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "Te has registrado con éxito en tu torneo",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    62: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinFrench = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Étapes",
                stepsContent: [{
                    stepItem: "Accédez au salon textuel #tournament-info dans Discord pour connaître les détails du tournoi",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Cliquez sur #tournament-lobby en dessous du salon #tournament-info",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "Pour participer au tournoi, tapez !register dans le salon #tournament-lobby",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney vous enverra un Message Privé, tapez !joinsolo &lt;your in-game username> en MP",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "Vous vous êtes inscrit avec succès au tournoi {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Application Web Game.tv",
                type: "web",
                stepsHeading: "Étapes",
                stepsContent: [{
                    stepItem: "Accédez à <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>App Web</a>  et connectez-vous avec votre compte Discord ou Twitter",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Sous l'onglet Calendrier des tournois, vous pouvez trouver la liste des tournois {{howToJoinTitle}} à venir.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Cliquez sur le tournoi auquel vous souhaitez participer; vous verrez un bouton Enregistrer en bas de la page",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Entrez votre IGN, IN-GAME NAME (NOM EN JEU) et cliquez sur le bouton S'inscrire en bas de la page",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "L'inscription est maintenant terminée.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Téléchargez l'application game.tv depuis l'App Store ou le Play Store",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Connectez-vous avec un numéro mobile et un code PIN unique",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Appuyez sur tournoi pour afficher les détails, appuyez sur S'inscrire et suivez les instructions à l'écran",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "Vous vous êtes inscrit avec succès à votre tournoi",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    63: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinItalian = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Passi",
                stepsContent: [{
                    stepItem: "Vai al canale di testo #tournament-info in Discord per conoscere i dettagli del torneo",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Fai clic su #tournament-lobby nella parte inferiore del canale #tournament-info channel",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "Per partecipare al torneo, digitare! Registrati nel canale #tournament-lobby",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney bot ti invierà un messaggio diretto; digita ! oinsolo & lt; il tuo nome utente in-game> in DM",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "Ti sei registrato con successo al torneo {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "App Web Game.tv",
                type: "web",
                stepsHeading: "Passi",
                stepsContent: [{
                    stepItem: "Vai a <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>App Web</a> e accedi con il tuo account Discord o Twitter",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Nella scheda Calendario dei tornei puoi trovare l'elenco dei prossimi tornei {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Fai clic sul torneo a cui vuoi partecipare; vedrai un pulsante Registra nella parte inferiore della pagina",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Inserisci il tuo IGN (IN-GAME NAME) e fai clic sul pulsante Registra nella parte inferiore della pagina",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "La registrazione è ora completa.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Scarica l'app game.tv dall'App Store o dal Play Store",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Accedi in App con numero di cellulare e inserisci l'OTP",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Fai clic sul torneo per visualizzarne i dettagli, quindi fai clic su Registra e segui le istruzioni visualizzate",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "Ti sei registrato con successo per il tuo torneo",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    64: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinJapanese = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "手順",
                stepsContent: [{
                    stepItem: "Discordの#tournament-infoチャンネルにてトーナメントの詳細を確認することができます。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "#tournament-infoチャンネルの下にある#tournament-lobbyをクリックしてください。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "トーナメントにエントリーする際は、#tournament-lobbyチャンネルにて「!register」と入力します。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "TourneyボットによってDM（ダイレクトメッセージ）が送信されたら、DM内にて!joinsolo <ゲームで使用しているユーザー名>を入力します。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "{{howToJoinTitle}}のトーナメントにエントリーしました。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Game.tvウェブアプリ",
                type: "web",
                stepsHeading: "手順",
                stepsContent: [{
                    stepItem: "<a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>ウェブアプリ</a>へアクセスしてDiscordまたはTwitterアカウントでサインインします。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "トーナメント日程タブの下にて、近日開催予定の{{howToJoinTitle}}のトーナメントのリストを確認できます。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "エントリーしたいトーナメントを選択します。（ページの最後にエントリーボタンがあります）",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "ゲームで使用している名前を入力し、ページの最後にあるエントリーボタンを押します。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "エントリーが完了しました。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "App Store、またはGoogle PlayストアよりGame.tvのアプリをダウンロードしてください。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "電話番号とワンタイムパスワードを入力してアプリにログインしてください。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "トーナメントをクリックして詳細を確認した後、エントリーをクリックして画面上の指示に従ってエントリーを行ってください。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "トーナメントへのエントリーが完了しました。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    65: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinKorean = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "방법",
                stepsContent: [{
                    stepItem: "토너먼트 세부 사항에 대해 알아 보려면 Discord의 # tournament-info 채널을 확인해 주세요.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "# tournament-info 채널 하단에서 # tournament-lobby를 클릭하십시오.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "토너먼트에 참여하려면 # tournament-lobby 채널에서 !register를 입력하십시오.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney 봇이 DM을 보낼것입니다; !joinsolo를 입력해주세요",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "{{howToJoinTitle}} 토너먼트에 성공적으로 등록했습니다.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Game.tv 웹앱",
                type: "web",
                stepsHeading: "단계",
                stepsContent: [{
                    stepItem: "<a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>웹앱</a>에 방문하여 Discord 또는 Twitter 계정으로 로그인 해주세요.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "토너먼트 캘린더 탭에서 다음 {{howToJoinTitle}} 토너먼트 목록을 찾을 수 있습니다.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "참여하고자하는 토너먼트를 클릭하십시오. 페이지 하단에 등록 버튼이 표시됩니다",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "IGN (게임 내 이름)을 입력하고 페이지 하단의 등록 버튼을 클릭하십시오",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "등록이 완료되었습니다.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "App Store 또는 Play Store에서 Game.TV 앱을 다운로드하십시오.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "휴대폰 번호로 앱에 로그인하고 OTP 입력하세요.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "토너먼트를 클릭하여 세부 정보를 확인한 후, 등록을 클릭하고 화면의 지시를 따릅니다",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "토너먼트에 성공적으로 등록했습니다",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    66: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinPolish = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Krok po kroku",
                stepsContent: [{
                    stepItem: "Przejdź do kanału tekstowego #tournament-info turnieju na Discordzie, aby dowiedzieć się o szczegółach turnieju",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Kliknij w #tournament-lobby na dole kanału z informacjami o turnieju",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "To weź udział w turnieju, wpisz !register w #tournament-lobby channel",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Bot Tourney wyśle Ci wiadomość ; wpiszj !joinsolo &lt;twoja nazwa użytknownika w grze> na prywatnej wiadomości Tourney",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "Z powodzeniem zarejestrowałeś się w turnieju {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Game.tv web app",
                type: "web",
                stepsHeading: "Krok po kroku",
                stepsContent: [{
                    stepItem: "Kliknij w <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> i zaloguj się za pomocą konta Discord lub Twitter",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Na karcie Kalendarz turniejów znajdziesz listę nadchodzących turniejów {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Kliknij turniej, do którego chcesz dołączyć; zobaczysz przycisk Zarejestruj się w dolnej części strony",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Wpisz swój IGN (NAZWA W GRZE) i kliknij przycisk Zarejestruj się w dolnej części strony",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "Rejestracja przebiegła pomyślnie.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Pobierz aplikację game.tv ze sklepu App Store lub Play",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Zaloguj się w aplikacji za pomocą numeru telefonu komórkowego i wprowadź hasło jednorazowe",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Kliknij w szczegóły turnieju, aby wyświetlić więcej inforamcji, a następnie kliknij zarejestruj się i postępuj zgodnie z instrukcjami wyświetlanymi na ekranie",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "Rejestracja do turnieju zakończyła się powodzeniem",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    67: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinPortuguese = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Etapas",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg",
                stepsContent: [{
                    stepItem: "Vá para o canal de texto #tournament-info no Discord para saber os detalhes do torneio",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Clique em #tournament-lobby na parte inferior do canal #tournament-info",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "Para participar do torneio, digite !register no canal #tournament-lobby",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "O bot de torneio enviará uma mensagem direta a você; digite !joinsolo &lt;your in-game username> no DM",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "Você se inscreveu com sucesso no torneio de {{gameName}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }]
            }, {
                gamePlatform: "App da web Game.tv",
                type: "web",
                stepsHeading: "Etapas",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg",
                stepsContent: [{
                    stepItem: "Vá para <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> ae faça login com sua conta do Discord ou Twitter",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Na aba Calendário de Torneios, você pode encontrar a lista dos próximos torneios de {{gameName}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Clique no torneio em que quer entrar; você verá um botão Registrar na parte inferior da página",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Digite seu IGN (NOME NO JOGO) e clique no botão Registrar na parte inferior da página",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "O registro agora está completo.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }]
            }, {
                gamePlatform: "Aplicativo Game.tv",
                type: "app",
                stepsHeading: "Etapas",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Baixe o aplicativo game.tv da App Store ou Play Store.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Faça login no aplicativo com o número do celular e digite o OTP",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Clique no torneio para ver os detalhes e depois clique em registrar e siga as instruções na tela",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "Você se registrou com sucesso ao torneio",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    68: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinRussian = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Инструкции",
                stepsContent: [{
                    stepItem: "Перейдите на текстовый канал #tournament-info в Discord, чтобы узнать подробности о турнире.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Нажмите на #tournament-lobby в нижней части канала #tournament-info",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "Для участия в турнире введите команду !register на канале #tournament-lobby",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Бот Tourney отправит вам личное сообщение; наберите !joinsolo &lt;ваш игровой никнейм> в ЛС",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "Вы успешно зарегистрировались на турнир {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Веб-приложение Game.tv",
                type: "web",
                stepsHeading: "Инструкции",
                stepsContent: [{
                    stepItem: "Перейдите в <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>веб-приложение</a> и войдите через аккаунт Discord или Twitter",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Во вкладке 'Календарь турниров' вы найдете список предстоящих турниров {{howToJoinTitle}}.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Кликните на турнир, в котором вы хотите принять участие; вы увидите кнопку регистрации в нижней части страницы",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Введите свой IGN (НИКНЕЙМ В ИГРЕ) и нажмите на кнопку 'Зарегистрироваться' в нижней части страницы",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "Регистрация завершена.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Скачайте приложение game.tv из App Store или Play Store",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Выполните вход с помощью номера мобильного телефона и одноразового пин-кода",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: 'Нажмите на турнир, чтобы узнать подробности, и нажмите на "Зарегистрироваться". Далее следуйте инструкциям на экране',
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "Вы успешно зарегистрировались на турнир",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    69: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinThai = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Steps",
                stepsContent: [{
                    stepItem: "ไปที่ #tournament-info text channel ใน Discord เพื่อดูรายละเอียดและข้อมูลการแข่งขัน",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "คลิกที่ #tournament-lobby ด้านล่างของ #tournament-info channel",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "เพื่อเข้าร่วมแข่งขัน พิมพ์คำสั่ง !register ใน #tournament-lobby channel",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney bot จะส่ง Direct Message ถึงคุณพิมพ์คำสั่ง !joinsolo &lt;your in-game username> ใน DM",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "เท่านี้ก็ลงทะเบียนเข้าร่วมการแข่งขัน {{howToJoinTitle}} แล้ว",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Game.tv web app",
                type: "web",
                stepsHeading: "Steps",
                stepsContent: [{
                    stepItem: "ไปที่ <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> แล้วลงชื่อเข้าใช้ผ่าน Discord หรือ Twitter account",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "ใต้แท็บปฏิทินการแข่งขันคุณสามารถดูรายชื่อทัวร์นาเมนต์ของเกม {{howToJoinTitle}}",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "คลิกที่ทัวร์นาเมนต์ที่คุณต้องการเข้าร่วม จะพบปุ่ม ลงทะเบียน ด้านล่างของหน้าจอ",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "กรอกข้อมูล IGN (IN-GAME NAME) แล้วคลิกที่ปุ่ม Register ด้านล่างของหน้าจอ",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "ลงทะเบียนสำเร็จ",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "ดาวน์โหลดแอพพลิเคชัน game.tv จาก App store หรือ Play store",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "ล็อกอินในแอพพลิเคชันด้วยหมายเลขโทรศัพท์และกรอกรหัส OTP",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "คลิกที่ทัวนาเมนต์เพื่อดูรายละเอียด ก่อนจะลงทะเบียนและปฏิบัติตามคำแนะนำบนหน้าจอ",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "คุณลงทะเบียนสำเร็จ",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    70: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinTurkish = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Adımlar",
                stepsContent: [{
                    stepItem: "Turnuva ayrıntıları için Discord'ta yer alan #turnuva-bilgisi kanalına gidin",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "#turnuva-bilgi kanalının altındaki #turnuva-lobisi'ne tıklayın",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "Turnuvaya katılmak için, #turnuva-lobisi kanalına!",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney Botu size bir özel mesaj gönderecek, buraya; !joinsolo &lt;oyun içi gerçek adınız>'ı yazıp, bu mesaja cevap verin.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "{{howToJoinTitle}} turnuvasına başarıyla kayıt oldunuz.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Game.tv web app",
                type: "web",
                stepsHeading: "Adımlar",
                stepsContent: [{
                    stepItem: "<a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> gidin ve Discord ya da Twitter hesabınızla giriş yapın.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Turnuva Takvimi sekmesinin altında yaklaşmakta olan {{howToJoinTitle}} turnuvalarının listesini bulabilirsiniz.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Katılmak istediğiniz turnuvaya tıklayın; Sayfanın sonunda bir Kayıt butonu göreceksiniz.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Oyun Adınızı girin ve sayfanın sonundaki Kayıt düğmesine tıklayın.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "Kayıt tamamlandı.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Game.tv uygulamasını App Store'dan veya Play Store'dan indirin",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Uygulamaya cep telefonu numarası ile giriş yapın ve OTP'yi girin",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Ayrıntılarını görmek için turnuvaya tıklayın, ardından kayıt tıklayın ve ekrandaki talimatları izleyin",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "Turnuvaya başarıyla kaydoldun",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    71: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinChinese = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "步驟",
                stepsContent: [{
                    stepItem: "前往Discord中的＃tournament-info文字頻道以了解比賽詳細資訊",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "點擊＃tournament-info頻道底部的＃tournament-lobby",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "想參加比賽，請在＃tournament-lobby頻道中輸入!register",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Tourney 機器人將會傳給您一則私人訊息，請在私訊中輸入!joinsolo <您的遊戲ID>來報名比賽",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "您已成功報名 {{howToJoinTitle}} 錦標賽。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Game.tv web app",
                type: "web",
                stepsHeading: "步驟",
                stepsContent: [{
                    stepItem: "前往<a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a>並使用Discord或Twitter帳戶登入",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "在“比賽行事曆”的標籤下，您可以找到即將進行的{{howToJoinTitle}}比賽列表。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "請點擊您想參加的比賽，您將在頁面底部看到一個“報名”按鈕",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "請輸入您的IGN（遊戲內名稱），然後點擊頁面底部的“報名”按鈕。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "報名現已完成。",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "從App Store或Play商店下載game.tv應用程式",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "使用手機號碼登入應用並輸入OTP",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "點擊錦標賽以查看其詳細資訊，然後點擊註冊並按照畫面上的說明進行操作",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "您已成功註冊錦標賽",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    72: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.HowToJoinVietnamese = {
            blocks: [{
                gamePlatform: "Discord",
                type: "discord",
                stepsHeading: "Các bước",
                stepsContent: [{
                    stepItem: "Vào kênh #tournament-info trong Discord để biết chi tiết giải đấu",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
                }, {
                    stepItem: "Nhấn vào #tournament-lobby ở bên dưới kênh #tournament-info",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/2.jpg"
                }, {
                    stepItem: "Để tham gia giải đấu, hãy gõ !register trong channel #tournament-lobby",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/3.jpg"
                }, {
                    stepItem: "Bot Tourney sẽ gửi cho bạn một tin nhắn trực tiếp (Direct Message - DM), bạn hãy gõ !joinsolo <tên-trong-game> tại đây",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/4.jpg"
                }, {
                    stepItem: "Bạn đã đăng ký thành công cho giải đấu {{howToJoinTitle}} ",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/discord/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/discord/1.jpg"
            }, {
                gamePlatform: "Ứng dụng web Game.tv",
                type: "web",
                stepsHeading: "Các bước",
                stepsContent: [{
                    stepItem: "Truy cập <a href='/pwauser' class='click-here btn-track' data-eventname='launch_app_clicked'>Web App</a> và đăng nhập bằng tài khoản Discord hoặc Twitter của bạn",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
                }, {
                    stepItem: "Trong tab Lịch giải đấu, bạn có thể tìm thấy danh sách các giải đấu {{howToJoinTitle}} sắp tới",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg"
                }, {
                    stepItem: "Bấm vào giải đấu bạn muốn tham gia; bạn sẽ thấy nút Đăng ký ở cuối trang",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg"
                }, {
                    stepItem: "Nhập IGN của bạn (TÊN TRONG GAME - IN GAME NAME) và nhấp vào nút Đăng ký ở cuối trang",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg"
                }, {
                    stepItem: "Việc đăng ký đã hoàn tất.",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg"
                }],
                firstImage: "https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg"
            }, {
                gamePlatform: "Game.tv app",
                type: "app",
                stepsHeading: "Steps",
                firstImage: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg",
                stepsContent: [{
                    stepItem: "Download the game.tv app from App store or Play store",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/1.jpg"
                }, {
                    stepItem: "Login in App with mobile number & entering the OTP",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/2.jpg"
                }, {
                    stepItem: "Click on tournament to view its details then click register & follow the onscreen instructions",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/3.jpg"
                }, {
                    stepItem: "You’ve successfully registered for your tournament",
                    imgUrl: "https://cdn.game.tv/game-page/join-tournament/app/4.jpg"
                }]
            }]
        }
    }, {}],
    73: [function(e, t, a) {
        t.exports = {
            version: "2019c",
            zones: ["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5", "Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5", "Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5", "Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5", "Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6", "Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4", "Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5", "Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6", "Africa/Casablanca|LMT +00 +01|u.k 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0|32e5", "Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3", "Africa/El_Aaiun|LMT -01 +00 +01|Q.M 10 0 -10|012323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0|20e4", "Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5", "Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|", "Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5", "Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5", "Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5", "Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|0121|-2le00 4i6N0 2q00|", "Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5", "Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5", "Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326", "America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4", "America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3", "America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4", "America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0|", "America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0|", "America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0|", "America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0|", "America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0|", "America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0|", "America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0|", "America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0|", "America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0|", "America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4", "America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5", "America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2", "America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3", "America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5", "America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4", "America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5", "America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3", "America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2", "America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2", "America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5", "America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4", "America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2", "America/Campo_Grande|LMT -04 -03|3C.s 40 30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|77e4", "America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5", "America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3", "America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5", "America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4", "America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5", "America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2", "America/Cuiaba|LMT -04 -03|3I.k 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|54e4", "America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8", "America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3", "America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2", "America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5", "America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|0123425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 JxX1 SMX 1cN0 1cL0 aW10 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5", "America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|0121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 XQp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5", "America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3", "America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5", "America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5", "America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5", "America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3", "America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2", "America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2", "America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5", "America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5", "America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4", "America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4", "America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5", "America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4", "America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010401054541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 8wn0 1cN0 1cL0 1cN0 1cK0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2", "America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2", "America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4", "America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3", "America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 1nX1 e0X 9vd0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5", "America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6", "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6", "America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4", "America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5", "America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5", "America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4", "America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4", "America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4", "America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2", "America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5", "America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|01203030303030303030303030303030304545450454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6", "America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2", "America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3", "America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5", "America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5", "America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4", "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6", "America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2", "America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2", "America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2", "America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4", "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5", "America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4", "America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4", "America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5", "America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|", "America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842", "America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2", "America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5", "America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4", "America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229", "America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4", "America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|62e5", "America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5", "America/Sao_Paulo|LMT -03 -02|36.s 30 20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|20e6", "America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452", "America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2", "America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3", "America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5", "America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656", "America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4", "America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642", "America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10", "Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70", "Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80", "Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1", "Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60", "Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5", "Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "Antarctica/Rothera|-00 -03|0 30|01|gOo0|130", "Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20", "Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40", "Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25", "Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4", "Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5", "Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5", "Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5", "Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3", "Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4", "Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4", "Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4", "Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|", "Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5", "Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4", "Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6", "Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|", "Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5", "Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4", "Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4", "Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6", "Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4", "Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3", "Asia/Shanghai|CST CDT|-80 -90|010101010101010101010101010|-1c2w0 Rz0 11d0 1wL0 A10 8HX0 1G10 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 aL0 1tU30 Rb0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6", "Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5", "Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6", "Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5", "Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4", "Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5", "Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4", "Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|0101010101010101010101010101010123232323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|18e5", "Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|25e4", "Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5", "Asia/Hong_Kong|LMT HKT HKST HKWT JST|-7A.G -80 -90 -8u -90|0123412121212121212121212121212121212121212121212121212121212121212121|-2CFH0 1taO0 Hc0 xUu 9tBu 11z0 1tDu Rc0 1wo0 11A0 1cM0 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5", "Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Europe/Istanbul|IMT EET EEST +03 +04|-1U.U -20 -30 -30 -40|0121212121212121212121212121212121212121212121234312121212121212121212121212121212121212121212121212121212121212123|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSN0 CL0 mp0 1Vz0 1gN0 8yn0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1ip0 19X0 1ip0 17b0 qdB0 38L0 1jd0 Tz0 l6O0 11A0 WN0 1qL0 TB0 1tX0 U10 1tz0 11B0 1in0 17d0 z90 cne0 pb0 2Cp0 1800 14o0 1dc0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6", "Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4", "Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|012121212121321212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4", "Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5", "Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4", "Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6", "Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5", "Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5", "Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2", "Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5", "Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4", "Asia/Macau|LMT CST +09 +10 CDT|-7y.a -80 -90 -a0 -90|012323214141414141414141414141414141414141414141414141414141414141414141|-2CFHy.a 1uqKy.a PX0 1kn0 15B0 11b0 4Qq0 1oM0 11c0 1ko0 1u00 11A0 1cM0 11c0 1o00 11A0 1o00 11A0 1oo0 1400 1o00 11A0 1o00 U00 1tA0 U00 1wo0 Rc0 1wru U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cK0 1cO0 1cK0 1cO0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|57e4", "Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3", "Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5", "Asia/Manila|PST PDT JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6", "Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4", "Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4", "Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5", "Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5", "Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4", "Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4", "Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BA0|29e5", "Asia/Qostanay|LMT +04 +05 +06|-4e.s -40 -50 -60|012323232323232323232123232323232323232323232323|-1Pc4e.s eUoe.s 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|", "Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|01232323232323232323232323232323232323232323232|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 zQl0|73e4", "Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5", "Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4", "Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4", "Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -a0 -9u|012343434343151515151515134343|-2um8r.Q 97XV.Q 1m1zu 6CM0 Fz0 1kN0 14n0 1kN0 14L0 1zd0 On0 69B0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6", "Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2", "Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5", "Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5", "Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5", "Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6", "Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3", "Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rc0 1lc0 14o0 1zc0 Oo0 1zc0 Oo0|38e6", "Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5", "Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5", "Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2", "Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4", "Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5", "Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5", "Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4", "Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3", "Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4", "Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3", "Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4", "Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4", "Atlantic/South_Georgia|-02|20|0||30", "Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2", "Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5", "Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3", "Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746", "Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4", "Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368", "Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4", "Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10", "Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5", "Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5", "CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|30e2", "CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "EST|EST|50|0||", "EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "Etc/GMT-0|GMT|0|0||", "Etc/GMT-1|+01|-10|0||", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Etc/GMT-11|+11|-b0|0||", "Pacific/Tarawa|+12|-c0|0||29e3", "Etc/GMT-13|+13|-d0|0||", "Etc/GMT-14|+14|-e0|0||", "Etc/GMT-2|+02|-20|0||", "Etc/GMT-3|+03|-30|0||", "Etc/GMT-4|+04|-40|0||", "Etc/GMT-5|+05|-50|0||", "Etc/GMT-6|+06|-60|0||", "Indian/Christmas|+07|-70|0||21e2", "Etc/GMT-8|+08|-80|0||", "Pacific/Palau|+09|-90|0||21e3", "Etc/GMT+1|-01|10|0||", "Etc/GMT+10|-10|a0|0||", "Etc/GMT+11|-11|b0|0||", "Etc/GMT+12|-12|c0|0||", "Etc/GMT+3|-03|30|0||", "Etc/GMT+4|-04|40|0||", "Etc/GMT+5|-05|50|0||", "Etc/GMT+6|-06|60|0||", "Etc/GMT+7|-07|70|0||", "Etc/GMT+8|-08|80|0||", "Etc/GMT+9|-09|90|0||", "Etc/UTC|UTC|0|0||", "Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5", "Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3", "Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|10e5", "Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5", "Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6", "Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5", "Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5", "Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5", "Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5", "Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4", "Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4", "Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3", "Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Kaliningrad|CET CEST EET EEST MSK MSD +03|-10 -20 -20 -30 -30 -40 -30|01010101010101232454545454545454543232323232323232323232323232323232323232323262|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 390 7A0 1en0 12N0 1pbb0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4", "Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5", "Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4", "Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5", "Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5", "Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5", "Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3", "Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6", "Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6", "Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4", "Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5", "Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5", "Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810|", "Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5", "Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4", "Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|13e5", "Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4", "Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1ao0 1co0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5", "Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 9Jd0|10e5", "Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4", "HST|HST|a0|0||", "Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2", "Indian/Cocos|+0630|-6u|0||596", "Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130", "Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3", "Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4", "Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4", "Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4", "Pacific/Kwajalein|+11 +10 +09 -12 +12|-b0 -a0 -90 c0 -c0|012034|-1kln0 akp0 6Up0 12ry0 Wan0|14e3", "MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "MST|MST|70|0||", "MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600", "Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4", "Pacific/Chuuk|+10 +09|-a0 -90|01010|-2ewy0 axB0 RVX0 axd0|49e3", "Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3", "Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1", "Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483", "Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00|88e4", "Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3", "Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125", "Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4", "Pacific/Guam|GST +09 GDT ChST|-a0 -90 -b0 -a0|01020202020202020203|-18jK0 6pB0 AhB0 3QL0 g2p0 3p91 WOX rX0 1zd0 Rb0 1wp0 Rb0 5xd0 rX0 5sN0 zb1 1C0X On0 ULb0|17e4", "Pacific/Honolulu|HST HDT HWT HPT HST|au 9u 9u 9u a0|0102304|-1thLu 8x0 lef0 8wWu iAu 46p0|37e4", "Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2", "Pacific/Kosrae|+11 +09 +10 +12|-b0 -90 -a0 -c0|01021030|-2ewz0 axC0 HBy0 akp0 axd0 WOK0 1bdz0|66e2", "Pacific/Majuro|+11 +09 +10 +12|-b0 -90 -a0 -c0|0102103|-2ewz0 axC0 HBy0 akp0 6RB0 12um0|28e3", "Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2", "Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2", "Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E QCnB.E 7mqu 1lnbu|10e3", "Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2", "Pacific/Norfolk|+1112 +1130 +1230 +11 +12|-bc -bu -cu -b0 -c0|012134343434343434343434343434343434343434|-Kgbc W01G Oo0 1COo0 9Jcu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|25e4", "Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3", "Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56", "Pacific/Pohnpei|+11 +09 +10|-b0 -90 -a0|010210|-2ewz0 axC0 HBy0 akp0 axd0|34e3", "Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3", "Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4", "Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3", "PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|"],
            links: ["Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Curacao|America/Aruba", "America/Curacao|America/Kralendijk", "America/Curacao|America/Lower_Princes", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Panama|America/Cayman", "America/Phoenix|US/Arizona", "America/Port_of_Spain|America/Anguilla", "America/Port_of_Spain|America/Antigua", "America/Port_of_Spain|America/Dominica", "America/Port_of_Spain|America/Grenada", "America/Port_of_Spain|America/Guadeloupe", "America/Port_of_Spain|America/Marigot", "America/Port_of_Spain|America/Montserrat", "America/Port_of_Spain|America/St_Barthelemy", "America/Port_of_Spain|America/St_Kitts", "America/Port_of_Spain|America/St_Lucia", "America/Port_of_Spain|America/St_Thomas", "America/Port_of_Spain|America/St_Vincent", "America/Port_of_Spain|America/Tortola", "America/Port_of_Spain|America/Virgin", "America/Regina|Canada/Saskatchewan", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Tijuana|America/Ensenada", "America/Tijuana|America/Santa_Isabel", "America/Tijuana|Mexico/BajaNorte", "America/Toronto|America/Montreal", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Dhaka|Asia/Dacca", "Asia/Dubai|Asia/Muscat", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Kuala_Lumpur|Asia/Singapore", "Asia/Kuala_Lumpur|Singapore", "Asia/Macau|Asia/Macao", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Qatar|Asia/Bahrain", "Asia/Rangoon|Asia/Yangon", "Asia/Riyadh|Asia/Aden", "Asia/Riyadh|Asia/Kuwait", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|PRC", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimphu|Asia/Thimbu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Urumqi|Asia/Kashgar", "Atlantic/Faroe|Atlantic/Faeroe", "Atlantic/Reykjavik|Iceland", "Atlantic/South_Georgia|Etc/GMT+2", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Tasmania", "Australia/Lord_Howe|Australia/LHI", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/NSW", "Etc/GMT-0|Etc/GMT", "Etc/GMT-0|Etc/GMT+0", "Etc/GMT-0|Etc/GMT0", "Etc/GMT-0|Etc/Greenwich", "Etc/GMT-0|GMT", "Etc/GMT-0|GMT+0", "Etc/GMT-0|GMT-0", "Etc/GMT-0|GMT0", "Etc/GMT-0|Greenwich", "Etc/UTC|Etc/UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UCT", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Helsinki|Europe/Mariehamn", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Portugal", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Oslo|Arctic/Longyearbyen", "Europe/Oslo|Atlantic/Jan_Mayen", "Europe/Prague|Europe/Bratislava", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Europe/Zurich|Europe/Busingen", "Europe/Zurich|Europe/Vaduz", "Indian/Christmas|Etc/GMT-7", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Chuuk|Pacific/Truk", "Pacific/Chuuk|Pacific/Yap", "Pacific/Easter|Chile/EasterIsland", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kwajalein|Kwajalein", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Palau|Etc/GMT-9", "Pacific/Pohnpei|Pacific/Ponape", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Tarawa|Etc/GMT-12", "Pacific/Tarawa|Pacific/Funafuti", "Pacific/Tarawa|Pacific/Wake", "Pacific/Tarawa|Pacific/Wallis"],
            countries: ["AD|Europe/Andorra", "AE|Asia/Dubai", "AF|Asia/Kabul", "AG|America/Port_of_Spain America/Antigua", "AI|America/Port_of_Spain America/Anguilla", "AL|Europe/Tirane", "AM|Asia/Yerevan", "AO|Africa/Lagos Africa/Luanda", "AQ|Antarctica/Casey Antarctica/Davis Antarctica/DumontDUrville Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Syowa Antarctica/Troll Antarctica/Vostok Pacific/Auckland Antarctica/McMurdo", "AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia", "AS|Pacific/Pago_Pago", "AT|Europe/Vienna", "AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Currie Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla", "AW|America/Curacao America/Aruba", "AX|Europe/Helsinki Europe/Mariehamn", "AZ|Asia/Baku", "BA|Europe/Belgrade Europe/Sarajevo", "BB|America/Barbados", "BD|Asia/Dhaka", "BE|Europe/Brussels", "BF|Africa/Abidjan Africa/Ouagadougou", "BG|Europe/Sofia", "BH|Asia/Qatar Asia/Bahrain", "BI|Africa/Maputo Africa/Bujumbura", "BJ|Africa/Lagos Africa/Porto-Novo", "BL|America/Port_of_Spain America/St_Barthelemy", "BM|Atlantic/Bermuda", "BN|Asia/Brunei", "BO|America/La_Paz", "BQ|America/Curacao America/Kralendijk", "BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco", "BS|America/Nassau", "BT|Asia/Thimphu", "BW|Africa/Maputo Africa/Gaborone", "BY|Europe/Minsk", "BZ|America/Belize", "CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Blanc-Sablon America/Toronto America/Nipigon America/Thunder_Bay America/Iqaluit America/Pangnirtung America/Atikokan America/Winnipeg America/Rainy_River America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Yellowknife America/Inuvik America/Creston America/Dawson_Creek America/Fort_Nelson America/Vancouver America/Whitehorse America/Dawson", "CC|Indian/Cocos", "CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi", "CF|Africa/Lagos Africa/Bangui", "CG|Africa/Lagos Africa/Brazzaville", "CH|Europe/Zurich", "CI|Africa/Abidjan", "CK|Pacific/Rarotonga", "CL|America/Santiago America/Punta_Arenas Pacific/Easter", "CM|Africa/Lagos Africa/Douala", "CN|Asia/Shanghai Asia/Urumqi", "CO|America/Bogota", "CR|America/Costa_Rica", "CU|America/Havana", "CV|Atlantic/Cape_Verde", "CW|America/Curacao", "CX|Indian/Christmas", "CY|Asia/Nicosia Asia/Famagusta", "CZ|Europe/Prague", "DE|Europe/Zurich Europe/Berlin Europe/Busingen", "DJ|Africa/Nairobi Africa/Djibouti", "DK|Europe/Copenhagen", "DM|America/Port_of_Spain America/Dominica", "DO|America/Santo_Domingo", "DZ|Africa/Algiers", "EC|America/Guayaquil Pacific/Galapagos", "EE|Europe/Tallinn", "EG|Africa/Cairo", "EH|Africa/El_Aaiun", "ER|Africa/Nairobi Africa/Asmara", "ES|Europe/Madrid Africa/Ceuta Atlantic/Canary", "ET|Africa/Nairobi Africa/Addis_Ababa", "FI|Europe/Helsinki", "FJ|Pacific/Fiji", "FK|Atlantic/Stanley", "FM|Pacific/Chuuk Pacific/Pohnpei Pacific/Kosrae", "FO|Atlantic/Faroe", "FR|Europe/Paris", "GA|Africa/Lagos Africa/Libreville", "GB|Europe/London", "GD|America/Port_of_Spain America/Grenada", "GE|Asia/Tbilisi", "GF|America/Cayenne", "GG|Europe/London Europe/Guernsey", "GH|Africa/Accra", "GI|Europe/Gibraltar", "GL|America/Godthab America/Danmarkshavn America/Scoresbysund America/Thule", "GM|Africa/Abidjan Africa/Banjul", "GN|Africa/Abidjan Africa/Conakry", "GP|America/Port_of_Spain America/Guadeloupe", "GQ|Africa/Lagos Africa/Malabo", "GR|Europe/Athens", "GS|Atlantic/South_Georgia", "GT|America/Guatemala", "GU|Pacific/Guam", "GW|Africa/Bissau", "GY|America/Guyana", "HK|Asia/Hong_Kong", "HN|America/Tegucigalpa", "HR|Europe/Belgrade Europe/Zagreb", "HT|America/Port-au-Prince", "HU|Europe/Budapest", "ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura", "IE|Europe/Dublin", "IL|Asia/Jerusalem", "IM|Europe/London Europe/Isle_of_Man", "IN|Asia/Kolkata", "IO|Indian/Chagos", "IQ|Asia/Baghdad", "IR|Asia/Tehran", "IS|Atlantic/Reykjavik", "IT|Europe/Rome", "JE|Europe/London Europe/Jersey", "JM|America/Jamaica", "JO|Asia/Amman", "JP|Asia/Tokyo", "KE|Africa/Nairobi", "KG|Asia/Bishkek", "KH|Asia/Bangkok Asia/Phnom_Penh", "KI|Pacific/Tarawa Pacific/Enderbury Pacific/Kiritimati", "KM|Africa/Nairobi Indian/Comoro", "KN|America/Port_of_Spain America/St_Kitts", "KP|Asia/Pyongyang", "KR|Asia/Seoul", "KW|Asia/Riyadh Asia/Kuwait", "KY|America/Panama America/Cayman", "KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral", "LA|Asia/Bangkok Asia/Vientiane", "LB|Asia/Beirut", "LC|America/Port_of_Spain America/St_Lucia", "LI|Europe/Zurich Europe/Vaduz", "LK|Asia/Colombo", "LR|Africa/Monrovia", "LS|Africa/Johannesburg Africa/Maseru", "LT|Europe/Vilnius", "LU|Europe/Luxembourg", "LV|Europe/Riga", "LY|Africa/Tripoli", "MA|Africa/Casablanca", "MC|Europe/Monaco", "MD|Europe/Chisinau", "ME|Europe/Belgrade Europe/Podgorica", "MF|America/Port_of_Spain America/Marigot", "MG|Africa/Nairobi Indian/Antananarivo", "MH|Pacific/Majuro Pacific/Kwajalein", "MK|Europe/Belgrade Europe/Skopje", "ML|Africa/Abidjan Africa/Bamako", "MM|Asia/Yangon", "MN|Asia/Ulaanbaatar Asia/Hovd Asia/Choibalsan", "MO|Asia/Macau", "MP|Pacific/Guam Pacific/Saipan", "MQ|America/Martinique", "MR|Africa/Abidjan Africa/Nouakchott", "MS|America/Port_of_Spain America/Montserrat", "MT|Europe/Malta", "MU|Indian/Mauritius", "MV|Indian/Maldives", "MW|Africa/Maputo Africa/Blantyre", "MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Mazatlan America/Chihuahua America/Ojinaga America/Hermosillo America/Tijuana America/Bahia_Banderas", "MY|Asia/Kuala_Lumpur Asia/Kuching", "MZ|Africa/Maputo", "NA|Africa/Windhoek", "NC|Pacific/Noumea", "NE|Africa/Lagos Africa/Niamey", "NF|Pacific/Norfolk", "NG|Africa/Lagos", "NI|America/Managua", "NL|Europe/Amsterdam", "NO|Europe/Oslo", "NP|Asia/Kathmandu", "NR|Pacific/Nauru", "NU|Pacific/Niue", "NZ|Pacific/Auckland Pacific/Chatham", "OM|Asia/Dubai Asia/Muscat", "PA|America/Panama", "PE|America/Lima", "PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier", "PG|Pacific/Port_Moresby Pacific/Bougainville", "PH|Asia/Manila", "PK|Asia/Karachi", "PL|Europe/Warsaw", "PM|America/Miquelon", "PN|Pacific/Pitcairn", "PR|America/Puerto_Rico", "PS|Asia/Gaza Asia/Hebron", "PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores", "PW|Pacific/Palau", "PY|America/Asuncion", "QA|Asia/Qatar", "RE|Indian/Reunion", "RO|Europe/Bucharest", "RS|Europe/Belgrade", "RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Astrakhan Europe/Volgograd Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr", "RW|Africa/Maputo Africa/Kigali", "SA|Asia/Riyadh", "SB|Pacific/Guadalcanal", "SC|Indian/Mahe", "SD|Africa/Khartoum", "SE|Europe/Stockholm", "SG|Asia/Singapore", "SH|Africa/Abidjan Atlantic/St_Helena", "SI|Europe/Belgrade Europe/Ljubljana", "SJ|Europe/Oslo Arctic/Longyearbyen", "SK|Europe/Prague Europe/Bratislava", "SL|Africa/Abidjan Africa/Freetown", "SM|Europe/Rome Europe/San_Marino", "SN|Africa/Abidjan Africa/Dakar", "SO|Africa/Nairobi Africa/Mogadishu", "SR|America/Paramaribo", "SS|Africa/Juba", "ST|Africa/Sao_Tome", "SV|America/El_Salvador", "SX|America/Curacao America/Lower_Princes", "SY|Asia/Damascus", "SZ|Africa/Johannesburg Africa/Mbabane", "TC|America/Grand_Turk", "TD|Africa/Ndjamena", "TF|Indian/Reunion Indian/Kerguelen", "TG|Africa/Abidjan Africa/Lome", "TH|Asia/Bangkok", "TJ|Asia/Dushanbe", "TK|Pacific/Fakaofo", "TL|Asia/Dili", "TM|Asia/Ashgabat", "TN|Africa/Tunis", "TO|Pacific/Tongatapu", "TR|Europe/Istanbul", "TT|America/Port_of_Spain", "TV|Pacific/Funafuti", "TW|Asia/Taipei", "TZ|Africa/Nairobi Africa/Dar_es_Salaam", "UA|Europe/Simferopol Europe/Kiev Europe/Uzhgorod Europe/Zaporozhye", "UG|Africa/Nairobi Africa/Kampala", "UM|Pacific/Pago_Pago Pacific/Wake Pacific/Honolulu Pacific/Midway", "US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu", "UY|America/Montevideo", "UZ|Asia/Samarkand Asia/Tashkent", "VA|Europe/Rome Europe/Vatican", "VC|America/Port_of_Spain America/St_Vincent", "VE|America/Caracas", "VG|America/Port_of_Spain America/Tortola", "VI|America/Port_of_Spain America/St_Thomas", "VN|Asia/Bangkok Asia/Ho_Chi_Minh", "VU|Pacific/Efate", "WF|Pacific/Wallis", "WS|Pacific/Apia", "YE|Asia/Riyadh Asia/Aden", "YT|Africa/Nairobi Indian/Mayotte", "ZA|Africa/Johannesburg", "ZM|Africa/Maputo Africa/Lusaka", "ZW|Africa/Maputo Africa/Harare"]
        }
    }, {}],
    74: [function(e, t, a) {
        (t.exports = e("./moment-timezone")).tz.load(e("./data/packed/latest.json"))
    }, {
        "./data/packed/latest.json": 73,
        "./moment-timezone": 75
    }],
    75: [function(e, t, a) {
        //! moment-timezone.js
        //! version : 0.5.28
        //! Copyright (c) JS Foundation and other contributors
        //! license : MIT
        //! github.com/moment/moment-timezone
        ! function(a, n) {
            "use strict";
            "object" == typeof t && t.exports ? t.exports = n(e("moment")) : "function" == typeof define && define.amd ? define(["moment"], n) : n(a.moment)
        }(this, (function(e) {
            "use strict";

            function t(e) {
                return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48
            }

            function a(e) {
                var a = 0,
                    n = e.split("."),
                    o = n[0],
                    c = n[1] || "",
                    i = 1,
                    r = 0,
                    s = 1;
                for (45 === e.charCodeAt(0) && (a = 1, s = -1); a < o.length; a++) r = 60 * r + t(o.charCodeAt(a));
                for (a = 0; a < c.length; a++) i /= 60, r += t(c.charCodeAt(a)) * i;
                return r * s
            }

            function n(e) {
                for (var t = 0; t < e.length; t++) e[t] = a(e[t])
            }

            function o(e, t) {
                var a, n = [];
                for (a = 0; a < t.length; a++) n[a] = e[t[a]];
                return n
            }

            function c(e) {
                var t = e.split("|"),
                    a = t[2].split(" "),
                    c = t[3].split(""),
                    i = t[4].split(" ");
                return n(a), n(c), n(i),
                    function(e, t) {
                        for (var a = 0; a < t; a++) e[a] = Math.round((e[a - 1] || 0) + 6e4 * e[a]);
                        e[t - 1] = 1 / 0
                    }(i, c.length), {
                        name: t[0],
                        abbrs: o(t[1].split(" "), c),
                        offsets: o(a, c),
                        untils: i,
                        population: 0 | t[5]
                    }
            }

            function i(e) {
                e && this._set(c(e))
            }

            function r(e, t) {
                this.name = e, this.zones = t
            }

            function s(e) {
                var t = e.toTimeString(),
                    a = t.match(/\([a-z ]+\)/i);
                "GMT" === (a = a && a[0] ? (a = a[0].match(/[A-Z]/g)) ? a.join("") : void 0 : (a = t.match(/[A-Z]{3,5}/g)) ? a[0] : void 0) && (a = void 0), this.at = +e, this.abbr = a, this.offset = e.getTimezoneOffset()
            }

            function l(e) {
                this.zone = e, this.offsetScore = 0, this.abbrScore = 0
            }

            function p(e, t) {
                for (var a, n; n = 6e4 * ((t.at - e.at) / 12e4 | 0);)(a = new s(new Date(e.at + n))).offset === e.offset ? e = a : t = a;
                return e
            }

            function m(e, t) {
                return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : e.zone.population !== t.zone.population ? t.zone.population - e.zone.population : t.zone.name.localeCompare(e.zone.name)
            }

            function d(e, t) {
                var a, o;
                for (n(t), a = 0; a < t.length; a++) o = t[a], y[o] = y[o] || {}, y[o][e] = !0
            }

            function u(e) {
                var t, a, n, o = e.length,
                    c = {},
                    i = [];
                for (t = 0; t < o; t++)
                    for (a in n = y[e[t].offset] || {}) n.hasOwnProperty(a) && (c[a] = !0);
                for (t in c) c.hasOwnProperty(t) && i.push(W[t]);
                return i
            }

            function M() {
                try {
                    var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    if (e && e.length > 3) {
                        var t = W[g(e)];
                        if (t) return t;
                        f("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
                    }
                } catch (e) {}
                var a, n, o, c = function() {
                        var e, t, a, n = (new Date).getFullYear() - 2,
                            o = new s(new Date(n, 0, 1)),
                            c = [o];
                        for (a = 1; a < 48; a++)(t = new s(new Date(n, a, 1))).offset !== o.offset && (e = p(o, t), c.push(e), c.push(new s(new Date(e.at + 6e4)))), o = t;
                        for (a = 0; a < 4; a++) c.push(new s(new Date(n + a, 0, 1))), c.push(new s(new Date(n + a, 6, 1)));
                        return c
                    }(),
                    i = c.length,
                    r = u(c),
                    d = [];
                for (n = 0; n < r.length; n++) {
                    for (a = new l(A(r[n]), i), o = 0; o < i; o++) a.scoreOffsetAt(c[o]);
                    d.push(a)
                }
                return d.sort(m), d.length > 0 ? d[0].zone.name : void 0
            }

            function g(e) {
                return (e || "").toLowerCase().replace(/\//g, "_")
            }

            function b(e) {
                var t, a, n, o;
                for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) o = g(a = (n = e[t].split("|"))[0]), O[o] = e[t], W[o] = a, d(o, n[2].split(" "))
            }

            function A(e, t) {
                e = g(e);
                var a, n = O[e];
                return n instanceof i ? n : "string" == typeof n ? (n = new i(n), O[e] = n, n) : N[e] && t !== A && (a = A(N[e], A)) ? ((n = O[e] = new i)._set(a), n.name = W[e], n) : null
            }

            function h(e) {
                var t, a, n, o;
                for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) n = g((a = e[t].split("|"))[0]), o = g(a[1]), N[n] = o, W[n] = a[0], N[o] = n, W[o] = a[1]
            }

            function z(e) {
                var t = "X" === e._f || "x" === e._f;
                return !(!e._a || void 0 !== e._tzm || t)
            }

            function f(e) {
                "undefined" != typeof console && "function" == typeof console.error && console.error(e)
            }

            function T(t) {
                var a = Array.prototype.slice.call(arguments, 0, -1),
                    n = arguments[arguments.length - 1],
                    o = A(n),
                    c = e.utc.apply(null, a);
                return o && !e.isMoment(t) && z(c) && c.add(o.parse(c), "minutes"), c.tz(n), c
            }

            function v(e) {
                return function() {
                    return this._z ? this._z.abbr(this) : e.call(this)
                }
            }

            function L(e) {
                return function() {
                    return this._z = null, e.apply(this, arguments)
                }
            }
            var S, O = {},
                N = {},
                q = {},
                W = {},
                y = {};
            e && "string" == typeof e.version || f("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
            var w = e.version.split("."),
                E = +w[0],
                B = +w[1];
            (E < 2 || 2 === E && B < 6) && f("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"), i.prototype = {
                _set: function(e) {
                    this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population
                },
                _index: function(e) {
                    var t, a = +e,
                        n = this.untils;
                    for (t = 0; t < n.length; t++)
                        if (a < n[t]) return t
                },
                countries: function() {
                    var e = this.name;
                    return Object.keys(q).filter((function(t) {
                        return -1 !== q[t].zones.indexOf(e)
                    }))
                },
                parse: function(e) {
                    var t, a, n, o, c = +e,
                        i = this.offsets,
                        r = this.untils,
                        s = r.length - 1;
                    for (o = 0; o < s; o++)
                        if (t = i[o], a = i[o + 1], n = i[o ? o - 1 : o], t < a && T.moveAmbiguousForward ? t = a : t > n && T.moveInvalidForward && (t = n), c < r[o] - 6e4 * t) return i[o];
                    return i[s]
                },
                abbr: function(e) {
                    return this.abbrs[this._index(e)]
                },
                offset: function(e) {
                    return f("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(e)]
                },
                utcOffset: function(e) {
                    return this.offsets[this._index(e)]
                }
            }, l.prototype.scoreOffsetAt = function(e) {
                this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
            }, T.version = "0.5.28", T.dataVersion = "", T._zones = O, T._links = N, T._names = W, T._countries = q, T.add = b, T.link = h, T.load = function(e) {
                b(e.zones), h(e.links),
                    function(e) {
                        var t, a, n, o;
                        if (e && e.length)
                            for (t = 0; t < e.length; t++) a = (o = e[t].split("|"))[0].toUpperCase(), n = o[1].split(" "), q[a] = new r(a, n)
                    }(e.countries), T.dataVersion = e.version
            }, T.zone = A, T.zoneExists = function e(t) {
                return e.didShowError || (e.didShowError = !0, f("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")), !!A(t)
            }, T.guess = function(e) {
                return S && !e || (S = M()), S
            }, T.names = function() {
                var e, t = [];
                for (e in W) W.hasOwnProperty(e) && (O[e] || O[N[e]]) && W[e] && t.push(W[e]);
                return t.sort()
            }, T.Zone = i, T.unpack = c, T.unpackBase60 = a, T.needsOffset = z, T.moveInvalidForward = !0, T.moveAmbiguousForward = !1, T.countries = function() {
                return Object.keys(q)
            }, T.zonesForCountry = function(e, t) {
                var a;
                if (a = (a = e).toUpperCase(), !(e = q[a] || null)) return null;
                var n = e.zones.sort();
                return t ? n.map((function(e) {
                    return {
                        name: e,
                        offset: A(e).utcOffset(new Date)
                    }
                })) : n
            };
            var k, X = e.fn;
            e.tz = T, e.defaultZone = null, e.updateOffset = function(t, a) {
                var n, o = e.defaultZone;
                if (void 0 === t._z && (o && z(t) && !t._isUTC && (t._d = e.utc(t._a)._d, t.utc().add(o.parse(t), "minutes")), t._z = o), t._z)
                    if (n = t._z.utcOffset(t), Math.abs(n) < 16 && (n /= 60), void 0 !== t.utcOffset) {
                        var c = t._z;
                        t.utcOffset(-n, a), t._z = c
                    } else t.zone(n, a)
            }, X.tz = function(t, a) {
                if (t) {
                    if ("string" != typeof t) throw new Error("Time zone name must be a string, got " + t + " [" + typeof t + "]");
                    return this._z = A(t), this._z ? e.updateOffset(this, a) : f("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this
                }
                if (this._z) return this._z.name
            }, X.zoneName = v(X.zoneName), X.zoneAbbr = v(X.zoneAbbr), X.utc = L(X.utc), X.local = L(X.local), X.utcOffset = (k = X.utcOffset, function() {
                return arguments.length > 0 && (this._z = null), k.apply(this, arguments)
            }), e.tz.setDefault = function(t) {
                return (E < 2 || 2 === E && B < 9) && f("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."), e.defaultZone = t ? A(t) : null, e
            };
            var C = e.momentProperties;
            return "[object Array]" === Object.prototype.toString.call(C) ? (C.push("_z"), C.push("_a")) : C && (C._z = null), e
        }))
    }, {
        moment: 76
    }],
    76: [function(e, t, a) {
        var n, o;
        n = this, o = function() {
            "use strict";

            function a() {
                return rt.apply(null, arguments)
            }

            function n(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function o(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function c(e) {
                return void 0 === e
            }

            function i(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function r(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function s(e, t) {
                var a, n = [];
                for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                return n
            }

            function l(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function p(e, t) {
                for (var a in t) l(t, a) && (e[a] = t[a]);
                return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function m(e, t, a, n) {
                return ve(e, t, a, n, !0).utc()
            }

            function d(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function u(e) {
                if (null == e._isValid) {
                    var t = d(e),
                        a = st.call(t.parsedDateParts, (function(e) {
                            return null != e
                        })),
                        n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                    if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                    e._isValid = n
                }
                return e._isValid
            }

            function M(e) {
                var t = m(NaN);
                return null != e ? p(d(t), e) : d(t).userInvalidated = !0, t
            }

            function g(e, t) {
                var a, n, o;
                if (c(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), c(t._i) || (e._i = t._i), c(t._f) || (e._f = t._f), c(t._l) || (e._l = t._l), c(t._strict) || (e._strict = t._strict), c(t._tzm) || (e._tzm = t._tzm), c(t._isUTC) || (e._isUTC = t._isUTC), c(t._offset) || (e._offset = t._offset), c(t._pf) || (e._pf = d(t)), c(t._locale) || (e._locale = t._locale), pt.length > 0)
                    for (a = 0; a < pt.length; a++) c(o = t[n = pt[a]]) || (e[n] = o);
                return e
            }

            function b(e) {
                g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === mt && (mt = !0, a.updateOffset(this), mt = !1)
            }

            function A(e) {
                return e instanceof b || null != e && null != e._isAMomentObject
            }

            function h(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function z(e) {
                var t = +e,
                    a = 0;
                return 0 !== t && isFinite(t) && (a = h(t)), a
            }

            function f(e, t, a) {
                var n, o = Math.min(e.length, t.length),
                    c = Math.abs(e.length - t.length),
                    i = 0;
                for (n = 0; n < o; n++)(a && e[n] !== t[n] || !a && z(e[n]) !== z(t[n])) && i++;
                return i + c
            }

            function T(e) {
                !1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function v(e, t) {
                var n = !0;
                return p((function() {
                    if (null != a.deprecationHandler && a.deprecationHandler(null, e), n) {
                        for (var o, c = [], i = 0; i < arguments.length; i++) {
                            if (o = "", "object" == typeof arguments[i]) {
                                for (var r in o += "\n[" + i + "] ", arguments[0]) o += r + ": " + arguments[0][r] + ", ";
                                o = o.slice(0, -2)
                            } else o = arguments[i];
                            c.push(o)
                        }
                        T(e + "\nArguments: " + Array.prototype.slice.call(c).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }), t)
            }

            function L(e, t) {
                null != a.deprecationHandler && a.deprecationHandler(e, t), dt[e] || (T(t), dt[e] = !0)
            }

            function S(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function O(e, t) {
                var a, n = p({}, e);
                for (a in t) l(t, a) && (o(e[a]) && o(t[a]) ? (n[a] = {}, p(n[a], e[a]), p(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                for (a in e) l(e, a) && !l(t, a) && o(e[a]) && (n[a] = p({}, n[a]));
                return n
            }

            function N(e) {
                null != e && this.set(e)
            }

            function q(e, t) {
                var a = e.toLowerCase();
                ut[a] = ut[a + "s"] = ut[t] = e
            }

            function W(e) {
                return "string" == typeof e ? ut[e] || ut[e.toLowerCase()] : void 0
            }

            function y(e) {
                var t, a, n = {};
                for (a in e) l(e, a) && (t = W(a)) && (n[t] = e[a]);
                return n
            }

            function w(e, t) {
                Mt[e] = t
            }

            function E(e, t, a) {
                var n = "" + Math.abs(e),
                    o = t - n.length;
                return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n
            }

            function B(e, t, a, n) {
                var o = n;
                "string" == typeof n && (o = function() {
                    return this[n]()
                }), e && (ht[e] = o), t && (ht[t[0]] = function() {
                    return E(o.apply(this, arguments), t[1], t[2])
                }), a && (ht[a] = function() {
                    return this.localeData().ordinal(o.apply(this, arguments), e)
                })
            }

            function k(e, t) {
                return e.isValid() ? (t = X(t, e.localeData()), At[t] = At[t] || function(e) {
                    var t, a, n, o = e.match(gt);
                    for (t = 0, a = o.length; t < a; t++) ht[o[t]] ? o[t] = ht[o[t]] : o[t] = (n = o[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                    return function(t) {
                        var n, c = "";
                        for (n = 0; n < a; n++) c += S(o[n]) ? o[n].call(t, e) : o[n];
                        return c
                    }
                }(t), At[t](e)) : e.localeData().invalidDate()
            }

            function X(e, t) {
                function a(e) {
                    return t.longDateFormat(e) || e
                }
                var n = 5;
                for (bt.lastIndex = 0; n >= 0 && bt.test(e);) e = e.replace(bt, a), bt.lastIndex = 0, n -= 1;
                return e
            }

            function C(e, t, a) {
                Ct[e] = S(t) ? t : function(e, n) {
                    return e && a ? a : t
                }
            }

            function _(e, t) {
                return l(Ct, e) ? Ct[e](t._strict, t._locale) : new RegExp(j(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, a, n, o) {
                    return t || a || n || o
                }))))
            }

            function j(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function I(e, t) {
                var a, n = t;
                for ("string" == typeof e && (e = [e]), i(t) && (n = function(e, a) {
                        a[t] = z(e)
                    }), a = 0; a < e.length; a++) _t[e[a]] = n
            }

            function D(e, t) {
                I(e, (function(e, a, n, o) {
                    n._w = n._w || {}, t(e, n._w, n, o)
                }))
            }

            function P(e, t, a) {
                null != t && l(_t, e) && _t[e](t, a._a, a, e)
            }

            function U(e) {
                return R(e) ? 366 : 365
            }

            function R(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }

            function G(e, t) {
                return function(n) {
                    return null != n ? (x(this, e, n), a.updateOffset(this, t), this) : H(this, e)
                }
            }

            function H(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function x(e, t, a) {
                e.isValid() && !isNaN(a) && ("FullYear" === t && R(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), F(a, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a))
            }

            function F(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var a, n = (t % (a = 12) + a) % a;
                return e += (t - n) / 12, 1 === n ? R(e) ? 29 : 28 : 31 - n % 7 % 2
            }

            function V(e, t, a) {
                var n, o, c, i = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) c = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(c, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(c, "").toLocaleLowerCase();
                return a ? "MMM" === t ? -1 !== (o = jt.call(this._shortMonthsParse, i)) ? o : null : -1 !== (o = jt.call(this._longMonthsParse, i)) ? o : null : "MMM" === t ? -1 !== (o = jt.call(this._shortMonthsParse, i)) || -1 !== (o = jt.call(this._longMonthsParse, i)) ? o : null : -1 !== (o = jt.call(this._longMonthsParse, i)) || -1 !== (o = jt.call(this._shortMonthsParse, i)) ? o : null
            }

            function K(e, t) {
                var a;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = z(t);
                    else if (!i(t = e.localeData().monthsParse(t))) return e;
                return a = Math.min(e.date(), F(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
            }

            function Y(e) {
                return null != e ? (K(this, e), a.updateOffset(this, !0), this) : H(this, "Month")
            }

            function J() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, a, n = [],
                    o = [],
                    c = [];
                for (t = 0; t < 12; t++) a = m([2e3, t]), n.push(this.monthsShort(a, "")), o.push(this.months(a, "")), c.push(this.months(a, "")), c.push(this.monthsShort(a, ""));
                for (n.sort(e), o.sort(e), c.sort(e), t = 0; t < 12; t++) n[t] = j(n[t]), o[t] = j(o[t]);
                for (t = 0; t < 24; t++) c[t] = j(c[t]);
                this._monthsRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function Q(e, t, a, n, o, c, i) {
                var r;
                return e < 100 && e >= 0 ? (r = new Date(e + 400, t, a, n, o, c, i), isFinite(r.getFullYear()) && r.setFullYear(e)) : r = new Date(e, t, a, n, o, c, i), r
            }

            function $(e) {
                var t;
                if (e < 100 && e >= 0) {
                    var a = Array.prototype.slice.call(arguments);
                    a[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
                } else t = new Date(Date.UTC.apply(null, arguments));
                return t
            }

            function Z(e, t, a) {
                var n = 7 + t - a;
                return -(7 + $(e, 0, n).getUTCDay() - t) % 7 + n - 1
            }

            function ee(e, t, a, n, o) {
                var c, i, r = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Z(e, n, o);
                return r <= 0 ? i = U(c = e - 1) + r : r > U(e) ? (c = e + 1, i = r - U(e)) : (c = e, i = r), {
                    year: c,
                    dayOfYear: i
                }
            }

            function te(e, t, a) {
                var n, o, c = Z(e.year(), t, a),
                    i = Math.floor((e.dayOfYear() - c - 1) / 7) + 1;
                return i < 1 ? n = i + ae(o = e.year() - 1, t, a) : i > ae(e.year(), t, a) ? (n = i - ae(e.year(), t, a), o = e.year() + 1) : (o = e.year(), n = i), {
                    week: n,
                    year: o
                }
            }

            function ae(e, t, a) {
                var n = Z(e, t, a),
                    o = Z(e + 1, t, a);
                return (U(e) - n + o) / 7
            }

            function ne(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }

            function oe(e, t, a) {
                var n, o, c, i = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) c = m([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(c, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(c, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(c, "").toLocaleLowerCase();
                return a ? "dddd" === t ? -1 !== (o = jt.call(this._weekdaysParse, i)) ? o : null : "ddd" === t ? -1 !== (o = jt.call(this._shortWeekdaysParse, i)) ? o : null : -1 !== (o = jt.call(this._minWeekdaysParse, i)) ? o : null : "dddd" === t ? -1 !== (o = jt.call(this._weekdaysParse, i)) || -1 !== (o = jt.call(this._shortWeekdaysParse, i)) || -1 !== (o = jt.call(this._minWeekdaysParse, i)) ? o : null : "ddd" === t ? -1 !== (o = jt.call(this._shortWeekdaysParse, i)) || -1 !== (o = jt.call(this._weekdaysParse, i)) || -1 !== (o = jt.call(this._minWeekdaysParse, i)) ? o : null : -1 !== (o = jt.call(this._minWeekdaysParse, i)) || -1 !== (o = jt.call(this._weekdaysParse, i)) || -1 !== (o = jt.call(this._shortWeekdaysParse, i)) ? o : null
            }

            function ce() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, a, n, o, c, i = [],
                    r = [],
                    s = [],
                    l = [];
                for (t = 0; t < 7; t++) a = m([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), o = this.weekdaysShort(a, ""), c = this.weekdays(a, ""), i.push(n), r.push(o), s.push(c), l.push(n), l.push(o), l.push(c);
                for (i.sort(e), r.sort(e), s.sort(e), l.sort(e), t = 0; t < 7; t++) r[t] = j(r[t]), s[t] = j(s[t]), l[t] = j(l[t]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function ie() {
                return this.hours() % 12 || 12
            }

            function re(e, t) {
                B(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }))
            }

            function se(e, t) {
                return t._meridiemParse
            }

            function le(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function pe(a) {
                var n = null;
                if (!Zt[a] && void 0 !== t && t && t.exports) try {
                    n = Jt._abbr, e("./locale/" + a), me(n)
                } catch (e) {}
                return Zt[a]
            }

            function me(e, t) {
                var a;
                return e && ((a = c(t) ? ue(e) : de(e, t)) ? Jt = a : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Jt._abbr
            }

            function de(e, t) {
                if (null !== t) {
                    var a, n = $t;
                    if (t.abbr = e, null != Zt[e]) L("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Zt[e]._config;
                    else if (null != t.parentLocale)
                        if (null != Zt[t.parentLocale]) n = Zt[t.parentLocale]._config;
                        else {
                            if (null == (a = pe(t.parentLocale))) return ea[t.parentLocale] || (ea[t.parentLocale] = []), ea[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            n = a._config
                        }
                    return Zt[e] = new N(O(n, t)), ea[e] && ea[e].forEach((function(e) {
                        de(e.name, e.config)
                    })), me(e), Zt[e]
                }
                return delete Zt[e], null
            }

            function ue(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Jt;
                if (!n(e)) {
                    if (t = pe(e)) return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, a, n, o, c = 0; c < e.length;) {
                        for (t = (o = le(e[c]).split("-")).length, a = (a = le(e[c + 1])) ? a.split("-") : null; t > 0;) {
                            if (n = pe(o.slice(0, t).join("-"))) return n;
                            if (a && a.length >= t && f(o, a, !0) >= t - 1) break;
                            t--
                        }
                        c++
                    }
                    return Jt
                }(e)
            }

            function Me(e) {
                var t, a = e._a;
                return a && -2 === d(e).overflow && (t = a[1] < 0 || a[1] > 11 ? 1 : a[2] < 1 || a[2] > F(a[0], a[1]) ? 2 : a[3] < 0 || a[3] > 24 || 24 === a[3] && (0 !== a[4] || 0 !== a[5] || 0 !== a[6]) ? 3 : a[4] < 0 || a[4] > 59 ? 4 : a[5] < 0 || a[5] > 59 ? 5 : a[6] < 0 || a[6] > 999 ? 6 : -1, d(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), d(e)._overflowWeeks && -1 === t && (t = 7), d(e)._overflowWeekday && -1 === t && (t = 8), d(e).overflow = t), e
            }

            function ge(e, t, a) {
                return null != e ? e : null != t ? t : a
            }

            function be(e) {
                var t, n, o, c, i, r = [];
                if (!e._d) {
                    for (o = function(e) {
                            var t = new Date(a.now());
                            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                        }(e), e._w && null == e._a[2] && null == e._a[1] && function(e) {
                            var t, a, n, o, c, i, r, s;
                            if (null != (t = e._w).GG || null != t.W || null != t.E) c = 1, i = 4, a = ge(t.GG, e._a[0], te(Le(), 1, 4).year), n = ge(t.W, 1), ((o = ge(t.E, 1)) < 1 || o > 7) && (s = !0);
                            else {
                                c = e._locale._week.dow, i = e._locale._week.doy;
                                var l = te(Le(), c, i);
                                a = ge(t.gg, e._a[0], l.year), n = ge(t.w, l.week), null != t.d ? ((o = t.d) < 0 || o > 6) && (s = !0) : null != t.e ? (o = t.e + c, (t.e < 0 || t.e > 6) && (s = !0)) : o = c
                            }
                            n < 1 || n > ae(a, c, i) ? d(e)._overflowWeeks = !0 : null != s ? d(e)._overflowWeekday = !0 : (r = ee(a, n, o, c, i), e._a[0] = r.year, e._dayOfYear = r.dayOfYear)
                        }(e), null != e._dayOfYear && (i = ge(e._a[0], o[0]), (e._dayOfYear > U(i) || 0 === e._dayOfYear) && (d(e)._overflowDayOfYear = !0), n = $(i, 0, e._dayOfYear), e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = o[t];
                    for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? $ : Q).apply(null, r), c = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== c && (d(e).weekdayMismatch = !0)
                }
            }

            function Ae(e) {
                var t, a, n, o, c, i, r = e._i,
                    s = ta.exec(r) || aa.exec(r);
                if (s) {
                    for (d(e).iso = !0, t = 0, a = oa.length; t < a; t++)
                        if (oa[t][1].exec(s[1])) {
                            o = oa[t][0], n = !1 !== oa[t][2];
                            break
                        }
                    if (null == o) return void(e._isValid = !1);
                    if (s[3]) {
                        for (t = 0, a = ca.length; t < a; t++)
                            if (ca[t][1].exec(s[3])) {
                                c = (s[2] || " ") + ca[t][0];
                                break
                            }
                        if (null == c) return void(e._isValid = !1)
                    }
                    if (!n && null != c) return void(e._isValid = !1);
                    if (s[4]) {
                        if (!na.exec(s[4])) return void(e._isValid = !1);
                        i = "Z"
                    }
                    e._f = o + (c || "") + (i || ""), fe(e)
                } else e._isValid = !1
            }

            function he(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }

            function ze(e) {
                var t, a, n, o, c, i, r, s = ra.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (s) {
                    var l = (t = s[4], a = s[3], n = s[2], o = s[5], c = s[6], i = s[7], r = [he(t), Ut.indexOf(a), parseInt(n, 10), parseInt(o, 10), parseInt(c, 10)], i && r.push(parseInt(i, 10)), r);
                    if (! function(e, t, a) {
                            return !e || xt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (d(a).weekdayMismatch = !0, a._isValid = !1, !1)
                        }(s[1], l, e)) return;
                    e._a = l, e._tzm = function(e, t, a) {
                        if (e) return sa[e];
                        if (t) return 0;
                        var n = parseInt(a, 10),
                            o = n % 100;
                        return (n - o) / 100 * 60 + o
                    }(s[8], s[9], s[10]), e._d = $.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), d(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function fe(e) {
                if (e._f !== a.ISO_8601)
                    if (e._f !== a.RFC_2822) {
                        e._a = [], d(e).empty = !0;
                        var t, n, o, c, i, r = "" + e._i,
                            s = r.length,
                            l = 0;
                        for (o = X(e._f, e._locale).match(gt) || [], t = 0; t < o.length; t++) c = o[t], (n = (r.match(_(c, e)) || [])[0]) && ((i = r.substr(0, r.indexOf(n))).length > 0 && d(e).unusedInput.push(i), r = r.slice(r.indexOf(n) + n.length), l += n.length), ht[c] ? (n ? d(e).empty = !1 : d(e).unusedTokens.push(c), P(c, n, e)) : e._strict && !n && d(e).unusedTokens.push(c);
                        d(e).charsLeftOver = s - l, r.length > 0 && d(e).unusedInput.push(r), e._a[3] <= 12 && !0 === d(e).bigHour && e._a[3] > 0 && (d(e).bigHour = void 0), d(e).parsedDateParts = e._a.slice(0), d(e).meridiem = e._meridiem, e._a[3] = function(e, t, a) {
                            var n;
                            return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0), t) : t
                        }(e._locale, e._a[3], e._meridiem), be(e), Me(e)
                    } else ze(e);
                else Ae(e)
            }

            function Te(e) {
                var t = e._i,
                    l = e._f;
                return e._locale = e._locale || ue(e._l), null === t || void 0 === l && "" === t ? M({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), A(t) ? new b(Me(t)) : (r(t) ? e._d = t : n(l) ? function(e) {
                    var t, a, n, o, c;
                    if (0 === e._f.length) return d(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (o = 0; o < e._f.length; o++) c = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[o], fe(t), u(t) && (c += d(t).charsLeftOver, c += 10 * d(t).unusedTokens.length, d(t).score = c, (null == n || c < n) && (n = c, a = t));
                    p(e, a || t)
                }(e) : l ? fe(e) : function(e) {
                    var t = e._i;
                    c(t) ? e._d = new Date(a.now()) : r(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = ia.exec(e._i);
                        null === t ? (Ae(e), !1 === e._isValid && (delete e._isValid, ze(e), !1 === e._isValid && (delete e._isValid, a.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : n(t) ? (e._a = s(t.slice(0), (function(e) {
                        return parseInt(e, 10)
                    })), be(e)) : o(t) ? function(e) {
                        if (!e._d) {
                            var t = y(e._i);
                            e._a = s([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                                return e && parseInt(e, 10)
                            })), be(e)
                        }
                    }(e) : i(t) ? e._d = new Date(t) : a.createFromInputFallback(e)
                }(e), u(e) || (e._d = null), e))
            }

            function ve(e, t, a, c, i) {
                var r, s = {};
                return !0 !== a && !1 !== a || (c = a, a = void 0), (o(e) && function(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }(e) || n(e) && 0 === e.length) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = i, s._l = a, s._i = e, s._f = t, s._strict = c, (r = new b(Me(Te(s))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
            }

            function Le(e, t, a, n) {
                return ve(e, t, a, n, !1)
            }

            function Se(e, t) {
                var a, o;
                if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return Le();
                for (a = t[0], o = 1; o < t.length; ++o) t[o].isValid() && !t[o][e](a) || (a = t[o]);
                return a
            }

            function Oe(e) {
                var t = y(e),
                    a = t.year || 0,
                    n = t.quarter || 0,
                    o = t.month || 0,
                    c = t.week || t.isoWeek || 0,
                    i = t.day || 0,
                    r = t.hour || 0,
                    s = t.minute || 0,
                    l = t.second || 0,
                    p = t.millisecond || 0;
                this._isValid = function(e) {
                    for (var t in e)
                        if (-1 === jt.call(ma, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var a = !1, n = 0; n < ma.length; ++n)
                        if (e[ma[n]]) {
                            if (a) return !1;
                            parseFloat(e[ma[n]]) !== z(e[ma[n]]) && (a = !0)
                        }
                    return !0
                }(t), this._milliseconds = +p + 1e3 * l + 6e4 * s + 1e3 * r * 60 * 60, this._days = +i + 7 * c, this._months = +o + 3 * n + 12 * a, this._data = {}, this._locale = ue(), this._bubble()
            }

            function Ne(e) {
                return e instanceof Oe
            }

            function qe(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function We(e, t) {
                B(e, 0, 0, (function() {
                    var e = this.utcOffset(),
                        a = "+";
                    return e < 0 && (e = -e, a = "-"), a + E(~~(e / 60), 2) + t + E(~~e % 60, 2)
                }))
            }

            function ye(e, t) {
                var a = (t || "").match(e);
                if (null === a) return null;
                var n = ((a[a.length - 1] || []) + "").match(da) || ["-", 0, 0],
                    o = 60 * n[1] + z(n[2]);
                return 0 === o ? 0 : "+" === n[0] ? o : -o
            }

            function we(e, t) {
                var n, o;
                return t._isUTC ? (n = t.clone(), o = (A(e) || r(e) ? e.valueOf() : Le(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + o), a.updateOffset(n, !1), n) : Le(e).local()
            }

            function Ee(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function Be() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }

            function ke(e, t) {
                var a, n, o, c, r, s, p = e,
                    m = null;
                return Ne(e) ? p = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : i(e) ? (p = {}, t ? p[t] = e : p.milliseconds = e) : (m = ua.exec(e)) ? (a = "-" === m[1] ? -1 : 1, p = {
                    y: 0,
                    d: z(m[2]) * a,
                    h: z(m[3]) * a,
                    m: z(m[4]) * a,
                    s: z(m[5]) * a,
                    ms: z(qe(1e3 * m[6])) * a
                }) : (m = Ma.exec(e)) ? (a = "-" === m[1] ? -1 : 1, p = {
                    y: Xe(m[2], a),
                    M: Xe(m[3], a),
                    w: Xe(m[4], a),
                    d: Xe(m[5], a),
                    h: Xe(m[6], a),
                    m: Xe(m[7], a),
                    s: Xe(m[8], a)
                }) : null == p ? p = {} : "object" == typeof p && ("from" in p || "to" in p) && (c = Le(p.from), r = Le(p.to), o = c.isValid() && r.isValid() ? (r = we(r, c), c.isBefore(r) ? s = Ce(c, r) : ((s = Ce(r, c)).milliseconds = -s.milliseconds, s.months = -s.months), s) : {
                    milliseconds: 0,
                    months: 0
                }, (p = {}).ms = o.milliseconds, p.M = o.months), n = new Oe(p), Ne(e) && l(e, "_locale") && (n._locale = e._locale), n
            }

            function Xe(e, t) {
                var a = e && parseFloat(e.replace(",", "."));
                return (isNaN(a) ? 0 : a) * t
            }

            function Ce(e, t) {
                var a = {};
                return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
            }

            function _e(e, t) {
                return function(a, n) {
                    var o;
                    return null === n || isNaN(+n) || (L(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = a, a = n, n = o), je(this, ke(a = "string" == typeof a ? +a : a, n), e), this
                }
            }

            function je(e, t, n, o) {
                var c = t._milliseconds,
                    i = qe(t._days),
                    r = qe(t._months);
                e.isValid() && (o = null == o || o, r && K(e, H(e, "Month") + r * n), i && x(e, "Date", H(e, "Date") + i * n), c && e._d.setTime(e._d.valueOf() + c * n), o && a.updateOffset(e, i || r))
            }

            function Ie(e, t) {
                var a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    n = e.clone().add(a, "months");
                return -(a + (t - n < 0 ? (t - n) / (n - e.clone().add(a - 1, "months")) : (t - n) / (e.clone().add(a + 1, "months") - n))) || 0
            }

            function De(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = ue(e)) && (this._locale = t), this)
            }

            function Pe() {
                return this._locale
            }

            function Ue(e, t) {
                return (e % t + t) % t
            }

            function Re(e, t, a) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, a) - 126227808e5 : new Date(e, t, a).valueOf()
            }

            function Ge(e, t, a) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - 126227808e5 : Date.UTC(e, t, a)
            }

            function He(e, t) {
                B(0, [e, e.length], 0, t)
            }

            function xe(e, t, a, n, o) {
                var c;
                return null == e ? te(this, n, o).year : (t > (c = ae(e, n, o)) && (t = c), Fe.call(this, e, t, a, n, o))
            }

            function Fe(e, t, a, n, o) {
                var c = ee(e, t, a, n, o),
                    i = $(c.year, 0, c.dayOfYear);
                return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
            }

            function Ve(e, t) {
                t[6] = z(1e3 * ("0." + e))
            }

            function Ke(e) {
                return e
            }

            function Ye(e, t, a, n) {
                var o = ue(),
                    c = m().set(n, t);
                return o[a](c, e)
            }

            function Je(e, t, a) {
                if (i(e) && (t = e, e = void 0), e = e || "", null != t) return Ye(e, t, a, "month");
                var n, o = [];
                for (n = 0; n < 12; n++) o[n] = Ye(e, n, a, "month");
                return o
            }

            function Qe(e, t, a, n) {
                "boolean" == typeof e ? (i(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, i(t) && (a = t, t = void 0), t = t || "");
                var o, c = ue(),
                    r = e ? c._week.dow : 0;
                if (null != a) return Ye(t, (a + r) % 7, n, "day");
                var s = [];
                for (o = 0; o < 7; o++) s[o] = Ye(t, (o + r) % 7, n, "day");
                return s
            }

            function $e(e, t, a, n) {
                var o = ke(t, a);
                return e._milliseconds += n * o._milliseconds, e._days += n * o._days, e._months += n * o._months, e._bubble()
            }

            function Ze(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function et(e) {
                return 4800 * e / 146097
            }

            function tt(e) {
                return 146097 * e / 4800
            }

            function at(e) {
                return function() {
                    return this.as(e)
                }
            }

            function nt(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }

            function ot(e, t, a, n, o) {
                return o.relativeTime(t || 1, !!a, e, n)
            }

            function ct(e) {
                return (e > 0) - (e < 0) || +e
            }

            function it() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, a = Ha(this._milliseconds) / 1e3,
                    n = Ha(this._days),
                    o = Ha(this._months);
                e = h(a / 60), t = h(e / 60), a %= 60, e %= 60;
                var c = h(o / 12),
                    i = o %= 12,
                    r = n,
                    s = t,
                    l = e,
                    p = a ? a.toFixed(3).replace(/\.?0+$/, "") : "",
                    m = this.asSeconds();
                if (!m) return "P0D";
                var d = m < 0 ? "-" : "",
                    u = ct(this._months) !== ct(m) ? "-" : "",
                    M = ct(this._days) !== ct(m) ? "-" : "",
                    g = ct(this._milliseconds) !== ct(m) ? "-" : "";
                return d + "P" + (c ? u + c + "Y" : "") + (i ? u + i + "M" : "") + (r ? M + r + "D" : "") + (s || l || p ? "T" : "") + (s ? g + s + "H" : "") + (l ? g + l + "M" : "") + (p ? g + p + "S" : "")
            }
            var rt, st;
            st = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                    if (n in t && e.call(this, t[n], n, t)) return !0;
                return !1
            };
            var lt, pt = a.momentProperties = [],
                mt = !1,
                dt = {};
            a.suppressDeprecationWarnings = !1, a.deprecationHandler = null, lt = Object.keys ? Object.keys : function(e) {
                var t, a = [];
                for (t in e) l(e, t) && a.push(t);
                return a
            };
            var ut = {},
                Mt = {},
                gt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                bt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                At = {},
                ht = {},
                zt = /\d/,
                ft = /\d\d/,
                Tt = /\d{3}/,
                vt = /\d{4}/,
                Lt = /[+-]?\d{6}/,
                St = /\d\d?/,
                Ot = /\d\d\d\d?/,
                Nt = /\d\d\d\d\d\d?/,
                qt = /\d{1,3}/,
                Wt = /\d{1,4}/,
                yt = /[+-]?\d{1,6}/,
                wt = /\d+/,
                Et = /[+-]?\d+/,
                Bt = /Z|[+-]\d\d:?\d\d/gi,
                kt = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Xt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                Ct = {},
                _t = {};
            B("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            })), B(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            })), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), q("year", "y"), w("year", 1), C("Y", Et), C("YY", St, ft), C("YYYY", Wt, vt), C("YYYYY", yt, Lt), C("YYYYYY", yt, Lt), I(["YYYYY", "YYYYYY"], 0), I("YYYY", (function(e, t) {
                t[0] = 2 === e.length ? a.parseTwoDigitYear(e) : z(e)
            })), I("YY", (function(e, t) {
                t[0] = a.parseTwoDigitYear(e)
            })), I("Y", (function(e, t) {
                t[0] = parseInt(e, 10)
            })), a.parseTwoDigitYear = function(e) {
                return z(e) + (z(e) > 68 ? 1900 : 2e3)
            };
            var jt, It = G("FullYear", !0);
            jt = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, B("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            })), B("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e)
            })), B("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e)
            })), q("month", "M"), w("month", 8), C("M", St), C("MM", St, ft), C("MMM", (function(e, t) {
                return t.monthsShortRegex(e)
            })), C("MMMM", (function(e, t) {
                return t.monthsRegex(e)
            })), I(["M", "MM"], (function(e, t) {
                t[1] = z(e) - 1
            })), I(["MMM", "MMMM"], (function(e, t, a, n) {
                var o = a._locale.monthsParse(e, n, a._strict);
                null != o ? t[1] = o : d(a).invalidMonth = e
            }));
            var Dt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Pt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Ut = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                Rt = Xt,
                Gt = Xt;
            B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), q("week", "w"), q("isoWeek", "W"), w("week", 5), w("isoWeek", 5), C("w", St), C("ww", St, ft), C("W", St), C("WW", St, ft), D(["w", "ww", "W", "WW"], (function(e, t, a, n) {
                t[n.substr(0, 1)] = z(e)
            })), B("d", 0, "do", "day"), B("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e)
            })), B("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e)
            })), B("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e)
            })), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), q("day", "d"), q("weekday", "e"), q("isoWeekday", "E"), w("day", 11), w("weekday", 11), w("isoWeekday", 11), C("d", St), C("e", St), C("E", St), C("dd", (function(e, t) {
                return t.weekdaysMinRegex(e)
            })), C("ddd", (function(e, t) {
                return t.weekdaysShortRegex(e)
            })), C("dddd", (function(e, t) {
                return t.weekdaysRegex(e)
            })), D(["dd", "ddd", "dddd"], (function(e, t, a, n) {
                var o = a._locale.weekdaysParse(e, n, a._strict);
                null != o ? t.d = o : d(a).invalidWeekday = e
            })), D(["d", "e", "E"], (function(e, t, a, n) {
                t[n] = z(e)
            }));
            var Ht = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                xt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ft = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Vt = Xt,
                Kt = Xt,
                Yt = Xt;
            B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, ie), B("k", ["kk", 2], 0, (function() {
                return this.hours() || 24
            })), B("hmm", 0, 0, (function() {
                return "" + ie.apply(this) + E(this.minutes(), 2)
            })), B("hmmss", 0, 0, (function() {
                return "" + ie.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
            })), B("Hmm", 0, 0, (function() {
                return "" + this.hours() + E(this.minutes(), 2)
            })), B("Hmmss", 0, 0, (function() {
                return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
            })), re("a", !0), re("A", !1), q("hour", "h"), w("hour", 13), C("a", se), C("A", se), C("H", St), C("h", St), C("k", St), C("HH", St, ft), C("hh", St, ft), C("kk", St, ft), C("hmm", Ot), C("hmmss", Nt), C("Hmm", Ot), C("Hmmss", Nt), I(["H", "HH"], 3), I(["k", "kk"], (function(e, t, a) {
                var n = z(e);
                t[3] = 24 === n ? 0 : n
            })), I(["a", "A"], (function(e, t, a) {
                a._isPm = a._locale.isPM(e), a._meridiem = e
            })), I(["h", "hh"], (function(e, t, a) {
                t[3] = z(e), d(a).bigHour = !0
            })), I("hmm", (function(e, t, a) {
                var n = e.length - 2;
                t[3] = z(e.substr(0, n)), t[4] = z(e.substr(n)), d(a).bigHour = !0
            })), I("hmmss", (function(e, t, a) {
                var n = e.length - 4,
                    o = e.length - 2;
                t[3] = z(e.substr(0, n)), t[4] = z(e.substr(n, 2)), t[5] = z(e.substr(o)), d(a).bigHour = !0
            })), I("Hmm", (function(e, t, a) {
                var n = e.length - 2;
                t[3] = z(e.substr(0, n)), t[4] = z(e.substr(n))
            })), I("Hmmss", (function(e, t, a) {
                var n = e.length - 4,
                    o = e.length - 2;
                t[3] = z(e.substr(0, n)), t[4] = z(e.substr(n, 2)), t[5] = z(e.substr(o))
            }));
            var Jt, Qt = G("Hours", !0),
                $t = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: Pt,
                    monthsShort: Ut,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Ht,
                    weekdaysMin: Ft,
                    weekdaysShort: xt,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                Zt = {},
                ea = {},
                ta = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                aa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                na = /Z|[+-]\d\d(?::?\d\d)?/,
                oa = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                ca = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                ia = /^\/?Date\((\-?\d+)/i,
                ra = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                sa = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
            a.createFromInputFallback = v("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            })), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
            var la = v("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = Le.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : M()
                })),
                pa = v("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = Le.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : M()
                })),
                ma = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            We("Z", ":"), We("ZZ", ""), C("Z", kt), C("ZZ", kt), I(["Z", "ZZ"], (function(e, t, a) {
                a._useUTC = !0, a._tzm = ye(kt, e)
            }));
            var da = /([\+\-]|\d\d)/gi;
            a.updateOffset = function() {};
            var ua = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Ma = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            ke.fn = Oe.prototype, ke.invalid = function() {
                return ke(NaN)
            };
            var ga = _e(1, "add"),
                ba = _e(-1, "subtract");
            a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Aa = v("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }));
            B(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            })), B(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            })), He("gggg", "weekYear"), He("ggggg", "weekYear"), He("GGGG", "isoWeekYear"), He("GGGGG", "isoWeekYear"), q("weekYear", "gg"), q("isoWeekYear", "GG"), w("weekYear", 1), w("isoWeekYear", 1), C("G", Et), C("g", Et), C("GG", St, ft), C("gg", St, ft), C("GGGG", Wt, vt), C("gggg", Wt, vt), C("GGGGG", yt, Lt), C("ggggg", yt, Lt), D(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, a, n) {
                t[n.substr(0, 2)] = z(e)
            })), D(["gg", "GG"], (function(e, t, n, o) {
                t[o] = a.parseTwoDigitYear(e)
            })), B("Q", 0, "Qo", "quarter"), q("quarter", "Q"), w("quarter", 7), C("Q", zt), I("Q", (function(e, t) {
                t[1] = 3 * (z(e) - 1)
            })), B("D", ["DD", 2], "Do", "date"), q("date", "D"), w("date", 9), C("D", St), C("DD", St, ft), C("Do", (function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            })), I(["D", "DD"], 2), I("Do", (function(e, t) {
                t[2] = z(e.match(St)[0])
            }));
            var ha = G("Date", !0);
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), q("dayOfYear", "DDD"), w("dayOfYear", 4), C("DDD", qt), C("DDDD", Tt), I(["DDD", "DDDD"], (function(e, t, a) {
                a._dayOfYear = z(e)
            })), B("m", ["mm", 2], 0, "minute"), q("minute", "m"), w("minute", 14), C("m", St), C("mm", St, ft), I(["m", "mm"], 4);
            var za = G("Minutes", !1);
            B("s", ["ss", 2], 0, "second"), q("second", "s"), w("second", 15), C("s", St), C("ss", St, ft), I(["s", "ss"], 5);
            var fa, Ta = G("Seconds", !1);
            for (B("S", 0, 0, (function() {
                    return ~~(this.millisecond() / 100)
                })), B(0, ["SS", 2], 0, (function() {
                    return ~~(this.millisecond() / 10)
                })), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, (function() {
                    return 10 * this.millisecond()
                })), B(0, ["SSSSS", 5], 0, (function() {
                    return 100 * this.millisecond()
                })), B(0, ["SSSSSS", 6], 0, (function() {
                    return 1e3 * this.millisecond()
                })), B(0, ["SSSSSSS", 7], 0, (function() {
                    return 1e4 * this.millisecond()
                })), B(0, ["SSSSSSSS", 8], 0, (function() {
                    return 1e5 * this.millisecond()
                })), B(0, ["SSSSSSSSS", 9], 0, (function() {
                    return 1e6 * this.millisecond()
                })), q("millisecond", "ms"), w("millisecond", 16), C("S", qt, zt), C("SS", qt, ft), C("SSS", qt, Tt), fa = "SSSS"; fa.length <= 9; fa += "S") C(fa, wt);
            for (fa = "S"; fa.length <= 9; fa += "S") I(fa, Ve);
            var va = G("Milliseconds", !1);
            B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
            var La = b.prototype;
            La.add = ga, La.calendar = function(e, t) {
                var n = e || Le(),
                    o = we(n, this).startOf("day"),
                    c = a.calendarFormat(this, o) || "sameElse",
                    i = t && (S(t[c]) ? t[c].call(this, n) : t[c]);
                return this.format(i || this.localeData().calendar(c, this, Le(n)))
            }, La.clone = function() {
                return new b(this)
            }, La.diff = function(e, t, a) {
                var n, o, c;
                if (!this.isValid()) return NaN;
                if (!(n = we(e, this)).isValid()) return NaN;
                switch (o = 6e4 * (n.utcOffset() - this.utcOffset()), t = W(t)) {
                    case "year":
                        c = Ie(this, n) / 12;
                        break;
                    case "month":
                        c = Ie(this, n);
                        break;
                    case "quarter":
                        c = Ie(this, n) / 3;
                        break;
                    case "second":
                        c = (this - n) / 1e3;
                        break;
                    case "minute":
                        c = (this - n) / 6e4;
                        break;
                    case "hour":
                        c = (this - n) / 36e5;
                        break;
                    case "day":
                        c = (this - n - o) / 864e5;
                        break;
                    case "week":
                        c = (this - n - o) / 6048e5;
                        break;
                    default:
                        c = this - n
                }
                return a ? c : h(c)
            }, La.endOf = function(e) {
                var t;
                if (void 0 === (e = W(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? Ge : Re;
                switch (e) {
                    case "year":
                        t = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        t = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        t = this._d.valueOf(), t += 36e5 - Ue(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                        break;
                    case "minute":
                        t = this._d.valueOf(), t += 6e4 - Ue(t, 6e4) - 1;
                        break;
                    case "second":
                        t = this._d.valueOf(), t += 1e3 - Ue(t, 1e3) - 1
                }
                return this._d.setTime(t), a.updateOffset(this, !0), this
            }, La.format = function(e) {
                e || (e = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
                var t = k(this, e);
                return this.localeData().postformat(t)
            }, La.from = function(e, t) {
                return this.isValid() && (A(e) && e.isValid() || Le(e).isValid()) ? ke({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, La.fromNow = function(e) {
                return this.from(Le(), e)
            }, La.to = function(e, t) {
                return this.isValid() && (A(e) && e.isValid() || Le(e).isValid()) ? ke({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, La.toNow = function(e) {
                return this.to(Le(), e)
            }, La.get = function(e) {
                return S(this[e = W(e)]) ? this[e]() : this
            }, La.invalidAt = function() {
                return d(this).overflow
            }, La.isAfter = function(e, t) {
                var a = A(e) ? e : Le(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
            }, La.isBefore = function(e, t) {
                var a = A(e) ? e : Le(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
            }, La.isBetween = function(e, t, a, n) {
                var o = A(e) ? e : Le(e),
                    c = A(t) ? t : Le(t);
                return !!(this.isValid() && o.isValid() && c.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(o, a) : !this.isBefore(o, a)) && (")" === n[1] ? this.isBefore(c, a) : !this.isAfter(c, a))
            }, La.isSame = function(e, t) {
                var a, n = A(e) ? e : Le(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
            }, La.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, La.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, La.isValid = function() {
                return u(this)
            }, La.lang = Aa, La.locale = De, La.localeData = Pe, La.max = pa, La.min = la, La.parsingFlags = function() {
                return p({}, d(this))
            }, La.set = function(e, t) {
                if ("object" == typeof e)
                    for (var a = function(e) {
                            var t = [];
                            for (var a in e) t.push({
                                unit: a,
                                priority: Mt[a]
                            });
                            return t.sort((function(e, t) {
                                return e.priority - t.priority
                            })), t
                        }(e = y(e)), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
                else if (S(this[e = W(e)])) return this[e](t);
                return this
            }, La.startOf = function(e) {
                var t;
                if (void 0 === (e = W(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? Ge : Re;
                switch (e) {
                    case "year":
                        t = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        t = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        t = this._d.valueOf(), t -= Ue(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                        break;
                    case "minute":
                        t = this._d.valueOf(), t -= Ue(t, 6e4);
                        break;
                    case "second":
                        t = this._d.valueOf(), t -= Ue(t, 1e3)
                }
                return this._d.setTime(t), a.updateOffset(this, !0), this
            }, La.subtract = ba, La.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, La.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, La.toDate = function() {
                return new Date(this.valueOf())
            }, La.toISOString = function(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    a = t ? this.clone().utc() : this;
                return a.year() < 0 || a.year() > 9999 ? k(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", k(a, "Z")) : k(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, La.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment",
                    t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var a = "[" + e + '("]',
                    n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    o = t + '[")]';
                return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + o)
            }, La.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, La.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, La.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, La.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, La.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, La.year = It, La.isLeapYear = function() {
                return R(this.year())
            }, La.weekYear = function(e) {
                return xe.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, La.isoWeekYear = function(e) {
                return xe.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, La.quarter = La.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, La.month = Y, La.daysInMonth = function() {
                return F(this.year(), this.month())
            }, La.week = La.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, La.isoWeek = La.isoWeeks = function(e) {
                var t = te(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, La.weeksInYear = function() {
                var e = this.localeData()._week;
                return ae(this.year(), e.dow, e.doy)
            }, La.isoWeeksInYear = function() {
                return ae(this.year(), 1, 4)
            }, La.date = ha, La.day = La.days = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - t, "d")) : t
            }, La.weekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, La.isoWeekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, La.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, La.hour = La.hours = Qt, La.minute = La.minutes = za, La.second = La.seconds = Ta, La.millisecond = La.milliseconds = va, La.utcOffset = function(e, t, n) {
                var o, c = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = ye(kt, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (o = Ee(this)), this._offset = e, this._isUTC = !0, null != o && this.add(o, "m"), c !== e && (!t || this._changeInProgress ? je(this, ke(e - c, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? c : Ee(this)
            }, La.utc = function(e) {
                return this.utcOffset(0, e)
            }, La.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ee(this), "m")), this
            }, La.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = ye(Bt, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, La.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? Le(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, La.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, La.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, La.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, La.isUtc = Be, La.isUTC = Be, La.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, La.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, La.dates = v("dates accessor is deprecated. Use date instead.", ha), La.months = v("months accessor is deprecated. Use month instead", Y), La.years = v("years accessor is deprecated. Use year instead", It), La.zone = v("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            })), La.isDSTShifted = v("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                if (!c(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (g(e, this), (e = Te(e))._a) {
                    var t = e._isUTC ? m(e._a) : Le(e._a);
                    this._isDSTShifted = this.isValid() && f(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }));
            var Sa = N.prototype;
            Sa.calendar = function(e, t, a) {
                var n = this._calendar[e] || this._calendar.sameElse;
                return S(n) ? n.call(t, a) : n
            }, Sa.longDateFormat = function(e) {
                var t = this._longDateFormat[e],
                    a = this._longDateFormat[e.toUpperCase()];
                return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, (function(e) {
                    return e.slice(1)
                })), this._longDateFormat[e])
            }, Sa.invalidDate = function() {
                return this._invalidDate
            }, Sa.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }, Sa.preparse = Ke, Sa.postformat = Ke, Sa.relativeTime = function(e, t, a, n) {
                var o = this._relativeTime[a];
                return S(o) ? o(e, t, a, n) : o.replace(/%d/i, e)
            }, Sa.pastFuture = function(e, t) {
                var a = this._relativeTime[e > 0 ? "future" : "past"];
                return S(a) ? a(t) : a.replace(/%s/i, t)
            }, Sa.set = function(e) {
                var t, a;
                for (a in e) S(t = e[a]) ? this[a] = t : this["_" + a] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, Sa.months = function(e, t) {
                return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Dt).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
            }, Sa.monthsShort = function(e, t) {
                return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Dt.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, Sa.monthsParse = function(e, t, a) {
                var n, o, c;
                if (this._monthsParseExact) return V.call(this, e, t, a);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                    if (o = m([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (c = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(c.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                    if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                    if (!a && this._monthsParse[n].test(e)) return n
                }
            }, Sa.monthsRegex = function(e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || J.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Gt), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, Sa.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || J.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Rt), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, Sa.week = function(e) {
                return te(e, this._week.dow, this._week.doy).week
            }, Sa.firstDayOfYear = function() {
                return this._week.doy
            }, Sa.firstDayOfWeek = function() {
                return this._week.dow
            }, Sa.weekdays = function(e, t) {
                var a = n(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? ne(a, this._week.dow) : e ? a[e.day()] : a
            }, Sa.weekdaysMin = function(e) {
                return !0 === e ? ne(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, Sa.weekdaysShort = function(e) {
                return !0 === e ? ne(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, Sa.weekdaysParse = function(e, t, a) {
                var n, o, c;
                if (this._weekdaysParseExact) return oe.call(this, e, t, a);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                    if (o = m([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (c = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(c.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                    if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                    if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                    if (!a && this._weekdaysParse[n].test(e)) return n
                }
            }, Sa.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || ce.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Vt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, Sa.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || ce.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, Sa.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || ce.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Yt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, Sa.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, Sa.meridiem = function(e, t, a) {
                return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
            }, me("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === z(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), a.lang = v("moment.lang is deprecated. Use moment.locale instead.", me), a.langData = v("moment.langData is deprecated. Use moment.localeData instead.", ue);
            var Oa = Math.abs,
                Na = at("ms"),
                qa = at("s"),
                Wa = at("m"),
                ya = at("h"),
                wa = at("d"),
                Ea = at("w"),
                Ba = at("M"),
                ka = at("Q"),
                Xa = at("y"),
                Ca = nt("milliseconds"),
                _a = nt("seconds"),
                ja = nt("minutes"),
                Ia = nt("hours"),
                Da = nt("days"),
                Pa = nt("months"),
                Ua = nt("years"),
                Ra = Math.round,
                Ga = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Ha = Math.abs,
                xa = Oe.prototype;
            return xa.isValid = function() {
                return this._isValid
            }, xa.abs = function() {
                var e = this._data;
                return this._milliseconds = Oa(this._milliseconds), this._days = Oa(this._days), this._months = Oa(this._months), e.milliseconds = Oa(e.milliseconds), e.seconds = Oa(e.seconds), e.minutes = Oa(e.minutes), e.hours = Oa(e.hours), e.months = Oa(e.months), e.years = Oa(e.years), this
            }, xa.add = function(e, t) {
                return $e(this, e, t, 1)
            }, xa.subtract = function(e, t) {
                return $e(this, e, t, -1)
            }, xa.as = function(e) {
                if (!this.isValid()) return NaN;
                var t, a, n = this._milliseconds;
                if ("month" === (e = W(e)) || "quarter" === e || "year" === e) switch (t = this._days + n / 864e5, a = this._months + et(t), e) {
                    case "month":
                        return a;
                    case "quarter":
                        return a / 3;
                    case "year":
                        return a / 12
                } else switch (t = this._days + Math.round(tt(this._months)), e) {
                    case "week":
                        return t / 7 + n / 6048e5;
                    case "day":
                        return t + n / 864e5;
                    case "hour":
                        return 24 * t + n / 36e5;
                    case "minute":
                        return 1440 * t + n / 6e4;
                    case "second":
                        return 86400 * t + n / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + n;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, xa.asMilliseconds = Na, xa.asSeconds = qa, xa.asMinutes = Wa, xa.asHours = ya, xa.asDays = wa, xa.asWeeks = Ea, xa.asMonths = Ba, xa.asQuarters = ka, xa.asYears = Xa, xa.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * z(this._months / 12) : NaN
            }, xa._bubble = function() {
                var e, t, a, n, o, c = this._milliseconds,
                    i = this._days,
                    r = this._months,
                    s = this._data;
                return c >= 0 && i >= 0 && r >= 0 || c <= 0 && i <= 0 && r <= 0 || (c += 864e5 * Ze(tt(r) + i), i = 0, r = 0), s.milliseconds = c % 1e3, e = h(c / 1e3), s.seconds = e % 60, t = h(e / 60), s.minutes = t % 60, a = h(t / 60), s.hours = a % 24, i += h(a / 24), r += o = h(et(i)), i -= Ze(tt(o)), n = h(r / 12), r %= 12, s.days = i, s.months = r, s.years = n, this
            }, xa.clone = function() {
                return ke(this)
            }, xa.get = function(e) {
                return e = W(e), this.isValid() ? this[e + "s"]() : NaN
            }, xa.milliseconds = Ca, xa.seconds = _a, xa.minutes = ja, xa.hours = Ia, xa.days = Da, xa.weeks = function() {
                return h(this.days() / 7)
            }, xa.months = Pa, xa.years = Ua, xa.humanize = function(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(),
                    a = function(e, t, a) {
                        var n = ke(e).abs(),
                            o = Ra(n.as("s")),
                            c = Ra(n.as("m")),
                            i = Ra(n.as("h")),
                            r = Ra(n.as("d")),
                            s = Ra(n.as("M")),
                            l = Ra(n.as("y")),
                            p = o <= Ga.ss && ["s", o] || o < Ga.s && ["ss", o] || c <= 1 && ["m"] || c < Ga.m && ["mm", c] || i <= 1 && ["h"] || i < Ga.h && ["hh", i] || r <= 1 && ["d"] || r < Ga.d && ["dd", r] || s <= 1 && ["M"] || s < Ga.M && ["MM", s] || l <= 1 && ["y"] || ["yy", l];
                        return p[2] = t, p[3] = +e > 0, p[4] = a, ot.apply(null, p)
                    }(this, !e, t);
                return e && (a = t.pastFuture(+this, a)), t.postformat(a)
            }, xa.toISOString = it, xa.toString = it, xa.toJSON = it, xa.locale = De, xa.localeData = Pe, xa.toIsoString = v("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", it), xa.lang = Aa, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), C("x", Et), C("X", /[+-]?\d+(\.\d{1,3})?/), I("X", (function(e, t, a) {
                a._d = new Date(1e3 * parseFloat(e, 10))
            })), I("x", (function(e, t, a) {
                a._d = new Date(z(e))
            })), a.version = "2.24.0", rt = Le, a.fn = La, a.min = function() {
                var e = [].slice.call(arguments, 0);
                return Se("isBefore", e)
            }, a.max = function() {
                var e = [].slice.call(arguments, 0);
                return Se("isAfter", e)
            }, a.now = function() {
                return Date.now ? Date.now() : +new Date
            }, a.utc = m, a.unix = function(e) {
                return Le(1e3 * e)
            }, a.months = function(e, t) {
                return Je(e, t, "months")
            }, a.isDate = r, a.locale = me, a.invalid = M, a.duration = ke, a.isMoment = A, a.weekdays = function(e, t, a) {
                return Qe(e, t, a, "weekdays")
            }, a.parseZone = function() {
                return Le.apply(null, arguments).parseZone()
            }, a.localeData = ue, a.isDuration = Ne, a.monthsShort = function(e, t) {
                return Je(e, t, "monthsShort")
            }, a.weekdaysMin = function(e, t, a) {
                return Qe(e, t, a, "weekdaysMin")
            }, a.defineLocale = de, a.updateLocale = function(e, t) {
                if (null != t) {
                    var a, n, o = $t;
                    null != (n = pe(e)) && (o = n._config), (a = new N(t = O(o, t))).parentLocale = Zt[e], Zt[e] = a, me(e)
                } else null != Zt[e] && (null != Zt[e].parentLocale ? Zt[e] = Zt[e].parentLocale : null != Zt[e] && delete Zt[e]);
                return Zt[e]
            }, a.locales = function() {
                return lt(Zt)
            }, a.weekdaysShort = function(e, t, a) {
                return Qe(e, t, a, "weekdaysShort")
            }, a.normalizeUnits = W, a.relativeTimeRounding = function(e) {
                return void 0 === e ? Ra : "function" == typeof e && (Ra = e, !0)
            }, a.relativeTimeThreshold = function(e, t) {
                return void 0 !== Ga[e] && (void 0 === t ? Ga[e] : (Ga[e] = t, "s" === e && (Ga.ss = t - 1), !0))
            }, a.calendarFormat = function(e, t) {
                var a = e.diff(t, "days", !0);
                return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
            }, a.prototype = La, a.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, a
        }, "object" == typeof a && void 0 !== t ? t.exports = o() : "function" == typeof define && define.amd ? define(o) : n.moment = o()
    }, {}],
    77: [function(e, t, a) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function c(e) {
            if (p === setTimeout) return setTimeout(e, 0);
            if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
            try {
                return p(e, 0)
            } catch (t) {
                try {
                    return p.call(null, e, 0)
                } catch (t) {
                    return p.call(this, e, 0)
                }
            }
        }

        function i() {
            g && u && (g = !1, u.length ? M = u.concat(M) : b = -1, M.length && r())
        }

        function r() {
            if (!g) {
                var e = c(i);
                g = !0;
                for (var t = M.length; t;) {
                    for (u = M, M = []; ++b < t;) u && u[b].run();
                    b = -1, t = M.length
                }
                u = null, g = !1,
                    function(e) {
                        if (m === clearTimeout) return clearTimeout(e);
                        if ((m === o || !m) && clearTimeout) return m = clearTimeout, clearTimeout(e);
                        try {
                            m(e)
                        } catch (t) {
                            try {
                                return m.call(null, e)
                            } catch (t) {
                                return m.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function s(e, t) {
            this.fun = e, this.array = t
        }

        function l() {}
        var p, m, d = t.exports = {};
        ! function() {
            try {
                p = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                p = n
            }
            try {
                m = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                m = o
            }
        }();
        var u, M = [],
            g = !1,
            b = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            M.push(new s(e, t)), 1 !== M.length || g || c(r)
        }, s.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(e) {
            return []
        }, d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    }, {}]
}, {}, [21]);
//# sourceMappingURL=main.js.map