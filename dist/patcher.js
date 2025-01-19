// Vencord 511f1be7
// Standalone: false
// Platform: win32
// Updater Disabled: false
"use strict";var yn=Object.create;var De=Object.defineProperty;var An=Object.getOwnPropertyDescriptor;var Cn=Object.getOwnPropertyNames;var wn=Object.getPrototypeOf,Sn=Object.prototype.hasOwnProperty;var d=(e,t)=>()=>(e&&(t=e(e=0)),t);var ae=(e,t)=>{for(var r in t)De(e,r,{get:t[r],enumerable:!0})},bt=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Cn(t))!Sn.call(e,n)&&n!==r&&De(e,n,{get:()=>t[n],enumerable:!(i=An(t,n))||i.enumerable});return e};var Be=(e,t,r)=>(r=e!=null?yn(wn(e)):{},bt(t||!e||!e.__esModule?De(r,"default",{value:e,enumerable:!0}):r,e)),je=e=>bt(De({},"__esModule",{value:!0}),e);var c=d(()=>{"use strict"});var ye=d(()=>{"use strict";c()});function Ae(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var xt=d(()=>{"use strict";c()});var Dn={};function ce(...e){let t={cwd:Rt};return Ze?Fe("flatpak-spawn",["--host","git",...e],t):Fe("git",e,t)}async function Tn(){return(await ce("remote","get-url","origin")).stdout.trim().replace(/git@(.+):/,"https://$1/").replace(/\.git$/,"")}async function bn(){await ce("fetch");let e=(await ce("branch","--show-current")).stdout.trim();if(!((await ce("ls-remote","origin",e)).stdout.length>0))return[];let i=(await ce("log",`HEAD...origin/${e}`,"--pretty=format:%an/%h/%s")).stdout.trim();return i?i.split(`
`).map(n=>{let[s,o,...a]=n.split("/");return{hash:o,author:s,message:a.join("/").split(`
`)[0]}}):[]}async function xn(){return(await ce("pull")).stdout.includes("Fast-forward")}async function En(){return!(await Fe(Ze?"flatpak-spawn":"node",Ze?["--host","node","scripts/build/build.mjs"]:["scripts/build/build.mjs"],{cwd:Rt})).stderr.includes("Build failed")}var Et,Ce,Dt,Pt,Rt,Fe,Ze,kt=d(()=>{"use strict";c();ye();Et=require("child_process"),Ce=require("electron"),Dt=require("path"),Pt=require("util");xt();Rt=(0,Dt.join)(__dirname,".."),Fe=(0,Pt.promisify)(Et.execFile),Ze=!1;Ce.ipcMain.handle("VencordGetRepo",Ae(Tn));Ce.ipcMain.handle("VencordGetUpdates",Ae(bn));Ce.ipcMain.handle("VencordUpdate",Ae(xn));Ce.ipcMain.handle("VencordBuild",Ae(En))});var Ot=d(()=>{"use strict";c();kt()});function Nt(e,t,r,i){return BigInt(e)|BigInt(t)<<16n|BigInt(r)<<32n|BigInt(i)<<48n}function j(e,t){return BigInt(e[t])|BigInt(e[t+1])<<8n|BigInt(e[t+2])<<16n|BigInt(e[t+3])<<24n|BigInt(e[t+4])<<32n|BigInt(e[t+5])<<40n|BigInt(e[t+6])<<48n|BigInt(e[t+7])<<56n}function A(e,t){return e<<t&Pn|e>>Lt-t}function h(e){return BigInt.asUintN(64,e)}function Gt(e,t=0){return new He(t).update(e).digest()}var y,S,_t,we,Mt,Lt,Pn,Rn,He,Vt=d(()=>{c();y=11400714785074694791n,S=14029467366897019727n,_t=1609587929392839161n,we=9650029242287828579n,Mt=2870177450012600261n,Lt=64n,Pn=2n**Lt-1n,Rn=new TextEncoder;He=class{#t;#r;#n;#i;#o;#s;#a;#e;constructor(t=0){this.reset(t)}reset(t=this.#t){return this.#t=BigInt.asUintN(32,BigInt(t)),this.#r=h(this.#t+y+S),this.#n=h(this.#t+S),this.#i=this.#t,this.#o=h(this.#t-y),this.#s=null,this.#a=0,this.#e=0,this}update(t){typeof t=="string"&&(t=Rn.encode(t));let r=0,i=t.length,n=r+i;if(i===0)return this;if(this.#a+=i,this.#e===0&&(this.#s=new Uint8Array(32)),this.#e+i<32)return this.#s.set(t.subarray(0,i),this.#e),this.#e+=i,this;if(this.#e>0){this.#s.set(t.subarray(0,32-this.#e),this.#e);let s=0,o;o=j(this.#s,s),this.#r=h(A(h(this.#r+o*S),31n)*y),s+=8,o=j(this.memory,s),this.#n=h(A(h(this.#n+o*S),31n)*y),s+=8,o=j(this.memory,s),this.#i=h(A(h(this.#i+o*S),31n)*y),s+=8,o=j(this.memory,s),this.#o=h(A(h(this.#o+o*S),31n)*y),r+=32-this.#e,this.#e=0}if(r<=n-32){let s=n-32;do{let o;o=j(t,r),this.#r=h(A(h(this.#r+o*S),31n)*y),r+=8,o=j(t,r),this.#n=h(A(h(this.#n+o*S),31n)*y),r+=8,o=j(t,r),this.#i=h(A(h(this.#i+o*S),31n)*y),r+=8,o=j(t,r),this.#o=h(A(h(this.#o+o*S),31n)*y),r+=8}while(r<=s)}return r<n&&(this.#s.set(t.subarray(r,n),this.#e),this.#e=n-r),this}digest(){let t=this.#s,r=this.#e,i=0,n=0n,s=0n,o=0n;for(this.#a>=32?(n=A(this.#r,1n)+A(this.#n,7n)+A(this.#i,12n)+A(this.#o,18n),n=h(n^A(h(this.#r*S),31n)*y),n=h(n*y+we),n=h(n^A(h(this.#n*S),31n)*y),n=h(n*y+we),n=h(n^A(h(this.#i*S),31n)*y),n=h(n*y+we),n=h(n^A(h(this.#o*S),31n)*y),n=h(n*y+we)):n=h(this.#t+Mt),n+=BigInt(this.#a);i<=r-8;)o=j(t,i),o=h(A(h(o*S),31n)*y),n=h(A(n^o,27n)*y+we),i+=8;for(i+4<=r&&(o=Nt(t[i+1]<<8|t[i],t[i+3]<<8|t[i+2],0,0),n=h(A(n^h(o*y),23n)*S+_t),i+=4);i<r;)o=Nt(t[i++],0,0,0),n=h(A(n^h(o*Mt),11n)*y);return s=h(n>>33n),n=h((n^s)*S),s=h(n>>29n),n=h((n^s)*_t),s=h(n>>32n),n=h(n^s),n}}});function On(e){e=BigInt(e);let t=[],r=Math.ceil(Math.floor(Math.log2(Number(e))+1)/8);for(let n=0;n<r;n++)t.unshift(Number(e>>BigInt(8*n)&BigInt(255)));let i=new Uint8Array(t);return kn?i:i.reverse()}function zt(e){let t=Gt(e,0),r=On(t);return[le[r[0]>>2],le[(r[0]&3)<<4|r[1]>>4],le[(r[1]&15)<<2|r[2]>>6],le[r[2]&63],le[r[3]>>2],le[(r[3]&3)<<4|r[3]>>4]].join("")}var le,kn,Ut=d(()=>{"use strict";c();Vt();le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),kn=(()=>{let e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})()});function Bt(e){let t=typeof e=="string"?e:e.source;if(t=t.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(i,n,s)=>{let o=s==="raw"?n:zt(n),a=typeof e=="string";return!Number.isNaN(Number(o[0]))||o.includes("+")||o.includes("/")?a?`["${o}"]`:String.raw`(?:\["${o}"\])`.replaceAll("+","\\+"):a?`.${o}`:String.raw`(?:\.${o})`}),typeof e=="string")return t;let r=t.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`);return new RegExp(r,e.flags)}var jt=d(()=>{"use strict";c();Ut()});var $e={};ae($e,{fetchTrackData:()=>Gn});async function Ke(e){let{stdout:t}=await Wt("osascript",e.map(r=>["-e",r]).flat());return t}async function Ln({id:e,name:t,artist:r,album:i}){if(e===N?.id){if("data"in N)return N.data;if("failures"in N&&N.failures>=5)return null}try{let n=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");n.searchParams.set("platform","web"),n.searchParams.set("l","en-US"),n.searchParams.set("limit","1"),n.searchParams.set("with","serverBubbles"),n.searchParams.set("types","songs"),n.searchParams.set("term",`${t} ${r} ${i}`),n.searchParams.set("include[songs]","artists");let s=await Nn(),o=await fetch(n,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${s}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(a=>a.json()).then(a=>a.results.song.data[0]);return N={id:e,data:{appleMusicLink:o.attributes.url,songLink:`https://song.link/i/${o.id}`,albumArtwork:o.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:o.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},N.data}catch(n){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",n),N={id:e,failures:(e===N?.id&&"failures"in N?N.failures:0)+1},null}}async function Gn(){try{await Wt("pgrep",["^Music$"])}catch{return null}if(await Ke(['tell application "Music"',"get player state","end tell"]).then(g=>g.trim())!=="playing")return null;let t=await Ke(['tell application "Music"',"get player position","end tell"]).then(g=>Number.parseFloat(g.trim())),r=await Ke(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[i,n,s,o,a]=r.split(`
`).filter(g=>!!g),l=Number.parseFloat(a),v=await Ln({id:i,name:n,artist:o,album:s});return{name:n,album:s,artist:o,playerPosition:t,duration:l,...v}}var Ft,Zt,Wt,N,_n,Mn,Ye,Nn,Ht=d(()=>{"use strict";c();jt();Ft=require("child_process"),Zt=require("util"),Wt=(0,Zt.promisify)(Ft.execFile);N=null,_n=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,Mn=Bt(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),Nn=async()=>{if(Ye)return Ye;let e=await fetch("https://music.apple.com/").then(n=>n.text()),t=new URL(e.match(_n)[1],"https://music.apple.com/"),i=(await fetch(t).then(n=>n.text())).match(Mn)[1];return Ye=i,i}});var Je={};ae(Je,{initDevtoolsOpenEagerLoad:()=>Vn});function Vn(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var Kt=d(()=>{"use strict";c()});var Se,Yt=d(()=>{"use strict";c();Se=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,i=""){let n=this;return new Proxy(t,{get(s,o){let a=s[o];return!(o in s)&&n.getDefaultValue&&(a=n.getDefaultValue({target:s,key:o,root:r,path:i})),typeof a=="object"&&a!==null&&!Array.isArray(a)?n.makeProxy(a,r,`${i}${i&&"."}${o}`):a},set(s,o,a){if(s[o]===a)return!0;Reflect.set(s,o,a);let l=`${i}${i&&"."}${o}`;return n.globalListeners.forEach(v=>v(a,l)),n.pathListeners.get(l)?.forEach(v=>v(a)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let i=t,n=r.split(".");for(let s of n){if(!i){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}i=i[s]}this.pathListeners.get(r)?.forEach(s=>s(i))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let i=this.pathListeners.get(t)??new Set;i.add(r),this.pathListeners.set(t,i)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let i=this.pathListeners.get(t);!i||(i.delete(r),i.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}}});function qe(e,t){for(let r in t){let i=t[r];typeof i=="object"&&!Array.isArray(i)?(e[r]??={},qe(e[r],i)):e[r]??=i}return e}var $t=d(()=>{"use strict";c()});var Jt,H,Pe,ue,K,he,Xe,Qe,qt,Re,fe=d(()=>{"use strict";c();Jt=require("electron"),H=require("path"),Pe=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,H.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,H.join)(Jt.app.getPath("userData"),"..","Vencord")),ue=(0,H.join)(Pe,"settings"),K=(0,H.join)(Pe,"themes"),he=(0,H.join)(ue,"quickCss.css"),Xe=(0,H.join)(ue,"settings.json"),Qe=(0,H.join)(ue,"native-settings.json"),qt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"],Re=process.argv.includes("--vanilla")});function Qt(e,t){try{return JSON.parse((0,J.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var ke,J,D,zn,er,Xt,q=d(()=>{"use strict";c();ye();Yt();$t();ke=require("electron"),J=require("fs");fe();(0,J.mkdirSync)(ue,{recursive:!0});D=new Se(Qt("renderer",Xe));D.addGlobalChangeListener(()=>{try{(0,J.writeFileSync)(Xe,JSON.stringify(D.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});ke.ipcMain.handle("VencordGetSettingsDir",()=>ue);ke.ipcMain.on("VencordGetSettings",e=>e.returnValue=D.plain);ke.ipcMain.handle("VencordSetSettings",(e,t,r)=>{D.setData(t,r)});zn={plugins:{}},er=Qt("native",Qe);qe(er,zn);Xt=new Se(er);Xt.addGlobalChangeListener(()=>{try{(0,J.writeFileSync)(Qe,JSON.stringify(Xt.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var rr={};var tr,nr=d(()=>{"use strict";c();q();tr=require("electron");tr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let n=D.store.plugins?.FixSpotifyEmbeds;if(!n?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${n.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var or={};var ir,sr=d(()=>{"use strict";c();q();ir=require("electron");ir.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i.once("dom-ready",()=>{if(i.url.startsWith("https://www.youtube.com/")){if(!D.store.plugins?.FixYoutubeEmbeds?.enabled)return;i.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var et={};ae(et,{resolveRedirect:()=>Bn});function cr(e){return new Promise((t,r)=>{let i=(0,ar.request)(new URL(e),{method:"HEAD"},n=>{t(n.headers.location?cr(n.headers.location):e)});i.on("error",r),i.end()})}async function Bn(e,t){return Un.test(t)?cr(t):t}var ar,Un,lr=d(()=>{"use strict";c();ar=require("https"),Un=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var tt={};ae(tt,{makeDeeplTranslateRequest:()=>jn});async function jn(e,t,r,i){let n=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let s=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${r}`},body:i}),o=await s.text();return{status:s.status,data:o}}catch(s){return{status:-1,data:String(s)}}}var ur=d(()=>{"use strict";c()});var rt={};ae(rt,{readRecording:()=>Fn});async function Fn(e,t){t=(0,Te.normalize)(t);let r=(0,Te.basename)(t),i=(0,Te.normalize)(hr.app.getPath("userData")+"/");if(console.log(r,i,t),r!=="recording.ogg"||!t.startsWith(i))return null;try{let n=await(0,fr.readFile)(t);return new Uint8Array(n.buffer)}catch{return null}}var hr,fr,Te,pr=d(()=>{"use strict";c();hr=require("electron"),fr=require("fs/promises"),Te=require("path")});var nt={};ae(nt,{sendToOverlay:()=>Zn});function Zn(e,t){t.messageType=t.type;let r=JSON.stringify(t);gr??=(0,dr.createSocket)("udp4"),gr.send(r,42069,"127.0.0.1")}var dr,gr,vr=d(()=>{"use strict";c();dr=require("dgram")});var mr,Ir=d(()=>{c();mr=`/* eslint-disable */

/**
 * This file is part of AdGuard's Block YouTube Ads (https://github.com/AdguardTeam/BlockYouTubeAdsShortcut).
 *
 * Copyright (C) AdGuard Team
 *
 * AdGuard's Block YouTube Ads is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard's Block YouTube Ads is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard's Block YouTube Ads.  If not, see <http://www.gnu.org/licenses/>.
 */

const hiddenCSS = [
    "#__ffYoutube1",
    "#__ffYoutube2",
    "#__ffYoutube3",
    "#__ffYoutube4",
    "#feed-pyv-container",
    "#feedmodule-PRO",
    "#homepage-chrome-side-promo",
    "#merch-shelf",
    "#offer-module",
    '#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',
    "#pla-shelf",
    "#premium-yva",
    "#promo-info",
    "#promo-list",
    "#promotion-shelf",
    "#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer",
    "#search-pva",
    "#shelf-pyv-container",
    "#video-masthead",
    "#watch-branded-actions",
    "#watch-buy-urls",
    "#watch-channel-brand-div",
    "#watch7-branded-banner",
    "#YtKevlarVisibilityIdentifier",
    "#YtSparklesVisibilityIdentifier",
    ".carousel-offer-url-container",
    ".companion-ad-container",
    ".GoogleActiveViewElement",
    '.list-view[style="margin: 7px 0pt;"]',
    ".promoted-sparkles-text-search-root-container",
    ".promoted-videos",
    ".searchView.list-view",
    ".sparkles-light-cta",
    ".watch-extra-info-column",
    ".watch-extra-info-right",
    ".ytd-carousel-ad-renderer",
    ".ytd-compact-promoted-video-renderer",
    ".ytd-companion-slot-renderer",
    ".ytd-merch-shelf-renderer",
    ".ytd-player-legacy-desktop-watch-ads-renderer",
    ".ytd-promoted-sparkles-text-search-renderer",
    ".ytd-promoted-video-renderer",
    ".ytd-search-pyv-renderer",
    ".ytd-video-masthead-ad-v3-renderer",
    ".ytp-ad-action-interstitial-background-container",
    ".ytp-ad-action-interstitial-slot",
    ".ytp-ad-image-overlay",
    ".ytp-ad-overlay-container",
    ".ytp-ad-progress",
    ".ytp-ad-progress-list",
    '[class*="ytd-display-ad-"]',
    '[layout*="display-ad-"]',
    'a[href^="http://www.youtube.com/cthru?"]',
    'a[href^="https://www.youtube.com/cthru?"]',
    "ytd-action-companion-ad-renderer",
    "ytd-banner-promo-renderer",
    "ytd-compact-promoted-video-renderer",
    "ytd-companion-slot-renderer",
    "ytd-display-ad-renderer",
    "ytd-promoted-sparkles-text-search-renderer",
    "ytd-promoted-sparkles-web-renderer",
    "ytd-search-pyv-renderer",
    "ytd-single-option-survey-renderer",
    "ytd-video-masthead-ad-advertiser-info-renderer",
    "ytd-video-masthead-ad-v3-renderer",
    "YTM-PROMOTED-VIDEO-RENDERER",
];
/**
* Adds CSS to the page
*/
const hideElements = () => {
    const selectors = hiddenCSS;
    if (!selectors) {
        return;
    }
    const rule = selectors.join(", ") + " { display: none!important; }";
    const style = document.createElement("style");
    style.textContent = rule;
    document.head.appendChild(style);
};
/**
* Calls the "callback" function on every DOM change, but not for the tracked events
* @param {Function} callback callback function
*/
const observeDomChanges = callback => {
    const domMutationObserver = new MutationObserver(mutations => {
        callback(mutations);
    });
    domMutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
};
/**
* This function is supposed to be called on every DOM change
*/
const hideDynamicAds = () => {
    const elements = document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");
    if (elements.length === 0) {
        return;
    }
    elements.forEach(el => {
        if (el.parentNode && el.parentNode.parentNode) {
            const parent = el.parentNode.parentNode;
            if (parent.localName === "ytd-rich-item-renderer") {
                parent.style.display = "none";
            }
        }
    });
};
/**
* This function checks if the video ads are currently running
* and auto-clicks the skip button.
*/
const autoSkipAds = () => {
    // If there's a video that plays the ad at this moment, scroll this ad
    if (document.querySelector(".ad-showing")) {
        const video = document.querySelector("video");
        if (video && video.duration) {
            video.currentTime = video.duration;
            // Skip button should appear after that,
            // now simply click it automatically
            setTimeout(() => {
                const skipBtn = document.querySelector("button.ytp-ad-skip-button");
                if (skipBtn) {
                    skipBtn.click();
                }
            }, 100);
        }
    }
};
/**
* This function overrides a property on the specified object.
*
* @param {object} obj object to look for properties in
* @param {string} propertyName property to override
* @param {*} overrideValue value to set
*/
const overrideObject = (obj, propertyName, overrideValue) => {
    if (!obj) {
        return false;
    }
    let overriden = false;
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && key === propertyName) {
            obj[key] = overrideValue;
            overriden = true;
        } else if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {
            if (overrideObject(obj[key], propertyName, overrideValue)) {
                overriden = true;
            }
        }
    }
    return overriden;
};
/**
* Overrides JSON.parse and Response.json functions.
* Examines these functions arguments, looks for properties with the specified name there
* and if it exists, changes it's value to what was specified.
*
* @param {string} propertyName name of the property
* @param {*} overrideValue new value for the property
*/
const jsonOverride = (propertyName, overrideValue) => {
    const nativeJSONParse = JSON.parse;
    JSON.parse = (...args) => {
        const obj = nativeJSONParse.apply(this, args);
        // Override it's props and return back to the caller
        overrideObject(obj, propertyName, overrideValue);
        return obj;
    };
    // Override Response.prototype.json
    Response.prototype.json = new Proxy(Response.prototype.json, {
        async apply(...args) {
            // Call the target function, get the original Promise
            const result = await Reflect.apply(...args);
            // Create a new one and override the JSON inside
            overrideObject(result, propertyName, overrideValue);
            return result;
        },
    });
};
// Removes ads metadata from YouTube XHR requests
jsonOverride("adPlacements", []);
jsonOverride("playerAds", []);
// Applies CSS that hides YouTube ad elements
hideElements();
// Some changes should be re-evaluated on every page change
hideDynamicAds();
autoSkipAds();
observeDomChanges(() => {
    hideDynamicAds();
    autoSkipAds();
});`});var Ar={};var yr,Cr=d(()=>{"use strict";c();q();yr=require("electron");Ir();yr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i.once("dom-ready",()=>{!D.store.plugins?.YoutubeAdblock?.enabled||(i.url.includes("youtube.com/embed/")||i.url.includes("discordsays")&&i.url.includes("youtube.com"))&&i.executeJavaScript(mr)})})})});var wr,Sr=d(()=>{c();Ht();Kt();nr();sr();lr();ur();pr();vr();Cr();wr={AppleMusicRichPresence:$e,ConsoleShortcuts:Je,FixSpotifyEmbeds:rr,FixYoutubeEmbeds:or,OpenInApp:et,Translate:tt,VoiceMessages:rt,XSOverlay:nt,YoutubeAdblock:Ar}});var it,Tr,br=d(()=>{"use strict";c();ye();it=require("electron");Sr();Tr={};for(let[e,t]of Object.entries(wr)){let r=Object.entries(t);if(!r.length)continue;let i=Tr[e]={};for(let[n,s]of r){let o=`VencordPluginNative_${e}_${n}`;it.ipcMain.handle(o,s),i[n]=o}}it.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Tr})});function ot(e,t=300){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{e(...i)},t)}}var xr=d(()=>{"use strict";c()});var Er,Dr=d(()=>{c();Er="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4uY3NzIgogICAgICAgICAgICBpbnRlZ3JpdHk9InNoYTI1Ni10aUpQUTJPMDR6L3BaL0F3ZHlJZ2hyT016ZXdmK1BJdkVsMVlLYlF2c1prPSIKICAgICAgICAgICAgY3Jvc3NvcmlnaW49ImFub255bW91cyIKICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIgogICAgICAgIC8+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBodG1sLAogICAgICAgICAgICBib2R5LAogICAgICAgICAgICAjY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgICAgIDxzY3JpcHQKICAgICAgICAgICAgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9sb2FkZXIuanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhMjU2LUtjVTQ4VEdyODRyN3VuRjdKNUlnQm85NWFlVnJFYnJHZTA0UzdUY0ZVanM9IgogICAgICAgICAgICBjcm9zc29yaWdpbj0iYW5vbnltb3VzIgogICAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiCiAgICAgICAgPjwvc2NyaXB0PgoKICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICByZXF1aXJlLmNvbmZpZyh7CiAgICAgICAgICAgICAgICBwYXRoczogewogICAgICAgICAgICAgICAgICAgIHZzOiAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function st(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Pr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Rr(e,t){if(!e)return st(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return st(t);let i={},n="",s="";for(let o of r.split(Wn))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){i[n]=s.trim();let a=o.indexOf(" ");n=o.substring(1,a),s=o.substring(a+1)}else s+=" "+o.replace("\\n",`
`).replace(Hn,"@");return i[n]=s.trim(),delete i[""],st(t,i)}var Wn,Hn,kr=d(()=>{"use strict";c();Wn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Hn=/^\\@/});function _r(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Or.shell.openExternal(t)}return{action:"deny"}})}var Or,Mr=d(()=>{"use strict";c();Or=require("electron")});function at(e,t){let r=(0,pe.normalize)(e),i=(0,pe.join)(e,t),n=(0,pe.normalize)(i);return n.startsWith(r)?n:null}function Nr(){return(0,Q.readFile)(he,"utf-8").catch(()=>"")}async function Kn(){let e=await(0,Q.readdir)(K).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let i=await Lr(r).then(Pr).catch(()=>null);i!=null&&t.push(Rr(i,r))}return t}function Lr(e){e=e.replace(/\?v=\d+$/,"");let t=at(K,e);return t?(0,Q.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function Gr(e){let t;(0,Q.open)(he,"a+").then(i=>{i.close(),t=(0,X.watch)(he,{persistent:!1},ot(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Nr())},50))}).catch(()=>{});let r=(0,X.watch)(K,{persistent:!1},ot(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{t?.close(),r.close()})}var C,X,Q,pe,ct=d(()=>{"use strict";c();Ot();br();q();xr();ye();C=require("electron");Dr();X=require("fs"),Q=require("fs/promises"),pe=require("path");kr();fe();Mr();(0,X.mkdirSync)(K,{recursive:!0});C.ipcMain.handle("VencordOpenQuickCss",()=>C.shell.openPath(he));C.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!qt.includes(r))throw"Disallowed protocol.";C.shell.openExternal(t)});C.ipcMain.handle("VencordGetQuickCss",()=>Nr());C.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,X.writeFileSync)(he,t));C.ipcMain.handle("VencordGetThemesDir",()=>K);C.ipcMain.handle("VencordGetThemesList",()=>Kn());C.ipcMain.handle("VencordGetThemeData",(e,t)=>Lr(t));C.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${C.systemPreferences.getAccentColor?.()||""}`}));C.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=C.BrowserWindow.getAllWindows().find(i=>i.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new C.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,pe.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});_r(r),await r.loadURL(`data:text/html;base64,${Er}`)})});function cn(e,t,r){let i=t;if(t in e)return void r(e[i]);Object.defineProperty(e,t,{set(n){delete e[i],e[i]=n,r(n)},configurable:!0,enumerable:!1})}var ln=d(()=>{"use strict";c()});var di={};function pi(e,t){let r=e.slice(4).split(".").map(Number),i=t.slice(4).split(".").map(Number);for(let n=0;n<i.length;n++){if(r[n]>i[n])return!0;if(r[n]<i[n])return!1}return!1}function gi(){if(!process.env.DISABLE_UPDATER_AUTO_PATCHING)try{let e=(0,M.dirname)(process.execPath),t=(0,M.basename)(e),r=(0,M.join)(e,".."),i=(0,P.readdirSync)(r).reduce((a,l)=>l.startsWith("app-")&&pi(l,a)?l:a,t);if(i===t)return;let n=(0,M.join)(r,i,"resources"),s=(0,M.join)(n,"app.asar"),o=(0,M.join)(n,"_app.asar");if(!(0,P.existsSync)(s)||(0,P.statSync)(s).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,P.renameSync)(s,o),(0,P.mkdirSync)(s),(0,P.writeFileSync)((0,M.join)(s,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,P.writeFileSync)((0,M.join)(s,"index.js"),`require(${JSON.stringify((0,M.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}var un,P,M,hn=d(()=>{"use strict";c();un=require("electron"),P=require("original-fs"),M=require("path");un.app.on("before-quit",gi)});var yi={};var T,Y,vi,mi,vt,Ii,fn=d(()=>{"use strict";c();ln();T=Be(require("electron")),Y=require("path");ct();q();fe();console.log("[Vencord] Starting up...");vi=require.main.filename,mi=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",vt=(0,Y.join)((0,Y.dirname)(vi),"..",mi),Ii=require((0,Y.join)(vt,"package.json"));require.main.filename=(0,Y.join)(vt,Ii.main);T.app.setAppPath(vt);if(Re)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=D.store;if(hn(),e.winCtrlQ){let n=T.Menu.buildFromTemplate;T.Menu.buildFromTemplate=function(s){if(s[0]?.label==="&File"){let{submenu:o}=s[0];Array.isArray(o)&&o.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>T.app.quit()})}return n.call(this,s)}}class t extends T.default.BrowserWindow{constructor(s){if(s?.webPreferences?.preload&&s.title){let o=s.webPreferences.preload;s.webPreferences.preload=(0,Y.join)(__dirname,"preload.js"),s.webPreferences.sandbox=!1,s.webPreferences.backgroundThrottling=!1,e.frameless?s.frame=!1:e.winNativeTitleBar&&delete s.frame,e.transparent&&(s.transparent=!0,s.backgroundColor="#00000000"),!1&&(s.backgroundColor="#00000000",e.macosVibrancyStyle&&(s.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=o,super(s),Gr(this)}else super(s)}}Object.assign(t,T.default.BrowserWindow),Object.defineProperty(t,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...T.default,BrowserWindow:t},cn(global,"appSettings",n=>{n.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(n.set("MIN_WIDTH",0),n.set("MIN_HEIGHT",0)):(n.set("MIN_WIDTH",940),n.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,Y.join)(T.app.getPath("userData"),"..","Vencord");let i=T.app.commandLine.appendSwitch;T.app.commandLine.appendSwitch=function(...n){if(n[0]==="disable-features"){let s=new Set((n[1]??"").split(","));s.add("WidgetLayering"),s.add("UseEcoQoSForBackgroundProcess"),n[1]+=[...s].join(",")}return i.apply(this,n)},T.app.commandLine.appendSwitch("disable-renderer-backgrounding"),T.app.commandLine.appendSwitch("disable-background-timer-throttling"),T.app.commandLine.appendSwitch("disable-backgrounding-occluded-windows")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});c();var te=require("electron"),pn=require("path");ct();q();fe();c();var on=require("electron");c();var Ur=require("module"),Yn=(0,Ur.createRequire)("/"),_e,$n=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{_e=Yn("worker_threads").Worker}catch{}var Jn=_e?function(e,t,r,i,n){var s=!1,o=new _e(e+$n,{eval:!0}).on("error",function(a){return n(a,null)}).on("message",function(a){return n(null,a)}).on("exit",function(a){a&&!s&&n(new Error("exited with code "+a),null)});return o.postMessage(r,i),o.terminate=function(){return s=!0,_e.prototype.terminate.call(o)},o}:function(e,t,r,i,n){setImmediate(function(){return n(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var s=function(){};return{terminate:s,postMessage:s}},E=Uint8Array,ee=Uint16Array,Br=Int32Array,ht=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ft=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jr=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fr=function(e,t){for(var r=new ee(31),i=0;i<31;++i)r[i]=t+=1<<e[i-1];for(var n=new Br(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)n[s]=s-r[i]<<5|i;return{b:r,r:n}},Zr=Fr(ht,2),pt=Zr.b,qn=Zr.r;pt[28]=258,qn[258]=28;var Wr=Fr(ft,0),Hr=Wr.b,Uo=Wr.r,Le=new ee(32768);for(m=0;m<32768;++m)F=(m&43690)>>1|(m&21845)<<1,F=(F&52428)>>2|(F&13107)<<2,F=(F&61680)>>4|(F&3855)<<4,Le[m]=((F&65280)>>8|(F&255)<<8)>>1;var F,m,ge=function(e,t,r){for(var i=e.length,n=0,s=new ee(t);n<i;++n)e[n]&&++s[e[n]-1];var o=new ee(t);for(n=1;n<t;++n)o[n]=o[n-1]+s[n-1]<<1;var a;if(r){a=new ee(1<<t);var l=15-t;for(n=0;n<i;++n)if(e[n])for(var v=n<<4|e[n],g=t-e[n],u=o[e[n]-1]++<<g,I=u|(1<<g)-1;u<=I;++u)a[Le[u]>>l]=v}else for(a=new ee(i),n=0;n<i;++n)e[n]&&(a[n]=Le[o[e[n]-1]++]>>15-e[n]);return a},be=new E(288);for(m=0;m<144;++m)be[m]=8;var m;for(m=144;m<256;++m)be[m]=9;var m;for(m=256;m<280;++m)be[m]=7;var m;for(m=280;m<288;++m)be[m]=8;var m,Kr=new E(32);for(m=0;m<32;++m)Kr[m]=5;var m;var Yr=ge(be,9,1);var $r=ge(Kr,5,1),Me=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},_=function(e,t,r){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&r},Ne=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Jr=function(e){return(e+7)/8|0},Ge=function(e,t,r){return(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length),new E(e.subarray(t,r))};var qr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],x=function(e,t,r){var i=new Error(t||qr[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,x),!r)throw i;return i},Xr=function(e,t,r,i){var n=e.length,s=i?i.length:0;if(!n||t.f&&!t.l)return r||new E(0);var o=!r,a=o||t.i!=2,l=t.i;o&&(r=new E(n*3));var v=function(wt){var St=r.length;if(wt>St){var Tt=new E(Math.max(St*2,wt));Tt.set(r),r=Tt}},g=t.f||0,u=t.p||0,I=t.b||0,G=t.l,re=t.d,U=t.m,R=t.n,k=n*8;do{if(!G){g=_(e,u,1);var Z=_(e,u+1,3);if(u+=3,Z)if(Z==1)G=Yr,re=$r,U=9,R=5;else if(Z==2){var ve=_(e,u,31)+257,xe=_(e,u+10,15)+4,$=ve+_(e,u+5,31)+1;u+=14;for(var O=new E($),ie=new E(19),w=0;w<xe;++w)ie[jr[w]]=_(e,u+w*3,7);u+=xe*3;for(var me=Me(ie),gn=(1<<me)-1,dn=ge(ie,me,1),w=0;w<$;){var mt=dn[_(e,u,gn)];u+=mt&15;var b=mt>>4;if(b<16)O[w++]=b;else{var oe=0,Ee=0;for(b==16?(Ee=3+_(e,u,3),u+=2,oe=O[w-1]):b==17?(Ee=3+_(e,u,7),u+=3):b==18&&(Ee=11+_(e,u,127),u+=7);Ee--;)O[w++]=oe}}var It=O.subarray(0,ve),W=O.subarray(ve);U=Me(It),R=Me(W),G=ge(It,U,1),re=ge(W,R,1)}else x(1);else{var b=Jr(u)+4,B=e[b-4]|e[b-3]<<8,ne=b+B;if(ne>n){l&&x(0);break}a&&v(I+B),r.set(e.subarray(b,ne),I),t.b=I+=B,t.p=u=ne*8,t.f=g;continue}if(u>k){l&&x(0);break}}a&&v(I+131072);for(var vn=(1<<U)-1,mn=(1<<R)-1,Ve=u;;Ve=u){var oe=G[Ne(e,u)&vn],se=oe>>4;if(u+=oe&15,u>k){l&&x(0);break}if(oe||x(2),se<256)r[I++]=se;else if(se==256){Ve=u,G=null;break}else{var yt=se-254;if(se>264){var w=se-257,Ie=ht[w];yt=_(e,u,(1<<Ie)-1)+pt[w],u+=Ie}var ze=re[Ne(e,u)&mn],Ue=ze>>4;ze||x(3),u+=ze&15;var W=Hr[Ue];if(Ue>3){var Ie=ft[Ue];W+=Ne(e,u)&(1<<Ie)-1,u+=Ie}if(u>k){l&&x(0);break}a&&v(I+131072);var At=I+yt;if(I<W){var Ct=s-W,In=Math.min(W,At);for(Ct+I<0&&x(3);I<In;++I)r[I]=i[Ct+I]}for(;I<At;++I)r[I]=r[I-W]}}t.l=G,t.p=Ve,t.b=I,t.f=g,G&&(g=1,t.m=U,t.d=re,t.n=R)}while(!g);return I!=r.length&&o?Ge(r,0,I):r.subarray(0,I)};var Xn=new E(0);var Qn=function(e,t){var r={};for(var i in e)r[i]=e[i];for(var i in t)r[i]=t[i];return r},Vr=function(e,t,r){for(var i=e(),n=e.toString(),s=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var a=i[o],l=s[o];if(typeof a=="function"){t+=";"+l+"=";var v=a.toString();if(a.prototype)if(v.indexOf("[native code]")!=-1){var g=v.indexOf(" ",8)+1;t+=v.slice(g,v.indexOf("(",g))}else{t+=v;for(var u in a.prototype)t+=";"+l+".prototype."+u+"="+a.prototype[u].toString()}else t+=v}else r[l]=a}return t},Oe=[],ei=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},ti=function(e,t,r,i){if(!Oe[r]){for(var n="",s={},o=e.length-1,a=0;a<o;++a)n=Vr(e[a],n,s);Oe[r]={c:Vr(e[o],n,s),e:s}}var l=Qn({},Oe[r].e);return Jn(Oe[r].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,l,ei(l),i)},ri=function(){return[E,ee,Br,ht,ft,jr,pt,Hr,Yr,$r,Le,qr,ge,Me,_,Ne,Jr,Ge,x,Xr,gt,Qr,en]};var Qr=function(e){return postMessage(e,[e.buffer])},en=function(e){return e&&{out:e.size&&new E(e.size),dictionary:e.dictionary}},ni=function(e,t,r,i,n,s){var o=ti(r,i,n,function(a,l){o.terminate(),s(a,l)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}};var V=function(e,t){return e[t]|e[t+1]<<8},L=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},lt=function(e,t){return L(e,t)+L(e,t+4)*4294967296};function ii(e,t,r){return r||(r=t,t={}),typeof r!="function"&&x(7),ni(e,t,[ri],function(i){return Qr(gt(i.data[0],en(i.data[1])))},1,r)}function gt(e,t){return Xr(e,{i:2},t&&t.out,t&&t.dictionary)}var ut=typeof TextDecoder<"u"&&new TextDecoder,oi=0;try{ut.decode(Xn,{stream:!0}),oi=1}catch{}var si=function(e){for(var t="",r=0;;){var i=e[r++],n=(i>127)+(i>223)+(i>239);if(r+n>e.length)return{s:t,r:Ge(e,r-1)};n?n==3?(i=((i&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):n&1?t+=String.fromCharCode((i&31)<<6|e[r++]&63):t+=String.fromCharCode((i&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(i)}};function ai(e,t){if(t){for(var r="",i=0;i<e.length;i+=16384)r+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return r}else{if(ut)return ut.decode(e);var n=si(e),s=n.s,r=n.r;return r.length&&x(8),s}}var ci=function(e,t){return t+30+V(e,t+26)+V(e,t+28)},li=function(e,t,r){var i=V(e,t+28),n=ai(e.subarray(t+46,t+46+i),!(V(e,t+8)&2048)),s=t+46+i,o=L(e,t+20),a=r&&o==4294967295?ui(e,s):[o,L(e,t+24),L(e,t+42)],l=a[0],v=a[1],g=a[2];return[V(e,t+10),l,v,n,s+V(e,t+30)+V(e,t+32),g]},ui=function(e,t){for(;V(e,t)!=1;t+=4+V(e,t+2));return[lt(e,t+12),lt(e,t+4),lt(e,t+20)]};var zr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function tn(e,t,r){r||(r=t,t={}),typeof r!="function"&&x(7);var i=[],n=function(){for(var R=0;R<i.length;++R)i[R]()},s={},o=function(R,k){zr(function(){r(R,k)})};zr(function(){o=r});for(var a=e.length-22;L(e,a)!=101010256;--a)if(!a||e.length-a>65558)return o(x(13,0,1),null),n;var l=V(e,a+8);if(l){var v=l,g=L(e,a+16),u=g==4294967295||v==65535;if(u){var I=L(e,a-12);u=L(e,I)==101075792,u&&(v=l=L(e,I+32),g=L(e,I+48))}for(var G=t&&t.filter,re=function(R){var k=li(e,g,u),Z=k[0],b=k[1],B=k[2],ne=k[3],ve=k[4],xe=k[5],$=ci(e,xe);g=ve;var O=function(w,me){w?(n(),o(w,null)):(me&&(s[ne]=me),--l||o(null,s))};if(!G||G({name:ne,size:b,originalSize:B,compression:Z}))if(!Z)O(null,Ge(e,$,$+b));else if(Z==8){var ie=e.subarray($,$+b);if(B<524288||b>.8*B)try{O(null,gt(ie,{out:new E(B)}))}catch(w){O(w,null)}else i.push(ii(ie,{size:B},O))}else O(x(14,"unknown compression type "+Z,1),null);else O(null,null)},U=0;U<v;++U)re(U)}else o(null,{});return n}var sn=require("fs"),z=require("fs/promises"),de=require("path");fe();c();function rn(e){function t(o,a,l,v){let g=0;return g+=o<<0,g+=a<<8,g+=l<<16,g+=v<<24>>>0,g}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,i=e[4]===2;if(!i&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(i){let o=t(e[8],e[9],e[10],e[11]),a=t(e[12],e[13],e[14],e[15]),l=16+o+a;return e.subarray(l,e.length)}let s=12+t(e[8],e[9],e[10],e[11]);return e.subarray(s,e.length)}c();var nn=Be(require("https"));function dt(e,t={}){return new Promise((r,i)=>{nn.default.get(e,t,n=>{let{statusCode:s,statusMessage:o,headers:a}=n;if(s>=400)return void i(`${s}: ${o} - ${e}`);if(s>=300)return void r(dt(a.location,t));let l=[];n.on("error",i),n.on("data",v=>l.push(v)),n.once("end",()=>r(Buffer.concat(l)))})})}var hi=(0,de.join)(Pe,"ExtensionCache");async function fi(e,t){return await(0,z.mkdir)(t,{recursive:!0}),new Promise((r,i)=>{tn(e,(n,s)=>{if(n)return void i(n);Promise.all(Object.keys(s).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,z.mkdir)((0,de.join)(t,o),{recursive:!0});let a=o.split("/"),l=a.pop(),v=a.join("/"),g=(0,de.join)(t,v);v&&await(0,z.mkdir)(g,{recursive:!0}),await(0,z.writeFile)((0,de.join)(g,l),s[o])})).then(()=>r()).catch(o=>{(0,z.rm)(t,{recursive:!0,force:!0}),i(o)})})})}async function an(e){let t=(0,de.join)(hi,`${e}`);try{await(0,z.access)(t,sn.constants.F_OK)}catch{let i=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=${process.versions.chrome}`,n=await dt(i,{headers:{"User-Agent":`Electron ${process.versions.electron} ~ Vencord (https://github.com/Vendicated/Vencord)`}});await fi(rn(n),t).catch(console.error)}on.session.defaultSession.loadExtension(t)}Re||te.app.whenReady().then(()=>{te.protocol.registerFileProtocol("vencord",({url:n},s)=>{let o=n.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let a=o.slice(8),l=at(K,a);if(!l){s({statusCode:403});return}s(l.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":s((0,pn.join)(__dirname,o));break;default:s({statusCode:403})}});try{D.store.enableReactDevtools&&an("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(n=>console.error("[Vencord] Failed to install React Developer Tools",n))}catch{}let e=(n,s)=>Object.keys(n).find(o=>o.toLowerCase()===s),t=n=>{let s={};return n.split(";").forEach(o=>{let[a,...l]=o.trim().split(/\s+/g);a&&!Object.prototype.hasOwnProperty.call(s,a)&&(s[a]=l)}),s},r=n=>Object.entries(n).filter(([,s])=>s?.length).map(s=>s.flat().join(" ")).join("; "),i=n=>{let s=e(n,"content-security-policy");if(s){let o=t(n[s][0]);for(let a of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[a]??=[],o[a].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),n[s]=[r(o)]}};te.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:n,resourceType:s},o)=>{if(n&&(s==="mainFrame"&&i(n),s==="stylesheet")){let a=e(n,"content-type");a&&(n[a]=["text/css"])}o({cancel:!1,responseHeaders:n})}),te.session.defaultSession.webRequest.onHeadersReceived=()=>{}});fn();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
