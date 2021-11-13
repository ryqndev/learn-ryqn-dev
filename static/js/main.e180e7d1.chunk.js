(this["webpackJsonplearn-ryqn-dev"]=this["webpackJsonplearn-ryqn-dev"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},237:function(e,t,n){var a={"./api-call-introduction/README.md":[246,3],"./intro-to-web-dev/README.md":[247,4],"./learning-about-http-requests/README.md":[248,5],"./list-of-web-dev-tools/README.md":[249,6],"./making-a-theme-switcher/README.md":[250,7],"./setting-up-react/README.md":[251,8],"./starting-out-with-flask/README.md":[252,9],"./starting-out-with-react/README.md":[253,10]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=237,e.exports=c},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var a,c,r=n(3),s=n.n(r),i=n(33),o=n.n(i),l=n(11),d=n(87),h=n(0),u=function(e){var t=e.value;return Object(h.jsxs)("div",{className:"file-structure--display",children:[Object(h.jsx)("h3",{children:"File Structure"}),t]})},j=(n(110),n(111),n(69),n(112),n(70),function(e){var t=e.language,n=e.node,a=e.value;if(!t)return Object(h.jsx)("p",{className:"list-item__indent",children:a});if("file"===t)return Object(h.jsx)(u,{value:a});var c={mode:t,theme:"material-palenight",lineNumbers:!0,viewportMargin:1/0};return"html"===c.mode&&(c.mode="htmlmixed",c.tabSize=2),"bash"===c.mode&&(c.lineNumbers=!1,c.readOnly=!0,c.mode="shell"),Object(h.jsxs)("div",{className:"md-render--code",children:[Object(h.jsxs)("div",{className:"title-bar",children:[Object(h.jsxs)("svg",{height:"44px",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("circle",{cx:"25px",cy:"22px",r:"6.5px",fill:"red"}),Object(h.jsx)("circle",{cx:"48px",cy:"22px",r:"6.5px",fill:"yellow"}),Object(h.jsx)("circle",{cx:"71px",cy:"22px",r:"6.5px",fill:"green"})]}),Object(h.jsx)("h3",{children:null===n||void 0===n?void 0:n.meta})]}),Object(h.jsx)("div",{className:"code-mirror--wrapper",children:Object(h.jsx)(d.UnControlled,{value:a,options:c,onChange:function(e,t,n){}})})]})}),b=(n(114),j),m=function(){return Object(h.jsxs)("footer",{className:"f-w",children:[Object(h.jsx)("div",{className:"f-bg",children:"ryan yang"}),Object(h.jsxs)("div",{className:"made-with",children:["Made with ",Object(h.jsx)("span",{role:"img","aria-label":"love",children:"\u2764\ufe0f"})," in irvine on sbux ",Object(h.jsx)("span",{role:"img","aria-label":"coffee",children:"\u2615"})," & boba"]})]})},p=(n(115),m),f=n(103),O=n(62),x=function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-80,behavior:"smooth"})},v=function(e){var t=e.ordered,n=e.children,a=Object(f.a)(e,["ordered","children"]),c=function(e){var t,n,a,c,r,s;return null===(t=e.children)||void 0===t||null===(n=t[0])||void 0===n||null===(a=n.children)||void 0===a||null===(c=a[0])||void 0===c||null===(r=c.children)||void 0===r||null===(s=r[0])||void 0===s?void 0:s.value},r=Object(l.g)().pathname+n[0].props.href;return n.length>1?Object(h.jsxs)("li",{children:["\xa0".repeat(t?6:0),Object(h.jsxs)("ol",{children:[Object(h.jsx)(O.a,{smooth:!0,to:r,scroll:function(e){return x(e)},children:Object(h.jsxs)("li",{children:["\xa0".repeat(t?6:0),Object(h.jsx)("span",{children:"\u2022"}),"\xa0".repeat(6),Object(h.jsx)("span",{className:"text",children:c(a.node)})]})}),n.slice(1)]})]}):Object(h.jsx)(O.a,{smooth:!0,to:r,scroll:function(e){return x(e)},children:Object(h.jsxs)("li",{children:["\xa0".repeat(t?6:0),Object(h.jsx)("span",{children:"\u2022"}),"\xa0".repeat(6),Object(h.jsx)("span",{className:"text",children:c(a.node)})]})})},g=function(e){var t=e.node.children[0].value,n=t.split(" ").join("-").toLowerCase();switch(null===e||void 0===e?void 0:e.level){case 1:return document.title=t,Object(h.jsxs)("header",{className:"article--header",children:[Object(h.jsx)("h1",{className:"md-render--header",id:n,children:t}),Object(h.jsxs)("p",{children:["by ",Object(h.jsx)("a",{href:"https://ryqn.dev/",children:"Ryan Yang"})]})]});case 2:return Object(h.jsx)("h2",{className:"md-render--header",id:n,children:t});case 3:return Object(h.jsx)("h3",{className:"md-render--header",id:n,children:t});default:return Object(h.jsx)("h4",{className:"md-render--header",id:n,children:t})}},w=(n(123),g),k=n(8),N={code:b,blockquote:function(e){var t=e.children;return Object(h.jsx)("div",{className:"md-blockquote",children:t})},emphasis:function(e){var t=e.children;return Object(h.jsx)("span",{className:"italicize",children:t})},heading:w,inlineCode:function(e){var t=e.children;return Object(h.jsx)("span",{className:"md-render--inline-code",children:t})},list:function(e){var t=e.children;return Object(h.jsx)("ol",{children:t})},listItem:v,link:function(e){var t=e.href,n=e.children;return"./"===t.substring(0,2)?Object(h.jsx)(k.b,{to:t,children:n}):Object(h.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n})},table:function(e){var t=e.children;return Object(h.jsx)("div",{className:"md-render--table",children:Object(h.jsx)("table",{children:t})})}},y=(n(124),N),E=n(28),S=n(89),F=n.n(S),C=[n(90),n(91)],D=function(e){localStorage.setItem("theme",e);var t=C[e].themeStyles;for(var n in t)document.documentElement.style.setProperty(n,t[n])},I=function(){return isNaN(Number(localStorage.getItem("theme")))?1:Number(localStorage.getItem("theme"))};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function A(e,t){var n=e.title,s=e.titleId,i=L(e,["title","titleId"]);return r.createElement("svg",T({width:320,height:320,viewBox:"0 0 320 320",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},i),n?r.createElement("title",{id:s},n):null,a||(a=r.createElement("g",{filter:"url(#filter0_d)"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M160 310C242.843 310 310 242.843 310 160C310 77.1573 242.843 10 160 10C77.1573 10 10 77.1573 10 160C10 242.843 77.1573 310 160 310ZM160 275C223.513 275 275 223.513 275 160C275 96.4873 223.513 45 160 45C96.4873 45 45 96.4873 45 160C45 223.513 96.4873 275 160 275Z",fill:"url(#paint0_linear)"}))),c||(c=r.createElement("defs",null,r.createElement("filter",{id:"filter0_d",x:0,y:0,width:320,height:320,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},r.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),r.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),r.createElement("feOffset",null),r.createElement("feGaussianBlur",{stdDeviation:5}),r.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"}),r.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),r.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})),r.createElement("linearGradient",{id:"paint0_linear",x1:1.49999,y1:-.499992,x2:310,y2:350,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#FF00FF"}),r.createElement("stop",{offset:1,stopColor:"#5500FF"})))))}var B=r.forwardRef(A),M=(n.p,function(){var e=Object(r.useState)(I()),t=Object(E.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){D(n)}),[n]),Object(h.jsxs)("nav",{children:[Object(h.jsx)(k.b,{to:"/",children:Object(h.jsx)(B,{})}),Object(h.jsx)(k.b,{to:"/",className:"name",children:"learn.ryqn.dev"}),Object(h.jsx)("label",{className:"t-w",children:Object(h.jsx)(F.a,{checked:1===n,icons:!1,onChange:function(){a(1===n?0:1)}})})]})}),_=(n(129),M),P=function(e){var t=e.className,n=void 0===t?"":t;return Object(h.jsxs)("div",{className:"scrollable-notice--wrapper ".concat(n),children:[Object(h.jsx)("div",{className:"mouse",children:Object(h.jsx)("div",{className:"wheel"})}),Object(h.jsxs)("div",{className:"icon-arrows",children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]})]})},R=(n(130),P),q=function(){return Object(h.jsx)("div",{className:"spinner--wrapper",children:Object(h.jsxs)("div",{className:"lds-ellipsis",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})},H=(n(131),q),J=function(e){var t=e.steps,n=e.className,a=void 0===n?"":n,c=function(e){return e.split(" ").join("-").toLowerCase()},s=Object(r.useState)(window.screen.width),i=Object(E.a)(s,2),o=(i[0],i[1]);return Object(r.useEffect)((function(){var e=function(){o(window.screen.width)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(h.jsx)("div",{className:"stepper--wrapper "+a,children:Object(h.jsx)("div",{className:"row",children:t.map((function(e,n){var a=e.title,r=e.status,s=e.content;return Object(h.jsx)("div",{className:"step--inline "+c(r),children:Object(h.jsxs)("div",{className:"step",children:[Object(h.jsx)("div",{className:"circle "+c(r)}),Object(h.jsxs)("span",{children:["0",n+1]}),Object(h.jsx)("h3",{children:a}),Object(h.jsx)("div",{className:"status",children:Object(h.jsx)("div",{children:r})}),n!==t.length-1&&Object(h.jsx)("svg",{className:"chart",height:"100%",width:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:Object(h.jsx)("line",{x1:"50%",y1:"0",x2:"50%",y2:"100%",strokeWidth:"10"})}),Object(h.jsx)("p",{children:s})]})},a)}))})})},G=(n(132),J),W=function(e){var t=e.content;return Object(h.jsx)("div",{className:"item",children:t})},U=function(e){var t=e.tags,n=void 0===t?[]:t;return Object(h.jsx)("div",{className:"tags-list--wrapper",children:n.map((function(e){var t;return Object(h.jsx)(W,{content:e},null!==(t=null===e||void 0===e?void 0:e.content)&&void 0!==t?t:e)}))})},K=(n(133),U),z=n(261),Y=n(259),V=n(15),Z=n(92),X=function(e){var t=e.link,n=e.title,a=e.content,c=e.tags,r=e.date;return Object(h.jsxs)(k.b,{to:t,className:"item",children:[Object(h.jsx)("h2",{children:n}),Object(h.jsx)("span",{className:"date",children:new Date(r.updated).toDateString().substr(4)}),Object(h.jsx)("p",{children:a}),Object(h.jsx)(K,{tags:c})]})},$=function(){return Object(r.useEffect)((function(){document.title="Articles"}),[]),Object(h.jsx)("div",{className:"article-list--wrapper page__component",children:Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{children:"Articles List"}),Object(h.jsx)("div",{className:"list",children:Z.map((function(e){return Object(h.jsx)(X,Object(V.a)({},e),e.link)}))})]})})},Q=(n(134),$),ee=function(){return Object(r.useEffect)((function(){document.title="Learn"}),[]),Object(h.jsx)("div",{className:"home--wrapper",children:Object(h.jsx)(k.b,{to:"/articles",children:Object(h.jsx)("button",{className:"cta--btn",children:"EXPLORE"})})})},te=(n(135),ee),ne=n(93),ae=n.n(ne),ce=n(94),re=n.n(ce),se=function(){var e=Object(l.h)().lessonName,t=Object(r.useState)(null),a=Object(E.a)(t,2),c=a[0],s=a[1];Object(r.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"}),n(237)("./".concat(e,"/README.md")).then((function(e){fetch(e.default).then((function(e){return e.text()})).then(s)}))}),[e]);return null===c?Object(h.jsx)(H,{}):Object(h.jsx)("div",{className:"lesson-wrapper page__component",children:Object(h.jsx)("article",{className:"md-renderer",children:Object(h.jsx)(ae.a,{plugins:[re.a],renderers:Object(V.a)({},y),transformLinkUri:null,transformImageUri:function(t){return"https://cdn.jsdelivr.net/gh/ryqndev/learn-ryqn-dev@main/src/content/".concat(e).concat(t.substr(1))},children:c})})})},ie=(n(238),se),oe=function(){var e=Object(l.i)().url;return Object(r.useEffect)((function(){document.title="Learn"}),[]),Object(h.jsx)("div",{className:"template-about--wrapper",children:Object(h.jsxs)("div",{className:"page__component",children:[Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Templates"}),Object(h.jsx)("p",{children:"This is a templating tool that will set up a web app boilerplate with your preferred languages. Not limited to but made for beginner hackathons in mind. The documentation provided is also written in the perspective for those starting out web development for the first time."}),Object(h.jsx)(R,{className:"hero"})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"Why do I need this tool?"}),Object(h.jsx)("p",{className:"description",children:"Web development has become extremely versatile in recent years. Improvements to technology have driven huge innovations to the web and allow developers the freedom to create whatever they want. However, these benefits do not come without cost. For every new application, there exists a new technology - to use machine learning, we can run a python server - to write a 2d multiplayer game, we can use the HTML canvas element with websockets in the backend - to make a dashboard with multiple updating components, we can use a front-end component-based framework like React or Vue - etc... "}),Object(h.jsxs)("p",{className:"description",children:[Object(h.jsx)("span",{children:"tl;dr "})," every new idea yields a brand new library / language / framework that can execute it better than existing solutions and ... now we have so many tools available, it's easy to get lost. Here, you'll answer 2-3 questions about your web-app and I'll provide a starting template as well as documentation for you to get started. "]})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"What do I need to know beforehand?"}),Object(h.jsx)("p",{className:"description",children:"The first thing you'll be asked is if you need a backend. This is a pretty loaded question and to know if you need a backend, ask yourself these questions:"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Do I need to call an API(with a secret API key)?"}),Object(h.jsx)("li",{children:"Do I need a database?"}),Object(h.jsx)("li",{children:"Do I want to have users login / save unique user data?"}),Object(h.jsx)("li",{children:"Do I need users to interact with each other?"}),Object(h.jsx)("li",{children:"Do I need to sync user data?"})]}),Object(h.jsx)("p",{className:"description",children:"If you answered 'yes' to any of the above, you will likely need a backend. If your use case is simple or you prefer not having to worry about a backend, you can use a BaaS (Backend as a Service) like Firebase but otherwise, you'll likely answer yes to the first question."}),Object(h.jsx)("h3",{children:"Backend Language"}),Object(h.jsxs)("p",{className:"description",children:["If you choose to have a backend, you will need to select a language to write it in. The first and most important point to consider is to pick the correct tool for the job. If your app requires some machine learning like image recognition or NLP, you will probably want to go for Python since it is one of the ",Object(h.jsx)("a",{href:"https://github.blog/2019-01-24-the-state-of-the-octoverse-machine-learning/",target:"_blank",rel:"noopener noreferrer",children:"most popular"})," and supported language for this type of work."]}),Object(h.jsx)("p",{className:"description",children:"The other thing to consider is which language you are most comfortable with. If you've only written Java before, you should go for Java as your server side language of choice. Since most of your core algorithms/business logic will be run on the server-side, it's best that you're in a comfortable environment where you're focused on solving problems with your code, rather than in your code."}),Object(h.jsx)("h3",{children:"Frontend"}),Object(h.jsx)("p",{className:"description",children:'There are no "language" options for the frontend. Every webpage is written in HTML, styled with CSS, and executes Javascript. Your choice, however, lies in frameworks. Frameworks often look like a language themselves considering how unique each one works but the idea behind them are the same. If you are new to web development, it is highly recommended that you pick "vanilla" (no framework) so you can learn the ropes and learn later on what these frameworks are doing for you. Eventually, you\'ll want to use one of the many frameworks available if you\'re developing a mid to large sized project.'}),Object(h.jsxs)("p",{className:"description",children:["With these things in mind, ",Object(h.jsx)("span",{children:"let's get started!"})]})]}),Object(h.jsx)(k.b,{to:"".concat(e,"/create"),children:Object(h.jsx)("button",{children:"START"})})]})})},le=(n(239),oe),de=n(258),he=n(260),ue=function(e){var t=e.formData,n=e.setFormData,a=e.send,c=(e.back,null===t||void 0===t?void 0:t.hasBackend),r=function(e){n(Object(V.a)(Object(V.a)({},t),{},{hasBackend:e}))};return Object(h.jsxs)("div",{className:"template--form-item",children:[Object(h.jsx)("h1",{children:"Backend"}),Object(h.jsxs)("div",{className:"backend--select",children:[Object(h.jsxs)("button",{className:"option ".concat(c&&"selected"),onClick:function(){r(!0)},children:[Object(h.jsx)("h2",{children:"Yes, I need a backend"}),Object(h.jsx)("p",{children:"This will set up a backend server in your preferred language"})]}),Object(h.jsxs)("button",{className:"option ".concat(!1===c&&"selected"),onClick:function(){r(!1)},children:[Object(h.jsx)("h2",{children:"No, I do not need a backend"}),Object(h.jsx)("p",{children:"This will create a frontend folder only. However, you can still opt for a BaaS like Firebase if you want."})]})]}),Object(h.jsxs)("div",{className:"nav-button--grid",children:[Object(h.jsx)("button",{className:"prev",disabled:!0,children:"Prev"}),"/",Object(h.jsx)("button",{className:"next",disabled:null===t.hasBackend,onClick:function(){return a((null===t||void 0===t?void 0:t.hasBackend)?"ADD_BACKEND":"NO_BACKEND")},children:"Next"})]})]})},je=function(e){var t=e.formData,n=e.setFormData,a=e.send,c=e.back,r=function(e,a){n(Object(V.a)(Object(V.a)({},t),{},{backendLanguage:e,backendLink:a}))};return Object(h.jsxs)("div",{className:"template--form-item",children:[Object(h.jsx)("h1",{children:"Backend (Language)"}),Object(h.jsxs)("div",{className:"backend-language--select",children:[Object(h.jsxs)("button",{className:"option ".concat("flask"===(null===t||void 0===t?void 0:t.backendLink)&&"selected"),onClick:function(){r("Python (Flask)","flask")},children:[Object(h.jsx)("h2",{children:"Python (Flask)"}),Object(h.jsx)("p",{children:"Recommended"})]}),Object(h.jsxs)("button",{className:"option ".concat("node"===(null===t||void 0===t?void 0:t.backendLink)&&"selected"),onClick:function(){r("Javascript (Node.js/Express)","node")},children:[Object(h.jsx)("h2",{children:"Javascript (Node.js/Express)"}),Object(h.jsx)("p",{children:"Recommended"})]}),Object(h.jsx)("button",{className:"option",disabled:!0,children:Object(h.jsx)("h2",{className:"disabled",children:"More to come..."})})]}),Object(h.jsxs)("div",{className:"nav-button--grid",children:[Object(h.jsx)("button",{className:"prev",onClick:c,children:"Prev"}),"/",Object(h.jsx)("button",{className:"next",disabled:!(null===t||void 0===t?void 0:t.backendLink),onClick:function(){return a("CHOOSE_LANGUAGE")},children:"Next"})]})]})},be=function(e){var t=e.formData,n=e.setFormData,a=e.send,c=e.back,r=function(e,a){n(Object(V.a)(Object(V.a)({},t),{},{frontendFramework:e,frontendLink:a}))};return Object(h.jsxs)("div",{className:"template--form-item",children:[Object(h.jsx)("h1",{children:"Frontend (Framework)"}),Object(h.jsxs)("div",{className:"backend-language--select",children:[Object(h.jsxs)("button",{className:"option ".concat("vanilla"===(null===t||void 0===t?void 0:t.frontendLink)&&"selected"),onClick:function(){r("HTML/CSS/JS (No Framework)","vanilla")},children:[Object(h.jsx)("h2",{children:"HTML/CSS/JS (No Framework)"}),Object(h.jsx)("p",{children:"Recommended for beginners"})]}),Object(h.jsx)("button",{className:"option ".concat("reactjs"===(null===t||void 0===t?void 0:t.frontendLink)&&"selected"),onClick:function(){r("React","reactjs")},children:Object(h.jsx)("h2",{children:"React (with Hooks, not Classes)"})}),Object(h.jsx)("button",{className:"option",disabled:!0,children:Object(h.jsx)("h2",{className:"disabled",children:"More to come..."})})]}),Object(h.jsxs)("div",{className:"nav-button--grid",children:[Object(h.jsx)("button",{className:"prev",onClick:c,children:"Prev"}),"/",Object(h.jsx)("button",{className:"next",disabled:!(null===t||void 0===t?void 0:t.frontendFramework),onClick:function(){return a("FINISH")},children:"Next"})]})]})},me=function(e){var t=e.formData,n=e.back,a="/docs/".concat(t.frontendLink).concat(t.hasBackend?"+"+t.backendLink:""),c=Object(l.f)();return Object(h.jsxs)("div",{className:"template--form-item",children:[Object(h.jsx)("h1",{children:"Your Template"}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsxs)("div",{className:"detail",children:[Object(h.jsx)("h2",{children:"HAS BACKEND?"}),Object(h.jsx)("p",{children:(null===t||void 0===t?void 0:t.hasBackend)?"Yes":"No"})]}),(null===t||void 0===t?void 0:t.hasBackend)&&Object(h.jsxs)("div",{className:"detail",children:[Object(h.jsx)("h2",{children:"BACKEND LANGUAGE"}),Object(h.jsx)("p",{children:null===t||void 0===t?void 0:t.backendLanguage})]}),Object(h.jsxs)("div",{className:"detail",children:[Object(h.jsx)("h2",{children:"FRONTEND FRAMEWORK"}),Object(h.jsx)("p",{children:null===t||void 0===t?void 0:t.frontendFramework})]})]}),Object(h.jsxs)("div",{className:"nav-button--grid",children:[Object(h.jsx)("button",{className:"prev",onClick:n,children:"Prev"}),"/",Object(h.jsx)("button",{className:"start",onClick:function(){c.push(a)},children:"Start >>"})]})]})},pe=function(e){var t=e.formState,n=e.formData,a=e.setFormData,c=e.send,r={send:c,formData:n,setFormData:a,back:function(){return c("BACK")}};switch(t.value){case"add_backend":return Object(h.jsx)(je,Object(V.a)({},r));case"pick_framework":return Object(h.jsx)(be,Object(V.a)({},r));case"finish":return Object(h.jsx)(me,Object(V.a)({},r));case"started":default:return Object(h.jsx)(ue,Object(V.a)({},r))}},fe=n(102),Oe=function(e){var t=e.hasBackend,n=e.backendLanguage,a=e.frontendFramework,c=t?n?"Completed":"In Progress":"N/A",r=a?"Completed":t?n?"In Progress":"Incomplete":null!==t?"In Progress":"Incomplete",s="Completed"===r?"Completed":"Incomplete";return[{title:"Backend",content:null===t?"---":t?"Yes, include backend":"No backend",status:null!==t?"Completed":"In Progress"}].concat(Object(fe.a)(t?[{title:"Backend (Language)",content:null!==n&&void 0!==n?n:"---",status:c}]:[]),[{title:"Frontend (Framework)",content:null!==a&&void 0!==a?a:"---",status:r},{title:"Start Hacking!",content:"",status:s}])},xe=Object(he.a)({id:"templateGenerator",initial:"started",states:{started:{on:{ADD_BACKEND:"add_backend",NO_BACKEND:"pick_framework"}},add_backend:{on:{CHOOSE_LANGUAGE:"pick_framework",BACK:"started"}},pick_framework:{on:{FINISH:"finish",BACK:"started"}},finish:{on:{FINISH:"finish",BACK:"add_backend"}}}}),ve=function(){var e=Object(de.b)(xe),t=Object(E.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({hasBackend:null,backendLanguage:null,frontendFramework:null}),s=Object(E.a)(c,2),i=s[0],o=s[1],l=Oe(i);return Object(h.jsx)("div",{className:"template-generator--wrapper",children:Object(h.jsxs)("div",{className:"layout--split-vertical",children:[Object(h.jsx)(G,{className:"layout-stepper",steps:l}),Object(h.jsx)("div",{className:"selection",children:Object(h.jsx)(Y.a,{classNames:"slide",timeout:350,children:Object(h.jsx)(pe,{formState:n,formData:i,setFormData:o,send:a})},JSON.stringify(i))})]})})},ge=(n(240),n(241),ve),we=function(){var e=Object(l.h)().stack;return console.log("stack:",e),Object(h.jsx)("div",{})},ke=(n(242),we),Ne=(n(243),function(){var e=Object(l.g)(),t=Object(l.i)().path;return Object(r.useEffect)((function(){document.title="Template"}),[]),Object(r.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[e]),Object(h.jsx)(z.a,{children:Object(h.jsx)(Y.a,{classNames:"fade",timeout:350,children:Object(h.jsx)("div",{className:"expandable",children:Object(h.jsxs)(l.c,{location:e,children:[Object(h.jsx)(l.a,{exact:!0,path:"".concat(t),component:le}),Object(h.jsx)(l.a,{exact:!0,path:"".concat(t,"/create"),component:ge}),Object(h.jsx)(l.a,{exact:!0,path:"".concat(t,"/:stack"),component:ke})]})})},e.key)})}),ye=function(){var e=Object(l.g)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{}),Object(h.jsx)(z.a,{children:Object(h.jsx)(Y.a,{classNames:"fast fade",timeout:150,children:Object(h.jsx)("div",{className:"expandable",children:Object(h.jsxs)(l.c,{location:e,children:[Object(h.jsx)(l.a,{exact:!0,strict:!0,path:"/",component:te}),Object(h.jsx)(l.a,{exact:!0,path:"/articles",component:Q}),Object(h.jsx)(l.a,{path:"/template",component:Ne}),Object(h.jsx)(l.a,{exact:!0,path:"/:lessonName",component:ie})]})})},e.pathname)}),Object(h.jsx)(p,{})]})},Ee=(n(244),ye);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=n(65),Fe=n(96),Ce=n(257),De={en:n(97),es:n(98)};Se.a.use(Fe.a).use(Ce.a).init({resources:De,detection:{order:["localStorage","navigator"],lookupLocalStorage:"i18n",caches:["localStorage"],checkWhitelist:!0},lng:"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});Se.a;o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(k.a,{basename:"",children:Object(h.jsx)(Ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e){e.exports=JSON.parse('{"themeName":"Light","themeStyles":{"--dark-mode":"0","--bg-primary":"#FFEEEE","--bg-primary-1":"#FFFFFF","--bg-secondary":"#ff9999","--text-primary":"black","--accent":"#f68080","--header-secondary":"#FFFFFF","--bg-card":"#FFDCDC"}}')},91:function(e){e.exports=JSON.parse('{"themeName":"Dark","themeStyles":{"--dark-mode":"1","--bg-primary":"#191D2A","--bg-primary-1":"#151515","--bg-secondary":"#101010","--text-primary":"white","--accent":"#f68080","--header-secondary":"#f68080","--bg-card":"#292D3E"}}')},92:function(e){e.exports=JSON.parse('[{"link":"/intro-to-web-dev","title":"Intro to Web Dev","content":"Assuming you have no experience with web development, we investigate the languages that make up the web and analyze a basic sample","tags":["HTML","CSS","JS","frontend","web developement"],"date":{"updated":"Wed, 17 Mar 2021 17:54:32 GMT","uploaded":"Wed, 17 Mar 2021 17:54:32 GMT"}},{"link":"/learning-about-http-requests","title":"Learning about HTTP requests","content":"Here, we will take a look at how we are using HTTP requests whenever we browse the internet. Then, we can take a look at API\'s and how we can utilize http requests to call them and test them.","tags":["JS","HTTP requests","API","frontend","web developement"],"date":{"updated":"Thu, 18 Feb 2021 20:56:54 GMT","uploaded":"Thu, 18 Feb 2021 20:45:32 GMT"}},{"link":"/starting-out-with-flask","title":"Starting out with Flask","content":"Explore the Flask framework for Python and understand when we should use it. Then, we\'ll run our own Flask app in under 8 lines of code. Finally, we\'ll take look at the various use cases of Flask and you can decide which way you would prefer to use it.","tags":["Python","Flask","backend","server","web developement"],"date":{"updated":"Thu, 18 Feb 2021 03:43:45 GMT","uploaded":"Wed, 17 Feb 2021 23:08:03 GMT"}},{"link":"/making-a-theme-switcher","title":"Making a dark / light mode theme switcher","content":"Learn how to setup a theme toggler with just CSS and Javascript. We\'ll be using CSS variables and utilizing Javascript functions to swap out styles. Then, we\'ll use Local Storage to save the theme and load it in future use.","tags":["HTML","CSS","JS","CSS Variables","LocalStorage","UI","frontend","web developement"],"date":{"updated":"Tue, 09 Feb 2021 17:33:38 GMT","uploaded":"Tue, 02 Feb 2021 14:16:25 GMT"}}]')},97:function(e){e.exports=JSON.parse('{"translation":{"english":"english"}}')},98:function(e){e.exports=JSON.parse('{"translation":{"english":"ingl\xe9s"}}')}},[[245,1,2]]]);
//# sourceMappingURL=main.e180e7d1.chunk.js.map