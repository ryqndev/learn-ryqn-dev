!function(e,t,n,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i.parcelRequirefeb8&&i.parcelRequirefeb8,f=u.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,n){if(!f[t]){if(!e[t]){var r="function"==typeof i.parcelRequirefeb8&&i.parcelRequirefeb8;if(!n&&r)return r(t,!0);if(u)return u(t,!0);if(s&&"string"==typeof t)return s(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}p.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},p.cache={};var a=f[t]=new l.Module(t);e[t][0].call(a.exports,p,a,a.exports,this)}return f[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:l(t)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=f,l.parent=u,l.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(l,"root",{get:function(){return i.parcelRequirefeb8}}),i.parcelRequirefeb8=l;for(var a=0;a<t.length;a++)l(t[a]);var p=l(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof define&&define.amd&&define((function(){return p}))}({b3siR:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);const r={siteMetadata:{title:"learn.ryqn.dev",siteUrl:"https://www.yourdomain.tld"},graphqlTypegen:!0,plugins:["gatsby-plugin-image","gatsby-plugin-react-helmet","gatsby-plugin-sitemap",{resolve:"gatsby-plugin-manifest",options:{icon:"src/images/icon.png"}},"gatsby-plugin-sharp","gatsby-transformer-sharp",{resolve:"gatsby-source-filesystem",options:{name:"images",path:"./src/images/"},__key:"images"}]};n.default=r},{"@parcel/transformer-js/src/esmodule-helpers.js":"iuhht"}],iuhht:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["b3siR"],"b3siR");