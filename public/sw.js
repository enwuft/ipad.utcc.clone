if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),u={module:{uri:c},exports:i,require:r};s[c]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/UTCC.png",revision:"5b23bce1f5737c016a7aac7439469689"},{url:"/_next/static/MPWLm7SpT1YBQwHAuMaY3/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/MPWLm7SpT1YBQwHAuMaY3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/250-82dcc9cd6b4d39c4.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/363-b5596b48f24833f6.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/468-a63100f22d79184a.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/677-87021a8a113dd07f.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/749-8f4f721a6efefa62.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/8627a13e-6e09b6603e6dea52.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/(auth)/auth/layout-aa7458f2fc3c7d00.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/(auth)/auth/staff/page-a73c57e19aee070b.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/(auth)/auth/student/page-aed7f4b50bae6830.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/Q&A/page-a9fc0d5e8c77ca28.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/_not-found-cfc8cbbd3d5dfa99.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/error-5bcffe13930f5648.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/global-error-9f1e1674e6d3f908.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/layout-35e0c56939e8812c.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/loading-e0fbc8716606d1f5.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/page-93126c35f49e57d4.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/post/page-31bab2574eb81f6b.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/privacy/page-4424e58a9ddbe2b7.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/app/teams/page-235231a6a4fdc4da.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/fd9d1056-f905aa91c1b4aa25.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/main-80f62775afc48587.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/main-app-0229007d84ab722f.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-dd3437ca17b54efc.js",revision:"MPWLm7SpT1YBQwHAuMaY3"},{url:"/_next/static/css/822044fbd522ec50.css",revision:"822044fbd522ec50"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/bg.jpeg",revision:"0a3849fe8bb610e983c4315eeb8327f6"},{url:"/favicon.ico",revision:"8f7123c92d44e8f24a2c73a882fc7eb3"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
