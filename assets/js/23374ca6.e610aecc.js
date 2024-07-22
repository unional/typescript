"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[2278],{369:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||y[g]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(3534),r=(n(7378),n(369));const a={sidebar_position:1},i="Welcome",l={unversionedId:"README",id:"README",title:"Welcome",description:"Welcome to TypeScript Blackbook",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/typescript-blackbook/docs/",draft:!1,editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/docs/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Guidelines",permalink:"/typescript-blackbook/docs/guidelines/"}},p={},c=[],s={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"welcome"},"Welcome"),(0,r.yg)("p",null,"Welcome to TypeScript Blackbook"),(0,r.yg)("p",null,"This book focus on ",(0,r.yg)("em",{parentName:"p"},"how to get the most out of TypeScript with minimal effort"),"."),(0,r.yg)("p",null,"To achieve that goal,\nfollowing some coding styles is a good place to start."),(0,r.yg)("p",null,"However, just following ",(0,r.yg)("em",{parentName:"p"},"what to do")," can only go so far.\nYou need to know ",(0,r.yg)("em",{parentName:"p"},"why")," should you write code in certain way,\n",(0,r.yg)("em",{parentName:"p"},"what")," are the ",(0,r.yg)("em",{parentName:"p"},"trade-offs")," you are making,\nas well as the design and the limitations of the language itself,\nso that you have the right ",(0,r.yg)("em",{parentName:"p"},"mindset")," and ",(0,r.yg)("em",{parentName:"p"},"approach")," the problem and come to a solution effectively."),(0,r.yg)("p",null,"Therefore, this book covers more than just style guide and best practices."),(0,r.yg)("p",null,"It needs to cover everything related to TypeScript in order to achieve that goal."),(0,r.yg)("p",null,"This book is organized into a few sections:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"How to TypeScript: Designs, limitations, and approach"),(0,r.yg)("li",{parentName:"ul"},"TypeScript (and JavaScript) syntax and features"),(0,r.yg)("li",{parentName:"ul"},"Coding Styles and Guidelines"),(0,r.yg)("li",{parentName:"ul"},"Supporting Tools")),(0,r.yg)("p",null,"Learning everything about TypeScript is not easy."),(0,r.yg)("p",null,"The language itself is pretty complex,\nand both TypeScript and JavaScript evolves at a rapid pace.\nSo it can be quite overwhelming if you are just starting out."),(0,r.yg)("p",null,"I would recommend having a quick read through of the ","[How to TypeScript]"," section,\nand then check out the ","[Supporting Tools]"," section to find out how to set up your project,\nand use the rest of the book for reference as you need them."),(0,r.yg)("p",null,"Having that said,\nI'm in the process of updating this book."),(0,r.yg)("p",null,"Most of the information are still in their old format.\nSo please head over to the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/unional/typescript-guidelines"},"GitHub repo")," to look for the original content for the time being."))}y.isMDXComponent=!0}}]);